"use client";

import { useEffect, useState } from "react";

import AchievementHeader from "@/components/dashboard/achievements/AchievementHeader";
import AchievementGrid from "@/components/dashboard/achievements/AchievementGrid";
import AddAchievementModal from "@/components/dashboard/achievements/AddAchievementModal";

import { GraduationCap } from "lucide-react";

import { createClient } from "@/lib/supabase/client";
import type { Achievement } from "@/types/achievement";

export default function AchievementPage() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const supabase = createClient();

  useEffect(() => {
    loadAchievements();
  }, []);

  async function loadAchievements() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("achievements")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      setLoading(false);
      return;
    }

    const mappedAchievements: Achievement[] = (data ?? []).map(
      (achievement) => ({
        id: achievement.id,
        title: achievement.title,
        issuer: achievement.organization ?? "",
        category: achievement.category ?? "",
        description: achievement.description ?? "",
        completionDate: achievement.issue_date ?? "",
        file: achievement.evidence_url ?? "No file uploaded",
        status: achievement.verification_status,
        score: `+${achievement.trust_points}`,
        icon: GraduationCap,
      })
    );

    setAchievements(mappedAchievements);
    setLoading(false);
  }

  function handleAddAchievement(newAchievement: Achievement) {
    setAchievements((prev) => [newAchievement, ...prev]);
  }

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center text-lg font-medium text-slate-600">
        Loading achievements...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <AchievementHeader onAddClick={() => setOpen(true)} />

      <AchievementGrid achievements={achievements} />

      <AddAchievementModal
        open={open}
        onClose={() => setOpen(false)}
        onAddAchievement={handleAddAchievement}
      />
    </div>
  );
}