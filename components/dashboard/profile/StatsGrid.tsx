import {
  FileText,
  Trophy,
  Eye,
  ShieldCheck,
} from "lucide-react";

import StatCard from "@/components/dashboard/StatCard";

export default function StatsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Documents"
        value="12"
        helperText="Verified"
        icon={FileText}
      />

      <StatCard
        title="Achievements"
        value="8"
        helperText="Awards"
        icon={Trophy}
        iconBgColor="bg-yellow-100"
        iconColor="text-yellow-600"
      />

      <StatCard
        title="Trust Score"
        value="82"
        helperText="/100"
        icon={ShieldCheck}
        iconBgColor="bg-green-100"
        iconColor="text-green-600"
      />

      <StatCard
        title="Profile Views"
        value="154"
        helperText="This Week"
        icon={Eye}
        iconBgColor="bg-purple-100"
        iconColor="text-purple-600"
      />

    </div>
  );
}