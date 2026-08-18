import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import { siteConfig, whatsappLink } from "@/data/site";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Travel Packages", href: "/packages" },
  { label: "Destinations", href: "/destinations" },
  { label: "Custom Tour", href: "/custom-tour" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#061844] pb-24 pt-16 text-blue-100 md:pb-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5B51B] text-sm font-black text-[#071F5B]">
                SY
              </div>

              <div>
                <p className="text-xl font-black text-white">Sukhi Yatra</p>
                <p className="text-xs font-bold tracking-[0.2em] text-[#F5B51B]">
                  HOLIDAYS
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm leading-7 text-blue-100">
              Domestic, international, spiritual and customised holidays
              designed to help you travel with comfort and confidence.
            </p>

            <p className="mt-5 font-semibold text-[#F5B51B]">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-base font-extrabold text-white">Quick Links</h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition hover:text-[#F5B51B]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-extrabold text-white">Contact Us</h3>

            <div className="mt-5 space-y-4 text-sm">
              <a
                href={siteConfig.phoneLink}
                className="flex items-start gap-3 transition hover:text-[#F5B51B]"
              >
                <Phone size={18} className="mt-0.5 shrink-0 text-[#F5B51B]" />
                <span>{siteConfig.phone}</span>
              </a>

              <a
                href={siteConfig.emailLink}
                className="flex items-start gap-3 transition hover:text-[#F5B51B]"
              >
                <Mail size={18} className="mt-0.5 shrink-0 text-[#F5B51B]" />
                <span className="break-all">{siteConfig.email}</span>
              </a>

              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 transition hover:text-[#F5B51B]"
              >
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#F5B51B]" />
                <span>Contact us on WhatsApp for package enquiries.</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-blue-200">
          <p>
            © {new Date().getFullYear()} Sukhi Yatra Holidays. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}