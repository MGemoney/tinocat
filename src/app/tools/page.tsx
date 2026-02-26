import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cat Tools",
  description:
    "Interactive tools for cat owners — weight calculator, name generator, and more.",
};

const tools = [
  {
    title: "Cat Weight Calculator",
    description:
      "Check if your cat is at a healthy weight based on their breed, age, and current weight. Get personalized recommendations.",
    href: "/tools/weight-calculator",
    icon: "⚖️",
  },
  {
    title: "Cat Name Generator",
    description:
      "Need a name for your new feline friend? Generate fun, creative names based on your preferences.",
    href: "/tools/name-generator",
    icon: "✨",
  },
];

export default function ToolsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
          Cat Tools
        </h1>
        <p className="text-lg text-stone-600 max-w-2xl">
          Interactive tools to help you be the best cat parent. Try our free
          calculators and generators.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="group block rounded-xl border border-stone-200 bg-white p-8 hover:shadow-lg transition-shadow"
          >
            <span className="text-4xl mb-4 block">{tool.icon}</span>
            <h2 className="text-xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors mb-2">
              {tool.title}
            </h2>
            <p className="text-stone-500">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
