import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";

interface Achievement {
  category: string;
  trust_points: number;
}

interface Props {
  achievements: Achievement[];
}

export default function TrustBreakdownCard({
  achievements,
}: Props) {
  const breakdown = achievements.reduce<Record<string, number>>(
    (acc, achievement) => {
      const category = achievement.category;

      acc[category] =
        (acc[category] ?? 0) + (achievement.trust_points ?? 0);

      return acc;
    },
    {}
  );

  const total = Object.values(breakdown).reduce<number>(
    (sum, value) => sum + value,
    0
  );

  return (
    <Card className="p-6">
      <SectionHeader
        title="Trust Breakdown"
        subtitle="How this Trust Score was earned"
      />

      <div className="mt-6 space-y-4">
        {Object.entries(breakdown).map(([category, points]) => (
          <div
            key={category}
            className="flex items-center justify-between"
          >
            <p className="font-medium text-gray-700">
              {category}
            </p>

            <p className="font-bold text-blue-600">
              +{points}
            </p>
          </div>
        ))}

        <div className="mt-4 flex items-center justify-between border-t pt-4">
          <p className="font-bold text-gray-900">
            Total
          </p>

          <p className="text-xl font-black text-blue-600">
            {total}
          </p>
        </div>
      </div>
    </Card>
  );
}