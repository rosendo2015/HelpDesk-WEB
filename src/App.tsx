import { Skeleton } from "./components/Skeleton";

export function App() {
  return (
    <div className="flex flex-col gap-6 bg-gray-600">
      <h1 className="text-3xl font-bold text-center pt-10">Hello, World!</h1>
      <Skeleton className="h-6 w-6" rounded="full" />
      <Skeleton className="h-6 w-6" rounded="sm" />
      <Skeleton className="h-6 w-6" rounded="lg" />
    </div>
  );
}




