import { Card, CardContent } from "@/components/ui/card";
import { Faqs } from "@/data/pricing.data";

import FaqComponent from "./FaqComponent";
import { Check } from "lucide-react";
import { trustedByClipped } from "@/data/trustedby.data";

import Link from "next/link";
import Image from "next/image";
import PricingForm from "./PricingForm";

export default function PricingPage() {
  return (
    <main className="mx-auto py-12 md:px-16 lg:px-32 relative z-10 pt-4 md:pt-6 pb-8">
      <section
        role="region"
        aria-labelledby="Pricing Details Section"
        className="grid grid-cols-1 md:grid-cols-2 gap-12 p-6 md:p-12"
      >
        {/* Left Section */}
        <section>
          <h1 className="text-[2.7rem] font-aeonik font-bold leading-none md:leading-tight xl:leading-20 lg:text-6xl xl:text-7xl -tracking-[1%] text-balance">
            Plans and Pricing
          </h1>
          <p className="font-sans text-base text-foreground/70 font-normal lg:text-lg mt-4">
            Cynical offers security solutions built for every stage of growth.
            From agile startups to global enterprises. With full access, you can
            strengthen and safeguard your web applications continuously, without
            compromise.
          </p>

          <div className="mt-8 space-y-3 text-foreground/80">
            <h2 className="text-xl font-semibold text-foreground/90">
              Why Choose Cynical?
            </h2>
            <p className="flex gap-2 items-center">
              <Check className="text-green-500" /> Detect threats before they
              impact your business
            </p>
            <p className="flex gap-2 items-center">
              <Check className="text-green-500" /> Automate protection across
              every environment
            </p>
            <p className="flex gap-2 items-center">
              <Check className="text-green-500" /> Build resilience with
              enterprise-grade security
            </p>
          </div>
        </section>

        <PricingForm />
      </section>

      <div className="mt-16 mx-auto flex flex-col justify-center">
        <h2 className="text-lg text-center font-semibold tracking-wider text-muted-foreground">
          JOIN MANY COMPANIES THAT TRUST CYNICAL
        </h2>
        <div className="flex justify-center flex-wrap gap-4 mt-8">
          {trustedByClipped.map((brand) => {
            return (
              <Link
                key={brand.name}
                href={brand.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-2"
              >
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={120}
                  height={80}
                  className={`object-contain hover:scale-105 transition-transform dark:grayscale-0 dark:hover:grayscale-0 dark:brightness-0 dark:invert  opacity-90 ${
                    brand.name.toLowerCase() === "worldlink" ||
                    brand.name.toLowerCase() == "worldbank"
                      ? ""
                      : "dark:hover:invert-0 dark:hover:brightness-100"
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </div>

      <section
        role="region"
        aria-labelledby="FAQ section"
        className="px-4 py-16"
      >
        <Card className="max-w-4xl mx-auto border-none">
          <CardContent>
            <h2 className="py-4 lg:py-8 text-2xl md:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-2">
              {Faqs.map((faq) => (
                <FaqComponent
                  question={faq.question}
                  answer={faq.answer}
                  key={faq.question}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
