import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    logo: "🏦",
    company: "Global Investment Bank",
    industry: "Financial Services",
    tags: ["Penetration Testing", "Red Team", "Compliance"],
    metrics: [
      { value: "94%", label: "Faster Detection" },
      { value: "2.3K", label: "Vulnerabilities Found" },
      { value: "Zero", label: "Breaches Post-Deployment" },
    ],
    quote:
      "Cynical's adversarial approach uncovered vulnerabilities our internal team missed for years.",
    gradient: "from-blue-600/20 to-cyan-600/20",
    link: "/case-studies/global-investment-bank",
  },
  {
    logo: "🛒",
    company: "E-Commerce Platform",
    industry: "Retail Technology",
    tags: ["API Security", "Cloud Security", "DevSecOps"],
    metrics: [
      { value: "99.9%", label: "Uptime Maintained" },
      { value: "850+", label: "APIs Secured" },
      { value: "45%", label: "Cost Reduction" },
    ],
    quote:
      "They transformed our security posture while we scaled from 1M to 50M users.",
    gradient: "from-emerald-600/20 to-teal-600/20",
    link: "/case-studies/ecommerce-platform",
  },
  {
    logo: "✈️",
    company: "National Airline",
    industry: "Aviation",
    tags: ["Infrastructure Security", "IoT", "Threat Modeling"],
    metrics: [
      { value: "100%", label: "Critical Systems Tested" },
      { value: "37", label: "Zero-Days Discovered" },
      { value: "A+", label: "Security Rating" },
    ],
    quote:
      "Cynical's team thinks like nation-state attackers. Exactly what we needed.",
    gradient: "from-purple-600/20 to-pink-600/20",
    link: "/case-studies/national-airline",
  },
  {
    logo: "🏥",
    company: "Healthcare Provider",
    industry: "Healthcare",
    tags: ["HIPAA Compliance", "Medical Devices", "Network Security"],
    metrics: [
      { value: "100%", label: "HIPAA Compliant" },
      { value: "156", label: "Devices Secured" },
      { value: "Zero", label: "PHI Exposures" },
    ],
    quote:
      "Patient data security is non-negotiable. Cynical delivered beyond expectations.",
    gradient: "from-rose-600/20 to-orange-600/20",
    link: "/case-studies/healthcare-provider",
  },
  {
    logo: "🔌",
    company: "Energy Corporation",
    industry: "Critical Infrastructure",
    tags: ["OT Security", "SCADA", "Incident Response"],
    metrics: [
      { value: "24/7", label: "Monitoring Active" },
      { value: "12", label: "Substations Protected" },
      { value: "99.99%", label: "Grid Reliability" },
    ],
    quote:
      "Protecting critical infrastructure requires the best. We found them in Cynical.",
    gradient: "from-amber-600/20 to-yellow-600/20",
    link: "/case-studies/energy-corporation",
  },
  {
    logo: "🎮",
    company: "Gaming Studio",
    industry: "Entertainment",
    tags: ["Anti-Cheat", "DDoS Protection", "Account Security"],
    metrics: [
      { value: "87%", label: "Cheating Reduced" },
      { value: "50M+", label: "Accounts Protected" },
      { value: "99.5%", label: "Uptime During Attacks" },
    ],
    quote: "Our players trust us because we trust Cynical with our security.",
    gradient: "from-indigo-600/20 to-violet-600/20",
    link: "/case-studies/gaming-studio",
  },
];

const CaseStudies = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-6 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Case Studies
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
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
                href={study.link}
                className={`group block p-8 rounded-2xl border border-border bg-linear-to-br ${study.gradient} hover:border-primary/50 transition-all duration-300`}
              >
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
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
