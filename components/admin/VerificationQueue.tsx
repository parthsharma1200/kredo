"use client";

import { useMemo, useState } from "react";

import { Search, ClipboardCheck, Filter } from "lucide-react";

import { useVerificationQueue } from "@/hooks/useVerificationQueue";
import VerificationCard from "./VerificationCard";

export default function VerificationQueue() {
  const { queue, loading, refreshQueue } = useVerificationQueue();

  const [search, setSearch] = useState("");

  const filteredQueue = useMemo(() => {
    if (!search.trim()) return queue;

    const query = search.toLowerCase();

    return queue.filter((achievement: any) => {
      const student =
        achievement.profiles?.full_name?.toLowerCase() || "";

      const email =
        achievement.profiles?.email?.toLowerCase() || "";

      const title =
        achievement.title?.toLowerCase() || "";

      const organization =
        achievement.organization?.toLowerCase() || "";

      return (
        student.includes(query) ||
        email.includes(query) ||
        title.includes(query) ||
        organization.includes(query)
      );
    });
  }, [queue, search]);

  if (loading) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <div className="h-7 w-56 animate-pulse rounded bg-slate-200" />
            <div className="mt-3 h-4 w-72 animate-pulse rounded bg-slate-100" />
          </div>

          <div className="h-10 w-24 animate-pulse rounded-xl bg-slate-200" />
        </div>

        <div className="space-y-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-64 animate-pulse rounded-3xl bg-slate-100"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Verification Queue
            </h2>

            <p className="mt-2 text-slate-500">
              Review and verify student achievements.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 text-white shadow-lg">
            <p className="text-sm opacity-80">
              Pending
            </p>

            <p className="text-4xl font-bold">
              {queue.length}
            </p>
          </div>
        </div>

        {/* Search */}

        <div className="relative mt-8">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            placeholder="Search by student, email, achievement or organization..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
          />
        </div>

        {/* Status Pills */}

        <div className="mt-6 flex flex-wrap gap-3">
          <div className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            All ({queue.length})
          </div>

          <div className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600">
            <Filter className="mr-2 inline h-4 w-4" />
            Filters coming soon
          </div>
        </div>
      </div>

      {/* Empty Search */}

      {filteredQueue.length === 0 && search.length > 0 && (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-16 text-center shadow-sm">
          <Search className="mx-auto h-16 w-16 text-slate-300" />

          <h2 className="mt-6 text-2xl font-bold text-slate-900">
            No Results Found
          </h2>

          <p className="mt-3 text-slate-500">
            Try searching with a different keyword.
          </p>
        </div>
      )}

      {/* Queue Empty */}

      {queue.length === 0 && (
        <div className="rounded-3xl border border-green-200 bg-white p-16 text-center shadow-sm">
          <ClipboardCheck className="mx-auto h-16 w-16 text-green-500" />

          <h2 className="mt-6 text-3xl font-bold">
            Queue Cleared 🎉
          </h2>

          <p className="mt-3 text-slate-500">
            There are no pending achievements to verify.
          </p>
        </div>
      )}

      {/* Cards */}

      {filteredQueue.length > 0 && (
        <div className="grid gap-8">
          {filteredQueue.map((achievement: any) => (
            <VerificationCard
              key={achievement.id}
              document={achievement}
              onUpdated={refreshQueue}
            />
          ))}
        </div>
      )}
    </div>
  );
}