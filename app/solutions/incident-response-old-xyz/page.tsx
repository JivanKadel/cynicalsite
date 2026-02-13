import type { Metadata } from "next";
import PageCTA from "@/components/products/PageCTA";
import { iconColors } from "@/lib/utils";
import { CheckCircle, Siren } from "lucide-react";
import Link from "next/link";
import {
  capabilities,
  features,
  incidentTypes,
  methodology,
  responsePhases,
  stats,
} from "@/data/solutions/incident-response.data";

export const metadata: Metadata = {
  title: "Incident Response | Cynical Technology",
  description:
    "Incident Response at Cynical Technology. Rapid response, forensic analysis, and recovery services for cyber incidents.",
};

const IncidentResponse = () => {
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
              <span className="text-foreground">Incident Response</span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8">
              <Siren className="w-4 h-4 text-foreground" />
              <span className="text-sm font-medium">
                Emergency Incident Response
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 text-balance">
              Respond to incidents
              <span className="block text-slate-500">
                with speed and precision
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-10   stagger-3 leading-relaxed">
              Rapid incident response with sub-15 minute response times,
              comprehensive digital forensics, and complete recovery services.
              Our elite response team has handled 1,200+ incidents with 98%
              successful containment.
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

      {/* Response Phases Section */}
      <section className="py-20 lg:py-32 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-lg font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
              Response Phases
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-6">
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
                <div className="text-6xl font-bold text-foreground/20 mb-4">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                  {phase.description}
                </p>
                <ul className="space-y-3">
                  {phase.features.map((feature, fIndex) => (
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
                NIST-aligned response methodology
              </h2>
              <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
                Our incident response process follows NIST Cybersecurity
                Framework guidelines with proven playbooks for ransomware,
                business email compromise, data breaches, and advanced
                persistent threats.
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
              Rapid response, proven results
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

      {/* Incident Types Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-lg font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
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
                  <div className="w-8 h-8 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-500" />
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
      />
    </div>
  );
};

export default IncidentResponse;
