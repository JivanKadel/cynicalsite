// "use client";

// import { Check, X } from "lucide-react";

// const features = [
//   { key: "idealFor", label: "Ideal For" },
//   { key: "engagement", label: "Engagement Type" },
//   { key: "apps", label: "Applications Covered" },
//   { key: "depth", label: "Testing Depth" },
//   { key: "manual", label: "Manual Testing" },
//   { key: "automated", label: "Automated Scanning" },
//   { key: "logic", label: "Business Logic Testing" },
//   { key: "api", label: "API & Auth Testing" },
//   { key: "exploit", label: "Exploit Validation" },
//   { key: "fp", label: "False Positive Elimination" },
//   { key: "retest", label: "Retesting After Fix" },
//   { key: "support", label: "Security Advisory Support" },
//   { key: "report", label: "Reporting" },
//   { key: "compliance", label: "Compliance Mapping" },
//   { key: "tracking", label: "Issue Tracking Integration" },
//   { key: "sla", label: "SLA & Response Time" },
//   { key: "cert", label: "Certification Letter" },
//   { key: "monitoring", label: "Continuous Monitoring" },
// ];

// const plans = [
//   {
//     name: "Foundation",
//     price: "$6k–$8k",
//     idealFor: "MVPs, early apps",
//     engagement: "One-time",
//     apps: "1",
//     depth: "OWASP Top 10",
//     manual: "Limited",
//     automated: true,
//     logic: false,
//     api: false,
//     exploit: false,
//     fp: true,
//     retest: false,
//     support: false,
//     report: "Technical VAPT",
//     compliance: false,
//     tracking: false,
//     sla: false,
//     cert: false,
//     monitoring: false,
//   },
//   {
//     name: "Growth",
//     price: "$12k–$18k / yr",
//     idealFor: "Growing production apps",
//     engagement: "Per release / Quarterly",
//     apps: "Up to 3",
//     depth: "OWASP + logic",
//     manual: "Standard",
//     automated: true,
//     logic: "Limited",
//     api: "Limited",
//     exploit: "Limited",
//     fp: true,
//     retest: "1 cycle",
//     support: "Email",
//     report: "Dev + Mgmt",
//     compliance: "Basic",
//     tracking: "Optional",
//     sla: "Standard",
//     cert: false,
//     monitoring: false,
//   },
//   {
//     name: "Advanced",
//     price: "$25k–$40k / yr",
//     idealFor: "Business‑critical platforms",
//     engagement: "Scheduled + retesting",
//     apps: "Up to 5",
//     depth: "Deep logic + APIs",
//     manual: "Extensive",
//     automated: true,
//     logic: true,
//     api: true,
//     exploit: true,
//     fp: true,
//     retest: "Multiple",
//     support: "Dedicated consultant",
//     report: "Exec + Compliance",
//     compliance: "SOC2 / ISO / GDPR",
//     tracking: true,
//     sla: "Priority",
//     cert: true,
//     monitoring: "Optional",
//   },
//   {
//     name: "Enterprise",
//     price: "$60k+ / yr",
//     idealFor: "Large & regulated orgs",
//     engagement: "Continuous",
//     apps: "Unlimited",
//     depth: "Full‑scope + architecture",
//     manual: "Extensive + ongoing",
//     automated: true,
//     logic: true,
//     api: true,
//     exploit: true,
//     fp: true,
//     retest: "Unlimited",
//     support: "Security lead",
//     report: "Board & audit‑ready",
//     compliance: "Custom regulatory",
//     tracking: true,
//     sla: "Custom SLA",
//     cert: true,
//     monitoring: true,
//   },
// ];

// function Cell({ value }: { value: any }) {
//   if (value === true)
//     return <Check className="mx-auto h-5 w-5 text-green-500" />;
//   if (value === false) return <X className="mx-auto h-5 w-5 text-red-500" />;
//   return <span className="text-sm text-muted-foreground">{value}</span>;
// }

