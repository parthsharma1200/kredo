"use client";

import { Code2 } from "lucide-react";

interface Props {
  skills: string[];
  selected: string;
  onChange: (skill: string) => void;
}

export default function SkillsFilter({
  skills,
  selected,
  onChange,
}: Props) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-2">
        <Code2 className="h-5 w-5 text-blue-600" />
        <h3 className="text-sm font-semibold text-slate-700">
          Filter by Skills
        </h3>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => onChange("")}
          className={`rounded-2xl border px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
            selected === ""
              ? "border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-200"
              : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50"
          }`}
        >
          All Skills
        </button>

        {skills.map((skill) => (
          <button
            key={skill}
            onClick={() => onChange(skill)}
            className={`rounded-2xl border px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
              selected === skill
                ? "border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-200"
                : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50"
            }`}
          >
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
}