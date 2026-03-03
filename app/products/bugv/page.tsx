import { Button } from "@/components/ui/button";

import { ArrowRight, CheckCircle } from "lucide-react";
import { iconColors } from "@/lib/utils";
import { Metadata } from "next";
import {
  features,
  process,
  programTypes,
  stats,
  vulnerabilityTypes,
} from "@/data/products/bugv.data";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Bugv | #1 Crowdsourced CyberSecurity & Pentesting Platform",
  description:
    "Bugv is a crowdsourcing cybersecurity platform powered by human intelligence where we connect businesses with cyber security experts from all around the world.",
};

export default function BugV() {
  return (
    <div>
      <section className="pt-6 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-6 relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div>
                <a
                  href="https://bugv.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-4xl md:text-5xl font-bold mt-4"
                >
                  Bugv
                </a>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-body leading-relaxed max-w-3xl">
              The crowdsourced security platform that connects you with elite
              ethical hackers. Continuous testing from adversaries who think
              like attackers, because they are.
            </p>

            <div className="grid max-w-md grid-cols-1 md:grid-cols-2 items-center gap-2">
              <a
                href="https://bugv.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="h-12 px-4 w-full">Visit Site</Button>
              </a>
              <a
                href="https://bugv.io/request-a-demo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="h-12 px-4 w-full" variant="outline">
                  Get Started With bugv
                </Button>
              </a>
            </div>
          </div>
          <a href="https://bugv.io/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/products/bugv.png"
              alt="Bugv Platform"
              width={800}
              height={500}
              className="dark:brightness-0 dark:invert"
            />
          </a>
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

      <section className="py-12 md:py-20">
        <div className="flex flex-col gap-4">
          <h3 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-aeonik font-bold mb-8">
            Understanding how Bugv works
          </h3>
          <div className="flex justify-center items-center">
            <iframe
              width="1093"
              height="615"
              src="https://www.youtube.com/embed/Ktvc4L88ip0"
              title="Bugv - Next Generation Pentest"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-widest mb-4">
              How It Works
            </span>
            <p className="text-3xl md:text-5xl font-aeonik font-bold mb-4">
              From launch to remediation
            </p>
            <p className="text-lg text-muted-foreground font-body">
              A streamlined process that turns security chaos into actionable
              insights
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-px bg-linear-to-r from-transparent via-border to-transparent" />

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {process.map((item) => (
                <div key={item.step} className="relative">
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-xl bg-gray-100 dark:bg-blue/10 border border-border/50 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-foreground" />
                    </div>
                    <span className="text-xs text-muted-foreground font-mono mb-2 block">
                      {item.step}
                    </span>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-body">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-widest mb-4">
              Platform Features
            </span>
            <h2 className="text-3xl md:text-5xl font-aeonik font-bold mb-4">
              Enterprise-grade bug bounty
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              Everything you need to run a successful security program
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl border border-border/50 bg-background hover:border-border transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-foreground/10 transition-colors">
                  <feature.icon
                    className={`w-6 h-6 ${
                      iconColors[index % iconColors.length].iconColor
                    }`}
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-widest mb-4">
              Program Options
            </span>
            <p className="text-3xl md:text-4xl font-aeonik font-bold mb-4">
              Choose your approach
            </p>
            <p className="text-lg text-muted-foreground font-body">
              Flexible program structures to match your security maturity and
              business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programTypes.map((program) => (
              <div
                key={program.title}
                className={`relative rounded-2xl border-2 p-8 ${
                  program.recommended
                    ? "border-blue/70 bg-secondary/50"
                    : "border-border/50 bg-card/50"
                }`}
              >
                {program.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 text-xs font-medium bg-blue text-white rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 font-body">
                  {program.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500/50 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://bugv.io/request-a-demo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant={program.recommended ? "default" : "outline"}
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-widest mb-4">
                Proven Results
              </span>
              <p className="text-3xl md:text-4xl font-aeonik font-bold mb-4">
                Real vulnerabilities.
                <span className="block text-muted-foreground">
                  Real impact.
                </span>
              </p>
              <Image
                src={"/generic/meeting.jpg"}
                alt="Image of Generic Meeting"
                width={600}
                height={400}
                className="rounded-lg mb-6"
              />
              <p className="text-lg text-muted-foreground font-body mb-8">
                Our researchers have uncovered thousands of critical
                vulnerabilities across Fortune 500 companies, protecting
                millions of users worldwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://bugv.io/contacts/">
                  <Button className="h-10">
                    Contact
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <a
                  href="https://blog.bugv.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="h-10">
                    Read Blogs
                  </Button>
                </a>
              </div>
            </div>

            <div className="space-y-3">
              {vulnerabilityTypes.map((vuln, index) => (
                <div
                  key={vuln.name}
                  className="flex items-center justify-between p-4 rounded-xl border border-border/50 bg-background hover:border-border transition-colors"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center">
                    <div className="w-18 mr-4 flex justify-center">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded ${
                          vuln.severity === "Critical"
                            ? "bg-red-500/10 text-red-400"
                            : vuln.severity === "High"
                              ? "bg-orange-500/10 text-orange-400"
                              : "bg-yellow-500/10 text-yellow-400"
                        }`}
                      >
                        {vuln.severity}
                      </span>
                    </div>
                    <span className="font-medium">{vuln.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 relative">
        <div className="container mx-auto px-2 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-card shadow-[0_0_4px_rgba(0,0,0,0.3)]">
            <div className="relative z-10 p-4 sm:p-12 lg:p-20">
              <div className="max-w-5xl mx-auto text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm text-sm text-muted-foreground mb-8">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  15000+ elite researchers ready to test your assets
                </div>

                {/* Headline */}
                <p className="text-[2rem] font-aeonik font-bold leading-none md:leading-tight xl:leading-20 lg:text-6xl xl:text-7xl -tracking-[1%] text-balance">
                  Ready to find vulnerabilities
                  <span className="block text-foreground">
                    before attackers do?
                  </span>
                </p>

                <p className="text-lg text-muted-foreground mb-10 mt-4 font-body max-w-2xl mx-auto">
                  Join the companies that trust Bugv to secure their most
                  critical assets with continuous crowdsourced security testing.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://bugv.io/request-a-demo/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="default" size="lg" className="h-12">
                      Get Started With bugv
                    </Button>
                  </a>
                </div>

                <div className="mt-16 pt-4 sm:pt-16 border-t border-border/30">
                  <p className="text-sm text-foreground/90 text-center mb-4 sm:mb-12 uppercase tracking-widest">
                    Trusted By Critical Industries
                  </p>
                  <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-12 lg:gap-16">
                    {[
                      "Banks",
                      "Governments",
                      "Healthcare",
                      "Fintech",
                      "Critical Infrastructure",
                      "Technology",
                    ].map((name) => (
                      <h2
                        key={name}
                        className="text-sm sm:text-base text-foreground font-semibold tracking-wide uppercase"
                      >
                        {name}
                      </h2>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
