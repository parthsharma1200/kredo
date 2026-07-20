import Card from "../ui/Card";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "AI",
  "SQL",
];

export default function SkillsCard() {
  return (
    <Card className="p-8">
      <h2 className="mb-6 text-2xl font-bold">
        Skills
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-blue-100 px-4 py-2 font-medium text-blue-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </Card>
  );
}