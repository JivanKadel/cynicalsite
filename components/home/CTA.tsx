import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, Clock, FileText } from "lucide-react";

const CTA = () => {
  const benefits = [
    { icon: Clock, text: "Response within 24 hours" },
    { icon: Lock, text: "NDA-protected briefing" },
    { icon: FileText, text: "Free exposure report included" },
    { icon: Shield, text: "No sales pitch—just findings" },
  ];

  return (
    <section id="company" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border/30">
          {/* Background Layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary" />
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground) / 0.1) 1px, transparent 0)`,
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          <div className="relative z-10 p-12 lg:p-20">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm text-sm text-muted-foreground mb-8">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Limited capacity—3 enterprise slots remaining this quarter
              </div>

              {/* Headline */}
              <h2 className="text-display-md lg:text-display-xl font-bold mb-6">
                Find out what your
                <span className="block gradient-text">
                  current vendors are missing.
                </span>
              </h2>

              <p className="text-lg text-muted-foreground mb-10 font-body max-w-2xl mx-auto">
                Schedule a confidential security briefing. We&apos;ll run
                reconnaissance on your attack surface and show you exactly what
                an adversary would find—before they do.
              </p>

              {/* Benefits Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.text}
                    className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
                  >
                    <benefit.icon className="w-4 h-4" />
                    <span>{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-foreground text-background hover:bg-foreground/90"
                >
                  Request Security Briefing
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Download Sample Report
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 pt-8 border-t border-border/30">
                <p className="text-sm text-muted-foreground mb-4">
                  Trusted by security teams at
                </p>
                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
                  {[
                    "Banks",
                    "Defense Contractors",
                    "Healthcare Systems",
                    "Critical Infrastructure",
                    "Government",
                  ].map((trust) => (
                    <span
                      key={trust}
                      className="text-sm font-medium text-muted-foreground/60"
                    >
                      {trust}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
