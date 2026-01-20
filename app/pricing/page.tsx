import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Faqs } from "@/data/pricing.data";

import PricingComparison from "./PricingComparison";

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-350 relative z-10 pt-4 md:pt-6 pb-8">
      <div className="max-w-5xl mx-auto text-center space-y-8 py-16">
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

      <PricingComparison />

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
