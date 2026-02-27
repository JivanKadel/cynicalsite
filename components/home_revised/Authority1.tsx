import {
  Shield,
  Crosshair,
  Eye,
  FileSearch,
  Binary,
  Network,
  Skull,
  Bug,
  EyeClosed,
} from "lucide-react";
import { trustMetrics } from "./trust.data";

export default function TrustAuthority1() {
  return (
    <section id="trust-authority" className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center max-w-3xl space-y-8 mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-widest mb-6 px-4 py-2 rounded-full border border-border/50 bg-secondary/50">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Offensive Security Excellence
          </span>
          <p className="font-aeonik text-2xl sm:text-3xl md:text-5xl font-bold text-foreground">
            We don&apos;t just find bugs.
            <span className="block">We understand adversaries.</span>
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Every engagement is a simulated attack campaign, not a checklist.
            Our methodology mirrors real-world adversaries because that's who
            you&apos;re defending against.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="p-8 rounded-2xl bg-card border border-border/30">
            <Crosshair className="w-10 h-10 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Adversary Simulation</h3>
            <p className="text-muted-foreground text-sm mb-4">
              We model attacks based on your specific threat landscape:
              ransomware gangs, nation-states, or insider threats.
            </p>
            <div className="text-xs text-muted-foreground font-mono">
              MITRE ATT&CK aligned • Custom TTPs
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-card border border-border/30">
            <Binary className="w-10 h-10 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Minimum Automation</h3>
            <p className="text-muted-foreground text-sm mb-4">
              No generic scanner outputs. Every finding is manually validated,
              chain-exploited, and business-contextualized.
            </p>
            <div className="text-xs text-muted-foreground font-mono">
              100% manual validation • Zero false positives
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-card border border-border/30">
            <EyeClosed className="w-10 h-10 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Blind Spots Focus</h3>
            <p className="text-muted-foreground text-sm mb-4">
              We target what others miss. Business logic flaws,
              misconfigurations, and complex privilege escalation chains.
            </p>
            <div className="text-xs text-muted-foreground font-mono">
              OWASP Top 10 • Beyond CVEs
            </div>
          </div>
        </div>

        {/* Methodology Visualization */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-6">
            Our approach: The attacker&apos;s journey
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                phase: "Recon",
                icon: Network,
                description: "OSINT, footprinting, asset discovery",
              },
              {
                phase: "Exploit",
                icon: Skull,
                description: "Weaponization, delivery, initial access",
              },
              {
                phase: "Pivot",
                icon: Network,
                description: "Lateral movement, privilege escalation",
              },
              {
                phase: "Report",
                icon: FileSearch,
                description: "Business-impact analysis, remediation",
              },
            ].map((item, i) => (
              <div key={item.phase} className="relative">
                <div className="p-4 rounded-xl bg-card border border-border/30">
                  <item.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="font-semibold text-sm">{item.phase}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {item.description}
                  </div>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-[2px] bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
