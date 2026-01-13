import { caseStudies } from "@/data/casestudies.data";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const CaseStudies = () => {
  return (
    <div>
      <section className="pt-6 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Case Studies
            </span>
            <h1 className="text-4xl md:text-6xl font-noto text-foreground mb-6">
              Trusted by Industry Leaders
            </h1>
            <p className="text-xl text-muted-foreground">
              See how we&apos;ve helped enterprises across industries achieve
              uncompromising security posture.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                500+
              </div>
              <div className="text-muted-foreground mt-1">
                Enterprise Clients
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                $4.2B
              </div>
              <div className="text-muted-foreground mt-1">Assets Protected</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                99.7%
              </div>
              <div className="text-muted-foreground mt-1">Client Retention</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                15+
              </div>
              <div className="text-muted-foreground mt-1">
                Industries Served
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((study, index) => (
              <Link
                key={index}
                href={study.link || "#"}
                className="relative group block p-8 border-2 border-border rounded-2xl transition-all duration-300"
              >
                <div
                  className={`absolute rounded-2xl inset-0 bg-linear-to-br ${study.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-4xl mb-4 block">{study.logo}</span>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {study.company}
                    </h3>
                    <p className="text-muted-foreground">{study.industry}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-background/50 rounded-full text-sm text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-border/50">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-xl font-bold text-foreground">
                        {metric.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <blockquote className="text-muted-foreground italic">
                  &quot;{study.quote}&quot;
                </blockquote>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-noto text-foreground mb-4">
            Ready to Join Them?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let&apos;s discuss how we can help secure your enterprise with the
            same level of rigor and expertise.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
