import { caseStudies } from "@/data/casestudies.data";
import { iconColors } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const CaseStudies = () => {
  const stats = [
    { value: "500+", label: "Enterprise Clients" },
    { value: "$4.2M", label: "Assets Protected" },
    { value: "99.7%", label: "Client Retention Rate" },
    { value: "15+", label: "Industries Served" },
  ];

  return (
    <div>
      <section className="pt-6 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Case Studies
            </span>
            <h1 className="text-4xl max-w-3xl mx-auto md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 text-balance">
              Trusted by Industry Leaders
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-10 leading-relaxed">
              See how we&apos;ve helped enterprises across industries achieve
              uncompromising security posture.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-2">
                  {stat.value}
                </div>
                <p className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((study, index) => (
              <Link
                id={study.link ? study.link.split("#")[1] : ""}
                key={index}
                href={study.link || "#"}
                className="relative group block p-8 border-2 border-border/30 rounded-2xl transition-all duration-300"
              >
                <div
                  className={`absolute rounded-2xl inset-0 bg-linear-to-br ${study.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div
                      className={`w-12 h-12 rounded-xl ${iconColors[index % iconColors.length].iconBg} flex items-center justify-center mb-6 group-hover:bg-foreground/10 transition-colors`}
                    >
                      <study.logo
                        className={`h-6 w-6 ${iconColors[index % iconColors.length].iconColor}`}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-primary-foreground group-hover:text-primary transition-colors">
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
                      <div className="text-xl font-bold text-primary-foreground">
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
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-primary-foreground mb-4">
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
