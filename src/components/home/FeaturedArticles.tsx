import ArticleCard from "@/components/content/ArticleCard";
import { getAllContentAcrossSections } from "@/lib/content";
import type { ContentSection } from "@/lib/types";

export default function FeaturedArticles() {
  const allContent = getAllContentAcrossSections();
  const featured = allContent
    .filter(({ item }) => item.frontmatter.featured)
    .slice(0, 3);

  if (featured.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
          Featured Articles
        </h2>
        <p className="text-stone-500 mb-8">
          Hand-picked reads from our editors.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map(({ section, item }) => (
            <ArticleCard
              key={`${section}-${item.frontmatter.slug}`}
              frontmatter={item.frontmatter}
              section={section as ContentSection}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
