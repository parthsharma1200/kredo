import Link from "next/link";
import FavoriteButton from "@/components/recruiters/FavoriteButton";
import {
  GraduationCap,
  MapPin,
  ShieldCheck,
  Award,
} from "lucide-react";

import Avatar from "@/components/ui/Avatar";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import type { Profile } from "@/types/profile";

interface Props {
  profile: Profile;
  footer?: React.ReactNode;
}

function getTrustLevel(score: number) {
  if (score >= 90)
    return {
      label: "Excellent",
      color: "text-green-600",
    };

  if (score >= 70)
    return {
      label: "Very Good",
      color: "text-blue-600",
    };

  if (score >= 50)
    return {
      label: "Good",
      color: "text-yellow-600",
    };

  return {
    label: "Growing",
    color: "text-gray-500",
  };
}

export default function CandidateCard({
  profile,
  footer,
}: Props) {
  const trust = getTrustLevel(
    profile.trust_score ?? 0
  );

  return (
    <Card className="group overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Header */}

      <div className="flex items-start justify-between">

        <div className="flex gap-4">

          <Avatar
            name={profile.full_name}
            size="lg"
          />

          <div>

            <div className="flex items-center gap-2">

              <h2 className="text-xl font-bold text-gray-900">
                {profile.full_name}
              </h2>

              <ShieldCheck className="h-5 w-5 text-blue-600" />

            </div>

            <p className="text-gray-500">
              @{profile.username}
            </p>
<div className="mt-3 flex flex-wrap gap-2">
  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
    ✓ Recruiter Ready
  </span>

  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
    Verified Identity
  </span>
</div>
          </div>

        </div>

        <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 px-5 py-3 text-center text-white shadow-lg">

          <p className="text-xs uppercase tracking-wider">
            Trust
          </p>

          <h3 className="text-3xl font-black">
            {profile.trust_score}
          </h3>

        </div>

      </div>

      {/* University */}

      <div className="mt-6 space-y-3">

        <div className="flex items-center gap-2 text-gray-600">

          <GraduationCap className="h-5 w-5 text-blue-500" />

          <span>
            {profile.university ||
              "University not provided"}
          </span>

        </div>

        <div className="flex items-center gap-2 text-gray-600">

          <MapPin className="h-5 w-5 text-red-500" />

          <span>
            {profile.location ||
              "Location not provided"}
          </span>

        </div>

      </div>

 {/* Trust */}

<div className="mt-6 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-5">
  <div className="flex items-center justify-between">
    <div>
      <p className="text-sm text-slate-500">
        Trust Level
      </p>

      <p className={`text-2xl font-black ${trust.color}`}>
        {trust.label}
      </p>

      <p className="mt-1 text-sm text-slate-500">
        Verified profile with trusted credentials
      </p>
    </div>

    <Award className="h-10 w-10 text-yellow-500" />
  </div>

  <div className="mt-5 h-2 overflow-hidden rounded-full bg-blue-100">
    <div
      className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
      style={{
        width: `${Math.min(profile.trust_score, 100)}%`,
      }}
    />
  </div>
</div>

      {/* Skills */}

      <div className="mt-6">

        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
          Skills
        </p>

        <div className="flex flex-wrap gap-2">

          {(profile.skills ?? [])
            .slice(0, 5)
            .map((skill) => (
              <Badge
                key={skill}
                variant="category"
              >
                {skill}
              </Badge>
            ))}

        </div>

      </div>

  {/* Footer */}

{footer ? (
  footer
) : (
  <div className="mt-8 flex items-center gap-3">

    <div className="flex-shrink-0">
      <FavoriteButton studentId={profile.id} />
    </div>

    <Link
  href={`/u/${profile.username}?from=recruiter`}
  className="flex-1"
>
  <Button className="w-full">
    View Trust Profile →
  </Button>
</Link>

  </div>
)}

    </Card>
  );
}