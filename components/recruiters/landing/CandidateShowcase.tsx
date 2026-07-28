import {
  BadgeCheck,
  GraduationCap,
  Briefcase,
  Star,
  ArrowRight,
} from "lucide-react";

export default function CandidateShowcase() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        <div>
          <p className="font-semibold uppercase tracking-[0.25em] text-blue-600">
            Candidate Preview
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Evaluate candidates before the first interview.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Trust Scores, verified achievements and complete academic records
            help recruiters shortlist better candidates in minutes.
          </p>

          <button className="mt-10 flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
            Explore Candidates
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Parth Sharma
              </h3>

              <p className="text-slate-500">
                Computer Science Student
              </p>
            </div>

            <div className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
              Trust Score 92
            </div>
          </div>

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4">
              <GraduationCap className="h-6 w-6 text-blue-600" />
              <span>B.Tech Computer Science</span>
            </div>

            <div className="flex items-center gap-4">
              <Briefcase className="h-6 w-6 text-blue-600" />
              <span>Google Internship</span>
            </div>

            <div className="flex items-center gap-4">
              <BadgeCheck className="h-6 w-6 text-blue-600" />
              <span>12 Verified Documents</span>
            </div>

            <div className="flex items-center gap-4">
              <Star className="h-6 w-6 text-blue-600" />
              <span>Top 5% Trust Rating</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}