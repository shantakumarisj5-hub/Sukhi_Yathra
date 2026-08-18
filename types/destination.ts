export interface Destination {
  slug: string;
  name: string;
  region: "Domestic" | "International";
  shortDescription: string;
  description: string;
  image: string;
  bestTime: string;
  popularFor: string[];
}