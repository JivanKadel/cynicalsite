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
    iconColor: "text-blue-500",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure Assessment",
    description:
      "Privilege escalation paths, misconfigured IAM policies, and lateral movement opportunities across AWS, GCP, and Azure environments.",
    features: ["IAM policy review", "Container escapes", "Secrets exposure"],
    gradient: "from-emerald-500/20 to-cyan-500/10",
    iconColor: "text-cyan-500",
  },
  {
    icon: Network,
    title: "Red Team Operations",
    description:
      "Full-scope adversary simulation. We compromise your environment the way APT groups would—phishing, initial access, persistence, and data exfiltration.",
    features: ["Initial access", "Persistence", "Objective completion"],
    gradient: "from-orange-500/20 to-red-500/10",
    iconColor: "text-red-500",
  },
  {
    icon: AlertTriangle,
    title: "Incident Response & Forensics",
    description:
      "Under attack? Our IR team deploys within 4 hours. We contain, investigate, and eradicate threats while preserving evidence for legal proceedings.",
    features: ["4-hour deployment", "Malware analysis", "Legal-ready reports"],
    gradient: "from-pink-500/20 to-purple-500/10",
    iconColor: "text-purple-500",
  },
  {
    icon: Bot,
    title: "AI/ML Security Assessment",
    description:
      "Adversarial attacks on your models: prompt injection, training data extraction, model inversion, and API abuse testing for LLMs and ML systems.",
    features: ["Prompt injection", "Model extraction", "Data poisoning"],
    gradient: "from-blue-500/20 to-indigo-500/10",
    iconColor: "text-indigo-500",
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
