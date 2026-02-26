import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import WeightCalculator from "@/components/tools/WeightCalculator";

export const metadata: Metadata = {
  title: "Cat Weight Calculator",
  description:
    "Check if your cat is at a healthy weight. Our free calculator compares your cat's weight to breed averages and gives personalized guidance.",
};

export default function WeightCalculatorPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools" },
          { label: "Weight Calculator" },
        ]}
      />
      <div className="max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
          Cat Weight Calculator
        </h1>
        <p className="text-lg text-stone-600 mb-8">
          Enter your cat&apos;s breed and current weight to see if they&apos;re
          in a healthy range. A quick check to keep your feline friend fit and
          happy.
        </p>
        <WeightCalculator />
      </div>
    </div>
  );
}
