import { notFound } from "next/navigation";

import ProfileHero from "@/components/profile/ProfileHero";
import VerifiedDocuments from "@/components/profile/VerifiedDocuments";
import EducationCard from "@/components/profile/EducationCard";
import SkillsCard from "@/components/profile/SkillsCard";
import AboutCard from "@/components/profile/AboutCard";
import ContactCard from "@/components/profile/ContactCard";
import ShareProfileCard from "@/components/profile/ShareProfileCard";
import BackButton from "@/components/ui/BackButton";
import {
  getPublicProfile,
  getVerifiedDocuments,
} from "@/services/profile.services";

type Props = {
  params: Promise<{
    username: string;
  }>;
};

export default async function PublicProfilePage({
  params,
}: Props) {
  const { username } = await params;

  const profile = await getPublicProfile(username);

  if (!profile) {
    notFound();
  }

  const documents = await getVerifiedDocuments(username);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-10">
      <div className="mx-auto max-w-7xl px-6">
 <BackButton fallback="/recruiter" />

        {/* Hero */}
        <ProfileHero
          fullName={profile.full_name}
          username={profile.username}
          university={profile.university}
          degree={profile.degree}
          location={profile.location}
          trustScore={profile.trust_score}
        />

        {/* Content */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">

          <VerifiedDocuments
            documents={documents}
          />

          <EducationCard
            university={profile.university}
            degree={profile.degree}
            graduationYear={profile.graduation_year}
          />

          <SkillsCard
            skills={profile.skills}
          />

          <AboutCard
            bio={profile.bio}
          />

          <ContactCard
            email={profile.email}
            location={profile.location}
          />

          <ShareProfileCard
            username={profile.username}
          />

        </div>

      </div>
    </main>
  );
}