import { createClient } from "@/lib/supabase/client";

/* ===========================
   Students
=========================== */

export async function getStudents() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("role", "student")
    .order("trust_score", {
      ascending: false,
    });

  if (error) {
    throw error;
  }

  return data ?? [];
}

/* ===========================
   Saved Candidates
=========================== */

export async function getSavedCandidates() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data, error } = await supabase
    .from("saved_candidates")
    .select(`
      *,
      profiles!saved_candidates_student_id_fkey (
        *
      )
    `)
    .eq("recruiter_id", user.id);

  if (error) throw error;

  return data ?? [];
}

export async function isCandidateSaved(
  studentId: string
) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return false;

  const { data, error } = await supabase
    .from("saved_candidates")
    .select("id")
    .eq("recruiter_id", user.id)
    .eq("student_id", studentId)
    .maybeSingle();

  if (error) throw error;

  return !!data;
}

export async function saveCandidate(
  studentId: string
) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user)
    throw new Error("Not authenticated");

  const { error } = await supabase
    .from("saved_candidates")
    .insert({
      recruiter_id: user.id,
      student_id: studentId,
    });

  if (error) throw error;
}

export async function removeSavedCandidate(
  studentId: string
) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user)
    throw new Error("Not authenticated");

  const { error } = await supabase
    .from("saved_candidates")
    .delete()
    .eq("recruiter_id", user.id)
    .eq("student_id", studentId);

  if (error) throw error;
}