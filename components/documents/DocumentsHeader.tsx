"use client";

import {
  Upload,
  FileCheck,
  Clock3,
  ShieldCheck,
} from "lucide-react";

interface Props {
  onUpload: () => void;
}

export default function DocumentsHeader({
  onUpload,
}: Props) {
  return (
    <div className="space-y-6">
      {/* Top Header */}

      <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 text-white shadow-xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
              Document Center
            </p>

            <h1 className="mt-2 text-4xl font-black">
              Verified Documents
            </h1>

            <p className="mt-3 max-w-2xl text-blue-100">
              Manage your academic documents, monitor verification status,
              and strengthen your trusted digital profile.
            </p>
          </div>

          <button
            onClick={onUpload}
            className="inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-4 font-semibold text-blue-700 transition hover:scale-105"
          >
            <Upload className="h-5 w-5" />
            Upload Document
          </button>
        </div>
      </div>

      {/* Dashboard Stats */}

      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
          <div className="flex items-center justify-between">
            <FileCheck className="h-10 w-10 text-green-600" />

            <span className="text-4xl font-black text-slate-900">
              01
            </span>
          </div>

          <h3 className="mt-6 text-lg font-bold text-slate-900">
            Verified Documents
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Successfully verified by Kredo.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
          <div className="flex items-center justify-between">
            <Clock3 className="h-10 w-10 text-amber-500" />

            <span className="text-4xl font-black text-slate-900">
              00
            </span>
          </div>

          <h3 className="mt-6 text-lg font-bold text-slate-900">
            Pending Review
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Waiting for verification.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
          <div className="flex items-center justify-between">
            <ShieldCheck className="h-10 w-10 text-blue-600" />

            <span className="text-4xl font-black text-slate-900">
              +20
            </span>
          </div>

          <h3 className="mt-6 text-lg font-bold text-slate-900">
            Trust Earned
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Added to your Trust Score.
          </p>
        </div>
      </div>
    </div>
  );
}