import Badge from "@/components/ui/Badge";
import type { BreedFrontmatter } from "@/lib/types";

interface BreedStatsProps {
  frontmatter: BreedFrontmatter;
}

function StatBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-stone-600">{label}</span>
        <span className="text-stone-400">{value}/5</span>
      </div>
      <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-amber-500 rounded-full"
          style={{ width: `${(value / 5) * 100}%` }}
        />
      </div>
    </div>
  );
}

export default function BreedStats({ frontmatter: fm }: BreedStatsProps) {
  return (
    <aside className="rounded-xl border border-stone-200 bg-white p-6 space-y-6">
      <h2 className="font-bold text-lg text-stone-900">Breed Quick Facts</h2>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-stone-500">Origin</span>
          <span className="font-medium text-stone-700">{fm.origin}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-stone-500">Life Span</span>
          <span className="font-medium text-stone-700">{fm.life_span}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-stone-500">Weight (Male)</span>
          <span className="font-medium text-stone-700">{fm.weight.male}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-stone-500">Weight (Female)</span>
          <span className="font-medium text-stone-700">{fm.weight.female}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-stone-500">Coat</span>
          <span className="font-medium text-stone-700">{fm.coat}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-stone-500">Good with Children</span>
          <span className="font-medium text-stone-700">
            {fm.good_with_children ? "Yes" : "No"}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-stone-500">Good with Other Pets</span>
          <span className="font-medium text-stone-700">
            {fm.good_with_other_pets ? "Yes" : "No"}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <StatBar label="Energy Level" value={fm.energy_level} />
        <StatBar label="Grooming Needs" value={fm.grooming_needs} />
        <StatBar label="Shedding Level" value={fm.shedding_level} />
      </div>

      <div>
        <h3 className="text-sm font-medium text-stone-700 mb-2">
          Temperament
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {fm.temperament.map((trait) => (
            <Badge key={trait} variant="amber">
              {trait}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-stone-700 mb-2">Colors</h3>
        <div className="flex flex-wrap gap-1.5">
          {fm.colors.map((color) => (
            <Badge key={color} variant="stone">
              {color}
            </Badge>
          ))}
        </div>
      </div>

      {fm.health_issues.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-stone-700 mb-2">
            Common Health Issues
          </h3>
          <ul className="text-sm text-stone-500 space-y-1">
            {fm.health_issues.map((issue) => (
              <li key={issue}>• {issue}</li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}
