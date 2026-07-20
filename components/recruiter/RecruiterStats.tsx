import Card from "@/components/ui/Card";
import {
  Users,
  ShieldCheck,
  Trophy,
  GraduationCap,
  Heart,
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

  const eliteStudents = students.filter(
    (student) => student.trust_score >= 90
  ).length;

  const universities = new Set(
    students
      .map((student) => student.university)
      .filter(Boolean)
  ).size;

  const stats = [
    {
      title: "Students",
      value: totalStudents,
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      title: "High Trust",
      value: highTrust,
      icon: ShieldCheck,
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
  title: "Saved",
  value: savedCount,
  icon: Heart,
  color: "text-red-600",
  bg: "bg-red-100",
},
    {
      title: "Universities",
      value: universities,
      icon: GraduationCap,
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
  ];

  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <Card
            key={stat.title}
            className="p-6"
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-gray-500">
                  {stat.title}
                </p>

                <h2 className="mt-2 text-4xl font-black text-gray-900">
                  {stat.value}
                </h2>

              </div>

              <div
                className={`rounded-2xl p-3 ${stat.bg}`}
              >
                <Icon
                  className={`h-7 w-7 ${stat.color}`}
                />
              </div>

            </div>
          </Card>
        );
      })}
    </div>
  );
}