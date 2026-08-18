import Link from "next/link";
import { ArrowDownRight, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-74px)] overflow-hidden bg-[#071F5B]">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero/himalaya-hero.jpg"
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      >
        <source src="/videos/Welcome to India ! [CINEMATIC TRAVEL FILM].mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-[#071F5B]/45 via-[#071F5B]/55 to-[#071F5B]/95 lg:bg-gradient-to-r lg:from-[#071F5B]/95 lg:via-[#071F5B]/65 lg:to-transparent" />

      <Container className="relative flex min-h-[calc(100svh-74px)] items-end py-14 sm:py-20 lg:items-center">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-yellow-100 backdrop-blur-sm">
            <Sparkles size={16} className="text-[#F5B51B]" />
            We Plan, You Enjoy
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            See the world
            <span className="block text-[#F5B51B]">your way.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
            From meaningful Char Dham journeys to relaxing family holidays and
            international escapes, Sukhi Yatra designs trips worth remembering.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/packages"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#F5B51B] px-6 py-4 font-bold text-[#071F5B] transition hover:bg-yellow-300"
            >
              Explore journeys
              <ArrowDownRight
                size={20}
                className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </Link>

            <Link
              href="/custom-tour"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Plan a custom trip
            </Link>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-5 border-t border-white/20 pt-6 text-white">
            <div>
              <p className="text-2xl font-black text-[#F5B51B]">India</p>
              <p className="mt-1 text-xs leading-5 text-blue-100">
                Spiritual and domestic journeys
              </p>
            </div>

            <div>
              <p className="text-2xl font-black text-[#F5B51B]">World</p>
              <p className="mt-1 text-xs leading-5 text-blue-100">
                International holidays
              </p>
            </div>

            <div>
              <p className="text-2xl font-black text-[#F5B51B]">You</p>
              <p className="mt-1 text-xs leading-5 text-blue-100">
                Fully customised travel plans
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}