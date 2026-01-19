"use client";

import { Check, X } from "lucide-react";

const features = [
  { key: "idealFor", label: "Ideal For" },
  { key: "engagement", label: "Engagement Type" },
  { key: "apps", label: "Applications Covered" },
  { key: "depth", label: "Testing Depth" },
  { key: "manual", label: "Manual Testing" },
  { key: "automated", label: "Automated Scanning" },
  { key: "logic", label: "Business Logic Testing" },
  { key: "api", label: "API & Auth Testing" },
  { key: "exploit", label: "Exploit Validation" },
  { key: "fp", label: "False Positive Elimination" },
  { key: "retest", label: "Retesting After Fix" },
  { key: "support", label: "Security Advisory Support" },
  { key: "report", label: "Reporting" },
  { key: "compliance", label: "Compliance Mapping" },
  { key: "tracking", label: "Issue Tracking Integration" },
  { key: "sla", label: "SLA & Response Time" },
  { key: "cert", label: "Certification Letter" },
  { key: "monitoring", label: "Continuous Monitoring" },
];

const plans = [
  {
    name: "Foundation",
    price: "$6k–$8k",
    idealFor: "MVPs, early apps",
    engagement: "One-time",
    apps: "1",
    depth: "OWASP Top 10",
    manual: "Limited",
    automated: true,
    logic: false,
    api: false,
    exploit: false,
    fp: true,
    retest: false,
    support: false,
    report: "Technical VAPT",
    compliance: false,
    tracking: false,
    sla: false,
    cert: false,
    monitoring: false,
  },
  {
    name: "Growth",
    price: "$12k–$18k / yr",
    idealFor: "Growing production apps",
    engagement: "Per release / Quarterly",
    apps: "Up to 3",
    depth: "OWASP + logic",
    manual: "Standard",
    automated: true,
    logic: "Limited",
    api: "Limited",
    exploit: "Limited",
    fp: true,
    retest: "1 cycle",
    support: "Email",
    report: "Dev + Mgmt",
    compliance: "Basic",
    tracking: "Optional",
    sla: "Standard",
    cert: false,
    monitoring: false,
  },
  {
    name: "Advanced",
    price: "$25k–$40k / yr",
    idealFor: "Business‑critical platforms",
    engagement: "Scheduled + retesting",
    apps: "Up to 5",
    depth: "Deep logic + APIs",
    manual: "Extensive",
    automated: true,
    logic: true,
    api: true,
    exploit: true,
    fp: true,
    retest: "Multiple",
    support: "Dedicated consultant",
    report: "Exec + Compliance",
    compliance: "SOC2 / ISO / GDPR",
    tracking: true,
    sla: "Priority",
    cert: true,
    monitoring: "Optional",
  },
  {
    name: "Enterprise",
    price: "$60k+ / yr",
    idealFor: "Large & regulated orgs",
    engagement: "Continuous",
    apps: "Unlimited",
    depth: "Full‑scope + architecture",
    manual: "Extensive + ongoing",
    automated: true,
    logic: true,
    api: true,
    exploit: true,
    fp: true,
    retest: "Unlimited",
    support: "Security lead",
    report: "Board & audit‑ready",
    compliance: "Custom regulatory",
    tracking: true,
    sla: "Custom SLA",
    cert: true,
    monitoring: true,
  },
];

function Cell({ value }: { value: any }) {
  if (value === true)
    return <Check className="mx-auto h-5 w-5 text-green-500" />;
  if (value === false) return <X className="mx-auto h-5 w-5 text-red-500" />;
  return <span className="text-sm text-muted-foreground">{value}</span>;
}

export default function PricingComparison() {
  return (
    <section className="overflow-x-auto px-4 pt-8 pb-16">
      <div className="min-w-[900px] grid grid-cols-[240px_repeat(4,1fr)] border rounded-xl">
        <div className="bg-muted/40" />
        {plans.map((p) => (
          <div key={p.name} className="p-4 text-center border-l">
            <h2 className="text-lg font-semibold text-xl md:text-3xl">
              {p.name}
            </h2>
            <h2 className="text-green-400 text-xl md:text-3xl mt-1">
              {p.price}
            </h2>
          </div>
        ))}

        {features.map((f) => (
          <>
            <div
              key={f.key}
              className="p-4 text-sm font-medium bg-muted/30 border-t"
            >
              {f.label}
            </div>
            {plans.map((p) => (
              <div
                key={p.name + f.key}
                className="p-4 text-center border-t border-l"
              >
                <Cell value={(p as any)[f.key]} />
              </div>
            ))}
          </>
        ))}
      </div>

      {/* Mobile fallback */}
      <div className="md:hidden mt-12 space-y-6">
        {plans.map((p) => (
          <div key={p.name} className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="text-green-400 text-sm mb-4">{p.price}</p>
            <ul className="space-y-2 text-sm">
              {features.map((f) => (
                <li key={f.key} className="flex justify-between">
                  <span>{f.label}</span>
                  <span className="ml-4">
                    <Cell value={(p as any)[f.key]} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
