"use client";

import EvidenceViewer from "./EvidenceViewer";

interface Props {
  open: boolean;
  onClose: () => void;
  url: string;
}

export default function EvidenceModal({
  open,
  onClose,
  url,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-8">

      <div className="w-full max-w-5xl rounded-3xl bg-white p-6 shadow-2xl">

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-2xl font-bold">
            Evidence Preview
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg border px-4 py-2"
          >
            Close
          </button>

        </div>

        <EvidenceViewer url={url} />

      </div>

    </div>
  );
}