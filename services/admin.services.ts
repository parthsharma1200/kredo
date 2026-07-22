import { createClient } from "@/lib/supabase/client";

export async function getVerificationQueue() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("Logged in user:", user);

  const { data, error } = await supabase
    .from("achievements")
    .select("*")
    .eq("verification_status", "Pending")
    .order("created_at", { ascending: false });

  console.log("Supabase Error:", error);
  console.log("Queue length:", data?.length);
  console.log("Queue Data:", data);

  if (error) throw error;

  return data ?? [];
}

export async function approveAchievement(
  achievementId: string,
  userId: string
) {
  const supabase = createClient();

  const { data: achievement, error: achievementError } = await supabase
    .from("achievements")
    .select("trust_points")
    .eq("id", achievementId)
    .single();

  if (achievementError) throw achievementError;

  const { error: verifyError } = await supabase
    .from("achievements")
    .update({
      verification_status: "Verified",
    })
    .eq("id", achievementId);

  if (verifyError) throw verifyError;

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("trust_score")
    .eq("id", userId)
    .single();

  if (profileError) throw profileError;

  const { error: updateError } = await supabase
    .from("profiles")
    .update({
      trust_score:
        (profile?.trust_score ?? 0) +
        (achievement?.trust_points ?? 0),
    })
    .eq("id", userId);

  if (updateError) throw updateError;
}

export async function rejectAchievement(
  achievementId: string
) {
  const supabase = createClient();

  const { error } = await supabase
    .from("achievements")
    .update({
      verification_status: "Rejected",
    })
    .eq("id", achievementId);

  if (error) throw error;
}

export async function getAdminStats() {
  const supabase = createClient();

  const [
    pending,
    verified,
    rejected,
    total,
  ] = await Promise.all([
    supabase
      .from("achievements")
      .select("*", { count: "exact", head: true })
      .eq("verification_status", "Pending"),

    supabase
      .from("achievements")
      .select("*", { count: "exact", head: true })
      .eq("verification_status", "Verified"),

    supabase
      .from("achievements")
      .select("*", { count: "exact", head: true })
      .eq("verification_status", "Rejected"),

    supabase
      .from("achievements")
      .select("*", { count: "exact", head: true }),
  ]);

  return {
    pending: pending.count ?? 0,
    verifiedToday: verified.count ?? 0,
    rejected: rejected.count ?? 0,
    reviewed:
      (verified.count ?? 0) + (rejected.count ?? 0),
  };
}