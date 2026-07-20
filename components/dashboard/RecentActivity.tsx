import Card from "../ui/Card";
import {
  CheckCircle2,
  Users,
  Eye,
  Upload,
} from "lucide-react";

const activities = [
  {
    title: "Degree certificate verified by Kredo",
    time: "2 hours ago",
    icon: CheckCircle2,
    color: "text-green-500",
  },
  {
    title: "Reference request sent to Prof. Parth",
    time: "Yesterday",
    icon: Users,
    color: "text-blue-500",
  },
  {
    title: "Your profile viewed by TechCorp Talent",
    time: "2 days ago",
    icon: Eye,
    color: "text-purple-500",
  },
  {
    title: "Transcript uploaded successfully",
    time: "3 days ago",
    icon: Upload,
    color: "text-orange-500",
  },
];

export default function RecentActivity() {
  return (
    <Card className="p-6">
      <h2 className="mb-6 text-xl font-semibold text-gray-900">
        Recent Activity
      </h2>

      <div>
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.title}
              className="flex items-center justify-between border-b border-gray-100 py-5 last:border-b-0"
            >
              <div className="flex items-center gap-4">
                <Icon
                  className={`h-5 w-5 ${activity.color}`}
                />

                <span className="text-gray-700">
                  {activity.title}
                </span>
              </div>

              <span className="text-sm text-gray-500">
                {activity.time}
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}