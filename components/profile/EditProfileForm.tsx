"use client";

import { useState } from "react";

type Profile = {
  full_name: string;
  username: string;
  bio: string | null;
  university: string | null;
  degree: string | null;
  graduation_year: number | null;
  location: string | null;
  skills: string[] | null;
};

type Props = {
  profile: Profile;
  onSave: (data: Profile) => Promise<void>;
};

export default function EditProfileForm({
  profile,
  onSave,
}: Props) {
  const [form, setForm] = useState(profile);
  const [loading, setLoading] = useState(false);

  function update<K extends keyof Profile>(key: K, value: Profile[K]) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      await onSave(form);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 rounded-2xl bg-white p-8 shadow-sm"
    >
      <h1 className="text-3xl font-bold text-gray-900">
        Edit Profile
      </h1>

      <div className="grid gap-6 md:grid-cols-2">

        <Input
          label="Full Name"
          value={form.full_name}
          onChange={(v) => update("full_name", v)}
        />

        <Input
          label="Username"
          value={form.username}
          onChange={(v) => update("username", v)}
        />

        <Input
          label="University"
          value={form.university ?? ""}
          onChange={(v) => update("university", v)}
        />

        <Input
          label="Degree"
          value={form.degree ?? ""}
          onChange={(v) => update("degree", v)}
        />

        <Input
          label="Graduation Year"
          type="number"
          value={form.graduation_year?.toString() ?? ""}
          onChange={(v) =>
            update(
              "graduation_year",
              v ? Number(v) : null
            )
          }
        />

        <Input
          label="Location"
          value={form.location ?? ""}
          onChange={(v) => update("location", v)}
        />

      </div>

      <div>
        <label className="mb-2 block font-medium">
          Skills (comma separated)
        </label>

        <input
          className="w-full rounded-xl border p-3"
          value={form.skills?.join(", ") ?? ""}
          onChange={(e) =>
            update(
              "skills",
              e.target.value
                .split(",")
                .map((s) => s.trim())
                .filter(Boolean)
            )
          }
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Bio
        </label>

        <textarea
          rows={5}
          className="w-full rounded-xl border p-3"
          value={form.bio ?? ""}
          onChange={(e) =>
            update("bio", e.target.value)
          }
        />
      </div>

      <button
        disabled={loading}
        className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Saving..." : "Save Changes"}
      </button>
    </form>
  );
}

type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
};

function Input({
  label,
  value,
  onChange,
  type = "text",
}: InputProps) {
  return (
    <div>
      <label className="mb-2 block font-medium">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="w-full rounded-xl border p-3"
      />
    </div>
  );
}