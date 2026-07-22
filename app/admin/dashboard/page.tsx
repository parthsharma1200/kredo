"use client";

import AdminHero from "@/components/admin/AdminHero";
import AdminStats from "@/components/admin/AdminStats";
import VerificationQueue from "@/components/admin/VerificationQueue";

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl space-y-8 p-8">
        <AdminHero />

        <AdminStats />

        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Verification Queue
            </h2>

            <p className="mt-1 text-slate-500">
              Review submitted achievements and verify them.
            </p>
          </div>

          <VerificationQueue />
        </section>
      </div>
    </main>
  );
}