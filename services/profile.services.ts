import { createClient } from "@/lib/supabase/client";

type UpdateProfileData = {
  full_name: string;
  username: string;
  bio: string | null;
  university: string | null;
  degree: string | null;
  graduation_year: number | null;
  location: string | null;
  skills: string[] | null;
};

export async function getProfile(userId: string) {
  const supabase = createClient();

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) throw error;

  return profile;
}

export async function getPublicProfile(username: string) {
  const supabase = createClient();

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("username", username)
    .maybeSingle();

  if (error) throw error;

  return profile;
}

export async function getVerifiedDocuments(username: string) {
  const supabase = createClient();

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("id")
    .eq("username", username)
    .single();

  if (profileError) throw profileError;

  const { data: documents, error } = await supabase
    .from("documents")
    .select(`
  id,
  title,
  document_type,
  verification_status,
  verified_at,
  file_url
`)
    .eq("user_id", profile.id)
    .eq("verification_status", "verified")
    .order("verified_at", {
      ascending: false,
    });

  if (error) throw error;

  return documents ?? [];
}

export async function updateProfile(
  userId: string,
  data: UpdateProfileData
) {
  const supabase = createClient();

  const { data: profile, error } = await supabase
    .from("profiles")
    .update({
      full_name: data.full_name,
      username: data.username,
      bio: data.bio,
      university: data.university,
      degree: data.degree,
      graduation_year: data.graduation_year,
      location: data.location,
      skills: data.skills,
      updated_at: new Date().toISOString(),
    })
    .eq("id", userId)
    .select()
    .single();

  if (error) throw error;

  return profile;
}