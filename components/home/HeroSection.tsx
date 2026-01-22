import { trustedBy } from "@/data/trustedby.data";
import { TrustedByImage } from "./TrustedByImage";
import Marquee from "react-fast-marquee";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BorderBeam } from "../ui/border-beam";

export default function HeroSection() {
  return (
    <section className="container mx-auto relative z-10 pt-4 md:pt-6 pb-8">
      <div className="max-w-4xl mx-auto text-center space-y-8 pb-8 py-8">
        <h1 className="text-[2.7rem] font-aeonik font-bold text-foreground leading-none md:leading-tight xl:leading-[80px] lg:text-6xl xl:text-7xl -tracking-[1%] text-balance">
          See your organization the way attackers do
        </h1>

        <p className="my-6 font-sans text-base text-foreground/80 sm:px-0 font-normal lg:my-5.5 lg:text-lg m mx-auto text-balance text-center">
          We provide continuous offensive security by simulating real-world
          attacks across your attack surface to uncover exploitable weaknesses
          scanners, audits, and vendors miss
        </p>
      </div>
      <section className="flex flex-col sm:flex-row gap-4 justify-center items-center mx-auto pb-8 md:pb-16 max-w-sm">
        <Link href={"/contact"}>
          <Button
            className="relative overflow-hidden w-[180px] border-0 border-transparent py-6 text-sm 
             text-white rounded-4xl 
             bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
             hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 
             transition-all duration-300 ease-in-out"
          >
            Get Started Now <ArrowRight className="w-5! h-5!" />
            <BorderBeam
              size={50}
              borderWidth={2}
              colorFrom="white"
              colorTo="blue"
              duration={4}
            />
          </Button>
        </Link>
        <Link href={"/resources/case-studies"} className="flex-1">
          <Button className="w-[180px] py-6 px-8 text-sm hover:opacity-95 rounded-4xl bg-background hover:bg-background/80 text-foreground hover:text-foreground/80 border-2 border-border">
            Read Case Studies <ArrowRight className="w-5! h-5!" />
          </Button>
        </Link>
      </section>

      <hr className="border-t-2 max-w-4xl mx-auto" />

      <div className="pt-6">
        <p className="text-center text-xs md:text-sm text-muted-foreground mb-8 uppercase tracking-widest">
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
                className="object-contain hover:scale-105 transition-transform dark:grayscale-0 dark:hover:grayscale-0 dark:brightness-0 dark:invert dark:hover:invert-0 dark:hover:brightness-100 opacity-90"
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
