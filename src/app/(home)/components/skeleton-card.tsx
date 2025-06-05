import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[220px]  rounded-xl" />
      <Skeleton className="h-6 w-[200px]" />
      <div className="space-y-6">
        <Skeleton className="h-4 w-[250px]" />
        <div className="flex space-x-2 justify-between">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[50px]" />
        </div>
      </div>
    </div>
  );
}
