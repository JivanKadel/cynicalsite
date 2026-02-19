import { trustedBy } from "@/data/trustedby.data";
import { TrustedByImage } from "./TrustedByImage";
import Marquee from "react-fast-marquee";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BookACall from "./BookACall";

export default function HeroSection() {
  return (
    <section className="container flex flex-col justify-center items-center mx-auto relative z-10 pt-4 md:pt-0">
      <div className="max-w-7xl mx-auto text-center space-y-8 pb-8 py-8">
        <div className="flex flex-col gap-3 justify-center mb-4 md:mb-8">
          <p className="text-muted-foreground uppercase tracking-widest text-sm font-bold flex items-center gap-2 justify-center">
            Trusted by industry leaders
          </p>
          <p className="text-muted-foreground">
            Comprehensive Penetration Testing and Compliance Solutions.
          </p>
        </div>
        <h1 className="text-[2.7rem] capitalize font-aeonik font-bold text-foreground leading-none md:leading-tight xl:leading-20 lg:text-6xl xl:text-7xl -tracking-[1%] text-balance">
          Protecting Enterprise Infrastructure from Real-World Threats
        </h1>

        <h2 className="my-6 text-base  text-foreground/80 sm:px-0 font-normal lg:my-5.5 md:text-lg lg:text-xl mx-auto text-balance text-center">
          Comprehensive security testing{" "}
          <span className="sr-only">(PenTesting)</span> with clear reporting,
          prioritized remediation, and verified closure.
        </h2>
      </div>
      <section className="flex flex-col md:flex-row gap-4 justify-center items-center mx-auto pb-8 max-w-sm">
        <BookACall />
        <Link href={"/downloads/sample-report"} className="flex-1">
          <Button className="w-72 h-12 text-sm hover:opacity-95 rounded-4xl bg-background hover:bg-background/80 text-foreground hover:text-foreground/80 border-2 border-border">
            Download Real Pentest Report <ArrowRight className="w-5! h-5!" />
          </Button>
        </Link>
      </section>

      <hr className="border-t-2 max-w-4xl mx-auto" />

      <div className="pt-6 max-w-7xl w-full mx-auto">
        <p className="text-center text-xs md:text-sm text-foreground mb-4 uppercase tracking-widest">
          Trusted by teams in SaaS, fintech, and enterprise
        </p>
        <Marquee
          pauseOnHover={true}
          gradient={false}
          autoFill={true}
          speed={10}
          style={{
            marginRight: 10,
            overflow: "hidden",
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
                className={`object-contain hover:scale-105 xl:hover:scale-140 transition-transform dark:grayscale-0 dark:hover:grayscale-0 dark:brightness-0 dark:invert  opacity-90 ${
                  brand.name.toLowerCase() === "worldlink" ||
                  brand.name.toLowerCase() == "worldbank" ||
                  brand.name.toLowerCase() === "webpoint" ||
                  brand.name.toLowerCase() === "foodmandu" ||
                  brand.name.toLowerCase() === "foneloan" ||
                  brand.name.toLowerCase() === "trip turbo" ||
                  brand.name.toLowerCase() === "ambition guru" ||
                  brand.name.toLowerCase() === "careboarding"
                    ? ""
                    : "dark:hover:invert-0 dark:hover:brightness-100"
                }`}
              />
            ))}

            <TrustedByImage
              width={54}
              height={54}
              name="Swift Technology"
              logo="/brands/swift_tech.svg"
              link="https://swifttech.com.np/"
              className="object-contain hover:scale-105 transition-transform  dark:grayscale-0 dark:hover:grayscale-0 dark:brightness-0 dark:invert dark:hover:invert-0 dark:hover:brightness-100 opacity-90"
            />
          </div>
        </Marquee>
      </div>
    </section>
  );
}
