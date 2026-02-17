import {
  BookOpen,
  Briefcase,
  Code,
  Eye,
  FileCode,
  Globe,
  Laptop,
  MessageSquare,
  Shield,
  ShieldAlert,
  Terminal,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export const capabilities = [
  {
    icon: Terminal,
    title: "Offensive Security Training",
    description:
      "Hands-on courses in penetration testing, red teaming, exploit development, and adversary simulation for security professionals.",
  },
  {
    icon: Shield,
    title: "Defensive Security Training",
    description:
      "Blue team courses covering threat hunting, incident response, SIEM mastery, and detection engineering.",
  },
  {
    icon: Code,
    title: "Developer Security Training",
    description:
      "Secure coding practices, threat modeling for developers, and DevSecOps pipeline implementation.",
  },
  {
    icon: Briefcase,
    title: "Executive & Board Advisory",
    description:
      "Strategic consulting for leadership: risk management, security program development, and regulatory compliance.",
  },
  {
    icon: Users,
    title: "Team Augmentation",
    description:
      "Embed our experts into your team for specific initiatives, architecture reviews, or incident response support.",
  },
  {
    icon: TrendingUp,
    title: "Maturity Assessments",
    description:
      "Comprehensive evaluation of your security program against NIST CSF, CIS Controls, and industry benchmarks.",
  },
];

export const methodology = [
  {
    phase: "01",
    title: "Needs Assessment",
    description:
      "Deep-dive consultation to understand your team's skill gaps, strategic objectives, and threat landscape.",
    icon: Eye,
  },
  {
    phase: "02",
    title: "Curriculum Development",
    description:
      "Custom course material creation or adaptation based on your specific technologies and use cases.",
    icon: BookOpen,
  },
  {
    phase: "03",
    title: "Hands-On Delivery",
    description:
      "Interactive sessions with real-world scenarios, labs, and immediate feedback from practitioners.",
    icon: Laptop,
  },
  {
    phase: "04",
    title: "Ongoing Support",
    description:
      "Post-training materials, follow-up sessions, and continued access to our expert community.",
    icon: MessageSquare,
  },
];

export const stats = [
  { value: "5,000+", label: "Professionals Trained" },
  { value: "250+", label: "Custom Courses Delivered" },
  { value: "98%", label: "Participant Satisfaction" },
  { value: "50+", label: "Fortune 500 Clients" },
];

export const courseTypes = [
  {
    title: "Offensive Security Track",
    description: "Master the tools and techniques of modern adversaries.",
    features: [
      "Advanced Penetration Testing",
      "Red Team Tradecraft",
      "Exploit Development",
      "Active Directory Attacks",
    ],
  },
  {
    title: "Defensive Security Track",
    description: "Build resilient defenses and response capabilities.",
    features: [
      "Incident Response & Forensics",
      "Threat Hunting",
      "Detection Engineering",
      "Cloud Security Defense",
    ],
  },
  {
    title: "Leadership & Strategy",
    description: "Translate technical risk into business context.",
    features: [
      "CISO Development",
      "Security Program Strategy",
      "Board Communication",
      "Regulatory Compliance",
    ],
  },
];

export const features = [
  {
    icon: Users,
    title: "Practitioner Instructors",
    description: "Active offensive and defensive security experts",
  },
  {
    icon: Laptop,
    title: "Real-World Labs",
    description: "Hands-on exercises with live environments",
  },
  {
    icon: FileCode,
    title: "Custom Curriculum",
    description: "Tailored to your tech stack and skill levels",
  },
  {
    icon: Zap,
    title: "Immediate Applicability",
    description: "Take skills back to work on day one",
  },
  {
    icon: Globe,
    title: "Global Delivery",
    description: "On-site, virtual, or hybrid formats",
  },
  {
    icon: ShieldAlert,
    title: "Both Sides of the Fence",
    description: "Learn offense to improve defense, and vice versa",
  },
];
