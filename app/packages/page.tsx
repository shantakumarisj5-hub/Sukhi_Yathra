import type { Metadata } from "next";
import { MessageCircle, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import PackageCard from "@/components/ui/PackageCard";
import { packages } from "@/data/packages";
import { siteConfig, whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Yatra Packages 2026",
  description:
    "Explore Char Dham Yatra 2026, Kashi Yatra and Varanasi–Ayodhya spiritual tour packages from Sukhi Yatra Holidays.",
};

export default function PackagesPage() {
  return (
    <main>
      <section className="bg-[#071F5B] py-20 text-white sm:py-28">
        <Container>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#F5B51B]">
            Sukhi Yatra Holidays
          </p>

          <h1 className="mt-4 max-w-4xl font-serif text-5xl font-black leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Upcoming Yatra Packages for 2026.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
            Explore Char Dham Yatra, Kashi Yatra and Varanasi–Ayodhya spiritual
            journeys. Contact our team for current availability, boarding
            details and group travel guidance.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.phoneLink}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F5B51B] px-6 py-3.5 font-bold text-[#071F5B] transition hover:bg-yellow-300"
            >
              <Phone size={18} />
              Call {siteConfig.phone}
            </a>

            <a
              href={whatsappLink(
                "Hello Sukhi Yatra Holidays, I would like details about your 2026 Yatra packages.",
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 font-bold text-white transition hover:bg-white/20"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </Container>
      </section>

      <section className="bg-[#FFFaf0] py-16 sm:py-20">
        <Container>
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#B97810]">
              Plan your sacred journey
            </p>

            <h2 className="mt-3 font-serif text-4xl font-black tracking-tight text-[#071F5B] sm:text-5xl">
              Featured Yatras
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Package prices and travel dates are subject to availability and
              final confirmation by Sukhi Yatra Holidays.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {packages.map((travelPackage) => (
              <PackageCard
                key={travelPackage.slug}
                travelPackage={travelPackage}
              />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}