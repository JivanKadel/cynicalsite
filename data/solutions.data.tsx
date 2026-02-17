import {
  AlertTriangle,
  Bot,
  Lock,
  Cloud,
  Code,
  Database,
  FileCheck,
  Fingerprint,
  Key,
  Monitor,
  Network,
  Search,
  Shield,
  Smartphone,
  Webhook,
  GraduationCap,
} from "lucide-react";

export const solutions = [
  {
    icon: Code,
    title: "Application Penetration Testing",
    description:
      "Manual exploitation of your web apps, APIs, and mobile applications. We find the logic flaws, auth bypasses, and injection points scanners can't detect.",
    features: [
      "OWASP Top 10+",
      "Business logic testing",
      "Auth/session attacks",
    ],
    gradient: "from-violet-500/20 to-blue-500/10",
    iconColor: "text-foreground-500",
    href: "/solutions/app-security",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure Assessment",
    description:
      "Privilege escalation paths, misconfigured IAM policies, and lateral movement opportunities across AWS, GCP, and Azure environments.",
    features: ["IAM policy review", "Container escapes", "Secrets exposure"],
    gradient: "from-emerald-500/20 to-cyan-500/10",
    iconColor: "text-cyan-500",
    href: "/solutions/cloud-security",
  },
  {
    icon: Network,
    title: "Red Team Operations",
    description:
      "Full-scope adversary simulation. We compromise your environment the way APT groups would. Phishing, initial access, persistence, and data exfiltration.",
    features: ["Initial access", "Persistence", "Objective completion"],
    gradient: "from-orange-500/20 to-red-500/10",
    iconColor: "text-red-500",
    href: "/solutions/red-team-operations",
  },
  {
    icon: AlertTriangle,
    title: "Vulnerability Management",
    description:
      "Move beyond point-in-time scans. Our platform combines industry-leading vulnerability detection with expert validation to help you prioritize and remediate what matters most.",
    features: [
      "Continuous External Scanning",
      "Configuration Review",
      "Penetration Testing as a Service (PTaaS)",
    ],
    gradient: "from-pink-500/20 to-purple-500/10",
    iconColor: "text-purple-500",
    href: "/solutions/vulnerability-management",
  },
  {
    icon: GraduationCap,
    title: "Training & Consulting",
    description:
      "Expert-led cybersecurity training and strategic consulting services to empower your team and strengthen your security posture.",
    features: [
      "Developer secure coding",
      "Red team tradecraft",
      "CISO advisory",
    ],
    gradient: "from-blue-500/20 to-indigo-500/10",
    iconColor: "text-indigo-500",
    href: "/solutions/training-and-consulting",
  },
  {
    icon: Search,
    title: "Threat Intelligence & Recon",
    description:
      "Attacker-eye view of your organization. We monitor dark web forums, paste sites, and criminal marketplaces for leaked credentials and mentions of your assets.",
    features: [
      "Dark web monitoring",
      "Credential alerts",
      "Brand impersonation",
    ],
    gradient: "from-slate-500/20 to-gray-500/10",
    iconColor: "text-green-500",
    href: "/solutions/threat-intel",
  },
];

export const capabilities = [
  { icon: Shield, text: "Network Penetration Testing" },
  { icon: Network, text: "Adversary Simulation" },
  { icon: Code, text: "Secure Code Review" },
  { icon: Cloud, text: "Cloud Misconfiguration Audit" },
  { icon: Lock, text: "API Security Testing" },
  { icon: Smartphone, text: "Mobile App Exploitation" },
  { icon: Search, text: "Hardware & IoT Security" },
  { icon: AlertTriangle, text: "Social Engineering" },
  { icon: FileCheck, text: "Compliance Gap Assessment" },
  { icon: Fingerprint, text: "Identity & Access Review" },
  { icon: Webhook, text: "CI/CD Pipeline Security" },
  { icon: Monitor, text: "Detection Engineering" },
  { icon: Key, text: "Secrets & Key Management" },
  { icon: Bot, text: "LLM & AI Red Teaming" },
  { icon: Database, text: "Database Security Audit" },
];
