import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { getFeaturedContent } from "@/lib/content";
import type { BreedFrontmatter } from "@/lib/types";

export default function BreedSpotlight() {
  const featured = getFeaturedContent<BreedFrontmatter>("breeds");
  const breed = featured[0];

  if (!breed) return null;

  const fm = breed.frontmatter;

  return (
    <section className="py-16 bg-amber-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-8">
          Breed Spotlight
        </h2>
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-amber-100">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden relative aspect-square bg-stone-100">
              {fm.image ? (
                <Image
                  src={fm.image}
                  alt={fm.breed_name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center text-6xl">
                  🐱
                </div>
              )}
            </div>
            <div>
              <Badge variant="amber" className="mb-3">
                {fm.origin}
              </Badge>
              <h3 className="text-2xl font-bold text-stone-900 mb-2">
                {fm.breed_name}
              </h3>
              <p className="text-stone-600 mb-4">{fm.description}</p>
              <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
                <div>
                  <span className="text-stone-400">Life Span</span>
                  <p className="font-medium text-stone-700">{fm.life_span}</p>
                </div>
                <div>
                  <span className="text-stone-400">Coat</span>
                  <p className="font-medium text-stone-700">{fm.coat}</p>
                </div>
                <div>
                  <span className="text-stone-400">Weight (male)</span>
                  <p className="font-medium text-stone-700">{fm.weight.male}</p>
                </div>
                <div>
                  <span className="text-stone-400">Energy Level</span>
                  <p className="font-medium text-stone-700">
                    {"★".repeat(fm.energy_level)}
                    {"☆".repeat(5 - fm.energy_level)}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {fm.temperament.map((trait) => (
                  <Badge key={trait} variant="stone">
                    {trait}
                  </Badge>
                ))}
              </div>
              <Button href={`/breeds/${fm.slug}`}>Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
