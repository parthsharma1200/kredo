const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Infosys",
  "TCS",
  "Deloitte",
];

export default function TrustedBy() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Trusted By Recruiters Hiring From
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            India's Leading Companies
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Recruiters use Kredo Hire to discover verified student
            profiles with confidence.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">

          {companies.map((company) => (
            <div
              key={company}
              className="flex h-24 items-center justify-center rounded-2xl border border-slate-200 bg-white text-lg font-bold text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 hover:shadow-lg"
            >
              {company}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}