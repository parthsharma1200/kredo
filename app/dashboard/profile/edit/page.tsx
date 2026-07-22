"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { createClient } from "@/lib/supabase/client";
import Card from "@/components/ui/Card";
import BackButton from "@/components/ui/BackButton";
export default function EditProfilePage() {
  const router = useRouter();
  const supabase = createClient();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [fullName, setFullName] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [bio, setBio] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.replace("/login");
      return;
    }

    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    if (data) {
      setFullName(data.full_name ?? "");
      setUniversity(data.university ?? "");
      setDegree(data.degree ?? "");
      setLocation(data.location ?? "");
      setPhone(data.phone ?? "");
      setGraduationYear(data.graduation_year?.toString() ?? "");
      setBio(data.bio ?? "");
      setGithub(data.github ?? "");
      setLinkedin(data.linkedin ?? "");
    }

    setLoading(false);
  }

  async function saveProfile() {
    setSaving(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.replace("/login");
      return;
    }

    const { error } = await supabase
      .from("profiles")
      .update({
        full_name: fullName,
        university,
        degree,
        location,
        phone,
        graduation_year: graduationYear
          ? Number(graduationYear)
          : null,
        bio,
        github,
        linkedin,
      })
      .eq("id", user.id);

    setSaving(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Profile updated successfully!");

    router.replace("/dashboard/profile");
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        <p className="text-lg font-semibold text-gray-600">
          Loading Profile...
        </p>
      </div>
    );
  }

  return (
  <main className="min-h-screen bg-slate-100 py-10">
    <div className="mx-auto max-w-5xl px-6">

      <BackButton fallback="/dashboard/profile" />

      <Card className="rounded-3xl p-10 shadow-xl">
          <h1 className="mb-8 text-3xl font-bold text-gray-900">
            Edit Profile
          </h1>

          <div className="grid gap-6 md:grid-cols-2">
            <Input
              label="Full Name"
              value={fullName}
              onChange={setFullName}
            />

            <Input
              label="University"
              value={university}
              onChange={setUniversity}
            />

            <Input
              label="Degree"
              value={degree}
              onChange={setDegree}
            />

            <Input
              label="Location"
              value={location}
              onChange={setLocation}
            />

            <Input
              label="Phone"
              value={phone}
              onChange={setPhone}
            />

            <Input
              label="Graduation Year"
              value={graduationYear}
              onChange={setGraduationYear}
            />

            <Input
              label="GitHub"
              value={github}
              onChange={setGithub}
            />

            <Input
              label="LinkedIn"
              value={linkedin}
              onChange={setLinkedin}
            />

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Bio
              </label>

              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={6}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>

          <div className="mt-10 flex gap-4">
            <button
              onClick={() => router.back()}
              className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              onClick={saveProfile}
              disabled={saving}
              className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </Card>
      </div>
    </main>
  );
}

type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

function Input({
  label,
  value,
  onChange,
}: InputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-gray-700">
        {label}
      </label>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />
    </div>
  );
}