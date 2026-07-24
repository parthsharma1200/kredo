"use client";
import { toast } from "sonner";
import { useState } from "react";
import {
  Upload,
  FileText,
  X,
  CheckCircle2,
} from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
  onUpload: (
    title: string,
    type: string,
    file: File
  ) => Promise<void>;
}

export default function UploadModal({
  open,
  onClose,
  onUpload,
}: Props) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  if (!open) return null;

  async function handleSubmit() {
    if (!title || !type || !file) {
      toast.error("Please complete all fields.");
      return;
    }

    try {
      setUploading(true);

      await onUpload(title, type, file);

      setTitle("");
      setType("");
      setFile(null);

      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Upload failed.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-6 backdrop-blur-sm">
      <div className="flex max-h-[90vh] w-full max-w-xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* Header */}

        <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-6 text-white">
          <div>
            <h2 className="text-3xl font-bold">
              Upload Document
            </h2>

            <p className="mt-1 text-blue-100">
              Add a document for verification.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 transition hover:bg-white/10"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Body */}

        <div className="flex-1 space-y-6 overflow-y-auto p-8">
          <div>
            <label className="mb-2 block font-semibold text-slate-700">
              Document Title
            </label>

            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Semester 5 Marksheet"
              className="w-full rounded-2xl border border-slate-200 p-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-700">
              Document Type
            </label>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 p-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            >
              <option value="">Select Type</option>
              <option value="Marksheet">🎓 Marksheet</option>
              <option value="Certificate">📜 Certificate</option>
              <option value="Internship">💼 Internship Letter</option>
              <option value="Resume">📄 Resume</option>
              <option value="Aadhaar">🆔 Aadhaar Card</option>
              <option value="Other">📁 Other</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-700">
              Upload File
            </label>

            <label className="flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-blue-300 bg-blue-50 px-6 py-10 transition hover:border-blue-500 hover:bg-blue-100">
              <Upload className="h-10 w-10 text-blue-600" />

              <p className="mt-4 font-semibold text-slate-800">
                Click to upload
              </p>

              <p className="mt-1 text-sm text-slate-500">
                PDF, JPG, JPEG or PNG
              </p>

              <input
                type="file"
                accept=".pdf,.png,.jpg,.jpeg"
                className="hidden"
                onChange={(e) =>
                  setFile(e.target.files?.[0] ?? null)
                }
              />
            </label>

            {file && (
              <div className="mt-4 flex items-center gap-3 rounded-2xl bg-green-50 p-4">
                <CheckCircle2 className="h-6 w-6 text-green-600" />

                <div>
                  <p className="font-medium text-slate-900">
                    {file.name}
                  </p>

                  <p className="text-sm text-slate-500">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="rounded-2xl bg-slate-50 p-5">
            <div className="flex items-start gap-3">
              <FileText className="mt-1 h-6 w-6 text-blue-600" />

              <div>
                <h3 className="font-semibold text-slate-900">
                  Verification Process
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  After uploading, our verification team will review your
                  document. Once approved, your Trust Score will be updated
                  automatically.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}

        <div className="flex justify-end gap-3 border-t border-slate-200 bg-slate-50 px-8 py-5">
          <button
            onClick={onClose}
            disabled={uploading}
            className="rounded-2xl border border-slate-300 px-6 py-3 font-medium transition hover:bg-slate-100 disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={uploading}
            className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-3 font-semibold text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {uploading ? "Uploading..." : "Upload Document"}
          </button>
        </div>
      </div>
    </div>
  );
}