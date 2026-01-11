import {
  ArrowRight,
  Shield,
  Cloud,
  Search,
  AlertTriangle,
  Code,
  Smartphone,
  Lock,
  Network,
  FileCheck,
  Bot,
  Database,
  Fingerprint,
  Webhook,
  Monitor,
  Key,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SolutionCard from "./SolutionCard";

export default function Solutions() {
  const solutions = [
    {
      icon: Code,
      title: "Application Penetration Testing",
      description:
        "Manual exploitation of your web apps, APIs, and mobile applications. We find the logic flaws, auth bypasses, and injection points scanners can't detect.",
      features: [
        "OWASP Top 10+",
        "Business logic testing",
        "Auth/session attacks",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure Assessment",
      description:
        "Privilege escalation paths, misconfigured IAM policies, and lateral movement opportunities across AWS, GCP, and Azure environments.",
      features: ["IAM policy review", "Container escapes", "Secrets exposure"],
    },
    {
      icon: Network,
      title: "Red Team Operations",
      description:
        "Full-scope adversary simulation. We compromise your environment the way APT groups would—phishing, initial access, persistence, and data exfiltration.",
      features: ["Initial access", "Persistence", "Objective completion"],
    },
    {
      icon: AlertTriangle,
      title: "Incident Response & Forensics",
      description:
        "Under attack? Our IR team deploys within 4 hours. We contain, investigate, and eradicate threats while preserving evidence for legal proceedings.",
      features: [
        "4-hour deployment",
        "Malware analysis",
        "Legal-ready reports",
      ],
    },
    {
      icon: Bot,
      title: "AI/ML Security Assessment",
      description:
        "Adversarial attacks on your models: prompt injection, training data extraction, model inversion, and API abuse testing for LLMs and ML systems.",
      features: ["Prompt injection", "Model extraction", "Data poisoning"],
    },
    {
      icon: Search,
      title: "Threat Intelligence & Recon",
      description:
        "Attacker-eye view of your organization. We monitor dark web forums, paste sites, and criminal marketplaces for leaked credentials and mentions of your assets.",
      features: [
        "Dark web monitoring",
        "Credential alerts",
        "Brand impersonation",
      ],
    },
  ];

  const capabilities = [
    { icon: Shield, text: "Network Penetration Testing" },
    { icon: Network, text: "Adversary Simulation" },
    { icon: Code, text: "Secure Code Review" },
    { icon: Cloud, text: "Cloud Misconfiguration Audit" },
    { icon: Lock, text: "API Security Testing" },
    { icon: Smartphone, text: "Mobile App Exploitation" },
    { icon: Search, text: "Hardware & IoT Security" },
    { icon: AlertTriangle, text: "Social Engineering" },
    { icon: FileCheck, text: "Compliance Gap Assessment" },
    { icon: Fingerprint, text: "Identity & Access Review" },
    { icon: Webhook, text: "CI/CD Pipeline Security" },
    { icon: Monitor, text: "Detection Engineering" },
    { icon: Key, text: "Secrets & Key Management" },
    { icon: Bot, text: "LLM & AI Red Teaming" },
    { icon: Database, text: "Database Security Audit" },
  ];

  return (
    <section id="solutions" className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-3xl space-y-8 mx-auto mb-20">
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-widest mb-6 px-4 py-2 rounded-full border border-border/50 bg-secondary/50">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Services
          </span>
          <h2 className="text-2xl sm:text-5xl md:text-7xl font-semibold">
            We break in.
            <span className="block gradient-text-accent">
              You fix the gaps.
            </span>
          </h2>
          <p className="text-lg sm:text-xl font-extralight text-muted-foreground max-w-2xl mx-auto">
            Every engagement is scoped to your threat model. We don&apos;t run
            generic scans—we simulate the specific adversaries targeting your
            industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.title}
              Icon={solution.icon}
              title={solution.title}
              description={solution.description}
              features={solution.features}
              index={index}
            />
          ))}
        </div>

        <div className="rounded-2xl border border-border/30 bg-secondary/20 p-8 lg:p-12">
          <div className="text-center mb-10">
            <h3 className="text-display-sm font-bold mb-4">
              Technical Capabilities
            </h3>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              From source code to network perimeter—we test every layer
              attackers target.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
            {capabilities.map((capability, index) => (
              <div
                key={capability.text}
                className="flex items-center gap-3 p-4 rounded-xl border border-border/30 bg-background/50 hover:bg-background hover:border-border/50 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                <capability.icon className="w-4 h-4 text-foreground/70 flex-shrink-0" />
                <span className="text-sm font-medium">{capability.text}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" className="group">
              Download Service Catalog
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        <div className="mt-16 relative rounded-2xl overflow-hidden border border-border/30">
          <div className="absolute inset-0 bg-secondary/30" />

          <div className="relative p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div>
                <h4 className="text-xl font-semibold">
                  Don&apos;t know your exposure?
                </h4>
                <p className="text-muted-foreground text-sm">
                  Get a free attack surface reconnaissance report.
                </p>
              </div>
            </div>
            <Button className="bg-foreground text-background hover:bg-foreground/90">
              Request Free Recon Report
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
