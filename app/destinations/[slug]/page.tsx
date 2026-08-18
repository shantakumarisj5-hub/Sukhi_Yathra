import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Tag } from "lucide-react";
import Container from "@/components/ui/Container";
import PackageCard from "@/components/ui/PackageCard";
import { getDestinationBySlug, destinations } from "@/data/destinations";
import { packages } from "@/data/packages";

interface DestinationDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return destinations.map((destination) => ({
    slug: destination.slug,
  }));
}

export default async function DestinationDetailPage({
  params,
}: DestinationDetailPageProps) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  const relatedPackages = packages.filter((travelPackage) =>
    travelPackage.location.toLowerCase().includes(destination.name.toLowerCase()),
  );

  return (
    <main>
      <section className="relative min-h-[520px] overflow-hidden bg-[#071F5B] text-white">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071F5B] via-[#071F5B]/45 to-[#071F5B]/15" />

        <Container className="relative flex min-h-[520px] flex-col justify-end py-12">
          <Link
            href="/destinations"
            className="mb-auto inline-flex w-fit items-center gap-2 text-sm font-bold text-blue-100 hover:text-[#F5B51B]"
          >
            <ArrowLeft size={17} />
            All destinations
          </Link>

          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#F5B51B]">
            {destination.region}
          </p>

          <h1 className="mt-3 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            {destination.name}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
            {destination.shortDescription}
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-[#071F5B]">
                Why visit {destination.name}?
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-slate-600">
                {destination.description}
              </p>
            </div>

            <aside className="rounded-[1.75rem] bg-[#F4F2EC] p-7">
              <div className="flex gap-3">
                <CalendarDays className="shrink-0 text-[#B97810]" size={21} />
                <div>
                  <p className="font-bold text-[#071F5B]">Best time to visit</p>
                  <p className="mt-1 leading-6 text-slate-600">
                    {destination.bestTime}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <Tag className="shrink-0 text-[#B97810]" size={21} />
                <div>
                  <p className="font-bold text-[#071F5B]">Popular for</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {destination.popularFor.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {relatedPackages.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-black tracking-tight text-[#071F5B]">
                Packages in {destination.name}
              </h2>

              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedPackages.map((travelPackage) => (
                  <PackageCard
                    key={travelPackage.slug}
                    travelPackage={travelPackage}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="mt-16 rounded-[2rem] bg-[#071F5B] p-8 text-white sm:p-10">
            <h2 className="text-3xl font-black">
              Want to plan a trip to {destination.name}?
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-blue-100">
              Share your preferred dates, group size and travel style. We will
              help you create a suitable itinerary.
            </p>

            <Link
              href="/custom-tour"
              className="mt-7 inline-flex rounded-full bg-[#F5B51B] px-6 py-3.5 font-bold text-[#071F5B] transition hover:bg-yellow-300"
            >
              Plan a Custom Tour
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}