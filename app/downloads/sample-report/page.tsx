import SampleReportForm from "@/components/contact/SampleReportForm";
import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sample Report | Cynical Technology",
  description:
    "Download a comprehensive sample security assessment report from Cynical Technology. See how we evaluate and secure your digital assets.",
};

const SampleReportPage = () => {
  return (
    <main className="pb-16 py-8 flex flex-col justify-center">
      <div className="container mx-auto px-2 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-3 flex flex-col items-center text-center mb-12">
            <h1 className="text-2xl lg:text-5xl">VAPT Sample Report</h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              See how we identify, prioritize, and remediate real security
              risks. Get a transparent look at our methodology.
            </p>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-widest pt-2">
              Prepared by Cynical Technology
            </p>
          </div>
          <div className="mx-auto flex items-center lg:flex-row lg:justify-center flex-col gap-12  lg:gap-8">
            <div className="max-w-2xl px-2 mx-auto">
              <div>
                <div className="w-full max-w-xl mx-auto">
                  <Image
                    src={"/vapt_report.png"}
                    alt="Report"
                    width={600}
                    height={900}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-8 sticky top-8 min-w-85 max-w-[450px] w-full">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-200 mb-2">
                  Get the Sample VAPT Report
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Instant access. No spam. No commitments.
                </p>
              </div>
              <SampleReportForm />
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700 grid grid-cols-1 gap-3">
                <div className="flex items-center justify-center lg:justify-start text-xs font-medium text-slate-500 bg-slate-50 dark:bg-slate-700 dark:text-slate-200 py-2 px-3 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-lock w-3 h-3 mr-2 text-slate-400 dark:text-slate-200"
                    aria-hidden="true"
                  >
                    <rect
                      width="18"
                      height="11"
                      x="3"
                      y="11"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  Used by security teams &amp; founders
                </div>
                <div className="flex items-center justify-center lg:justify-start text-xs font-medium text-slate-500 bg-slate-50 dark:bg-slate-700 dark:text-slate-200 py-2 px-3 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-lock w-3 h-3 mr-2 text-slate-400 dark:text-slate-200"
                    aria-hidden="true"
                  >
                    <rect
                      width="18"
                      height="11"
                      x="3"
                      y="11"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  Confidential &amp; GDPR-ready
                </div>
                <div className="flex items-center justify-center lg:justify-start text-xs font-medium text-slate-500 bg-slate-50 dark:bg-slate-700 dark:text-slate-200 py-2 px-3 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-lock w-3 h-3 mr-2 text-slate-400 dark:text-slate-200"
                    aria-hidden="true"
                  >
                    <rect
                      width="18"
                      height="11"
                      x="3"
                      y="11"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  No third-party sharing
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-4xl mt-20">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-300 uppercase tracking-widest mb-10">
                What&apos;s inside the report
              </h3>
              <div className="space-y-10">
                <div className="flex items-start group">
                  <div className="shrink-0 w-12 h-12 bg-white dark:bg-black border border-slate-200 dark:border-slate-800 rounded-lg flex items-center justify-center text-slate-900 dark:text-slate-300 mr-6 shadow-sm group-hover:border-slate-400 dark:group-hover:border-slate-600 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-panels-top-left"
                      aria-hidden="true"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                      <path d="M3 9h18"></path>
                      <path d="M9 21V9"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-200 mb-2">
                      Comprehensive Risk Overview
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[15px]">
                      Prioritized vulnerabilities across IT assets with severity
                      scoring and business impact analysis.
                    </p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="shrink-0 w-12 h-12 bg-white dark:bg-black border border-slate-200 dark:border-slate-800 rounded-lg flex items-center justify-center text-slate-900 dark:text-slate-300 mr-6 shadow-sm group-hover:border-slate-400 dark:group-hover:border-slate-600 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-shield-check"
                      aria-hidden="true"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-200 mb-2">
                      Actionable Remediation Steps
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[15px]">
                      Clear, step-by-step guidance for developers to fix
                      identified security issues immediately.
                    </p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="shrink-0 w-12 h-12 bg-white dark:bg-black border border-slate-200 dark:border-slate-800 rounded-lg flex items-center justify-center text-slate-900 dark:text-slate-300 mr-6 shadow-sm group-hover:border-slate-400 dark:group-hover:border-slate-600 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-200 mb-2">
                      Compliance-Ready Findings
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[15px]">
                      Insights aligned with ISO 27001, PCI DSS, HIPAA, and other
                      global regulatory standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="shrink-0 w-12 h-12 bg-background border border-slate-200 dark:border-slate-800 rounded-lg flex items-center justify-center text-slate-900 dark:text-slate-300 mr-6 shadow-sm group-hover:border-slate-400 dark:group-hover:border-slate-600 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-file-search"
                      aria-hidden="true"
                    >
                      <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                      <path d="M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"></path>
                      <path d="m9 18-1.5-1.5"></path>
                      <circle cx="5" cy="14" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-200 mb-2">
                      Context-Specific Intelligence
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[15px]">
                      No generic automated scans—findings tailored specifically
                      to real-world environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900 py-20">
            <div className="mx-auto px-6 text-center">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-300 mb-4">
                Need help interpreting VAPT results?
              </h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8">
                Our security experts can walk you through findings and
                remediation priorities tailored to your stack.
              </p>
              <Link href={"/contact"}>
                <Button className="font-bold px-12 h-14 py-3.5 rounded-lg group transition-all shadow-sm hover:shadow-md">
                  Schedule a 1:1 Security Consultation{" "}
                  <MoveRight className="group-hover:translate-x-1 duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SampleReportPage;
