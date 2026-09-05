import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const categories = [
  {
    title: "Char Dham Yatra",
    description:
      "A sacred Himalayan journey through Yamunotri, Gangotri, Kedarnath and Badrinath.",
    href: "/packages/char-dham-yatra-2026",
    image: "/images/packages/char-dham-yatra.jpg",
    label: "12 Days / 11 Nights",
  },
  {
    title: "Kashi Yatra",
    description:
      "A wider spiritual route through Kashi, Ayodhya, Prayagraj, Gaya, Bodhgaya and more.",
    href: "/packages/kashi-yatra-special",
    image: "/images/packages/kashi-yatra.jpg",
    label: "10 Days",
  },
  {
    title: "Varanasi–Ayodhya",
    description:
      "Temple visits, Ganga Aarti, Ram Mandir, sacred ghats and Buddhist heritage sites.",
    href: "/packages/varanasi-ayodhya-shraddha-special",
    image: "/images/packages/varanasi-ayodhya.jpg",
    label: "Shraddha Special",
  },
  {
    title: "Custom Group Tours",
    description:
      "Plan a spiritual, family or group journey around your dates and preferences.",
    href: "/custom-tour",
    image: "/images/hero/himalaya-hero.jpg",
    label: "Tailored for you",
  },
];

export default function TravelCategories() {
  return (
    <section id="destinations" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Sacred journeys, thoughtfully planned"
          title="Travel with faith, comfort and care."
          description="Explore Sukhi Yatra Holidays’ spiritual tour packages and speak with our team for your group travel requirements."
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

              <div className="absolute inset-0 bg-gradient-to-t from-[#071F5B] via-[#071F5B]/35 to-transparent" />

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