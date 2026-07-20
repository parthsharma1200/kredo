import { LucideIcon } from "lucide-react";
import Card from "../ui/Card";

type StatCardProps = {
  title: string;
  value: string | number;
  helperText?: string;
  icon: LucideIcon;
  iconBgColor?: string;
  iconColor?: string;
};

export default function StatCard({
  title,
  value,
  helperText,
  icon: Icon,
  iconBgColor = "bg-blue-100",
  iconColor = "text-blue-600",
}: StatCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>

          <div className="mt-2 flex items-end gap-2">
            <h2 className="text-3xl font-bold text-gray-900">
              {value}
            </h2>

            {helperText && (
              <span className="mb-1 text-sm text-gray-500">
                {helperText}
              </span>
            )}
          </div>
        </div>

        <div className={`rounded-xl p-3 ${iconBgColor}`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
      </div>
    </Card>
  );
}