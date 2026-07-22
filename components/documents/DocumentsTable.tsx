"use client";

import { FolderOpen } from "lucide-react";

import { Document } from "@/types/document";
import DocumentCard from "./DocumentCard";

interface Props {
  documents: Document[];
  onView: (document: Document) => void;
  onDelete: (document: Document) => void;
}

export default function DocumentsTable({
  documents,
  onView,
  onDelete,
}: Props) {
  const verifiedCount = documents.filter(
    (doc) => doc.verification_status === "verified"
  ).length;

  if (documents.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-white py-24 text-center shadow-sm">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
          <FolderOpen className="h-10 w-10 text-blue-600" />
        </div>

        <h2 className="mt-6 text-3xl font-bold text-slate-900">
          No Documents Yet
        </h2>

        <p className="mt-3 text-slate-500">
          Upload your first document to start building your verified profile.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white px-8 py-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">
          Uploaded Documents
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          {documents.length} document
          {documents.length > 1 ? "s" : ""} uploaded •{" "}
          {verifiedCount} verified
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {documents.map((doc) => (
          <DocumentCard
            key={doc.id}
            document={doc}
            onView={onView}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}