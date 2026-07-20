// components/dashboard/ProfileCompletionCard.tsx

import Card from "../ui/Card";

export default function ProfileCompletionCard() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">
          Profile Completion
        </h3>

        <span className="text-2xl font-bold text-blue-600">
          92%
        </span>
      </div>

      <div className="mt-5 h-3 overflow-hidden rounded-full bg-gray-200">
        <div className="h-full w-[92%] rounded-full bg-blue-600" />
      </div>

      <p className="mt-4 text-sm text-gray-500">
        Your profile is almost complete. Add one more verified achievement to reach 100%.
      </p>
    </Card>
  );
}