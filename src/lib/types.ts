export interface BaseFrontmatter {
  title: string;
  slug: string;
  description: string;
  image?: string;
  date: string;
  updated?: string;
  author: string;
  tags: string[];
  featured?: boolean;
}

export interface BreedFrontmatter extends BaseFrontmatter {
  breed_name: string;
  origin: string;
  life_span: string;
  weight: {
    male: string;
    female: string;
  };
  coat: string;
  colors: string[];
  temperament: string[];
  energy_level: number;
  grooming_needs: number;
  shedding_level: number;
  health_issues: string[];
  good_with_children: boolean;
  good_with_other_pets: boolean;
  reviewer?: string;
}

export interface HealthFrontmatter extends BaseFrontmatter {
  category: string;
  reviewer?: string;
}

export interface FoodReviewFrontmatter extends BaseFrontmatter {
  brand: string;
  product_name: string;
  rating: number;
  price_range: string;
  food_type: string;
  life_stage: string;
  pros: string[];
  cons: string[];
  reviewer?: string;
}

export interface BehaviorFrontmatter extends BaseFrontmatter {
  category: string;
  difficulty?: string;
  reviewer?: string;
}

export interface BlogFrontmatter extends BaseFrontmatter {
  category?: string;
}

export type ContentSection =
  | "breeds"
  | "health"
  | "food-reviews"
  | "behavior"
  | "blog";

export type AnyFrontmatter =
  | BreedFrontmatter
  | HealthFrontmatter
  | FoodReviewFrontmatter
  | BehaviorFrontmatter
  | BlogFrontmatter;

export interface ContentItem<T extends BaseFrontmatter = BaseFrontmatter> {
  frontmatter: T;
  content: string;
}
