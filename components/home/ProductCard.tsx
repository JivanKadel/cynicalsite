"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  name: string;
  tagline: string;
  description: string;
  icon: string;
  stats: {
    value: string;
    label: string;
  };
  features: string[];
  cta: string;
}

export function ProductCard({
  name,
  tagline,
  description,
  icon = "logo.svg",
  stats,
  features,
  cta,
}: ProductCardProps) {
  return (
    <div className="group relative animate-fade-up">
      <div className="relative h-full rounded-xl border border-secondary backdrop-blur-md overflow-hidden transition-all duration-30">
        <div className="p-6 flex flex-col h-full text-white">
          <div className="flex items-start justify-between mb-6">
            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center transition-colors">
              <Image src={icon} alt={name} width={24} height={24} />
            </div>
            <div className="text-right">
              <p className="text-xl font-bold">{stats.value}</p>
              <p className="text-[10px]uppercase tracking-wide">
                {stats.label}
              </p>
            </div>
          </div>

          {/* Title */}
          <div className="mb-3">
            <h3 className="text-xl font-bold mb-1">{name}</h3>
            <p className="text-xs font-medium">{tagline}</p>
          </div>

          {/* Description */}
          <p className="text-sm mb-6 leading-relaxed line-clamp-3">
            {description}
          </p>

          {/* Features */}
          <div className="space-y-2 mb-6 grow">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-50 shrink-0" />
                <span className="text-xs">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Button
            variant="outline"
            size="sm"
            className="w-full border-2 border-background/30 transition-all duration-300"
          >
            {cta}
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
