import PageCTA from "@/components/products/PageCTA";
import { Button } from "@/components/ui/button";
import {
  Code,
  Shield,
  Lock,
  ArrowRight,
  Check,
  Zap,
  Globe,
  Smartphone,
  Server,
  FileCode,
  GitBranch,
  AlertTriangle,
  Eye,
  Target,
  Layers,
  RefreshCw,
  Clock,
  Users,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

const ApplicationSecurity = () => {
  const capabilities = [
    {
      icon: Globe,
      title: "Web Application Testing",
      description:
        "Comprehensive OWASP Top 10 coverage with advanced testing methodologies for modern web frameworks including React, Angular, Vue, and server-side rendering.",
    },
    {
      icon: Server,
      title: "API Security Assessment",
      description:
        "REST, GraphQL, gRPC, and WebSocket API testing with authentication bypass, injection, and business logic vulnerability detection.",
    },
    {
      icon: Smartphone,
      title: "Mobile Application Security",
      description:
        "iOS and Android binary analysis, runtime manipulation, certificate pinning bypass, and secure storage validation.",
    },
    {
      icon: FileCode,
      title: "Source Code Review",
      description:
        "Manual and automated SAST integration with semantic code analysis for vulnerability detection at the earliest development stages.",
    },
    {
      icon: GitBranch,
      title: "CI/CD Pipeline Security",
      description:
        "Security gate integration, dependency scanning, container image analysis, and infrastructure-as-code review.",
    },
    {
      icon: Lock,
      title: "Authentication & Authorization",
      description:
        "OAuth, SAML, JWT, and session management testing with privilege escalation and access control validation.",
    },
  ];

  const methodology = [
    {
      phase: "01",
      title: "Discovery & Reconnaissance",
      description:
        "Comprehensive asset mapping, technology fingerprinting, and attack surface enumeration using both automated tools and manual techniques.",
      icon: Eye,
    },
    {
      phase: "02",
      title: "Vulnerability Analysis",
      description:
        "Multi-layered testing combining automated scanners with expert manual analysis to identify both common and complex vulnerabilities.",
      icon: Target,
    },
    {
      phase: "03",
      title: "Exploitation & Validation",
      description:
        "Safe proof-of-concept development demonstrating real-world impact without disrupting production systems.",
      icon: AlertTriangle,
    },
    {
      phase: "04",
      title: "Reporting & Remediation",
      description:
        "Detailed technical reports with risk-prioritized findings, root cause analysis, and developer-friendly remediation guidance.",
      icon: BarChart3,
    },
  ];

  const stats = [
    { value: "50K+", label: "Vulnerabilities Discovered" },
    { value: "2,500+", label: "Applications Tested" },
    { value: "99.7%", label: "Client Retention Rate" },
    { value: "<24h", label: "Critical Alert Response" },
  ];

  const testingTypes = [
    {
      title: "Black Box Testing",
      description:
        "Simulates external attacker perspective with no prior knowledge of the application architecture.",
      features: [
        "Real-world attack simulation",
        "Zero internal access",
        "External threat modeling",
      ],
    },
    {
      title: "Gray Box Testing",
      description:
        "Balanced approach with partial knowledge, simulating an authenticated user or insider threat.",
      features: [
        "Authenticated testing",
        "Role-based access testing",
        "Business logic analysis",
      ],
    },
    {
      title: "White Box Testing",
      description:
        "Complete source code access for comprehensive security review and static analysis.",
      features: [
        "Source code review",
        "Architecture analysis",
        "Secure coding validation",
      ],
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Begin testing within 48 hours of engagement",
    },
    {
      icon: Layers,
      title: "Full Stack Coverage",
      description: "Frontend, backend, APIs, and infrastructure",
    },
    {
      icon: RefreshCw,
      title: "Continuous Testing",
      description: "Integrate security into your SDLC",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock access to security experts",
    },
    {
      icon: Users,
      title: "Elite Researchers",
      description: "Top 1% of global security talent",
    },
    {
      icon: Shield,
      title: "Compliance Ready",
      description: "PCI DSS, SOC 2, HIPAA, GDPR",
    },
  ];

  return (
    <div>
      <section className="pt-6 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-foreground/3 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8 animate-fade-up">
              <Link
                href="/"
                className="hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <span>/</span>
              <Link
                href="/#solutions"
                className="hover:text-foreground transition-colors"
              >
                Solutions
              </Link>
              <span>/</span>
              <span className="text-foreground">Application Security</span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8 animate-fade-up stagger-1">
              <Code className="w-4 h-4 text-foreground" />
              <span className="text-sm font-medium">
                Enterprise Application Security
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 text-balance">
              Secure your applications
              <span className="block text-slate-500">
                before attackers exploit them
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-10 animate-fade-up stagger-3 leading-relaxed">
              Comprehensive penetration testing and vulnerability assessments
              for web, mobile, and API applications. Our elite security
              researchers identify vulnerabilities that automated tools miss.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up stagger-4">
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 px-8"
              >
                Download Sample Report
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-body">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Full-spectrum application security
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              From web applications to APIs to mobile apps, our comprehensive
              testing methodology covers every attack vector across your
              application landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="group p-6 lg:p-8 rounded-2xl border border-border bg-card hover:border-foreground/20 transition-all duration-300 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-foreground/10 transition-colors">
                  <capability.icon className="w-6 h-6 text-foreground/80" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Types Section */}
      <section className="py-20 lg:py-32 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
              Testing Approaches
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Tailored testing methodologies
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Choose the testing approach that aligns with your security
              objectives and threat model.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testingTypes.map((type, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-border bg-background hover:border-foreground/20 transition-all duration-300"
              >
                <div className="text-6xl font-bold text-foreground/20 mb-4">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
                <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                  {type.description}
                </p>
                <ul className="space-y-3">
                  {type.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-center gap-3 text-sm"
                    >
                      <Check className="w-4 h-4 text-foreground/70 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="lg:sticky lg:top-32">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Rigorous methodology, proven results
              </h2>
              <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
                Our battle-tested methodology combines industry-standard
                frameworks like OWASP, PTES, and NIST with proprietary
                techniques developed through years of offensive security
                experience.
              </p>
            </div>

            <div className="space-y-6">
              {methodology.map((step, index) => (
                <div
                  key={index}
                  className="group p-6 lg:p-8 rounded-2xl border border-border bg-card hover:border-foreground/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-foreground text-background flex items-center justify-center shrink-0 font-bold text-lg">
                      {step.phase}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground font-body text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-32 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
              Why Cynical
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Enterprise-grade security, delivered
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl border border-border bg-background hover:border-foreground/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <feature.icon className="w-5 h-5 text-foreground/80" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OWASP Coverage Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
                Coverage
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Complete OWASP Top 10 coverage
              </h2>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                Our testing methodology addresses all OWASP Top 10
                vulnerabilities and extends beyond to cover emerging threat
                vectors.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "A01: Broken Access Control",
                "A02: Cryptographic Failures",
                "A03: Injection",
                "A04: Insecure Design",
                "A05: Security Misconfiguration",
                "A06: Vulnerable Components",
                "A07: Authentication Failures",
                "A08: Software & Data Integrity",
                "A09: Logging & Monitoring Failures",
                "A10: Server-Side Request Forgery",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card"
                >
                  <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-bold">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageCTA
        badge="2,400+ applications tested this year"
        headline="Ready to secure"
        highlightedText="your applications?"
        description="Get a comprehensive security assessment from our elite team of security researchers. Identify vulnerabilities before attackers do."
        primaryButtonText="Schedule Security Briefing"
        primaryButtonLink="/contact"
        secondaryButtonText="Contact Sales"
        secondaryButtonLink="/contact"
      />
    </div>
  );
};

export default ApplicationSecurity;
