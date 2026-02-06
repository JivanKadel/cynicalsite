import {
  Activity,
  AlertTriangle,
  BarChart3,
  CheckCircle,
  Clock,
  Globe,
  Phone,
  RefreshCw,
  Search,
  Settings,
  Shield,
  Target,
  Users,
  Zap,
} from "lucide-react";

export const capabilities = [
  {
    icon: Phone,
    title: "24/7 Emergency Response",
    description:
      "Immediate incident response with sub-15 minute response times, dedicated incident managers, and global response teams.",
  },
  {
    icon: Activity,
    title: "Digital Forensics",
    description:
      "Comprehensive digital forensics and evidence preservation including malware analysis, network forensics, and mobile device analysis.",
  },
  {
    icon: Shield,
    title: "Containment & Eradication",
    description:
      "Rapid threat containment, network isolation, malicious code removal, and attacker eviction with minimal business impact.",
  },
  {
    icon: Search,
    title: "Threat Attribution",
    description:
      "Advanced threat hunting and attribution analysis to identify threat actors, attack vectors, and campaign objectives.",
  },
  {
    icon: BarChart3,
    title: "Recovery & Remediation",
    description:
      "Systematic recovery planning, system restoration, vulnerability patching, and security control implementation.",
  },
  {
    icon: Users,
    title: "Crisis Management",
    description:
      "Executive briefing, stakeholder communication, legal coordination, and regulatory compliance support.",
  },
];

export const methodology = [
  {
    phase: "01",
    title: "Preparation & Planning",
    description:
      "Incident response plan development, team training, tabletop exercises, and response capability assessment.",
    icon: Settings,
  },
  {
    phase: "02",
    title: "Detection & Analysis",
    description:
      "Threat detection, incident classification, scope assessment, and initial response coordination.",
    icon: AlertTriangle,
  },
  {
    phase: "03",
    title: "Containment & Eradication",
    description:
      "Threat containment, evidence preservation, attacker removal, and vulnerability remediation.",
    icon: Target,
  },
  {
    phase: "04",
    title: "Recovery & Lessons Learned",
    description:
      "System restoration, security improvements, post-incident analysis, and response plan updates.",
    icon: CheckCircle,
  },
];

export const stats = [
  { value: "<15min", label: "Average Response Time" },
  { value: "1,200+", label: "Incidents Handled" },
  { value: "98%", label: "Successful Containment" },
  { value: "24/7", label: "Global Response Team" },
];

export const responsePhases = [
  {
    title: "Immediate Response",
    description:
      "Emergency containment and initial assessment within the first critical hours of an incident.",
    features: [
      "Sub-15 minute response SLA",
      "Emergency containment procedures",
      "Initial threat assessment",
      "Evidence preservation",
    ],
  },
  {
    title: "Investigation Phase",
    description:
      "Comprehensive forensic analysis and threat hunting to understand the full scope of the incident.",
    features: [
      "Digital forensics analysis",
      "Network traffic analysis",
      "Malware reverse engineering",
      "Timeline reconstruction",
    ],
  },
  {
    title: "Recovery Operations",
    description:
      "Systematic recovery with security improvements and long-term resilience building.",
    features: [
      "Secure system restoration",
      "Vulnerability remediation",
      "Security control enhancement",
      "Monitoring implementation",
    ],
  },
];

export const features = [
  {
    icon: Zap,
    title: "Lightning Fast Response",
    description: "Sub-15 minute response times for critical incidents",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Response teams across Americas, EMEA, and APAC",
  },
  {
    icon: RefreshCw,
    title: "Continuous Monitoring",
    description: "24/7 threat monitoring and detection",
  },
  {
    icon: Clock,
    title: "Rapid Deployment",
    description: "On-site deployment within 4 hours",
  },
  {
    icon: Users,
    title: "Elite Responders",
    description: "Former law enforcement and military cyber experts",
  },
  {
    icon: Shield,
    title: "Court-Ready Evidence",
    description: "Forensically sound evidence collection",
  },
];

export const incidentTypes = [
  "Ransomware Attacks",
  "Data Breaches & Exfiltration",
  "Business Email Compromise",
  "Advanced Persistent Threats",
  "Insider Threats",
  "Supply Chain Compromises",
  "Zero-Day Exploits",
  "Cryptocurrency Theft",
  "Mobile & IoT Incidents",
  "Cloud Security Incidents",
];
