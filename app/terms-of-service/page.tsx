export default function TermsOfServicePage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
          Cynical Technology Pvt. Ltd.
        </h1>
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
          Terms of Service
        </h2>
        <p className="text-sm text-muted-foreground mb-8">
          Effective Date: {new Date().getFullYear()}
        </p>

        <section className="space-y-6 text-sm leading-relaxed">
          <p>
            These Terms of Service (“Terms”) govern the provision of
            cybersecurity services by Cynical Technology Pvt. Ltd.
          </p>

          <div>
            <h2 className="text-lg font-semibold mb-2">1. Services</h2>
            <p>
              Cynical Technology provides{" "}
              <strong>
                cybersecurity consulting, penetration testing, cloud security
                assessments, compliance advisory, bug bounty program management
              </strong>
              , and related professional services as outlined in formal
              proposals or Statements of Work (SOW).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">
              2. Scope of Engagement
            </h2>
            <p>
              Each engagement is governed by a mutually agreed proposal or SOW
              defining scope, methodology, deliverables, timelines, and fees.
              Work outside the defined scope may require additional agreement.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">
              3. Client Responsibilities
            </h2>
            <p>
              Clients agree to provide necessary access, documentation, and
              authorization required for testing. Clients must ensure that
              appropriate internal approvals are obtained prior to assessment
              activities.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">4. Fees and Payment</h2>
            <p>
              Fees are invoiced according to agreed payment terms. Payments must
              be made within the specified timeframe. Late payments may result
              in suspension of services.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">5. Confidentiality</h2>
            <p>
              Both parties agree to maintain confidentiality of proprietary,
              technical, and sensitive information shared during the engagement.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">
              6. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Cynical Technology’s
              liability shall be limited to the fees paid for the specific
              engagement giving rise to the claim, except in cases of willful
              misconduct or fraud.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">
              7. No Guarantee of Absolute Security
            </h2>
            <p>
              Security assessments provide risk identification based on scope
              and timing. No guarantee is made that all vulnerabilities will be
              identified or that security incidents will not occur.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">
              8. Intellectual Property
            </h2>
            <p>
              Reports and deliverables provided to the client remain the
              property of the client for internal use. Cynical Technology
              retains ownership of proprietary methodologies and tools.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">9. Termination</h2>
            <p>
              Either party may terminate an engagement in accordance with the
              terms defined in the governing agreement. Fees for completed work
              remain payable.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">10. Governing Law</h2>
            <p>
              These Terms shall be governed by the laws of Nepal unless
              otherwise agreed in writing.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
