import type { Metadata } from "next";
import { getAllContent } from "@/lib/content";
import { SECTION_META } from "@/lib/constants";
import ArticleGrid from "@/components/content/ArticleGrid";

export const metadata: Metadata = {
  title: SECTION_META.health.title,
  description: SECTION_META.health.description,
};

export default function HealthPage() {
  const articles = getAllContent("health");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
          {SECTION_META.health.title}
        </h1>
        <p className="text-lg text-stone-600 max-w-2xl">
          {SECTION_META.health.description}
        </p>
      </div>
      <ArticleGrid items={articles} section="health" />
    </div>
  );
}
