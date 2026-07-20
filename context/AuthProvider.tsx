"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from "react";

import { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";

export type UserRole = "student" | "recruiter" | "admin";

export interface UserProfile {
  id: string;
  full_name: string;
  username: string;
  email: string;
  university: string | null;
  degree: string | null;
  location: string | null;
  trust_score: number;
  created_at: string;
  bio: string | null;
  github: string | null;
  linkedin: string | null;
  avatar_url: string | null;
  phone: string | null;
  graduation_year: string | null;
  skills: string[] | null;
  open_to_work: boolean;
  role: UserRole;
  headline: string | null;
}

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  role: UserRole | null;
  loading: boolean;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  role: null,
  loading: true,
  refreshUser: async () => {},
});

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const supabase = createClient();
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [role, setRole] = useState<UserRole | null>(null);
  const [loading, setLoading] = useState(true);

  const loadUser = useCallback(async () => {
    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    setUser(user);

    if (!user) {
      setProfile(null);
      setRole(null);
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    if (error) {
      console.error("Failed to load profile:", error);
      setProfile(null);
      setRole(null);
      setLoading(false);
      return;
    }

    const profileData = data as UserProfile;

    setProfile(profileData);
    setRole(profileData.role);

    setLoading(false);
  }, []);

  useEffect(() => {
    loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      loadUser();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [loadUser]);

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        role,
        loading,
        refreshUser: loadUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}