import { redirect } from "next/navigation";

import EditProfileForm from "@/components/profile/EditProfileForm";

import {
  getProfile,
  updateProfile,
} from "@/services/profile.services";

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

  async function saveProfile(data: {
    full_name: string;
    username: string;
    bio: string | null;
    university: string | null;
    degree: string | null;
    graduation_year: number | null;
    location: string | null;
    skills: string[] | null;
  }) {
    "use server";

    await updateProfile(user!.id, data);

    redirect(`/profile/${data.username}`);
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto max-w-5xl px-6">
        <EditProfileForm
          profile={profile}
          onSave={saveProfile}
        />
      </div>
    </main>
  );
}