"use client";

import { uploadEvidence } from "@/app/lib/uploadEvidence";
import { toast } from "sonner";
import { useState } from "react";
import { GraduationCap, Upload } from "lucide-react";

import { createClient } from "@/lib/supabase/client";

import type { Achievement } from "@/types/achievement";

import EvidenceTypeSelect from "./EvidenceTypeSelect";

interface EvidenceFormProps {
  onAddAchievement: (achievement: Achievement) => void;
  onClose: () => void;
}

export default function EvidenceForm({
  onAddAchievement,
  onClose,
}: EvidenceFormProps) {
  const supabase = createClient();

  const [category, setCategory] = useState("Degree");
  const [title, setTitle] = useState("");
  const [issuer, setIssuer] = useState("");
  const [completionDate, setCompletionDate] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const [saving, setSaving] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!title.trim() || !issuer.trim()) {
      toast.error("Please fill in the Title and Issuer.");
      return;
    }

    setSaving(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      toast.error("Please login again.");
      setSaving(false);
      return;
    }

    let evidenceUrl: string | null = null;

    if (file) {
      try {
        evidenceUrl = await uploadEvidence(file);
      } catch {
        toast.error("Failed to upload evidence.");
        setSaving(false);
        return;
      }
    }

    const trustPointsMap: Record<string, number> = {
      Degree: 30,
      Internship: 20,
      Certificate: 10,
      Project: 15,
      Hackathon: 15,
      Research: 20,
      Volunteer: 5,
    };

    const trustPoints = trustPointsMap[category] ?? 0;

    const { data, error } = await supabase
      .from("achievements")
      .insert({
        user_id: user.id,
        title,
        organization: issuer,
        category,
        description,
        issue_date: completionDate || null,
        evidence_url: evidenceUrl,
        trust_points: trustPoints,
      })
      .select()
      .single();

    if (error) {
      setSaving(false);
      toast.error(error.message);
      return;
    }

    const { data: achievements } = await supabase
      .from("achievements")
      .select("trust_points")
      .eq("user_id", user.id);

    const totalTrustScore =
      achievements?.reduce(
        (sum, achievement) => sum + (achievement.trust_points ?? 0),
        0
      ) ?? 0;

    const { error: profileUpdateError } = await supabase
      .from("profiles")
      .update({
        trust_score: totalTrustScore,
      })
      .eq("id", user.id);

    if (profileUpdateError) {
      setSaving(false);
      toast.error(profileUpdateError.message);
      return;
    }

    onAddAchievement({
      id: data.id,
      title: data.title,
      issuer: data.organization ?? "",
      category: data.category ?? "",
      description: data.description ?? "",
      completionDate: data.issue_date ?? "",
      file: data.evidence_url ?? "No file uploaded",
      status: data.verification_status,
      score: `+${data.trust_points}`,
      icon: GraduationCap,
    });

    setCategory("Degree");
    setTitle("");
    setIssuer("");
    setCompletionDate("");
    setDescription("");
    setFile(null);

    setSaving(false);

    toast.success("Achievement added successfully!");

    onClose();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Achievement Category
        </label>

        <EvidenceTypeSelect
          value={category}
          onChange={setCategory}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Achievement Title
        </label>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="AWS Cloud Practitioner"
          className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-gray-900 transition focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Issued By
        </label>

        <input
          value={issuer}
          onChange={(e) => setIssuer(e.target.value)}
          placeholder="Amazon Web Services"
          className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-gray-900 transition focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Completion Date
        </label>

        <input
          type="date"
          value={completionDate}
          onChange={(e) => setCompletionDate(e.target.value)}
          className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-gray-900 transition focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Upload Evidence
        </label>

        <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 px-6 py-8 transition hover:border-blue-500 hover:bg-blue-50">
          <Upload className="mb-3 h-8 w-8 text-blue-600" />

          <p className="font-semibold text-gray-700">
            {file ? file.name : "Click to upload"}
          </p>

          <p className="mt-1 text-sm text-gray-500">
            PDF, PNG or JPG
          </p>

          <input
            type="file"
            className="hidden"
            onChange={(e) =>
              setFile(e.target.files ? e.target.files[0] : null)
            }
          />
        </label>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Description
        </label>

        <textarea
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe this achievement..."
          className="w-full rounded-xl border border-gray-300 bg-white p-4 text-gray-900 transition focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div className="flex justify-end gap-4 pt-2">
        <button
          type="button"
          onClick={onClose}
          className="rounded-xl border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={saving}
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
        >
          {saving ? "Saving..." : "Add Achievement"}
        </button>
      </div>
    </form>
  );
}