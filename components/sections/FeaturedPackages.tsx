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
    <section id="packages" className="bg-[#FFFaf0] py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Plan your next journey"
            title="Featured Yatra Packages"
            description="Sacred journeys planned with clear package details, comfortable travel arrangements and tour support."
          />

          <Link
            href="/packages"
            className="inline-flex w-fit items-center gap-2 font-bold text-[#071F5B] transition hover:text-[#B97810]"
          >
            View all packages
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredPackages.map((travelPackage) => (
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