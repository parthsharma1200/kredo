"use client";

import { useState } from "react";
import UploadModal from "@/components/documents/UploadModal";

export default function DocumentsPage() {
  const [open, setOpen] = useState(false);

  async function handleUpload(
    title: string,
    type: string,
    file: File
  ) {
    console.log({ title, type, file });
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <button
            onClick={() => history.back()}
            className="mb-3 text-sm font-medium text-blue-600 hover:underline"
          >
            ← Back
          </button>

          <h1 className="text-4xl font-bold text-slate-900">
            Document Center
          </h1>

          <p className="mt-2 text-slate-500">
            Upload and manage your verified documents.
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Upload Document
        </button>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-sm text-slate-500">
            Total Documents
          </h3>

          <p className="mt-3 text-3xl font-bold">0</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-sm text-slate-500">
            Verified
          </h3>

          <p className="mt-3 text-3xl font-bold text-green-600">
            0
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-sm text-slate-500">
            Pending
          </h3>

          <p className="mt-3 text-3xl font-bold text-amber-500">
            0
          </p>
        </div>
      </div>

      {/* Documents */}
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">
          Uploaded Documents
        </h2>

        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 p-12 text-center">
          <p className="text-slate-500">
            No documents uploaded yet.
          </p>
        </div>
      </div>

      <UploadModal
        open={open}
        onClose={() => setOpen(false)}
        onUpload={handleUpload}
      />
    </div>
  );
}