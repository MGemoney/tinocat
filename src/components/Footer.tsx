import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

const footerSections = [
  {
    title: "Explore",
    links: [
      { label: "Cat Breeds", href: "/breeds" },
      { label: "Health & Wellness", href: "/health" },
      { label: "Food Reviews", href: "/food-reviews" },
      { label: "Behavior & Training", href: "/behavior" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Weight Calculator", href: "/tools/weight-calculator" },
      { label: "Name Generator", href: "/tools/name-generator" },
      { label: "All Tools", href: "/tools" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-bold text-white mb-3"
            >
              <span className="text-xl">🐱</span>
              <span>{SITE_NAME}</span>
            </Link>
            <p className="text-sm text-stone-400 leading-relaxed">
              Your comprehensive resource for everything about cats. Breeds,
              health, nutrition, and more.
            </p>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-amber-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-stone-800 mt-10 pt-8 text-center text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
