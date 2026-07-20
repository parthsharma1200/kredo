"use client";

import { useState } from "react";

import { Trash2 } from "lucide-react";
import { toast } from "sonner";

import { removeSavedCandidate } from "@/services/recruiter.services";

interface Props {
  studentId: string;
  onRemoved: () => void;
}

export default function RemoveSavedButton({
  studentId,
  onRemoved,
}: Props) {
  const [loading, setLoading] = useState(false);

  async function handleRemove() {
    if (loading) return;

    setLoading(true);

    try {
      await removeSavedCandidate(studentId);

      toast.success(
        "Candidate removed successfully."
      );

      onRemoved();
    } catch (error) {
      console.error(error);

      toast.error(
        "Unable to remove candidate."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      disabled={loading}
      onClick={handleRemove}
      className="rounded-xl bg-red-500 px-4 py-2 font-medium text-white transition hover:bg-red-600 disabled:opacity-50"
    >
      <Trash2 className="mr-2 inline h-4 w-4" />
      Remove
    </button>
  );
}