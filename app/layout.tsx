import type { Metadata } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/NavBar";
import Footer from "@/components/home/Footer";

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
      className={`${noto.variable} ${inter.variable} antialiased`}
    >
      <body>
        <Navbar />
        <div className="mt-16 lg:mt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
