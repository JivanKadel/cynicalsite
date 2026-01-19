import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Faqs, pricingData } from "@/data/pricing.data";
import { Check, CircleCheckBig, Lock, X } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-350 relative z-10 pt-4 md:pt-6 pb-8">
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
      <section
        role="region"
        aria-labelledby="pricing-heading"
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 mx-8"
      >
        {pricingData.map((card) => (
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
                  <h2 className="mb-1 text-primary-foreground/90">Best For</h2>
                  <p className="mb-4 text-muted-foreground">{card.bestFor}</p>
                  <h2 className="mb-1 text-primary-foreground/90">
                    What You Get
                  </h2>
                  <p className="mb-4 text-muted-foreground">
                    {card.whatYouGet}
                  </p>
                </div>
              </div>
              <div className="py-4">
                {card.custom ? (
                  <Link href="/contact">
                    <Button className="w-full py-6 text-primary-foreground">
                      Contact Sales
                    </Button>
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
                      <Lock className="text-foreground" />
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
      </section>

      <section role="region" aria-labelledby="FAQ section" className="py-16">
        <Card className="max-w-4xl mx-auto border-none">
          <CardContent>
            <h2 className="py-4 lg:py-8 text-2xl md:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-2">
              {Faqs.map((faq) => (
                <Accordion
                  key={faq.question}
                  type="single"
                  collapsible
                  className="border border-border/30 rounded-md px-4 py-2"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="hover:no-underline md:text-lg text-foreground/90">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/70 text-base pt-2 border-t border-border/50">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
