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
    <section className="px-8 py-16 space-y-12">
      <div className="overflow-x-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 align-sub">
          <div>
            {comparisonBasis.map((basis) => (
              <p key={basis}>{basis}</p>
            ))}
          </div>
          {plans.map((plan) => {
            return (
              <div key={plan.title}>
                <div>
                  <h1>{plan.title}</h1>
                  <div>
                    Best For:
                    <h2>{plan.bestFor}</h2>
                  </div>
                  <div>
                    What You Get:
                    <h2>{plan.whatYouGet}</h2>
                  </div>
                </div>
                <div>
                  <p>{plan.engagementType}</p>
                  <p>{plan.applicationCovered}</p>
                  <p>{plan.testingDepth}</p>
                  <p>{plan.manualTesting}</p>
                  <p>{plan.automatedScanning}</p>
                  <p>{plan.businessLogicTesting}</p>
                  <p>{plan.apiAndAuthTesting}</p>
                  <p>{plan.falsePositiveElimination}</p>
                  <p>{plan.retestingAfterFix}</p>
                  <p>{plan.securityAdvisorySupport}</p>
                  <p>{plan.reportingStandard}</p>
                  <p>{plan.complianceMapping}</p>
                  <p>{plan.issueTrackingIntegration}</p>
                  <p>{plan.SLAAndResponseTime}</p>
                  <p>{plan.certificationLetter}</p>
                  <p>{plan.continuousMonitoring}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
