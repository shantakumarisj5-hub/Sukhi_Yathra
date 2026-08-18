import Link from "next/link";
import { ArrowRight, CircleHelp } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "Can I customise a travel package?",
    answer:
      "Yes. Tell us your destination, dates, number of travellers, budget and preferences. We can help create a suitable plan.",
  },
  {
    question: "Do you provide domestic and international packages?",
    answer:
      "Yes. Sukhi Yatra offers spiritual journeys, domestic holidays and selected international destinations.",
  },
  {
    question: "Can you help with hotels and local transport?",
    answer:
      "Yes. Based on the package and final confirmation, the travel plan can include stay, transport, sightseeing and other required services.",
  },
  {
    question: "How do I enquire about a package?",
    answer:
      "Use the enquiry form, call the team or send a WhatsApp message. The team can then discuss dates, availability and package details.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Questions, answered"
              title="Travel planning should feel simple."
              description="Here are answers to common questions. Need something else? Our team is one message away."
            />

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 font-bold text-[#071F5B] transition hover:text-[#B97810]"
            >
              Contact our travel team
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="divide-y divide-slate-200 rounded-[1.75rem] border border-slate-200 px-6">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-[#071F5B]">
                  {faq.question}
                  <CircleHelp
                    size={20}
                    className="shrink-0 text-[#B97810] transition group-open:rotate-180"
                  />
                </summary>

                <p className="pr-8 pt-4 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}