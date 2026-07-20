"use client";

import { useState } from "react";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import ConfirmDialog from "@/components/ui/ConfirmDialog";

import EvidenceModal from "./EvidenceModal";

import {
  User,
  ShieldCheck,
  XCircle,
  Eye,
} from "lucide-react";

import {
  approveAchievement,
  rejectAchievement,
} from "@/services/admin.services";

import { toast } from "sonner";

interface Props {
  achievement: any;
  onUpdated: () => Promise<void> | void;
}

export default function VerificationCard({
  achievement,
  onUpdated,
}: Props) {
  const student = achievement.profiles;

  const [loading, setLoading] = useState(false);
  const [openViewer, setOpenViewer] = useState(false);
  const [openRejectDialog, setOpenRejectDialog] =
    useState(false);

  async function handleApprove() {
  console.log("🚀 Approve button clicked");

  setLoading(true);

  try {
    console.log("Achievement ID:", achievement.id);
    console.log("User ID:", achievement.user_id);

    await approveAchievement(
      achievement.id,
      achievement.user_id
    );

    console.log("✅ approveAchievement finished");

    toast.success(
      "Achievement approved successfully!"
    );

    await onUpdated();
  } catch (error) {
    console.error("❌ Approve Error:", error);

    toast.error(
      error instanceof Error
        ? error.message
        : JSON.stringify(error)
    );
  } finally {
    setLoading(false);
  }
}

  async function confirmReject() {
    setLoading(true);

    try {
      await rejectAchievement(
        achievement.id
      );

      toast.success(
        "Achievement rejected."
      );

      setOpenRejectDialog(false);

      await onUpdated();
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to reject achievement."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Card className="p-6">

        {/* Header */}

        <div className="flex items-start justify-between">

          <div>

            <div className="flex items-center gap-2">

              <User className="h-5 w-5 text-blue-600" />

              <h2 className="text-xl font-bold">
                {student?.full_name}
              </h2>

            </div>

            <p className="mt-1 text-gray-500">
              @{student?.username}
            </p>

          </div>

          <Badge variant="category">
            Pending
          </Badge>

        </div>

        {/* Achievement */}

        <div className="mt-6">

          <h3 className="text-lg font-semibold">
            {achievement.title}
          </h3>

          <p className="mt-2 text-gray-600">
            {achievement.description}
          </p>

        </div>

        {/* Trust */}

        <div className="mt-6 rounded-xl bg-slate-50 p-4">

          <p className="text-sm text-gray-500">
            Current Trust Score
          </p>

          <p className="text-2xl font-black text-blue-600">
            {student?.trust_score}
          </p>

        </div>

        {/* Actions */}

        <div className="mt-8 grid grid-cols-3 gap-3">

          <Button
            variant="secondary"
            onClick={() =>
              setOpenViewer(true)
            }
          >
            <Eye className="mr-2 h-4 w-4" />
            View
          </Button>

          <Button
            onClick={handleApprove}
            disabled={loading}
          >
            <ShieldCheck className="mr-2 h-4 w-4" />

            {loading
              ? "Approving..."
              : "Approve"}

          </Button>

          <Button
            variant="secondary"
            className="border-red-200 text-red-600 hover:bg-red-50"
            onClick={() =>
              setOpenRejectDialog(true)
            }
            disabled={loading}
          >
            <XCircle className="mr-2 h-4 w-4" />
            Reject
          </Button>

        </div>

      </Card>

      <EvidenceModal
        open={openViewer}
        onClose={() =>
          setOpenViewer(false)
        }
        url={achievement.evidence_url}
      />

      <ConfirmDialog
        open={openRejectDialog}
        title="Reject Achievement?"
        description="This achievement will be marked as rejected. This action can be changed later by an administrator, but the student will not receive verification until it is approved."
        confirmText="Reject"
        cancelText="Cancel"
        loading={loading}
        onConfirm={confirmReject}
        onCancel={() =>
          setOpenRejectDialog(false)
        }
      />
    </>
  );
}