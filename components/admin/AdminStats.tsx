"use client";

import Card from "@/components/ui/Card";
import {
  Clock3,
  CheckCircle2,
  XCircle,
  FileCheck,
} from "lucide-react";

import { useAdminStats } from "@/hooks/useAdminStats";

export default function AdminStats() {
  const { stats, loading } = useAdminStats();

  const cards = [
    {
      title: "Pending",
      value: stats.pending,
      icon: Clock3,
      bg: "bg-yellow-100",
      color: "text-yellow-600",
    },
    {
      title: "Verified Today",
      value: stats.verifiedToday,
      icon: CheckCircle2,
      bg: "bg-green-100",
      color: "text-green-600",
    },
    {
      title: "Rejected",
      value: stats.rejected,
      icon: XCircle,
      bg: "bg-red-100",
      color: "text-red-600",
    },
    {
      title: "Total Reviewed",
      value: stats.reviewed,
      icon: FileCheck,
      bg: "bg-blue-100",
      color: "text-blue-600",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <Card
            key={card.title}
            className="p-6"
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-gray-500">
                  {card.title}
                </p>

                <h2 className="mt-2 text-4xl font-black text-gray-900">
                  {loading ? "..." : card.value}
                </h2>

              </div>

              <div className={`rounded-2xl p-3 ${card.bg}`}>
                <Icon className={`h-7 w-7 ${card.color}`} />
              </div>

            </div>
          </Card>
        );
      })}
    </div>
  );
}