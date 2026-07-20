import Card from "@/components/ui/Card";
import {
  CheckCircle2,
  Clock3,
  XCircle,
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

  return (
    <Card className="p-6 transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-blue-100 p-3">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              {title}
            </h3>

            <p className="text-sm text-gray-500">
              {category}
            </p>
          </div>
        </div>

        {verified ? (
          <CheckCircle2 className="h-6 w-6 text-green-600" />
        ) : pending ? (
          <Clock3 className="h-6 w-6 text-yellow-500" />
        ) : (
          <XCircle className="h-6 w-6 text-red-500" />
        )}
      </div>

      <div className="mt-6 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">
            Submitted
          </span>

          <span className="font-medium">
            {submitted}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-500">
            Trust Impact
          </span>

          <span className="font-semibold text-blue-600">
            {trust}
          </span>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${
            verified
              ? "bg-green-100 text-green-700"
              : pending
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status}
        </span>

        <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">
          View Evidence →
        </button>
      </div>
    </Card>
  );
}