import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSlugs, getContentBySlug, getReadingTime } from "@/lib/content";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ArticleHeader from "@/components/content/ArticleHeader";
import MDXContent from "@/components/content/MDXContent";
import JsonLd from "@/components/content/JsonLd";
import type { BehaviorFrontmatter } from "@/lib/types";

export const dynamicParams = false;

export function generateStaticParams() {
  return getSlugs("behavior").map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const { frontmatter } = getContentBySlug<BehaviorFrontmatter>(
      "behavior",
      slug
    );
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

export default async function BehaviorArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const slugs = getSlugs("behavior");
  if (!slugs.includes(slug)) notFound();

  const { frontmatter, content } = getContentBySlug<BehaviorFrontmatter>(
    "behavior",
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
          { label: "Behavior", href: "/behavior" },
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
