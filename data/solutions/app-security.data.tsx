import {
  AlertTriangle,
  BarChart3,
  Clock,
  Eye,
  FileCode,
  GitBranch,
  Globe,
  Layers,
  Lock,
  RefreshCw,
  Server,
  Shield,
  Smartphone,
  Target,
  Users,
  Zap,
} from "lucide-react";

export const capabilities = [
  {
    icon: Globe,
    title: "Web Application Testing",
    description:
      "Comprehensive OWASP Top 10 coverage with advanced testing methodologies for modern web frameworks including React, Angular, Vue, and server-side rendering.",
  },
  {
    icon: Server,
    title: "API Security Assessment",
    description:
      "REST, GraphQL, gRPC, and WebSocket API testing with authentication bypass, injection, and business logic vulnerability detection.",
  },
  {
    icon: Smartphone,
    title: "Mobile Application Security",
    description:
      "iOS and Android binary analysis, runtime manipulation, certificate pinning bypass, and secure storage validation.",
  },
  {
    icon: FileCode,
    title: "Source Code Review",
    description:
      "Manual and automated SAST integration with semantic code analysis for vulnerability detection at the earliest development stages.",
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipeline Security",
    description:
      "Security gate integration, dependency scanning, container image analysis, and infrastructure-as-code review.",
  },
  {
    icon: Lock,
    title: "Authentication & Authorization",
    description:
      "OAuth, SAML, JWT, and session management testing with privilege escalation and access control validation.",
  },
];

export const methodology = [
  {
    phase: "01",
    title: "Discovery & Reconnaissance",
    description:
      "Comprehensive asset mapping, technology fingerprinting, and attack surface enumeration using both automated tools and manual techniques.",
    icon: Eye,
  },
  {
    phase: "02",
    title: "Vulnerability Analysis",
    description:
      "Multi-layered testing combining automated scanners with expert manual analysis to identify both common and complex vulnerabilities.",
    icon: Target,
  },
  {
    phase: "03",
    title: "Exploitation & Validation",
    description:
      "Safe proof-of-concept development demonstrating real-world impact without disrupting production systems.",
    icon: AlertTriangle,
  },
  {
    phase: "04",
    title: "Reporting & Remediation",
    description:
      "Detailed technical reports with risk-prioritized findings, root cause analysis, and developer-friendly remediation guidance.",
    icon: BarChart3,
  },
];

export const stats = [
  { value: "50K+", label: "Vulnerabilities Discovered" },
  { value: "2,500+", label: "Applications Tested" },
  { value: "99.7%", label: "Client Retention Rate" },
  { value: "<24h", label: "Critical Alert Response" },
];

export const testingTypes = [
  {
    title: "Black Box Testing",
    description:
      "Simulates external attacker perspective with no prior knowledge of the application architecture.",
    features: [
      "Real-world attack simulation",
      "Zero internal access",
      "External threat modeling",
    ],
  },
  {
    title: "Gray Box Testing",
    description:
      "Balanced approach with partial knowledge, simulating an authenticated user or insider threat.",
    features: [
      "Authenticated testing",
      "Role-based access testing",
      "Business logic analysis",
    ],
  },
  {
    title: "White Box Testing",
    description:
      "Complete source code access for comprehensive security review and static analysis.",
    features: [
      "Source code review",
      "Architecture analysis",
      "Secure coding validation",
    ],
  },
];

export const features = [
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Begin testing within 48 hours of engagement",
  },
  {
    icon: Layers,
    title: "Full Stack Coverage",
    description: "Frontend, backend, APIs, and infrastructure",
  },
  {
    icon: RefreshCw,
    title: "Continuous Testing",
    description: "Integrate security into your SDLC",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock access to security experts",
  },
  {
    icon: Users,
    title: "Elite Researchers",
    description: "Top 1% of global security talent",
  },
  {
    icon: Shield,
    title: "Compliance Ready",
    description: "PCI DSS, SOC 2, HIPAA, GDPR",
  },
];
