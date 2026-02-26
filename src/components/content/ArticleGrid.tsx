import ArticleCard from "./ArticleCard";
import type { BaseFrontmatter, ContentSection, ContentItem } from "@/lib/types";

interface ArticleGridProps {
  items: ContentItem<BaseFrontmatter>[];
  section: ContentSection;
}

export default function ArticleGrid({ items, section }: ArticleGridProps) {
  if (items.length === 0) {
    return (
      <p className="text-center text-stone-500 py-12">
        No articles found in this section yet.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <ArticleCard
          key={item.frontmatter.slug}
          frontmatter={item.frontmatter}
          section={section}
          content={item.content}
        />
      ))}
    </div>
  );
}
