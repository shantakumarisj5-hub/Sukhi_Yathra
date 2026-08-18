import CustomTourBanner from "@/components/sections/CustomTourBanner";
import FAQ from "@/components/sections/FAQ";
import FeaturedPackages from "@/components/sections/FeaturedPackages";
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import TravelCategories from "@/components/sections/TravelCategories";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <TravelCategories />
      <FeaturedPackages />
      <WhyChooseUs />
      <CustomTourBanner />
      <Testimonials />
      <FAQ />
    </main>
  );
}