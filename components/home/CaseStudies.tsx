import {
  ArrowUpRight,
  Building2,
  Landmark,
  ShoppingCart,
  Plane,
  HeartPulse,
  Cpu,
} from "lucide-react";
import Link from "next/link";

export default function CaseStudies() {
  const caseStudies = [
    {
      logo: <Landmark className="w-8 h-8" />,
      company: "Global Investment Bank",
      industry: "Financial Services",
      tags: ["Red Team", "API Security", "Compliance"],
      metrics: [
        { value: "47", label: "Critical Bugs found" },
        { value: "0", label: "Breaches since engagement" },
        { value: "4h", label: "Time to domain admin" },
      ],
      quote:
        "Their red team bypassed our entire security stack in 4 hours. Our MSSP never found these issues.",
      gradient: "from-violet-500/20 to-blue-500/10",
      link: "/case-studies/global-investment-bank",
    },
    {
      logo: <ShoppingCart className="w-8 h-8" />,
      company: "Series E E-Commerce Platform",
      industry: "Retail Technology",
      tags: ["Bugv Platform", "Continuous Testing", "PCI DSS"],
      metrics: [
        { value: "23", label: "Auth bypasses found" },
        { value: "89%", label: "Faster than pen test" },
        { value: "$2.4M", label: "Breach cost avoided" },
      ],
      quote:
        "Bugv researchers found IDOR flaws affecting 4M customer records. Our annual pen test missed them.",
      gradient: "from-emerald-500/20 to-cyan-500/10",
    },
    {
      logo: <Plane className="w-8 h-8" />,
      company: "National Airline Carrier",
      industry: "Aviation",
      tags: ["Vigile.AI", "Threat Intel", "Dark Web Monitoring"],
      metrics: [
        { value: "12K", label: "Shadow IT assets found" },
        { value: "340", label: "Leaked credentials" },
        { value: "72h", label: "To full remediation" },
      ],
      quote:
        "We had 12,000 internet-facing assets we didn't know existed. Vigile found them. So could attackers.",
      gradient: "from-orange-500/20 to-red-500/10",
    },
    {
      logo: <HeartPulse className="w-8 h-8" />,
      company: "Healthcare Technology Provider",
      industry: "Healthcare",
      tags: ["HIPAA", "Cloud Security", "Application Testing"],
      metrics: [
        { value: "PHI", label: "Exposure prevented" },
        { value: "23", label: "Cloud misconfigs fixed" },
        { value: "100%", label: "HIPAA gaps closed" },
      ],
      quote:
        "They found a path to PHI access through our AWS environment. Previous auditors cleared us.",
      gradient: "from-pink-500/20 to-purple-500/10",
    },
    {
      logo: <Cpu className="w-8 h-8" />,
      company: "AI Infrastructure Startup",
      industry: "Technology",
      tags: ["Source Code Review", "ML Security", "Red Team"],
      metrics: [
        { value: "3", label: "Model extraction paths" },
        { value: "15", label: "Pre-launch criticals" },
        { value: "SOC 2", label: "Ready in 6 weeks" },
      ],
      quote:
        "They extracted our proprietary model weights through the API. We fixed it before launch.",
      gradient: "from-blue-500/20 to-indigo-500/10",
    },
    {
      logo: <Building2 className="w-8 h-8" />,
      company: "Federal Government Agency",
      industry: "Public Sector",
      tags: ["Red Team", "Social Engineering", "Physical Security"],
      metrics: [
        { value: "Full", label: "Domain compromise" },
        { value: "4h", label: "Initial access time" },
        { value: "0", label: "SOC alerts triggered" },
      ],
      quote:
        "They achieved domain admin with zero detection. Our SOC was watching the wrong things.",
      gradient: "from-slate-500/20 to-gray-500/10",
    },
  ];

  return (
    <section id="case-studies" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-sm text-muted-foreground uppercase tracking-widest mb-4 block">
              Case Studies
            </span>
            <h2 className="text-display-md font-bold mb-4">
              Real engagements. Real findings.
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              Every case study represents a client who thought they were
              secure—until we tested like real attackers.
            </p>
          </div>
          <Link
            href="/case-studies"
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