// export default function PricingComparison() {
//   return (
//     <section className="overflow-x-auto px-4 pt-8 pb-16">
//       <div className="min-w-[900px] grid grid-cols-[240px_repeat(4,1fr)] border rounded-xl">
//         <div className="bg-muted/40" />
//         {plans.map((p) => (
//           <div key={p.name} className="p-4 text-center border-l">
//             <h2 className="text-lg font-semibold text-xl md:text-3xl">
//               {p.name}
//             </h2>
//             <h2 className="text-green-400 text-xl md:text-3xl mt-1">
//               {p.price}
//             </h2>
//           </div>
//         ))}

//         {features.map((f) => (
//           <>
//             <div
//               key={f.key}
//               className="p-4 text-sm font-medium bg-muted/30 border-t"
//             >
//               {f.label}
//             </div>
//             {plans.map((p) => (
//               <div
//                 key={p.name + f.key}
//                 className="p-4 text-center border-t border-l"
//               >
//                 <Cell value={(p as any)[f.key]} />
//               </div>
//             ))}
//           </>
//         ))}
//       </div>

//       {/* Mobile fallback */}
//       <div className="md:hidden mt-12 space-y-6">
//         {plans.map((p) => (
//           <div key={p.name} className="border rounded-lg p-4">
//             <h3 className="text-lg font-semibold">{p.name}</h3>
//             <p className="text-green-400 text-sm mb-4">{p.price}</p>
//             <ul className="space-y-2 text-sm">
//               {features.map((f) => (
//                 <li key={f.key} className="flex justify-between">
//                   <span>{f.label}</span>
//                   <span className="ml-4">
//                     <Cell value={(p as any)[f.key]} />
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// "use client";

// import { Check, X } from "lucide-react";

// const features = [
//   { key: "idealFor", label: "Ideal For" },
//   { key: "engagement", label: "Engagement Type" },
//   { key: "apps", label: "Applications Covered" },
//   { key: "depth", label: "Testing Depth" },
//   { key: "manual", label: "Manual Testing" },
//   { key: "automated", label: "Automated Scanning" },
//   { key: "logic", label: "Business Logic Testing" },
//   { key: "api", label: "API & Auth Testing" },
//   { key: "exploit", label: "Exploit Validation" },
//   { key: "fp", label: "False Positive Elimination" },
//   { key: "retest", label: "Retesting After Fix" },
//   { key: "support", label: "Security Advisory Support" },
//   { key: "report", label: "Reporting" },
//   { key: "compliance", label: "Compliance Mapping" },
//   { key: "tracking", label: "Issue Tracking Integration" },
//   { key: "sla", label: "SLA & Response Time" },
//   { key: "cert", label: "Certification Letter" },
//   { key: "monitoring", label: "Continuous Monitoring" },
// ];

