import { Button } from "@/components/ui/button";
import { Check, CircleCheckBig, Lock } from "lucide-react";
import Link from "next/link";

const cardData = [
  {
    title: "Plus",
    amount: 75000,
    bestFor:
      "Lightweight applications with few interconnected features, a modest set of CRUD resources, simple workflows and low integration complexity.",
    whatYouGet:
      "Comprehensive security assessment of your web applications, identifying vulnerabilities and providing actionable insights to enhance your security posture.",
    depthOfTest: "Provides the depth of a 2 week manual penetration test.",
    features: [
      "Up to 5 web applications",
      "Monthly vulnerability assessments",
      "Expert-level pentest on the #1 AI engine in the world*",
      "Deploy on-demand",
      "Audit-ready report within 5 days",
      "Instant re-testing with automated verification",
      "Frictionless authentication testing (2FA, Magic Link, Email)",
      "Detailed proof-of-concept exploits",
      "Actionable remediation guidance",
    ],
    hardness: "Medium",
    complianceReady: true,
  },
  {
    title: "Premium",
    amount: 150000,
    mostPopular: true,
    bestFor:
      "An application or platform with multiple functional modules, integrations, and multi-step workflows. These applications have deeper access control patterns and data models.",
    whatYouGet:
      " Comprehensive compliance ready report that meets SOC 2, ISO27001, HIPAA, GDPR, 40+ compliance frameworks.",
    depthOfTest: "Provides the depth of a 4 week manual penetration test.",
    features: [
      "Up to 15 web applications",
      "Bi-weekly vulnerability assessments",
      "Expert-level pentest on the #1 AI engine in the world*",
      "Deploy on-demand",
      "Audit-ready report within 5 days",
      "Instant re-testing with automated verification",
      "Frictionless authentication testing (2FA, Magic Link, Email)",
      "Detailed proof-of-concept exploits",
      "Actionable remediation guidance",
      "Blackbox, Whitebox, or Greybox",
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
      "Continuous access to the Cynical platform",
      "Multi-member access",
      "Shared assessment knowledge",
      "Realtime streaming of findings",
      "Reasoning trace on every Cynical agent",
      "Vulnerability coverage map",
      "Human directed operatives",
      "SSO",
      "Early access to new covered vulnerabilities",
      "Request and response details",
      "Realtime streaming of agent activity",
      "Testing for specific vulnerabilities",
      "Extensive trace information on every endpoint",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="container mx-auto relative z-10 pt-4 md:pt-6 pb-8">
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 max-w-7xl mx-auto">
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
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-blue font-semibold mb-2 py-2 border-b-2 border-b-muted-foreground/30">
                  {card.title}
                </h2>
                {card.custom ? (
                  <p className="text-xl md:text-2xl font-bold mb-4">
                    Request a Quote
                  </p>
                ) : (
                  <p className="text-xl md:text-2xl font-bold mb-4">
                    Rs. {card.amount}
                    <span className="text-muted-foreground text-sm font-light">
                      /per test
                    </span>
                  </p>
                )}
              </div>
              <div className="min-h-93 flex flex-col">
                <div className="flex-1">
                  <h2 className="mb-1 text-foreground/90">Best For</h2>
                  <p className="mb-4 text-muted-foreground">{card.bestFor}</p>
                  <h2 className="mb-1 text-foreground/90">What You Get</h2>
                  <p className="mb-4 text-muted-foreground">
                    {card.whatYouGet}
                  </p>
                </div>
                {card.depthOfTest && (
                  <div>
                    <h2 className="mb-1 text-foreground/90">Depth of Test</h2>
                    <p className="mb-4 text-muted-foreground">
                      {card.depthOfTest}
                    </p>
                  </div>
                )}
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
                    <h2 className="text-blue text-xl md:text-2xl">
                      Advanced Features (All Premium Features included)
                    </h2>
                  ) : (
                    <h2 className="text-blue text-xl md:text-2xl">
                      Key Features
                    </h2>
                  )}
                  <ul className="mb-4 list-none list-inside flex flex-col gap-3 mt-4">
                    {card.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-1 text-muted-foreground"
                      >
                        <Check className="text-green-500 h-5 w-5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
