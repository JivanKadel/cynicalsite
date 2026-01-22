"use client";

import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  name: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  dashboardImage: string;
  stats: {
    value: string;
    label: string;
  };
  features: string[];
  cta: string;
  gradient?: string;
  href?: string;
}

export function ProductCard({
  name,
  tagline,
  title,
  description,
  icon = "logo.svg",
  stats,
  features,
  cta,
  dashboardImage,
  gradient = "from-violet-500/20 to-blue-500/10",
  href,
}: ProductCardProps) {
  return (
    <Link
      href={href || "#"}
      className="group h-80 sm:h-70 md:h-105 rounded-2xl bg-card opacity-90 shadow-2xl hover:border-border/80 transition-all duration-300"
    >
      <div className="relative h-full p-2 lg:p-4 rounded-xl rounded-tr-[48px] overflow-hidden transition-all duration-300">
        <div className="flex justify-between items-center">
          <h2 className="flex gap-1 text-green-700 dark:text-green-500 text-xs tracking-widest">
            {title}
          </h2>
          <div className="border border-foreground/20 p-2 rounded-full">
            <MoveUpRight className="h-4 w-4" />
          </div>
        </div>
        <div className="mt-2 flex flex-col h-full text-foreground relative z-10">
          <div className="mb-1">
            <h2 className="md:text-[1.625rem] text-3.5xl leading-tight md:leading-8 mb-2 font-aeonik z-10 relative text-pretty max-w-96">
              {name}
            </h2>
            <p className="z-10 mb-8 leading-6 md:mb-18">{tagline}</p>
          </div>
        </div>

        <div className="absolute -bottom-4 sm:bottom-4 right-4 left-4 h-[60%]">
          <div className="relative w-full h-full rounded-lg p-0 m-0">
            <Image
              src={dashboardImage}
              alt={name}
              width={1080}
              height={490}
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
