// components/dashboard/VerifiedAchievementsCard.tsx

import Card from "../ui/Card";
import { BadgeCheck } from "lucide-react";

const achievements = [
  {
    title: "Microsoft Software Engineering Internship",
    organization: "Microsoft",
  },
  {
    title: "AWS Cloud Practitioner",
    organization: "Amazon Web Services",
  },
  {
    title: "Smart India Hackathon Winner",
    organization: "Government of India",
  },
];

export default function VerifiedAchievementsCard() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-gray-900">
        Verified Achievements
      </h3>

      <div className="mt-5 space-y-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.title}
            className="flex items-start gap-3"
          >
            <div className="rounded-full bg-green-100 p-2">
              <BadgeCheck className="h-5 w-5 text-green-600" />
            </div>

            <div>
              <p className="font-medium text-gray-900">
                {achievement.title}
              </p>

              <p className="text-sm text-gray-500">
                {achievement.organization}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}