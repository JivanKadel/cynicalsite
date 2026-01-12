import PageCTA from "@/components/products/PageCTA";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  Shield,
  ArrowRight,
  Check,
  Zap,
  Globe,
  Target,
  RefreshCw,
  Clock,
  Users,
  BarChart3,
  Activity,
  Search,
  Settings,
  Phone,
  CheckCircle,
  Siren,
} from "lucide-react";
import Link from "next/link";

const IncidentResponse = () => {
  const capabilities = [
    {
      icon: Phone,
      title: "24/7 Emergency Response",
      description:
        "Immediate incident response with sub-15 minute response times, dedicated incident managers, and global response teams.",
    },
    {
      icon: Activity,
      title: "Digital Forensics",
      description:
        "Comprehensive digital forensics and evidence preservation including malware analysis, network forensics, and mobile device analysis.",
    },
    {
      icon: Shield,
      title: "Containment & Eradication",
      description:
        "Rapid threat containment, network isolation, malicious code removal, and attacker eviction with minimal business impact.",
    },
    {
      icon: Search,
      title: "Threat Attribution",
      description:
        "Advanced threat hunting and attribution analysis to identify threat actors, attack vectors, and campaign objectives.",
    },
    {
      icon: BarChart3,
      title: "Recovery & Remediation",
      description:
        "Systematic recovery planning, system restoration, vulnerability patching, and security control implementation.",
    },
    {
      icon: Users,
      title: "Crisis Management",
      description:
        "Executive briefing, stakeholder communication, legal coordination, and regulatory compliance support.",
    },
  ];

  const methodology = [
    {
      phase: "01",
      title: "Preparation & Planning",
      description:
        "Incident response plan development, team training, tabletop exercises, and response capability assessment.",
      icon: Settings,
    },
    {
      phase: "02",
      title: "Detection & Analysis",
      description:
        "Threat detection, incident classification, scope assessment, and initial response coordination.",
      icon: AlertTriangle,
    },
    {
      phase: "03",
      title: "Containment & Eradication",
      description:
        "Threat containment, evidence preservation, attacker removal, and vulnerability remediation.",
      icon: Target,
    },
    {
      phase: "04",
      title: "Recovery & Lessons Learned",
      description:
        "System restoration, security improvements, post-incident analysis, and response plan updates.",
      icon: CheckCircle,
    },
  ];

  const stats = [
    { value: "<15min", label: "Average Response Time" },
    { value: "1,200+", label: "Incidents Handled" },
    { value: "98%", label: "Successful Containment" },
    { value: "24/7", label: "Global Response Team" },
  ];

  const responsePhases = [
    {
      title: "Immediate Response",
      description:
        "Emergency containment and initial assessment within the first critical hours of an incident.",
      features: [
        "Sub-15 minute response SLA",
        "Emergency containment procedures",
        "Initial threat assessment",
        "Evidence preservation",
      ],
    },
    {
      title: "Investigation Phase",
      description:
        "Comprehensive forensic analysis and threat hunting to understand the full scope of the incident.",
      features: [
        "Digital forensics analysis",
        "Network traffic analysis",
        "Malware reverse engineering",
        "Timeline reconstruction",
      ],
    },
    {
      title: "Recovery Operations",
      description:
        "Systematic recovery with security improvements and long-term resilience building.",
      features: [
        "Secure system restoration",
        "Vulnerability remediation",
        "Security control enhancement",
        "Monitoring implementation",
      ],
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Response",
      description: "Sub-15 minute response times for critical incidents",
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Response teams across Americas, EMEA, and APAC",
    },
    {
      icon: RefreshCw,
      title: "Continuous Monitoring",
      description: "24/7 threat monitoring and detection",
    },
    {
      icon: Clock,
      title: "Rapid Deployment",
      description: "On-site deployment within 4 hours",
    },
    {
      icon: Users,
      title: "Elite Responders",
      description: "Former law enforcement and military cyber experts",
    },
    {
      icon: Shield,
      title: "Court-Ready Evidence",
      description: "Forensically sound evidence collection",
    },
  ];

  const incidentTypes = [
    "Ransomware Attacks",
    "Data Breaches & Exfiltration",
    "Business Email Compromise",
    "Advanced Persistent Threats",
    "Insider Threats",
    "Supply Chain Compromises",
    "Zero-Day Exploits",
    "Cryptocurrency Theft",
    "Mobile & IoT Incidents",
    "Cloud Security Incidents",
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
              <span className="text-foreground">Incident Response</span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8 animate-fade-up stagger-1">
              <Siren className="w-4 h-4 text-foreground" />
              <span className="text-sm font-medium">
                Emergency Incident Response
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 animate-fade-up stagger-2 text-balance">
              Respond to incidents
              <span className="block text-muted-foreground">
                with speed and precision
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-10 animate-fade-up stagger-3 leading-relaxed">
              Rapid incident response with sub-15 minute response times,
              comprehensive digital forensics, and complete recovery services.
              Our elite response team has handled 1,200+ incidents with 98%
              successful containment.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up stagger-4">
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 px-8"
              >
                Emergency Response Hotline
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary/50"
              >
                View Response Framework
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
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 gradient-text">
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
              End-to-end incident response
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              From initial detection to full recovery, our incident response
              services cover every aspect of cyber incident management with
              forensic precision and legal compliance.
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

      {/* Response Phases Section */}
      <section className="py-20 lg:py-32 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
              Response Phases
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Systematic response approach
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Our proven methodology ensures comprehensive incident handling
              from initial detection through full recovery and lessons learned.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {responsePhases.map((phase, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-border bg-background hover:border-foreground/20 transition-all duration-300"
              >
                <div className="text-6xl font-bold text-foreground/10 mb-4">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                  {phase.description}
                </p>
                <ul className="space-y-3">
                  {phase.features.map((feature, fIndex) => (
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
                NIST-aligned response methodology
              </h2>
              <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
                Our incident response process follows NIST Cybersecurity
                Framework guidelines with proven playbooks for ransomware,
                business email compromise, data breaches, and advanced
                persistent threats.
              </p>
              <Button className="bg-foreground text-background hover:bg-foreground/90">
                Download Response Playbooks
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
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
              Rapid response, proven results
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

      {/* Incident Types Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
                Incident Types
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Specialized response for all incident types
              </h2>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                Our response team has deep expertise handling every type of
                cyber incident from ransomware to supply chain attacks with
                proven playbooks and specialized tools.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {incidentTypes.map((incident, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card"
                >
                  <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-bold">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-sm">{incident}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageCTA
        badge="1,200+ incidents successfully handled"
        headline="Facing a security"
        highlightedText="incident right now?"
        description="Call our emergency response hotline for immediate assistance. Our elite response team is standing by 24/7 to help you contain threats and restore operations."
        primaryButtonText="Emergency Response Hotline"
        primaryButtonLink="/contact"
        secondaryButtonText="Contact Sales"
        secondaryButtonLink="/contact"
      />
    </div>
  );
};

export default IncidentResponse;
