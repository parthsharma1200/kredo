import { Calendar, CheckCircle2, GraduationCap, MapPin } from "lucide-react";

type ProfileHeroProps = {
  fullName: string;
  username: string;
  university: string | null;
  degree: string | null;
  location: string | null;
  trustScore: number;
};

export default function ProfileHero({
  fullName,
  username,
  university,
  degree,
  location,
  trustScore,
}: ProfileHeroProps) {
  const initial = fullName.charAt(0).toUpperCase();

  return (
    <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 shadow-2xl">

      <div className="grid gap-10 p-10 lg:grid-cols-[1fr_300px] lg:items-center">

        {/* Left */}

        <div className="flex flex-col gap-8">

          <div className="flex items-center gap-6">

            <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-white text-5xl font-black text-blue-700 shadow-xl">
              {initial}
            </div>

            <div>

              <div className="flex flex-wrap items-center gap-3">

                <h1 className="text-4xl font-black text-white lg:text-5xl">
                  {fullName}
                </h1>

                <span className="flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                  <CheckCircle2 size={18} />
                  Verified Student
                </span>

              </div>

              <p className="mt-2 text-lg text-blue-100">
                @{username}
              </p>

            </div>

          </div>

          <div className="grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">

              <div className="mb-2 flex items-center gap-2 text-blue-100">
                <GraduationCap size={18} />
                <span className="text-sm font-medium">
                  Degree
                </span>
              </div>

              <p className="font-semibold text-white">
                {degree || "Not Added"}
              </p>

            </div>

            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">

              <div className="mb-2 flex items-center gap-2 text-blue-100">
                <GraduationCap size={18} />
                <span className="text-sm font-medium">
                  University
                </span>
              </div>

              <p className="font-semibold text-white">
                {university || "Not Added"}
              </p>

            </div>

            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">

              <div className="mb-2 flex items-center gap-2 text-blue-100">
                <MapPin size={18} />
                <span className="text-sm font-medium">
                  Location
                </span>
              </div>

              <p className="font-semibold text-white">
                {location || "Not Added"}
              </p>

            </div>

          </div>

        </div>

        {/* Right */}

<div className="rounded-3xl bg-white p-8 shadow-2xl">
  <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
    Trust Score
  </p>

  <div className="mt-5 text-center">
    <h2 className="text-7xl font-black text-blue-700">
      {trustScore}
    </h2>

    <span className="mt-2 inline-flex rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
      Excellent Standing
    </span>
  </div>

  <div className="mt-8">
    <div className="mb-3 flex justify-between text-sm">
      <span className="font-medium text-slate-600">
        Profile Strength
      </span>

      <span className="font-bold text-blue-700">
        {Math.min(trustScore, 100)}%
      </span>
    </div>

    <div className="h-3 overflow-hidden rounded-full bg-slate-200">
      <div
        className="h-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600"
        style={{
          width: `${Math.min(trustScore, 100)}%`,
        }}
      />
    </div>
  </div>

  <div className="mt-8 space-y-4">
    <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
      <span className="text-slate-500">
        Identity
      </span>

      <span className="font-semibold text-green-600">
        Verified
      </span>
    </div>

    <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
      <span className="text-slate-500">
        Documents
      </span>

      <span className="font-semibold text-green-600">
        Verified
      </span>
    </div>

    <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
      <span className="text-slate-500">
        Recruiter Ready
      </span>

      <span className="font-semibold text-blue-700">
        Yes
      </span>
    </div>
  </div>

  <div className="mt-8 flex items-center justify-center gap-2 border-t border-slate-200 pt-6 text-sm text-slate-500">
    <Calendar size={16} />
    <span>Member Since 2026</span>
  </div>
</div>

      </div>

    </section>
  );
}