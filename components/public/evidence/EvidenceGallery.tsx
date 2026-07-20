import SectionHeader from "@/components/ui/SectionHeader";
import EmptyState from "@/components/ui/EmptyState";
import EvidenceCard from "./EvidenceCard";
import { FileText } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  evidence_url: string | null;
}

interface Props {
  achievements: Achievement[];
}

export default function EvidenceGallery({
  achievements,
}: Props) {
  const evidence = achievements.filter(
    (achievement) => achievement.evidence_url
  );

  return (
    <section className="space-y-6">
      <SectionHeader
        title="Evidence Gallery"
        subtitle="Verified supporting documents"
      />

      {evidence.length === 0 ? (
        <EmptyState
          title="No evidence uploaded"
          description="This student hasn't uploaded any supporting documents yet."
          icon={FileText}
        />
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {evidence.map((achievement) => (
            <EvidenceCard
              key={achievement.id}
              title={achievement.title}
              url={achievement.evidence_url!}
            />
          ))}
        </div>
      )}
    </section>
  );
}