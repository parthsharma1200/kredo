"use client";

import Card from "../ui/Card";
import {
  CheckCircle2,
  Circle,
  Trophy,
  Target,
} from "lucide-react";

import { useProfile } from "@/hooks/useProfile";
import { useDashboard } from "@/hooks/useDashboard";

export default function ProfileCompletion() {
  const { profile } = useProfile();
  const { data: dashboard } = useDashboard();

  const tasks = [
    {
      title: "Complete Bio",
      completed: !!profile?.bio,
    },
    {
      title: "Add Phone Number",
      completed: !!profile?.phone,
    },
    {
      title: "Add Degree",
      completed: !!profile?.degree,
    },
    {
      title: "Connect GitHub",
      completed: !!profile?.github,
    },
    {
      title: "Connect LinkedIn",
      completed: !!profile?.linkedin,
    },
    {
      title: "Add Skills",
      completed: (profile?.skills?.length ?? 0) > 0,
    },
    {
      title: "Upload Achievement",
      completed: (dashboard?.achievements ?? 0) > 0,
    },
    {
      title: "Get First Verification",
      completed: (dashboard?.verified ?? 0) > 0,
    },
  ];

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const progress = Math.round(
    (completedTasks / tasks.length) * 100
  );

  let status = "Getting Started";
  let color = "text-orange-600";

  if (progress >= 80) {
    status = "Excellent";
    color = "text-green-600";
  } else if (progress >= 60) {
    status = "Good Progress";
    color = "text-blue-600";
  }

  return (
    <Card className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Profile Completion
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Complete every section to maximize recruiter trust.
          </p>
        </div>

        <div className="rounded-2xl bg-blue-50 p-3">
          <Trophy className="h-7 w-7 text-blue-600" />
        </div>
      </div>

      <div className="mt-8">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-medium text-slate-700">
            Overall Progress
          </span>

          <span className="text-2xl font-bold text-blue-600">
            {progress}%
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-700"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <p className={`mt-3 text-sm font-semibold ${color}`}>
          {status}
        </p>
      </div>

      <div className="mt-8 space-y-4">
        {tasks.map((task) => (
          <div
            key={task.title}
            className="flex items-center justify-between rounded-2xl border border-slate-100 p-4"
          >
            <div className="flex items-center gap-3">
              {task.completed ? (
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              ) : (
                <Circle className="h-5 w-5 text-slate-300" />
              )}

              <span
                className={
                  task.completed
                    ? "text-slate-500"
                    : "font-medium text-slate-800"
                }
              >
                {task.title}
              </span>
            </div>

            {task.completed && (
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                Done
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-5 text-white">
        <div className="flex items-start gap-3">
          <Target className="mt-1 h-6 w-6" />

          <div>
            <p className="font-semibold">
              Next Goal
            </p>

            <p className="mt-1 text-sm text-blue-100">
              Complete your remaining profile sections and verify more achievements to unlock higher Trust Tiers.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}