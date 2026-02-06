import {
  Award,
  Bug,
  CheckCircle,
  Clock,
  Eye,
  FileText,
  Globe,
  Headset,
  Layers,
  Lock,
  Target,
  Users,
} from "lucide-react";

export const stats = [
  { value: "500+", label: "Elite Researchers", icon: Users },
  { value: "10,000+", label: "Vulnerabilities Found", icon: Bug },
  { value: "48hrs", label: "Avg. Response Time", icon: Clock },
  { value: "$5M+", label: "Bounties Paid", icon: Award },
];

export const features = [
  {
    icon: Users,
    title: "Curated Researcher Network",
    description:
      "Access a vetted community of elite security researchers from around the world, each with verified credentials and track records.",
  },
  {
    icon: Layers,
    title: "Managed Programs",
    description:
      "We handle triage, validation, and communication—so your team can focus on fixing vulnerabilities, not managing reports.",
  },
  {
    icon: Target,
    title: "Continuous Testing",
    description:
      "24/7 security testing that adapts to your release cycles. New features get tested before attackers find them.",
  },
  {
    icon: FileText,
    title: "Enterprise Reporting",
    description:
      "Detailed vulnerability reports with reproduction steps, impact analysis, and remediation guidance.",
  },
  {
    icon: Lock,
    title: "Compliance Ready",
    description:
      "Meet security requirements for SOC 2, ISO 27001, PCI-DSS, and other compliance frameworks.",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description:
      "Researchers across time zones ensure round-the-clock coverage and diverse testing perspectives.",
  },
];

export const programTypes = [
  {
    title: "Private Bug Bounty",
    description:
      "Invite-only programs with vetted researchers for sensitive applications",
    features: [
      "Handpicked researcher selection",
      "NDA-protected testing",
      "Custom scope definition",
      "Priority vulnerability triage",
    ],
    recommended: true,
  },
  {
    title: "Public Bug Bounty",
    description:
      "Open programs that leverage the full power of the security community",
    features: [
      "Maximum researcher participation",
      "Broader testing coverage",
      "Community reputation system",
      "Transparent disclosure",
    ],
    recommended: false,
  },
  {
    title: "Vulnerability Disclosure",
    description:
      "Structured process for receiving and handling security reports",
    features: [
      "Safe harbor policy",
      "Responsible disclosure",
      "Security.txt integration",
      "Automated acknowledgment",
    ],
    recommended: false,
  },
];

export const process = [
  {
    step: "01",
    title: "Program Design",
    description:
      "We work with you to define scope, rewards, and rules tailored to your security goals and risk tolerance.",
    icon: Target,
  },
  {
    step: "02",
    title: "Researcher Matching",
    description:
      "Our platform matches your program with researchers who have relevant expertise in your technology stack.",
    icon: Users,
  },
  {
    step: "03",
    title: "Active Testing",
    description:
      "Researchers probe your applications using real-world attack techniques, finding vulnerabilities before malicious actors.",
    icon: Eye,
  },
  {
    step: "04",
    title: "Triage & Validation",
    description:
      "Our security team validates each submission, eliminates duplicates, and prioritizes by severity and impact.",
    icon: CheckCircle,
  },
  {
    step: "05",
    title: "Remediation Support",
    description:
      "Get detailed fix guidance and verify patches with researcher retesting to ensure complete resolution.",
    icon: Headset,
  },
];

export const vulnerabilityTypes = [
  { name: "SQL Injection", severity: "Critical", count: "1,240+" },
  { name: "Authentication Bypass", severity: "Critical", count: "890+" },
  { name: "Remote Code Execution", severity: "Critical", count: "450+" },
  { name: "Cross-Site Scripting", severity: "High", count: "2,100+" },
  { name: "IDOR / Broken Access Control", severity: "High", count: "1,800+" },
  { name: "Server-Side Request Forgery", severity: "High", count: "620+" },
  { name: "Information Disclosure", severity: "Medium", count: "3,200+" },
  { name: "Business Logic Flaws", severity: "Medium", count: "980+" },
];
