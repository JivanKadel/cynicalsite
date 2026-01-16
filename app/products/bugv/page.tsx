import { Button } from "@/components/ui/button";

import {
  ArrowRight,
  Bug,
  Shield,
  Users,
  Zap,
  Clock,
  Target,
  Award,
  CheckCircle,
  Globe,
  Lock,
  FileText,
  TrendingUp,
  Eye,
  AlertTriangle,
  Server,
  Code,
  Layers,
} from "lucide-react";
import PageCTA from "@/components/products/PageCTA";
import Link from "next/link";
import Image from "next/image";

const Bugv = () => {
  const stats = [
    { value: "500+", label: "Elite Researchers", icon: Users },
    { value: "10,000+", label: "Vulnerabilities Found", icon: Bug },
    { value: "48hrs", label: "Avg. Response Time", icon: Clock },
    { value: "$5M+", label: "Bounties Paid", icon: Award },
  ];

  const features = [
    {
      icon: Users,
      title: "Curated Researcher Network",
      description:
        "Access a vetted community of elite security researchers from around the world, each with verified credentials and track records.",
    },
    {
      icon: Shield,
      title: "Managed Programs",
      description:
        "We handle triage, validation, and communication—so your team can focus on fixing vulnerabilities, not managing reports.",
    },
    {
      icon: Target,
      title: "Continuous Testing",
      description:
        "24/7 security testing that adapts to your release cycles. New features get tested before attackers find them.",
    },
    {
      icon: FileText,
      title: "Enterprise Reporting",
      description:
        "Detailed vulnerability reports with reproduction steps, impact analysis, and remediation guidance.",
    },
    {
      icon: Lock,
      title: "Compliance Ready",
      description:
        "Meet security requirements for SOC 2, ISO 27001, PCI-DSS, and other compliance frameworks.",
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description:
        "Researchers across time zones ensure round-the-clock coverage and diverse testing perspectives.",
    },
  ];

  const programTypes = [
    {
      title: "Private Bug Bounty",
      description:
        "Invite-only programs with vetted researchers for sensitive applications",
      features: [
        "Handpicked researcher selection",
        "NDA-protected testing",
        "Custom scope definition",
        "Priority vulnerability triage",
      ],
      recommended: true,
    },
    {
      title: "Public Bug Bounty",
      description:
        "Open programs that leverage the full power of the security community",
      features: [
        "Maximum researcher participation",
        "Broader testing coverage",
        "Community reputation system",
        "Transparent disclosure",
      ],
      recommended: false,
    },
    {
      title: "Vulnerability Disclosure",
      description:
        "Structured process for receiving and handling security reports",
      features: [
        "Safe harbor policy",
        "Responsible disclosure",
        "Security.txt integration",
        "Automated acknowledgment",
      ],
      recommended: false,
    },
  ];

  const process = [
    {
      step: "01",
      title: "Program Design",
      description:
        "We work with you to define scope, rewards, and rules tailored to your security goals and risk tolerance.",
      icon: Target,
    },
    {
      step: "02",
      title: "Researcher Matching",
      description:
        "Our platform matches your program with researchers who have relevant expertise in your technology stack.",
      icon: Users,
    },
    {
      step: "03",
      title: "Active Testing",
      description:
        "Researchers probe your applications using real-world attack techniques, finding vulnerabilities before malicious actors.",
      icon: Eye,
    },
    {
      step: "04",
      title: "Triage & Validation",
      description:
        "Our security team validates each submission, eliminates duplicates, and prioritizes by severity and impact.",
      icon: CheckCircle,
    },
    {
      step: "05",
      title: "Remediation Support",
      description:
        "Get detailed fix guidance and verify patches with researcher retesting to ensure complete resolution.",
      icon: Shield,
    },
  ];

  const vulnerabilityTypes = [
    { name: "SQL Injection", severity: "Critical", count: "1,240+" },
    { name: "Authentication Bypass", severity: "Critical", count: "890+" },
    { name: "Remote Code Execution", severity: "Critical", count: "450+" },
    { name: "Cross-Site Scripting", severity: "High", count: "2,100+" },
    { name: "IDOR / Broken Access Control", severity: "High", count: "1,800+" },
    { name: "Server-Side Request Forgery", severity: "High", count: "620+" },
    { name: "Information Disclosure", severity: "Medium", count: "3,200+" },
    { name: "Business Logic Flaws", severity: "Medium", count: "980+" },
  ];

  return (
    <div>
      <section className="pt-6 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/80 via-background to-background" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div>
                <span className="text-sm text-muted-foreground uppercase tracking-widest">
                  <Image
                    width={50}
                    height={30}
                    src={"/products/bugv_logo.png"}
                    alt="Bugv Logo"
                  />
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mt-4">Bugv</h1>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-body leading-relaxed max-w-3xl">
              The crowdsourced security platform that connects you with elite
              ethical hackers. Continuous testing from adversaries who think
              like attackers—because they are.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90"
              >
                Start Your Program
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                View Sample Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border/50 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-background border border-border/50 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-foreground/70" />
                </div>
                <p className="text-3xl md:text-4xl font-bold mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-widest mb-4">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              From launch to remediation
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              A streamlined process that turns security chaos into actionable
              insights
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {process.map((item, index) => (
                <div key={item.step} className="relative">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-secondary border border-border/50 flex items-center justify-center mx-auto mb-4 relative z-10">
                      <item.icon className="w-7 h-7 text-foreground" />
                    </div>
                    <span className="text-xs text-muted-foreground font-mono mb-2 block">
                      {item.step}
                    </span>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-body">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-widest mb-4">
              Platform Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise-grade bug bounty
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              Everything you need to run a successful security program
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl border border-border/50 bg-background hover:border-border transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-foreground/10 transition-colors">
                  <feature.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Types */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-widest mb-4">
              Program Options
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose your approach
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              Flexible program structures to match your security maturity and
              business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programTypes.map((program, index) => (
              <div
                key={program.title}
                className={`relative rounded-2xl border p-8 ${
                  program.recommended
                    ? "border-foreground/30 bg-secondary/50"
                    : "border-border/50 bg-card/50"
                }`}
              >
                {program.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 text-xs font-medium bg-foreground text-background rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 font-body">
                  {program.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-foreground/50 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={program.recommended ? "default" : "outline"}
                  className="w-full"
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vulnerability Types */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-widest mb-4">
                Proven Results
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Real vulnerabilities.
                <span className="block text-muted-foreground">
                  Real impact.
                </span>
              </h2>
              <p className="text-lg text-muted-foreground font-body mb-8">
                Our researchers have uncovered thousands of critical
                vulnerabilities across Fortune 500 companies, protecting
                millions of users worldwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button>
                  View Hall of Fame
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline">Research Blog</Button>
              </div>
            </div>

            <div className="space-y-3">
              {vulnerabilityTypes.map((vuln, index) => (
                <div
                  key={vuln.name}
                  className="flex items-center justify-between p-4 rounded-xl border border-border/50 bg-background hover:border-border transition-colors"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded ${
                        vuln.severity === "Critical"
                          ? "bg-red-500/10 text-red-400"
                          : vuln.severity === "High"
                          ? "bg-orange-500/10 text-orange-400"
                          : "bg-yellow-500/10 text-yellow-400"
                      }`}
                    >
                      {vuln.severity}
                    </span>
                    <span className="font-medium">{vuln.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono">
                    {vuln.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-widest mb-4">
              Integrations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fits into your workflow
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              Connect Bugv with your existing tools for seamless vulnerability
              management
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "Jira", icon: Layers },
              { name: "GitHub", icon: Code },
              { name: "Slack", icon: Globe },
              { name: "PagerDuty", icon: AlertTriangle },
              { name: "Splunk", icon: TrendingUp },
              { name: "ServiceNow", icon: Server },
            ].map((integration) => (
              <div
                key={integration.name}
                className="flex flex-col items-center justify-center p-6 rounded-xl border border-border/50 bg-card/50 hover:border-border transition-colors"
              >
                <integration.icon className="w-8 h-8 text-muted-foreground mb-3" />
                <span className="text-sm font-medium">{integration.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        badge="500+ elite researchers ready to test your assets"
        headline="Ready to find vulnerabilities"
        highlightedText="before attackers do?"
        description="Join the companies that trust Bugv to secure their most critical assets with continuous crowdsourced security testing."
        primaryButtonText="Launch Your Program"
        primaryButtonLink="/contact"
        secondaryButtonText="Talk to Security Expert"
        secondaryButtonLink="/contact"
      />
    </div>
  );
};

export default Bugv;
