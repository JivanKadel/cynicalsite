import { Button } from "@/components/ui/button";
import { Check, CircleCheckBig, Lock, X } from "lucide-react";
import Link from "next/link";

const cardData = [
  {
    title: "Starter",
    amount: 5000,
    bestFor:
      "Lightweight applications with few interconnected features, a modest set of CRUD resources, simple workflows and low integration complexity.",
    whatYouGet:
      "Comprehensive security assessment of your web applications, identifying vulnerabilities and providing actionable insights to enhance your security posture.",
    features: [
      "Hybrid Testing Approach (Automated + Manual Exploitation)",
      "Comprehensive VAPT Report with Proof of Concept",
      "Dedicated Project Manager & Technical Support",
      "Secure Issue Tracking Portal (e.g., GitLab Access)",
      "1 Web or Mobile Application",
      "1 Issue Tracking",
    ],
    unavailableFeatures: [
      "Advanced Vulnerability Analysis",
      "Continuous Security Monitoring",
      "Retesting & Patch Validation",
      "Official VAPT Certificate of Completion",
    ],
    hardness: "Medium",
    complianceReady: true,
  },
  {
    title: "Essential",
    amount: 9000,
    bestFor:
      "An application or platform with multiple functional modules, integrations, and multi-step workflows. These applications have deeper access control patterns and data models.",
    whatYouGet:
      " Comprehensive compliance ready report that meets SOC 2, ISO27001, HIPAA, GDPR, 40+ compliance frameworks.",
    features: [
      "Hybrid Testing Approach (Automated + Manual Exploitation)",
      "Comprehensive VAPT Report with Proof of Concept",
      "Dedicated Project Manager & Technical Support",
      "Secure Issue Tracking Portal (e.g., GitLab Access)",
      "3 Web or Mobile Applications",
      "3 Issue Tracking",
    ],
    unavailableFeatures: [
      "Advanced Vulnerability Analysis",
      "Continuous Security Monitoring",
      "Realtime Streaming of Findings",
      "Official VAPT Certificate of Completion",
    ],
    hardness: "Hard",
    complianceReady: true,
  },
  {
    title: "Premium",
    amount: 15000,
    mostPopular: true,
    bestFor:
      "An application or platform with multiple functional modules, integrations, and multi-step workflows. These applications have deeper access control patterns and data models.",
    whatYouGet:
      " Comprehensive compliance ready report that meets SOC 2, ISO27001, HIPAA, GDPR, 40+ compliance frameworks.",

    features: [
      "Hybrid Testing Approach (Automated + Manual Exploitation)",
      "Comprehensive VAPT Report with Proof of Concept",
      "Dedicated Project Manager & Technical Support",
      "Secure Issue Tracking Portal (e.g., GitLab Access)",
      "5 Web or Mobile Applications",
      "Retesting & Patch Validation",
      "5 Issue Tracking",
      "Advanced Vulnerability Analysis",
      "Retesting & Patch Validation",
      "Official VAPT Certificate of Completion",
    ],

    hardness: "Hard",
    complianceReady: true,
  },
  {
    title: "Enterprise",
    custom: true,
    bestFor:
      " A mature application portfolio with broad functionality, such as a multimodule SaaS product supporting complex workflows, admin tools, and extensive resource relationships.",
    whatYouGet:
      "Comprehensive compliance ready reports, plus continuous security hardening for all feature releases.",
    features: [
      "Hybrid Testing Approach (Automated + Manual Exploitation)",
      "Comprehensive VAPT Report with Proof of Concept",
      "Dedicated Project Manager & Technical Support",
      "Secure Issue Tracking Portal (e.g., GitLab Access)",
      "Unlimited Web or Mobile Applications",
      "Retesting & Patch Validation",
      "Unlimited Issue Tracking",
      "Advanced Vulnerability Analysis",
      "Continuous Security Monitoring",
      "Retesting & Patch Validation",
      "Official VAPT Certificate of Completion",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="mx-4 relative z-10 pt-4 md:pt-6 pb-8">
      <div className="max-w-5xl mx-auto text-center space-y-8 py-24">
        <h1 className="text-[2.7rem] font-aeonik font-bold leading-none md:leading-tight xl:leading-[80px] lg:text-6xl xl:text-7xl -tracking-[1%] text-balance">
          Plans and Pricing
        </h1>
        <p className="my-6 font-sans text-base text-foreground/70 sm:px-0 font-normal lg:my-[22px] lg:text-lg  mx-auto text-balance text-center">
          Cynical offers security solutions built for every stage of growth.
          From agile startups to global enterprises. With full access, you can
          strengthen and safeguard your web applications continuously, without
          compromise.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 mx-auto">
        {cardData.map((card) => (
          <div
            key={card.title}
            className="relative border-2 border-border/50 hover:border-blue rounded-lg p-6 flex flex-col justify-between transition-all duration-600"
          >
            {card.mostPopular ? (
              <div className="absolute top-0 right-0 bg-blue text-white px-4 py-1 rounded-tr-lg rounded-bl-lg text-sm font-medium">
                Most Popular
              </div>
            ) : (
              ""
            )}
            <div className="flex-1 flex flex-col w-full">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary font-semibold mb-2 py-2 border-b-2 border-b-muted-foreground/30">
                  {card.title}
                </h2>
                {card.custom ? (
                  <p className="text-xl text-green-400 md:text-2xl font-bold mb-4">
                    Request a Quote
                  </p>
                ) : (
                  <p className="text-xl text-green-400 md:text-2xl font-bold mb-4">
                    ${card.amount}
                    <span className="text-muted-foreground text-sm font-light">
                      /per test
                    </span>
                  </p>
                )}
              </div>
              <div className="lg:min-h-88 flex flex-col">
                <div className="flex-1">
                  <h2 className="mb-1 text-foreground/90">Best For</h2>
                  <p className="mb-4 text-muted-foreground">{card.bestFor}</p>
                  <h2 className="mb-1 text-foreground/90">What You Get</h2>
                  <p className="mb-4 text-muted-foreground">
                    {card.whatYouGet}
                  </p>
                </div>
              </div>
              <div className="py-4">
                {card.custom ? (
                  <Link href="/contact">
                    <Button className="w-full py-6">Contact Sales</Button>
                  </Link>
                ) : (
                  <Link href={`/pentest?plan=${card.title.toLowerCase()}`}>
                    <Button className="w-full py-6">Get Started</Button>
                  </Link>
                )}
              </div>

              <div className="flex-1 flex flex-col gap-4 justify-between mt-4 py-4 border-t-2 border-muted-foreground/30">
                <div>
                  {card.custom ? (
                    <h2 className="text-primary text-xl md:text-2xl">
                      All Features
                    </h2>
                  ) : (
                    <h2 className="text-primary text-xl md:text-2xl">
                      Key Features
                    </h2>
                  )}
                  <div className="mb-4 flex flex-col gap-3 mt-4">
                    {card.features.map((feature) => (
                      <div key={feature}>
                        <div className="flex gap-1 justify-start align-super">
                          <div className="self-start">
                            <Check className="text-green-500 h-5! w-5!" />
                          </div>
                          <div className="text-muted-foreground">{feature}</div>
                        </div>
                      </div>
                    ))}
                    {card.unavailableFeatures &&
                      card.unavailableFeatures.map((feature) => (
                        <div key={feature}>
                          <div className="flex gap-1 justify-start align-super">
                            <div className="self-start">
                              <X className="text-red-500 h-5! w-5!" />
                            </div>
                            <div className="text-muted-foreground">
                              {feature}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {card.hardness ? (
                  <div className="mt-auto flex flex-col gap-4">
                    <h2 className="flex gap-2">
                      <Lock className="text-blue" />
                      Security Hardness: <span>{card.hardness}</span>
                    </h2>
                    <h2 className="flex gap-2">
                      <CircleCheckBig className="text-green-500" />
                      Compliance Readiness
                    </h2>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
