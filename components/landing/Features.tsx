import {
  ShieldCheck,
  Sparkles,
  BarChart3,
  Link2,
  Users,
  FileCheck,
} from "lucide-react";
import SectionHeading from "../shared/SectionHeading";

const features = [
  {
    title: "Verified Documents",
    description:
      "Securely verify certificates, transcripts, internships and projects.",
    icon: FileCheck,
  },
  {
    title: "AI Trust Score",
    description:
      "Receive a credibility score based on verified achievements.",
    icon: ShieldCheck,
  },
  {
    title: "Analytics",
    description:
      "Track profile views and recruiter engagement in real time.",
    icon: BarChart3,
  },
  {
    title: "Public Profile",
    description:
      "Share one professional profile instead of multiple documents.",
    icon: Link2,
  },
  {
    title: "Verified References",
    description:
      "Collect trusted recommendations from professors and employers.",
    icon: Users,
  },
  {
    title: "AI Suggestions",
    description:
      "Receive personalized recommendations to improve your profile.",
    icon: Sparkles,
  },
];

export default function Features() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <SectionHeading
  badge="FEATURES"
  title="Everything you need to build trust."
  description="Kredo combines AI verification, analytics and trusted credentials into one modern student profile."
/>

        {/* Feature Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}