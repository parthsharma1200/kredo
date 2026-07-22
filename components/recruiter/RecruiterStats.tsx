import Card from "@/components/ui/Card";
import {
  Users,
  ShieldCheck,
  GraduationCap,
  Heart,
  ArrowUpRight,
} from "lucide-react";

import type { Profile } from "@/types/profile";

interface Props {
  students: Profile[];
  savedCount: number;
}

export default function RecruiterStats({
  students,
  savedCount,
}: Props) {
  const totalStudents = students.length;

  const highTrust = students.filter(
    (student) => student.trust_score >= 70
  ).length;

  const universities = new Set(
    students
      .map((student) => student.university)
      .filter(Boolean)
  ).size;

  const stats = [
    {
      title: "Verified Students",
      value: totalStudents,
      subtitle: "Available to explore",
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      title: "High Trust",
      value: highTrust,
      subtitle: "Trust Score 70+",
      icon: ShieldCheck,
      color: "text-emerald-600",
      bg: "bg-emerald-100",
    },
    {
      title: "Saved Candidates",
      value: savedCount,
      subtitle: "Shortlisted by you",
      icon: Heart,
      color: "text-red-600",
      bg: "bg-red-100",
    },
    {
      title: "Universities",
      value: universities,
      subtitle: "Verified institutions",
      icon: GraduationCap,
      color: "text-violet-600",
      bg: "bg-violet-100",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <Card
            key={stat.title}
            className="group overflow-hidden rounded-3xl border border-slate-200 p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div
                  className={`rounded-2xl p-4 ${stat.bg}`}
                >
                  <Icon
                    className={`h-7 w-7 ${stat.color}`}
                  />
                </div>

                <ArrowUpRight className="h-5 w-5 text-slate-300 transition group-hover:text-blue-600" />
              </div>

              <div className="mt-8">
                <h2 className="text-4xl font-black text-slate-900">
                  {stat.value}
                </h2>

                <p className="mt-2 text-lg font-semibold text-slate-900">
                  {stat.title}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {stat.subtitle}
                </p>
              </div>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />
          </Card>
        );
      })}
    </div>
  );
}