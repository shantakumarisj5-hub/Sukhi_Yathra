"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/data/site";
import Container from "@/components/ui/Container";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Packages", href: "/packages" },
  { label: "Destinations", href: "/destinations" },
  { label: "Custom Tour", href: "/custom-tour" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="flex h-[74px] items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={closeMenu}
          aria-label="Sukhi Yatra Holidays home"
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

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-[#B97810]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
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
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-[#071F5B] lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <Container className="py-5">
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="border-b border-slate-100 py-4 text-base font-bold text-[#071F5B]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <a
              href={siteConfig.phoneLink}
              className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#071F5B] px-4 py-3 font-bold text-white"
            >
              <Phone size={18} />
              Call {siteConfig.phone}
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}