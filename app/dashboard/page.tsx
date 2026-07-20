"use client";

import RoleGuard from "@/components/auth/RoleGuard";
import DashboardSkeleton from "@/components/dashboard/DashboardSkeleton";
import { useDashboard } from "@/hooks/useDashboard";
import { useProfile } from "@/hooks/useProfile";

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

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
    <div className="flex min-h-screen bg-slate-100">

      {/* Sidebar */}

      <Sidebar />

      {/* Main */}

      <div className="flex flex-1 flex-col">

        <Header
          fullName={profile?.full_name ?? "Student"}
        />

        <main className="flex-1 p-8">

          {/* Hero */}

          <section className="mb-8">

            <h1 className="text-4xl font-black tracking-tight text-gray-900 lg:text-5xl">
              Build Trust. Unlock Opportunities.
            </h1>

            <p className="mt-3 max-w-3xl text-lg leading-8 text-gray-600">
              Every verified achievement strengthens your
              credibility, builds recruiter confidence,
              and unlocks better career opportunities.
            </p>

          </section>

          {/* Trust Hero */}

          <section className="mb-8">
            <TrustScoreHero profile={profile!} />
          </section>

          {/* Stats */}

          <section className="grid gap-6 md:grid-cols-3">

            <StatCard
  title="Documents"
  value={dashboard.achievements}
  helperText="Uploaded"
  icon={FileText}
  iconBgColor="bg-green-100"
  iconColor="text-green-600"
/>

<StatCard
  title="Verified Documents"
  value={dashboard.verified}
  helperText="Approved"
  icon={Users}
  iconBgColor="bg-purple-100"
  iconColor="text-purple-600"
/>

<StatCard
  title="Pending Review"
  value={dashboard.pending}
  helperText="Waiting for verification"
  icon={Eye}
  iconBgColor="bg-orange-100"
  iconColor="text-orange-600"
/>
          </section>

          {/* Analytics */}

          <section className="mt-8 grid gap-8 xl:grid-cols-3">

            <div className="xl:col-span-2">
              <TrustChart />
            </div>

            <ProfileCompletion />

          </section>

          {/* Bottom */}

          <section className="mt-8 grid gap-8 xl:grid-cols-2">

            <RecentActivity />

            <AISuggestions />

          </section>

        </main>

      </div>

    </div>
  );
}

export default function DashboardPage() {
  return (
    <RoleGuard allow={["student", "admin"]}>
      <StudentDashboardContent />
    </RoleGuard>
  );
}