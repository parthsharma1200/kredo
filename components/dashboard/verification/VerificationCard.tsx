import Card from "@/components/ui/Card";
import {
  CheckCircle2,
  Clock3,
  XCircle,
  CalendarDays,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

type VerificationCardProps = {
  title: string;
  category: string;
  status: string;
  submitted: string;
  trust: string;
  icon: React.ElementType;
};

export default function VerificationCard({
  title,
  category,
  status,
  submitted,
  trust,
  icon: Icon,
}: VerificationCardProps) {
  const verified = status === "Verified";
  const pending = status === "Pending";

  const badge = verified
    ? "bg-green-100 text-green-700 border-green-200"
    : pending
    ? "bg-amber-100 text-amber-700 border-amber-200"
    : "bg-red-100 text-red-700 border-red-200";

  return (
    <Card className="overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Header */}

      <div className="border-b border-slate-200 bg-gradient-to-r from-white to-slate-50 p-6">
        <div className="flex items-start justify-between">
          <div className="flex gap-4">
            <div className="rounded-2xl bg-blue-100 p-4">
              <Icon className="h-7 w-7 text-blue-600" />
            </div>

            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-blue-600">
                {category}
              </p>

              <h3 className="mt-1 text-2xl font-bold text-slate-900">
                {title}
              </h3>
            </div>
          </div>

          {verified ? (
            <CheckCircle2 className="h-7 w-7 text-green-600" />
          ) : pending ? (
            <Clock3 className="h-7 w-7 text-amber-500" />
          ) : (
            <XCircle className="h-7 w-7 text-red-500" />
          )}
        </div>
      </div>

      {/* Body */}

      <div className="space-y-5 p-6">
        <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
          <div className="flex items-center gap-3">
            <CalendarDays className="h-5 w-5 text-slate-500" />

            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Submitted
              </p>

              <p className="font-semibold text-slate-900">
                {submitted}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-2xl bg-blue-50 p-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-blue-600" />

            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Trust Impact
              </p>

              <p className="font-bold text-blue-700">
                {trust}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}

      <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-6 py-5">
        <span
          className={`rounded-full border px-4 py-2 text-sm font-semibold ${badge}`}
        >
          {status}
        </span>

        <button className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
          View Evidence
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </Card>
  );
}