// const plans = [
//   {
//     name: "Foundation",
//     bestFor: "MVPs, early-stage applications",
//     whatYouGet:
//       "Baseline security visibility with OWASP Top 10 coverage and false-positive–free reporting",
//     price: "$6k–$8k",
//     idealFor: "MVPs, early apps",
//     engagement: "One-time",
//     apps: "1",
//     depth: "OWASP Top 10",
//     manual: "Limited",
//     automated: true,
//     logic: false,
//     api: false,
//     exploit: false,
//     fp: true,
//     retest: false,
//     support: false,
//     report: "Technical VAPT",
//     compliance: false,
//     tracking: false,
//     sla: false,
//     cert: false,
//     monitoring: false,
//   },
//   {
//     name: "Growth",
//     bestFor: "Growing production applications",
//     whatYouGet:
//       "Recurring security assurance aligned to release cycles with limited logic and API testing",
//     price: "$12k–$18k / yr",
//     idealFor: "Growing production apps",
//     engagement: "Per release / Quarterly",
//     apps: "Up to 3",
//     depth: "OWASP + logic",
//     manual: "Standard",
//     automated: true,
//     logic: "Limited",
//     api: "Limited",
//     exploit: "Limited",
//     fp: true,
//     retest: "1 cycle",
//     support: "Email",
//     report: "Dev + Mgmt",
//     compliance: "Basic",
//     tracking: "Optional",
//     sla: "Standard",
//     cert: false,
//     monitoring: false,
//   },
//   {
//     name: "Advanced",
//     bestFor: "Business-critical platforms",
//     whatYouGet:
//       "Deep manual testing, exploit validation, compliance-ready reporting, and retesting cycles",
//     price: "$25k–$40k / yr",
//     idealFor: "Business‑critical platforms",
//     engagement: "Scheduled + retesting",
//     apps: "Up to 5",
//     depth: "Deep logic + APIs",
//     manual: "Extensive",
//     automated: true,
//     logic: true,
//     api: true,
//     exploit: true,
//     fp: true,
//     retest: "Multiple",
//     support: "Dedicated consultant",
//     report: "Exec + Compliance",
//     compliance: "SOC2 / ISO / GDPR",
//     tracking: true,
//     sla: "Priority",
//     cert: true,
//     monitoring: "Optional",
//   },
//   {
//     name: "Enterprise",
//     bestFor: "Large, regulated organizations",
//     whatYouGet:
//       "Continuous security coverage with dedicated security leadership and custom SLA",
//     price: "$60k+ / yr",
//     idealFor: "Large & regulated orgs",
//     engagement: "Continuous",
//     apps: "Unlimited",
//     depth: "Full‑scope + architecture",
//     manual: "Extensive + ongoing",
//     automated: true,
//     logic: true,
//     api: true,
//     exploit: true,
//     fp: true,
//     retest: "Unlimited",
//     support: "Security lead",
//     report: "Board & audit‑ready",
//     compliance: "Custom regulatory",
//     tracking: true,
//     sla: "Custom SLA",
//     cert: true,
//     monitoring: true,
//   },
// ];

// function Cell({ value }: { value: any }) {
//   if (value === true)
//     return <Check className="mx-auto h-5 w-5 text-green-500" />;
//   if (value === false) return <X className="mx-auto h-5 w-5 text-red-500" />;
//   return <span className="text-sm text-muted-foreground">{value}</span>;
// }

// export default function PricingComparison() {
//   return (
//     <section className="overflow-x-auto px-4 py-12">
//       <div className="min-w-[900px] grid grid-cols-[240px_repeat(4,1fr)] border rounded-xl">
//         <div className="bg-muted/40" />
//         {plans.map((p) => (
//           <div key={p.name} className="p-4 text-center border-l">
//             <h3 className="text-lg font-semibold">{p.name}</h3>
//             <p className="text-green-400 text-sm mt-1">{p.price}</p>
//           </div>
//         ))}

//         {features.map((f) => (
//           <>
//             <div
//               key={f.key}
//               className="p-4 text-sm font-medium bg-muted/30 border-t"
//             >
//               {f.label}
//             </div>
//             {plans.map((p) => (
//               <div
//                 key={p.name + f.key}
//                 className="p-4 text-center border-t border-l"
//               >
//                 <Cell value={(p as any)[f.key]} />
//               </div>
//             ))}
//           </>
//         ))}
//       </div>

