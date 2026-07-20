import { createClient } from "@/lib/supabase/client";

export async function getPublicAchievements(userId: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("achievements")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
}