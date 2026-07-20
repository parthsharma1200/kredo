import { FileText } from "lucide-react";

type AboutCardProps = {
  bio: string | null;
};

export default function AboutCard({
  bio,
}: AboutCardProps) {
  return (
    <section className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-lg">
      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-xl bg-orange-100 p-3">
          <FileText className="h-6 w-6 text-orange-700" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            About
          </h2>

          <p className="text-sm text-gray-500">
            Student Introduction
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-gray-100 bg-gray-50 p-6">
        <p className="leading-8 text-gray-700">
          {bio || "No bio has been added yet."}
        </p>
      </div>
    </section>
  );
}