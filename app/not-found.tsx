"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-background text-primary-foreground">
      <div className="flex flex-col items-center justify-center px-6 text-center space-y-8">
        <div className="flex items-center space-x-4">
          <h1 className="text-8xl tracking-tight font-aeonik font-bold text-foreground">
            404
          </h1>
        </div>

        {/* Headline */}
        <h2 className="text-2xl font-aeonik text-foreground font-bold">
          Page Not Found
        </h2>
        <p className="text-gray-400 max-w-lg">
          The resource you requested is unavailable or restricted under our
          security policy.
        </p>

        {/* Actions */}
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

        {/* Decorative pulse line */}
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
