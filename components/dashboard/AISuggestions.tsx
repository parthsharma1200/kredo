"use client";

import Card from "../ui/Card";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Target,
} from "lucide-react";

import { useProfile } from "@/hooks/useProfile";
import { useDashboard } from "@/hooks/useDashboard";

export default function AISuggestions() {
  const { profile } = useProfile();
  const { data: dashboard } = useDashboard();

  const suggestions = [];

  if (!profile?.linkedin) {
    suggestions.push({
      title: "Connect LinkedIn",
      description:
        "Increase recruiter credibility by linking your professional profile.",
      points: "+10",
    });
  }

  if (!profile?.github) {
    suggestions.push({
      title: "Connect GitHub",
      description:
        "Showcase your coding projects and technical skills.",
      points: "+8",
    });
  }

  if (!profile?.bio) {
    suggestions.push({
      title: "Complete your Bio",
      description:
        "Tell recruiters about yourself in a few sentences.",
      points: "+5",
    });
  }

  if (!profile?.phone) {
    suggestions.push({
      title: "Add Phone Number",
      description:
        "Help recruiters contact you directly.",
      points: "+3",
    });
  }

  if ((dashboard?.verified ?? 0) < 3) {
    suggestions.push({
      title: "Verify More Achievements",
      description:
        "Verified achievements have the biggest impact on Trust Score.",
      points: "+15",
    });
  }

  if ((dashboard?.evidence ?? 0) < (dashboard?.achievements ?? 0)) {
    suggestions.push({
      title: "Upload Missing Evidence",
      description:
        "Some achievements are waiting for supporting documents.",
      points: "+12",
    });
  }

  return (
    <Card className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-3 text-white">
            <Sparkles className="h-6 w-6" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              AI Recommendations
            </h2>

            <p className="text-sm text-slate-500">
              Personalized suggestions to grow your Trust Score.
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-blue-50 px-4 py-2">
          <p className="text-sm font-semibold text-blue-700">
            {suggestions.length} Actions
          </p>
        </div>
      </div>

      {suggestions.length === 0 ? (
        <div className="rounded-3xl border border-green-200 bg-green-50 p-8 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />

          <h3 className="mt-4 text-2xl font-bold text-green-700">
            Excellent Profile 🎉
          </h3>

          <p className="mt-3 text-green-700">
            Your profile is highly optimized. Continue earning verified
            achievements to reach the Diamond Trust Tier.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {suggestions.map((item) => (
            <div
              key={item.title}
              className="group flex items-center justify-between rounded-2xl border border-slate-200 p-5 transition-all duration-200 hover:border-blue-300 hover:bg-blue-50"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-blue-100 p-3">
                  <Target className="h-5 w-5 text-blue-600" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-3 inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                    Earn {item.points} Trust Points
                  </div>
                </div>
              </div>

              <ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600" />
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}