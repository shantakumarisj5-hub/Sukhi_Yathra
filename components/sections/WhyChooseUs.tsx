import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const benefits = [
  "Domestic, international and spiritual travel options",
  "Personalised packages for families, couples and groups",
  "Trusted assistance for stays, transport and sightseeing",
  "Friendly support from enquiry to the end of your journey",
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem]">
            <Image
              src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=85"
              alt="Traveller enjoying a mountain view"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-x-5 bottom-5 rounded-3xl bg-[#071F5B] p-5 text-white backdrop-blur">
              <p className="text-sm font-semibold text-[#F5B51B]">
                Sukhi Yatra Holidays
              </p>
              <p className="mt-1 text-xl font-black tracking-tight">
                We Plan, You Enjoy.
              </p>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Travel with confidence"
              title="The best trips feel effortless."
              description="We handle the planning details so you can focus on the people, places and moments that matter."
            />

            <div className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 p-4"
                >
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-[#B97810]"
                  />
                  <p className="font-semibold leading-6 text-slate-700">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}