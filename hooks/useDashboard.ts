"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

import type { DashboardData } from "@/types/dashboard";

export function useDashboard() {
  const supabase = createClient();

  const [loading, setLoading] = useState(true);

  const [data, setData] = useState<DashboardData>({
    trustScore: 0,
    achievements: 0,
    verified: 0,
    pending: 0,
    evidence: 0,
    completion: 0,
  });

  useEffect(() => {
    async function loadDashboard() {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
          setLoading(false);
          return;
        }

        // Profile
        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (profileError) throw profileError;

        // Documents
        const { data: documents, error: documentsError } = await supabase
          .from("documents")
          .select("verification_status")
          .eq("user_id", user.id);

        if (documentsError) throw documentsError;

        const achievements = documents?.length ?? 0;

        const verified =
          documents?.filter(
            (doc) => doc.verification_status === "verified"
          ).length ?? 0;

        const pending =
          documents?.filter(
            (doc) => doc.verification_status === "pending"
          ).length ?? 0;

        const evidence = achievements;

        const fields = [
          profile?.full_name,
          profile?.username,
          profile?.email,
          profile?.university,
          profile?.degree,
          profile?.location,
          profile?.bio,
          profile?.phone,
          profile?.graduation_year,
          profile?.skills?.length,
        ];

        const completed = fields.filter(Boolean).length;

        const completion = Math.round(
          (completed / fields.length) * 100
        );

        setData({
          trustScore: profile?.trust_score ?? 0,
          achievements,
          verified,
          pending,
          evidence,
          completion,
        });
      } catch (error) {
        console.error("Dashboard Error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  return {
    data,
    loading,
  };
}