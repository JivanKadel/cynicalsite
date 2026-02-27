import {
  Shield,
  Bug,
  Trophy,
  Award,
  Users,
  Globe,
  ClipboardClock,
  SearchAlert,
} from "lucide-react";

export const trustMetrics = [
  {
    value: "500+",
    label: "Assessments completed",
    description: "Zero security incidents post-engagement",
    icon: ClipboardClock,
  },
  {
    value: "2,500+",
    label: "Vulnerabilities",
    description: "Identified and remediated",
    icon: SearchAlert,
  },
  {
    value: "5+",
    label: "Years average experience",
    description: "Senior security researchers",
    icon: Users,
  },
  {
    value: "100%",
    label: "Retention rate",
    description: "Enterprise clients renewing annually",
    icon: Trophy,
  },
];

export const clientLogos = [
  { src: "/logos/fintech.svg", alt: "Global Fintech Leader", width: 120 },
  { src: "/logos/healthcare.svg", alt: "Top Healthcare Provider", width: 120 },
  { src: "/logos/tech.svg", alt: "Fortune 500 Tech", width: 120 },
  { src: "/logos/banking.svg", alt: "Major International Bank", width: 120 },
  { src: "/logos/retail.svg", alt: "Global Retail Chain", width: 120 },
  { src: "/logos/cloud.svg", alt: "Leading Cloud Provider", width: 120 },
];

export const testimonials = [
  {
    quote:
      "Their offensive security approach uncovered vulnerabilities that three previous vendors missed. They think like attackers, not checklist auditors.",
    author: "Sarah Chen",
    title: "CISO",
    company: "Global Fintech",
  },
  {
    quote:
      "The depth of technical expertise is unmatched. They didn't just find the gaps—they helped us understand the business impact and fix them.",
    author: "Marcus Rodriguez",
    title: "VP of Engineering",
    company: "HealthTech",
  },
  {
    quote:
      "Finally, a security partner that understands both offensive security and our business reality. Their threat modeling is exceptional.",
    author: "David Kim",
    title: "CTO",
    company: "SaaS Platform",
  },
];

export const certifications = [
  { name: "OSCP", icon: Award },
  { name: "OSCE", icon: Award },
  { name: "CISSP", icon: Shield },
  { name: "CREST", icon: Globe },
  { name: "SANS", icon: Trophy },
  { name: "CVE", icon: Bug },
];
