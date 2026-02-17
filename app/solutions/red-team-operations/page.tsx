import type { Metadata } from "next";
import PageCTA from "@/components/products/PageCTA";
import { iconColors } from "@/lib/utils";
import { Skull, CheckCircle, Target } from "lucide-react"; // Added Skull, Target, Eye
import Link from "next/link";
import {
  capabilities,
  engagementTypes,
  features,
  methodology,
  stats,
} from "@/data/solutions/red-team-ops.data";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Red Team Operations | Cynical Technology",
  description:
    "Advanced adversarial simulation services. Test your people, processes, and technology against real-world attacker tactics, techniques, and procedures.",
};

export default function RedTeamOperations() {
  return (
    <div>
      <section className="pt-6 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8">
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
              <span className="text-foreground">Red Team Operations</span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8">
              <Skull className="w-4 h-4 text-foreground" />
              <span className="text-sm font-medium">
                Advanced Adversarial Simulation
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 text-balance">
              Think like an attacker
              <span className="block text-slate-500">
                to defend like none other
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-10 leading-relaxed">
              Our elite red team emulates real-world adversaries to test your
              organization&apos;s detection and response capabilities. We
              don&apos;t just find vulnerabilities, we uncover gaps in your
              security operations.
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
                <div className="text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-2">
                  {stat.value}
                </div>
                <p className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 py-6">
            <div className="max-w-3xl mb-16">
              <span className="text-lg font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
                Capabilities
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Full-scope adversary emulation
              </h2>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                From initial access to data exfiltration, we simulate the full
                attack lifecycle to test your people, processes, and technology
                against sophisticated adversaries.
              </p>
            </div>
            <div>
              <Image
                src={"/generic/horse.jpg"}
                alt="A generic image to show choices and probabilities."
                width={600}
                height={400}
                className="rounded-lg mb-6"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="group p-6 lg:p-8 rounded-2xl bg-card hover:border-foreground/20 transition-all duration-300 hover-lift"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${
                    iconColors[index % iconColors.length].iconBg
                  } flex items-center justify-center mb-6 group-hover:bg-foreground/10 transition-colors`}
                >
                  <capability.icon
                    className={`w-6 h-6 ${
                      iconColors[index % iconColors.length].iconColor
                    }`}
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

      {/* Engagement Types Section (replaces Testing Types) */}
      <section className="py-20 lg:py-32 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-lg font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
              Engagement Models
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Tailored to your threat model
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Choose the engagement type that aligns with your security
              objectives and adversary profile.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {engagementTypes.map((type, index) => (
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
                Operation lifecycle
              </h2>
              <Image
                src={"/generic/hacking.jpg"}
                alt="An image showing a cybersecurity professional working on a hacking simulation."
                width={600}
                height={400}
                className="rounded-lg mb-6"
              />
              <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
                Every engagement follows a structured yet flexible methodology
                designed to emulate real-world adversaries while ensuring safety
                and business continuity.
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
              Why Cynical?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Former operators, current threats
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex group gap-4 p-6 rounded-xl border border-border bg-background hover:border-foreground/20 transition-colors"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${
                    iconColors[index % iconColors.length].iconBg
                  } self-center flex items-center justify-center group-hover:bg-foreground/10 transition-colors`}
                >
                  <feature.icon
                    className={`w-6 h-6 ${
                      iconColors[index % iconColors.length].iconColor
                    }`}
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

      {/* MITRE ATT&CK Coverage Section (replaces OWASP) */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-lg font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
                Framework Alignment
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Full MITRE ATT&CK coverage
              </h2>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                Our operations are mapped to the MITRE ATT&CK framework,
                ensuring comprehensive testing against real-world adversary
                TTPs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "TA0043: Reconnaissance",
                "TA0042: Resource Development",
                "TA0001: Initial Access",
                "TA0002: Execution",
                "TA0003: Persistence",
                "TA0004: Privilege Escalation",
                "TA0005: Defense Evasion",
                "TA0006: Credential Access",
                "TA0007: Discovery",
                "TA0008: Lateral Movement",
                "TA0009: Collection",
                "TA0011: Command & Control",
                "TA0010: Exfiltration",
                "TA0040: Impact",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card"
                >
                  <div className="w-8 h-8 rounded-full text-background flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <span className="font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageCTA
        badge="Operational security guaranteed"
        headline="Test your defenses"
        highlightedText="against the best"
        description="See how your blue team responds to sophisticated, multi-stage attacks. Schedule a red team engagement today."
      />
    </div>
  );
}
