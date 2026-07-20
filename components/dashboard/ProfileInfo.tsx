import Link from "next/link";
import Card from "../ui/Card";
import type { Profile } from "@/types/profile";

type ProfileInfoProps = {
  profile: Profile;
};

export default function ProfileInfo({
  profile,
}: ProfileInfoProps) {
  const details = [
    ["Email", profile.email],
    ["University", profile.university || "Not added"],
    ["Degree", profile.degree || "Not added"],
    ["Location", profile.location || "Not added"],
    ["Trust Score", profile.trust_score.toString()],
  ];

  return (
    <Card className="p-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          Personal Information
        </h2>

        <Link
  href="/dashboard/profile/edit"
  className="rounded-xl bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700"
>
  Edit Profile
</Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {details.map(([label, value]) => (
          <div key={label}>
            <p className="text-sm text-gray-500">
              {label}
            </p>

            <p className="mt-1 font-semibold text-gray-900">
              {value}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}