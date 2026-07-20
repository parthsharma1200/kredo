"use client";

import Card from "../ui/Card";
import { CheckCircle, Circle } from "lucide-react";

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
      title: "Get Verified Achievement",
      completed: (dashboard?.verified ?? 0) > 0,
    },
  ];

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const progress = Math.round(
    (completedTasks / tasks.length) * 100
  );

  return (
    <Card className="p-6">

      <h2 className="text-xl font-semibold text-gray-900">
        Profile Completion
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        Complete your profile to increase recruiter trust.
      </p>

      <div className="mt-6 space-y-4">

        {tasks.map((task) => (
          <div
            key={task.title}
            className="flex items-center gap-3"
          >
            {task.completed ? (
              <CheckCircle className="h-5 w-5 text-green-500" />
            ) : (
              <Circle className="h-5 w-5 text-gray-300" />
            )}

            <span
              className={
                task.completed
                  ? "text-gray-500"
                  : "text-gray-700"
              }
            >
              {task.title}
            </span>
          </div>
        ))}

      </div>

      <div className="mt-6 flex items-center justify-between">

        <span className="text-sm text-gray-600">
          {completedTasks} of {tasks.length} completed
        </span>

        <span className="font-semibold text-blue-600">
          {progress}%
        </span>

      </div>

      <div className="mt-3 h-2 w-full rounded-full bg-gray-200">

        <div
          className="h-2 rounded-full bg-blue-600 transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </Card>
  );
}