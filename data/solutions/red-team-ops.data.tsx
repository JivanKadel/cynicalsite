import {
  BarChart3,
  Building2,
  Eye,
  EyeOff,
  Globe,
  Key,
  Network,
  Phone,
  Radar,
  Radio,
  ShieldOff,
  Skull,
  Target,
  Users,
  Wifi,
  Zap,
} from "lucide-react";

export const capabilities = [
  {
    icon: Target,
    title: "Initial Access",
    description:
      "Simulate real-world attack vectors including spear-phishing, drive-by downloads, external exposure exploitation, and physical intrusion.",
  },
  {
    icon: EyeOff,
    title: "Defense Evasion",
    description:
      "Bypass EDR, AV, and other security controls using living-off-the-land techniques and custom tooling.",
  },
  {
    icon: Key,
    title: "Credential Access",
    description:
      "Extract credentials from memory, keylogging, pass-the-hash, and cloud API key harvesting.",
  },
  {
    icon: Network,
    title: "Lateral Movement",
    description:
      "Navigate your network using legitimate administrative tools and protocols to expand access.",
  },
  {
    icon: Radio,
    title: "C2 Infrastructure",
    description:
      "Deploy resilient command and control channels mimicking real adversary communication patterns.",
  },
  {
    icon: Globe,
    title: "Data Exfiltration",
    description:
      "Simulate sensitive data extraction using various protocols and techniques to test DLP controls.",
  },
];

export const methodology = [
  {
    phase: "01",
    title: "Reconnaissance & Planning",
    description:
      "Open-source intelligence gathering, threat modeling, and objective definition based on your specific threat landscape.",
    icon: Eye,
  },
  {
    phase: "02",
    title: "Weaponization & Delivery",
    description:
      "Custom payload development, phishing infrastructure setup, and physical access preparation.",
    icon: Skull,
  },
  {
    phase: "03",
    title: "Initial Access & Persistence",
    description:
      "Execute delivery methods, establish foothold, and maintain access across the target environment.",
    icon: Zap,
  },
  {
    phase: "04",
    title: "Objective Execution",
    description:
      "Achieve predefined goals (data exfiltration, system compromise, etc.) while evading detection.",
    icon: Target,
  },
  {
    phase: "05",
    title: "Reporting & Purple Team",
    description:
      "Detailed after-action report, detection gap analysis, and collaborative purple team workshops.",
    icon: BarChart3,
  },
];

export const stats = [
  { value: "100%", label: "Clients with Detection Gaps" },
  { value: "14+", label: "Days Average Engagement" },
  { value: "0", label: "Production Disruptions" },
  { value: "100+", label: "TTPs in Our Arsenal" },
];

export const engagementTypes = [
  {
    title: "Targeted Attack Simulation",
    description:
      "Focused campaign against specific high-value assets or departments.",
    features: [
      "Goal-oriented objectives",
      "Stealth-focused approach",
      "Custom threat emulation",
    ],
  },
  {
    title: "Full-Scope Operation",
    description:
      "Comprehensive assessment covering all attack surfaces and objectives.",
    features: [
      "No-holds-barred approach",
      "Physical + digital vectors",
      "Blind to blue team",
    ],
  },
  {
    title: "Purple Team Engagement",
    description:
      "Collaborative exercise combining red and blue teams for maximum learning.",
    features: [
      "Real-time feedback",
      "Detection validation",
      "Knowledge transfer",
    ],
  },
];

export const features = [
  {
    icon: Users,
    title: "Expert Operators",
    description:
      "Seasoned red team professionals with diverse backgrounds and real-world experience",
  },
  {
    icon: Radar,
    title: "Stealth Operations",
    description: "Stealth-focused approach to avoid premature detection",
  },
  {
    icon: ShieldOff,
    title: "Control Bypass Expertise",
    description:
      "Deep knowledge of bypassing EDR, AV, and other security controls",
  },
  {
    icon: Building2,
    title: "Access to Realistic Infrastructure",
    description:
      "Access to realistic test environments that mirror production systems.",
  },
  {
    icon: Wifi,
    title: "Network Exploitation",
    description:
      "Exploiting network vulnerabilities and misconfigurations to gain unauthorized access.",
  },
  {
    icon: Phone,
    title: "Social Engineering",
    description: "Vishing, SMiShing, and pretexting expertise",
  },
];
