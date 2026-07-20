export default function TrustedBy() {
  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Adobe",
    "Meta",
    "TCS",
    "Infosys",
    "Accenture",
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            TRUSTED BY
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Students targeting the world's best companies
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Build one verified profile recruiters can trust.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {companies.map((company) => (
            <div
              key={company}
              className="rounded-2xl border border-gray-200 bg-gray-50 py-6 text-center font-semibold text-gray-700 shadow-sm transition-all hover:-translate-y-1 hover:bg-white hover:shadow-lg"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}