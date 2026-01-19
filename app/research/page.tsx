import { ArrowRight, NotebookPen } from "lucide-react";
import PageCTA from "@/components/products/PageCTA";
import Link from "next/link";
import { researchItems } from "@/data/research.data";
import ResearchCard from "./ResearchCard";
import { iconColors } from "@/lib/utils";

export default function ResearchPage() {
  return (
    <div>
      <section className="pt-6 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8  ">
              <Link
                href="/"
                className="hover:text-primary-foreground transition-colors"
              >
                Homes
              </Link>
              <span>/</span>
              <Link
                href="/#research"
                className="hover:text-primary-foreground transition-colors"
              >
                Research
              </Link>
              <span>/</span>
              <span className="text-primary-foreground">All Research</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8">
              <NotebookPen className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm font-medium">Security Research</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 text-balance">
              Frontier Security
              <span className="block text-foreground">Research</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-10   stagger-3 leading-relaxed">
              Our team continuously discovers and responsibly discloses
              vulnerabilities to make the digital ecosystem safer for everyone.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-foreground">
                47
              </div>
              <div className="text-muted-foreground mt-1">CVEs Published</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-foreground">
                $2.3M
              </div>
              <div className="text-muted-foreground mt-1">
                Bug Bounties Earned
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-foreground">
                12
              </div>
              <div className="text-muted-foreground mt-1">Research Papers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-foreground">
                200+
              </div>
              <div className="text-muted-foreground mt-1">
                Responsible Disclosures
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6">
            {researchItems.map((item, index) => (
              <ResearchCard
                key={item.title}
                researchItem={item}
                index={index}
                iconColor={iconColors[index % iconColors.length].iconColor}
                gradient={iconColors[index % iconColors.length].gradient}
                iconBg={iconColors[index % iconColors.length].iconBg}
              />
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        badge="47 CVEs published to date"
        headline="Responsible"
        highlightedText="Disclosure Program"
        description="Found a vulnerability? We work with researchers worldwide to responsibly disclose security issues and protect users."
        primaryButtonText="Report a Vulnerability"
        primaryButtonLink="/contact"
        secondaryButtonText="View Disclosure Policy"
        secondaryButtonLink="/research"
        showBenefits={false}
      />
    </div>
  );
}
