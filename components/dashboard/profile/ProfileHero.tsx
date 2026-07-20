import Card from "@/components/ui/Card";
import type { Profile } from "@/types/profile";

import {
  ShieldCheck,
  GraduationCap,
  MapPin,
  Briefcase,
  Globe,
} from "lucide-react";

type ProfileHeroProps = {
  profile: Profile;
};

export default function ProfileHero({
  profile,
}: ProfileHeroProps) {
  return (
    <Card className="overflow-hidden rounded-3xl">
      <div className="h-40 bg-gradient-to-r from-blue-600 to-indigo-700" />

      <div className="relative px-10 pb-10">
        {/* Profile */}

        <div className="-mt-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end">
            {/* Avatar */}

            <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-white bg-white text-5xl font-bold text-blue-600 shadow-xl">
              {profile.full_name.charAt(0).toUpperCase()}
            </div>

            {/* Details */}

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-4xl font-bold text-gray-900">
                  {profile.full_name}
                </h1>

                <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
                  Verified Student
                </span>
              </div>

              <p className="mt-3 flex items-center gap-2 text-lg text-gray-600">
                <GraduationCap className="h-5 w-5" />
                {profile.degree || "Degree not added"}
              </p>

              <p className="mt-2 flex items-center gap-2 text-gray-500">
                <MapPin className="h-5 w-5" />
                {profile.location || "Location not added"}
              </p>

              <p className="mt-2 flex items-center gap-2 text-gray-500">
                <Briefcase className="h-5 w-5" />
                Open to Opportunities
              </p>
            </div>
          </div>

          {/* Trust Score */}

          <div className="rounded-2xl bg-blue-600 px-8 py-6 text-center text-white shadow-xl">
            <ShieldCheck className="mx-auto mb-2 h-8 w-8" />

            <p className="text-5xl font-black">
              {profile.trust_score}
            </p>

            <p className="mt-2 text-blue-100">
              Trust Score
            </p>
          </div>
        </div>

        {/* Bio */}

        <div className="mt-10">
          <h2 className="text-xl font-bold text-gray-900">
            About
          </h2>

          <p className="mt-3 max-w-4xl leading-8 text-gray-600">
            Passionate Computer Science student focused on building
            trustworthy software products. Interested in Full Stack
            Development, AI, and Startup Innovation. Building Kredo to
            help students showcase verified achievements instead of
            traditional resumes.
          </p>
        </div>

        {/* Links */}

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="flex items-center gap-2 rounded-xl border px-5 py-3 font-semibold transition hover:bg-gray-50">
            <Globe className="h-5 w-5" />
            GitHub
          </button>

          <button className="flex items-center gap-2 rounded-xl border px-5 py-3 font-semibold transition hover:bg-gray-50">
            <Globe className="h-5 w-5" />
            LinkedIn
          </button>
        </div>
      </div>
    </Card>
  );
}