"use client";

import Card from "@/components/ui/Card";
import type { Profile } from "@/types/profile";

import {
  ShieldCheck,
  Sparkles,
  Award,
  Target,
  ArrowUpRight,
} from "lucide-react";

type Props = {
  profile: Profile;
};

export default function TrustScoreHero({ profile }: Props) {
  const score = profile.trust_score ?? 0;

  let trustLevel = "Beginner";
  let trustTier = "Bronze";
  let nextTier = "Silver";
  let nextTarget = 40;

  if (score >= 80) {
    trustLevel = "Elite";
    trustTier = "Diamond";
    nextTier = "Maximum";
    nextTarget = 100;
  } else if (score >= 60) {
    trustLevel = "Advanced";
    trustTier = "Gold";
    nextTier = "Diamond";
    nextTarget = 80;
  } else if (score >= 40) {
    trustLevel = "Growing";
    trustTier = "Silver";
    nextTier = "Gold";
    nextTarget = 60;
  }

  const remaining = Math.max(nextTarget - score, 0);

  return (
    <Card className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-700 to-slate-900 p-8 text-white shadow-2xl">
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between">
        {/* Left */}
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-7 w-7" />

            <span className="text-lg font-bold uppercase tracking-[0.3em]">
              Trust Score
            </span>
          </div>

          <div className="mt-8 flex items-end gap-4">
            <h1 className="text-8xl font-black leading-none">
              {score}
            </h1>

            <span className="mb-3 rounded-full bg-white/15 px-4 py-1 text-sm font-semibold backdrop-blur">
              /100
            </span>
          </div>

          <h2 className="mt-3 text-3xl font-bold">
            {trustLevel}
          </h2>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Verified Student Profile
          </div>

          <p className="mt-6 max-w-lg leading-7 text-blue-100">
            Every verified document, achievement, internship and certificate
            increases your credibility and helps recruiters trust your profile.
          </p>

          <div className="mt-8">
            <div className="mb-3 flex items-center justify-between text-sm font-semibold">
              <span>Progress to {nextTier}</span>

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

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6" />

              <div>
                <p className="font-semibold">
                  Next Goal
                </p>

                <p className="text-sm text-blue-100">
                  Earn{" "}
                  <span className="font-bold text-white">
                    {remaining}
                  </span>{" "}
                  more trust points to unlock{" "}
                  <span className="font-bold text-white">
                    {nextTier}
                  </span>{" "}
                  Tier.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="grid w-full max-w-md grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
            <Award className="mb-3 h-6 w-6" />

            <p className="text-3xl font-bold">
              {trustTier}
            </p>

            <p className="mt-1 text-sm text-blue-100">
              Trust Tier
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
            <ArrowUpRight className="mb-3 h-6 w-6" />

            <p className="text-3xl font-bold">
              {score >= 80
                ? "Excellent"
                : score >= 60
                ? "Strong"
                : score >= 40
                ? "Growing"
                : "Starter"}
            </p>

            <p className="mt-1 text-sm text-blue-100">
              Profile Strength
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
            <ShieldCheck className="mb-3 h-6 w-6" />

            <p className="text-3xl font-bold">
              {score}%
            </p>

            <p className="mt-1 text-sm text-blue-100">
              Verification Confidence
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
            <Target className="mb-3 h-6 w-6" />

            <p className="text-3xl font-bold">
              {nextTarget}
            </p>

            <p className="mt-1 text-sm text-blue-100">
              Next Milestone
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}