import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-white to-indigo-50 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
          Everything You Need to Know{" "}
          <span className="text-amber-600">About Cats</span>
        </h1>
        <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto mb-10">
          Your comprehensive resource for cat breeds, health, nutrition,
          behavior, and more. Be the best cat parent you can be.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/breeds" size="lg">
            Explore Breeds
          </Button>
          <Button href="/tools" variant="outline" size="lg">
            Try Our Tools
          </Button>
        </div>
      </div>
    </section>
  );
}
