"use client";

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
    <div className="mt-6 flex flex-wrap gap-3">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            value === option
              ? "bg-blue-600 text-white"
              : "bg-white border border-gray-200 hover:bg-gray-100"
          }`}
        >
          {option === 0 ? "All" : `${option}+`}
        </button>
      ))}
    </div>
  );
}