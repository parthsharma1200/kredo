import Card from "@/components/ui/Card";
import { GraduationCap } from "lucide-react";

interface Props {
  profile: any;
}

export default function EducationCard({
  profile,
}: Props) {
  return (
    <Card className="p-6">

      <div className="flex items-center gap-3">

        <GraduationCap className="h-6 w-6 text-blue-600" />

        <h3 className="text-xl font-bold">
          Education
        </h3>

      </div>

      <div className="mt-6 space-y-3">

        <div>

          <p className="text-sm text-gray-500">
            University
          </p>

          <p className="font-semibold">
            {profile.university || "Not Added"}
          </p>

        </div>

        <div>

          <p className="text-sm text-gray-500">
            Degree
          </p>

          <p className="font-semibold">
            {profile.degree || "Not Added"}
          </p>

        </div>

        <div>

          <p className="text-sm text-gray-500">
            Graduation
          </p>

          <p className="font-semibold">
            {profile.graduation_year || "Not Added"}
          </p>

        </div>

      </div>

    </Card>
  );
}