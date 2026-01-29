import type { Metadata } from "next";
import PageCTA from "@/components/products/PageCTA";
import { iconColors } from "@/lib/utils";
import {
  Cloud,
  Shield,
  Check,
  Zap,
  Database,
  Network,
  AlertTriangle,
  Eye,
  Target,
  Layers,
  RefreshCw,
  Clock,
  Users,
  BarChart3,
  Key,
  Settings,
  CheckCircle,
  CheckCircleIcon,
} from "lucide-react";
import Head from "next/head";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cloud Security | Cynical Technology",
  description:
    "Cloud Security at Cynical Technology. Protecting your cloud infrastructure with expert assessments and continuous monitoring.",
};

const CloudSecurity = () => {
  const capabilities = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure Assessment",
      description:
        "Comprehensive security evaluation of AWS, Azure, and GCP environments including IAM policies, network configurations, and storage security.",
    },
    {
      icon: Shield,
      title: "Container & Kubernetes Security",
      description:
        "Deep security analysis of Docker containers, Kubernetes clusters, and orchestration platforms with runtime protection and image scanning.",
    },
    {
      icon: Network,
      title: "Network Security Architecture",
      description:
        "VPC design review, security group analysis, network segmentation validation, and zero-trust architecture implementation.",
    },
    {
      icon: Key,
      title: "Identity & Access Management",
      description:
        "IAM policy review, privilege escalation detection, multi-factor authentication validation, and service account security.",
    },
    {
      icon: Database,
      title: "Data Protection & Encryption",
      description:
        "Data classification, encryption at rest and in transit, key management review, and data loss prevention strategy.",
    },
    {
      icon: Settings,
      title: "Compliance & Governance",
      description:
        "SOC 2, ISO 27001, PCI DSS, HIPAA compliance assessments with automated compliance monitoring and reporting.",
    },
  ];

  const methodology = [
    {
      phase: "01",
      title: "Cloud Architecture Review",
      description:
        "Comprehensive analysis of your cloud infrastructure design, deployment patterns, and security architecture against industry best practices.",
      icon: Eye,
    },
    {
      phase: "02",
      title: "Configuration Analysis",
      description:
        "Automated and manual review of cloud service configurations, security policies, and access controls across all cloud providers.",
      icon: Target,
    },
    {
      phase: "03",
      title: "Threat Modeling",
      description:
        "Identify potential attack vectors, data flows, and trust boundaries specific to your cloud environment and business use cases.",
      icon: AlertTriangle,
    },
    {
      phase: "04",
      title: "Continuous Monitoring",
      description:
        "Implement security monitoring, anomaly detection, and automated alerting for ongoing cloud security posture management.",
      icon: BarChart3,
    },
  ];

  const stats = [
    { value: "10K+", label: "Cloud Environments Secured" },
    { value: "500+", label: "Enterprise Clients" },
    { value: "99.9%", label: "Uptime Protection" },
    { value: "<15min", label: "Incident Response SLA" },
  ];

  const cloudProviders = [
    {
      title: "Amazon Web Services",
      description:
        "Comprehensive AWS security including IAM, EC2, S3, RDS, Lambda, and specialized services.",
      features: [
        "AWS Well-Architected Review",
        "IAM policy optimization",
        "S3 bucket security",
        "Lambda function analysis",
      ],
    },
    {
      title: "Microsoft Azure",
      description:
        "Full Azure security assessment covering Active Directory, Key Vault, Storage, and App Services.",
      features: [
        "Azure Security Benchmark",
        "Conditional Access review",
        "Key Vault configuration",
        "Network security groups",
      ],
    },
    {
      title: "Google Cloud Platform",
      description:
        "GCP security evaluation including IAM, Compute Engine, Cloud Storage, and BigQuery.",
      features: [
        "GCP CIS Benchmark",
        "IAM role analysis",
        "Cloud SQL security",
        "BigQuery data protection",
      ],
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Start assessments within 24 hours of engagement",
    },
    {
      icon: Layers,
      title: "Multi-Cloud Support",
      description: "AWS, Azure, GCP expertise in one unified approach",
    },
    {
      icon: RefreshCw,
      title: "Continuous Assessment",
      description: "Real-time security posture monitoring",
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Round-the-cloud security operations center",
    },
    {
      icon: Users,
      title: "Cloud Specialists",
      description: "Certified cloud security architects",
    },
    {
      icon: Shield,
      title: "Zero-Trust Ready",
      description: "Implement zero-trust security models",
    },
  ];

  const securityFrameworks = [
    "CSA Cloud Controls Matrix",
    "NIST Cybersecurity Framework",
    "ISO 27017/27018",
    "SOC 2 Type II",
    "PCI DSS Cloud Guidelines",
    "GDPR Cloud Compliance",
    "HIPAA Cloud Security",
    "FedRAMP Authorization",
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
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8  ">
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
              <span className="text-foreground">Cloud Security</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8">
              <Cloud className="w-4 h-4 text-foreground" />
              <span className="text-sm font-medium">
                Enterprise Cloud Security
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 text-balance">
              Secure your cloud infrastructure
              <span className="block text-slate-500">
                before threats emerge
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-4 leading-relaxed">
              Comprehensive cloud security assessments and continuous monitoring
              for AWS, Azure, and GCP. Our certified cloud security specialists
              identify misconfigurations and vulnerabilities that compromise
              your cloud environment.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2  ">
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
            <span className="text-lg font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Comprehensive cloud security coverage
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              From infrastructure hardening to compliance management, our cloud
              security services cover every aspect of your cloud environment
              across AWS, Azure, and Google Cloud Platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="group p-6 lg:p-8 rounded-2xl bg-card hover:border-foreground/20 transition-all duration-300 hover-lift"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${iconColors[index % iconColors.length].iconBg} flex items-center justify-center mb-6 group-hover:bg-foreground/10 transition-colors`}
                >
                  <capability.icon
                    className={`w-6 h-6 ${iconColors[index % iconColors.length].iconColor}`}
                  />
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

      {/* Cloud Providers Section */}
      <section className="py-20 lg:py-32 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-lg font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
              Multi-Cloud Expertise
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Certified across all major clouds
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Deep expertise across AWS, Azure, and GCP with certified
              professionals and specialized tooling for each platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {cloudProviders.map((provider, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-border bg-background hover:border-foreground/20 transition-all duration-300"
              >
                <div className="text-6xl font-bold text-foreground/20 mb-4">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4">{provider.title}</h3>
                <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                  {provider.description}
                </p>
                <ul className="space-y-3">
                  {provider.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
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
              <span className="text-lg font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Cloud-native security methodology
              </h2>
              <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
                Our cloud-first approach combines industry frameworks like CSA
                Cloud Controls Matrix, NIST, and CIS benchmarks with
                cloud-specific threat intelligence and attack vectors.
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
            <span className="text-lg font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
              Why Cynical ?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Enterprise cloud security, delivered
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex group items-start gap-4 p-6 rounded-xl border border-border bg-background hover:border-foreground/20 transition-colors"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${iconColors[index % iconColors.length].iconBg} self-center flex items-center justify-center group-hover:bg-foreground/10 transition-colors`}
                >
                  <feature.icon
                    className={`w-6 h-6 ${iconColors[index % iconColors.length].iconColor}`}
                  />
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

      {/* Security Frameworks Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-lg font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
                Compliance
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Aligned with leading frameworks
              </h2>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                Our cloud security assessments align with major compliance
                frameworks and industry standards to ensure comprehensive
                coverage.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {securityFrameworks.map((framework, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-4 rounded-lg border border-border bg-card"
                >
                  <div className="p-1.5 rounded-full flex items-center justify-center text-xs font-bold">
                    <CheckCircleIcon className="text-green-500" />
                  </div>
                  <span className="font-medium text-sm">{framework}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageCTA
        badge="500+ cloud environments secured this year"
        headline="Ready to secure"
        highlightedText="your cloud infrastructure?"
        description="Get a comprehensive cloud security assessment from our certified cloud security specialists. Identify misconfigurations and vulnerabilities before they're exploited."
        primaryButtonText="Schedule Cloud Assessment"
        primaryButtonLink="/contact"
        secondaryButtonText="Contact Sales"
        secondaryButtonLink="/contact"
      />
    </div>
  );
};

export default CloudSecurity;
