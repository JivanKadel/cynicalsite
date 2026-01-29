import SampleReportForm from "@/components/contact/SampleReportForm";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Head from "next/head";

const SampleReportPage = () => {
  return (
    <>
      <Head>
        <title>Sample Report | Cynical Technology</title>
        <meta
          name="description"
          content="Download a comprehensive sample security assessment report from Cynical Technology. See how we evaluate and secure your digital assets."
        />
      </Head>
      <main className="pt-4 pb-16 lg:h-screen flex flex-col justify-center lg:-mt-16">
        <div className="container mx-auto px-2 sm:px-6">
          <h2 className="text-xl md:text-2xl lg:text-4xl py-8 lg:py-16 text-center font-semibold">
            Download Sample Report
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="mx-auto flex items-center lg:flex-row lg:justify-center flex-col gap-4 lg:gap-8">
              <Card className="hidden lg:flex lg:flex-col self-center w-75 rounded-md aspect-210/297 border backdrop-blur-sm shadow-2xl">
                <CardContent className="flex flex-col">
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="pb-1">
                      <h1 className="font-bold text-center">
                        Comprehensive Security Assessment Report
                      </h1>

                      <div className="flex flex-col gap-2 pt-4">
                        <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                        <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />

                        <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                        <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                        <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="max-w-sm p-4 py-5 sm:p-8 border border-border/50 rounded-xl bg-card/50 backdrop-blur-sm shadow-xl">
                <SampleReportForm />
              </div>

              <div className="space-y-8 w-full max-w-sm lg:w-75 lg:self-stretch flex flex-col">
                <div className="flex-1 p-6 border border-border/50 rounded-xl bg-card/50 backdrop-blur-sm shadow-xl">
                  <h3 className="font-semibold mb-6 flex items-center gap-2">
                    What&apos;s Inside
                  </h3>
                  <ul className="space-y-4">
                    <li>• Executive Summary</li>
                    <li>• Vulnerability Assessment</li>
                    <li>• Remediation Roadmap</li>
                    <li>• Compliance Checklist</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SampleReportPage;
