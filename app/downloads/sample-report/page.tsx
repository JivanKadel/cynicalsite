import SampleReportForm from "@/components/contact/SampleReportForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
      <main className="pb-16 flex flex-col justify-center">
        <div className="container mx-auto px-2 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center text-center py-8 md:py-16">
              <h1 className="text-2xl lg:text-4xl font-bold">
                Vulnerability Assessment & Pen Testing Report (VAPT)
              </h1>
              <p>Prepared by Cynical Technology</p>
            </div>
            <div className="mx-auto flex items-center lg:flex-row lg:justify-center flex-col gap-12  lg:gap-8">
              <div className="max-w-2xl px-2 mx-auto">
                <div className="space-y-6 pt-6">
                  <p>
                    Thank you for placing your trust in{" "}
                    <span className="font-semibold">Cynical Technology</span>.
                    We are dedicated to providing clear, actionable insights
                    that strengthen your organization’s security posture. When
                    you access your report, you’ll gain:
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold">
                        Comprehensive Risk Overview
                      </h3>
                      <p className="text-foreground/80">
                        A structured analysis of vulnerabilities across your IT
                        landscape, prioritized by severity and potential
                        business impact.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">
                        Actionable Recommendations
                      </h3>
                      <p className="text-foreground/80">
                        Practical, step‑by‑step remediation strategies and best
                        practices designed to reduce or eliminate identified
                        risks.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">
                        Compliance & Regulatory Alignment
                      </h3>
                      <p className="text-foreground/80">
                        Guidance to help ensure readiness for key industry
                        standards and regulations, including ISO 27001, PCI DSS,
                        HIPAA, and more.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">
                        Tailored Security Insights
                      </h3>
                      <p className="text-foreground/80">
                        Context‑specific findings relevant to your
                        environment—no generic templates, only meaningful,
                        data‑driven intelligence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="min-w-85 max-w-sm p-4 py-5 sm:p-8 border border-border/50 rounded-xl bg-card/50 backdrop-blur-sm shadow-xl">
                <SampleReportForm />
              </div>
            </div>
            <div className="mt-16 border-t pt-4 space-y-2 max-w-2xl px-2 lg:px-4">
              <h2 className="text-lg font-semibold">
                Need assistance interpreting the results?
              </h2>
              <p>
                Our security specialists are available to walk you through the
                findings, help you prioritize risks, and support effective
                remediation.
              </p>
              <Link className="inline-block" href="/contact">
                <Button>Schedule a 1:1 Consultation</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SampleReportPage;
