import {
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const footerLinks = {
    Products: [
      { label: "Bugv Platform", href: "/products/bugv" },
      { label: "Vigile.AI", href: "/products/vigile" },
      { label: "Red Team Services", href: "/products/red-team" },
      { label: "Integrations", href: "/integrations" },
      { label: "Pricing", href: "/pricing" },
      { label: "Changelog", href: "/changelog" },
    ],
    Solutions: [
      { label: "Application Security", href: "/solutions/appsec" },
      { label: "Cloud Security", href: "/solutions/cloud" },
      { label: "AI/ML Security", href: "/solutions/ai-security" },
      { label: "Threat Intelligence", href: "/solutions/threat-intel" },
      { label: "Incident Response", href: "/solutions/incident-response" },
      { label: "Compliance", href: "/solutions/compliance" },
    ],
    Resources: [
      { label: "Documentation", href: "/docs" },
      { label: "API Reference", href: "/api" },
      { label: "Blog", href: "/blog" },
      { label: "Security Advisories", href: "/advisories" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Webinars", href: "/webinars" },
    ],
    Company: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "/contact" },
      { label: "Partners", href: "/partners" },
      { label: "Trust Center", href: "/trust" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/cynical", label: "Twitter" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/cynical",
      label: "LinkedIn",
    },
    { icon: Github, href: "https://github.com/cynical", label: "GitHub" },
  ];

  return (
    <footer className="border-t border-border bg-secondary/20">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column - Takes 2 columns on large screens */}
          <div className="col-span-2">
            <Link href="/" className="text-2xl font-bold mb-6 block">
              <Image
                src={"/logo.svg"}
                alt="Cynical Tech Logo"
                width={190}
                height={90}
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-6 font-body max-w-xs leading-relaxed">
              Built by hackers. Trusted by institutions. Enterprise security
              infrastructure for the modern threat landscape.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-8">
              <p className="text-sm font-medium mb-3">
                Subscribe to security updates
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                />
                <Button
                  size="sm"
                  className="bg-foreground text-background hover:bg-foreground/90"
                >
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>security@cynical.tech</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 000-0000</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-foreground/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12 text-xs text-muted-foreground">
            <span className="font-medium">SOC 2 Type II</span>
            <span className="font-medium">ISO 27001</span>
            <span className="font-medium">GDPR Compliant</span>
            <span className="font-medium">PCI DSS</span>
            <span className="font-medium">HIPAA Ready</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span>All systems operational</span>
              <span className="mx-2">•</span>
              <span>© {new Date().getFullYear()} Cynical Technology, Inc.</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <a
                href="/privacy"
                className="hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="hover:text-foreground transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/security"
                className="hover:text-foreground transition-colors"
              >
                Security
              </a>
              <a
                href="/cookies"
                className="hover:text-foreground transition-colors"
              >
                Cookie Settings
              </a>
              <a
                href="/responsible-disclosure"
                className="hover:text-foreground transition-colors"
              >
                Responsible Disclosure
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
