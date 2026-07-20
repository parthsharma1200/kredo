import { LucideIcon, Inbox } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  action?: React.ReactNode;
}

export default function EmptyState({
  title,
  description,
  icon: Icon = Inbox,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center rounded-3xl border border-dashed bg-white px-8 py-16 text-center shadow-sm">

      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">

        <Icon className="h-10 w-10 text-blue-600" />

      </div>

      <h3 className="mt-6 text-2xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-3 max-w-md text-gray-500">
        {description}
      </p>

      {action && (
        <div className="mt-8">
          {action}
        </div>
      )}

    </div>
  );
}