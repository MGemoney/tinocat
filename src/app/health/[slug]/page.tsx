import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSlugs, getContentBySlug, getReadingTime } from "@/lib/content";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ArticleHeader from "@/components/content/ArticleHeader";
import MDXContent from "@/components/content/MDXContent";
import JsonLd from "@/components/content/JsonLd";
import type { HealthFrontmatter } from "@/lib/types";

export const dynamicParams = false;

export function generateStaticParams() {
  return getSlugs("health").map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const { frontmatter } = getContentBySlug<HealthFrontmatter>("health", slug);
    return {
      title: frontmatter.title,
      description: frontmatter.description,
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.description,
        type: "article",
        publishedTime: frontmatter.date,
        authors: [frontmatter.author],
      },
    };
  });
}

export default async function HealthArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const slugs = getSlugs("health");
  if (!slugs.includes(slug)) notFound();

  const { frontmatter, content } = getContentBySlug<HealthFrontmatter>(
    "health",
    slug
  );
  const readingTime = getReadingTime(content);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.description,
    datePublished: frontmatter.date,
    author: { "@type": "Organization", name: frontmatter.author },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <JsonLd data={jsonLd} />
      <Breadcrumbs
        items={[
          { label: "Health", href: "/health" },
          { label: frontmatter.title },
        ]}
      />
      <div className="max-w-3xl">
        <ArticleHeader frontmatter={frontmatter} readingTime={readingTime} />
        <MDXContent source={content} />
      </div>
    </div>
  );
}
