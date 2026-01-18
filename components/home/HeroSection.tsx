import { trustedBy } from "@/data/trustedby.data";
import { TrustedByImage } from "./TrustedByImage";
import Marquee from "react-fast-marquee";

export default function HeroSection() {
  return (
    <section className="container mx-auto relative z-10 pt-4 md:pt-6 pb-8">
      <div className="max-w-4xl mx-auto text-center space-y-8 pb-8">
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/30 text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            47 critical vulnerabilities found this month
          </span>
        </div>
        <h1 className="text-[2.7rem] font-aeonik font-bold leading-none md:leading-tight xl:leading-[80px] lg:text-6xl xl:text-7xl -tracking-[1%] text-balance">
          See your organization the way attackers do
        </h1>

        <p className="my-6 font-sans text-base text-foreground/80 sm:px-0 font-normal lg:my-5.5 lg:text-lg m mx-auto text-balance text-center">
          We provide continuous offensive security by simulating real-world
          attacks across your attack surface to uncover exploitable weaknesses
          scanners, audits, and vendors miss
        </p>
      </div>

      <hr className="border-t-2 max-w-4xl mx-auto" />

      <div className="pt-6">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest">
          Securing critical infrastructure for
        </p>
        <Marquee
          pauseOnHover={true}
          gradient={false}
          autoFill={true}
          speed={10}
          style={{
            marginRight: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 48,
              alignItems: "center",
              marginLeft: 48,
            }}
          >
            {trustedBy.map((brand) => (
              <TrustedByImage
                key={brand.name}
                name={brand.name}
                logo={brand.image}
                link={brand.link}
              />
            ))}

            <TrustedByImage
              width={44}
              height={44}
              name="Nagarik App"
              logo="/brands/nagarik_app.png"
              link="https://nagarikapp.com"
            />
            <TrustedByImage
              width={54}
              height={54}
              name="Swift Technology"
              logo="/brands/swift_tech.svg"
              link="https://swifttech.com.np/"
            />
          </div>
        </Marquee>
      </div>
    </section>
  );
}
