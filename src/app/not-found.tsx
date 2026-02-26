import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <span className="text-6xl mb-6 block">🐱</span>
      <h1 className="text-4xl font-bold text-stone-900 mb-4">
        Page Not Found
      </h1>
      <p className="text-lg text-stone-600 mb-8 max-w-md mx-auto">
        Looks like this page wandered off. Even cats get lost sometimes. Let&apos;s
        get you back on track.
      </p>
      <div className="flex gap-4 justify-center">
        <Button href="/">Back to Home</Button>
        <Button href="/breeds" variant="outline">
          Browse Breeds
        </Button>
      </div>
    </div>
  );
}
