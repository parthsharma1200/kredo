import {
  UploadCloud,
  BadgeCheck,
  BarChart3,
  Briefcase,
} from "lucide-react";

const steps = [
  {
    icon: UploadCloud,
    title: "Students Upload",
    description:
      "Students upload their academic records, certificates, internships and achievements.",
  },
  {
    icon: BadgeCheck,
    title: "Verification",
    description:
      "Kredo verifies every document through trusted institutions and administrators.",
  },
  {
    icon: BarChart3,
    title: "Trust Score",
    description:
      "A dynamic Trust Score is generated from verified credentials and achievements.",
  },
  {
    icon: Briefcase,
    title: "Hire with Confidence",
    description:
      "Recruiters discover verified candidates and make faster hiring decisions.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-blue-600">
            How It Works
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Hiring built on trust.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Every profile follows a transparent verification journey before
            becoming visible to recruiters.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="absolute right-6 top-6 text-5xl font-black text-slate-100">
                  0{index + 1}
                </span>

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}