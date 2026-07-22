import {
  CheckCircle2,
  Clock3,
  XCircle,
  TrendingUp,
} from "lucide-react";

import Card from "@/components/ui/Card";

export default function VerificationProgress() {
  const verified = 4;
  const pending = 2;
  const rejected = 1;

  const total = verified + pending + rejected;
  const progress = Math.round((verified / total) * 100);

  return (
    <Card className="overflow-hidden p-0">
      <div className="border-b border-slate-200 bg-gradient-to-r from-white to-slate-50 px-8 py-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Verification Progress
            </h2>

            <p className="mt-2 text-slate-600">
              Every verified achievement improves your Trust Score and makes
              your profile more credible for recruiters.
            </p>
          </div>

          <div className="rounded-2xl bg-blue-50 px-6 py-5 text-center">
            <TrendingUp className="mx-auto mb-2 h-8 w-8 text-blue-600" />

            <p className="text-4xl font-black text-blue-700">
              {progress}%
            </p>

            <p className="text-sm font-medium text-slate-600">
              Completion
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-5 p-8 md:grid-cols-3">
        <div className="rounded-2xl border border-green-100 bg-green-50 p-6">
          <CheckCircle2 className="mb-4 h-8 w-8 text-green-600" />

          <p className="text-4xl font-black text-green-700">
            {verified}
          </p>

          <p className="mt-2 font-semibold text-slate-900">
            Verified
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Successfully approved achievements.
          </p>
        </div>

        <div className="rounded-2xl border border-amber-100 bg-amber-50 p-6">
          <Clock3 className="mb-4 h-8 w-8 text-amber-600" />

          <p className="text-4xl font-black text-amber-700">
            {pending}
          </p>

          <p className="mt-2 font-semibold text-slate-900">
            Pending
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Currently under review.
          </p>
        </div>

        <div className="rounded-2xl border border-red-100 bg-red-50 p-6">
          <XCircle className="mb-4 h-8 w-8 text-red-600" />

          <p className="text-4xl font-black text-red-700">
            {rejected}
          </p>

          <p className="mt-2 font-semibold text-slate-900">
            Rejected
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Needs corrections before resubmission.
          </p>
        </div>
      </div>

      <div className="border-t border-slate-200 px-8 py-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-semibold text-slate-700">
            Overall Verification Progress
          </span>

          <span className="font-bold text-blue-600">
            {progress}%
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-4 text-sm text-slate-500">
          Verify more achievements to increase your Trust Score and stand out to
          recruiters.
        </p>
      </div>
    </Card>
  );
}