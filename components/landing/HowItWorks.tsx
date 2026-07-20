import {
  Upload,
  ShieldCheck,
  Globe,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Upload Documents",
    description:
      "Upload your transcripts, certificates, internships and projects securely.",
    icon: Upload,
  },
  {
    number: "02",
    title: "AI Verification",
    description:
      "Our AI verifies your credentials and generates a transparent trust score.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Share Your Profile",
    description:
      "Send one verified public profile to recruiters, universities and employers.",
    icon: Globe,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-blue-600">
            HOW IT WORKS
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Build trust in three simple steps.
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            Kredo verifies your education, achievements and experience,
            giving recruiters confidence in every application.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-blue-100 p-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>

                  <span className="text-4xl font-bold text-gray-200">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
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