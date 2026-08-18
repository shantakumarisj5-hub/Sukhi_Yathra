import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import EnquiryForm from "@/components/ui/EnquiryForm";

const steps = [
  "Tell us where and when you want to travel",
  "Share your group size, travel style and budget",
  "Receive a personalised itinerary and package guidance",
];

export default function CustomTourPage() {
  return (
    <main>
      <section className="bg-[#F5B51B] py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#6C4300]">
                Customised tour packages
              </p>

              <h1 className="mt-4 text-5xl font-black leading-[0.95] tracking-[-0.045em] text-[#071F5B] sm:text-6xl">
                A trip that feels made for you.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-[#263754] sm:text-lg">
                Whether you are planning a family holiday, honeymoon, friends
                trip, group journey or spiritual yatra, we can help shape a
                travel plan around you.
              </p>

              <div className="mt-8 space-y-4">
                {steps.map((step) => (
                  <div key={step} className="flex items-start gap-3">
                    <CheckCircle2
                      size={21}
                      className="mt-0.5 shrink-0 text-[#071F5B]"
                    />
                    <p className="font-semibold leading-6 text-[#263754]">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
              <Image
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1400&q=85"
                alt="Travellers planning their journey"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#F8FAFC] py-16 sm:py-24">
        <Container className="max-w-3xl">
          <EnquiryForm title="Create your custom tour" />
        </Container>
      </section>
    </main>
  );
}