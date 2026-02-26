import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type {
  BaseFrontmatter,
  ContentSection,
  ContentItem,
} from "./types";

const contentDirectory = path.join(process.cwd(), "content");

export function getSlugs(section: ContentSection): string[] {
  const dir = path.join(contentDirectory, section);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getContentBySlug<T extends BaseFrontmatter>(
  section: ContentSection,
  slug: string
): ContentItem<T> {
  const filePath = path.join(contentDirectory, section, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    frontmatter: data as T,
    content,
  };
}

export function getAllContent<T extends BaseFrontmatter>(
  section: ContentSection
): ContentItem<T>[] {
  const slugs = getSlugs(section);
  return slugs
    .map((slug) => getContentBySlug<T>(section, slug))
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}

export function getFeaturedContent<T extends BaseFrontmatter>(
  section: ContentSection
): ContentItem<T>[] {
  return getAllContent<T>(section).filter((item) => item.frontmatter.featured);
}

export function getRecentContent<T extends BaseFrontmatter>(
  section: ContentSection,
  limit: number = 3
): ContentItem<T>[] {
  return getAllContent<T>(section).slice(0, limit);
}

export function getContentByTag<T extends BaseFrontmatter>(
  section: ContentSection,
  tag: string
): ContentItem<T>[] {
  return getAllContent<T>(section).filter((item) =>
    item.frontmatter.tags.includes(tag)
  );
}

export function getAllTags(section: ContentSection): string[] {
  const allContent = getAllContent(section);
  const tagSet = new Set<string>();
  allContent.forEach((item) => {
    item.frontmatter.tags.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}

export function getAllContentAcrossSections(): {
  section: ContentSection;
  item: ContentItem;
}[] {
  const sections: ContentSection[] = [
    "breeds",
    "health",
    "food-reviews",
    "behavior",
    "blog",
  ];
  const allItems: { section: ContentSection; item: ContentItem }[] = [];
  sections.forEach((section) => {
    getAllContent(section).forEach((item) => {
      allItems.push({ section, item });
    });
  });
  return allItems.sort(
    (a, b) =>
      new Date(b.item.frontmatter.date).getTime() -
      new Date(a.item.frontmatter.date).getTime()
  );
}

export function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}
