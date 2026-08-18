import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe2, PlaneTakeoff } from "lucide-react";
import Container from "@/components/ui/Container";
import DestinationCard from "@/components/ui/DestinationCard";
import PackageCard from "@/components/ui/PackageCard";
import { destinations } from "@/data/destinations";
import { packages } from "@/data/packages";

export default function InternationalToursPage() {
  const internationalDestinations = destinations.filter(
    (destination) => destination.region === "International",
  );

  const internationalPackages = packages.filter(
    (travelPackage) =>
      travelPackage.category === "International" ||
      travelPackage.category === "Honeymoon",
  );

  return (
    <main>
      <section className="relative min-h-[560px] overflow-hidden bg-[#071F5B] text-white">
        <Image
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2200&q=90"
          alt="Dubai skyline at sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071F5B] via-[#071F5B]/55 to-[#071F5B]/15" />

        <Container className="relative flex min-h-[560px] items-end py-14 sm:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-[#F5B51B]">
              <PlaneTakeoff size={17} />
              Your next stamp starts here
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Go further.
              <span className="block text-[#F5B51B]">Feel more.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
              Explore international destinations with guided planning for
              couples, families, friends and groups.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#B97810]">
              Explore the world
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#071F5B] sm:text-4xl">
              International destinations
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {internationalDestinations.map((destination) => (
              <DestinationCard
                key={destination.slug}
                destination={destination}
              />
            ))}
          </div>

          <div className="mt-16">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#B97810]">
              Travel ideas
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#071F5B] sm:text-4xl">
              Featured international holidays
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {internationalPackages.map((travelPackage) => (
              <PackageCard
                key={travelPackage.slug}
                travelPackage={travelPackage}
              />
            ))}
          </div>

          <div className="mt-16 rounded-[2rem] bg-[#F5B51B] p-8 sm:p-10">
            <Globe2 size={32} className="text-[#071F5B]" />
            <h2 className="mt-5 text-3xl font-black text-[#071F5B]">
              Thinking about an international holiday?
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-[#263754]">
              Share your destination idea, expected dates and group size. We
              will help you understand suitable package options.
            </p>
            <Link
              href="/custom-tour"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#071F5B] px-6 py-3.5 font-bold text-white transition hover:bg-[#123e91]"
            >
              Plan an International Tour
              <ArrowRight size={18} />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}