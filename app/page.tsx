import HeroSection from "@/components/home/HeroSection";
import Products from "@/components/home/Products";
import Solutions from "@/components/home/Solutions";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <Products />
      <Solutions />
    </div>
  );
}
