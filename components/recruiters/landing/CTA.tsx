import { ArrowRight, ShieldCheck } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-24 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur">
          <ShieldCheck className="h-10 w-10" />
        </div>

        <h2 className="mt-10 text-5xl font-bold">
          Hire verified talent with confidence.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
          Join recruiters who are replacing traditional resume screening
          with verified student profiles and transparent Trust Scores.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

          <button className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105">
            Create Recruiter Account
          </button>

          <button className="flex items-center justify-center gap-2 rounded-xl border border-white/30 px-8 py-4 font-semibold transition hover:bg-white/10">
            Book Demo

            <ArrowRight className="h-5 w-5" />
          </button>

        </div>

      </div>
    </section>
  );
}