"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const namesByCategory: Record<string, string[]> = {
  classic: [
    "Whiskers", "Mittens", "Shadow", "Luna", "Oliver", "Simba", "Felix",
    "Cleo", "Max", "Bella", "Charlie", "Daisy", "Oscar", "Lily", "Tiger",
    "Ginger", "Smokey", "Misty", "Jasper", "Chloe",
  ],
  funny: [
    "Chairman Meow", "Purrlock Holmes", "Catrick Swayze", "Meowly Cyrus",
    "Whisker Biscuit", "Sir Pounce-a-Lot", "Kitty Purry", "Catniss Everclean",
    "Fuzz Aldrin", "Paw McCartney", "Cat Stevens", "Clawdia", "Meowzart",
    "Catanova", "Purrsephone", "Fishbait", "Tuna Turner", "Cat Damon",
    "Furr-dinand", "Meowssolini",
  ],
  elegant: [
    "Arabella", "Sebastian", "Persephone", "Archibald", "Genevieve",
    "Montgomery", "Cordelia", "Reginald", "Vivienne", "Bartholomew",
    "Anastasia", "Leopold", "Ophelia", "Fitzgerald", "Isadora",
    "Wellington", "Seraphina", "Cornelius", "Esmeralda", "Augustine",
  ],
  foodie: [
    "Biscuit", "Mochi", "Waffles", "Pepper", "Pumpkin", "Noodle",
    "Cinnamon", "Truffle", "Mango", "Cookie", "Pickles", "Peaches",
    "Nacho", "Tofu", "Cupcake", "Sushi", "Butterscotch", "Churro",
    "Dumpling", "Olive",
  ],
};

export default function NameGenerator() {
  const [category, setCategory] = useState("classic");
  const [names, setNames] = useState<string[]>([]);
  const [favorite, setFavorite] = useState<string | null>(null);

  function generateNames() {
    const pool = namesByCategory[category];
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    setNames(shuffled.slice(0, 5));
    setFavorite(null);
  }

  return (
    <div className="max-w-lg">
      <div className="space-y-4">
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-stone-700 mb-1"
          >
            Name Style
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setNames([]);
              setFavorite(null);
            }}
            className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-stone-900 bg-white"
          >
            <option value="classic">Classic & Timeless</option>
            <option value="funny">Funny & Punny</option>
            <option value="elegant">Elegant & Regal</option>
            <option value="foodie">Food-Inspired</option>
          </select>
        </div>

        <Button onClick={generateNames} className="w-full">
          Generate Names
        </Button>
      </div>

      {names.length > 0 && (
        <div className="mt-6 space-y-2">
          <h3 className="font-semibold text-stone-900 mb-3">
            Here are your names:
          </h3>
          {names.map((name) => (
            <button
              key={name}
              onClick={() => setFavorite(name)}
              className={`w-full text-left px-4 py-3 rounded-lg border transition-colors ${
                favorite === name
                  ? "border-amber-400 bg-amber-50 text-amber-800"
                  : "border-stone-200 bg-white hover:bg-stone-50 text-stone-700"
              }`}
            >
              <span className="font-medium">{name}</span>
              {favorite === name && (
                <span className="float-right text-amber-600 text-sm">
                  Favorited!
                </span>
              )}
            </button>
          ))}
          <button
            onClick={generateNames}
            className="w-full text-center text-sm text-amber-700 hover:text-amber-800 mt-3 py-2"
          >
            Shuffle again
          </button>
        </div>
      )}
    </div>
  );
}
