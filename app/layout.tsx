import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileContactBar from "@/components/layout/MobileContactBar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sukhi Yatra Holidays | We Plan, You Enjoy",
    template: "%s | Sukhi Yatra Holidays",
  },
  description:
    "Explore domestic, international, spiritual and customised travel packages with Sukhi Yatra Holidays.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <Header />
        {children}
        <Footer />
        <MobileContactBar />
      </body>
    </html>
  );
}