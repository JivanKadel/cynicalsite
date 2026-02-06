import { Brain, Coffee, Wallet } from "lucide-react";

export type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  tools: string[];
  description: string;
  requirements: string[];
  benefits: string[];
  posted: string;
  expires: string;
  urgent: boolean;
};

export const jobOpenings: Job[] = [
  {
    id: "java-dev-001",
    title: "Senior Java Developer",
    department: "Engineering",
    location: "OnSite / Maitidevi, Kathmandu",
    type: "Full-time",
    experience: "5+ years",
    salary: "120k - 180k NPR",
    tools: [
      "Java",
      "Spring Boot",
      "Microservices",
      "AWS",
      "Kubernetes",
      "PostgreSQL",
    ],
    description:
      "We're looking for an experienced Java developer to join our security platform team. You'll build scalable backend services for our threat detection and incident response platforms.",
    requirements: [
      "5+ years of Java development experience",
      "Strong understanding of microservices architecture",
      "Experience with cloud platforms (AWS/GCP/Azure)",
      "Knowledge of security best practices",
      "Excellent problem-solving skills",
    ],
    benefits: [
      "Health insurance",
      "401k matching",
      "Stock options",
      "Flexible hours",
    ],
    posted: "2026-01-10",
    expires: "2026-02-15",
    urgent: true,
  },
  {
    id: "security-intern-002",
    title: "Cybersecurity Intern",
    department: "Security Operations",
    location: "OnSite / Maitidevi, Kathmandu",
    type: "Internship",
    experience: "0-2 years",
    salary: "5000 - 10000 NPR",
    tools: ["Python", "SIEM", "Wireshark", "Nmap", "Metasploit", "Kali Linux"],
    description:
      "Great opportunity for students or recent graduates to gain hands-on experience in cybersecurity. Work alongside our elite security team on real-world projects.",
    requirements: [
      "Pursuing degree in Cybersecurity, Computer Science, or related field",
      "Basic understanding of networking and security concepts",
      "Eagerness to learn and strong work ethic",
      "Available for 3-6 months",
      "Excellent communication skills",
    ],
    benefits: [
      "Mentorship",
      "Learning stipend",
      "Flexible schedule",
      "Remote work",
    ],
    posted: "2026-01-08",
    expires: "2026-02-28",
    urgent: false,
  },
  {
    id: "threat-analyst-003",
    title: "Threat Intelligence Analyst",
    department: "Threat Intelligence",
    location: "OnSite / Maitidevi, Kathmandu",
    type: "Full-time",
    experience: "3+ years",
    salary: "95k - 130k NPR",
    tools: [
      "Python",
      "SIEM",
      "Threat Intelligence Platforms",
      "STIX/TAXII",
      "Splunk",
      "ELK",
    ],
    description:
      "Analyze threat actor activities, produce intelligence reports, and support our global threat hunting operations. Work with cutting-edge threat intelligence tools.",
    requirements: [
      "3+ years in threat intelligence or related field",
      "Understanding of threat actor TTPs and MITRE ATT&CK",
      "Experience with threat intelligence platforms",
      "Strong analytical and report writing skills",
      "Security clearance preferred",
    ],
    benefits: [
      "Security clearance sponsorship",
      "Training budget",
      "Conference attendance",
      "Remote work",
    ],
    posted: "2026-01-05",
    expires: "2026-02-20",
    urgent: false,
  },
  {
    id: "devops-eng-004",
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "OnSite / Maitidevi, Kathmandu",
    type: "Full-time",
    experience: "4+ years",
    salary: "110k - 150k NPR",
    tools: [
      "Docker",
      "Kubernetes",
      "Terraform",
      "Jenkins",
      "AWS",
      "Prometheus",
    ],
    description:
      "Build and maintain secure, scalable infrastructure for our security platforms. Implement DevSecOps practices and automate security controls.",
    requirements: [
      "4+ years of DevOps experience",
      "Strong Kubernetes and containerization skills",
      "Infrastructure as Code experience (Terraform/CloudFormation)",
      "CI/CD pipeline development",
      "Security-first mindset",
    ],
    benefits: [
      "Health insurance",
      "Stock options",
      "Professional development",
      "Gym membership",
    ],
    posted: "2026-01-12",
    expires: "2026-02-29",
    urgent: true,
  },
];

export const perks = [
  {
    icon: Wallet,
    title: "Competitive Compensation",
    description: "Top-tier salaries, and performance bonuses",
    details: ["Competitive Salary", "Annual bonuses", "Referral bonuses"],
  },
  {
    icon: Brain,
    title: "Learning & Growth",
    description: "Continuous learning with generous education budgets",
    details: [
      "Trainings & certifications",
      "Conference attendance",
      "Events & workshops",
    ],
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Supportive culture that values your personal time",
    details: ["Team retreats", "Social events"],
  },
];

export const hiringProcess = [
  {
    step: "01",
    title: "Application Review",
    description: "Our team reviews your application and qualifications",
    duration: "2-3 days",
  },
  {
    step: "02",
    title: "Initial Screening",
    description: "30-minute call to discuss your background and interest",
    duration: "30 min",
  },
  {
    step: "03",
    title: "Technical Assessment",
    description: "Skills-based evaluation relevant to the role",
    duration: "1-2 hours",
  },
  {
    step: "04",
    title: "Team Interview",
    description: "Meet with potential teammates and leadership",
    duration: "1 hour",
  },
  {
    step: "05",
    title: "Final Interview",
    description: "Discussion with executive team about fit and vision",
    duration: "45 min",
  },
  {
    step: "06",
    title: "Offer & Onboarding",
    description: "Congratulations! Welcome to the Cynical team",
    duration: "1 week",
  },
];
