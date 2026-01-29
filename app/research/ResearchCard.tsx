/* eslint-disable @typescript-eslint/no-explicit-any */
import { ResearchItem } from "@/data/research.data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ResearchCard({
  researchItem,
  gradient = "from-violet-500/20 to-blue-500/10",
  iconColor = "text-foreground-500",
  index,
  iconBg = "bg-blue-500/10",
}: {
  researchItem: ResearchItem;
  index: number;
  gradient?: string;
  iconColor?: string;
  iconBg: string;
}) {
  return (
    <Link
      key={index}
      href={`${researchItem.link}/${researchItem.slug}`}
      className="group relative block p-6 md:p-8 rounded-2xl border border-border bg-card  transition-all duration-400"
    >
      <div
        className={`absolute rounded-2xl inset-0 bg-linear-to-br ${gradient} opacity-0 group-hover:opacity-60 dark:bg-none transition-opacity duration-500`}
      />
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="shrink-0">
          <div
            className={`w-14 h-14 rounded-xl ${iconBg} flex items-center justify-center`}
          >
            <researchItem.icon className={`w-7 h-7 ${iconColor}`} />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-sm text-muted-foreground">
              {researchItem.type}
            </span>
            <span className="text-muted-foreground/50">•</span>
            <span className="text-sm text-muted-foreground">
              {researchItem.date}
            </span>
            <span
              className={`px-2 py-0.5 rounded text-xs font-medium ${
                researchItem.severity === "Critical"
                  ? "bg-red-500/20 text-red-400"
                  : researchItem.severity === "High"
                    ? "bg-orange-500/20 text-orange-400"
                    : researchItem.severity === "Medium"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-primary/20 text-primary"
              }`}
            >
              {researchItem.severity}
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {researchItem.title}
          </h3>
          <p className="text-muted-foreground">{researchItem.description}</p>
        </div>

        <div className="shrink-0">
          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </Link>
  );
}
