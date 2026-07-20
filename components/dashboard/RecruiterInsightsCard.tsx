// components/dashboard/RecruiterInsightsCard.tsx

import Card from "../ui/Card";
import {
  Eye,
  Bookmark,
  Briefcase,
  TrendingUp,
} from "lucide-react";

const insights = [
  {
    icon: Eye,
    label: "Profile Views",
    value: "154",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    icon: Bookmark,
    label: "Saved by Recruiters",
    value: "12",
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    icon: Briefcase,
    label: "Interview Invites",
    value: "4",
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    icon: TrendingUp,
    label: "Trust Growth",
    value: "+18%",
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
];

export default function RecruiterInsightsCard() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-gray-900">
        Recruiter Insights
      </h3>

      <div className="mt-6 grid grid-cols-2 gap-4">
        {insights.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-xl border border-gray-200 p-4 transition-all duration-300 hover:border-blue-200 hover:shadow-md"
            >
              <div className={`inline-flex rounded-lg p-2 ${item.bg}`}>
                <Icon className={`h-5 w-5 ${item.color}`} />
              </div>

              <p className="mt-3 text-2xl font-bold text-gray-900">
                {item.value}
              </p>

              <p className="text-sm text-gray-500">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </Card>
  );
}