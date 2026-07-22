"use client";

import Card from "../ui/Card";
import {
  CheckCircle2,
  Eye,
  Upload,
  Trophy,
  Clock,
  ArrowUpRight,
} from "lucide-react";

const activities = [
  {
    title: "AWS Cloud Practitioner verified",
    description: "Your certificate has been successfully verified.",
    time: "2 hours ago",
    icon: CheckCircle2,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    title: "Trust Score increased",
    description: "+15 Trust Points earned from verification.",
    time: "Yesterday",
    icon: ArrowUpRight,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Recruiter viewed your profile",
    description: "A recruiter from TechCorp viewed your profile.",
    time: "2 days ago",
    icon: Eye,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Achievement uploaded",
    description: "Campus Ambassador achievement submitted.",
    time: "3 days ago",
    icon: Upload,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    title: "Verification in progress",
    description: "Google Hackathon certificate is under review.",
    time: "5 days ago",
    icon: Clock,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
];

export default function RecentActivity() {
  return (
    <Card className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Recent Activity
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Stay updated with everything happening on your profile.
          </p>
        </div>

        <div className="rounded-xl bg-blue-50 px-4 py-2">
          <p className="text-sm font-semibold text-blue-700">
            {activities.length} Updates
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-[23px] top-0 bottom-0 w-px bg-slate-200" />

        <div className="space-y-8">
          {activities.map((activity) => {
            const Icon = activity.icon;

            return (
              <div
                key={activity.title}
                className="relative flex gap-5"
              >
                <div
                  className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full ${activity.iconBg}`}
                >
                  <Icon
                    className={`h-5 w-5 ${activity.iconColor}`}
                  />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <h3 className="font-semibold text-slate-900">
                      {activity.title}
                    </h3>

                    <span className="text-xs font-medium text-slate-500">
                      {activity.time}
                    </span>
                  </div>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {activity.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-5 text-white">
        <div className="flex items-center gap-3">
          <Trophy className="h-6 w-6" />

          <div>
            <p className="font-semibold">
              Keep building your trust.
            </p>

            <p className="text-sm text-blue-100">
              Every verified achievement increases recruiter confidence.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}