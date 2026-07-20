import type { Achievement } from "@/types/achievement";
import AchievementCard from "./AchievementCard";

interface AchievementGridProps {
  achievements: Achievement[];
}

export default function AchievementGrid({
  achievements,
}: AchievementGridProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {achievements.map((achievement) => (
        <AchievementCard
          key={achievement.id}
          achievement={achievement}
        />
      ))}
    </div>
  );
}