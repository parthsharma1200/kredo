"use client";

import { useState } from "react";

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

  const handleSubmit = async () => {
    if (!title || !type || !file) {
      alert("Please fill all fields.");
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
      alert("Upload failed.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        <h2 className="mb-6 text-2xl font-bold">
          Upload Document
        </h2>

        <div className="space-y-4">
          <div>
            <label className="mb-2 block font-medium">
              Document Title
            </label>

            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Semester 5 Marksheet"
              className="w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Document Type
            </label>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full rounded-xl border p-3"
            >
              <option value="">Select Document Type</option>
              <option value="Marksheet">🎓 Marksheet</option>
              <option value="Aadhaar">🆔 Aadhaar Card</option>
              <option value="Certificate">📜 Certificate</option>
              <option value="Internship">💼 Internship Letter</option>
              <option value="Resume">📄 Resume</option>
              <option value="Other">📁 Other</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Choose File
            </label>

            <input
              type="file"
              accept=".pdf,.png,.jpg,.jpeg"
              onChange={(e) =>
                setFile(e.target.files?.[0] ?? null)
              }
              className="w-full rounded-lg border p-2"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button
            disabled={uploading}
            onClick={onClose}
            className="rounded-xl border px-5 py-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            disabled={uploading}
            onClick={handleSubmit}
            className="rounded-xl bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </div>
      </div>
    </div>
  );
}