"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileCheck } from "lucide-react";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="flex lg:min-h-screen items-center justify-center px-4 lg:-mt-16">
      <div className="w-full max-w-lg">
        <div className="flex flex-col items-center space-y-2 pb-4">
          <FileCheck className="h-12 w-12 text-green-500" />
          <div className="text-2xl md:text-5xl font-bold">Thank You</div>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Your request has been received
          </p>
        </div>

        <div className="space-y-6 pt-6">
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
                href="/downloads/sample-vapt-report.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Report
              </a>
            </Button>
          </div>

          <div className="pt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
            <p>Confidential – For authorized recipients only</p>
          </div>
        </div>

        <div className="mt-8 border-t text-center pt-6">
          <h2>Check out our other resources</h2>
          <div className="py-4 flex justify-center gap-4">
            <Link href="/blogs">
              <Button variant={"outline"}>Check Our Blogs</Button>
            </Link>
            <Link href="/resources/case-studies">
              <Button variant={"outline"}>Read Case Studies</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
