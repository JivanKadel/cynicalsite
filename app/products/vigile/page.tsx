import {
  Users,
  Clock,
  AlertTriangle,
  Lock,
  FileText,
  TrendingUp,
  Globe,
  Mail,
  Database,
  Activity,
  FileWarning,
  Link2,
  Type,
  CheckCircle,
  BarChart3,
  LogIn,
  ShieldAlert,
  ShieldPlus,
} from "lucide-react";
import PageCTA from "@/components/products/PageCTA";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { iconColors } from "@/lib/utils";
import HeroImage from "./HeroImage";
import Head from "next/head";

export default function Vigile() {
  const stats = [
    { value: "250B+", label: "Breach Records Indexed", icon: Database },
    { value: "24/7", label: "Real-time Monitoring", icon: Activity },
    { value: "<5min", label: "Alert Response Time", icon: Clock },
    { value: "99.9%", label: "Detection Accuracy", icon: ShieldPlus },
  ];

  const outlookFeatures = [
    {
      icon: Users,
      title: "Employee Records",
      description:
        "Automatically fetch and sync all employee data from your Office365 directory",
    },
    {
      icon: LogIn,
      title: "Sign-in Logs",
      description:
        "Monitor authentication events and detect suspicious login patterns",
    },
    {
      icon: ShieldAlert,
      title: "Risk Users",
      description:
        "Identify high-risk users based on breach exposure and activity analysis",
    },
    {
      icon: Activity,
      title: "Activity Correlation",
      description:
        "Cross-reference user activities with our breach intelligence database",
    },
  ];

  const platformModules = [
    {
      icon: Database,
      title: "Breached Data",
      description:
        "Continuously monitor and centralize breach intelligence related to your organization. Instantly access exposed emails, passwords, and credential dumps with AI-curated insights to prioritize remediation. Stay informed in real time and export data for deeper analysis.",
    },
    {
      icon: Users,
      title: "Employee Exposure",
      description:
        "Gain complete visibility into compromised employee credentials. Our AI monitors breaches 24/7 and evaluates severity, breach frequency, and source to help your security team proactively manage insider risk and enforce mitigation policies.",
    },
    {
      icon: FileWarning,
      title: "Malware Logs & Credential Dumps",
      description:
        "Detect and analyze system-level breach activity through advanced AI-driven parsing of malware logs. Access sensitive file dumps such as passwords.txt and system.txt that indicate compromise through malicious programs.",
    },
    {
      icon: Globe,
      title: "Breached Subdomains",
      description:
        "Automatically identify and monitor breached subdomains associated with your organization's root domain. Surface breach count, severity, and breach vectors for each subdomain to pinpoint infrastructure vulnerabilities.",
    },
    {
      icon: AlertTriangle,
      title: "Breach Management & Response",
      description:
        "Take full control of your organization's breach lifecycle with intelligent case management. Create tickets for exposed users, assign severity levels, and document mitigation steps with AI-assisted prioritization.",
    },
    {
      icon: Type,
      title: "Typesquat Domains",
      description:
        "Detect and monitor typesquat domains designed to impersonate your brand. Our AI continuously scans domain registrations and DNS data to surface suspicious variations before they impact users.",
    },
  ];

  const breachMetrics = [
    { label: "Emails Exposed", value: "2.4M+", trend: "+12% this month" },
    { label: "Passwords Leaked", value: "1.8M+", trend: "+8% this month" },
    { label: "Malware Logs", value: "890K+", trend: "+15% this month" },
    { label: "Domains Monitored", value: "45K+", trend: "+5% this month" },
  ];

  const useCases = [
    {
      title: "Credential Theft Prevention",
      description:
        "Detect when employee credentials appear in breaches before attackers can use them for account takeover.",
      icon: Lock,
    },
    {
      title: "Brand Protection",
      description:
        "Identify typosquat domains and impersonation attempts that could be used for phishing campaigns.",
      icon: ShieldPlus,
    },
    {
      title: "Compliance Reporting",
      description:
        "Generate audit-ready reports on your organization's breach exposure for regulatory requirements.",
      icon: FileText,
    },
    {
      title: "Insider Risk Management",
      description:
        "Monitor for employee credentials in underground markets to prevent unauthorized access.",
      icon: Users,
    },
    {
      title: "M&A Due Diligence",
      description:
        "Assess the breach exposure of acquisition targets before finalizing deals.",
      icon: BarChart3,
    },
    {
      title: "Supply Chain Security",
      description:
        "Monitor third-party vendors and partners for credential exposures that could impact your organization.",
      icon: Link2,
    },
  ];

  return (
    <>
      <Head>
        <title>Vigile.ai | Employee Data leak Assessment Powered by AI</title>
        <meta
          name="description"
          content="Discover Employee Data Breaches Before They Happen with Vigile.AI. Detect credential theft, prevent account takeovers, and block unauthorized access across your organization."
        />
      </Head>
      <div>
        <section className="pt-6 pb-12 relative overflow-hidden">
          <div className="container mx-auto px-6 relative">
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-20">
                <div className="col-span-2 flex flex-col gap-4">
                  <div className="flex items-center gap-4 mb-6">
                    <div>
                      <a
                        href="https://vigile.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-aeonik text-4xl md:text-5xl font-bold mt-4"
                      >
                        Vigile.AI
                      </a>
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground/80 mb-4">
                    Discover Employee Data Breaches Before They Happen
                  </h2>

                  <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-body leading-relaxed ">
                    Your team&apos;s credentials are a prime target. Vigile
                    detects credential theft, prevents account takeovers, and
                    blocks unauthorized access across your organization.
                  </p>
                </div>
                <HeroImage />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-24 lg:mt-16 border-y border-border/50 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-blue/10 border border-border/50 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-foreground/70" />
                  </div>
                  <h2 className="text-3xl md:text-4xl text-foreground font-bold mb-1">
                    {stat.value}
                  </h2>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 relative overflow-hidden">
          <div className="container mx-auto px-6 relative">
            <div className="grid lg:grid-cols-1 gap-8 items-center">
              <div>
                <Badge
                  variant={"outline"}
                  className="inline-flex items-center gap-2 px-4 py-2 mb-6"
                >
                  <Mail className="w-4 h-4 text-foreground" />
                  <span className="text-sm font-medium">Core Integration</span>
                </Badge>

                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Office 365 Integration
                </h2>

                <p className="text-lg text-muted-foreground font-body mb-8 leading-relaxed">
                  Our platform integrates seamlessly with your organization’s
                  Microsoft 365 environment to securely access employee
                  directory information, authentication activity, and risk
                  indicators. Leveraging our advanced AI engine, we correlate
                  this data against a proprietary database of over 15 billion
                  breach records to provide real-time visibility into potential
                  exposures.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">One-click deployment</span>
                      <p className="text-sm text-muted-foreground">
                        Connect your Office365 tenant in minutes with our guided
                        setup
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Real-time sync</span>
                      <p className="text-sm text-muted-foreground">
                        Employee changes reflected instantly across your
                        security dashboard
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">
                        Privacy-first architecture
                      </span>
                      <p className="text-sm text-muted-foreground">
                        Only fetch the metadata needed for breach correlation
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <section className="pb-12 overflow-hidden">
                <div className="p-2 sm:p-8 rounded-3xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {outlookFeatures.map((feature, index) => (
                      <div
                        key={feature.title}
                        className="p-4 rounded-xl bg-background/50 border border-border/50"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-3">
                          <feature.icon
                            className={`w-5 h-5 ${
                              iconColors[index % iconColors.length].iconColor
                            }`}
                          />
                        </div>
                        <h4 className="font-semibold text-sm lg:text-lg mb-1 lg:mb-3">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-widest mb-4">
                Platform Modules
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 text-balance">
                Enterprise breach{" "}
                <span className="text-foreground">Intelligence</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive monitoring and response capabilities powered by AI
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platformModules.map((module, index) => (
                <div
                  key={module.title}
                  className="group p-6 rounded-2xl bg-card shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-foreground/10 transition-colors">
                    <module.icon
                      className={`w-6 h-6 ${
                        iconColors[index % iconColors.length].iconColor
                      }`}
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{module.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {module.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PDF Reports Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative p-8 rounded-3xl border border-border/50 bg-linear-to-br from-secondary/30 to-background">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-4 border-b border-border/50">
                      <FileText className="w-8 h-8 text-foreground/70" />
                      <div>
                        <p className="font-semibold">
                          Breach Analysis Report Sample Data
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Generated: January 6, 2026
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {breachMetrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="p-4 rounded-xl bg-background border border-border/50  "
                        >
                          <h2 className="text-2xl font-bold text-foreground">
                            {metric.value}
                          </h2>
                          <p className="text-xs text-muted-foreground">
                            {metric.label}
                          </p>
                          <div className="flex items-center gap-1 mt-2 text-xs text-foreground/70">
                            <TrendingUp className="w-3 h-3 text-green-500" />
                            {metric.trend}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-widest mb-4">
                  Reporting
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Full Detailed PDF Reports
                </h2>
                <p className="text-lg text-muted-foreground font-body mb-8 leading-relaxed">
                  Generate comprehensive PDF reports encompassing breach
                  analytics, employee leaks, risk scores, and malware logs.
                  Designed for executive review, compliance audits, and internal
                  security teams.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-foreground/80">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Executive summary with risk scoring</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground/80">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Detailed breach timeline and analysis</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground/80">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Remediation recommendations</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground/80">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Compliance-ready documentation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-widest mb-4">
                Use Cases
              </span>
              <h2 className="text-3xl md:text-6xl font-bold mb-4">
                <span className="text-foreground">Protect</span> what matters
                most
              </h2>
              <p className="text-lg text-muted-foreground font-body">
                How security teams leverage Vigile.AI to stay ahead of threats
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <div
                  key={useCase.title}
                  className="group p-6 rounded-2xl bg-card shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-foreground/10 transition-colors">
                    <useCase.icon
                      className={`w-6 h-6 ${
                        iconColors[index % iconColors.length].iconColor
                      }`}
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-widest mb-4">
                  Integrations
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Seamless connectivity
                </h2>
                <p className="text-lg text-muted-foreground font-body">
                  Integrate with your existing security stack for unified threat
                  management
                </p>
              </div>

              <div className="grid sm:grid-cols-1 max-w-sm mx-auto gap-3">
                {[{ name: "Office 365", icon: "/products/outlook.svg" }].map(
                  (integration) => (
                    <div
                      key={integration.name}
                      className="flex flex-col items-center justify-center p-2 rounded-xl bg-card shadow-lg"
                    >
                      <Image
                        src={integration.icon as string}
                        width={120}
                        height={120}
                        alt={integration.name}
                        className="mb-3"
                      />
                      <span className="text-lg font-medium text-center">
                        {integration.name}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        <PageCTA
          badge="Protecting 100,000+ employees across enterprises"
          headline="Stop breaches"
          highlightedText="before they start."
          description="Join leading enterprises who trust Vigile.AI to protect their employees and prevent credential-based attacks."
          primaryButtonText="Schedule Demo"
          primaryButtonLink="/contact"
          secondaryButtonText="Contact Sales"
          secondaryButtonLink="/contact"
        />
      </div>
    </>
  );
}
