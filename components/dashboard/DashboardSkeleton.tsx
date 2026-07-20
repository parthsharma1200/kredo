import Skeleton from "@/components/ui/Skeleton";

export default function DashboardSkeleton() {
  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* Sidebar */}

      <div className="hidden w-64 border-r bg-white lg:block" />

      <div className="flex-1 p-8 space-y-8">

        <Skeleton className="h-12 w-96" />

        <Skeleton className="h-44 w-full rounded-3xl" />

        <div className="grid gap-6 md:grid-cols-3">

          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />

        </div>

        <div className="grid gap-8 xl:grid-cols-3">

          <Skeleton className="h-96 xl:col-span-2" />
          <Skeleton className="h-96" />

        </div>

      </div>

    </div>
  );
}