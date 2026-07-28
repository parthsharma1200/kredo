import {
  GraduationCap,
  Building2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    value: "50K+",
    title: "Verified Students",
    description:
      "Profiles backed by verified academic and professional documents.",
  },
  {
    icon: Building2,
    value: "250+",
    title: "Partner Universities",
    description:
      "Trusted institutions contributing verified student records.",
  },
  {
    icon: ShieldCheck,
    value: "98%",
    title: "Verification Accuracy",
    description:
      "Every verification goes through a structured review process.",
  },
  {
    icon: TrendingUp,
    value: "60%",
    title: "Faster Hiring",
    description:
      "Reduce resume screening time with verified candidate profiles.",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Trusted Hiring Starts With Trusted Data
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Kredo Hire helps recruiters reduce hiring risk by providing
            verified student credentials, transparent trust scores and
            reliable academic records in one place.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-blue-600">
                  <Icon className="h-8 w-8 text-blue-600 transition group-hover:text-white" />
                </div>

                <h3 className="mt-8 text-5xl font-extrabold text-slate-900">
                  {item.value}
                </h3>

                <h4 className="mt-3 text-xl font-semibold text-slate-900">
                  {item.title}
                </h4>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}