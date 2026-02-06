import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Briefcase,
  Brain,
  Award,
  Check,
  ArrowRight,
  Upload,
  Calendar,
  Wallet,
} from "lucide-react";

import { Metadata } from "next";
import Link from "next/link";
import { hiringProcess, Job, perks } from "@/data/career.data";

export const metadata: Metadata = {
  title: "Career | Cynical Blogs",
  description:
    "Explore exciting career opportunities at Cynical. Join our team of cybersecurity experts.",
};

const Careers = () => {
  const jobOpenings: Job[] = [];

  return (
    <div>
      <section className="pt-6 pb-6 lg:pb-12 md:py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8">
              <Users className="w-4 h-4 text-foreground" />
              <span className="text-sm font-medium">Join Our Team</span>
            </div>

            <h1 className="mb-6 text-[2.7rem] capitalize font-aeonik font-bold text-foreground leading-none md:leading-tight xl:leading-20 lg:text-6xl xl:text-7xl -tracking-[1%] text-balance">
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
                          {job.requirements.map((req, idx) => (
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
                          {job.benefits.map((benefit, idx) => (
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
                        {job.tools.map((tool, idx) => (
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
