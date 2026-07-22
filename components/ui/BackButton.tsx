"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

interface BackButtonProps {
  fallback?: string;
  label?: string;
}

export default function BackButton({
  fallback = "/dashboard",
  label = "Back",
}: BackButtonProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleBack() {
    const from = searchParams.get("from");

    if (from === "recruiter") {
      router.push("/recruiter");
      return;
    }

    if (from === "dashboard") {
      router.push("/dashboard");
      return;
    }

    router.push(fallback);
  }

  return (
    <button
      onClick={handleBack}
      className="mb-6 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 hover:shadow-md"
    >
      <ArrowLeft className="h-4 w-4" />
      {label}
    </button>
  );
}