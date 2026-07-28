"use client";

import { ArrowUpDown } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SortDropdown({
  value,
  onChange,
}: Props) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
        <ArrowUpDown className="h-4 w-4 text-blue-600" />
        Sort By
      </div>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 rounded-2xl border border-slate-200 bg-white px-4 pr-10 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
      >
        <option value="trust">Highest Trust Score</option>
        <option value="name">Name (A–Z)</option>
        <option value="university">University</option>
      </select>
    </div>
  );
}