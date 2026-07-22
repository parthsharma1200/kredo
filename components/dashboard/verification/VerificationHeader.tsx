import {
  ShieldCheck,
  Sparkles,
  BadgeCheck,
} from "lucide-react";

export default function VerificationHeader() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 px-8 py-10 text-white">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
              <ShieldCheck className="h-4 w-4" />
              Verification Center
            </div>

            <h1 className="mt-5 text-4xl font-black leading-tight lg:text-5xl">
              Build Trust Through
              <br />
              Verified Evidence
            </h1>

            <p className="mt-5 text-lg leading-8 text-blue-100">
              Every verified achievement strengthens your digital identity,
              improves your Trust Score, and helps recruiters make confident
              hiring decisions.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:w-[360px]">
            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              <BadgeCheck className="mb-3 h-8 w-8" />

              <p className="text-3xl font-bold">100%</p>

              <p className="mt-1 text-sm text-blue-100">
                Authentic Verification
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              <Sparkles className="mb-3 h-8 w-8" />

              <p className="text-3xl font-bold">+Trust</p>

              <p className="mt-1 text-sm text-blue-100">
                Score Boost
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 p-6 md:grid-cols-3">
        <div className="rounded-2xl bg-slate-50 p-5">
          <h3 className="font-semibold text-slate-900">
            Upload Evidence
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Submit certificates, internships, projects, and achievements for
            verification.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-5">
          <h3 className="font-semibold text-slate-900">
            Expert Review
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Our verification team validates authenticity before approval.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-5">
          <h3 className="font-semibold text-slate-900">
            Increase Trust Score
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Verified achievements instantly improve profile credibility for
            recruiters.
          </p>
        </div>
      </div>
    </div>
  );
}