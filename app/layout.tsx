import type { Metadata } from "next";
import { Cabin, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/NavBar";

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cynical Tech",
  description: "Securing your digital space",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cabin.variable} ${inter.variable} antialiased`}>
        <Navbar />
        <div className="mt-16 lg:mt-20">{children}</div>
      </body>
    </html>
  );
}
