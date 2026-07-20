"use client";

import { Eye, Trash2 } from "lucide-react";
import DocumentStatusBadge from "./DocumentStatusBadge";
import { Document } from "@/types/document";

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
  if (documents.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-gray-300 bg-white py-20 text-center">
        <h2 className="text-xl font-semibold text-gray-800">
          No Documents Uploaded
        </h2>

        <p className="mt-2 text-gray-500">
          Upload your first document to begin verification.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr className="text-left text-sm text-gray-600">
            <th className="px-6 py-4">Document</th>
            <th className="px-6 py-4">Type</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Uploaded</th>
            <th className="px-6 py-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {documents.map((doc) => (
            <tr
              key={doc.id}
              className="border-t hover:bg-gray-50 transition"
            >
              <td className="px-6 py-4 font-medium">
                {doc.title}
              </td>

              <td className="px-6 py-4 capitalize">
                {doc.document_type}
              </td>

              <td className="px-6 py-4">
                <DocumentStatusBadge
                  status={doc.verification_status}
                />
              </td>

              <td className="px-6 py-4">
                {new Date(doc.uploaded_at).toLocaleDateString()}
              </td>

              <td className="px-6 py-4">
                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => onView(doc)}
                    className="rounded-lg p-2 hover:bg-blue-100"
                    title="View Document"
                  >
                    <Eye size={18} />
                  </button>

                  <button
                    onClick={() => onDelete(doc)}
                    className="rounded-lg p-2 hover:bg-red-100"
                    title="Delete Document"
                  >
                    <Trash2
                      size={18}
                      className="text-red-600"
                    />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}