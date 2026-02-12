import { caseStudies } from "@/data/casestudies.data";
import { iconColors } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl space-y-8 mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-widest mb-6 px-4 py-2 rounded-full border border-border/50 bg-secondary/50">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Case Studies
          </span>
          <p className="text-2xl sm:text-3xl md:text-5xl font-aeonik font-bold text-foreground">
            Real engagements.
            <span className="block">Real findings.</span>
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Every case study represents a client who thought they were secure
            until we tested like real attackers.
          </p>
        </div>
        <div className="flex justify-end mb-8 gap-2 text-sm font-medium group">
          <Link
            href="/resources/case-studies"
            className="flex gap-2 text-sm font-medium group"
          >
            View all case studies
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => {
            const content = (
              <>
                <div className="relative bg-card shadow-xl p-6 lg:p-8 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className={`w-14 h-14 rounded-xl ${
                        iconColors[1].iconBg
                      } ${
                        iconColors[1].iconColor
                      } flex items-center justify-center group-hover:bg-foreground/10 transition-colors`}
                    >
                      <study.logo className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-muted-foreground">
                      {study.industry}
                    </span>
                  </div>

                  {/* Company */}
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {study.company}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6 pt-4 border-t-2 border-border/80">
                    {study.metrics.map((metric) => (
                      <div key={metric.label}>
                        <p className="text-xl font-bold mb-1 text-foreground">
                          {metric.value}
                        </p>
                        <p className="text-xs text-muted-foreground leading-tight">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground font-body italic grow">
                    &quot;{study.quote}&quot;
                  </p>

                  {/* Hover CTA */}
                  <div className="text-foreground mt-6 flex items-center gap-2 text-sm font-medium">
                    Read full case study
                    <ArrowUpRight className="w-4 h-4 text-foreground" />
                  </div>
                </div>
              </>
            );

            const className =
              "group relative overflow-hidden rounded-2xl bg-card shadow-xl hover:border-border transition-all duration-500 block";
            const style = { animationDelay: `${index * 0.1}s` };

            return study.link ? (
              <Link
                key={study.company}
                href="/resources/case-studies"
                className={className}
                style={style}
              >
                {content}
              </Link>
            ) : (
              <article key={study.company} className={className} style={style}>
                {content}
              </article>
            );
          })}
        </div>

        <div className="mt-16 pt-16 border-t border-border/30">
          <p className="text-sm text-muted-foreground text-center mb-12 uppercase tracking-widest">
            Securing organizations that can&apos;t afford to be breached
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {[
              "Banks",
              "Governments",
              "Healthcare",
              "Defense",
              "Critical Infrastructure",
              "Technology",
            ].map((name) => (
              <h2
                key={name}
                className="text-base text-foreground font-semibold tracking-wider uppercase"
              >
                {name}
              </h2>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
