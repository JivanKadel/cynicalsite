import Link from "next/link";
import { ProductCard } from "./ProductCard";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const Products = () => {
  const products = [
    {
      icon: "/products/bugv.png",
      title: "CROWDSOURCED SECURITY",
      dashboardImage: "/bugv_product.png",
      name: "Bugv",
      tagline: "Offensive Security Network of Security Researchers",
      description:
        "500+ vetted hackers testing your systems around the clock. Not automated scanners—actual adversaries hunting for the flaws your tools miss.",
      features: [
        "Managed vulnerability disclosure",
        "Exploit-verified findings only",
        "Pay for results, not noise",
      ],
      stats: { value: "47", label: "Avg critical per engagement" },
      cta: "Learn More",
      gradient: "from-violet-500/20 to-blue-500/10",
      href: "/products/bugv",
    },
    {
      icon: "/products/vigile_logo.png",
      lightIcon: "/products/vigile_light_logo.png",
      title: "THREAT INTELLIGENCE",
      dashboardImage: "/products/vigile_1.png",
      name: "Vigile.AI",
      tagline: "Continuous Breaches and Malware Monitoring",
      description:
        "See your infrastructure the way attackers see it. Continuous discovery of shadow IT, leaked credentials, and exposed services across your entire digital footprint.",
      features: [
        "Breach and malware scanning",
        "Credential leak monitoring",
        "Third-party risk scoring",
      ],
      stats: { value: "12K", label: "Avg assets discovered" },
      cta: "Learn More",
      gradient: "from-emerald-500/20 to-cyan-500/10",
      href: "/products/vigile",
    },
  ];

  return (
    <section
      id="products"
      className="pt-20 pb-10 relative overflow-hidden mx-auto"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-secondary/50 via-transparent to-transparent" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-5xl space-y-8 mx-auto mb-20">
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-widest mb-6 px-4 py-2 rounded-full border border-border/50 bg-secondary/50">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Products
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground">
            Offense-first platforms.
            <span className="block">Defense-grade results.</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Built by the same people who would be breaking in. Our platforms
            operationalize attacker tradecraft into continuous, scalable
            security testing.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              title={product.title}
              name={product.name}
              tagline={product.tagline}
              description={product.description}
              icon={product.icon}
              dashboardImage={product.dashboardImage}
              stats={product.stats}
              features={product.features}
              cta={product.cta}
              gradient={product.gradient}
              href={product.href}
            />
          ))}
        </div> */}
        {/* <div className="grid grid-cols-1 gap-2">
          {products.map((product) => (
            <Link
              key={product.title}
              href={product.href || "#"}
              className="group h-80 sm:h-70 md:h-105 rounded-2xl bg-card opacity-90 shadow-2xl hover:border-border/80 transition-all duration-300"
            >
              <div className="relative h-full p-2 lg:p-4 rounded-xl rounded-tr-[48px] overflow-hidden transition-all duration-300">
                <div className="flex justify-between items-center">
                  <h2 className="flex gap-1 text-green-900 dark:text-green-500 text-sm tracking-widest">
                    {product.title}
                  </h2>
                  <div className="border border-foreground/20 p-2 rounded-full">
                    <MoveUpRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="mt-2 flex flex-col h-full text-foreground relative z-10">
                  <div className="mb-1">
                    <h2 className="md:text-[1.625rem] text-3.5xl leading-tight md:leading-8 mb-2 font-aeonik z-10 relative text-pretty max-w-96">
                      {product.name}
                    </h2>
                    <p className="z-10 mb-8 leading-6 md:mb-18">
                      {product.tagline}
                    </p>
                  </div>
                </div>

                <div className="absolute -bottom-4 sm:bottom-4 right-4 left-4 h-[60%]">
                  <div className="relative w-full h-full rounded-lg p-0 m-0">
                    <Image
                      src={product.dashboardImage}
                      alt={product.name}
                      width={1080}
                      height={490}
                      className="object-contain rounded-lg border-2 border-border"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div> */}

        <div className="grid grid-cols-1 gap-6">
          {products.map((product) => (
            <Link
              key={product.title}
              href={product.href || "#"}
              className="group rounded-2xl bg-card opacity-90 shadow-2xl hover:border-border/80 transition-all duration-300"
            >
              <div className="grid grid-cols-1 xl:grid-cols-10 gap-8 h-full rounded-xl overflow-hidden transition-all duration-300">
                {/* Text content */}
                <div className="flex flex-col justify-center order-1 xl:order-1 xl:col-span-3 p-6 lg:p-8">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="flex gap-1 text-green-900 dark:text-green-500 font-light text-sm tracking-widest mb-2">
                      {product.title}
                    </h2>
                  </div>

                  <div className="my-2">
                    {product.lightIcon ? (
                      <>
                        <Image
                          src={product.icon}
                          alt={product.name}
                          width={100}
                          height={80}
                          className="hidden dark:block"
                        />

                        <Image
                          src={product.lightIcon}
                          alt={`${product.name} light icon`}
                          width={100}
                          height={80}
                          className="block dark:hidden"
                        />
                      </>
                    ) : (
                      <Image
                        src={product.icon}
                        alt={product.name}
                        width={90}
                        height={80}
                        className="dark:invert dark:brightness-0"
                      />
                    )}
                  </div>
                  <p className="mb-4 font-extrabold leading-6">
                    {product.tagline}
                  </p>
                  <p className="mb-6">{product.description}</p>

                  <ul className="my-4">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 mb-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 mt-1 rounded-full bg-green-500 animate-pulse" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a href={product.href}>
                    <Button className="px-4 py-2 rounded-lg group">
                      {product.cta}
                    </Button>
                  </a>
                </div>

                {/* Image content */}
                <div className="order-2 xl:order-2 xl:col-span-7 flex items-end justify-end md:mt-0">
                  <Image
                    src={product.dashboardImage}
                    alt={product.name}
                    width={1080}
                    height={490}
                    className="object-fit rounded-lg w-full "
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 xl:grid-cols-4 gap-6 p-8 rounded-2xl border border-border/30 bg-secondary/30">
          {[
            { value: "0", label: "Client breaches on our watch" },
            { value: "2.4K", label: "Vulnerabilities discovered" },
            { value: "<10h", label: "Critical finding triage" },
            { value: "24/7", label: "Active threat monitoring" },
          ].map((stat) => (
            <div key={stat.label} className="text-center xl:text-left">
              <p className="text-3xl xl:text-4xl font-bold mb-1 text-foreground">
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
