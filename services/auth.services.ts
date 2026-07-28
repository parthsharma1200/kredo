import { createClient } from "@/lib/supabase/client";

export async function signIn(
  email: string,
  password: string
) {
  const supabase = createClient();

  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
}

export async function signUp(
  email: string,
  password: string,
  fullName: string,
  role: "student" | "recruiter"
) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return { data, error };
  }

  if (data.user) {
    const username = email.split("@")[0];

    const { error: profileError } = await supabase
      .from("profiles")
      .insert({
        id: data.user.id,
        email,
        full_name: fullName,
        username,
        role,
        trust_score: 0,
        open_to_work: role === "student",
      });

    if (profileError) {
      return {
        data,
        error: profileError,
      };
    }
  }

  return {
    data,
    error: null,
  };
}

export async function signOut() {
  const supabase = createClient();

  return await supabase.auth.signOut();
}

export async function getCurrentUser() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

export async function getCurrentSession() {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return session;
}

export async function getUserRole(userId: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", userId)
    .single();

  if (error) {
    throw error;
  }

  return data.role;
}