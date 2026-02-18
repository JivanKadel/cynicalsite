import type { Metadata } from "next";
import PageCTA from "@/components/products/PageCTA";
import { iconColors } from "@/lib/utils";
import { Code, CheckCircle } from "lucide-react";
import Link from "next/link";
import {
  capabilities,
  features,
  methodology,
  stats,
  testingTypes,
} from "@/data/solutions/app-security.data";
import Image from "next/image";
import ResponsiveImage from "@/components/image/ResponsiveImage";

export const metadata: Metadata = {
  title: "App Security | Cynical Technology",
  description:
    "Application Security at Cynical Technology. Making your applications safer and more resilient against threats.",
};

export default function ApplicationSecurity() {
  return (
    <div>
      <section className="pt-6 pb-12 relative overflow-hidden">
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
              <span className="text-foreground">Application Security</span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8 ">
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

            <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-10 leading-relaxed">
              Comprehensive penetration testing and vulnerability assessments
              for web, mobile, and API applications. Our elite security
              researchers identify vulnerabilities that automated tools miss.
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
                Full-spectrum application security
              </h2>
              <p className="text-lg lg:text-xl text-muted-foreground font-body leading-relaxed mb-2">
                From web applications to APIs to mobile apps, our comprehensive
                testing methodology covers every attack vector across your
                application landscape.
              </p>
              <p className="text-lg lg:text-xl text-muted-foreground font-body leading-relaxed mb-2">
                We go beyond OWASP Top 10 vulnerabilities to identify complex
                logic flaws, chained exploits, and emerging threats that put
                your applications at risk.
              </p>
              <p className="text-lg lg:text-xl text-muted-foreground font-body leading-relaxed">
                Our team of elite security researchers uses a combination of
                manual testing techniques and custom-built tools to uncover
                vulnerabilities that automated scanners miss. We pride ourselves
                on our ability to find the hidden weaknesses that attackers
                would exploit in the real world.
              </p>
            </div>
            {/* <div>
              <Image
                src={"/generic/apps.jpg"}
                alt="A phone with various app icons"
                width={600}
                height={400}
                className="rounded-lg mb-6"
              />
            </div> */}
            <ResponsiveImage
              src={"/generic/apps.jpg"}
              alt="A phone with various app icons"
              className="mt-6"
            />
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

      {/* Testing Types Section */}
      <section className="py-20 lg:py-32 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-lg font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
              Testing Approaches
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-6">
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
                <div className="flex justify-between">
                  <div className="text-6xl font-bold text-foreground/20 mb-4">
                    0{index + 1}
                  </div>
                  <Image
                    src={"/generic/black_box_testing.png"}
                    alt={type.title}
                    width={54}
                    height={48}
                    className="mb-6 dark:invert dark:opacity-50 object-cover"
                  />
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
                Rigorous methodology, proven results
              </h2>
              <Image
                src={"/generic/zooming.jpg"}
                alt="A map with a zooming effect, symbolizing our deep and thorough testing methodology."
                width={600}
                height={400}
                className="rounded-lg mb-6"
              />
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
            <span className="text-lg font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
              Why Cynical ?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Enterprise-grade security, delivered
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex group gap-4 p-6 rounded-xl border border-border bg-background hover:border-foreground/20 transition-colors"
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

      {/* OWASP Coverage Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-lg font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
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
        badge="2,400+ applications tested this year"
        headline="Ready to secure"
        highlightedText="your applications?"
        description="Get a comprehensive security assessment from our elite team of security researchers. Identify vulnerabilities before attackers do."
      />
    </div>
  );
}
