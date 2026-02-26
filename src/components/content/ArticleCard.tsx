import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import type { BaseFrontmatter, ContentSection } from "@/lib/types";
import { getReadingTime } from "@/lib/content";

interface ArticleCardProps {
  frontmatter: BaseFrontmatter;
  section: ContentSection;
  content?: string;
}

export default function ArticleCard({
  frontmatter,
  section,
  content,
}: ArticleCardProps) {
  const readingTime = content ? getReadingTime(content) : null;

  return (
    <article className="group rounded-xl border border-stone-200 bg-white overflow-hidden hover:shadow-lg transition-shadow">
      {frontmatter.image && (
        <div className="aspect-video bg-stone-100 overflow-hidden relative">
          <Image
            src={frontmatter.image}
            alt={frontmatter.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <Badge>{section}</Badge>
          {readingTime && (
            <span className="text-xs text-stone-400">
              {readingTime} min read
            </span>
          )}
        </div>
        <Link href={`/${section}/${frontmatter.slug}`}>
          <h3 className="font-semibold text-stone-900 group-hover:text-amber-700 transition-colors mb-2 line-clamp-2">
            {frontmatter.title}
          </h3>
        </Link>
        <p className="text-sm text-stone-500 line-clamp-3 mb-3">
          {frontmatter.description}
        </p>
        <div className="flex items-center justify-between text-xs text-stone-400">
          <span>{frontmatter.author}</span>
          <time dateTime={frontmatter.date}>
            {new Date(frontmatter.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </time>
        </div>
      </div>
    </article>
  );
}
