import Card from "@/components/ui/Card";
import Skeleton from "@/components/ui/Skeleton";

export default function CandidateCardSkeleton() {
  return (
    <Card className="rounded-3xl p-6">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <Skeleton className="h-16 w-16 rounded-full" />

          <div className="space-y-3">
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>

        <Skeleton className="h-16 w-20 rounded-2xl" />
      </div>

      <Skeleton className="mt-8 h-5 w-full" />
      <Skeleton className="mt-4 h-5 w-3/4" />

      <div className="mt-8 flex gap-2">
        <Skeleton className="h-8 w-20 rounded-full" />
        <Skeleton className="h-8 w-20 rounded-full" />
        <Skeleton className="h-8 w-20 rounded-full" />
      </div>

      <Skeleton className="mt-8 h-12 w-full rounded-xl" />
    </Card>
  );
}