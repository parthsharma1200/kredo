"use client";

import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: Props) {
  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by name, username, skill or university..."
        className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-14 pr-16 text-base font-medium text-slate-900 shadow-sm transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none"
      />

      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-semibold text-slate-400">
        Ctrl K
      </div>
    </div>
  );
}