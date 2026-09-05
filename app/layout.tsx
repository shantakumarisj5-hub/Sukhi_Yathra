import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileContactBar from "@/components/layout/MobileContactBar";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sukhiyatra.vercel.app"),
  title: {
    default: "Sukhi Yatra Holidays | Char Dham & Kashi Yatra Packages",
    template: "%s | Sukhi Yatra Holidays",
  },
  description:
    "Explore Char Dham Yatra 2026, Kashi Yatra and Varanasi–Ayodhya spiritual tour packages with Sukhi Yatra Holidays.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${playfairDisplay.variable} bg-white text-slate-900 antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <MobileContactBar />
      </body>
    </html>
  );
}