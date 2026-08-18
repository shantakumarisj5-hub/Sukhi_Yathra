export type PackageCategory =
  | "Spiritual"
  | "Domestic"
  | "International"
  | "Honeymoon"
  | "Family"
  | "Adventure";

export interface TravelPackage {
  slug: string;
  title: string;
  category: PackageCategory;
  duration: string;
  location: string;
  shortDescription: string;
  description: string;
  coverImage: string;
  gallery: string[];
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: {
    day: string;
    title: string;
    description: string;
  }[];
  featured: boolean;
}