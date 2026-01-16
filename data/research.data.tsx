/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FileText,
  AlertTriangle,
  Shield,
  Bug,
  Lock,
  Database,
} from "lucide-react";

export type ResearchItem = {
  type: string;
  date: string;
  title: string;
  description: string;
  link: string;
  slug: string;
  icon: any;
  severity: string;
};

export const researchItems: ResearchItem[] = [
  {
    type: "Vulnerability Disclosure",
    date: "January 2026",
    title: "SQL Injection in Enterprise ERP Systems",
    description:
      "Critical vulnerability affecting major ERP platforms allowing unauthorized database access through crafted input parameters.",
    link: "/research",
    slug: "sql-injection-erp",
    icon: Database,
    severity: "Critical",
  },
  {
    type: "CVE",
    date: "December 2025",
    title: "Authentication Bypass in OAuth 2.0 Implementations",
    description:
      "Discovered a widespread vulnerability in OAuth 2.0 implementations that allows attackers to bypass authentication.",
    link: "/research",
    slug: "oauth-bypass",
    icon: Lock,
    severity: "High",
  },
  {
    type: "Research Paper",
    date: "November 2025",
    title: "State of API Security in Financial Services",
    description:
      "Comprehensive analysis of API security practices across 200+ financial institutions reveals critical gaps.",
    link: "/research",
    slug: "api-security-finance",
    icon: Shield,
    severity: "Report",
  },
  {
    type: "Vulnerability Disclosure",
    date: "October 2025",
    title: "Remote Code Execution in Container Orchestration",
    description:
      "Critical RCE vulnerability in popular container orchestration platforms affecting cloud deployments.",
    link: "/research",
    slug: "container-rce",
    icon: Bug,
    severity: "Critical",
  },
  {
    type: "Research Paper",
    date: "September 2025",
    title: "Machine Learning Model Poisoning Attacks",
    description:
      "Novel attack vectors for poisoning ML models in production environments and defense strategies.",
    link: "/research",
    slug: "ml-poisoning",
    icon: AlertTriangle,
    severity: "Report",
  },
  {
    type: "CVE",
    date: "August 2025",
    title: "Cross-Site Scripting in Enterprise CMS",
    description:
      "Stored XSS vulnerability affecting multiple enterprise content management systems.",
    link: "/research",
    slug: "cms-xss",
    icon: FileText,
    severity: "Medium",
  },
];

export const research = [
  {
    type: "CVE",
    title: "SQL Injection in Fortune 500 ERP Systems",
    description:
      "Pre-auth SQL injection affecting 3 major ERP vendors. Full database access without credentials.",
    date: "2026",
    link: "/research/sql-injection-erp",
  },
  {
    type: "Advisory",
    title: "CVE-2024-XXXXX: Auth Bypass in Enterprise SSO",
    description:
      "SAML signature validation flaw allowing complete authentication bypass in widely-deployed SSO solution.",
    date: "2024",
    link: "#",
  },
  {
    type: "Report",
    title: "API Security: 500 Enterprise Assessments Analyzed",
    description:
      "73% of tested APIs had broken object-level authorization. Data from real penetration tests, not surveys.",
    date: "2024",
    link: "#",
  },
];
