import { achievements } from "@/constants/achievements";

export function calculateTrustScore() {
  return achievements
    .filter((achievement) => achievement.status === "Verified")
    .reduce((total, achievement) => {
      const points = Number(achievement.score.replace("+", ""));
      return total + points;
    }, 0);
}