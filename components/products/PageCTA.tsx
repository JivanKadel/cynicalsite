import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, Clock, FileText } from "lucide-react";
import Link from "next/link";

interface PageCTAProps {
  badge?: string;
  headline: string;
  highlightedText: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  showBenefits?: boolean;
  showTrustIndicators?: boolean;
}

const PageCTA = ({
  badge = "Limited capacity—3 enterprise slots remaining this quarter",
  headline,
  highlightedText,
  description,
  primaryButtonText,
  primaryButtonLink = "/contact",
  secondaryButtonText,
  secondaryButtonLink,
  showBenefits = true,
  showTrustIndicators = true,
}: PageCTAProps) => {
  const benefits = [
    { icon: Clock, text: "Response within 24 hours" },
    { icon: Lock, text: "NDA-protected briefing" },
    { icon: FileText, text: "Free exposure report included" },
    { icon: Shield, text: "No sales pitch—just findings" },
  ];

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border/30">
          {/* Background Layers */}
          <div className="absolute inset-0 bg-linear-to-br from-secondary via-background to-secondary" />
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
            <div className="max-w-5xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm text-sm text-muted-foreground mb-8">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                {badge}
              </div>

              {/* Headline */}
              <h2 className="text-[2.7rem] font-aeonik font-bold leading-none md:leading-tight xl:leading-[80px] lg:text-6xl xl:text-7xl -tracking-[1%] text-balance">
                {headline}
                <span className="block text-blue">{highlightedText}</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-10 mt-4 font-body max-w-2xl mx-auto">
                {description}
              </p>

              {/* Benefits Grid */}
              {showBenefits && (
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
              )}

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={primaryButtonLink}>
                  <Button
                    size="lg"
                    className="bg-foreground text-background hover:bg-foreground/90"
                  >
                    {primaryButtonText}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                {secondaryButtonText && (
                  <Link href={secondaryButtonLink || "/contact"}>
                    <Button variant="outline" size="lg">
                      {secondaryButtonText}
                    </Button>
                  </Link>
                )}
              </div>

              {/* Trust Indicators */}
              {showTrustIndicators && (
                <div className="mt-16 pt-16 border-t border-border/30">
                  <p className="text-sm text-muted-foreground text-center mb-12 uppercase tracking-widest">
                    Trusted By Critical Industries
                  </p>
                  <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16 opacity-50">
                    {[
                      "Banks",
                      "Governments",
                      "Healthcare",
                      "Defense",
                      "Critical Infrastructure",
                      "Technology",
                    ].map((name) => (
                      <div
                        key={name}
                        className="text-base font-semibold tracking-wide uppercase"
                      >
                        {name}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageCTA;
