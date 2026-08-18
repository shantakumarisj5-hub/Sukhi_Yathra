import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";

export default function CustomTourBanner() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#C98817] px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
          <Image
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1800&q=85"
            alt="Friends enjoying travel together"
            fill
            sizes="100vw"
            className="object-cover opacity-30 mix-blend-multiply"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#C98817] via-[#C98817]/90 to-[#C98817]/45" />

          <div className="relative max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#071F5B]">
              Customised tour packages
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#071F5B] sm:text-5xl">
              Your dates. Your people. Your kind of holiday.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#17264C]">
              Tell us what you have in mind and we will help shape a trip around
              your interests, group size, budget and preferred travel dates.
            </p>

            <Link
              href="/custom-tour"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#071F5B] px-6 py-4 font-bold text-white transition hover:bg-[#123e91]"
            >
              Create my trip
              <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}