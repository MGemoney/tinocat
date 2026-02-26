import BreedCard from "./BreedCard";
import type { BreedFrontmatter, ContentItem } from "@/lib/types";

interface BreedGridProps {
  breeds: ContentItem<BreedFrontmatter>[];
}

export default function BreedGrid({ breeds }: BreedGridProps) {
  if (breeds.length === 0) {
    return (
      <p className="text-center text-stone-500 py-12">
        No breeds found yet. Check back soon!
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {breeds.map((breed) => (
        <BreedCard
          key={breed.frontmatter.slug}
          frontmatter={breed.frontmatter}
        />
      ))}
    </div>
  );
}
