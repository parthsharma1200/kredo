// components/dashboard/RecentActivityCard.tsx

import Card from "../ui/Card";
import {
  ShieldCheck,
  FileCheck,
  Eye,
  TrendingUp,
} from "lucide-react";

const activities = [
  {
    icon: ShieldCheck,
    color: "text-green-600",
    bg: "bg-green-100",
    title: "Achievement Verified",
    description: "Microsoft Internship was verified",
  },
  {
    icon: TrendingUp,
    color: "text-blue-600",
    bg: "bg-blue-100",
    title: "Trust Score Increased",
    description: "+8 points added to your profile",
  },
  {
    icon: Eye,
    color: "text-purple-600",
    bg: "bg-purple-100",
    title: "Recruiter Viewed Profile",
    description: "An employer viewed your public profile",
  },
  {
    icon: FileCheck,
    color: "text-orange-600",
    bg: "bg-orange-100",
    title: "Certificate Uploaded",
    description: "AWS Cloud Practitioner added",
  },
];

export default function RecentActivityCard() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-gray-900">
        Recent Activity
      </h3>

      <div className="mt-5 space-y-5">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.title}
              className="flex items-start gap-4"
            >
              <div className={`rounded-full p-2 ${activity.bg}`}>
                <Icon className={`h-5 w-5 ${activity.color}`} />
              </div>

              <div>
                <p className="font-medium text-gray-900">
                  {activity.title}
                </p>

                <p className="text-sm text-gray-500">
                  {activity.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}