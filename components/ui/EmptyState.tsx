import { LucideIcon } from "lucide-react";
import Button from "@/components/ui/Button";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export default function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-sm">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
        <Icon className="h-8 w-8 text-blue-600" />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mx-auto mt-3 max-w-md text-slate-500">
        {description}
      </p>

      {actionLabel && onAction && (
        <div className="mt-8">
          <Button onClick={onAction}>
            {actionLabel}
          </Button>
        </div>
      )}
    </div>
  );
}