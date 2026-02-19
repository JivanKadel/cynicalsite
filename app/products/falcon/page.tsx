import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { iconColors } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";

import Link from "next/link";
import {
  stats,
  process,
  features,
  programTypes,
  incidentTypes,
} from "@/data/products/falcon.data";

export const metadata: Metadata = {
  title: "Falcon | Continuous Site Monitoring Platform",
  description:
    "Falcon is a centralized monitoring and notification system designed to help large-scale organizations & government track their public assets at scale. Monitor every asset every minute for downtime and keyword-based threats.",
};

export default function Falcon() {
  return (
    <div>
      <section className="pt-6 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div>
            <div className="lg:grid lg:grid-cols-5 gap-20 mx-auto">
              <div className="lg:col-span-2 w-full flex flex-col gap-4 mb-8 lg:mb-0">
                <div className="flex items-center gap-4 mb-6">
                  <div>
                    <div className="font-aeonik text-4xl md:text-5xl font-bold mt-4">
                      Falcon
                    </div>
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground/80 mb-4">
                  Centralized monitoring and notification system
                </h2>

                <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-body leading-relaxed ">
                  Falcon is designed to help large-scale organizations &
                  government track their public assets at scale. Every asset,
                  every minute, always protected.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-2">
                  <Link
                    href="/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="h-12 px-4 w-full">Request a Demo</Button>
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-3 xl:ml-8 lg:mt-0">
                <Image
                  src="/products/web_monitoring_light.png"
                  width={1920}
                  height={924}
                  alt="Falcon Dashboard Screenshot"
                  className="block dark:hidden"
                />
                <Image
                  src="/products/web_monitoring_dark.png"
                  width={1920}
                  height={924}
                  alt="Falcon Dashboard Screenshot"
                  className="hidden dark:block"
                />
              </div>
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

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-widest mb-4">
              How It Works
            </span>
            <p className="text-3xl md:text-5xl font-aeonik font-bold mb-4">
              Continuous Protection
            </p>
            <p className="text-lg text-muted-foreground font-body">
              From monitor creation to incident resolution - a seamless workflow
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
              Enterprise-grade monitoring
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              Everything you need to track and protect your public assets
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
              Plans & Pricing
            </span>
            <p className="text-3xl md:text-4xl font-aeonik font-bold mb-4">
              Scale with your needs
            </p>
            <p className="text-lg text-muted-foreground font-body">
              Flexible plans designed for organizations of all sizes
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
                <a href="/contact">
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
                Real-time Detection
              </span>
              <p className="text-3xl md:text-4xl font-aeonik font-bold mb-4">
                Detect threats instantly.
                <span className="block text-muted-foreground">
                  Respond immediately.
                </span>
              </p>
              <Image
                src={"/generic/monitor.jpg"}
                alt="Monitoring Illustration"
                width={600}
                height={400}
                className="rounded-lg mb-6"
              />
              <p className="text-lg text-muted-foreground font-body mb-8">
                Falcon continuously monitors your assets for downtime and
                sensitive keyword matches, creating incidents and sending alerts
                before your users even notice.
              </p>
            </div>

            <div className="space-y-3">
              {incidentTypes.map((incident, index) => (
                <div
                  key={incident.name}
                  className="flex items-center justify-between p-4 rounded-xl border border-border/50 bg-background hover:border-border transition-colors"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center">
                    <div className="w-18 mr-4 flex justify-center">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded ${
                          incident.severity === "Critical"
                            ? "bg-red-500/10 text-red-400"
                            : incident.severity === "High"
                              ? "bg-orange-500/10 text-orange-400"
                              : "bg-yellow-500/10 text-yellow-400"
                        }`}
                      >
                        {incident.severity}
                      </span>
                    </div>
                    <span className="font-medium">{incident.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-2 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-aeonik font-bold mb-6">
              Start monitoring your assets
            </h2>
            <p className="text-lg text-muted-foreground font-body mb-8">
              Join leading organizations and government agencies that trust
              Falcon for continuous site monitoring.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="h-12 px-8">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
