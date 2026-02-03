import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";
import { trustedByClipped } from "@/data/trustedby.data";
import Image from "next/image";
import { ConfettiFireworks } from "@/app/thank-you/Fireworks";

export const metadata: Metadata = {
  title: "Thank You | Cynical Technology",
  description:
    "Thank you for your interest in Cynical Technology. Your request has been received, and we're excited to share our expertise with you.",
};

export default function ThankYouPage() {
  return (
    <div className="flex lg:min-h-screen items-center justify-center py-6 px-4 lg:-mt-16">
      <div className="w-full">
        <div className="flex flex-col items-center space-y-2 pb-4 max-w-lg mx-auto mt-16">
          <h1 className="text-[2.7rem] capitalize font-aeonik font-bold text-foreground leading-none md:leading-tight xl:leading-20 lg:text-6xl xl:text-7xl -tracking-[1%] text-balance">
            Thank You
          </h1>
          <p className="text-gray-500 dark:text-gray-300">
            Your request has been received
          </p>
        </div>

        <div className="space-y-6 pt-2 max-w-lg mx-auto">
          <p className="text-gray-700 dark:text-gray-300 text-center">
            We appreciate your trust in{" "}
            <a
              href="https://www.linkedin.com/company/cynicaltechnology/"
              className="font-semibold underline hover:text-blue-600"
            >
              Cynical Technology
            </a>
            . Your free sample of our Vulnerability Assessment & Pen Testing
            (VAPT) report is ready to download.
          </p>

          <div className="flex justify-center">
            <Button asChild className="px-6 py-2 h-12 text-base">
              <a
                href="https://cynicaltechnology.com/files/McFoster-Sample-Pentest-Report.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Report
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-8 border-t border-b text-center py-6 max-w-lg mx-auto">
          <h2>Explore more resources</h2>
          <div className="py-4 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/blogs">
              <Button variant={"outline"}>Check Our Blogs</Button>
            </Link>
            <Link href="/resources/case-studies">
              <Button variant={"outline"}>Read Case Studies</Button>
            </Link>
            <Link href="/research">
              <Button variant={"outline"}>Explore Research Papers</Button>
            </Link>
          </div>
        </div>

        <ConfettiFireworks />

        <div className="mt-8 mx-auto flex flex-col justify-center">
          <h2 className="text-lg text-center font-semibold tracking-wider text-muted-foreground">
            TRUSTED BY INDUSTRY LEADERS
          </h2>
          <div className="flex justify-center flex-wrap gap-4 mt-4">
            {trustedByClipped.map((brand) => {
              return (
                <Link
                  key={brand.name}
                  href={brand.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-2"
                >
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={120}
                    height={80}
                    className={`object-contain hover:scale-105 transition-transform dark:grayscale-0 dark:hover:grayscale-0 dark:brightness-0 dark:invert  opacity-90 ${
                      brand.name.toLowerCase() === "worldlink" ||
                      brand.name.toLowerCase() == "worldbank" ||
                      brand.name.toLowerCase() === "webpoint"
                        ? ""
                        : "dark:hover:invert-0 dark:hover:brightness-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
