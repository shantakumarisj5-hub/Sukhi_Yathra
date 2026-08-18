import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "Our family trip was smooth, well organised and full of beautiful memories. The team helped us at every step.",
    name: "Family Tour Traveller",
    trip: "Domestic Holiday",
  },
  {
    quote:
      "From planning the itinerary to selecting stays, everything felt simple. It was a very comfortable experience.",
    name: "Custom Tour Traveller",
    trip: "International Holiday",
  },
  {
    quote:
      "The journey was thoughtfully planned and the support was always available when we needed it.",
    name: "Yatra Traveller",
    trip: "Spiritual Journey",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#071F5B] py-20 text-white sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Travel stories"
          title="The best recommendation is a happy traveller."
          description="Use verified customer reviews and real trip photos here once the client shares them."
          align="center"
          className="[&>h2]:text-white [&>p]:text-blue-100 [&>p:first-child]:text-[#F5B51B]"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="rounded-[1.75rem] border border-white/15 bg-white/10 p-7 backdrop-blur-sm"
            >
              <Quote size={30} className="text-[#F5B51B]" />

              <blockquote className="mt-5 text-lg font-semibold leading-8 text-white">
                “{testimonial.quote}”
              </blockquote>

              <figcaption className="mt-7 border-t border-white/15 pt-5">
                <p className="font-bold text-[#F5B51B]">{testimonial.name}</p>
                <p className="mt-1 text-sm text-blue-100">{testimonial.trip}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}