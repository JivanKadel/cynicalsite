"use client";

import type React from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Menu,
  X,
  Bug,
  Radar,
  Shield,
  Code,
  Cloud,
  Search,
  AlertTriangle,
  Users,
  FileText,
  BookOpen,
  ChevronDown,
  Infinity,
  MessageCircleQuestionMark,
  BriefcaseBusiness,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ScheduleCallDialog } from "../contact/SchedulDialog";
import { ThemeSwitcher } from "../theme-switcher";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { theme } = useTheme();

  const [dialogOpen, setDialogOpen] = useState(false);

  const products = [
    {
      icon: Bug,
      label: "Bugv",
      description: "World's No 1. Crowdsourced security platform",
      // href: "https://bugv.io",
      href: "/products/bugv",
    },
    {
      icon: Radar,
      label: "Vigile.AI",
      description:
        "Protect your organization from leaked credentials & breaches",
      href: "/products/vigile",
    },
    {
      icon: Infinity,
      label: "Falcon",
      description: "Continuous security and Uptime Monitoring",
      href: "https://webmonitoring.doit.gov.np/dashboard",
    },
  ];

  const solutions = [
    {
      icon: Code,
      label: "Application Security",
      description: "Web, API & mobile testing",
      href: "/solutions/app-security",
    },
    {
      icon: Cloud,
      label: "Cloud Security",
      description: "AWS, GCP, Azure assessments",
      href: "/solutions/cloud-security",
    },
    {
      icon: Search,
      label: "Threat Intelligence",
      description: "Dark web & breach monitoring",
      href: "/solutions/threat-intel",
    },
    {
      icon: AlertTriangle,
      label: "Incident Response",
      description: "24/7 forensics & recovery",
      href: "/solutions/incident-response",
    },
  ];

  const resources = [
    {
      icon: FileText,
      label: "Research",
      description: "Latest security research & whitepapers",
      href: "/research",
    },
    {
      icon: BookOpen,
      label: "Blog",
      description: "Security insights & research",
      href: "/resources/blog",
    },
    {
      icon: Shield,
      label: "Security Advisories",
      description: "Latest vulnerability disclosures",
      href: "/resources/advisories",
    },
    {
      icon: Users,
      label: "Case Studies",
      description: "Customer success stories",
      href: "/resources/case-studies",
    },
    {
      icon: MessageCircleQuestionMark,
      label: "About Us",
      description: "Learn more about Cynical Tech",
      href: "/about",
    },
    {
      icon: BriefcaseBusiness,
      label: "Careers",
      description: "Join our team",
      href: "/career",
    },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center gap-2">
              {theme === "light" ? (
                <Image
                  src={"/cynical_light.png"}
                  alt="Cynical Tech Logo"
                  width={150}
                  height={40}
                />
              ) : (
                <Image
                  src={"/logo.svg"}
                  alt="Cynical Tech Logo"
                  width={190}
                  height={90}
                />
              )}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <NavigationMenu className="opacity-99 border-none outline-none shadow-none">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                    <NavigationMenuContent className="backdrop-blur-3xl! bg-[#0a0909]! opacity-97">
                      <div className="grid sm:grid-cols-2 w-100 sm:w-150 gap-3 p-1">
                        {products.map((item) => (
                          <NavItemCard key={item.label} {...item} />
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                    <NavigationMenuContent className="backdrop-blur-3xl! bg-[#0a0909]! opacity-97">
                      <div className="grid sm:grid-cols-2 w-100 sm:w-150 gap-3 p-4">
                        {solutions.map((item) => (
                          <NavItemCard key={item.label} {...item} />
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Resources */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                    <NavigationMenuContent className="backdrop-blur-3xl! bg-[#0a0909]! opacity-97">
                      <div className="grid sm:grid-cols-2 w-100 sm:w-150 gap-3 p-4">
                        {resources.map((item) => (
                          <NavItemCard key={item.label} {...item} />
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Pricing */}
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/pricing"
                      className="bg-transparent px-4"
                    >
                      Pricing
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  {/* Contact */}
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/contact"
                      className="bg-transparent px-4"
                    >
                      Contact
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex gap-2">
              <Button
                // href={"/contact"}
                onClick={() => setDialogOpen(true)}
                className="bg-primary text-background rounded-[8px] group justify-center flex flex-nowrap whitespace-nowrap cursor-pointer group items-center h-full group leading-[150%] px-4.25 py-2"
              >
                <div className="font-medium text-sm font-inter">
                  Schedule a Call
                  <span className="inline-block ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-inter">
                    →
                  </span>
                </div>
                {/* <ArrowRight className="w-4 h-4 transform transition-transform duration-600 group-hover:translate-x-1" /> */}
              </Button>
              <ThemeSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-6 border-t border-border bg-background">
              <div className="flex flex-col gap-4">
                <MobileNavSection title="Products" items={products} />
                <MobileNavSection title="Solutions" items={solutions} />
                <MobileNavSection title="Resources" items={resources} />

                <Link
                  href="/pricing"
                  className="px-4 py-2 text-foreground hover:bg-secondary/50 rounded-lg transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/contact"
                  className="px-4 py-2 text-foreground hover:bg-secondary/50 rounded-lg transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>

                <div className="flex gap-2 pt-4 mt-2 border-t border-border">
                  {/* <Link href={"/contact"}> */}
                  <Button
                    onClick={() => setDialogOpen(true)}
                    className="flex-1"
                  >
                    Schedule a Call
                  </Button>
                  <ThemeSwitcher />
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      {dialogOpen && (
        <ScheduleCallDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      )}
    </>
  );
}

interface NavItemProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  className?: string;
  description: string;
  href: string;
}

function NavItemCard({
  icon: Icon,
  label,
  description,
  href,
  className = "",
}: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn("flex items-start gap-3 p-3 group", className)}
    >
      <div className="w-10 h-10 flex items-center justify-center self-center shrink-0">
        <Icon className="w-6 h-6 text-foreground/70" />
      </div>
      <div>
        <p className="font-medium text-foreground/70 group-hover:text-foreground/90">
          {label}
        </p>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </Link>
  );
}

interface MobileNavSectionProps {
  title: string;
  items: NavItemProps[];
}

function MobileNavSection({ title, items }: MobileNavSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="flex items-center justify-between w-full px-4 py-2 text-foreground hover:bg-secondary/50 rounded-lg transition-colors font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span
          className={cn(
            "transition-transform duration-200",
            isOpen ? "rotate-180" : "",
          )}
        >
          <ChevronDown />
        </span>
      </button>

      {isOpen && (
        <div className="pl-4 pb-2 flex flex-col gap-2">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary/30 rounded-lg transition-colors text-sm"
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
