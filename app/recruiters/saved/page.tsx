"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Button from "@/components/ui/Button";
import RemoveSavedButton from "@/components/recruiters/RemoveSavedButton";
import CandidateCard from "@/components/recruiters/CandidateCard";
import { getSavedCandidates } from "@/services/recruiter.services";

export default function SavedCandidatesPage() {
  const [savedCandidates, setSavedCandidates] =
    useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  async function loadSavedCandidates() {
    try {
      const data = await getSavedCandidates();

      setSavedCandidates(data);
    } finally {
      setLoading(false);
    }
  }
  function handleRemoved(studentId: string) {
  setSavedCandidates((current) =>
    current.filter(
      (candidate) =>
        candidate.student_id !== studentId
    )
  );
}

  useEffect(() => {
    loadSavedCandidates();
  }, []);

  if (loading) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-black">
          Saved Candidates
        </h1>

        <p className="mt-4 text-gray-500">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl p-8">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-black">
            ❤️ Saved Candidates
          </h1>

          <p className="mt-2 text-gray-500">
            {savedCandidates.length} candidate(s) saved
          </p>

        </div>

        <Link
          href="/recruiter"
          className="rounded-xl bg-blue-600 px-5 py-3 text-white"
        >
          Back to Dashboard
        </Link>

      </div>

      {savedCandidates.length === 0 ? (
        <div className="rounded-3xl bg-white p-16 text-center shadow">

          <h2 className="text-2xl font-bold">
            No Saved Candidates
          </h2>

          <p className="mt-4 text-gray-500">
            Save candidates from the recruiter dashboard.
          </p>

        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {savedCandidates.map((candidate) => (
  <CandidateCard
    key={candidate.student_id}
    profile={candidate.profiles}
    footer={
      <div className="mt-8 flex items-center gap-3">
        <RemoveSavedButton
          studentId={candidate.student_id}
          onRemoved={() =>
            handleRemoved(candidate.student_id)
          }
        />

        <Link
          href={`/u/${candidate.profiles.username}`}
          className="flex-1"
        >
          <Button className="w-full">
            View Public Profile →
          </Button>
        </Link>
      </div>
    }
  />
))}
        </div>
      )}

    </div>
  );
}