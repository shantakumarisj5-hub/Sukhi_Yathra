import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import PackageCard from "@/components/ui/PackageCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { packages } from "@/data/packages";

export default function FeaturedPackages() {
  const featuredPackages = packages.filter(
    (travelPackage) => travelPackage.featured,
  );

  return (
    <section className="bg-[#F4F2EC] py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Featured journeys"
            title="Made for the memories that stay."
            description="A few inspiring places to begin. Every itinerary can be tailored to your needs."
          />

          <Link
            href="/packages"
            className="inline-flex w-fit items-center gap-2 font-bold text-[#071F5B] transition hover:text-[#B97810]"
          >
            See all packages
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featuredPackages.slice(0, 3).map((travelPackage) => (
            <PackageCard
              key={travelPackage.slug}
              travelPackage={travelPackage}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}