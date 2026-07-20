interface LoadingProps {
  text?: string;
}

export default function Loading({
  text = "Loading...",
}: LoadingProps) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center">

      <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />

      <p className="mt-6 text-lg font-medium text-gray-500">
        {text}
      </p>

    </div>
  );
}