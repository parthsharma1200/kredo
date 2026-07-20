"use client";

import { X } from "lucide-react";
import EvidenceForm from "./EvidenceForm";

interface AddAchievementModalProps {
  open: boolean;
  onClose: () => void;
  onAddAchievement: (achievement: any) => void;
}

export default function AddAchievementModal({
  open,
  onClose,
  onAddAchievement,
}: AddAchievementModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">

      <div className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">

        {/* Header */}

        <div className="flex items-start justify-between border-b border-gray-200 px-8 py-6">

          <div>

            <h2 className="text-3xl font-black text-gray-900">
              Verify a New Achievement
            </h2>

            <p className="mt-2 text-base text-gray-600">
              Support your achievement with credible evidence.
            </p>

          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 transition hover:bg-gray-100"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>

        </div>

        {/* Scrollable Form */}

        <div className="overflow-y-auto px-8 py-6">

          <EvidenceForm
            onAddAchievement={onAddAchievement}
            onClose={onClose}
          />

        </div>

      </div>

    </div>
  );
}