import TrustMetric from "./TrustMetric";
import { Target, Zap, Lock, BadgeCheck, CheckCircle } from "lucide-react";
import { trustMetrics } from "./trust.data";
import Image from "next/image";

export default function TrustAuthority() {
  return (
    <section id="trust-authority" className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-3xl space-y-8 mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-widest mb-6 px-4 py-2 rounded-full border border-border/50 bg-secondary/50">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Trusted Security Partner
          </span>
          <p className="font-aeonik text-2xl sm:text-3xl md:text-5xl font-bold text-foreground">
            Proven Track Record.
            <span className="block">Verified results.</span>
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by industry leaders to identify critical vulnerabilities
            before adversaries can exploit them. Backed by certifications,
            research, and real-world impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustMetrics.map((metric, index) => (
            <TrustMetric
              key={metric.label}
              value={metric.value}
              label={metric.label}
              description={metric.description}
              icon={metric.icon}
              index={index}
            />
          ))}
        </div>

        {/* <div className="mb-16">
          <p className="font-aeonik text-2xl sm:text-3xl md:text-5xl font-bold text-foreground text-center">
            Trusted by
            <span className="block">security-first organizations</span>
          </p>
        </div> */}

        <div className="rounded-2xl border border-border/30 bg-secondary/20 p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-aeonik text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Certified expertise.
              </h3>
              <p className="text-muted-foreground font-body mb-6">
                Our team doesn&apos;t just use tools—we build them. With
                industry-leading certifications and regular contributions to
                security research, we bring unmatched technical depth to every
                engagement.
              </p>
              <Image
                src={"/generic/certificate.jpg"}
                alt="An image showing a certificate of achievement."
                width={650}
                height={400}
                className="rounded-lg mb-6"
              />
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-center gap-4 p-6 rounded-xl bg-card shadow-xs border border-border/30">
                <CheckCircle className="w-8 h-8 text-green-500 mb-2" />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-xl">No false positives</p>
                  <p className="text-sm text-muted-foreground">
                    Guaranteed manual verification
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 rounded-xl bg-card shadow-xs border border-border/30">
                <CheckCircle className="w-8 h-8 text-green-500 mb-2" />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-xl">Real-world impact</p>
                  <p className="text-sm text-muted-foreground">
                    Critical vulnerabilities found
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 rounded-xl bg-card shadow-xs border border-border/30">
                <CheckCircle className="w-8 h-8 text-green-500 mb-2" />{" "}
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-xl">Confidential</p>
                  <p className="text-sm text-muted-foreground">
                    Strict NDAs, secure reporting
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 rounded-xl bg-card shadow-xs border border-border/30">
                <CheckCircle className="w-8 h-8 text-green-500 mb-2" />{" "}
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-xl">Rapid response</p>
                  <p className="text-sm text-muted-foreground">
                    24h initial results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
