import { TrustedByImage } from "./TrustedByImage";

export default function HeroSection() {
  const logos = ["Deloitte", "Accenture", "McKinsey", "KPMG", "EY", "PwC"];

  const trustedBy = [
    {
      name: "TripAdvisor",
      image: "/brands/tripadvisor.svg",
      link: "https://tripadvisor.com",
    },
    {
      name: "Atlassian",
      image: "/brands/atlassian.svg",
      link: "https://atlassian.com",
    },
    {
      name: "Facebook",
      image: "/brands/facebook.svg",
      link: "https://facebook.com",
    },
    { name: "Google", image: "/brands/google.svg", link: "https://google.com" },
    {
      name: "Mastercard",
      image: "/brands/mastercard.svg",
      link: "https://mastercard.com",
    },
  ];

  return (
    <section className="container mx-auto relative z-10 pt-4 md:pt-6">
      <div className="max-w-4xl mx-auto text-center space-y-8 pb-8">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/30 text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            47 critical vulnerabilities found this month
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-[80px] font-bold font-jakarta">
          Offensive Security
          <br />
          <span>Built by Attackers.</span>
        </h1>

        <p className="text-lg sm:text-xl font-extralight text-muted-foreground max-w-2xl mx-auto">
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
        </div>
        <hr className="border-t-2 max-w-4xl mx-auto mt-2" />
      </div>
    </section>
  );
}
