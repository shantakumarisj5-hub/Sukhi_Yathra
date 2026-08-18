import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Mountain } from "lucide-react";
import Container from "@/components/ui/Container";
import PackageCard from "@/components/ui/PackageCard";
import { packages } from "@/data/packages";

export default function SpiritualJourneysPage() {
  const spiritualPackages = packages.filter(
    (travelPackage) => travelPackage.category === "Spiritual",
  );

  return (
    <main>
      <section className="relative min-h-[560px] overflow-hidden bg-[#071F5B] text-white">
        <Image
          src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2200&q=90"
          alt="Temple in the Himalayas"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071F5B] via-[#071F5B]/55 to-[#071F5B]/15" />

        <Container className="relative flex min-h-[560px] items-end py-14 sm:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-[#F5B51B]">
              <Mountain size={17} />
              Sacred travel, thoughtfully planned
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Journeys of faith,
              <span className="block text-[#F5B51B]">made with care.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
              Discover meaningful pilgrimages and spiritual journeys, planned
              with clear guidance, comfortable travel options and personal
              support.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#B97810]">
                Spiritual travel
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#071F5B] sm:text-4xl">
                Travel for the journey within.
              </h2>
            </div>

            <p className="leading-8 text-slate-600">
              From Char Dham Yatra to other pilgrimage routes, we help
              travellers focus on the purpose of their journey while we assist
              with route planning, stays, transport and essential travel
              details.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {spiritualPackages.map((travelPackage) => (
              <PackageCard
                key={travelPackage.slug}
                travelPackage={travelPackage}
              />
            ))}
          </div>

          <div className="mt-16 rounded-[2rem] bg-[#F4F2EC] p-8 sm:p-10">
            <HeartHandshake size={32} className="text-[#B97810]" />
            <h2 className="mt-5 text-3xl font-black text-[#071F5B]">
              Need help planning a yatra?
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Tell us your preferred yatra, travel dates and group size. We can
              help you understand the travel plan and available options.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#071F5B] px-6 py-3.5 font-bold text-white transition hover:bg-[#123e91]"
            >
              Talk to our travel team
              <ArrowRight size={18} />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}