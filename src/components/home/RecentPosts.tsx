import ArticleCard from "@/components/content/ArticleCard";
import Button from "@/components/ui/Button";
import { getAllContentAcrossSections } from "@/lib/content";
import type { ContentSection } from "@/lib/types";

export default function RecentPosts() {
  const recent = getAllContentAcrossSections().slice(0, 6);

  if (recent.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
              Recent Posts
            </h2>
            <p className="text-stone-500">
              The latest from TinoCat.
            </p>
          </div>
          <Button href="/blog" variant="outline" size="sm">
            View All
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recent.map(({ section, item }) => (
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
