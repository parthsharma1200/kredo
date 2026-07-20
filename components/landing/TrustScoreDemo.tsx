"use client";

import { useState } from "react";
import { ShieldCheck, TrendingUp } from "lucide-react";

export default function TrustScoreDemo() {
  const [score, setScore] = useState(82);

  const confidence =
    score >= 80
      ? "Very High"
      : score >= 60
      ? "High"
      : score >= 40
      ? "Medium"
      : "Low";

  const confidenceColor =
    score >= 80
      ? "text-green-600"
      : score >= 60
      ? "text-blue-600"
      : score >= 40
      ? "text-yellow-500"
      : "text-red-500";

  const interviewChance = Math.round(score * 1.15);

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-5xl px-6">

        {/* Heading */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-blue-600">
            INTERACTIVE DEMO
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Experience Your Trust Score
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Move the slider to see how stronger credentials improve recruiter confidence.
          </p>
        </div>

        {/* Card */}
        <div className="mt-16 rounded-3xl bg-white p-10 shadow-xl">

          {/* Slider */}
          <input
            type="range"
            min="20"
            max="100"
            value={score}
            onChange={(e) => setScore(Number(e.target.value))}
            className="w-full"
          />

          {/* Score */}
          <div className="mt-12 grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl bg-blue-50 p-6 text-center">
              <ShieldCheck className="mx-auto h-8 w-8 text-blue-600" />

              <h3 className="mt-4 text-lg font-semibold">
                Trust Score
              </h3>

              <p className="mt-2 text-5xl font-bold text-blue-600">
                {score}
              </p>
            </div>

            <div className="rounded-2xl bg-green-50 p-6 text-center">
              <TrendingUp className="mx-auto h-8 w-8 text-green-600" />

              <h3 className="mt-4 text-lg font-semibold">
                Recruiter Confidence
              </h3>

              <p className={`mt-3 text-3xl font-bold ${confidenceColor}`}>
                {confidence}
              </p>
            </div>

            <div className="rounded-2xl bg-purple-50 p-6 text-center">
              <h3 className="text-lg font-semibold">
                Interview Chance
              </h3>

              <p className="mt-5 text-5xl font-bold text-purple-600">
                {interviewChance}%
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}