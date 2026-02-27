import { Activity, Bell, Gauge, Clock, Scan, Webhook } from "lucide-react";
import { trustMetrics } from "./trust.data";
import Image from "next/image";

export default function TrustAuthority2() {
  return (
    <section id="trust-authority" className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center max-w-3xl space-y-8 mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-widest mb-6 px-4 py-2 rounded-full border border-border/50 bg-secondary/50">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Continuous Security Validation
          </span>
          <p className="font-aeonik text-2xl sm:text-3xl md:text-5xl font-bold text-foreground">
            Know your posture
            <span className="block">in real-time, not just quarterly.</span>
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Security isn&apos;t a point-in-time checkbox. Our platform
            continuously monitors your platforms, and alerts you to emerging
            threats.
          </p>
        </div>

        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent rounded-3xl blur-3xl" />
          <div className="relative bg-card border border-border/30 rounded-2xl p-6 overflow-hidden">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-xs font-mono text-muted-foreground ml-2">
                security-dashboard
              </span>
            </div>
            <div className="flex justify-center items-center mb-4">
              {/* {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-16 bg-secondary/50 rounded-lg animate-pulse"
                />
              ))} */}
              <Image
                src="/products/vigile_1.png"
                alt="Dashboard sample"
                width={800}
                height={400}
                className="rounded-lg"
              />
            </div>
            {/* <div className="h-32 bg-secondary/30 rounded-lg animate-pulse" /> */}
          </div>

          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 bg-card border border-border/30 rounded-full px-6 py-3 shadow-xl">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-green-500" />
              <span className="text-sm">Live monitoring</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-amber-500" />
              <span className="text-sm">Real-time alerts</span>
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-xl bg-card border border-border/30 hover:border-primary/30 transition-colors">
            <Scan className="w-8 h-8 text-blue-500 mb-3" />
            <h3 className="font-semibold mb-2">
              Continuous Attack Surface Monitoring
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              We scan for new assets, exposed services, and misconfigurations
              24/7.
            </p>
            <div className="text-xs text-muted-foreground font-mono">
              Updates every 4 hours
            </div>
          </div>

          <div className="p-6 rounded-xl bg-card border border-border/30 hover:border-primary/30 transition-colors">
            <Gauge className="w-8 h-8 text-purple-500 mb-3" />
            <h3 className="font-semibold mb-2">Control Drift Detection</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Know when security configurations change and if they introduce
              risk.
            </p>
            <div className="text-xs text-muted-foreground font-mono">
              Baseline + real-time diff
            </div>
          </div>

          <div className="p-6 rounded-xl bg-card border border-border/30 hover:border-primary/30 transition-colors">
            <Webhook className="w-8 h-8 text-green-500 mb-3" />
            <h3 className="font-semibold mb-2">
              Threat Intelligence Integration
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Correlate internal telemetry with global threat feeds
              automatically.
            </p>
            <div className="text-xs text-muted-foreground font-mono">
              50+ intelligence sources
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
