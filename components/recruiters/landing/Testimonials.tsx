import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Talent Acquisition Manager",
    company: "TechNova",
    review:
      "Kredo Hire reduced our resume verification time dramatically. The Trust Score helped us identify credible candidates much faster.",
  },
  {
    name: "Rahul Mehta",
    role: "Campus Hiring Lead",
    company: "InnovateX",
    review:
      "Instead of manually checking every certificate, we now rely on verified student profiles. It has streamlined our hiring process.",
  },
  {
    name: "Sneha Kapoor",
    role: "HR Business Partner",
    company: "NextEdge",
    review:
      "A fantastic platform for campus recruitment. The transparency and verification process make hiring far more reliable.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-blue-600">
            Testimonials
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Recruiters trust Kredo Hire.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Hiring teams are reducing verification effort and improving
            candidate quality with verified student profiles.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="leading-7 text-slate-600">
                "{item.review}"
              </p>

              <div className="mt-8 border-t pt-6">
                <h3 className="font-bold text-slate-900">
                  {item.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {item.role}
                </p>

                <p className="mt-1 text-sm font-medium text-blue-600">
                  {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}