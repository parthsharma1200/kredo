"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { toast } from "sonner";

import {
  saveCandidate,
  removeSavedCandidate,
  isCandidateSaved,
} from "@/services/recruiter.services";

interface Props {
  studentId: string;
  initialSaved?: boolean;
  onChanged?: () => void;
}

export default function FavoriteButton({
  studentId,
  initialSaved = false,
  onChanged,
}: Props) {
  const [saved, setSaved] = useState(initialSaved);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadSavedStatus() {
      try {
        const status = await isCandidateSaved(studentId);
        setSaved(status);
      } catch (error) {
        console.error(error);
      }
    }

    loadSavedStatus();
  }, [studentId]);

  async function toggleFavorite() {
    if (loading) return;

    setLoading(true);

    try {
      if (saved) {
        await removeSavedCandidate(studentId);

        setSaved(false);

        toast.success(
          "Candidate removed from saved."
        );
      } else {
        await saveCandidate(studentId);

        setSaved(true);

        toast.success(
          "Candidate saved successfully."
        );
      }

      onChanged?.();
    } catch (error) {
      console.error(error);

      toast.error(
        "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={toggleFavorite}
      disabled={loading}
      className="rounded-full border border-gray-200 p-2 transition hover:bg-red-50 disabled:opacity-50"
    >
      <Heart
        className={`h-5 w-5 transition ${
          saved
            ? "fill-red-500 text-red-500"
            : "text-gray-500"
        }`}
      />
    </button>
  );
}