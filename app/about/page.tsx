import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, ShieldCheck, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";

const values = [
  {
    title: "Thoughtful planning",
    description:
      "Every journey starts by understanding the traveller, not by forcing a generic package.",
    icon: Sparkles,
  },
  {
    title: "Travel with care",
    description:
      "We focus on comfort, clarity and support from your enquiry to your return.",
    icon: Heart,
  },
  {
    title: "Reliable guidance",
    description:
      "We help simplify the details of stays, transport, sightseeing and travel planning.",
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="bg-[#071F5B] py-20 text-white sm:py-28">
        <Container>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#F5B51B]">
            About Sukhi Yatra Holidays
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Travel is not just where you go. It&apos;s how it makes you feel.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
            Sukhi Yatra Holidays helps travellers explore domestic,
            international, spiritual and customised journeys with comfort and
            confidence.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85"
                alt="Friends travelling together"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#B97810]">
                Our approach
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#071F5B] sm:text-4xl">
                We plan, you enjoy.
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                From peaceful pilgrimages and memorable family tours to
                international holidays, we aim to make travel planning feel
                simple, clear and exciting. Every traveller has different needs,
                so every journey deserves personal attention.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 font-bold text-[#071F5B] transition hover:text-[#B97810]"
              >
                Talk to our travel team
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#F4F2EC] py-16 sm:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article key={value.title} className="rounded-[1.75rem] bg-white p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5B51B] text-[#071F5B]">
                    <Icon size={23} />
                  </div>

                  <h2 className="mt-6 text-2xl font-black text-[#071F5B]">
                    {value.title}
                  </h2>

                  <p className="mt-3 leading-7 text-slate-600">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
    </main>
  );
}