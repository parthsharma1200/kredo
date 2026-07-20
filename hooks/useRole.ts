"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export type UserRole =
  | "student"
  | "recruiter"
  | "admin";

export function useRole() {
  const supabase = createClient();

  const [role, setRole] =
    useState<UserRole | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadRole() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      if (error) {
        console.error(error);
        setLoading(false);
        return;
      }

      setRole(
        (data?.role as UserRole) ?? "student"
      );

      setLoading(false);
    }

    loadRole();
  }, []);

  return {
    role,
    loading,
  };
}