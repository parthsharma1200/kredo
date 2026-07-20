import Card from "@/components/ui/Card";
import { Pencil, ShieldCheck } from "lucide-react";
import { profile } from "@/constants/profile";

export default function HeaderCard() {
  return (
    <Card className="p-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}
        <div className="flex items-center gap-6">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-100 text-4xl font-bold text-blue-600">
            {profile.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {profile.name}
            </h1>

            <p className="mt-1 text-lg text-gray-600">
              {profile.title}
            </p>

            <p className="text-gray-500">
              {profile.university}
            </p>

            <div className="mt-4 flex w-fit items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-green-700">
              <ShieldCheck className="h-5 w-5" />
              Verified Student
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-full max-w-xs">
          <div className="mb-2 flex justify-between">
            <span className="font-semibold text-gray-700">
              Trust Score
            </span>

            <span className="font-bold text-blue-600">
              {profile.trustScore}%
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-700"
              style={{ width: `${profile.trustScore}%` }}
            />
          </div>

          <button className="mt-6 flex items-center gap-2 rounded-xl border border-gray-300 px-5 py-3 font-semibold transition hover:bg-gray-50">
            <Pencil className="h-5 w-5" />
            Edit Profile
          </button>
        </div>

      </div>
    </Card>
  );
}