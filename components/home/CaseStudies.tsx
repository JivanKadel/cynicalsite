import { caseStudies } from "@/data/casestudies.data";
import { iconColors } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-sm text-muted-foreground uppercase tracking-widest mb-4 block">
              Case Studies
            </span>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-foreground">
              Real engagements. Real findings.
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              Every case study represents a client who thought they were
              secure—until we tested like real attackers.
            </p>
          </div>
        </div>
        <div className="flex justify-end py-8 gap-2 text-sm font-medium group">
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
                <div
                  className={`absolute inset-0 bg-linear-to-br ${
                    // iconColors[index].gradient ??
                    iconColors[1].gradient ??
                    "from-violet-500/20 to-blue-500/10"
                  } transition-opacity duration-500 dark:opacity-0`}
                />

                <div className="relative p-6 lg:p-8 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className={`w-14 h-14 rounded-xl ${
                        // iconColors[index % iconColors.length].iconBg
                        iconColors[1].iconBg
                      } ${
                        // iconColors[index % iconColors.length].iconColor
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
                      <Badge
                        key={tag}
                        // className="text-xs px-2.5 py-1 rounded-md border border-border/50 text-muted-foreground"
                      >
                        {tag}
                      </Badge>
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
              "group relative overflow-hidden rounded-2xl bg-card hover:border-border transition-all duration-500   block";
            const style = { animationDelay: `${index * 0.1}s` };

            return study.link ? (
              <Link
                key={study.company}
                // href={`/resources${study.link}`}
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
