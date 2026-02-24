"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Lock,
  Clock,
  FileText,
  CircleCheckBigIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ScheduleCallDialog } from "../contact/SchedulDialog";
import { usePathname } from "next/navigation";

interface PageCTAProps {
  badge?: string;
  headline: string;
  highlightedText: string;
  description: string;
  showBenefits?: boolean;
  showTrustIndicators?: boolean;
}

const PageCTA = ({
  badge = "Limited capacity: 3 enterprise slots remaining this quarter",
  headline,
  highlightedText,
  description,
  showBenefits = true,
  showTrustIndicators = true,
}: PageCTAProps) => {
  const path = usePathname();

  const [dialogOpen, setDialogOpen] = useState(false);

  const benefits = [
    { icon: Clock, text: "Response within 24 hours" },
    { icon: Lock, text: "NDA-protected briefing" },
    { icon: FileText, text: "Free exposure report included" },
    { icon: CircleCheckBigIcon, text: "No sales pitch, just findings" },
  ];

  return (
    <>
      <section className="py-32 relative">
        <div className="container mx-auto px-2 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-card shadow-[0_0_4px_rgba(0,0,0,0.3)]">
            <div className="relative z-10 p-4 sm:p-12 lg:p-20">
              <div className="max-w-5xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm text-sm text-muted-foreground mb-8">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  {badge}
                </div>

                <p className="text-[2rem] font-aeonik font-bold leading-none md:leading-tight xl:leading-20 lg:text-5xl xl:text-6xl -tracking-[1%] text-balance">
                  {headline}
                  <span className="block text-foreground">
                    {highlightedText}
                  </span>
                </p>

                <p className="text-lg text-muted-foreground mb-10 mt-4 font-body max-w-2xl mx-auto">
                  {description}
                </p>

                {showBenefits && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                    {benefits.map((benefit) => (
                      <div
                        key={benefit.text}
                        className="flex items-center justify-start sm:justify-center gap-2 text-sm text-muted-foreground"
                      >
                        <benefit.icon className="w-4 h-4" />
                        <span>{benefit.text}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => setDialogOpen(true)}
                    size="lg"
                    className="h-12 bg-foreground text-background hover:bg-foreground/90"
                  >
                    Request Security Briefing
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  {path === "/" && (
                    <Link href="/downloads/sample-report">
                      <Button
                        variant="outline"
                        size="lg"
                        className="h-12 w-full"
                      >
                        Download Sample Report
                      </Button>
                    </Link>
                  )}
                </div>

                {showTrustIndicators && (
                  <div className="mt-4 pt-4 sm:mt-16 sm:pt-16 border-t border-border/30">
                    <p className="text-sm text-foreground/90 text-center mb-6 sm:mb-12 uppercase tracking-widest">
                      Trusted By Critical Industries
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-12 lg:gap-16">
                      {[
                        "Banks",
                        "Governments",
                        "Healthcare",
                        "Fintech",
                        "Critical Infrastructure",
                        "Technology",
                      ].map((name) => (
                        <h2
                          key={name}
                          className="text-sm sm:text-base text-foreground font-semibold tracking-wide uppercase"
                        >
                          {name}
                        </h2>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {dialogOpen && (
        <ScheduleCallDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      )}
    </>
  );
};

export default PageCTA;
