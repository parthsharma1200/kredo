import {
  ShieldCheck,
  Trophy,
  CheckCircle2,
  FileText,
} from "lucide-react";

interface Props {
  trustScore: number;
  achievements: number;
  verified: number;
  evidence: number;
}

export default function PublicStats({
  trustScore,
  achievements,
  verified,
  evidence,
}: Props) {
  const cards = [
    {
      title: "Trust Score",
      value: trustScore,
      icon: ShieldCheck,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      title: "Achievements",
      value: achievements,
      icon: Trophy,
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
    {
      title: "Verified",
      value: verified,
      icon: CheckCircle2,
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      title: "Evidence",
      value: evidence,
      icon: FileText,
      color: "text-orange-600",
      bg: "bg-orange-100",
    },
  ];

  return (
    <section className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.bg}`}
            >
              <Icon className={`h-6 w-6 ${card.color}`} />
            </div>

            <p className="mt-5 text-3xl font-black">
              {card.value}
            </p>

            <p className="mt-1 text-gray-500">
              {card.title}
            </p>
          </div>
        );
      })}
    </section>
  );
}