import { Calendar, GraduationCap, School } from "lucide-react";

type EducationCardProps = {
  university: string | null;
  degree: string | null;
  graduationYear?: number | null;
};

export default function EducationCard({
  university,
  degree,
  graduationYear,
}: EducationCardProps) {
  return (
    <section className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-lg">
      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-xl bg-blue-100 p-3">
          <GraduationCap className="h-6 w-6 text-blue-700" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Education
          </h2>

          <p className="text-sm text-gray-500">
            Academic Information
          </p>
        </div>
      </div>

      <div className="space-y-6">

        <div className="flex items-start gap-4">
          <School className="mt-1 h-5 w-5 text-blue-600" />

          <div>
            <p className="text-sm text-gray-500">University</p>
            <p className="font-semibold text-gray-900">
              {university || "Not Provided"}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <GraduationCap className="mt-1 h-5 w-5 text-green-600" />

          <div>
            <p className="text-sm text-gray-500">Degree</p>
            <p className="font-semibold text-gray-900">
              {degree || "Not Provided"}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Calendar className="mt-1 h-5 w-5 text-orange-500" />

          <div>
            <p className="text-sm text-gray-500">Graduation Year</p>
            <p className="font-semibold text-gray-900">
              {graduationYear || "Not Provided"}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}