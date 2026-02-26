import type { Metadata } from "next";
import { getAllContent } from "@/lib/content";
import { SECTION_META } from "@/lib/constants";
import BreedGrid from "@/components/content/BreedGrid";
import type { BreedFrontmatter } from "@/lib/types";

export const metadata: Metadata = {
  title: SECTION_META.breeds.title,
  description: SECTION_META.breeds.description,
};

export default function BreedsPage() {
  const breeds = getAllContent<BreedFrontmatter>("breeds");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
          {SECTION_META.breeds.title}
        </h1>
        <p className="text-lg text-stone-600 max-w-2xl">
          {SECTION_META.breeds.description}
        </p>
      </div>
      <BreedGrid breeds={breeds} />
    </div>
  );
}
