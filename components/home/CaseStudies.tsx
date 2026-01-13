import { caseStudies } from "@/data/casestudies.data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-sm text-muted-foreground uppercase tracking-widest mb-4 block">
              Case Studies
            </span>
            <h2 className="text-2xl md:text-4xl font-noto mb-4">
              Real engagements. Real findings.
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              Every case study represents a client who thought they were
              secure—until we tested like real attackers.
            </p>
          </div>
          <Link
            href="/resources/case-studies"
            className="flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all group"
          >
            View all case studies
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => {
            const content = (
              <>
                <div
                  className={`absolute inset-0 bg-linear-to-br ${study.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative p-6 lg:p-8 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-secondary/80 flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                      {study.logo}
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-muted-foreground">
                      {study.industry}
                    </span>
                  </div>

                  {/* Company */}
                  <h3 className="text-lg font-semibold mb-3">
                    {study.company}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-md border border-border/50 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6 pt-4 border-t border-border/30">
                    {study.metrics.map((metric) => (
                      <div key={metric.label}>
                        <p className="text-xl font-bold mb-1">{metric.value}</p>
                        <p className="text-xs text-muted-foreground leading-tight">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm text-muted-foreground font-body italic grow">
                    &quot;{study.quote}&quot;
                  </p>

                  {/* Hover CTA */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Read full case study
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </>
            );

            const className =
              "group relative overflow-hidden rounded-2xl border border-border/50 bg-card hover:border-border transition-all duration-500 animate-fade-up block";
            const style = { animationDelay: `${index * 0.1}s` };

            return study.link ? (
              <Link
                key={study.company}
                href={study.link}
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

        {/* Client Logos */}
        <div className="mt-16 pt-16 border-t border-border/30">
          <p className="text-sm text-muted-foreground text-center mb-12 uppercase tracking-widest">
            Securing organizations that can&apos;t afford to be breached
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
              <div key={name} className="text-lg font-semibold tracking-tight">
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
