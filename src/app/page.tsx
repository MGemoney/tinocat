import Hero from "@/components/home/Hero";
import FeaturedArticles from "@/components/home/FeaturedArticles";
import BreedSpotlight from "@/components/home/BreedSpotlight";
import RecentPosts from "@/components/home/RecentPosts";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedArticles />
      <BreedSpotlight />
      <RecentPosts />
    </>
  );
}
