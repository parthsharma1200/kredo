"use client";

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
    <div className="mt-6 flex flex-wrap gap-3">
      <button
        onClick={() => onChange("")}
        className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
          selected === ""
            ? "border-blue-600 bg-blue-600 text-white"
            : "border-gray-200 bg-white text-gray-700 hover:bg-gray-100"
        }`}
      >
        All Skills
      </button>

      {skills.map((skill) => (
        <button
          key={skill}
          onClick={() => onChange(skill)}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
            selected === skill
              ? "border-blue-600 bg-blue-600 text-white"
              : "border-gray-200 bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          {skill}
        </button>
      ))}
    </div>
  );
}