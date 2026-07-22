"use client";

import { useState } from "react";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import ConfirmDialog from "@/components/ui/ConfirmDialog";
import EvidenceModal from "./EvidenceModal";

import {
  User,
  Building2,
  Calendar,
  Award,
  Eye,
  ShieldCheck,
  XCircle,
} from "lucide-react";

import {
  approveAchievement,
  rejectAchievement,
} from "@/services/admin.services";

import { toast } from "sonner";

interface Props {
  document: any;
  onUpdated: () => Promise<void> | void;
}

export default function VerificationCard({
  document,
  onUpdated,
}: Props) {
  const [loading, setLoading] = useState(false);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [rejectOpen, setRejectOpen] = useState(false);

  async function handleApprove() {
    setLoading(true);

    try {
      await approveAchievement(
        document.id,
        document.user_id
      );

      toast.success("Achievement approved.");

      await onUpdated();
    } catch (error) {
      console.error(error);

      toast.error("Approval failed.");
    } finally {
      setLoading(false);
    }
  }

  async function handleReject() {
    setLoading(true);

    try {
      await rejectAchievement(document.id);

      toast.success("Achievement rejected.");

      setRejectOpen(false);

      await onUpdated();
    } catch (error) {
      console.error(error);

      toast.error("Rejection failed.");
    } finally {
      setLoading(false);
    }
  }

return (
  <>
    <Card className="group overflow-hidden border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Header */}
      <div className="border-b border-slate-100 bg-gradient-to-r from-blue-50 via-white to-indigo-50 p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-lg font-bold text-white shadow-md">
              {document.profiles?.full_name
                ?.split(" ")
                .map((n: string) => n[0])
                .join("")
                .slice(0, 2)
                .toUpperCase() ?? "ST"}
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900">
                {document.profiles?.full_name ?? "Student"}
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {document.profiles?.email}
              </p>
            </div>
          </div>

          <Badge variant="pending">Pending</Badge>
        </div>
      </div>

      {/* Body */}
      <div className="space-y-6 p-6">
        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
          <div className="flex items-center gap-3">
            <Award className="h-5 w-5 text-blue-600" />

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Achievement
              </p>

              <p className="text-lg font-semibold text-slate-900">
                {document.title}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-4">
            <Building2 className="h-5 w-5 text-blue-600" />

            <div>
              <p className="text-xs uppercase text-slate-500">
                Organization
              </p>

              <p className="font-medium text-slate-800">
                {document.organization || "-"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-4">
            <Calendar className="h-5 w-5 text-blue-600" />

            <div>
              <p className="text-xs uppercase text-slate-500">
                Issue Date
              </p>

              <p className="font-medium text-slate-800">
                {document.issue_date || "-"}
              </p>
            </div>
          </div>
        </div>

        {/* Trust Score */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white shadow-lg">
          <p className="text-sm opacity-80">
            Trust Reward
          </p>

          <div className="mt-2 flex items-end justify-between">
            <div>
              <p className="text-4xl font-bold">
                +{document.trust_points ?? 0}
              </p>

              <p className="text-sm opacity-80">
                Trust Points
              </p>
            </div>

            <ShieldCheck className="h-12 w-12 opacity-80" />
          </div>
        </div>

        {/* Actions */}
        <div className="grid gap-3 md:grid-cols-3">
          <Button
            variant="secondary"
            onClick={() => setViewerOpen(true)}
            className="h-11"
          >
            <Eye className="mr-2 h-4 w-4" />
            View Evidence
          </Button>

          <Button
            disabled={loading}
            onClick={handleApprove}
            className="h-11 bg-emerald-600 hover:bg-emerald-700"
          >
            <ShieldCheck className="mr-2 h-4 w-4" />

            {loading ? "Approving..." : "Approve"}
          </Button>

          <Button
            variant="secondary"
            disabled={loading}
            onClick={() => setRejectOpen(true)}
            className="h-11 border-red-200 text-red-600 hover:bg-red-50"
          >
            <XCircle className="mr-2 h-4 w-4" />
            Reject
          </Button>
        </div>
      </div>
    </Card>

    <EvidenceModal
      open={viewerOpen}
      onClose={() => setViewerOpen(false)}
      url={document.evidence_url}
    />

    <ConfirmDialog
      open={rejectOpen}
      title="Reject Achievement?"
      description="This achievement will be rejected."
      confirmText="Reject"
      cancelText="Cancel"
      loading={loading}
      onConfirm={handleReject}
      onCancel={() => setRejectOpen(false)}
    />
  </>
);
}