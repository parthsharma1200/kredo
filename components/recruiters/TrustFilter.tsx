"use client";

import { ShieldCheck } from "lucide-react";

interface Props {
  value: number;
  onChange: (value: number) => void;
}

const options = [0, 50, 70, 80, 90];

export default function TrustFilter({
  value,
  onChange,
}: Props) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-2">
        <ShieldCheck className="h-5 w-5 text-blue-600" />
        <h3 className="text-sm font-semibold text-slate-700">
          Minimum Trust Score
        </h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {options.map((option) => {
          const active = value === option;

          return (
            <button
              key={option}
              onClick={() => onChange(option)}
              className={`rounded-2xl border px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                active
                  ? "border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-200"
                  : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50"
              }`}
            >
              {option === 0 ? "All Students" : `${option}+ Trust`}
            </button>
          );
        })}
      </div>
    </div>
  );
}