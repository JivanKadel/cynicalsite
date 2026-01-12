import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Eye,
  Shield,
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
  Server,
  FileWarning,
  Link2,
  Type,
  CheckCircle,
  Bell,
  BarChart3,
  Download,
  LogIn,
  ShieldAlert,
  Workflow,
} from "lucide-react";
import PageCTA from "@/components/products/PageCTA";
import Link from "next/link";
import Image from "next/image";

const Vigile = () => {
  const stats = [
    { value: "15B+", label: "Breach Records Indexed", icon: Database },
    { value: "24/7", label: "Real-time Monitoring", icon: Activity },
    { value: "<5min", label: "Alert Response Time", icon: Clock },
    { value: "99.9%", label: "Detection Accuracy", icon: Shield },
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
      icon: Shield,
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
    <div>
      <section className="pt-6 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-secondary/80 via-background to-background" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="container mx-auto px-6 relative">
          <div>
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              ← Back to Products
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <span className="text-sm text-muted-foreground uppercase tracking-widest">
                  Product
                </span>
                <h1 className="text-4xl md:text-5xl font-bold">Vigile.AI</h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90 mb-4">
                  Discover Employee Data Breaches Before They Happen
                </h2>

                <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-body leading-relaxed ">
                  Your team&apos;s credentials are a prime target. Vigile
                  detects credential theft, prevents account takeovers, and
                  blocks unauthorized access across your organization.
                </p>
              </div>
              <div className="-rotate-15">
                <Image
                  src={"/vigile.webp"}
                  width={1920}
                  height={924}
                  alt="Vigile.AI Logo"
                />
              </div>
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

      {/* Outlook Integration - Main Focus Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-background via-secondary/20 to-background" />

        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-border/50 mb-6">
                <Mail className="w-4 h-4 text-foreground" />
                <span className="text-sm font-medium">Core Integration</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Office 365 Integration
                <span className="block text-muted-foreground text-2xl md:text-3xl mt-2">
                  Powered by Microsoft Graph API
                </span>
              </h2>

              <p className="text-lg text-muted-foreground font-body mb-8 leading-relaxed">
                We connect directly with your organization&apos;s Office365
                environment and fetch all employee records, sign-in logs, risk
                users, and activities. Our powerful AI engine correlates this
                data with our 15B+ breach records database to surface exposures
                in real-time.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-foreground/70 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium">One-click deployment</span>
                    <p className="text-sm text-muted-foreground">
                      Connect your Office365 tenant in minutes with our guided
                      setup
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-foreground/70 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium">Real-time sync</span>
                    <p className="text-sm text-muted-foreground">
                      Employee changes reflected instantly across your security
                      dashboard
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-foreground/70 mt-0.5 shrink-0" />
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

              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90"
              >
                Connect Office 365
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="relative">
              {/* Visual representation of the integration */}
              <div className="relative p-8 rounded-3xl border border-border/50 bg-linear-to-br from-secondary/50 to-background">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-foreground/5 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-foreground/5 rounded-full blur-2xl" />

                {/* Office 365 Logo Representation */}
                <div className="flex items-center justify-center mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-foreground/10 border border-border flex items-center justify-center">
                    <Mail className="w-10 h-10 text-foreground" />
                  </div>
                  <div className="mx-4 flex items-center gap-1">
                    <Workflow className="w-6 h-6 text-muted-foreground" />
                    <div className="w-8 h-px bg-border" />
                    <div className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
                    <div className="w-8 h-px bg-border" />
                  </div>
                  <div className="w-20 h-20 rounded-2xl bg-foreground/10 border border-border flex items-center justify-center">
                    <Eye className="w-10 h-10 text-foreground" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {outlookFeatures.map((feature, index) => (
                    <div
                      key={feature.title}
                      className="p-4 rounded-xl bg-background/50 border border-border/50 animate-fade-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-3">
                        <feature.icon className="w-5 h-5 text-foreground" />
                      </div>
                      <h4 className="font-semibold text-sm mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Modules Grid */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-widest mb-4">
              Platform Modules
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise breach intelligence
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              Comprehensive monitoring and response capabilities powered by AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformModules.map((module, index) => (
              <div
                key={module.title}
                className="group p-6 rounded-2xl border border-border/50 bg-background hover:border-foreground/20 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-foreground/10 transition-colors">
                  <module.icon className="w-6 h-6 text-foreground" />
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
                {/* Mock PDF Report Preview */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-4 border-b border-border/50">
                    <FileText className="w-8 h-8 text-foreground" />
                    <div>
                      <p className="font-semibold">Breach Analysis Report</p>
                      <p className="text-xs text-muted-foreground">
                        Generated: January 6, 2026
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {breachMetrics.map((metric, index) => (
                      <div
                        key={metric.label}
                        className="p-4 rounded-xl bg-background border border-border/50 animate-fade-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <p className="text-2xl font-bold">{metric.value}</p>
                        <p className="text-xs text-muted-foreground">
                          {metric.label}
                        </p>
                        <div className="flex items-center gap-1 mt-2 text-xs text-foreground/70">
                          <TrendingUp className="w-3 h-3" />
                          {metric.trend}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        Ready for export
                      </span>
                      <span className="text-foreground font-medium">
                        PDF • CSV • JSON
                      </span>
                    </div>
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
                  <CheckCircle className="w-5 h-5 text-foreground/50" />
                  <span>Executive summary with risk scoring</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/80">
                  <CheckCircle className="w-5 h-5 text-foreground/50" />
                  <span>Detailed breach timeline and analysis</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/80">
                  <CheckCircle className="w-5 h-5 text-foreground/50" />
                  <span>Remediation recommendations</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/80">
                  <CheckCircle className="w-5 h-5 text-foreground/50" />
                  <span>Compliance-ready documentation</span>
                </div>
              </div>

              <Button>
                <Download className="w-4 h-4 mr-2" />
                Download Sample Report
              </Button>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Protect what matters most
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              How security teams leverage Vigile.AI to stay ahead of threats
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={useCase.title}
                className="group p-6 rounded-2xl border border-border/50 bg-background hover:border-border transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-foreground/10 transition-colors">
                  <useCase.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24">
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

            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {[
                { name: "Office 365", icon: Mail },
                { name: "Okta", icon: Lock },
                { name: "Azure AD", icon: Shield },
                { name: "Slack", icon: Bell },
                { name: "SIEM", icon: Activity },
                { name: "API", icon: Server },
              ].map((integration) => (
                <div
                  key={integration.name}
                  className="flex flex-col items-center justify-center p-6 rounded-xl border border-border/50 bg-card/50 hover:border-border transition-colors"
                >
                  <integration.icon className="w-8 h-8 text-muted-foreground mb-3" />
                  <span className="text-xs font-medium text-center">
                    {integration.name}
                  </span>
                </div>
              ))}
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
  );
};

export default Vigile;
