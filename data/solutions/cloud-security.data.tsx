import {
  AlertTriangle,
  BarChart3,
  Clock,
  Cloud,
  Database,
  Eye,
  Key,
  Layers,
  Network,
  RefreshCw,
  Settings,
  Shield,
  Target,
  Users,
  Zap,
} from "lucide-react";

export const capabilities = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure Assessment",
    description:
      "Comprehensive security evaluation of AWS, Azure, and GCP environments including IAM policies, network configurations, and storage security.",
  },
  {
    icon: Shield,
    title: "Container & Kubernetes Security",
    description:
      "Deep security analysis of Docker containers, Kubernetes clusters, and orchestration platforms with runtime protection and image scanning.",
  },
  {
    icon: Network,
    title: "Network Security Architecture",
    description:
      "VPC design review, security group analysis, network segmentation validation, and zero-trust architecture implementation.",
  },
  {
    icon: Key,
    title: "Identity & Access Management",
    description:
      "IAM policy review, privilege escalation detection, multi-factor authentication validation, and service account security.",
  },
  {
    icon: Database,
    title: "Data Protection & Encryption",
    description:
      "Data classification, encryption at rest and in transit, key management review, and data loss prevention strategy.",
  },
  {
    icon: Settings,
    title: "Compliance & Governance",
    description:
      "SOC 2, ISO 27001, PCI DSS assessments with automated compliance monitoring and reporting.",
  },
];

export const methodology = [
  {
    phase: "01",
    title: "Cloud Architecture Review",
    description:
      "Comprehensive analysis of your cloud infrastructure design, deployment patterns, and security architecture against industry best practices.",
    icon: Eye,
  },
  {
    phase: "02",
    title: "Configuration Analysis",
    description:
      "Automated and manual review of cloud service configurations, security policies, and access controls across all cloud providers.",
    icon: Target,
  },
  {
    phase: "03",
    title: "Threat Modeling",
    description:
      "Identify potential attack vectors, data flows, and trust boundaries specific to your cloud environment and business use cases.",
    icon: AlertTriangle,
  },
  {
    phase: "04",
    title: "Continuous Monitoring",
    description:
      "Implement security monitoring, anomaly detection, and automated alerting for ongoing cloud security posture management.",
    icon: BarChart3,
  },
];

export const stats = [
  { value: "50+", label: "Cloud Security Assessments Delivered" },
  { value: "70+", label: "Cloud Environments Reviewed" },
  { value: "800+", label: "Critical & High-Risk Cloud Findings Identified" },
  { value: "100%", label: "Findings Retested Before Closure" },
];

export const cloudProviders = [
  {
    title: "Amazon Web Services",
    description:
      "Comprehensive AWS security including IAM, EC2, S3, RDS, Lambda, and specialized services.",
    features: [
      "AWS Well-Architected Review",
      "IAM policy optimization",
      "S3 bucket security",
      "Lambda function analysis",
    ],
    logo: "/generic/aws_logo.svg",
  },
  {
    title: "Microsoft Azure",
    description:
      "Full Azure security assessment covering Active Directory, Key Vault, Storage, and App Services.",
    features: [
      "Azure Security Benchmark",
      "Conditional Access review",
      "Key Vault configuration",
      "Network security groups",
    ],
    logo: "/generic/azure_logo.svg",
  },
  {
    title: "Google Cloud Platform",
    description:
      "GCP security evaluation including IAM, Compute Engine, Cloud Storage, and BigQuery.",
    features: [
      "GCP CIS Benchmark",
      "IAM role analysis",
      "Cloud SQL security",
      "BigQuery data protection",
    ],
    logo: "/generic/google_cloud_logo.svg",
  },
];

export const features = [
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Start assessments within 24 hours of engagement",
  },
  {
    icon: Layers,
    title: "Multi-Cloud Support",
    description: "AWS, Azure, GCP expertise in one unified approach",
  },
  {
    icon: RefreshCw,
    title: "Continuous Assessment",
    description: "Real-time security posture monitoring",
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description: "Round-the-cloud security operations center",
  },
  {
    icon: Users,
    title: "Cloud Specialists",
    description: "Certified cloud security architects",
  },
  {
    icon: Shield,
    title: "Zero-Trust Ready",
    description: "Implement zero-trust security models",
  },
];

export const securityFrameworks = [
  "CSA Cloud Controls Matrix",
  "NIST Cybersecurity Framework",
  "ISO 27017/27018",
  "SOC 2 Type II",
  "PCI DSS Cloud Guidelines",
  "HIPAA Cloud Security",
];
