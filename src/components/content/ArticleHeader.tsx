import Badge from "@/components/ui/Badge";
import type { BaseFrontmatter } from "@/lib/types";

interface ArticleHeaderProps {
  frontmatter: BaseFrontmatter;
  readingTime: number;
}

export default function ArticleHeader({
  frontmatter,
  readingTime,
}: ArticleHeaderProps) {
  return (
    <header className="mb-8">
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {frontmatter.tags.map((tag) => (
          <Badge key={tag} variant="stone">
            {tag}
          </Badge>
        ))}
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
        {frontmatter.title}
      </h1>
      <p className="text-lg text-stone-600 mb-6">{frontmatter.description}</p>
      <div className="flex items-center gap-4 text-sm text-stone-500 border-t border-b border-stone-200 py-3">
        <span>By {frontmatter.author}</span>
        <span>·</span>
        <time dateTime={frontmatter.date}>
          {new Date(frontmatter.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </time>
        <span>·</span>
        <span>{readingTime} min read</span>
      </div>
    </header>
  );
}
