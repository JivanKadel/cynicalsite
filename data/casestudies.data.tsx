import {
  Building2,
  Cpu,
  HeartPulse,
  Landmark,
  Plane,
  ShoppingCart,
} from "lucide-react";

export const caseStudies = [
  {
    logo: <Landmark className="w-8 h-8" />,
    company: "Global Investment Bank",
    industry: "Financial Services",
    tags: ["Red Team", "API Security", "Compliance"],
    metrics: [
      { value: "47", label: "Critical Bugs found" },
      { value: "0", label: "Breaches since engagement" },
      { value: "4h", label: "Time to domain admin" },
    ],
    quote:
      "Their red team bypassed our entire security stack in 4 hours. Our MSSP never found these issues.",
    gradient: "from-violet-500/20 to-blue-500/10",
    link: "/case-studies/#global-investment-bank",
  },
  {
    logo: <ShoppingCart className="w-8 h-8" />,
    company: "Series E E-Commerce Platform",
    industry: "Retail Technology",
    tags: ["Bugv Platform", "Continuous Testing", "PCI DSS"],
    metrics: [
      { value: "23", label: "Auth bypasses found" },
      { value: "89%", label: "Faster than pen test" },
      { value: "$2.4M", label: "Breach cost avoided" },
    ],
    quote:
      "Bugv researchers found IDOR flaws affecting 4M customer records. Our annual pen test missed them.",
    gradient: "from-emerald-500/20 to-cyan-500/10",
    link: "/case-studies/#e-commerce-platform",
  },
  {
    logo: <Plane className="w-8 h-8" />,
    company: "National Airline Carrier",
    industry: "Aviation",
    tags: ["Vigile.AI", "Threat Intel", "Dark Web Monitoring"],
    metrics: [
      { value: "12K", label: "Shadow IT assets found" },
      { value: "340", label: "Leaked credentials" },
      { value: "72h", label: "To full remediation" },
    ],
    quote:
      "We had 12,000 internet-facing assets we didn't know existed. Vigile found them. So could attackers.",
    gradient: "from-orange-500/20 to-red-500/10",
    link: "/case-studies/#national-airline-carrier",
  },
  {
    logo: <HeartPulse className="w-8 h-8" />,
    company: "Healthcare Technology Provider",
    industry: "Healthcare",
    tags: ["HIPAA", "Cloud Security", "Application Testing"],
    metrics: [
      { value: "PHI", label: "Exposure prevented" },
      { value: "23", label: "Cloud misconfigs fixed" },
      { value: "100%", label: "HIPAA gaps closed" },
    ],
    quote:
      "They found a path to PHI access through our AWS environment. Previous auditors cleared us.",
    gradient: "from-pink-500/20 to-purple-500/10",
    link: "/case-studies/#healthcare-technology-provider",
  },
  {
    logo: <Cpu className="w-8 h-8" />,
    company: "AI Infrastructure Startup",
    industry: "Technology",
    tags: ["Source Code Review", "ML Security", "Red Team"],
    metrics: [
      { value: "3", label: "Model extraction paths" },
      { value: "15", label: "Pre-launch criticals" },
      { value: "SOC 2", label: "Ready in 6 weeks" },
    ],
    quote:
      "They extracted our proprietary model weights through the API. We fixed it before launch.",
    gradient: "from-blue-500/20 to-indigo-500/10",
    link: "/case-studies/#ai-infrastructure-startup",
  },
  {
    logo: <Building2 className="w-8 h-8" />,
    company: "Federal Government Agency",
    industry: "Public Sector",
    tags: ["Red Team", "Social Engineering", "Physical Security"],
    metrics: [
      { value: "Full", label: "Domain compromise" },
      { value: "4h", label: "Initial access time" },
      { value: "0", label: "SOC alerts triggered" },
    ],
    quote:
      "They achieved domain admin with zero detection. Our SOC was watching the wrong things.",
    gradient: "from-slate-500/20 to-gray-500/10",
    link: "/case-studies/#federal-government-agency",
  },
];
