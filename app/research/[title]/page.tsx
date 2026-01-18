import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  AlertTriangle,
  Shield,
  Code,
  Database,
  FileText,
  ExternalLink,
  Landmark,
  AppWindow,
  LayoutTemplate,
} from "lucide-react";
import Link from "next/link";

export default function ResearchDetailPage() {
  return (
    <div>
      <section className="pt-8 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className="px-3 py-1.5 rounded-full bg-red-500/20 text-red-500 text-xs font-semibold uppercase tracking-wider">
                Critical
              </span>
              <span className="text-sm text-muted-foreground">
                January 2026
              </span>
              <span className="text-sm text-muted-foreground">12 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-8 text-balance">
              SQL Injection in Enterprise ERP Systems
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-12 leading-relaxed">
              A comprehensive analysis of critical SQL injection vulnerabilities
              discovered in widely-deployed enterprise ERP systems, affecting
              over 2,500 organizations globally.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-4 gap-8 text-center">
              {[
                { value: "CVE-2026-XXXX", label: "Assigned CVE" },
                { value: "9.8", label: "CVSS Score" },
                { value: "2,500+", label: "Orgs Affected" },
                { value: "Patched", label: "Status" },
              ].map((stat) => (
                <div key={stat.label}>
                  <h2 className="text-xl text-blue md:text-2xl font-bold mb-1">
                    {stat.value}
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-xl md:text-3xl font-semibold uppercase tracking-widest mb-6">
                Executive Summary
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-foreground/70">
                During a routine security assessment, our research team
                discovered a series of critical SQL injection vulnerabilities in
                three major enterprise ERP platforms. These vulnerabilities
                allow unauthenticated attackers to extract sensitive business
                data, modify financial records, and achieve remote code
                execution on underlying database servers.
              </p>
            </div>

            {/* Divider */}
            <div className="w-16 h-px bg-border mx-auto mb-20" />

            {/* Affected Systems */}
            <div className="mb-20">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-8 text-center">
                Affected Systems
              </h2>
              <div className="space-y-3">
                {[
                  {
                    icon: AppWindow,
                    name: "Enterprise Suite Pro",
                    versions: "v8.0 - v8.4.2",
                    severity: "Critical",
                  },
                  {
                    icon: LayoutTemplate,
                    name: "GlobalERP Platform",
                    versions: "v12.x - v14.2",
                    severity: "Critical",
                  },
                  {
                    icon: Landmark,
                    name: "FinanceCore ERP",
                    versions: "v5.0 - v5.3.1",
                    severity: "High",
                  },
                ].map((system) => (
                  <div
                    key={system.name}
                    className="flex items-center justify-between align-middle p-5 rounded-xl border border-border bg-secondary/30"
                  >
                    <div className="flex items-center gap-4">
                      <div className=" w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                        <system.icon className="w-5 h-5 text-muted-foreground" />
                      </div>

                      <div>
                        <p className="font-semibold">{system.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {system.versions}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        system.severity === "Critical"
                          ? "bg-red-500/20 text-red-500"
                          : "bg-orange-500/20 text-orange-500"
                      }`}
                    >
                      {system.severity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Analysis */}
            <div className="mb-20">
              <div className="text-center mb-20">
                <h2 className="text-xl md:text-3xl font-semibold uppercase tracking-widest mb-6 text-center">
                  Technical Analysis
                </h2>

                <p className="text-base md:text-lg leading-relaxed text-foreground/70">
                  The vulnerability exists in the user authentication module
                  where user-supplied input is directly concatenated into SQL
                  queries without proper sanitization.
                </p>
              </div>

              {/* Code Block */}
              <div className="rounded-xl bg-secondary/50 border border-border overflow-hidden mb-10">
                <div className="flex items-center justify-center gap-2 px-4 py-3 border-b border-border">
                  <Code className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Vulnerable Code Pattern
                  </span>
                </div>
                <pre className="p-6 overflow-x-auto text-sm">
                  <code className="text-foreground/80">{`// Vulnerable implementation
String query = "SELECT * FROM users WHERE username = '" 
             + request.getParameter("user") 
             + "' AND password = '" 
             + request.getParameter("pass") + "'";

// Exploitation payload
user: admin'--
pass: [anything]

// Resulting query
SELECT * FROM users WHERE username = 'admin'--' AND password = ''`}</code>
                </pre>
              </div>
              <div className="text-center mb-20">
                <p className="text-base md:text-lg leading-relaxed text-foreground/70">
                  The vulnerable endpoint is exposed on the public-facing login
                  page, requiring no prior authentication. Successful
                  exploitation grants full access to the underlying database.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-16 h-px bg-border mx-auto mb-20" />

            {/* Impact */}
            <div className="mb-20">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-8 text-center">
                Potential Impact
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    icon: AlertTriangle,
                    title: "Data Ex-filtration",
                    description:
                      "Complete database dump including customer data and financial records",
                  },
                  {
                    icon: Shield,
                    title: "Auth Bypass",
                    description:
                      "Unauthorized access to admin panels and privileged functionality",
                  },
                  {
                    icon: Database,
                    title: "Data Manipulation",
                    description:
                      "Ability to modify financial records, invoices, and audit trails",
                  },
                  {
                    icon: Code,
                    title: "Remote Code Execution",
                    description:
                      "In certain configurations, attackers can execute OS commands",
                  },
                ].map((impact) => (
                  <div
                    key={impact.title}
                    className="p-6 rounded-xl bg-card text-center"
                  >
                    <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center mx-auto mb-4">
                      <impact.icon className="w-5 h-5 text-orange-500" />
                    </div>
                    <h3 className="font-semibold mb-2">{impact.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {impact.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Remediation */}
            <div className="mb-20">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-8 text-center">
                Remediation Steps
              </h2>
              <div className="space-y-3">
                {[
                  "Update to the latest patched version immediately",
                  "Implement parameterized queries and prepared statements",
                  "Deploy Web Application Firewall (WAF) rules",
                  "Conduct thorough code review of all SQL queries",
                  "Enable database activity monitoring and alerting",
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card"
                  >
                    <span className="w-8 h-8 rounded-full bg-primary/20 text-green-500 flex items-center justify-center text-sm font-bold shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-foreground/90">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="w-16 h-px bg-border mx-auto mb-20" />

            {/* Timeline */}
            <div className="mb-20">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-8 text-center">
                Disclosure Timeline
              </h2>
              <div className="relative">
                <div className="space-y-6">
                  {[
                    {
                      date: "Oct 15, 2025",
                      event:
                        "Vulnerability discovered during client assessment",
                    },
                    {
                      date: "Oct 18, 2025",
                      event: "Initial report submitted to affected vendors",
                    },
                    {
                      date: "Oct 25, 2025",
                      event: "Vendors acknowledge and begin investigation",
                    },
                    {
                      date: "Dec 10, 2025",
                      event: "Patches released by all three vendors",
                    },
                    {
                      date: "Jan 6, 2026",
                      event: "Public disclosure (90-day policy)",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-6 md:gap-8"
                    >
                      <span className="text-sm text-muted-foreground w-20 shrink-0 text-right pt-1">
                        {item.date}
                      </span>
                      <div className="w-2 h-2 rounded-full bg-foreground mt-2 shrink-0 relative z-10" />
                      <p className="text-foreground/90 flex-1">{item.event}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="text-center">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-8">
                Resources
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border hover:bg-secondary transition-colors text-sm font-medium"
                >
                  <FileText className="w-4 h-4" />
                  Full Technical Report
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border hover:bg-secondary transition-colors text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  CVE Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
              Concerned about your ERP security?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our team can assess your systems for this and other critical
              vulnerabilities.
            </p>
            <Button size="lg" className="group" asChild>
              <Link href="/contact">
                Request an Assessment
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
