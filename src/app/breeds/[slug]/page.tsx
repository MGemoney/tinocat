import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSlugs, getContentBySlug, getReadingTime } from "@/lib/content";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ArticleHeader from "@/components/content/ArticleHeader";
import MDXContent from "@/components/content/MDXContent";
import BreedStats from "@/components/content/BreedStats";
import JsonLd from "@/components/content/JsonLd";
import type { BreedFrontmatter } from "@/lib/types";

export const dynamicParams = false;

export function generateStaticParams() {
  return getSlugs("breeds").map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const { frontmatter } = getContentBySlug<BreedFrontmatter>("breeds", slug);
    return {
      title: frontmatter.title,
      description: frontmatter.description,
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.description,
        type: "article",
        publishedTime: frontmatter.date,
        modifiedTime: frontmatter.updated,
        authors: [frontmatter.author],
      },
    };
  });
}

export default async function BreedPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const slugs = getSlugs("breeds");
  if (!slugs.includes(slug)) notFound();

  const { frontmatter, content } = getContentBySlug<BreedFrontmatter>(
    "breeds",
    slug
  );
  const readingTime = getReadingTime(content);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.description,
    datePublished: frontmatter.date,
    dateModified: frontmatter.updated || frontmatter.date,
    author: { "@type": "Organization", name: frontmatter.author },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <JsonLd data={jsonLd} />
      <Breadcrumbs
        items={[
          { label: "Breeds", href: "/breeds" },
          { label: frontmatter.breed_name },
        ]}
      />
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <ArticleHeader frontmatter={frontmatter} readingTime={readingTime} />
          <MDXContent source={content} />
        </div>
        <div>
          <BreedStats frontmatter={frontmatter} />
        </div>
      </div>
    </div>
  );
}
