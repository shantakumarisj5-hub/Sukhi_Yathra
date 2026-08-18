import { Mail, MessageCircle, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import EnquiryForm from "@/components/ui/EnquiryForm";
import { siteConfig, whatsappLink } from "@/data/site";

export default function ContactPage() {
  return (
    <main>
      <section className="bg-[#F4F2EC] py-20 sm:py-28">
        <Container>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#B97810]">
            Let&apos;s plan your next journey
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.045em] text-[#071F5B] sm:text-6xl lg:text-7xl">
            Tell us where you want to go.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Send an enquiry, call us or chat on WhatsApp. We will help you
            explore travel options that fit your plan.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-[#071F5B]">
                Get in touch
              </h2>

              <div className="mt-7 space-y-4">
                <a
                  href={siteConfig.phoneLink}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-[#071F5B]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F4F2EC] text-[#071F5B]">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Call us</p>
                    <p className="font-black text-[#071F5B]">
                      {siteConfig.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-[#25D366]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-50 text-[#25D366]">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">WhatsApp</p>
                    <p className="font-black text-[#071F5B]">
                      Chat with our travel team
                    </p>
                  </div>
                </a>

                <a
                  href={siteConfig.emailLink}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-[#071F5B]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F4F2EC] text-[#071F5B]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email us</p>
                    <p className="break-all font-black text-[#071F5B]">
                      {siteConfig.email}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <EnquiryForm title="Send a travel enquiry" />
          </div>
        </Container>
      </section>
    </main>
  );
}