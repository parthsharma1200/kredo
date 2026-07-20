import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionHeader from "@/components/ui/SectionHeader";

interface Props {
  profile: any;
}

export default function SkillsCard({
  profile,
}: Props) {
  const skills = profile.skills ?? [];

  return (
    <Card className="p-6">

      <SectionHeader
        title="Skills"
        subtitle="Verified technical skills"
      />

      <div className="mt-4 flex flex-wrap gap-2">

        {skills.length === 0 ? (
          <p className="text-gray-500">
            No skills added yet.
          </p>
        ) : (
          skills.map((skill: string) => (
            <Badge
              key={skill}
              variant="category"
            >
              {skill}
            </Badge>
          ))
        )}

      </div>

    </Card>
  );
}