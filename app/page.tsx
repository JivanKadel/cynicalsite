import HeroSection from "@/components/home/HeroSection";
import Products from "@/components/home/Products";
import Solutions from "@/components/home/Solutions";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import PageCTA from "@/components/products/PageCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <Products />
      <Solutions />
      {/* <CaseStudies /> */}
      {/* <Stats /> */}
      <Testimonials />
      {/* <Research /> */}

      <PageCTA
        badge="Limited capacity: 3 enterprise slots remaining this quarter"
        headline="Find out what your"
        highlightedText="current vendors are missing."
        description="Schedule a confidential security briefing. We'll run
                reconnaissance on your attack surface and show you exactly what
                an adversary would find before they do."
      />
    </main>
  );
}
