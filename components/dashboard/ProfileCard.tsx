import Card from "../ui/Card";

export default function ProfileCard() {
  return (
    <Card className="p-8">
      <div className="flex items-center gap-6">
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-100 text-4xl font-bold text-blue-600">
          JD
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            John Doe
          </h2>

          <p className="mt-2 text-gray-600">
            Computer Science Student
          </p>

          <p className="text-gray-500">
            ABC University
          </p>

          <div className="mt-4 inline-flex rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
            Trust Score • 82 / 100
          </div>
        </div>
      </div>
    </Card>
  );
}