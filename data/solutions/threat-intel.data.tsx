import {
  Activity,
  Brain,
  Crosshair,
  Filter,
  Network,
  Radar,
  Satellite,
  Search,
  Target,
  Zap as Lightning,
  Globe,
  RefreshCw,
  Clock,
  Users,
  Shield,
} from "lucide-react";

export const capabilities = [
  {
    icon: Radar,
    title: "Threat Hunting & Detection",
    description:
      "Proactive threat hunting using advanced analytics, behavioral analysis, and machine learning to identify sophisticated adversaries.",
  },
  {
    icon: Search,
    title: "Dark Web Monitoring",
    description:
      "Continuous monitoring of dark web forums, marketplaces, and criminal communities for leaked credentials, exploits, and threat actor activity.",
  },
  {
    icon: Activity,
    title: "IOC & IOA Intelligence",
    description:
      "Real-time collection and analysis of Indicators of Compromise (IOCs) and Indicators of Attack (IOAs) from global threat feeds.",
  },
  {
    icon: Brain,
    title: "Threat Actor Profiling",
    description:
      "Deep analysis of threat actor tactics, techniques, and procedures (TTPs) with attribution intelligence and campaign tracking.",
  },
  {
    icon: Network,
    title: "Malware Analysis",
    description:
      "Static and dynamic malware analysis in sandboxed environments with reverse engineering and behavioral pattern recognition.",
  },
  {
    icon: Target,
    title: "Geopolitical Intelligence",
    description:
      "Nation-state threat analysis, cyber warfare monitoring, and geopolitical risk assessment for strategic decision making.",
  },
];

export const methodology = [
  {
    phase: "01",
    title: "Data Collection & Aggregation",
    description:
      "Automated collection from 500+ threat feeds, honeypots, dark web sources, and proprietary intelligence networks.",
    icon: Satellite,
  },
  {
    phase: "02",
    title: "Analysis & Enrichment",
    description:
      "AI-powered analysis with human expert validation, context enrichment, and threat scoring using STIX/TAXII frameworks.",
    icon: Filter,
  },
  {
    phase: "03",
    title: "Intelligence Production",
    description:
      "Actionable intelligence reports, threat briefings, and customized alerts tailored to your industry and threat landscape.",
    icon: Crosshair,
  },
  {
    phase: "04",
    title: "Dissemination & Response",
    description:
      "Real-time integration with security tools, automated response playbooks, and strategic advisory services.",
    icon: Lightning,
  },
];

export const stats = [
  { value: "2M+", label: "Threat Indicators Tracked" },
  { value: "50K+", label: "Active Threat Actors" },
  { value: "150+", label: "Countries Monitored" },
  { value: "<5min", label: "Threat Alert Response" },
];

export const intelligenceTypes = [
  {
    title: "Strategic Intelligence",
    description:
      "High-level threat landscape analysis for executive decision-making and long-term security strategy.",
    features: [
      "Nation-state threat assessments",
      "Industry-specific threat reports",
      "Geopolitical risk analysis",
    ],
  },
  {
    title: "Tactical Intelligence",
    description:
      "Technical details about threat actor TTPs, malware families, and attack vectors for security teams.",
    features: [
      "IOC feeds and signatures",
      "Malware analysis reports",
      "Attack pattern documentation",
    ],
  },
  {
    title: "Operational Intelligence",
    description:
      "Real-time alerts and actionable intelligence for immediate threat response and mitigation.",
    features: [
      "Real-time threat alerts",
      "Automated IOC blocking",
      "Incident response support",
    ],
  },
];

export const features = [
  {
    icon: Lightning,
    title: "Real-time Processing",
    description: "Sub-second threat detection and alerting",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Monitoring across 150+ countries",
  },
  {
    icon: RefreshCw,
    title: "Continuous Updates",
    description: "24/7 threat feed updates and validation",
  },
  {
    icon: Clock,
    title: "24/7 Operations",
    description: "Round-the-clock threat monitoring center",
  },
  {
    icon: Users,
    title: "Expert Analysts",
    description: "Former government and military intelligence",
  },
  {
    icon: Shield,
    title: "Actionable Intelligence",
    description: "Ready-to-deploy IOCs and response actions",
  },
];

export const threatCategories = [
  "Advanced Persistent Threats (APTs)",
  "Ransomware & Extortion",
  "Financial Crime & Fraud",
  "Insider Threats",
  "Supply Chain Attacks",
  "Zero-Day Exploits",
  "Cryptocurrency Threats",
  "Mobile & IoT Threats",
  "Cloud-specific Threats",
  "Emerging Technologies",
];
