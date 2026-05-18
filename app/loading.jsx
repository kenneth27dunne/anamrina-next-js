export default function Loading() {
  return (
    <div className="flex min-h-[100vh] flex-col items-center justify-center">
      <div
        className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent text-primary"
        aria-hidden
      />
      <p className="mt-4 text-lg font-medium">Loading…</p>
    </div>
  );
}
