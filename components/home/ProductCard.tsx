"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  name: string;
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
      className="group h-[280px] lg:h-[420px] rounded-2xl bg-[#bfbfbb] opacity-90 hover:border-border/80 transition-all duration-300"
    >
      <div className="relative h-full rounded-xl rounded-tr-[48px] overflow-hidden transition-all duration-300">
        <div className="p-6 flex flex-col h-full text-black relative z-10">
          <div className="mb-3">
            <h2 className="md:text-[1.625rem] text-3.5xl leading-tight md:leading-8 mb-2 font-aeonik z-10 relative text-pretty max-w-96">
              {name}
            </h2>
            <p className="z-10 mb-8 leading-6 md:mb-18">{tagline}</p>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-[90%] h-100!">
          <div className="relative w-full h-full">
            <Image
              src={dashboardImage}
              alt={name}
              fill
              className="object-contain object-bottom-right"
              sizes="90vw"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
