import Avatar from "@/components/ui/Avatar";
import TrustRing from "@/components/ui/TrustRing";
import Badge from "@/components/ui/Badge";
import {
  ShieldCheck,
  Share2,
  Download,
  GraduationCap,
} from "lucide-react";

interface Props {
  profile: any;
}

export default function PublicProfileHero({
  profile,
}: Props) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 p-10 text-white shadow-2xl">

      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex items-center gap-6">

          <Avatar
  name={profile.full_name}
  size="xl"
/>

          <div>

            <h1 className="text-5xl font-black">
              {profile.full_name}
            </h1>

            <p className="mt-2 text-xl text-blue-100">
  @{profile.username}
</p>

<p className="mt-2 text-lg text-blue-50">
  {profile.headline ??
    "Aspiring Software Engineer passionate about building trustworthy technology."}
</p>

            <div className="mt-5 flex flex-wrap items-center gap-4">

              <div className="flex items-center gap-2">

                <GraduationCap className="h-5 w-5" />

                {profile.university || "University"}

              </div>

             <Badge variant="verified">
  <ShieldCheck className="mr-2 h-4 w-4" />
  Verified Student
</Badge>
<div className="mt-6 flex flex-wrap gap-2">
  {(profile.skills ?? [])
    .slice(0, 6)
    .map((skill: string) => (
      <span
        key={skill}
        className="rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur"
      >
        {skill}
      </span>
    ))}
</div>

            </div>

          </div>

        </div>

        <div className="text-center">

          <TrustRing
  score={profile.trust_score}
  size={170}
/>

          <div className="mt-8 flex gap-3">

            <button className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-blue-700 transition hover:scale-105">

              <Share2 className="h-4 w-4" />

              Share

            </button>

            <button className="flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 font-semibold transition hover:bg-white/10">

              <Download className="h-4 w-4" />

              PDF

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}