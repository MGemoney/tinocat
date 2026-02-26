import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import NameGenerator from "@/components/tools/NameGenerator";

export const metadata: Metadata = {
  title: "Cat Name Generator",
  description:
    "Find the perfect name for your new cat or kitten. Choose a style and generate fun, creative name ideas instantly.",
};

export default function NameGeneratorPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools" },
          { label: "Name Generator" },
        ]}
      />
      <div className="max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
          Cat Name Generator
        </h1>
        <p className="text-lg text-stone-600 mb-8">
          Struggling to name your new feline friend? Pick a style and
          we&apos;ll generate five name ideas for you. Click to favorite the
          ones you love.
        </p>
        <NameGenerator />
      </div>
    </div>
  );
}
