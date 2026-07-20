"use client";

import { Check, Copy, ExternalLink, Share2 } from "lucide-react";
import { useState } from "react";

type ShareProfileCardProps = {
  username: string;
};

export default function ShareProfileCard({
  username,
}: ShareProfileCardProps) {
  const [copied, setCopied] = useState(false);

  const profileUrl = `${typeof window !== "undefined" ? window.location.origin : ""}/profile/${username}`;

  async function copyLink() {
    await navigator.clipboard.writeText(profileUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  async function shareProfile() {
    if (navigator.share) {
      await navigator.share({
        title: "My Kredo Profile",
        text: "Check out my verified Kredo profile.",
        url: profileUrl,
      });
    } else {
      copyLink();
    }
  }

  return (
    <section className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-lg">
      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-xl bg-indigo-100 p-3">
          <Share2 className="h-6 w-6 text-indigo-700" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Share Profile
          </h2>

          <p className="text-sm text-gray-500">
            Let recruiters discover you
          </p>
        </div>
      </div>

      <div className="space-y-4">

        <button
          onClick={copyLink}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
          {copied ? "Copied!" : "Copy Profile Link"}
        </button>

        <button
          onClick={shareProfile}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
        >
          <ExternalLink size={18} />
          Share Profile
        </button>

      </div>
    </section>
  );
}