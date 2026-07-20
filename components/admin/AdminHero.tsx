import { ShieldCheck } from "lucide-react";

export default function AdminHero() {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 p-10 text-white shadow-xl">
      <div className="flex items-start gap-5">
        <div className="rounded-2xl bg-white/20 p-4 backdrop-blur">
          <ShieldCheck className="h-8 w-8" />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-100">
            KREDO ADMIN
          </p>

          <h1 className="mt-2 text-4xl font-black">
            Trust Verification Center
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-100">
            Review submitted achievements, verify supporting evidence,
            and maintain the integrity of the Kredo Trust Network.
          </p>
        </div>
      </div>
    </section>
  );
}