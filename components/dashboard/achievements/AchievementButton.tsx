"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import AddAchievementModal from "./AddAchievementModal";

export default function AddAchievementButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        <Plus className="h-5 w-5" />
        Add Achievement
      </button>

      <AddAchievementModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}