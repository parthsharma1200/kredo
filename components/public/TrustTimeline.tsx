interface Achievement {
  id: string;
  title: string;
  trust_points: number;
  created_at: string;
}

interface Props {
  achievements: Achievement[];
}

export default function TrustTimeline({
  achievements,
}: Props) {
  return (
    <section className="mt-12">

      <h2 className="mb-6 text-3xl font-bold">
        Trust Journey
      </h2>

      <div className="space-y-4">

        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="flex items-center justify-between rounded-2xl border bg-white p-5 shadow-sm"
          >
            <div>

              <p className="font-semibold">
                {achievement.title}
              </p>

              <p className="text-sm text-gray-500">
                {new Date(
                  achievement.created_at
                ).toLocaleDateString()}
              </p>

            </div>

            <div className="text-xl font-bold text-green-600">
              +{achievement.trust_points}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}