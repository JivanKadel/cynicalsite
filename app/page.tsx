import CaseStudies from "@/components/home/CaseStudies";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";
import HeroSection from "@/components/home/HeroSection";
import Products from "@/components/home/Products";
import Research from "@/components/home/Research";
import Solutions from "@/components/home/Solutions";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <Products />
      <Solutions />
      <CaseStudies />
      <Stats />
      <Testimonials />
      <Research />
      <CTA />
    </div>
  );
}
