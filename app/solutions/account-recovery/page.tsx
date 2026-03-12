import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  AlertCircle,
  Mail,
  Phone,
  Globe,
  Lock,
  RefreshCw,
  FileText,
  Users,
  Youtube,
  Instagram,
  Facebook,
} from "lucide-react";
import { HelpForm } from "./HelpForm";

export const metadata: Metadata = {
  title: "Account Recovery Services | Cynical Technology",
  description:
    "Professional account recovery and content removal services for businesses and content creators. Legal-compliant solutions for suspended accounts, hacked profiles, and platform violations.",
};

export default function AccountRecoveryPage() {
  return (
    <div>
      <section className="pt-6 pb-8 relative">
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
              <Link
                href="/"
                className="hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <span>/</span>
              <Link
                href="/#solutions"
                className="hover:text-foreground transition-colors"
              >
                Solutions
              </Link>
              <span>/</span>
              <span className="text-foreground">Account Recovery</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">
              Professional Account Recovery
              {/* <span className="block text-slate-500 text-2xl md:text-3xl mt-2">
                & Content Removal Services
              </span> */}
            </h1>

            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Legal-compliant solutions for suspended accounts, hacked profiles,
              {/* and urgent content removal across major platforms. */}
            </p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 max-w-6xl mx-auto gap-4">
            <div className="flex items-center gap-3 p-4 sm:p-6 rounded-lg border border-border bg-card">
              <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-base">Account Recovery</h3>
                <p className="text-xs text-muted-foreground">
                  Time-sensitive restoration of any page, profile, or account
                  across all major platforms.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 sm:p-6 rounded-lg border border-border bg-card">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-base">
                  Copyright Dispute Resolution
                </h3>
                <p className="text-xs text-muted-foreground">
                  Restoration of accounts suspended due to fake or multiple
                  copyright strikes.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 sm:p-6 rounded-lg border border-border bg-card">
              <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-base">
                  Suspended Account Recovery
                </h3>
                <p className="text-xs text-muted-foreground">
                  Recovery of disabled Facebook, Instagram, YouTube channels,
                  and Gmail accounts.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 sm:p-6 rounded-lg border border-border bg-card">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-base">
                  Urgent Content Removal
                </h3>
                <p className="text-xs text-muted-foreground">
                  Expedited removal of posts, videos, and photos from any
                  platform.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 sm:p-6 rounded-lg border border-border bg-card">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500 shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-base">
                  Monetization Restoration
                </h3>
                <p className="text-xs text-muted-foreground">
                  Resolution of Facebook and YouTube monetization issues and
                  eligibility problems.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 sm:p-6 rounded-lg border border-border bg-card">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-500 shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-base">
                  Hacked Account Recovery
                </h3>
                <p className="text-xs text-muted-foreground">
                  Restoration of compromised YouTube channels, Facebook and
                  Gmail accounts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Facebook fill="#0866ff" className="w-5 h-5 text-[#0866ff]" />
              <span className="text-sm">Facebook</span>
            </div>
            <div className="flex items-center gap-2">
              <Instagram className="w-5 h-5 text-[#c1558b]" />
              <span className="text-sm">Instagram</span>
            </div>
            <div className="flex items-center gap-2">
              <Youtube className="w-5 h-5 text-[#ff0033]" />
              <span className="text-sm">YouTube</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#08851b]" />
              <span className="text-sm">Gmail</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#0085ad]" />
              <span className="text-sm">Other Platforms</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-2 p-3 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg">
              <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800 dark:text-amber-300">
                <span className="font-semibold">Legal Compliance:</span> All
                recovery services are performed in accordance with platform
                terms of service and applicable laws. We do not guarantee
                specific outcomes, as platform decisions remain at their sole
                discretion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold tracking-tight mb-2">
                Submit Your Recovery Request
              </h2>
              <p className="text-sm text-muted-foreground">
                Please provide detailed information about your case. Our team
                will review and respond within 24-48 hours.
              </p>
            </div>

            <div className="border border-border rounded-xl bg-card p-6">
              <HelpForm />
            </div>

            <div className="flex justify-center gap-6 mt-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Mail className="w-3 h-3" />
                <span>info@cynicaltechnology.com</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-3 h-3" />
                <span>+977-01-4530730</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-center mb-4">
              Frequently Asked Questions
            </h3>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-secondary/20">
                <p className="text-sm font-medium mb-1">
                  How long does recovery take?
                </p>
                <p className="text-xs text-muted-foreground">
                  Timelines vary by platform and issue complexity. Most cases
                  are resolved within 3-7 business days.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-secondary/20">
                <p className="text-sm font-medium mb-1">
                  Do you guarantee results?
                </p>
                <p className="text-xs text-muted-foreground">
                  We do not guarantee outcomes as platform decisions are final.
                  We pursue all available procedural avenues.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-secondary/20">
                <p className="text-sm font-medium mb-1">
                  What information do you need?
                </p>
                <p className="text-xs text-muted-foreground">
                  Account URLs, detailed issue description, and any
                  correspondence from the platform regarding your case.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
