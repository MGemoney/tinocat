import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${SITE_NAME} — our mission, team, and commitment to being the best resource for cat owners.`,
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
        About {SITE_NAME}
      </h1>

      <div className="prose prose-stone prose-lg max-w-none">
        <p className="text-lg text-stone-600 leading-relaxed">
          {SITE_NAME} is your comprehensive resource for everything about cats.
          Whether you&apos;re a first-time cat owner or a lifelong feline
          enthusiast, we&apos;re here to help you give your cat the best life
          possible.
        </p>

        <h2>Our Mission</h2>
        <p>
          We believe every cat deserves an informed, caring owner. Our mission is
          to provide accurate, well-researched, and practical information about
          cat breeds, health, nutrition, behavior, and care — all in one place.
        </p>

        <h2>What We Cover</h2>
        <ul>
          <li>
            <strong>Breed Guides</strong> — In-depth profiles for dozens of cat
            breeds, covering temperament, care needs, and health considerations.
          </li>
          <li>
            <strong>Health & Wellness</strong> — Expert-reviewed articles on
            common health issues, preventive care, and when to see your vet.
          </li>
          <li>
            <strong>Food Reviews</strong> — Honest, detailed reviews of cat food
            products to help you make the best nutritional choices.
          </li>
          <li>
            <strong>Behavior & Training</strong> — Practical guides to
            understanding your cat&apos;s behavior and building a stronger bond.
          </li>
          <li>
            <strong>Interactive Tools</strong> — Helpful tools like our weight
            calculator and name generator to make cat ownership more fun.
          </li>
        </ul>

        <h2>Our Approach</h2>
        <p>
          Every article on {SITE_NAME} is researched with care. We consult
          veterinary sources, breed standards, and nutrition science to ensure
          the information we provide is reliable and up to date. When it comes to
          your cat&apos;s health, we always recommend consulting with your
          veterinarian for personalized advice.
        </p>

        <h2>Get In Touch</h2>
        <p>
          Have a question, suggestion, or just want to say hi? We&apos;d love to
          hear from you. Reach out to us and let us know how we can make{" "}
          {SITE_NAME} even better for you and your feline friends.
        </p>
      </div>
    </div>
  );
}
