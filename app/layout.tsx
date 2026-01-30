import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Noto_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/NavBar";
import Footer from "@/components/home/Footer";
import LayoutClient from "./layout-client";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

const noto = Noto_Serif({
  variable: "--font-noto",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const aeonik = localFont({
  src: [
    {
      path: "./font/Aeonik-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "./font/Aeonik-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "./font/Aeonik-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-aeonik",
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "Redefining Security: Human Wisdom Meets AI | Cynical Technology",
  description:
    "Cybersecurity firm specializing in pentesting, incident response, and threat intel. Combine human expertise with our crowdsourced offensive security platform and AI-powered data breach analysis solutions for comprehensive data security.",
  alternates: {
    canonical: "https://cynicalsite.vercel.app/",
  },
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Cynical Technology",
      url: "https://cynicalsite.vercel.app",
      logo: "https://cynicalsite.vercel.app/logo.svg",
      sameAs: [
        "https://www.linkedin.com/company/cynicaltechnology",
        "https://twitter.com/cynicaltech",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+977-01-4530730",
          email: "info@cynicaltechnology.com",
          contactType: "customer service",
          areaServed: "NP",
          availableLanguage: ["en", "ne"],
        },
      ],
    }),
  },
  openGraph: {
    title: "Redefining Security: Human Wisdom Meets AI | Cynical Technology",
    description:
      "Cybersecurity firm specializing in pentesting, incident response, and threat intel. Combine human expertise with crowdsourced offensive security platform and AI-powered data breach analysis solutions for comprehensive security.",
    url: "https://cynicalsite.vercel.app/",
    siteName: "Cynical Technology",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Redefining Security: Human Wisdom Meets AI | Cynical Technology",
    description:
      "Cybersecurity firm specializing in pentesting, incident response, and threat intel. Combine human expertise with crowdsourced offensive security platform and AI-powered data breach analysis solutions for comprehensive security.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${noto.variable} ${inter.variable} ${aeonik.className} antialiased suppressHydrationWarning`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster richColors position="top-center" />

          <LayoutClient>
            <div>
              <Navbar />
              <div className="mt-16 lg:mt-20">{children}</div>
              <Footer />
            </div>
          </LayoutClient>
        </ThemeProvider>
      </body>
    </html>
  );
}
