"use client";

import VerificationCard from "./VerificationCard";
import { useVerificationQueue } from "@/hooks/useVerificationQueue";

export default function VerificationQueue() {
  const {
    queue,
    loading,
    refreshQueue,
  } = useVerificationQueue();

  if (loading) {
    return (
      <div className="rounded-2xl border bg-white p-10 text-center shadow-sm">
        <p className="text-lg font-medium text-gray-600">
          Loading verification queue...
        </p>
      </div>
    );
  }

  if (queue.length === 0) {
    return (
      <div className="rounded-2xl border bg-white p-10 text-center shadow-sm">
        <h3 className="text-2xl font-bold text-gray-800">
          Queue Empty 🎉
        </h3>

        <p className="mt-3 text-gray-500">
          There are no pending achievements waiting for review.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {queue.map((achievement) => (
        <VerificationCard
          key={achievement.id}
          achievement={achievement}
          onUpdated={refreshQueue}
        />
      ))}
    </div>
  );
}