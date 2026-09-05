"use client";

import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { useEffect, useRef } from "react";
import Container from "@/components/ui/Container";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    video.play().catch(() => {
      // If a browser blocks autoplay, the poster image remains visible.
    });
  }, []);

  return (
    <section className="relative flex min-h-[calc(100svh-74px)] items-center overflow-hidden bg-[#071F5B]">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero/himalaya-hero.jpg"
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src="/videos/travel-hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[#071F5B]/55" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#071F5B]/25 via-[#071F5B]/50 to-[#071F5B]/85" />

      <Container className="relative py-20 text-center sm:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#F5B51B]">
            Spiritual journeys with care
          </p>

          <h1 className="mt-6 text-6xl font-black leading-[0.88] tracking-[-0.065em] text-white sm:text-7xl md:text-8xl lg:text-9xl">
            Welcome to
            <span className="mt-2 block text-[#F5B51B]">Sukhi Yatra</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
            Your journey is our responsibility. Explore thoughtfully planned
            Char Dham Yatra, Kashi Yatra and Varanasi–Ayodhya spiritual tours.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/packages"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#F5B51B] px-7 py-4 font-bold text-[#071F5B] transition hover:bg-yellow-300"
            >
              Explore Yatra Packages
              <ArrowDownRight
                size={20}
                className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}