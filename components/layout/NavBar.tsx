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
  navigationMenuTriggerStyle,
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
  ArrowRight,
  Infinity,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      href: "/products/falcon",
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
      label: "Documentation",
      description: "Guides and API reference",
      href: "/resources/docs",
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
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={"/logo.svg"}
              alt="Cynical Tech Logo"
              width={190}
              height={90}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu className="opacity-99">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent className="border-8 border-background">
                    <div className="grid sm:grid-cols-2 w-[400px] sm:w-[600px] gap-3 p-4">
                      {products.map((item) => (
                        <NavItemCard key={item.label} {...item} />
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent className="border-8 border-background blur-xsm">
                    <div className="grid sm:grid-cols-2 w-[400px] sm:w-[600px] gap-3 p-4">
                      {solutions.map((item) => (
                        <NavItemCard key={item.label} {...item} />
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Resources */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent className="border-8 border-background blur-xsm">
                    <div className="grid sm:grid-cols-2 w-[400px] sm:w-[600px] gap-3 p-4">
                      {resources.map((item) => (
                        <NavItemCard key={item.label} {...item} />
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Pricing */}
                <NavigationMenuItem>
                  <Link href="/pricing" className="bg-transparent">
                    <NavigationMenuLink>Pricing</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* Contact */}
                <NavigationMenuItem>
                  <Link href="/contact">
                    <NavigationMenuLink>Contact</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button className="bg-border text-foreground hover:outline-2 hover:outline-solid hover:outline-foreground/40 hover:bg-background group transition-all">
              Schedule a Call
              <ArrowRight className="w-4 h-4 transform transition-transform duration-600 group-hover:translate-x-1" />
            </Button>
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

              <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-border">
                <Button className="bg-background">Schedule a Call</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

interface NavItemProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  description: string;
  href: string;
}

function NavItemCard({ icon: Icon, label, description, href }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
      )}
    >
      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-foreground/10 transition-colors">
        <Icon className="w-5 h-5 text-foreground/70" />
      </div>
      <div>
        <p className="font-medium text-sm">{label}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
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
            isOpen ? "rotate-180" : ""
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
