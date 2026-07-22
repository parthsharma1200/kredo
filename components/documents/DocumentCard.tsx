"use client";

import {
  Eye,
  Trash2,
  FileText,
  CalendarDays,
  ShieldCheck,
  Clock3,
  XCircle,
} from "lucide-react";

import DocumentStatusBadge from "./DocumentStatusBadge";
import { Document } from "@/types/document";

interface Props {
  document: Document;
  onView: (document: Document) => void;
  onDelete: (document: Document) => void;
}

export default function DocumentCard({
  document,
  onView,
  onDelete,
}: Props) {
  const statusIcon =
    document.verification_status === "verified" ? (
      <ShieldCheck className="h-5 w-5 text-green-600" />
    ) : document.verification_status === "pending" ? (
      <Clock3 className="h-5 w-5 text-amber-500" />
    ) : (
      <XCircle className="h-5 w-5 text-red-500" />
    );

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-blue-100 p-4">
            <FileText className="h-7 w-7 text-blue-600" />
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900">
              {document.title}
            </h3>

            <p className="mt-1 capitalize text-sm text-slate-500">
              {document.document_type}
            </p>
          </div>
        </div>

        {statusIcon}
      </div>

      <div className="mt-6">
        <DocumentStatusBadge
          status={document.verification_status}
        />
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
        <CalendarDays className="h-4 w-4" />

        {new Date(document.uploaded_at).toLocaleDateString()}
      </div>

      <div className="mt-8 flex gap-3">
        <button
          onClick={() => onView(document)}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          <Eye className="h-4 w-4" />
          View
        </button>

        <button
          onClick={() => onDelete(document)}
          className="flex items-center justify-center rounded-xl bg-red-50 px-4 transition hover:bg-red-100"
        >
          <Trash2 className="h-5 w-5 text-red-600" />
        </button>
      </div>
    </div>
  );
}