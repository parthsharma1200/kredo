import { Plus } from "lucide-react";
interface AchievementHeaderProps {
  onAddClick: () => void;
}

export default function AchievementHeader({
  onAddClick,
}: AchievementHeaderProps) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="font-semibold uppercase tracking-widest text-blue-600">
          Achievement Vault
        </p>

        <h1 className="mt-2 text-4xl font-bold text-gray-900">
          Every achievement tells your story.
        </h1>

        <p className="mt-3 max-w-2xl text-lg text-gray-600">
          Add achievements and support them with verifiable evidence to build your credibility.
        </p>
      </div>

      <button
        onClick={onAddClick}
        className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        <Plus className="h-5 w-5" />
        Add Achievement
      </button>
    </div>
  );
}