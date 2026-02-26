"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const breedWeights: Record<string, { min: number; max: number }> = {
  persian: { min: 7, max: 12 },
  siamese: { min: 6, max: 10 },
  "maine-coon": { min: 10, max: 25 },
  "british-shorthair": { min: 8, max: 18 },
  "domestic-shorthair": { min: 6, max: 12 },
  ragdoll: { min: 8, max: 20 },
  bengal: { min: 6, max: 15 },
  abyssinian: { min: 6, max: 10 },
  "scottish-fold": { min: 6, max: 13 },
  sphynx: { min: 6, max: 12 },
};

const breedLabels: Record<string, string> = {
  persian: "Persian",
  siamese: "Siamese",
  "maine-coon": "Maine Coon",
  "british-shorthair": "British Shorthair",
  "domestic-shorthair": "Domestic Shorthair (Mixed)",
  ragdoll: "Ragdoll",
  bengal: "Bengal",
  abyssinian: "Abyssinian",
  "scottish-fold": "Scottish Fold",
  sphynx: "Sphynx",
};

type WeightStatus = "underweight" | "healthy" | "overweight" | null;

export default function WeightCalculator() {
  const [breed, setBreed] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<WeightStatus>(null);
  const [range, setRange] = useState<{ min: number; max: number } | null>(null);

  function calculate() {
    if (!breed || !weight) return;
    const w = parseFloat(weight);
    if (isNaN(w) || w <= 0) return;
    const r = breedWeights[breed];
    if (!r) return;
    setRange(r);
    if (w < r.min) setResult("underweight");
    else if (w > r.max) setResult("overweight");
    else setResult("healthy");
  }

  const statusConfig = {
    underweight: {
      color: "text-amber-700 bg-amber-50 border-amber-200",
      label: "Underweight",
      message:
        "Your cat may be underweight. Consider consulting your vet about their diet and any underlying health concerns.",
    },
    healthy: {
      color: "text-green-700 bg-green-50 border-green-200",
      label: "Healthy Weight",
      message:
        "Great news! Your cat appears to be at a healthy weight for their breed. Keep up the good work!",
    },
    overweight: {
      color: "text-red-700 bg-red-50 border-red-200",
      label: "Overweight",
      message:
        "Your cat may be overweight. Talk to your vet about a weight management plan including diet and exercise.",
    },
  };

  return (
    <div className="max-w-lg">
      <div className="space-y-4">
        <div>
          <label
            htmlFor="breed"
            className="block text-sm font-medium text-stone-700 mb-1"
          >
            Cat Breed
          </label>
          <select
            id="breed"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
              setResult(null);
            }}
            className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-stone-900 bg-white"
          >
            <option value="">Select a breed...</option>
            {Object.entries(breedLabels).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="weight"
            className="block text-sm font-medium text-stone-700 mb-1"
          >
            Current Weight (lbs)
          </label>
          <input
            id="weight"
            type="number"
            min="1"
            max="40"
            step="0.1"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
              setResult(null);
            }}
            placeholder="e.g. 10"
            className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-stone-900"
          />
        </div>

        <Button onClick={calculate} className="w-full">
          Check Weight
        </Button>
      </div>

      {result && range && (
        <div
          className={`mt-6 rounded-xl border p-5 ${statusConfig[result].color}`}
        >
          <h3 className="font-bold text-lg mb-1">{statusConfig[result].label}</h3>
          <p className="text-sm mb-3">{statusConfig[result].message}</p>
          <p className="text-xs opacity-75">
            Healthy weight range for {breedLabels[breed]}: {range.min}–
            {range.max} lbs
          </p>
        </div>
      )}

      <p className="mt-6 text-xs text-stone-400">
        This tool provides general guidance only. Always consult your
        veterinarian for personalized advice about your cat&apos;s weight and health.
      </p>
    </div>
  );
}
