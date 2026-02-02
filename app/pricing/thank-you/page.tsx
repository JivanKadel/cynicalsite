import { Button } from "@/components/ui/button";
import { PartyPopper } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Cynical Technology",
  description:
    "Thank you for choosing Cynical Technology. Your pricing request has been received, and we're excited to support your security journey.",
};

export default function PricingThankYouPage() {
  return (
    <div className="flex lg:min-h-screen items-center justify-center py-6 px-4 lg:-mt-16">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="flex flex-col items-center space-y-2 pb-4">
          <PartyPopper className="h-12 w-12 md:h-20 md:w-20 text-green-500" />
          <h1 className="text-[2.7rem] capitalize font-aeonik font-bold text-foreground leading-none md:leading-tight xl:leading-20 lg:text-6xl xl:text-7xl -tracking-[1%] text-balance">
            Thank You
          </h1>
          <p className="text-gray-500 dark:text-gray-300">
            Your pricing request has been received
          </p>
        </div>

        {/* Body */}
        <div className="space-y-6 pt-6">
          <p className="text-gray-700 dark:text-gray-300 text-center">
            We appreciate your trust in{" "}
            <a
              href="https://www.linkedin.com/company/cynicaltechnology/"
              className="font-semibold underline hover:text-blue-600"
            >
              Cynical Technology
            </a>
            . Our team will review your request and share{" "}
            <span className="font-bold">tailored</span> pricing details shortly.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 border-t text-center pt-6">
          <h2>Explore more resources</h2>
          <div className="py-4 flex justify-center gap-4">
            <Link href="/blogs">
              <Button variant={"outline"}>Check Our Blogs</Button>
            </Link>
            <Link href="/resources/case-studies">
              <Button variant={"outline"}>Read Case Studies</Button>
            </Link>
            <Link href="/resources/whitepapers">
              <Button variant={"outline"}>Download Whitepapers</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
