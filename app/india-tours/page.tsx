import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPinned, Palmtree } from "lucide-react";
import Container from "@/components/ui/Container";
import DestinationCard from "@/components/ui/DestinationCard";
import PackageCard from "@/components/ui/PackageCard";
import { destinations } from "@/data/destinations";
import { packages } from "@/data/packages";

export default function IndiaToursPage() {
  const domesticDestinations = destinations.filter(
    (destination) => destination.region === "Domestic",
  );

  const domesticPackages = packages.filter(
    (travelPackage) => travelPackage.category === "Domestic",
  );

  return (
    <main>
      <section className="relative min-h-[560px] overflow-hidden bg-[#173C34] text-white">
        <Image
          src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2200&q=90"
          alt="Kerala backwaters and greenery"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#173C34] via-[#173C34]/60 to-[#173C34]/15" />

        <Container className="relative flex min-h-[560px] items-end py-14 sm:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-[#EAD28D]">
              <Palmtree size={17} />
              Discover the beauty of India
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              India, beautifully
              <span className="block text-[#EAD28D]">planned for you.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-emerald-50 sm:text-lg">
              From mountain air and peaceful backwaters to beaches, heritage
              cities and family escapes—explore India your way.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#B97810]">
                Popular places
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#071F5B] sm:text-4xl">
                Explore India
              </h2>
            </div>

            <Link
              href="/destinations"
              className="hidden items-center gap-2 font-bold text-[#071F5B] hover:text-[#B97810] sm:inline-flex"
            >
              All destinations
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {domesticDestinations.map((destination) => (
              <DestinationCard
                key={destination.slug}
                destination={destination}
              />
            ))}
          </div>

          <div className="mt-16 flex items-end justify-between gap-5">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#B97810]">
                Travel ideas
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#071F5B] sm:text-4xl">
                Featured India packages
              </h2>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {domesticPackages.map((travelPackage) => (
              <PackageCard
                key={travelPackage.slug}
                travelPackage={travelPackage}
              />
            ))}
          </div>

          <div className="mt-16 rounded-[2rem] bg-[#071F5B] p-8 text-white sm:p-10">
            <MapPinned size={32} className="text-[#F5B51B]" />
            <h2 className="mt-5 text-3xl font-black">
              Want an India trip made just for your group?
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-blue-100">
              Tell us the places you want to visit, your dates, group size and
              preferences. We will help you build a comfortable route.
            </p>
            <Link
              href="/custom-tour"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#F5B51B] px-6 py-3.5 font-bold text-[#071F5B] transition hover:bg-yellow-300"
            >
              Plan an India Tour
              <ArrowRight size={18} />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}