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
  gradient?: string;
}

export function ProductCard({
  name,
  tagline,
  description,
  icon = "logo.svg",
  stats,
  features,
  cta,
  gradient = "from-violet-500/20 to-blue-500/10",
}: ProductCardProps) {
  return (
    <div className="group relative bg-[#0d0d0e] rounded-xl rounded-tr-[48px]">
      <div
        className={`absolute rounded-xl rounded-tr-[48px] inset-0 bg-linear-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />
      <div className="relative h-full rounded-xl rounded-tr-[48px] backdrop-blur-md overflow-hidden transition-all duration-30">
        <div className="p-6 flex flex-col h-full text-foreground">
          <div className="flex items-start justify-between mb-6">
            <div className="w-12 h-12 p-2 rounded-lg bg-white/10 flex items-center justify-center transition-colors">
              <Image src={icon} alt={name} width={48} height={40} />
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-blue">{stats.value}</p>
              <p className="text-[10px]uppercase tracking-wide">
                {stats.label}
              </p>
            </div>
          </div>

          {/* Title */}
          <div className="mb-3">
            <h3 className="text-xl font-bold mb-1">{name}</h3>
            <p className="text-xs font-medium text-slate-500">{tagline}</p>
          </div>

          {/* Description */}
          <p className="text-sm text-foreground/70 mb-6 leading-relaxed line-clamp-3">
            {description}
          </p>

          {/* Features */}
          <div className="space-y-3 mb-6 grow">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <Check className="w-4 h-4 text-green-600 dark:text-green-50 shrink-0" />
                <span className="text-sm text-foreground/70">{feature}</span>
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            className="w-full border-2 border-border/60 py-5 transition-all duration-300"
          >
            {cta}
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
