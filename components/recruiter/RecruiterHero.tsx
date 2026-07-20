import { ShieldCheck } from "lucide-react";

export default function RecruiterHero() {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700 p-10 text-white shadow-xl">
      <div className="flex items-start gap-5">
        <div className="rounded-2xl bg-white/20 p-4 backdrop-blur">
          <ShieldCheck className="h-8 w-8" />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">
            KREDO RECRUITER
          </p>

          <h1 className="mt-2 text-4xl font-black">
            Discover Trusted Student Talent
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-blue-100">
            Search verified student profiles, compare trust scores, and
            discover candidates backed by real achievements, verified
            evidence, and academic credibility.
          </p>
        </div>
      </div>
    </section>
  );
}