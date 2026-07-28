import {
  ShieldCheck,
  Search,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Candidate Profiles",
    description:
      "Every profile is backed by verified education, internships and certifications, reducing hiring risk.",
    metric: "100% Verified",
  },
  {
    icon: Search,
    title: "Smart Candidate Discovery",
    description:
      "Search candidates using skills, universities, Trust Score and verified achievements.",
    metric: "Advanced Search",
  },
  {
    icon: TrendingUp,
    title: "Trust Score Insights",
    description:
      "Understand candidate credibility instantly using a transparent Trust Score built from verified records.",
    metric: "AI Powered",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">
          <p className="font-semibold uppercase tracking-[0.25em] text-blue-600">
            Platform Features
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Everything recruiters need to hire with confidence.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Kredo Hire combines verified credentials,
            Trust Scores and intelligent candidate discovery
            into one modern hiring platform.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-blue-600">
                  <Icon className="h-8 w-8 text-blue-600 transition group-hover:text-white" />
                </div>

                <span className="mt-8 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                  {feature.metric}
                </span>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>

                <button className="mt-8 flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3">
                  Learn More

                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}