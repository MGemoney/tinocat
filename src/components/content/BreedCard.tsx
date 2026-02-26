import Link from "next/link";
import Badge from "@/components/ui/Badge";
import type { BreedFrontmatter } from "@/lib/types";

interface BreedCardProps {
  frontmatter: BreedFrontmatter;
}

export default function BreedCard({ frontmatter: fm }: BreedCardProps) {
  return (
    <Link
      href={`/breeds/${fm.slug}`}
      className="group block rounded-xl border border-stone-200 bg-white overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="aspect-video bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center text-5xl">
        🐱
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg text-stone-900 group-hover:text-amber-700 transition-colors mb-1">
          {fm.breed_name}
        </h3>
        <p className="text-sm text-stone-500 line-clamp-2 mb-3">
          {fm.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {fm.temperament.slice(0, 3).map((trait) => (
            <Badge key={trait} variant="stone">
              {trait}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2 text-xs text-stone-500">
          <div>
            <span className="block text-stone-400">Energy</span>
            {"★".repeat(fm.energy_level)}
          </div>
          <div>
            <span className="block text-stone-400">Grooming</span>
            {"★".repeat(fm.grooming_needs)}
          </div>
          <div>
            <span className="block text-stone-400">Shedding</span>
            {"★".repeat(fm.shedding_level)}
          </div>
        </div>
      </div>
    </Link>
  );
}
