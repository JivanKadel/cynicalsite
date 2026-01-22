import SolutionCard from "./SolutionCard";
import { iconColors } from "@/lib/utils";
import { capabilities, solutions } from "@/data/solutions.data";
import Capability from "./Capability";

export default function Solutions() {
  return (
    <section id="solutions" className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-3xl space-y-8 mx-auto mb-20">
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-widest mb-6 px-4 py-2 rounded-full border border-border/50 bg-secondary/50">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Services
          </span>
          <h2 className="text-2xl sm:text-5xl md:text-7xl font-bold text-foreground">
            We break in.
            <span className="block  -accent">You fix the gaps.</span>
          </h2>
          <p className="text-lg sm:text-xl font-extralight text-muted-foreground max-w-2xl mx-auto">
            Every engagement is scoped to your threat model. We don&apos;t run
            generic scans—we simulate the specific adversaries targeting your
            industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.title}
              href={solution.href}
              Icon={solution.icon}
              title={solution.title}
              description={solution.description}
              features={solution.features}
              index={index}
              gradient={solution.gradient}
              iconColor={iconColors[index % iconColors.length].iconColor}
            />
          ))}
        </div>

        <div className="rounded-2xl border border-border/30 bg-secondary/20 p-8 lg:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-5xl font-bold mb-4 text-foreground">
              Technical Capabilities
            </h3>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              From source code to network perimeter—we test every layer
              attackers target.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
            {capabilities.map((capability, index) => (
              <Capability
                key={capability.text}
                capability={capability}
                index={index}
                gradient={
                  iconColors[index % iconColors.length].gradient ??
                  "from-violet-500/20 to-blue-500/10"
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
