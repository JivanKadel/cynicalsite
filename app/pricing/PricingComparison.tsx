"use client";

const comparisonBasis = [
  "Engagement Type",
  "Application Covered",
  "TestingDepth",
  "Manual Testing",
  "Automated Scanning",
  "Business Logic Testing",
  "API & Auth Testing",
  "False Positive Elimination",
  "Retesting After Fix",
  "Security Advisory Support",
  "Reporting Standard",
  "Compliance Mapping",
  "Issue Tracking Integration",
  "SLA & Response Time",
  "Certification Letter",
  "Continuous Monitoring",
];

const plans = [
  {
    title: "Foundation",
    price: "$6k–$8k",
    bestFor: "MVPs and early-stage applications",
    whatYouGet:
      "OWASP Top 10 testing with clean, false-positive–free reporting",
    engagementType: "One-Time",
    applicationCovered: "1",
    testingDepth: "OWASP Top 10",
    manualTesting: "Limited",
    automatedScanning: "Yes",
    businessLogicTesting: "No",
    apiAndAuthTesting: "No",
    falsePositiveElimination: "Yes",
    retestingAfterFix: "No",
    securityAdvisorySupport: "No",
    reportingStandard: "Technical VAPT",
    complianceMapping: "No",
    issueTrackingIntegration: "No",
    SLAAndResponseTime: "No",
    certificationLetter: "No",
    continuousMonitoring: "No",
    cta: "Get Started",
    href: "/pentest?plan=foundation",
  },
  {
    title: "Growth",
    price: "$12k–$18k / yr",
    bestFor: "Growing production applications",
    whatYouGet:
      "Release-aligned security testing with limited logic and API coverage",
    engagementType: "Pre-Release / Quarterly",
    applicationCovered: "3",
    testingDepth: "OWASP + Logic",
    manualTesting: "Standard",
    automatedScanning: "Yes",
    businessLogicTesting: "Limited",
    apiAndAuthTesting: "Limited",
    falsePositiveElimination: "Yes",
    retestingAfterFix: "1 Cycle",
    securityAdvisorySupport: "Email Support",
    reportingStandard: "Dev + Mgmt Report",
    complianceMapping: "Basic",
    issueTrackingIntegration: "Optional",
    SLAAndResponseTime: "Standard",
    certificationLetter: "No",
    continuousMonitoring: "No",
    cta: "Get Started",
    href: "/pentest?plan=growth",
  },
  {
    title: "Advanced",
    price: "$25k–$40k / yr",
    bestFor: "Business-critical platforms",
    whatYouGet:
      "Deep manual testing, exploit validation, and compliance-ready reporting",
    engagementType: "Scheduled + Retesting",
    applicationCovered: "5",
    testingDepth: "Deep Logic + APIs",
    manualTesting: "Extensive",
    automatedScanning: "Yes",
    businessLogicTesting: "Yes",
    apiAndAuthTesting: "Yes",
    falsePositiveElimination: "Yes",
    retestingAfterFix: "Multiple Cycles",
    securityAdvisorySupport: "Dedicated Consultant",
    reportingStandard: "Exec + Compliance",
    complianceMapping: "SOC2 / ISO / GDPR",
    issueTrackingIntegration: "Included",
    SLAAndResponseTime: "Priority",
    certificationLetter: "Yes",
    continuousMonitoring: "Optional Add-On",
    cta: "Get Started",
    href: "/pentest?plan=advanced",
    mostPopular: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    bestFor: "Large and regulated organizations",
    whatYouGet: "Continuous security coverage with a dedicated security lead",
    engagementType: "Continuous",
    applicationCovered: "Unlimited",
    testingDepth: "Full Scope",
    manualTesting: "Ongoing",
    automatedScanning: "Yes",
    businessLogicTesting: "Yes",
    apiAndAuthTesting: "Yes",
    falsePositiveElimination: "Yes",
    retestingAfterFix: "Unlimited",
    securityAdvisorySupport: "Dedicated Security Lead",
    reportingStandard: "Board & Audit Ready",
    complianceMapping: "Custom Regulatory",
    issueTrackingIntegration: "Included",
    SLAAndResponseTime: "Custom SLA",
    certificationLetter: "Yes",
    continuousMonitoring: "Included",
    cta: "Contact Sales",
    href: "/contact",
    custom: true,
  },
];

export default function PricingPage() {
  return (
    <section className="px-4 md:px-8 py-16 space-y-12 rounded-3xl">
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-3xl text-sm">
          <thead>
            <tr>
              <th className="p-4 text-left font-semibold text-2xl">Features</th>
              {plans.map((plan) => (
                <th key={plan.title} className="p-4">
                  <div className="space-y-2">
                    <h2 className="text-lg font-bold">{plan.title}</h2>
                    <a
                      href={plan.href}
                      className={`inline-block mt-2 px-4 py-2 rounded-lg text-white ${
                        plan.custom
                          ? "bg-gray-700 hover:bg-gray-800"
                          : "bg-blue-600 hover:bg-blue-700"
                      } transition`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {comparisonBasis.map((basis) => (
              <tr key={basis} className="border-t border-border/60">
                <td className="p-4 font-medium text-foreground ">{basis}</td>
                {plans.map((plan) => {
                  const key =
                    basis
                      .replace(/\s+/g, "")
                      .replace("&", "And")
                      .replace("/", "")
                      .charAt(0)
                      .toLowerCase() +
                    basis
                      .replace(/\s+/g, "")
                      .replace("&", "And")
                      .replace("/", "")
                      .slice(1);

                  return (
                    <td
                      key={plan.title + basis}
                      className="p-3 text-center text-foreground/90"
                    >
                      {
                        (plan as Record<string, string | boolean | undefined>)[
                          key
                        ]
                      }
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
