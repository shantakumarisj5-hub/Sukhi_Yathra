import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const categories = [
  {
    title: "Spiritual journeys",
    description:
      "Sacred tours including Char Dham Yatra and other meaningful pilgrimages.",
    href: "/spiritual-journeys",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
    label: "Char Dham · Pilgrimages",
  },
  {
    title: "India, beautifully planned",
    description:
      "Family holidays, hill stations, beaches, culture and unforgettable routes.",
    href: "/india-tours",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=85",
    label: "Hills · Beaches · Culture",
  },
  {
    title: "International escapes",
    description:
      "Dubai, Bali, Thailand, Singapore and more curated for you.",
    href: "/international-tours",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85",
    label: "Asia · Middle East · Beyond",
  },
  {
    title: "Travel made personal",
    description:
      "A trip designed around your dates, group, interests and budget.",
    href: "/custom-tour",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=85",
    label: "Designed around you",
  },
];

export default function TravelCategories() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Start somewhere special"
          title="Every journey begins with an idea."
          description="Choose a travel style, then let us help turn it into a smooth and memorable experience."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              href={category.href}
              key={category.title}
              className="group relative min-h-[380px] overflow-hidden rounded-[2rem] bg-[#071F5B]"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071F5B] via-[#071F5B]/30 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#F5B51B]">
                    {category.label}
                  </p>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#071F5B] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight size={19} />
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-black tracking-tight">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-blue-100">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}