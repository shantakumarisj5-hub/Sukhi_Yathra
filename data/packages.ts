import { TravelPackage } from "@/types/package";

export const packages: TravelPackage[] = [
  {
    slug: "char-dham-yatra",
    title: "Char Dham Yatra",
    category: "Spiritual",
    duration: "10 Days / 9 Nights",
    location: "Uttarakhand, India",
    shortDescription:
      "A sacred journey through Yamunotri, Gangotri, Kedarnath and Badrinath.",
    description:
      "Experience one of India’s most meaningful spiritual journeys with a thoughtfully planned Char Dham Yatra. Travel through the Himalayas with comfortable stays, transport support and guided planning.",
    coverImage:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85",
    ],
    highlights: [
      "Visit Yamunotri, Gangotri, Kedarnath and Badrinath",
      "Comfortable accommodation and transport support",
      "Ideal for spiritual travellers and family groups",
      "Custom departure dates available",
    ],
    inclusions: [
      "Accommodation as per itinerary",
      "Transport for the complete journey",
      "Sightseeing as mentioned in the itinerary",
      "Travel support from our team",
    ],
    exclusions: [
      "Personal expenses",
      "Meals not mentioned in the final itinerary",
      "Travel insurance",
      "Any service not listed under inclusions",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival and journey briefing",
        description:
          "Arrive at the starting point, meet the travel team and begin your spiritual journey.",
      },
      {
        day: "Day 2–3",
        title: "Yamunotri and Gangotri",
        description:
          "Travel through scenic Himalayan routes and visit the sacred shrines of Yamunotri and Gangotri.",
      },
      {
        day: "Day 4–6",
        title: "Kedarnath Darshan",
        description:
          "Continue toward Kedarnath with planned transport, stay and assistance throughout the journey.",
      },
      {
        day: "Day 7–9",
        title: "Badrinath Darshan",
        description:
          "Visit Badrinath and experience the peaceful beauty of the Himalayan region.",
      },
      {
        day: "Day 10",
        title: "Return journey",
        description:
          "Complete the yatra with unforgettable memories and return to the departure point.",
      },
    ],
    featured: true,
  },
  {
    slug: "kerala-family-escape",
    title: "Kerala Family Escape",
    category: "Domestic",
    duration: "6 Days / 5 Nights",
    location: "Kerala, India",
    shortDescription:
      "Relax with beaches, backwaters, greenery and family-friendly experiences.",
    description:
      "Discover Kerala’s calm backwaters, green hills, culture and coastal beauty through a comfortable family holiday package.",
    coverImage:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1400&q=85",
    ],
    highlights: [
      "Munnar hills and tea gardens",
      "Alleppey backwater experience",
      "Family-friendly sightseeing",
      "Custom hotel options available",
    ],
    inclusions: [
      "Hotel accommodation",
      "Local sightseeing",
      "Transport as per itinerary",
      "Travel planning support",
    ],
    exclusions: [
      "Flight or train tickets unless confirmed",
      "Personal expenses",
      "Meals not mentioned in itinerary",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Kochi",
        description: "Arrival, hotel check-in and local orientation.",
      },
      {
        day: "Day 2–3",
        title: "Munnar",
        description: "Explore tea gardens, scenic viewpoints and hill-station attractions.",
      },
      {
        day: "Day 4",
        title: "Thekkady",
        description: "Enjoy nature, local experiences and optional activities.",
      },
      {
        day: "Day 5",
        title: "Alleppey",
        description: "Experience Kerala’s famous backwaters and relaxed surroundings.",
      },
      {
        day: "Day 6",
        title: "Departure",
        description: "Complete the trip and depart with beautiful memories.",
      },
    ],
    featured: true,
  },
  {
    slug: "dubai-city-experience",
    title: "Dubai City Experience",
    category: "International",
    duration: "5 Days / 4 Nights",
    location: "Dubai, UAE",
    shortDescription:
      "A modern international holiday with city sights, shopping and desert experiences.",
    description:
      "Explore Dubai with a well-planned international package covering iconic city attractions, leisure time and memorable desert experiences.",
    coverImage:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=85",
    ],
    highlights: [
      "Dubai city sightseeing",
      "Desert safari experience",
      "Shopping and leisure time",
      "Suitable for couples, families and groups",
    ],
    inclusions: [
      "Hotel accommodation",
      "Airport transfers",
      "Sightseeing as per itinerary",
      "Travel assistance",
    ],
    exclusions: [
      "Visa fee unless confirmed",
      "Flight tickets unless confirmed",
      "Personal expenses",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Dubai",
        description: "Airport pickup, hotel check-in and leisure time.",
      },
      {
        day: "Day 2",
        title: "Dubai city tour",
        description: "Visit key landmarks and enjoy city sightseeing.",
      },
      {
        day: "Day 3",
        title: "Desert safari",
        description: "Experience the desert with planned activities and evening entertainment.",
      },
      {
        day: "Day 4",
        title: "Leisure and shopping",
        description: "Free time for shopping, optional attractions and exploration.",
      },
      {
        day: "Day 5",
        title: "Departure",
        description: "Checkout and airport transfer.",
      },
    ],
    featured: true,
  },
  {
    slug: "bali-honeymoon-retreat",
    title: "Bali Honeymoon Retreat",
    category: "Honeymoon",
    duration: "6 Days / 5 Nights",
    location: "Bali, Indonesia",
    shortDescription:
      "A romantic escape with beaches, temples, wellness and beautiful stays.",
    description:
      "Plan a memorable honeymoon in Bali with handpicked stays, scenic experiences and flexible customisation.",
    coverImage:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=85",
    ],
    highlights: [
      "Romantic stays and private experiences",
      "Beach and temple visits",
      "Flexible honeymoon customisation",
      "Ideal for couples",
    ],
    inclusions: [
      "Hotel accommodation",
      "Airport transfers",
      "Sightseeing as per itinerary",
      "Travel assistance",
    ],
    exclusions: [
      "Visa and flight charges unless confirmed",
      "Personal expenses",
      "Optional activities",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Bali",
        description: "Airport pickup, hotel check-in and leisure time.",
      },
      {
        day: "Day 2–5",
        title: "Bali experiences",
        description: "Enjoy selected sightseeing, beaches, temples and private experiences.",
      },
      {
        day: "Day 6",
        title: "Departure",
        description: "Airport transfer and departure.",
      },
    ],
    featured: false,
  },
];

export const getPackageBySlug = (slug: string) =>
  packages.find((travelPackage) => travelPackage.slug === slug);