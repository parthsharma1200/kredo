import Card from "@/components/ui/Card";

export default function VerificationProgress() {
  return (
    <Card className="p-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Verification Progress
          </h2>

          <p className="mt-2 text-gray-600">
            Keep verifying your achievements to strengthen your credibility.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-green-600">4</p>
            <p className="text-gray-500">Verified</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-yellow-500">2</p>
            <p className="text-gray-500">Pending</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-red-500">1</p>
            <p className="text-gray-500">Rejected</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="mb-3 flex justify-between">
          <span className="font-semibold">
            Overall Progress
          </span>

          <span className="font-bold text-blue-600">
            68%
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-blue-600"
            style={{ width: "68%" }}
          />
        </div>
      </div>
    </Card>
  );
}