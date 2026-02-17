import {
  AlertTriangle,
  BarChart3,
  Brain,
  Cpu,
  Database,
  Eye,
  FileJson,
  GitBranch,
  Layers,
  Lock,
  Network,
  Scan,
  Shield,
  ShieldAlert,
  Users,
  Workflow,
} from "lucide-react";

export const capabilities = [
  {
    icon: Brain,
    title: "Model Extraction Testing",
    description:
      "Assess susceptibility to model stealing attacks through API enumeration, side-channel analysis, and distillation techniques.",
  },
  {
    icon: Database,
    title: "Training Data Security",
    description:
      "Evaluate data leakage risks, poisoning vulnerabilities, and privacy violations in your training datasets.",
  },
  {
    icon: Network,
    title: "Adversarial Attack Simulation",
    description:
      "Test model robustness against evasion attacks, perturbation techniques, and adversarial examples.",
  },
  {
    icon: FileJson,
    title: "ML Pipeline Security",
    description:
      "Comprehensive review of ML Ops pipelines, including CI/CD for models, feature stores, and experiment tracking systems.",
  },
  {
    icon: GitBranch,
    title: "Model Registry & Versioning",
    description:
      "Assess security controls around model registries, versioning systems, and model deployment artifacts.",
  },
  {
    icon: ShieldAlert,
    title: "Inference API Security",
    description:
      "Test model endpoints for information disclosure, rate limiting bypass, and denial-of-service vulnerabilities.",
  },
];

export const methodology = [
  {
    phase: "01",
    title: "AI Asset Discovery",
    description:
      "Identify all ML models, training pipelines, data stores, and inference endpoints across your organization.",
    icon: Scan,
  },
  {
    phase: "02",
    title: "Threat Modeling",
    description:
      "Map potential attack vectors using MITRE ATLAS framework, considering data, model, and infrastructure layers.",
    icon: Eye,
  },
  {
    phase: "03",
    title: "Adversarial Testing",
    description:
      "Simulate real-world attacks including model inversion, poisoning, and evasion techniques.",
    icon: AlertTriangle,
  },
  {
    phase: "04",
    title: "Remediation & Hardening",
    description:
      "Provide model-specific defenses, adversarial training techniques, and architectural improvements.",
    icon: BarChart3,
  },
];

export const stats = [
  { value: "500+", label: "AI Models Assessed" },
  { value: "85%", label: "Models Vulnerable to Extraction" },
  { value: "100%", label: "OWASP ML Top 10 Coverage" },
  { value: "<2wks", label: "Typical Assessment Timeline" },
];

export const threatTypes = [
  {
    title: "Data Poisoning",
    description:
      "Attackers manipulate training data to corrupt model behavior or introduce backdoors.",
    features: [
      "Label flipping attacks",
      "Trigger-based backdoors",
      "Training data injection",
    ],
  },
  {
    title: "Model Inversion",
    description:
      "Reconstruct sensitive training data by exploiting model predictions and confidence scores.",
    features: [
      "Membership inference",
      "Attribute inference",
      "Training data extraction",
    ],
  },
  {
    title: "Evasion Attacks",
    description:
      "Craft adversarial inputs that cause misclassification while appearing normal to humans.",
    features: [
      "Adversarial perturbations",
      "Physical-world attacks",
      "Black-box evasion",
    ],
  },
];

export const features = [
  {
    icon: Cpu,
    title: "Framework Agnostic",
    description: "TensorFlow, PyTorch, scikit-learn, and custom models",
  },
  {
    icon: Layers,
    title: "Full Stack Coverage",
    description: "Data, models, pipelines, and infrastructure",
  },
  {
    icon: Workflow,
    title: "ML Ops Integration",
    description: "Secure your entire ML development lifecycle",
  },
  {
    icon: Users,
    title: "Data Science Expertise",
    description: "Assessments by ML engineers and security researchers",
  },
  {
    icon: Lock,
    title: "Privacy Preserving",
    description: "Differential privacy and federated learning assessments",
  },
  {
    icon: Shield,
    title: "Compliance Ready",
    description: "GDPR, CCPA, and AI regulatory compliance",
  },
];
