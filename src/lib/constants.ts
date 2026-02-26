export const SITE_URL = "https://tinocat.com";
export const SITE_NAME = "TinoCat";
export const SITE_DESCRIPTION =
  "Your comprehensive resource for cat breeds, health, nutrition, behavior, and more. Everything you need to be the best cat parent.";

export const NAV_ITEMS = [
  { label: "Breeds", href: "/breeds" },
  { label: "Health", href: "/health" },
  { label: "Food Reviews", href: "/food-reviews" },
  { label: "Behavior", href: "/behavior" },
  { label: "Blog", href: "/blog" },
  { label: "Tools", href: "/tools" },
  { label: "About", href: "/about" },
] as const;

export const SECTION_META: Record<
  string,
  { title: string; description: string }
> = {
  breeds: {
    title: "Cat Breeds",
    description:
      "Explore our comprehensive cat breed guides. Learn about temperament, care needs, health considerations, and more for every breed.",
  },
  health: {
    title: "Cat Health & Wellness",
    description:
      "Expert advice on keeping your cat healthy. From common conditions to preventive care, find trusted health information.",
  },
  "food-reviews": {
    title: "Cat Food Reviews",
    description:
      "Honest, in-depth cat food reviews to help you choose the best nutrition for your feline companion.",
  },
  behavior: {
    title: "Cat Behavior & Training",
    description:
      "Understand your cat better. Guides on behavior, body language, training tips, and building a stronger bond.",
  },
  blog: {
    title: "TinoCat Blog",
    description:
      "The latest news, stories, tips, and insights from the TinoCat team for cat lovers everywhere.",
  },
};
