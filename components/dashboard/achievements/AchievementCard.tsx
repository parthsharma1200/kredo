import Card from "@/components/ui/Card";
import { CheckCircle2, Clock3, ExternalLink } from "lucide-react";

import type { Achievement } from "@/types/achievement";

interface AchievementCardProps {
  achievement: Achievement;
}

export default function AchievementCard({
  achievement,
}: AchievementCardProps) {
  const verified = achievement.status === "Verified";

  const Icon = achievement.icon;

  return (
    <Card className="p-6 transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-blue-100 p-3">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              {achievement.title}
            </h3>

            <p className="mt-1 text-gray-500">
              {achievement.issuer}
            </p>

            {achievement.file &&
              achievement.file !== "No file uploaded" && (
                <a
                  href={achievement.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-100"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Evidence
                </a>
              )}
          </div>
        </div>

        {verified ? (
          <CheckCircle2 className="h-6 w-6 text-green-600" />
        ) : (
          <Clock3 className="h-6 w-6 text-yellow-500" />
        )}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${
            verified
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {achievement.status}
        </span>

        <span className="font-bold text-blue-600">
          Trust {achievement.score}
        </span>
      </div>
    </Card>
  );
}