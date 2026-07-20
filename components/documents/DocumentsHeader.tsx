"use client";

interface Props {
  onUpload: () => void;
}

export default function DocumentsHeader({
  onUpload,
}: Props) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Documents
        </h1>

        <p className="mt-2 text-gray-500">
          Upload and manage your verified documents.
        </p>
      </div>

      <button
        onClick={onUpload}
        className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        + Upload Document
      </button>
    </div>
  );
}