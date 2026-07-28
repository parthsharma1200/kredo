import {
  ShieldCheck,
  Users,
  Search,
  Award,
} from "lucide-react";

export default function RecruiterHero() {
  return (
    <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 shadow-2xl">
      <div className="grid gap-10 p-10 lg:grid-cols-[1fr_340px] lg:items-center">
        {/* Left */}

        <div>
  <div className="flex items-start justify-between">
    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
      <ShieldCheck className="h-4 w-4" />
      KREDO RECRUITER
    </div>

    
  </div>
          

          <h1 className="mt-6 text-5xl font-black leading-tight text-white">
            Discover Trusted
            <br />
            Student Talent
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Search verified student profiles, compare Trust Scores, and
            hire candidates backed by verified education, projects,
            internships, and achievements.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
              ✓ Verified Profiles
            </span>

            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
              ✓ Trust Score
            </span>

            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
              ✓ Verified Documents
            </span>
          </div>
        </div>

        {/* Right */}

        <div className="grid gap-4">
          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
            <Users className="mb-3 h-8 w-8 text-white" />

            <p className="text-3xl font-black text-white">
              500+
            </p>

            <p className="text-blue-100">
              Verified Students
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
            <Search className="mb-3 h-8 w-8 text-white" />

            <p className="text-3xl font-black text-white">
              Smart
            </p>

            <p className="text-blue-100">
              Candidate Discovery
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
            <Award className="mb-3 h-8 w-8 text-white" />

            <p className="text-3xl font-black text-white">
              Trust
            </p>

            <p className="text-blue-100">
              First Hiring
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}