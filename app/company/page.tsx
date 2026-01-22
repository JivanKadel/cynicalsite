import { TrustedByImage } from "@/components/home/TrustedByImage";
import PageCTA from "@/components/products/PageCTA";
import { Button } from "@/components/ui/button";
import { trustedByClipped } from "@/data/trustedby.data";
import {
  Users,
  Award,
  TrendingUp,
  Globe,
  Clock,
  Building,
  Target,
  Lightbulb,
  Heart,
  Zap,
  ArrowRight,
  Lock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function AboutUs() {
  const whyChooseItems = [
    {
      icon: Lock,
      title: "Elite Security Expertise",
      color: "text-foreground-500",
      description:
        "Top cybersecurity talent with proven and extensive experience in high-stakes environments.",
    },
    {
      icon: Users,
      title: "Client-First Approach",
      color: "text-green-500",
      description:
        "Dedicated security partners who understand your business and treat your security as our own.",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      color: "text-yellow-500",
      description:
        "1,200+ successful incident responses and 50,000+ vulnerabilities discovered across 100+ clients.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Innovation",
      color: "text-purple-500",
      description:
        "Continuous research and development driving next-generation security solutions.",
    },
    {
      icon: Globe,
      title: "Global Presence",
      color: "text-red-500",
      description:
        "24/7 operations across multiple continents with local expertise and global reach.",
    },
    {
      icon: Clock,
      title: "Rapid Response",
      color: "text-orange-500",
      description:
        "Rapid response with dedicated incident managers and emergency response teams.",
    },
  ];

  const awards = [
    {
      title: "Vulnerability Research Grant",
      organization: "Google",
      year: "2023",
      category: "Security Research",
    },
    {
      title: "ICT Top 11 Startup",
      organization: "ICT Award",
      year: "2019",
      category: "Emerging Technology",
    },
  ];

  const teamMembers = [
    {
      name: "Naresh Lamgade",
      role: "CEO & Founder",
      image: "/people/naresh_sir.jpeg",
      bio: "Cybersecurity expert with 10+ years of experience leading elite security teams. Founded Cynical and BugV to bring enterprise-grade security to organizations worldwide.",
      social: {
        linkedin: "https://www.linkedin.com/in/nareshlamgade/",
      },
      isFeatured: true,
      message:
        "At Cynical, we believe that cybersecurity should not be an afterthought for any business  with critical data and infrastructure—it's about protecting people, businesses, and livelihoods. Our mission is to make enterprise-grade security accessible to every organization, regardless of size or industry.",
    },
    // {
    //   name: "Mr. Ravi Lamgade",
    //   role: "Co-Founder & Office Admin",
    //   image: "/people/mr_ravi.jpeg",
    //   bio: "Co-founder with a passion for cybersecurity and business development. Drives company growth and strategic partnerships.",
    //   social: {
    //     linkedin: "https://www.linkedin.com/in/ravi-lamgade-3422ab190/",
    //   },
    //   isFeatured: true,
    //   message:
    //     "At Cynical, we believe administration is not just paperwork—it’s about enabling people, processes, and progress. My mission is to ensure you have the tools and trust to keep our operations secure, efficient, and future‑ready.",
    // },
    // {
    //   name: "Mrs. Sabina Lawaju",
    //   role: "Sales and Marketing Head",
    //   image: "/people/mrs_sabina.jpeg",
    //   bio: "HR executive with 5+ years building high-performance security teams. Champions our culture of excellence and continuous learning.",
    //   social: {
    //     linkedin: "https://www.linkedin.com/in/sabina-lawaju-mba-30777a1b1/",
    //   },
    // },
  ];

  const departments = [
    {
      name: "Security Operations",
      count: "45+",
      description: "Elite security analysts and incident responders",
    },
    {
      name: "Research & Development",
      count: "30+",
      description: "Innovation team developing next-gen security solutions",
    },
    {
      name: "Client Success",
      count: "25+",
      description: "Dedicated client partners and technical account managers",
    },
    {
      name: "Sales & Marketing",
      count: "20+",
      description: "Global business development and brand ambassadors",
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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50">
                  <Building className="w-4 h-4 text-foreground" />
                  <span className="text-sm font-medium">About Cynical</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                  Securing the digital world
                  <span className="block text-slate-500">
                    with elite expertise
                  </span>
                </h1>

                <p className="text-lg text-muted-foreground font-body leading-relaxed">
                  Founded in 2018, Cynical has rapidly become a trusted partner
                  for organizations worldwide seeking enterprise-grade
                  cybersecurity solutions. Our team of elite security
                  professionals combines years of experience working on
                  Offensive and defensive cybersecurity.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#our-team">
                  <Button
                    size="lg"
                    className="bg-foreground text-background hover:bg-foreground/90"
                  >
                    Meet Our Team
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href={"/#solutions"}>
                  <Button size="lg" variant="outline">
                    View Our Services
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">500+</h2>
                  <div className="text-sm text-slate-500">
                    Clients Protected
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">200+</h2>
                  <div className="text-sm text-slate-500">Team Members</div>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">6+</h2>
                  <div className="text-sm text-slate-500">
                    Years of Excellence
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-background">
              <Image
                src={"/about/cynical_hero.jpg"}
                width={800}
                height={600}
                alt="Cynical Logo on a dark background"
                className="hidden dark:block"
              />
              <div className="absolute inset-0 dark:bg-linear-to-br from-background/80 via-background/50 to-background/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-lg font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
              Why Choose Cynical ?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              The Cynical difference
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              What sets us apart is our combination of elite expertise, proven
              methodology, and unwavering commitment to client success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl border border-border bg-background hover:border-foreground/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary self-center flex items-center justify-center shrink-0">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8">
              <Target className="w-4 h-4 text-foreground" />
              <span className="text-sm font-medium">Our Mission</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Making the digital world safer
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mx-auto">
                  <Lightbulb className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-semibold">Innovation</h3>
                <p className="text-muted-foreground font-body">
                  Continuously developing cutting-edge security solutions to
                  stay ahead of evolving threats.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold">Integrity</h3>
                <p className="text-muted-foreground font-body">
                  Unwavering commitment to ethical practices and transparent
                  relationships with our clients.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mx-auto">
                  <Zap className="w-6 h-6 text-foreground-500" />
                </div>
                <h3 className="text-xl font-semibold">Excellence</h3>
                <p className="text-muted-foreground font-body">
                  Delivering exceptional results through elite expertise and
                  relentless pursuit of security perfection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Brands that trust our cybersecurity competence
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              From Fortune 500 enterprises to emerging startups, organizations
              rely on Cynical to protect their digital assets.
            </p>
          </div>

          <Marquee
            pauseOnHover={true}
            gradient={false}
            autoFill={true}
            speed={10}
            style={{
              marginRight: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 48,
                alignItems: "center",
                marginLeft: 48,
              }}
            >
              {trustedByClipped.map((brand) => (
                <TrustedByImage
                  key={brand.name}
                  name={brand.name}
                  logo={brand.image}
                  link={brand.link}
                  className={`object-contain hover:scale-105 transition-transform dark:grayscale-0 dark:hover:grayscale-0 dark:brightness-0 dark:invert  opacity-90 ${
                    brand.name.toLowerCase() === "worldlink" ||
                    brand.name.toLowerCase() == "worldbank"
                      ? ""
                      : "dark:hover:invert-0 dark:hover:brightness-100"
                  }`}
                />
              ))}

              <TrustedByImage
                width={54}
                height={54}
                name="Swift Technology"
                logo="/brands/swift_tech.svg"
                link="https://swifttech.com.np/"
                className="object-contain hover:scale-105 transition-transform dark:grayscale-0 dark:hover:grayscale-0 dark:brightness-0 dark:invert dark:hover:invert-0 dark:hover:brightness-100 opacity-90"
              />
            </div>
          </Marquee>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Awards & Recognition
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Industry recognition for our excellence in cybersecurity services
              and innovation.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="p-6 rounded-xl w-64 lg:w-72 border border-border bg-card hover:border-foreground/20 transition-colors text-center"
              >
                <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="font-semibold mb-2">{award.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {award.organization}
                </p>
                <p className="text-xs text-muted-foreground/60">
                  {award.year} • {award.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 mx-auto bg-secondary/20" id="our-team">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Meet our leadership team
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Elite security professionals with decades of combined experience
              protecting organizations worldwide.
            </p>
          </div>

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 place-content-between gap-4 gap-y-6 mb-16 mx-auto"> */}
          <div className="flex justify-center gap-4 gap-y-6 mb-16 mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index}>
                <div
                  style={{
                    width: 375,
                    height: 400,
                    objectFit: "cover",
                    overflow: "hidden",
                    borderRadius: "0.75rem",
                  }}
                  className="self-center"
                >
                  <Image
                    src={member.image}
                    width={400}
                    height={400}
                    alt={member.name}
                    className="rounded-xl transition-transform duration-500 hover:scale-105"
                    style={{
                      width: 375,
                      height: 400,
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground mb-3">{member.role}</p>
                </div>

                <div className="flex gap-3">
                  {member.social.linkedin && (
                    <Link
                      href={member.social.linkedin}
                      className="text-foreground"
                    >
                      LinkedIn
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Departments */}
          <div className="grid md:pt-24 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl border border-border bg-background"
              >
                <div className="text-3xl font-bold   mb-2">{dept.count}</div>
                <h3 className="font-semibold mb-2">{dept.name}</h3>
                <p className="text-sm text-muted-foreground font-body">
                  {dept.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        badge="Secure Your Future with Cynical"
        headline="Ready to"
        highlightedText="Secure Your Future?"
        description="Join hundreds of organizations who trust Cynical to protect their
              digital assets and secure their future."
        primaryButtonText="Get Started"
        secondaryButtonText="Contact Sales"
      />
    </div>
  );
}
