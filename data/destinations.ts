import { Destination } from "@/types/destination";

export const destinations: Destination[] = [
  {
    slug: "char-dham",
    name: "Char Dham",
    region: "Domestic",
    shortDescription:
      "A sacred Himalayan journey through Yamunotri, Gangotri, Kedarnath and Badrinath.",
    description:
      "Char Dham Yatra is a meaningful pilgrimage experience for travellers seeking spiritual connection and Himalayan beauty.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
    bestTime: "May to June and September to October",
    popularFor: ["Pilgrimage", "Family groups", "Spiritual travel"],
  },
  {
    slug: "kerala",
    name: "Kerala",
    region: "Domestic",
    shortDescription:
      "Green hills, peaceful backwaters, beaches and relaxed family holidays.",
    description:
      "Kerala is ideal for travellers looking for natural beauty, comfort and slow-paced experiences.",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=85",
    bestTime: "September to March",
    popularFor: ["Family tours", "Honeymoon", "Nature"],
  },
  {
    slug: "dubai",
    name: "Dubai",
    region: "International",
    shortDescription:
      "A vibrant international holiday with skyline views, shopping and desert adventures.",
    description:
      "Dubai combines modern city experiences, family attractions and memorable desert activities.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85",
    bestTime: "November to March",
    popularFor: ["Family tours", "Couples", "Shopping"],
  },
  {
    slug: "bali",
    name: "Bali",
    region: "International",
    shortDescription:
      "Tropical beaches, temples, wellness and romantic escapes.",
    description:
      "Bali is a popular destination for honeymoon couples, friends and travellers seeking a relaxed international holiday.",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85",
    bestTime: "April to October",
    popularFor: ["Honeymoon", "Couples", "Beach holidays"],
  },
];

export const getDestinationBySlug = (slug: string) =>
  destinations.find((destination) => destination.slug === slug);