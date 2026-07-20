import { notFound } from "next/navigation";
import PublicProfileHero from "@/components/public/PublicProfileHero";
import PublicStats from "@/components/public/PublicStats";
import AchievementsSection from "@/components/public/AchievementsSection";
import TrustTimeline from "@/components/public/TrustTimeline";
import EducationCard from "@/components/public/sidebar/EducationCard";
import SkillsCard from "@/components/public/sidebar/SkillsCard";
import EvidenceGallery from "@/components/public/evidence/EvidenceGallery";
import { getPublicAchievements } from "@/services/publicProfile.services";
import { getProfileByUsername } from "@/services/publicProfile.services";
import { error } from "console";

type Props = {
  params: Promise<{
    username: string;
  }>;
};

export default async function PublicProfilePage({
  params,
}: Props) {
  const { username } = await params;

  let profile;

try {
  profile = await getProfileByUsername(username);
} catch {
  notFound();
}

  

  const achievements = await getPublicAchievements(profile.id);

  const verifiedCount = achievements.filter(
    (achievement) =>
      achievement.verification_status === "Verified"
  ).length;

  const evidenceCount = achievements.filter(
    (achievement) => achievement.evidence_url
  ).length;

  return (
    <main className="min-h-screen bg-slate-100 py-12">
      <div className="mx-auto max-w-7xl px-6">

        {/* Hero */}

        <PublicProfileHero profile={profile} />

        {/* Stats */}

        <PublicStats
          trustScore={profile.trust_score}
          achievements={achievements.length}
          verified={verifiedCount}
          evidence={evidenceCount}
        />

        {/* Main Layout */}

        <div className="mt-10 grid gap-8 lg:grid-cols-3">

          {/* Sidebar */}

          <aside className="space-y-6">

  <EducationCard
    profile={profile}
  />

  <SkillsCard
    profile={profile}
  />

</aside>
          {/* Main Content */}

          <section className="space-y-10 lg:col-span-2">

            <AchievementsSection
              achievements={achievements}
            />

            <TrustTimeline
              achievements={achievements}
            />
            <EvidenceGallery
  achievements={achievements}
/>

          </section>

        </div>

      </div>
    </main>
  );
}