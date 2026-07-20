"use client";

import Card from "@/components/ui/Card";
import type { Profile } from "@/types/profile";

import {
  ShieldCheck,
  TrendingUp,
  BadgeCheck,
  Sparkles,
} from "lucide-react";

type Props = {
  profile: Profile;
};

export default function TrustScoreHero({
  profile,
}: Props) {
  const score = profile.trust_score ?? 0;

  let trustLevel = "Beginner";
  let trustTier = "Bronze";

  if (score >= 80) {
    trustLevel = "Elite";
    trustTier = "Diamond";
  } else if (score >= 60) {
    trustLevel = "Advanced";
    trustTier = "Gold";
  } else if (score >= 40) {
    trustLevel = "Growing";
    trustTier = "Silver";
  }

  return (
    <Card className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 px-8 py-8 text-white shadow-2xl">
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-lg">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-7 w-7" />
            <p className="text-lg font-bold uppercase tracking-[0.30em]">
              Trust Score
            </p>
          </div>

          <div className="mt-7 flex items-end gap-4">
            <h1 className="text-8xl font-black leading-none">
              {score}
            </h1>

            <div className="mb-3 rounded-full bg-white/15 px-3 py-1 text-sm font-semibold backdrop-blur">
              /100
            </div>
          </div>

          <p className="mt-2 text-2xl font-bold">
            {trustLevel}
          </p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Verified Student Profile
          </div>

          <p className="mt-6 max-w-md leading-7 text-blue-100">
            Trust isn't claimed. It's earned through verified education,
            internships, certifications, projects and real-world achievements.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <BadgeCheck className="mb-3 h-6 w-6" />

            <p className="text-3xl font-bold">
              {score}
            </p>

            <p className="mt-1 text-sm text-blue-100">
              Trust Points
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <TrendingUp className="mb-3 h-6 w-6" />

            <p className="text-3xl font-bold">
              +{score}
            </p>

            <p className="mt-1 text-sm text-blue-100">
              Total Earned
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <p className="text-3xl font-bold">
              #{Math.max(1, 100 - score)}
            </p>

            <p className="mt-1 text-sm text-blue-100">
              Student Ranking
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <p className="text-3xl font-bold">
              {trustTier}
            </p>

            <p className="mt-1 text-sm text-blue-100">
              Trust Tier
            </p>
          </div>
        </div>
      </div>

      <div className="relative mt-10">
        <div className="mb-3 flex items-center justify-between text-sm font-semibold">
          <span>Progress to Elite Trust</span>
          <span>{score}/100</span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-white/20">
          <div
            className="h-full rounded-full bg-white transition-all duration-700"
            style={{
              width: `${Math.min(score, 100)}%`,
            }}
          />
        </div>
      </div>
    </Card>
  );
}