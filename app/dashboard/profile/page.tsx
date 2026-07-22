import Link from "next/link";
import { redirect } from "next/navigation";

import { Pencil } from "lucide-react";
import BackButton from "@/components/ui/BackButton";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

import { getProfile } from "@/services/profile.services";

import { createClient } from "@/lib/supabase/server";

export default async function ProfilePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const profile = await getProfile(user.id);

  if (!profile) {
    return (
      <div className="p-10 text-center">
        Profile not found.
      </div>
    );
  }

  return (
    
  <main className="min-h-screen bg-slate-100 py-10">
    <div className="mx-auto max-w-6xl px-6">

      <BackButton fallback="/dashboard" />

      <Card className="overflow-hidden">

          {/* Cover */}

          <div className="h-48 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

          {/* Profile */}

          <div className="-mt-16 flex flex-col items-center px-10 pb-10">

            <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-white bg-blue-600 text-4xl font-bold text-white shadow-lg">
              {profile.full_name
  ?.split(" ")
  .map((word: string) => word[0] ?? "")
  .join("")
  .toUpperCase()}
            </div>

            <h1 className="mt-5 text-4xl font-bold text-gray-900">
              {profile.full_name}
            </h1>

            <p className="mt-2 text-lg text-gray-500">
              @{profile.username}
            </p>

            <div className="mt-6">
              <Link href="/dashboard/profile/edit">
                <Button>
                  <Pencil className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
              </Link>
            </div>

          </div>

        </Card>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">

          <Card className="p-8">

            <h2 className="mb-6 text-2xl font-bold">
              Personal Information
            </h2>

            <div className="space-y-5">

              <Info
                title="University"
                value={profile.university}
              />

              <Info
                title="Degree"
                value={profile.degree}
              />

              <Info
                title="Graduation Year"
                value={
                  profile.graduation_year?.toString()
                }
              />

              <Info
                title="Location"
                value={profile.location}
              />

            </div>

          </Card>

          <Card className="p-8">

            <h2 className="mb-6 text-2xl font-bold">
              About
            </h2>

            <div className="space-y-6">

              <div>

                <p className="mb-2 font-semibold text-gray-700">
                  Bio
                </p>

                <p className="text-gray-600">
                  {profile.bio || "No bio added yet."}
                </p>

              </div>

              <div>

                <p className="mb-2 font-semibold text-gray-700">
                  Skills
                </p>

                <div className="flex flex-wrap gap-2">

                  {profile.skills?.length ? (
                    profile.skills.map((skill: string) => (
                      <span
                        key={skill}
                        className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
                      >
                        {skill}
                      </span>
                    ))
                  ) : (
                    <p className="text-gray-500">
                      No skills added.
                    </p>
                  )}

                </div>

              </div>

            </div>

          </Card>

        </div>

      </div>
    </main>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: string | number | null | undefined;
}) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">
        {title}
      </p>

      <p className="mt-1 text-lg text-gray-900">
        {value || "-"}
      </p>
    </div>
  );
}