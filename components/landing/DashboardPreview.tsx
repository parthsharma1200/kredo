import Card from "../ui/Card";
import StatCard from "../dashboard/StatCard";

import ProfileCompletionCard from "../dashboard/ProfileCompletionCard";
import VerifiedAchievementsCard from "../dashboard/VerifiedAchievementsCard";
import RecentActivityCard from "../dashboard/RecentActivityCard";
import RecruiterInsightsCard from "../dashboard/RecruiterInsightsCard";

import {
  ShieldCheck,
  FileText,
  Users,
  Eye,
} from "lucide-react";

import SectionHeading from "../shared/SectionHeading";
import Container from "../shared/Container";


export default function DashboardPreview() {
  return (
    <section className="bg-slate-50 py-28">
      <Container>
        <SectionHeading
          badge="PRODUCT PREVIEW"
          title="Your Verified Student Dashboard"
          description="Everything you need to build trust and get discovered by recruiters."
        />

        <Card className="mt-16 overflow-hidden p-8 shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(37,99,235,0.15)]">

          {/* Top Stats */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <StatCard
              title="Trust Score"
              value="78"
              helperText="/100"
              icon={ShieldCheck}
            />

            <StatCard
              title="Documents"
              value="12"
              helperText="/15"
              icon={FileText}
              iconBgColor="bg-green-100"
              iconColor="text-green-600"
            />

            <StatCard
              title="References"
              value="8"
              helperText="/10"
              icon={Users}
              iconBgColor="bg-purple-100"
              iconColor="text-purple-600"
            />

            <StatCard
              title="Profile Views"
              value="154"
              helperText="this week"
              icon={Eye}
              iconBgColor="bg-orange-100"
              iconColor="text-orange-600"
            />
          </div>

          {/* Profile Completion */}
          <div className="mt-8">
            <ProfileCompletionCard />
          </div>

          {/* Middle Grid */}
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <VerifiedAchievementsCard />
            <RecentActivityCard />
          </div>

          {/* Bottom */}
          <div className="mt-8">
            <RecruiterInsightsCard />
          </div>

        </Card>
      </Container>
    </section>
  );
}