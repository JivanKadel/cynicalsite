import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Cynical Technology",
  description:
    "Learn how Cynical Technology collects, uses, and protects your personal information in accordance with our privacy policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
          Cynical Technology Pvt. Ltd.
        </h1>
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
          Privacy Policy
        </h2>
        <p className="text-sm text-muted-foreground mb-8">
          Effective Date: {new Date().getFullYear()}
        </p>

        <section className="space-y-6 text-sm leading-relaxed">
          <p>
            Cynical Technology Pvt. Ltd. (“Cynical Technology”, “we”, “our”, or
            “us”) is committed to protecting the privacy and confidentiality of
            our clients, partners, and website visitors. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information.
          </p>

          <div>
            <h2 className="text-lg font-semibold mb-2">
              1. Information We Collect
            </h2>
            <p>
              We may collect personal information such as{" "}
              <strong>
                name, email address, phone number, company details, job title
              </strong>
              , and other information submitted through our website forms. We
              may also collect technical data including IP addresses, browser
              type, device information, cookies, and website usage analytics.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">
              2. How We Use Information
            </h2>
            <p>
              We use collected information to respond to inquiries, provide
              cybersecurity services, prepare proposals, deliver assessments,
              improve our services, maintain communication, and comply with
              legal obligations.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">
              3. Confidentiality of Security Engagements
            </h2>
            <p>
              All client information, security findings, reports, and technical
              details are treated as <strong>strictly confidential</strong>.
              Access is limited to authorized personnel under contractual
              confidentiality obligations.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational safeguards
              including{" "}
              <strong>
                access controls, encryption, and secure storage practices
              </strong>{" "}
              to protect data against unauthorized access, alteration,
              disclosure, or destruction.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">
              5. Third-Party Services
            </h2>
            <p>
              We may use trusted third-party providers for hosting, analytics,
              communication tools, or cloud infrastructure. These providers are
              contractually obligated to maintain confidentiality and data
              protection standards.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">6. Data Retention</h2>
            <p>
              Personal data is retained only for as long as necessary to fulfill
              business purposes, contractual requirements, or legal obligations.
              Security assessment data may be retained for compliance and audit
              purposes unless otherwise agreed.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">
              7. International Data Transfers
            </h2>
            <p>
              If data is processed or stored outside Nepal, we ensure
              appropriate safeguards are implemented in accordance with
              applicable data protection regulations.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">8. Your Rights</h2>
            <p>
              You may request <strong>access, correction, or deletion</strong>{" "}
              of your personal information by contacting us. We will respond in
              accordance with applicable legal requirements.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">
              9. Cookies and Tracking
            </h2>
            <p>
              Our website may use cookies or similar technologies to enhance
              user experience and analyze website traffic. Users may control
              cookie preferences through browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">
              10. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically. Any updates will
              be posted on our website with a revised effective date.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
