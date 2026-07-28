import Link from "next/link";
import { ArrowRight, ShieldCheck, BadgeCheck } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">

        {/* Left */}

        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            <ShieldCheck className="h-4 w-4" />
            Trusted by modern recruiters
          </div>

          <h1 className="text-6xl font-extrabold leading-tight text-slate-900">
            Hire
            <span className="text-blue-600">
              {" "}Verified{" "}
            </span>
            Talent.
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-slate-600">
            Every candidate on Kredo Hire comes with verified
            education, internships, certifications and a dynamic
            Trust Score, helping your hiring team make faster and
            smarter decisions.
          </p>

          <div className="mt-10 flex gap-4">
            <Link href="/recruiters/signup">
              <Button>
                Start Hiring
              </Button>
            </Link>

            <Button variant="secondary">
              Book Demo
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-8 text-slate-600">
            <div className="flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-green-600" />
              Verified Profiles
            </div>

            <div className="flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-green-600" />
              AI Trust Score
            </div>

            <div className="flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-green-600" />
              Faster Hiring
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="flex justify-center">
          <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">

            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-700">
                P
              </div>

              <div>
                <h3 className="text-3xl font-bold tracking-tight text-slate-900">
  Parth Sharma
</h3>

                <p className="mt-1 text-lg text-slate-600">
  Computer Science Student
</p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-green-50 p-5">
              <p className="text-sm text-slate-500">
                Trust Score
              </p>

              <h3 className="mt-2 text-5xl font-bold text-green-600">
                92
              </h3>
            </div>

            <div className="text-gray-700 font-medium">

              <div className="flex items-center justify-between">
                <span>Education</span>

                <BadgeCheck className="text-green-600" />
              </div>

              <div className="flex items-center justify-between">
                <span>Internship</span>

                <BadgeCheck className="text-green-600" />
              </div>

              <div className="flex items-center justify-between">
                <span>Projects</span>

                <BadgeCheck className="text-green-600" />
              </div>

              <div className="flex items-center justify-between">
                <span>Certificates</span>

                <BadgeCheck className="text-green-600" />
              </div>

            </div>

            <button className="mt-10 flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700">
              Open Candidate
              <ArrowRight className="h-5 w-5" />
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}