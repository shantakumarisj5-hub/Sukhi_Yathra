"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Packages", href: "/packages" },
  { label: "Spiritual Journeys", href: "/spiritual-journeys" },
  { label: "India Tours", href: "/india-tours" },
  { label: "International Tours", href: "/international-tours" },
  { label: "Custom Tour", href: "/custom-tour" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-[100] border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="flex h-[74px] items-center justify-between gap-3">
        <Link
          href="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-3"
          aria-label="Go to Sukhi Yatra Holidays homepage"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#071F5B] text-sm font-black text-[#F5B51B]">
            SY
          </div>

          <div className="leading-none">
            <p className="text-lg font-black tracking-tight text-[#071F5B]">
              Sukhi Yatra
            </p>
            <p className="mt-1 text-[10px] font-bold tracking-[0.2em] text-[#B97810]">
              HOLIDAYS
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {navLinks.slice(0, 5).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-[#B97810]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            href={siteConfig.phoneLink}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#071F5B]"
          >
            <Phone size={17} />
            {siteConfig.phone}
          </a>

          <Link
            href="/contact"
            className="rounded-full bg-[#071F5B] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#123e91]"
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="relative z-[110] inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#071F5B] transition hover:border-[#071F5B] xl:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </Container>

      {isMenuOpen && (
        <div className="absolute inset-x-0 top-[74px] z-[105] max-h-[calc(100vh-74px)] overflow-y-auto border-b border-slate-200 bg-white shadow-xl xl:hidden">
          <Container className="py-5">
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="border-b border-slate-100 py-4 text-base font-bold text-[#071F5B] transition hover:text-[#B97810]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={siteConfig.phoneLink}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#071F5B] px-4 py-3.5 font-bold text-white transition hover:bg-[#123e91]"
              >
                <Phone size={18} />
                Call {siteConfig.phone}
              </a>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="flex items-center justify-center rounded-xl bg-[#F5B51B] px-4 py-3.5 font-bold text-[#071F5B] transition hover:bg-yellow-300"
              >
                Get a Quote
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}