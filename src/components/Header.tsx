import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-stone-900"
          >
            <span className="text-2xl">🐱</span>
            <span>{SITE_NAME}</span>
          </Link>
          <Navigation />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
