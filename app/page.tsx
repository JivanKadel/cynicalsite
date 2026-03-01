import HeroSection from "@/components/home/HeroSection";
import Products from "@/components/home/Products";
import Solutions from "@/components/home/Solutions";
import Testimonials from "@/components/home/Testimonials";
import TrustAuthority1 from "@/components/home_revised/Authority1";
import TrustAuthority2 from "@/components/home_revised/Authority2";
import TrustAuthority3 from "@/components/home_revised/Authority3";
import TrustAuthority from "@/components/home_revised/TrustAuthority";
import PageCTA from "@/components/products/PageCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      {/* <Solutions /> */}
      <TrustAuthority />
      <TrustAuthority1 />
      {/* <TrustAuthority2 /> */}
      <TrustAuthority3 />
      {/* <Products /> */}
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
