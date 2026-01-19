import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const iconColors = [
  {
    iconColor: "text-foreground-500",
    iconBg: "bg-blue-500/10",
    gradient: "from-violet-500/20 to-blue-500/10",
  },
  {
    iconColor: "text-cyan-500",
    iconBg: "bg-cyan-500/10",
    gradient: "from-emerald-500/20 to-cyan-500/10",
  },
  {
    iconColor: "text-red-500",
    iconBg: "bg-red-500/10",
    gradient: "from-orange-500/20 to-red-500/10",
  },
  {
    iconColor: "text-purple-500",
    iconBg: "bg-purple-500/10",
    gradient: "from-pink-500/20 to-purple-500/10",
  },
  {
    iconColor: "text-indigo-500",
    iconBg: "bg-indigo-500/10",
    gradient: "from-blue-500/20 to-indigo-500/10",
  },
  {
    iconColor: "text-green-500",
    iconBg: "bg-green-500/10",
    gradient: "from-slate-500/20 to-gray-500/10",
  },
];
