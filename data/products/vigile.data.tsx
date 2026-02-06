import {
  Activity,
  AlertTriangle,
  BarChart3,
  Clock,
  Database,
  FileText,
  FileWarning,
  Globe,
  Link2,
  Lock,
  LogIn,
  ShieldAlert,
  ShieldPlus,
  Type,
  Users,
} from "lucide-react";

export const stats = [
  { value: "250B+", label: "Breach Records Indexed", icon: Database },
  { value: "24/7", label: "Real-time Monitoring", icon: Activity },
  { value: "<5min", label: "Alert Response Time", icon: Clock },
  { value: "99.9%", label: "Detection Accuracy", icon: ShieldPlus },
];

export const outlookFeatures = [
  {
    icon: Users,
    title: "Employee Records",
    description:
      "Automatically fetch and sync all employee data from your Office365 directory",
  },
  {
    icon: LogIn,
    title: "Sign-in Logs",
    description:
      "Monitor authentication events and detect suspicious login patterns",
  },
  {
    icon: ShieldAlert,
    title: "Risk Users",
    description:
      "Identify high-risk users based on breach exposure and activity analysis",
  },
  {
    icon: Activity,
    title: "Activity Correlation",
    description:
      "Cross-reference user activities with our breach intelligence database",
  },
];

export const platformModules = [
  {
    icon: Database,
    title: "Breached Data",
    description:
      "Continuously monitor and centralize breach intelligence related to your organization. Instantly access exposed emails, passwords, and credential dumps with AI-curated insights to prioritize remediation. Stay informed in real time and export data for deeper analysis.",
  },
  {
    icon: Users,
    title: "Employee Exposure",
    description:
      "Gain complete visibility into compromised employee credentials. Our AI monitors breaches 24/7 and evaluates severity, breach frequency, and source to help your security team proactively manage insider risk and enforce mitigation policies.",
  },
  {
    icon: FileWarning,
    title: "Malware Logs & Credential Dumps",
    description:
      "Detect and analyze system-level breach activity through advanced AI-driven parsing of malware logs. Access sensitive file dumps such as passwords.txt and system.txt that indicate compromise through malicious programs.",
  },
  {
    icon: Globe,
    title: "Breached Subdomains",
    description:
      "Automatically identify and monitor breached subdomains associated with your organization's root domain. Surface breach count, severity, and breach vectors for each subdomain to pinpoint infrastructure vulnerabilities.",
  },
  {
    icon: AlertTriangle,
    title: "Breach Management & Response",
    description:
      "Take full control of your organization's breach lifecycle with intelligent case management. Create tickets for exposed users, assign severity levels, and document mitigation steps with AI-assisted prioritization.",
  },
  {
    icon: Type,
    title: "Typesquat Domains",
    description:
      "Detect and monitor typesquat domains designed to impersonate your brand. Our AI continuously scans domain registrations and DNS data to surface suspicious variations before they impact users.",
  },
];

export const breachMetrics = [
  { label: "Breached Data", value: "572", trend: "+12% this month" },
  { label: "Breached Employees", value: "72", trend: "+8% this month" },
  { label: "Malware Breaches", value: "60", trend: "+15% this month" },
  { label: "Breached Subdomain", value: "25", trend: "+5% this month" },
];

export const useCases = [
  {
    title: "Credential Theft Prevention",
    description:
      "Detect when employee credentials appear in breaches before attackers can use them for account takeover.",
    icon: Lock,
  },
  {
    title: "Brand Protection",
    description:
      "Identify typosquat domains and impersonation attempts that could be used for phishing campaigns.",
    icon: ShieldPlus,
  },
  {
    title: "Compliance Reporting",
    description:
      "Generate audit-ready reports on your organization's breach exposure for regulatory requirements.",
    icon: FileText,
  },
  {
    title: "Insider Risk Management",
    description:
      "Monitor for employee credentials in underground markets to prevent unauthorized access.",
    icon: Users,
  },
  {
    title: "M&A Due Diligence",
    description:
      "Assess the breach exposure of acquisition targets before finalizing deals.",
    icon: BarChart3,
  },
  {
    title: "Supply Chain Security",
    description:
      "Monitor third-party vendors and partners for credential exposures that could impact your organization.",
    icon: Link2,
  },
];
