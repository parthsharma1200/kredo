interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function EvidenceTypeSelect({
  value,
  onChange,
}: Props) {
  const options = [
    "Degree",
    "Certificate",
    "Internship",
    "Project",
    "Hackathon",
    "Research",
    "Recommendation",
  ];

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border border-gray-300 p-3"
    >
      {options.map((option) => (
        <option key={option}>
          {option}
        </option>
      ))}
    </select>
  );
}