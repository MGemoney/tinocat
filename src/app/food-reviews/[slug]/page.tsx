import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSlugs, getContentBySlug, getReadingTime } from "@/lib/content";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ArticleHeader from "@/components/content/ArticleHeader";
import MDXContent from "@/components/content/MDXContent";
import JsonLd from "@/components/content/JsonLd";
import Badge from "@/components/ui/Badge";
import type { FoodReviewFrontmatter } from "@/lib/types";

export const dynamicParams = false;

export function generateStaticParams() {
  return getSlugs("food-reviews").map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const { frontmatter } = getContentBySlug<FoodReviewFrontmatter>(
      "food-reviews",
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

export default async function FoodReviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const slugs = getSlugs("food-reviews");
  if (!slugs.includes(slug)) notFound();

  const { frontmatter, content } = getContentBySlug<FoodReviewFrontmatter>(
    "food-reviews",
    slug
  );
  const readingTime = getReadingTime(content);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    name: frontmatter.title,
    description: frontmatter.description,
    datePublished: frontmatter.date,
    author: { "@type": "Organization", name: frontmatter.author },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    reviewRating: {
      "@type": "Rating",
      ratingValue: frontmatter.rating,
      bestRating: 5,
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <JsonLd data={jsonLd} />
      <Breadcrumbs
        items={[
          { label: "Food Reviews", href: "/food-reviews" },
          { label: frontmatter.title },
        ]}
      />
      <div className="max-w-3xl">
        <ArticleHeader frontmatter={frontmatter} readingTime={readingTime} />

        <div className="mb-8 rounded-xl border border-stone-200 bg-stone-50 p-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-stone-400 block">Rating</span>
              <span className="font-bold text-amber-600 text-lg">
                {frontmatter.rating}/5
              </span>
            </div>
            <div>
              <span className="text-stone-400 block">Price Range</span>
              <span className="font-medium">{frontmatter.price_range}</span>
            </div>
            <div>
              <span className="text-stone-400 block">Type</span>
              <span className="font-medium">{frontmatter.food_type}</span>
            </div>
            <div>
              <span className="text-stone-400 block">Life Stage</span>
              <span className="font-medium">{frontmatter.life_stage}</span>
            </div>
          </div>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            <div>
              <span className="text-sm text-stone-400 block mb-1">Pros</span>
              <ul className="text-sm space-y-1">
                {frontmatter.pros.map((pro) => (
                  <li key={pro} className="text-green-700">
                    + {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-sm text-stone-400 block mb-1">Cons</span>
              <ul className="text-sm space-y-1">
                {frontmatter.cons.map((con) => (
                  <li key={con} className="text-red-600">
                    - {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <MDXContent source={content} />
      </div>
    </div>
  );
}
