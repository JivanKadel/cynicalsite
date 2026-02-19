import {
  Activity,
  AlertTriangle,
  BarChart3,
  Bell,
  Clock,
  Eye,
  Globe,
  Search,
  Server,
  Shield,
  Zap,
  Lock,
} from "lucide-react";

export const stats = [
  { label: "Assets Monitored", value: "100+", icon: Globe },
  { label: "Uptime Check Frequency", value: "60s", icon: Clock },
  { label: "Incidents Detected", value: "1000+", icon: AlertTriangle },
  { label: "Government Domains", value: "200+", icon: Shield },
];

export const process = [
  {
    step: "01",
    title: "Create Monitor",
    description:
      "Set up monitors for your public assets with custom configurations",
    icon: Activity,
  },
  {
    step: "02",
    title: "Set Timer",
    description: "Configure check frequency - every minute for critical assets",
    icon: Clock,
  },
  {
    step: "03",
    title: "Keyword Detection",
    description: "Automated keyword scanning across all monitored assets",
    icon: Search,
  },
  {
    step: "04",
    title: "Incident Creation",
    description: "Automatic incident generation when issues are detected",
    icon: AlertTriangle,
  },
  {
    step: "05",
    title: "Instant Alerts",
    description: "Multi-channel notifications via Email & SMS",
    icon: Bell,
  },
];

export const features = [
  {
    title: "Per-Minute Monitoring",
    description:
      "Check every public asset every 60 seconds for maximum uptime assurance",
    icon: Zap,
  },
  {
    title: "Keyword-Based Detection",
    description:
      "Scan all assets for specific keywords and trigger incidents automatically",
    icon: Search,
  },
  {
    title: "Multi-Channel Alerts",
    description:
      "Instant notifications via Email and SMS for critical incidents",
    icon: Bell,
  },
  {
    title: "Asset Discovery",
    description:
      "Automatically discover and catalog all your public-facing assets",
    icon: Eye,
  },
  {
    title: "Incident Management",
    description: "Centralized incident tracking and resolution workflow",
    icon: AlertTriangle,
  },
  {
    title: "Government-Grade Security",
    description:
      "Built to meet the strict security requirements of government agencies",
    icon: Lock,
  },
  {
    title: "Real-time Dashboard",
    description:
      "Comprehensive visibility into all monitored assets and incidents",
    icon: BarChart3,
  },
  {
    title: "Historical Analytics",
    description: "Track uptime trends and incident patterns over time",
    icon: Activity,
  },
  {
    title: "Scalable Architecture",
    description:
      "Designed to monitor thousands of assets across large organizations",
    icon: Server,
  },
];

export const programTypes = [
  {
    title: "Essential",
    description: "For small teams starting with asset monitoring",
    features: [
      "Monitor up to 50 assets",
      "5-minute check intervals",
      "Email notifications",
      "Basic keyword monitoring",
      "7-day data retention",
    ],
    recommended: false,
  },
  {
    title: "Enterprise",
    description: "For large organizations with critical assets",
    features: [
      "Unlimited assets",
      "1-minute check intervals",
      "Email & SMS notifications",
      "Advanced keyword detection",
      "24/7 priority support",
      "Custom reporting",
      "SLA guarantee",
    ],
    recommended: true,
  },
  {
    title: "Government",
    description: "For public sector and government agencies",
    features: [
      "Everything in Enterprise",
      "FedRAMP compliant",
      "On-premise deployment",
      "Dedicated security team",
      "Custom integrations",
      "Unlimited data retention",
    ],
    recommended: false,
  },
];

export const incidentTypes = [
  { name: "Site Downtime", severity: "Critical" },
  { name: "Keyword Match - Sensitive Data", severity: "Critical" },
  { name: "SSL Certificate Expiry", severity: "High" },
  { name: "Content Defacement", severity: "Critical" },
  { name: "DNS Resolution Failure", severity: "High" },
  { name: "Unauthorized Content", severity: "Medium" },
  { name: "Slow Response Time", severity: "Medium" },
];
