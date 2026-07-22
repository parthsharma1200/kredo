"use client";

import RoleGuard from "@/components/auth/RoleGuard";
import DashboardSkeleton from "@/components/dashboard/DashboardSkeleton";
import { useDashboard } from "@/hooks/useDashboard";
import { useProfile } from "@/hooks/useProfile";

import TrustScoreHero from "@/components/dashboard/TrustScoreHero";
import StatCard from "@/components/dashboard/StatCard";
import TrustChart from "@/components/dashboard/TrustChart";
import RecentActivity from "@/components/dashboard/RecentActivity";
import AISuggestions from "@/components/dashboard/AISuggestions";
import ProfileCompletion from "@/components/dashboard/ProfileCompletion";

import {
  FileText,
  Users,
  Eye,
} from "lucide-react";

function StudentDashboardContent() {
  const { profile, loading } = useProfile();

  const {
    data: dashboard,
    loading: dashboardLoading,
  } = useDashboard();

  if (loading || dashboardLoading) {
    return <DashboardSkeleton />;
  }

  return (
    <main className="flex-1 bg-slate-100 p-4 sm:p-6 lg:p-8">
      {/* Hero */}
      <section className="mb-8">
        <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Build Trust. Unlock Opportunities.
        </h1>

        <p className="mt-3 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
          Every verified achievement strengthens your credibility,
          builds recruiter confidence, and unlocks better career
          opportunities.
        </p>
      </section>

      {/* Trust Hero */}
      <section className="mb-8">
        <TrustScoreHero profile={profile!} />
      </section>

      {/* Stats */}
      <section className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard
          title="Verified Achievements"
          value={dashboard.verified}
          helperText="Successfully Verified"
          icon={Users}
          iconBgColor="bg-emerald-100"
          iconColor="text-emerald-600"
        />

        <StatCard
          title="Pending Verification"
          value={dashboard.pending}
          helperText="Awaiting Review"
          icon={Eye}
          iconBgColor="bg-amber-100"
          iconColor="text-amber-600"
        />

        <StatCard
          title="Total Achievements"
          value={dashboard.achievements}
          helperText="Uploaded"
          icon={FileText}
          iconBgColor="bg-blue-100"
          iconColor="text-blue-600"
        />
      </section>

      {/* Dashboard Grid */}
      <section className="grid grid-cols-1 gap-8 xl:grid-cols-12">
        <div className="space-y-8 xl:col-span-8">
          <TrustChart />
          <RecentActivity />
        </div>

        <div className="space-y-8 xl:col-span-4">
          <ProfileCompletion />
          <AISuggestions />
        </div>
      </section>
    </main>
  );
}

export default function DashboardPage() {
  return (
    <RoleGuard allow={["student", "admin"]}>
      <StudentDashboardContent />
    </RoleGuard>
  );
}