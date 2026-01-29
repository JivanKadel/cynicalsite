import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { research } from "@/data/research.data";
import { iconColors } from "@/lib/utils";

const Research = () => {
  return (
    <section id="research" className="py-12 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-sm text-muted-foreground uppercase tracking-widest mb-4 block">
              Research
            </span>
            <h2 className="text-2xl md:text-4xl font-bold">
              We publish what we find.
            </h2>
          </div>
          <Link
            href="/research"
            className="text-sm fonts-medium flex items-center gap-1 hover:gap-2 transition-all duration-500 link-underline"
          >
            View all research
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {research.map((item, index) => (
            <Link
              key={item.title}
              href={item.link}
              className="group relative rounded-2xl bg-card p-8 block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`absolute inset-0 bg-linear-to-br rounded-xl ${
                  // iconColors[index % iconColors.length].gradient ??
                  // "from-violet-500/20 to-blue-500/10"
                  // "from-emerald-500/20 to-cyan-500/10 dark:bg-none"
                  "shadow-xl"
                } transition-opacity duration-500`}
              />
              <div className="flex items-center gap-3 mb-4">
                <Badge variant={"outline"}>{item.type}</Badge>
                <span className="text-xs text-muted-foreground">
                  {item.date}
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-3 group-hover:text-foreground/80 transition-colors">
                {item.title}
              </h3>

              <p className="text-muted-foreground text-sm font-body">
                {item.description}
              </p>

              <div className="mt-6 flex items-center gap-1 text-sm font-medium">
                Read more
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
