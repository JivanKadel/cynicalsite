import { LucideProps } from "lucide-react";
import Link from "next/link";
import { ForwardRefExoticComponent, RefAttributes } from "react";
export type SolutionCardProps = {
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
  features: string[];
  gradient?: string;
  iconColor?: string;
  href?: string;
};
export default function SolutionCard({
  Icon,
  title,
  description,
  features,
  index,
  gradient = "from-violet-500/20 to-blue-500/10",
  iconColor = "text-foreground-500",
  href = "/solutions/app-security",
}: SolutionCardProps & { index: number }) {
  return (
    <Link
      href={href}
      key={title}
      className="group relative rounded-2xl bg-card shadow-xl backdrop-blur-sm p-8 hover:border-border/80 transition-all duration-300  "
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* <div
        className={`absolute rounded-2xl inset-0 bg-linear-to-br ${gradient} transition-opacity dark:opacity-0 duration-500`}
      /> */}
      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-foreground/10 transition-colors">
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>

      <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm font-body mb-5 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {features.map((feature) => (
          <span
            key={feature}
            className="text-xs px-3 py-1.5 rounded-full bg-secondary text-muted-foreground"
          >
            {feature}
          </span>
        ))}
      </div>
    </Link>
  );
}
