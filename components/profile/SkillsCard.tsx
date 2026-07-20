import { Code2 } from "lucide-react";

type SkillsCardProps = {
  skills: string[] | null;
};

export default function SkillsCard({
  skills,
}: SkillsCardProps) {
  return (
    <section className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-lg">
      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-xl bg-violet-100 p-3">
          <Code2 className="h-6 w-6 text-violet-700" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Skills
          </h2>

          <p className="text-sm text-gray-500">
            Technical Expertise
          </p>
        </div>
      </div>

      {!skills || skills.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 py-10 text-center">
          <Code2 className="mx-auto mb-3 h-10 w-10 text-gray-400" />
          <p className="text-gray-500">
            No skills added yet.
          </p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:scale-105 hover:border-blue-500"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}