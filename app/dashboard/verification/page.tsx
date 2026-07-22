import VerificationHeader from "@/components/dashboard/verification/VerificationHeader";
import VerificationProgress from "@/components/dashboard/verification/VerificationProgress";
import VerificationGrid from "@/components/dashboard/verification/VerificationGrid";
import BackButton from "@/components/ui/BackButton";

export default function VerificationPage() {
  return (
    <div className="space-y-8">
      <BackButton fallback="/dashboard" />

      <VerificationHeader />

      <VerificationProgress />

      <VerificationGrid />
    </div>
  );
}