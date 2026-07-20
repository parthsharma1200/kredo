"use client";

import Card from "../ui/Card";
import { Sparkles, ArrowRight } from "lucide-react";

import { useProfile } from "@/hooks/useProfile";
import { useDashboard } from "@/hooks/useDashboard";

export default function AISuggestions() {
  const { profile } = useProfile();
  const { data: dashboard } = useDashboard();

  const suggestions = [];

  if (!profile?.linkedin) {
    suggestions.push({
      title: "Connect your LinkedIn profile",
      points: "+10 Trust Score",
    });
  }

  if (!profile?.github) {
    suggestions.push({
      title: "Connect your GitHub profile",
      points: "+8 Trust Score",
    });
  }

  if (!profile?.bio) {
    suggestions.push({
      title: "Complete your bio",
      points: "+5 Trust Score",
    });
  }

  if (!profile?.phone) {
    suggestions.push({
      title: "Add your phone number",
      points: "+3 Trust Score",
    });
  }

  if ((dashboard?.verified ?? 0) < 3) {
    suggestions.push({
      title: "Verify more achievements",
      points: "+15 Trust Score",
    });
  }

  if ((dashboard?.evidence ?? 0) < (dashboard?.achievements ?? 0)) {
    suggestions.push({
      title: "Upload evidence for pending achievements",
      points: "+12 Trust Score",
    });
  }

  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center gap-3">

        <Sparkles className="h-6 w-6 text-blue-600" />

        <div>

          <h2 className="text-xl font-semibold text-gray-900">
            AI Suggestions
          </h2>

          <p className="text-sm text-gray-500">
            Personalized ways to improve your Trust Score
          </p>

        </div>

      </div>

      {suggestions.length === 0 ? (
        <div className="rounded-2xl border border-green-200 bg-green-50 p-6 text-center">

          <h3 className="text-lg font-bold text-green-700">
            🎉 Excellent Work!
          </h3>

          <p className="mt-2 text-green-600">
            Your profile is well optimized. Keep earning verified achievements to increase your Trust Score.
          </p>

        </div>
      ) : (
        <div className="space-y-4">

          {suggestions.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between rounded-xl border border-blue-100 bg-blue-50 p-4 transition hover:bg-blue-100"
            >
              <div>

                <h3 className="font-medium text-gray-900">
                  {item.title}
                </h3>

                <p className="text-sm font-medium text-blue-600">
                  {item.points}
                </p>

              </div>

              <ArrowRight className="h-5 w-5 text-blue-600" />

            </div>
          ))}

        </div>
      )}
    </Card>
  );
}