"use client";

import {
  CheckCircle2,
  Clock3,
  ExternalLink,
  Award,
} from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  organization: string;
  category: string;
  trust_points: number;
  verification_status: string;
  evidence_url: string | null;
  issue_date?: string;
}

interface Props {
  achievements: Achievement[];
}

export default function AchievementsSection({
  achievements,
}: Props) {
  return (
    <section className="mt-14">
      {/* Header */}

      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-black">
            Verified Achievements
          </h2>

          <p className="mt-2 text-gray-500">
            Every verified achievement contributes to the student's Trust
            Score and credibility.
          </p>
        </div>

        <div className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          {achievements.length} Achievement
          {achievements.length !== 1 && "s"}
        </div>
      </div>

      {/* Empty State */}

      {achievements.length === 0 && (
        <div className="rounded-3xl border border-dashed bg-white p-12 text-center shadow-sm">
          <Award className="mx-auto h-14 w-14 text-gray-300" />

          <h3 className="mt-5 text-2xl font-bold">
            No achievements yet
          </h3>

          <p className="mt-2 text-gray-500">
            This student hasn't uploaded any achievements yet.
          </p>
        </div>
      )}

      {/* Achievement Cards */}

      <div className="space-y-6">
        {achievements.map((achievement) => {
          const verified =
            achievement.verification_status === "Verified";

          return (
            <div
              key={achievement.id}
              className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                {/* Left */}

                <div className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100">
                    <Award className="h-7 w-7 text-blue-600" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {achievement.title}
                    </h3>

                    <p className="mt-2 text-gray-600">
                      Issued by{" "}
                      <span className="font-semibold">
                        {achievement.organization}
                      </span>
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                        {achievement.category}
                      </span>

                      <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                        +{achievement.trust_points} Trust Points
                      </span>
                    </div>

                    {achievement.issue_date && (
                      <p className="mt-5 text-sm text-gray-500">
                        Issued on{" "}
                        {new Date(
                          achievement.issue_date
                        ).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>

                {/* Status */}

                <div className="flex justify-start lg:justify-end">
                  {verified ? (
                    <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
                      <CheckCircle2 className="h-5 w-5" />
                      Verified
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 font-semibold text-yellow-700">
                      <Clock3 className="h-5 w-5" />
                      Pending
                    </div>
                  )}
                </div>
              </div>

              {/* Verification Notice */}

              {verified && (
                <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-4">
                  <p className="font-semibold text-green-700">
                    ✅ Verified by Kredo Admin
                  </p>

                  <p className="mt-1 text-sm text-green-600">
                    This achievement has been reviewed and verified through
                    Kredo's verification process.
                  </p>
                </div>
              )}

              {/* Evidence */}

              {achievement.evidence_url && (
                <div className="mt-6">
                  <a
                    href={achievement.evidence_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                  >
                    <ExternalLink className="h-5 w-5" />
                    View Evidence
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}