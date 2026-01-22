import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Phone,
  Facebook,
} from "lucide-react";
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
    {
      icon: Facebook,
      href: "https://www.facebook.com/cynicaltechnology",
      label: "Facebook",
      hoverColor: "hover:text-foreground-600",
      hoverBg: "hover:bg-blue-600/10",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/cynicaltechnology/",
      label: "LinkedIn",
      hoverColor: "hover:text-foreground-700",
      hoverBg: "hover:bg-blue-700/10",
    },
  ];

  return (
    <footer className="lg:pt-16 border-t-2 border-border/30">
      {/* Main Footer */}
      <div className="container mx-auto py-16 lg:py-20 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 content-start">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-xs font-medium tracking-widest uppercase text-foreground sm:text-sm md:mb-6">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li
                    key={link.label}
                    className="flex mb-3 text-xs md:text-sm md:mb-4"
                  >
                    <a
                      href={link.href}
                      className="font-inter font-normal text-foreground/90 hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-1 self-start">
            <Link href="/" className="text-2xl font-bold mb-2 block md:-mt-8">
              <Image
                src={"/logo.svg"}
                alt="Cynical Tech Logo"
                width={190}
                height={90}
              />
            </Link>
            <div className="space-y-3 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="font-inter break-all">
                  info@cynicaltechnology.com
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="font-inter">+977-01-4530730</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-8 h-8" />
                <span className="font-inter">
                  Sharada Bhawan, Maitidevi Marg, Kathmandu, Nepal
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`w-10 h-10 rounded-lg bg-secondary flex items-center justify-center ${social.hoverBg} transition-colors`}
                  aria-label={social.label}
                >
                  <social.icon
                    className={`w-6 h-6 text-muted-foreground ${social.hoverColor}`}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pb-24 md:mx-20 border-t border-border">
        <div className="container mx-auto py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-inter">
                Copyright © {new Date().getFullYear()} Cynical Technology. All
                Rights Reserved.
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground font-inter">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/security">Security</a>
              <a href="/cookies">Cookie Settings</a>
              <a href="/responsible-disclosure">Responsible Disclosure</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
