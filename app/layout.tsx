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
  title: "Cynical Technology - Revolutionizing and Empowering Cybersecurity",
  description: "Securing your digital space",
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
          defaultTheme="system"
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
