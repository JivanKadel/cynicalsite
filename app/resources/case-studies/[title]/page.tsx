import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Landmark,
  Shield,
  Lock,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Target,
  Zap,
  Users,
  Building2,
  Clock,
  Award,
  User,
} from "lucide-react";
import Link from "next/link";

const GlobalInvestmentBank = () => {
  return (
    <div>
      <section className="py-12 md:py-16 relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            <div className="lg:col-span-3">
              <Badge className="mb-4 p-2">
                <Landmark className="w-3.5 h-3.5" />
                Financial Services
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-8">
                Securing the Global
                <br />
                Investment Bank&apos;s
                <br />
                <span className="text-muted-foreground">
                  Digital Infrastructure
                </span>
              </h1>

              <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-xl mb-10">
                How we identified 47 critical vulnerabilities, achieved SOC 2
                compliance in 3 weeks, and established a zero-breach security
                posture for a $2T asset manager.
              </p>

              {/* Services Used */}
              <div className="flex flex-wrap gap-2">
                {[
                  "Red Team Operations",
                  "API Security",
                  "Compliance Audit",
                  "Penetration Testing",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full border border-border text-xs font-medium tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-foreground text-background rounded-2xl p-8 lg:p-10">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-background/60 mb-8">
                  Key Outcomes
                </h3>

                <div className="space-y-8">
                  <div className="border-b border-background/10 pb-8">
                    <div className="text-5xl font-bold tracking-tight mb-2">
                      47
                    </div>
                    <p className="text-background/70 text-sm">
                      Critical vulnerabilities identified & remediated
                    </p>
                  </div>

                  <div className="border-b border-background/10 pb-8">
                    <div className="text-5xl font-bold tracking-tight mb-2">
                      0
                    </div>
                    <p className="text-background/70 text-sm">
                      Security breaches since engagement
                    </p>
                  </div>

                  <div className="border-b border-background/10 pb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold tracking-tight">
                        3
                      </span>
                      <span className="text-2xl font-medium text-background/60">
                        weeks
                      </span>
                    </div>
                    <p className="text-background/70 text-sm">
                      SOC 2 Type II readiness achieved
                    </p>
                  </div>

                  <div>
                    <div className="text-5xl font-bold tracking-tight mb-2">
                      $120k+
                    </div>
                    <p className="text-background/70 text-sm">
                      Estimated breach costs avoided
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Overview Bar */}
      <section className="py-16 mt-20 border-y border-border/50 mx-auto">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-8">
            {[
              {
                icon: Building2,
                label: "Industry",
                value: "Investment Banking",
              },
              { icon: TrendingUp, label: "AUM", value: "$200+ Million" },
              { icon: Users, label: "Employees", value: "10,000+" },
              { icon: Clock, label: "Engagement", value: "6 Months" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col justify-center items-center text-center md:text-left"
              >
                <item.icon className="w-6 h-6 md:w-7 md:h-7 text-muted-foreground mx-auto md:mx-0 mb-3" />
                <h2 className="text-lg text-muted-foreground uppercase tracking-wider mb-1">
                  {item.label}
                </h2>
                <p className="font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              {/* Section Label */}
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-32">
                  <Badge>01 — The Challenge</Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                    Legacy security in a modern threat landscape
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-8 space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As one of the world&apos;s largest investment banks, our
                  client managed over $200 million in assets and processed
                  millions of transactions daily. Their legacy security
                  infrastructure, while compliant with basic regulatory
                  requirements, had not evolved to address modern attack
                  vectors.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: AlertTriangle,
                      text: "500+ APIs with inconsistent security controls",
                    },
                    {
                      icon: Lock,
                      text: "Multi-cloud infrastructure across AWS, Azure & private DCs",
                    },
                    { icon: Clock, text: "SOC 2 Type II deadline in 6 weeks" },
                    {
                      icon: Shield,
                      text: "Previous assessments missed real attack paths",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-5 rounded-xl bg-secondary/50"
                    >
                      <item.icon className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                      <p className="text-sm font-medium">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-16">
              <div className="lg:col-span-4 self-center">
                <Badge>02 — Our Approach</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                  Comprehensive adversary simulation
                </h2>
              </div>
              <div className="lg:col-span-8 flex flex-col justify-center">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  We deployed a four-phase methodology combining automated
                  reconnaissance with elite red team operations to uncover
                  vulnerabilities that traditional assessments miss.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Connecting line */}
              <div className="hidden lg:block absolute top-12 left-0 right-0 h-px" />

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    phase: "Week 1-2",
                    title: "Attack Surface Discovery",
                    description:
                      "Mapped entire digital footprint with Vigile.AI, discovering 2,400+ assets including shadow IT.",
                    icon: Target,
                    metric: "2,400+ assets",
                  },
                  {
                    phase: "Week 3-4",
                    title: "Red Team Operations",
                    description:
                      "Full-scope adversary simulation achieving domain admin access within 72 hours.",
                    icon: Users,
                    metric: "72hr breach",
                  },
                  {
                    phase: "Week 5-6",
                    title: "API Security Audit",
                    description:
                      "Deep-dive testing on 500+ APIs, identifying auth bypasses and BOLA vulnerabilities.",
                    icon: Lock,
                    metric: "500+ APIs",
                  },
                  {
                    phase: "Week 7-8",
                    title: "Remediation",
                    description:
                      "Prioritized fixes with their team, exceeding SOC 2 requirements.",
                    icon: Zap,
                    metric: "100% fixed",
                  },
                ].map((item, index) => (
                  <div key={item.title} className="relative">
                    <div className="hidden lg:flex ml-4 w-6 h-6 rounded-full bg-background border-2 border-green-600 items-center justify-center">
                      <span className="text-[10px] font-bold text-green-500">
                        {index + 1}
                      </span>
                    </div>

                    <div className="bg-background rounded-2xl p-6 h-full border border-border/50 lg:mt-6">
                      <span className="text-xs text-muted-foreground font-medium">
                        {item.phase}
                      </span>
                      <div className="flex items-center gap-3 my-4">
                        <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-semibold">{item.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        {item.description}
                      </p>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-xs font-semibold">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        {item.metric}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-1">
              <span className="text-4xl font-serif">&quot;</span>
            </div>

            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium leading-snug tracking-tight mb-10">
              Cynical identified attack vectors that bypassed our existing
              security stack entirely. Their findings were a wake-up call that
              transformed how we approach security.
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center">
                {/* <Shield className="w-5 h-5 text-background" /> */}
                <User className="text-background" />
              </div>
              <div className="text-left">
                <p className="font-semibold">
                  Chief Information Security Officer
                </p>
                <p className="text-sm text-muted-foreground">
                  Global Investment Bank
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-left mb-8">
              <Badge>03 — Results</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Measurable security transformation
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {[
                {
                  icon: Lock,
                  title: "Zero Breaches",
                  description:
                    "Maintained a perfect security record with zero successful attacks since engagement.",
                  highlight: "0 incidents",
                },
                {
                  icon: Award,
                  title: "SOC 2 Type II Certified",
                  description:
                    "Achieved certification 3 weeks ahead of schedule, unlocking enterprise partnerships.",
                  highlight: "3 weeks early",
                },
                {
                  icon: Zap,
                  title: "85% Faster Response",
                  description:
                    "Incident response time reduced from hours to minutes through improved playbooks.",
                  highlight: "Hours → Minutes",
                },
                {
                  icon: Users,
                  title: "Continuous Security",
                  description:
                    "Ongoing Bugv program with 50+ vetted researchers providing continuous validation.",
                  highlight: "50+ researchers",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group p-8 rounded-2xl bg-card/50 hover:bg-card/80 transition-colors"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-foreground/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-foreground/50">
                      {item.highlight}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to secure your organization?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Let&apos;s discuss how we can help protect your critical assets
              and achieve your security goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/#case-studies">View More Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalInvestmentBank;
