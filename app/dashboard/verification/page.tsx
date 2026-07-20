import DashboardLayout from "@/components/layout/DashboardLayout";
import VerificationHeader from "@/components/dashboard/verification/VerificationHeader";
import VerificationProgress from "@/components/dashboard/verification/VerificationProgress";
import VerificationGrid from "@/components/dashboard/verification/VerificationGrid";
export default function VerificationPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <VerificationHeader />

        <VerificationProgress />

        <VerificationGrid />
      </div>
    </DashboardLayout>
  );
}