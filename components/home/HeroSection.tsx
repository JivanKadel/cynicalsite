import { TrustedByImage } from "./TrustedByImage";

export default function HeroSection() {
  const trustedBy = [
    {
      name: "E-Sewa",
      image: "/brands/esewa.png",
      link: "https://esewa.com.np",
    },
    {
      name: "Himalayan Life Insurance",
      image: "/brands/himalayan_life_insurance.png",
      link: "https://himalayanlife.com.np",
    },
    {
      name: "WorldLink",
      image: "/brands/worldlink.svg",
      link: "https://worldlink.com.np",
    },
    // {
    //   name: "Mero Job",
    //   image: "/brands/mero_job.svg",
    //   link: "https://merojob.com",
    // },
    {
      name: "FonePay",
      image: "/brands/fonepay.webp",
      link: "https://fonepay.com",
    },
    // {
    //   name: "WorldBank",
    //   image: "/brands/worldbank.svg",
    //   link: "https://worldbank.org",
    // },
    {
      name: "Ncell",
      image: "/brands/ncell.svg",
      link: "https://ncell.com",
    },
  ];

  return (
    <section className="container mx-auto relative z-10 pt-4 md:pt-6 pb-8">
      <div className="max-w-4xl mx-auto text-center space-y-8 pb-8">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/30 text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            47 critical vulnerabilities found this month
          </span>
        </div>
        <h1 className="font-aeonik  leading-none md:leading-tight xl:leading-[80px] lg:text-6xl xl:text-7xl -tracking-[1%]">
          {/* Offensive  */}
          <span className="text-[#BBDEF2]">Offensive</span> Security
          <br />
          <span>Built by Attackers.</span>
          {/* Breakthrough AI from Data to Deployment */}
        </h1>

        <p className="my-6 font-sans text-base text-white/80 sm:px-0 font-normal lg:my-[22px] lg:text-lg md:max-w-[780px] mx-auto text-balance text-center">
          We found them. Our team of former red teamer, exploit developers, and
          threat researchers test your systems the way real attackers do. No
          checklists. No compliance theater.
        </p>

        <p className="text-sm text-muted-foreground font-inter">
          2.4M vulnerabilities discovered. Zero breaches on watch.
        </p>
      </div>

      <hr className="border-t-2 max-w-4xl mx-auto" />

      <div className="animate-fade-up pt-6">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest">
          Securing critical infrastructure for
        </p>
        <div className="flex flex-wrap justify-center items-end gap-x-12 gap-y-6">
          {trustedBy.map((brand) => (
            <TrustedByImage
              key={brand.name}
              name={brand.name}
              logo={brand.image}
              link={brand.link}
            />
          ))}

          <TrustedByImage
            width={50}
            height={50}
            name="Nagarik App"
            logo="/brands/nagarik_app.png"
            link="https://nagarikapp.com"
          />
        </div>
      </div>
    </section>
  );
}
