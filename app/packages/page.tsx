import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import PackageCard from "@/components/ui/PackageCard";
import { packages } from "@/data/packages";

export default function PackagesPage() {
  return (
    <main>
      <section className="bg-[#071F5B] py-20 text-white sm:py-28">
        <Container>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#F5B51B]">
            Discover your next journey
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Travel packages made for meaningful moments.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
            Explore spiritual, domestic and international travel ideas. Every
            package can be discussed and tailored around your preferences.
          </p>
        </Container>
      </section>

      <section className="bg-[#F8FAFC] py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((travelPackage) => (
              <PackageCard
                key={travelPackage.slug}
                travelPackage={travelPackage}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20 pt-4 sm:pb-28">
        <Container>
          <div className="rounded-[2.5rem] bg-[#F5B51B] px-7 py-12 sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14">
            <div className="max-w-2xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#071F5B] text-[#F5B51B]">
                <Sparkles size={23} />
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-[#071F5B] sm:text-4xl">
                Don&apos;t see your perfect trip?
              </h2>

              <p className="mt-3 leading-7 text-[#263754]">
                Tell us your destination, dates, number of travellers and
                budget. We will help create a personalised tour plan.
              </p>
            </div>

            <Link
              href="/custom-tour"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#071F5B] px-6 py-4 font-bold text-white transition hover:bg-[#123e91] lg:mt-0"
            >
              Plan a Custom Tour
              <ArrowRight size={19} />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}