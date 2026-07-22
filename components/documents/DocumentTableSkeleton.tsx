import Card from "@/components/ui/Card";
import Skeleton from "@/components/ui/Skeleton";

export default function DocumentsTableSkeleton() {
  return (
    <Card className="rounded-3xl p-6">
      <Skeleton className="h-8 w-64" />

      <div className="mt-8 space-y-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b pb-5"
          >
            <div className="space-y-3">
              <Skeleton className="h-5 w-52" />
              <Skeleton className="h-4 w-32" />
            </div>

            <div className="flex gap-3">
              <Skeleton className="h-10 w-20 rounded-xl" />
              <Skeleton className="h-10 w-20 rounded-xl" />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}