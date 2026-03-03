import {
  Package,
  XCircle,
  Bandage,
  SlidersHorizontal,
  RulerDimensionLine,
  VectorSquare,
  ShoppingCart,
  Users,
  Sparkles,
  GraduationCap,
  Megaphone,
  Gift,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "CamLock | Protect Your Privacy",
  description:
    "Protect your privacy with a camera protection for laptops and tablets with CamLock by Cynical Technology. Bulk ordering available with custom logo printing.",
};

export default function CamLockPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="pt-6 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-6 relative grid grid-cols-1 lg:grid-cols-5 items-center gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-1">
              <div>
                <p className="text-2xl/normal md:text-4xl/normal lg:text-5xl/normal font-aeonik">
                  Take control of your Digital Privacy
                </p>
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mt-4 tracking-tight">
                  Cam<span className="text-muted-foreground">Lock</span>
                </h1>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4 font-body leading-relaxed ml-2">
              <span className="text-foreground font-semibold font-aeonik">
                Protect Your Privacy.
              </span>
            </p>
          </div>

          <div className="relative lg:col-span-3">
            <div className="relative bg-background rounded-2xl border border-border p-4">
              <Image
                src="/products/camlock_showcase.png"
                alt="CamLock with company logo printing option"
                width={800}
                height={500}
                className="rounded-xl dark:brightness-90"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight">
              YOUR LAPTOP IS A
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-red-500 to-orange-500">
                TWO-WAY MIRROR
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
              That little light on your webcam? It&apos;s been lying to you.
              <span className="block font-semibold text-foreground mt-2">
                Hackers bypassed it years ago. Your camera is always watching.
              </span>
            </p>
          </div>

          <div>
            <Image
              src="/products/girl_spied.jpg"
              alt="Laptop webcam as a two-way mirror"
              width={1200}
              height={600}
              className="rounded-2xl mb-16 dark:brightness-90"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-background/80 backdrop-blur rounded-2xl border-2 border-red-500/20 p-8 shadow-xl">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                  <XCircle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    The &quot;Privacy Light&quot; Lie
                  </h3>
                  <p className="text-muted-foreground text-lg mb-4">
                    Malware can activate your camera without triggering the LED.
                    <span className="block text-foreground font-semibold mt-1">
                      It&apos;s been demonstrated in labs. It&apos;s happening
                      in the wild.
                    </span>
                  </p>
                  <div className="bg-red-500/5 rounded-lg p-4 border border-red-500/10">
                    <p className="text-sm font-mono">
                      &quot;In 2014, researchers proved iSight cameras could be
                      activated without the green light. In 2020, Zoom bombing
                      became mainstream. In 2024, are you still trusting a $0.05
                      LED?&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-background/80 backdrop-blur rounded-2xl border-2 border-orange-500/20 p-8 shadow-xl">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
                    <Eye className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      Always Watching. Always.
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      Even when your laptop is closed. Even in &quot;sleep
                      mode.&quot; Modern laptops can wake for updates, and
                      malware can wake for you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center p-4">
                  <div className="text-3xl font-black text-red-400">89%</div>
                  <p className="text-xs text-muted-foreground">
                    of webcams can be remotely activated
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-black text-orange-400">
                    15M+
                  </div>
                  <p className="text-xs text-muted-foreground">
                    malware attacks targeting cameras yearly
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-black text-green-500">
                    Rs. 100
                  </div>
                  <p className="text-xs text-muted-foreground">
                    cost of protection vs. cost of breach
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 text-xl sm:text-2xl text-muted-foreground uppercase tracking-widest mb-4">
              Why CamLock?
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="flex flex-col gap-3 md:justify-between">
              <div className="p-6 rounded-xl border border-border bg-background">
                <RulerDimensionLine className="w-8 h-8 mb-4 text-muted-foreground" />
                <h3 className="font-semibold mb-2">Ultra-Thin</h3>
                <p className="text-sm text-muted-foreground">
                  0.7mm thin. It&apos;s so thin, you might forget it&apos;s
                  there. Until you need it.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-background">
                <SlidersHorizontal className="w-8 h-8 mb-4 text-muted-foreground" />
                <h3 className="font-semibold mb-2">Sliding Mechanism</h3>
                <p className="text-sm text-muted-foreground">
                  Slides open when you want to be seen. Closed when you
                  don&apos;t.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-background">
                <Bandage className="w-8 h-8 mb-4 text-muted-foreground" />
                <h3 className="font-semibold mb-2">Zero Adhesive Residue</h3>
                <p className="text-sm text-muted-foreground">
                  The residue always comes off clean. No sticky surprises.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-background">
                <VectorSquare className="w-8 h-8 mb-4 text-muted-foreground" />
                <h3 className="font-semibold mb-2">Universal Fit</h3>
                <p className="text-sm text-muted-foreground">
                  Fits all laptops and tablets. One size fits (almost) all.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-background rounded-2xl border border-border p-4">
                <Image
                  src="/products/camlock_desc.png"
                  alt="CamLock features and specifications"
                  width={800}
                  height={500}
                  className="rounded-xl dark:brightness-90"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 items-center gap-12">
            <div className="bg-secondary/30 rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Package className="w-5 h-5" />
                Installation
              </h3>

              <div className="space-y-6">
                {[
                  "Clean your device camera surface",
                  "Remove the protective tape",
                  "Align with your camera",
                  "Press firmly for a few seconds",
                  "Test the slider mechanism",
                ].map((step, index) => (
                  <div key={step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium mb-1">{step}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://forms.gle/uHf6FSsfDYJE4VBQ9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full mt-6">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Order Now
                </Button>
              </a>
            </div>

            <div className="relative">
              <div className="relative bg-background rounded-2xl border border-border p-4">
                <Image
                  src="/products/camlock_how.png"
                  alt="CamLock installation and usage"
                  width={800}
                  height={500}
                  className="rounded-xl dark:brightness-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Put Your Brand On It
            </h2>
            <p className="text-lg text-muted-foreground">
              Custom logo printing available for bulk orders. Pricing negotiated
              based on volume.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-background rounded-2xl border border-border p-2">
              <div className="relative aspect-video bg-secondary/50 rounded-lg flex items-center justify-center">
                <Image
                  src="/products/camlock_openai.png"
                  alt="CamLock with custom logo example"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>

            <div className="bg-background rounded-2xl border border-border p-2">
              <div className="relative aspect-video bg-secondary/50 rounded-lg flex items-center justify-center">
                <Image
                  src="/products/camlock_google.png"
                  alt="CamLock with custom logo example"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="space-y-8">
          <div className="rounded-2xl border border-border p-8 shadow-xl">
            <h3 className="text-2xl md:text-4xl font-bold mb-6 flex items-center gap-3">
              More Than Just Security
            </h3>

            <p className="text-lg text-muted-foreground mb-8">
              Protect your team, reward your employees, or promoting your brand.
              CamLock delivers your message every time someone looks at their
              laptop.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-background rounded-xl p-4 border">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-3">
                  <Users className="w-5 h-5 text-blue-400" />
                </div>
                <h4 className="font-bold mb-1">Employee Appreciation</h4>
                <p className="text-sm text-muted-foreground">
                  Show you care about their privacy. Best Rs. 100 gift
                  they&apos;ll actually use.
                </p>
              </div>

              <div className="bg-background rounded-xl p-4 border">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mb-3">
                  <Gift className="w-5 h-5 text-green-400" />
                </div>
                <h4 className="font-bold mb-1">Corporate Gifts</h4>
                <p className="text-sm text-muted-foreground">
                  Useful. Memorable. Branded with your logo. Actually gets used.
                </p>
              </div>

              <div className="bg-background rounded-xl p-4 border">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mb-3">
                  <Megaphone className="w-5 h-5 text-purple-400" />
                </div>
                <h4 className="font-bold mb-1">Conference Swag</h4>
                <p className="text-sm text-muted-foreground">
                  Better than another stress ball. Your logo, daily visibility.
                </p>
              </div>

              <div className="bg-background rounded-xl p-4 border">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center mb-3">
                  <GraduationCap className="w-5 h-5 text-amber-400" />
                </div>
                <h4 className="font-bold mb-1">Security Training</h4>
                <p className="text-sm text-muted-foreground">
                  Tangible reminder of your security-first culture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background rounded-xl p-6 border border-border">
              <Package className="w-8 h-8 mb-4 text-muted-foreground" />
              <h3 className="font-semibold mb-2">Standard Units</h3>
              <p className="text-2xl font-bold mb-1">
                Rs. 100
                <span className="text-sm font-normal text-muted-foreground">
                  /unit
                </span>
              </p>
              <p className="text-sm text-muted-foreground">
                Minimum order: 30 units
              </p>
            </div>

            <div className="bg-background rounded-xl p-6 border border-border">
              <div className="absolute -mt-8">
                <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                  Popular
                </span>
              </div>
              <Sparkles className="w-8 h-8 mb-4 text-muted-foreground" />
              <h3 className="font-semibold mb-2">With Your Logo</h3>
              <p className="text-2xl font-bold mb-1">Negotiable</p>
              <p className="text-sm text-muted-foreground">
                Pricing based on order volume
              </p>
            </div>

            <div className="bg-background rounded-xl p-6 border border-border">
              <Users className="w-8 h-8 mb-4 text-muted-foreground" />
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-1">500+ units</p>
              <p className="text-sm text-muted-foreground">
                Special pricing for large organizations
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Protect Your Entire Organization
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            From 30 to 500+ units. Custom logo printing available.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://forms.gle/uHf6FSsfDYJE4VBQ9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="h-12 px-8 text-base">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Order Now
              </Button>
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            *Minimum bulk order: 30 units.
          </p>
        </div>
      </section>
    </div>
  );
}
