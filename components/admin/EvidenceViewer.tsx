"use client";

interface Props {
  url: string;
}

export default function EvidenceViewer({
  url,
}: Props) {
  if (!url) {
    return (
      <div className="rounded-xl border bg-slate-50 p-8 text-center text-gray-500">
        No evidence uploaded.
      </div>
    );
  }

  const isImage =
    url.endsWith(".png") ||
    url.endsWith(".jpg") ||
    url.endsWith(".jpeg") ||
    url.endsWith(".webp");

  if (isImage) {
    return (
      <img
        src={url}
        alt="Evidence"
        className="max-h-[70vh] w-full rounded-xl object-contain"
      />
    );
  }

  return (
    <iframe
      src={url}
      className="h-[75vh] w-full rounded-xl border"
    />
  );
}