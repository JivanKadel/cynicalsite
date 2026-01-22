import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function VisionPage() {
  return (
    <div className="container mx-auto px-4 space-y-20 max-w-6xl">
      <section className="text-center space-y-6 pt-8">
        <div className="mb-8">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wide uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
            Corporate Vision
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          <span className="bg-clip-text text-transparent bg-linear-to-r from-foreground via-foreground/90 to-foreground/80">
            Cynical Technology
          </span>
        </h1>

        <div className="max-w-3xl mx-auto mt-8">
          <p className="text-xl md:text-2xl font-medium text-muted-foreground leading-relaxed border-t border-b border-border py-6">
            Redefining trust and resilience in the digital age through
            uncompromising security and intelligent innovation.
          </p>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            The Digital Challenges
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Eroding Digital Trust",
              description:
                "Rising cyber threats undermine confidence in digital ecosystems and partnerships.",
            },
            {
              title: "Compliance Complexity",
              description:
                "Ever-evolving regulatory requirements that stifle business velocity and innovation.",
            },
            {
              title: "Fragmented Security",
              description:
                "Disjointed, manual security reviews consuming excessive resources and time.",
            },
            {
              title: "Risk-Averse Innovation",
              description:
                "Enterprises paralyzed by security concerns, missing digital transformation opportunities.",
            },
          ].map((problem, i) => (
            <Card
              key={i}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">{i + 1}</span>
                  </div>
                  <CardTitle className="text-lg font-semibold">
                    {problem.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-transparent to-primary/5 rounded-3xl"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
          <div className="bg-card/70 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-xl md:text-2xl leading-relaxed font-medium">
              To accelerate global business growth and innovation by
              <span className="text-primary font-semibold"> simplifying </span>
              and
              <span className="text-primary font-semibold"> securing </span>
              the digital journey through intelligent, integrated solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Our Strategic Approach
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Integrated solutions designed to transform security from barrier to
            enabler
          </p>
        </div>

        <div className="space-y-6">
          {[
            {
              title: "Integrated Cyber Assurance",
              description:
                "Unified platform combining AI-driven analytics, automated monitoring, and expert oversight for comprehensive protection.",
              highlight: true,
            },
            {
              title: "Frictionless Compliance",
              description:
                "Automated compliance workflows that reduce review cycles by 70% while maintaining rigorous standards.",
              highlight: false,
            },
            {
              title: "Trusted Partnership Enablement",
              description:
                "Enterprise-grade frameworks that facilitate secure collaboration between organizations at scale.",
              highlight: false,
            },
            {
              title: "Scalable Security Architecture",
              description:
                "Modular solutions engineered for both agile startups and global enterprises with evolving needs.",
              highlight: false,
            },
          ].map((solution, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row items-start md:items-center gap-6 p-6 rounded-2xl border transition-all duration-300 ${
                solution.highlight
                  ? "bg-primary/5 border-primary/30 shadow-md"
                  : "bg-card/30 border-border hover:bg-card/50"
              }`}
            >
              <div className="shrink-0">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    solution.highlight
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-muted-foreground">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16">
        <div className="relative">
          <div className="absolute -inset-1 bg-linear-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-50"></div>
          <div className="relative bg-linear-to-br from-background to-card border border-primary/20 rounded-3xl p-10 md:p-16 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/5 rounded-full translate-y-20 -translate-x-20"></div>

            <div className="relative text-center space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Our Vision
                </h2>
                <div className="w-32 h-0.5 bg-linear-to-r from-transparent via-primary to-transparent mx-auto"></div>
              </div>

              <blockquote className="max-w-3xl mx-auto">
                <p className="text-2xl md:text-3xl italic font-medium leading-relaxed text-foreground/90">
                  A world where businesses innovate fearlessly, partnerships
                  thrive seamlessly, and security serves as the fundamental
                  catalyst for progress, not its barrier.
                </p>
              </blockquote>

              <div className="pt-8 border-t border-border/50">
                <p className="text-lg font-semibold text-primary">
                  Building the Future of Trust
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
