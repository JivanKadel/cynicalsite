import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Users,
  Briefcase,
  Heart,
  Brain,
  Award,
  Coffee,
  Home,
  Plane,
  Check,
  ArrowRight,
  Upload,
  Calendar,
  Wallet,
} from "lucide-react";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Career | Cynical Blogs",
  description:
    "Explore exciting career opportunities at Cynical. Join our team of cybersecurity experts.",
};

const Careers = () => {
  // const jobOpenings = [
  //   {
  //     id: "java-dev-001",
  //     title: "Senior Java Developer",
  //     department: "Engineering",
  //     location: "OnSite / Maitidevi, Kathmandu",
  //     type: "Full-time",
  //     experience: "5+ years",
  //     salary: "120k - 180k NPR",
  //     tools: [
  //       "Java",
  //       "Spring Boot",
  //       "Microservices",
  //       "AWS",
  //       "Kubernetes",
  //       "PostgreSQL",
  //     ],
  //     description:
  //       "We're looking for an experienced Java developer to join our security platform team. You'll build scalable backend services for our threat detection and incident response platforms.",
  //     requirements: [
  //       "5+ years of Java development experience",
  //       "Strong understanding of microservices architecture",
  //       "Experience with cloud platforms (AWS/GCP/Azure)",
  //       "Knowledge of security best practices",
  //       "Excellent problem-solving skills",
  //     ],
  //     benefits: [
  //       "Health insurance",
  //       "401k matching",
  //       "Stock options",
  //       "Flexible hours",
  //     ],
  //     posted: "2026-01-10",
  //     expires: "2026-02-15",
  //     urgent: true,
  //   },
  //   {
  //     id: "security-intern-002",
  //     title: "Cybersecurity Intern",
  //     department: "Security Operations",
  //     location: "OnSite / Maitidevi, Kathmandu",
  //     type: "Internship",
  //     experience: "0-2 years",
  //     salary: "5000 - 10000 NPR",
  //     tools: [
  //       "Python",
  //       "SIEM",
  //       "Wireshark",
  //       "Nmap",
  //       "Metasploit",
  //       "Kali Linux",
  //     ],
  //     description:
  //       "Great opportunity for students or recent graduates to gain hands-on experience in cybersecurity. Work alongside our elite security team on real-world projects.",
  //     requirements: [
  //       "Pursuing degree in Cybersecurity, Computer Science, or related field",
  //       "Basic understanding of networking and security concepts",
  //       "Eagerness to learn and strong work ethic",
  //       "Available for 3-6 months",
  //       "Excellent communication skills",
  //     ],
  //     benefits: [
  //       "Mentorship",
  //       "Learning stipend",
  //       "Flexible schedule",
  //       "Remote work",
  //     ],
  //     posted: "2026-01-08",
  //     expires: "2026-02-28",
  //     urgent: false,
  //   },
  //   {
  //     id: "threat-analyst-003",
  //     title: "Threat Intelligence Analyst",
  //     department: "Threat Intelligence",
  //     location: "OnSite / Maitidevi, Kathmandu",
  //     type: "Full-time",
  //     experience: "3+ years",
  //     salary: "95k - 130k NPR",
  //     tools: [
  //       "Python",
  //       "SIEM",
  //       "Threat Intelligence Platforms",
  //       "STIX/TAXII",
  //       "Splunk",
  //       "ELK",
  //     ],
  //     description:
  //       "Analyze threat actor activities, produce intelligence reports, and support our global threat hunting operations. Work with cutting-edge threat intelligence tools.",
  //     requirements: [
  //       "3+ years in threat intelligence or related field",
  //       "Understanding of threat actor TTPs and MITRE ATT&CK",
  //       "Experience with threat intelligence platforms",
  //       "Strong analytical and report writing skills",
  //       "Security clearance preferred",
  //     ],
  //     benefits: [
  //       "Security clearance sponsorship",
  //       "Training budget",
  //       "Conference attendance",
  //       "Remote work",
  //     ],
  //     posted: "2026-01-05",
  //     expires: "2026-02-20",
  //     urgent: false,
  //   },
  //   {
  //     id: "devops-eng-004",
  //     title: "DevOps Engineer",
  //     department: "Infrastructure",
  //     location: "OnSite / Maitidevi, Kathmandu",
  //     type: "Full-time",
  //     experience: "4+ years",
  //     salary: "110k - 150k NPR",
  //     tools: [
  //       "Docker",
  //       "Kubernetes",
  //       "Terraform",
  //       "Jenkins",
  //       "AWS",
  //       "Prometheus",
  //     ],
  //     description:
  //       "Build and maintain secure, scalable infrastructure for our security platforms. Implement DevSecOps practices and automate security controls.",
  //     requirements: [
  //       "4+ years of DevOps experience",
  //       "Strong Kubernetes and containerization skills",
  //       "Infrastructure as Code experience (Terraform/CloudFormation)",
  //       "CI/CD pipeline development",
  //       "Security-first mindset",
  //     ],
  //     benefits: [
  //       "Health insurance",
  //       "Stock options",
  //       "Professional development",
  //       "Gym membership",
  //     ],
  //     posted: "2026-01-12",
  //     expires: "2026-02-29",
  //     urgent: true,
  //   },
  // ];

  const jobOpenings: any[] = [];
  const perks = [
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

  const hiringProcess = [
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

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-6 pb-12 lg:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-foreground/3 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8">
              <Users className="w-4 h-4 text-foreground" />
              <span className="text-sm font-medium">Join Our Team</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
              Build your career in
              <span className="block text-muted-foreground">cybersecurity</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-10 leading-relaxed">
              Join our elite team of security professionals working to protect
              organizations worldwide. We&apos;re always looking for talented
              individuals passionate about cybersecurity.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="#current-openings">
                <Button
                  size="lg"
                  className="bg-foreground text-background hover:bg-foreground/90"
                >
                  View Openings
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href="mailto:hr@cynicaltechnology.com">
                <Button size="lg" variant="outline">
                  Submit CV
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Perks & Benefits Section */}
      <section className="py-20 lg:py-32 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
              Perks & Benefits
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Why work at Cynical?
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              We believe in taking care of our team so they can focus on
              protecting our clients. Comprehensive benefits designed for your
              success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, index) => (
              <Card
                key={index}
                className="border-border bg-background hover:border-foreground/20 transition-colors"
              >
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                    <perk.icon className="w-5 h-5 text-foreground/80" />
                  </div>
                  <CardTitle className="text-xl">{perk.title}</CardTitle>
                  <CardDescription>{perk.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {perk.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="w-3 h-3 text-foreground/60 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
              Hiring Process
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl  font-bold tracking-tight mb-6">
              Your journey to Cynical
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Transparent and efficient hiring process designed to find the best
              talent while respecting your time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hiringProcess.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card">
                  <div className="w-12 h-12 rounded-xl bg-foreground text-background flex items-center justify-center shrink-0 font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground font-body text-sm mb-3">
                      {step.description}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {step.duration}
                    </Badge>
                  </div>
                </div>

                {index < hiringProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-20 lg:py-32 bg-secondary/20" id="current-openings">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Current openings
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              {jobOpenings.length > 0
                ? "Join our growing team and make an impact in cybersecurity"
                : "No current openings, but we're always looking for great talent"}
            </p>
          </div>

          {jobOpenings.length > 0 ? (
            <div className="space-y-6 max-w-4xl mx-auto">
              {jobOpenings.map((job) => (
                <Card
                  key={job.id}
                  className="border-border bg-background hover:border-foreground/20 transition-colors"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-xl">{job.title}</CardTitle>
                          {job.urgent && (
                            <Badge variant="destructive" className="text-xs">
                              Urgent
                            </Badge>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="secondary">{job.department}</Badge>
                          <Badge variant="secondary">{job.type}</Badge>
                          <Badge variant="secondary">{job.location}</Badge>
                        </div>
                        <CardDescription>{job.description}</CardDescription>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div>Apply before</div>
                        <div className="font-medium">
                          {new Date(job.expires).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Requirements</h4>
                        <ul className="space-y-1">
                          {job.requirements.map((req: any, idx: any) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <Check className="w-3 h-3 text-foreground/60 shrink-0 mt-0.5" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Benefits</h4>
                        <ul className="space-y-1">
                          {job.benefits.map((benefit: any, idx: any) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <Check className="w-3 h-3 text-foreground/60 shrink-0 mt-0.5" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">
                        Tools & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {job.tools.map((tool: any, idx: any) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="text-xs"
                          >
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.experience}
                        </div>
                        <div className="flex items-center gap-1">
                          <Wallet className="w-4 h-4" />
                          {job.salary}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Posted {new Date(job.posted).toLocaleDateString()}
                        </div>
                      </div>

                      <Button>
                        Apply Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center max-w-2xl mx-auto">
              <Card className="border-border bg-background">
                <CardContent className="p-12">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                    <Briefcase className="w-8 h-8 text-foreground/60" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    No Current Openings
                  </h3>
                  <p className="text-muted-foreground font-body mb-8">
                    We&apos;re not actively hiring right now, but we&apos;re
                    always interested in connecting with talented cybersecurity
                    professionals. Submit your CV and we&apos;ll reach out when
                    suitable opportunities arise.
                  </p>
                  <a href="mailto:hr@cynicaltechnology.com">
                    <Button size="lg">
                      Submit Your CV
                      <Upload className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                  {/* <Button>
                    Submit Your CV
                  </Button> */}
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 lg:py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl  font-bold tracking-tight mb-6">
              Life at Cynical
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Get a glimpse into our culture, team events, and what makes
              Cynical a great place to work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-border bg-background">
              <CardContent className="p-6">
                <div className="aspect-video rounded-lg bg-linear-to-br from-secondary to-background border border-border mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-foreground/60" />
                </div>
                <h3 className="font-semibold mb-2">Team Retreats</h3>
                <p className="text-sm text-muted-foreground">
                  Occasional team retreats in exciting locations
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-background">
              <CardContent className="p-6">
                <div className="aspect-video rounded-lg bg-linear-to-br from-secondary to-background border border-border mb-4 flex items-center justify-center">
                  <Brain className="w-12 h-12 text-foreground/60" />
                </div>
                <h3 className="font-semibold mb-2">Learning Culture</h3>
                <p className="text-sm text-muted-foreground">
                  Regular events, workshops, and sessions
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-background">
              <CardContent className="p-6">
                <div className="aspect-video rounded-lg bg-linear-to-br from-secondary to-background border border-border mb-4 flex items-center justify-center">
                  <Award className="w-12 h-12 text-foreground/60" />
                </div>
                <h3 className="font-semibold mb-2">Recognition</h3>
                <p className="text-sm text-muted-foreground">
                  Recognition of achievements and contributions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl  font-bold tracking-tight mb-6">
              Questions about careers at Cynical?
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
              Reach out to our talent acquisition team for any questions about
              opportunities, culture, or the application process.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:hr@cynicaltechnology.com">
                <Button
                  size="lg"
                  className="bg-foreground text-background hover:bg-foreground/90"
                >
                  Contact HR
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <Link href={"/company"}>
                <Button size="lg" variant="outline">
                  About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
