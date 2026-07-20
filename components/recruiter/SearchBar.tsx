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

      <Search
        className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
      />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by name, username, skill or university..."
        className="w-full rounded-2xl border border-gray-200 bg-white py-4 pl-12 pr-4 text-lg outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />

    </div>
  );
}