"use client";

import Link from "next/link";
import { ArrowLeft, Construction, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UnderConstruction() {
  return (
    <main className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-background text-primary-foreground">
      <div className="flex flex-col items-center justify-center px-6 text-center space-y-8">
        <div className="flex items-center align-middle space-x-4">
          <Construction className="w-12! h-12! text-green-600 animate-pulse" />
          <h1 className="text-6xl tracking-tight font-aeonik font-bold text-foreground">
            Under Construction
          </h1>
          <Construction className="w-12! h-12! text-green-600 animate-pulse" />
        </div>

        <h2 className="text-2xl font-aeonik text-foreground font-bold">
          Securing the Future
        </h2>
        <p className="text-gray-400 max-w-lg">
          Our cybersecurity team is hard at work building a safer digital
          experience. This page is currently under construction and will be
          available soon.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="outline"
            asChild
            className="border-red-500 text-red-500 hover:bg-red-500 hover:text-primary-foreground"
          >
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return to Home
            </Link>
          </Button>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 20"
          className="w-full text-red-600 mt-8 animate-pulse"
        >
          <path
            d="M0 10 H400"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="8 8"
          />
        </svg>
      </div>
    </main>
  );
}