//       {/* Mobile fallback */}
//       <div className="md:hidden mt-12 space-y-6">
//         {plans.map((p) => (
//           <div key={p.name} className="border rounded-lg p-4">
//             <h3 className="text-lg font-semibold">{p.name}</h3>
//             <p className="text-green-400 text-sm mb-4">{p.price}</p>
//             <ul className="space-y-2 text-sm">
//               {features.map((f) => (
//                 <li key={f.key} className="flex justify-between">
//                   <span>{f.label}</span>
//                   <span className="ml-4">
//                     <Cell value={(p as any)[f.key]} />
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import { Check, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Shared column definition to KEEP alignment
const COLS = "grid-cols-[260px_repeat(4,minmax(0,1fr))]";

const plans = [
  {
    title: "Foundation",
    price: "$6k–$8k",
    bestFor: "MVPs and early-stage applications",
    whatYouGet:
      "OWASP Top 10 testing with clean, false-positive–free reporting",
    cta: "Get Started",
    href: "/pentest?plan=foundation",
  },
  {
    title: "Growth",
    price: "$12k–$18k / yr",
    bestFor: "Growing production applications",
    whatYouGet:
      "Release-aligned security testing with limited logic and API coverage",
    cta: "Get Started",
    href: "/pentest?plan=growth",
  },
  {
    title: "Advanced",
    price: "$25k–$40k / yr",
    bestFor: "Business-critical platforms",
    whatYouGet:
      "Deep manual testing, exploit validation, and compliance-ready reporting",
    cta: "Get Started",
    href: "/pentest?plan=advanced",
    mostPopular: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    bestFor: "Large and regulated organizations",
    whatYouGet: "Continuous security coverage with a dedicated security lead",
    cta: "Contact Sales",
    href: "/contact",
    custom: true,
  },
];

const features = [
  {
    label: "Applications Covered",
    values: ["1", "Up to 3", "Up to 5", "Unlimited"],
  },
  {
    label: "Testing Depth",
    values: [
      "OWASP Top 10",
      "OWASP + Logic",
      "Deep Logic + APIs",
      "Full Scope",
    ],
  },
  {
    label: "Manual Testing",
    values: ["Limited", "Standard", "Extensive", "Ongoing"],
  },
  { label: "Automated Scanning", values: [true, true, true, true] },
  {
    label: "Retesting After Fix",
    values: [false, "1 Cycle", "Multiple", "Unlimited"],
  },
];

export default function PricingPage() {
  return (
    <section className="px-8 py-16 space-y-12">
      <div className={`grid ${COLS} mb-0`}>
        <div />
        {plans.map((p) => (
          <div
            key={p.title}
            className="relative border-l border-r border-t rounded-tl-lg rounded-tr-lg p-6 flex flex-col"
          >
            {p.mostPopular && (
              <div className="absolute top-0 right-0 rounded-tr-lg rounded-bl-lg text-white bg-blue mb-2 p-1 text-sm font-medium">
                Most Popular
              </div>
            )}

            <h2 className="text-3xl font-semibold mb-2">{p.title}</h2>
            <p className="text-2xl text-green-400 font-bold mb-4">{p.price}</p>

            <div className="flex-1">
              <h2 className="text-xl text-foreground/80">Best For</h2>
              <p className="text-muted-foreground mb-4">{p.bestFor}</p>

              <h2 className="text-xl text-foreground/80">What You Get</h2>
              <p className="text-muted-foreground">{p.whatYouGet}</p>
            </div>

            <Link href={p.href} className="mt-6">
              <Button className="w-full py-6">{p.cta}</Button>
            </Link>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto">
        <div
          className={`grid ${COLS} border rounded-tl-xl rounded-bl rounded-br`}
        >
          <div />
          {plans.map((p) => (
            <div
              key={p.title}
              className="p-4 text-center font-semibold border-l"
            >
              {p.title}
            </div>
          ))}

          {features.map((f) => (
            <>
              <div className="p-4 bg-muted/40 text-sm font-medium border-t">
                {f.label}
              </div>
              {f.values.map((v, i) => (
                <div
                  key={f.label + i}
                  className="p-4 text-center border-t border-l"
                >
                  {v === true && <Check className="mx-auto text-green-500" />}
                  {v === false && <X className="mx-auto text-red-500" />}
                  {typeof v === "string" && (
                    <span className="text-sm text-muted-foreground">{v}</span>
                  )}
                </div>
              ))}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
