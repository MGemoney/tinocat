import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { getSlugs } from "@/lib/content";
import type { ContentSection } from "@/lib/types";

export default function sitemap(): MetadataRoute.Sitemap {
  const sections: ContentSection[] = [
    "breeds",
    "health",
    "food-reviews",
    "behavior",
    "blog",
  ];

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/breeds`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/health`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/food-reviews`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/behavior`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/tools`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/tools/weight-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/tools/name-generator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];

  const contentPages: MetadataRoute.Sitemap = sections.flatMap((section) =>
    getSlugs(section).map((slug) => ({
      url: `${SITE_URL}/${section}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [...staticPages, ...contentPages];
}
