import { ProductCard } from "./ProductCard";

const Products = () => {
  const products = [
    {
      icon: "/products/bugv_logo.png",
      name: "Bugv",
      tagline: "Offensive Security Network",
      description:
        "500+ vetted hackers testing your systems around the clock. Not automated scanners—actual adversaries hunting for the flaws your tools miss.",
      features: [
        "Managed vulnerability disclosure",
        "Exploit-verified findings only",
        "4-hour SLA on critical reports",
      ],
      stats: { value: "47", label: "Avg criticals per engagement" },
      cta: "See Sample Findings",
    },
    {
      icon: "/products/vigile_logo.png",
      name: "Vigile.AI",
      tagline: "Attack Surface Reconnaissance",
      description:
        "See your infrastructure the way attackers see it. Continuous discovery of shadow IT, leaked credentials, and exposed services across your entire digital footprint.",
      features: [
        "Real-time asset discovery",
        "Credential leak monitoring",
        "Third-party risk scoring",
      ],
      stats: { value: "12K", label: "Avg assets discovered" },
      cta: "Run Free Exposure Scan",
    },
    {
      icon: "logo.svg",
      name: "Falcon",
      tagline: "Continuous Security Monitoring",
      description:
        "Know when your defenses fail. Agentless monitoring catches configuration drift, certificate expirations, and security header regressions before attackers exploit them.",
      features: [
        "Zero-install deployment",
        "SSL/TLS chain validation",
        "Security header monitoring",
      ],
      stats: { value: "<4h", label: "Mean time to detect" },
      cta: "Start Free Trial",
    },
  ];

  return (
    <section id="products" className="pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-secondary/50 via-transparent to-transparent" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-3xl space-y-8 mx-auto mb-20">
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-widest mb-6 px-4 py-2 rounded-full border border-border/50 bg-secondary/50">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Products
          </span>
          <h2 className="text-2xl sm:text-5xl md:text-7xl font-bold">
            Offense-first platforms.
            <span className="block gradient-text-accent">
              Defense-grade results.
            </span>
          </h2>
          <p className="text-lg sm:text-xl font-extralight text-muted-foreground max-w-2xl mx-auto">
            Built by the same people who would be breaking in. Our platforms
            operationalize attacker tradecraft into continuous, scalable
            security testing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              tagline={product.tagline}
              description={product.description}
              icon={product.icon}
              stats={product.stats}
              features={product.features}
              cta={product.cta}
            />
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-2xl border border-border/30 bg-secondary/30">
          {[
            { value: "0", label: "Client breaches on our watch" },
            { value: "2.4M", label: "Vulnerabilities discovered" },
            { value: "<4h", label: "Critical finding triage" },
            { value: "24/7", label: "Active threat monitoring" },
          ].map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <p className="text-3xl lg:text-4xl font-bold mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
