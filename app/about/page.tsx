import { Button } from "@/components/ui/button";
import {
  Users,
  Award,
  TrendingUp,
  Globe,
  Clock,
  Quote,
  Linkedin,
  Twitter,
  Building,
  Target,
  Lightbulb,
  Heart,
  Zap,
  ArrowRight,
  Lock,
  Github,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  const whyChooseItems = [
    {
      icon: Lock,
      title: "Elite Security Expertise",
      color: "text-blue-500",
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

  const trustedBrands = [
    { name: "Esewa", logo: "/brands/esewa.png" },
    { name: "Global IME Bank", logo: "/brands/global_ime_bank.svg" },
    {
      name: "Himalayan Life Insurance",
      logo: "/brands/himalayan_life_insurance.png",
    },
    { name: "Mero Job", logo: "/brands/mero_job.svg" },
    { name: "Fonepay", logo: "/brands/fonepay.webp" },
    { name: "WorldLink", logo: "/brands/worldlink.svg" },
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
    {
      title: "Best Place to Work",
      organization: "Cybersecurity Ventures",
      year: "2023",
      category: "Top Cybersecurity Employer",
    },
    {
      title: "Innovation in Security",
      organization: "RSA Conference",
      year: "2023",
      category: "Most Innovative Solution",
    },
  ];

  const teamMembers = [
    {
      name: "Naresh Lamgade",
      role: "CEO & Founder",
      image: "/people/mr_naresh.png",
      bio: "Cybersecurity expert with 10+ years of experience leading elite security teams. Founded Cynical and BugV to bring enterprise-grade security to organizations worldwide.",
      social: {
        linkedin: "https://www.linkedin.com/in/nareshlamgade/",
        twitter: "https://twitter.com/sarah_mitchell",
      },
      isFeatured: true,
    },
    {
      name: "Ravi Lamgade",
      role: "Human Resources Manager",
      image: "/people/mr_ravi.jpeg",
      bio: "Former Google security architect and Stanford PhD. Leads our innovation lab developing next-generation security technologies.",
      social: {
        linkedin: "https://www.linkedin.com/in/ravi-lamgade-3422ab190/",
        twitter: "https://twitter.com/david_chen",
      },
    },
    {
      name: "Mr. Ram",
      role: "Sales and Marketing Head",
      image: "/people/mr_naresh.png",
      bio: "HR executive with 15+ years building high-performance security teams. Champions our culture of excellence and continuous learning.",
      social: {
        linkedin: "https://linkedin.com/in/maria-rodriguez",
      },
    },
    {
      name: "Shyam",
      role: "VP of Sales & Marketing",
      image: "/people/mr_naresh.png",
      bio: "Cybersecurity sales veteran who has scaled multiple security companies. Drives our global expansion and client relationships.",
      social: {
        linkedin: "https://linkedin.com/in/james-thompson",
        twitter: "https://twitter.com/james_thompson",
      },
    },
    {
      name: "Hari",
      role: "Chief Security Officer",
      image: "/people/mr_naresh.png",
      bio: "Former FBI cybercrime investigator and forensic expert. Leads our security research and incident response teams.",
      social: {
        linkedin: "https://linkedin.com/in/emily-watson",
      },
    },
    {
      name: "Sushil",
      role: "Head of Development",
      image: "/people/mr_naresh.png",
      bio: "Full-stack development expert with focus on security tooling. Manages our engineering teams building cutting-edge security platforms.",
      social: {
        linkedin: "https://linkedin.com/in/michael-park",
        github: "https://github.com/michael-park",
      },
    },
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

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-noto tracking-tight text-balance">
                  Securing the digital world
                  <span className="block text-muted-foreground">
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
                <Button
                  size="lg"
                  className="bg-foreground text-background hover:bg-foreground/90"
                >
                  Meet Our Team
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline">
                  View Our Services
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                <div>
                  <div className="text-2xl font-bold gradient-text">500+</div>
                  <div className="text-sm text-muted-foreground">
                    Clients Protected
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">200+</div>
                  <div className="text-sm text-muted-foreground">
                    Team Members
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">6+</div>
                  <div className="text-sm text-muted-foreground">
                    Years of Excellence
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-linear-to-br from-secondary to-background">
                <Image
                  src={"/about/cynical_hero.jpg"}
                  width={800}
                  height={600}
                  className="flex"
                  alt="Cynical Logo on a dark background"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
              Why Choose Cynical
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-noto tracking-tight mb-6">
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
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
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

      {/* Mission Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8">
              <Target className="w-4 h-4 text-foreground" />
              <span className="text-sm font-medium">Our Mission</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-noto tracking-tight mb-6">
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
                  <Zap className="w-6 h-6 text-blue-500" />
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

      {/* Trusted Brands Section */}
      <section className="py-20 lg:py-32 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-noto tracking-tight mb-6">
              Brands that trust our cybersecurity competence
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              From Fortune 500 enterprises to emerging startups, organizations
              worldwide rely on Cynical to protect their digital assets.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {trustedBrands.map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center group"
              >
                <Image
                  src={brand.logo}
                  width={100}
                  height={40}
                  alt={brand.name}
                  className="group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-noto tracking-tight mb-6">
              Awards & Recognition
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Industry recognition for our excellence in cybersecurity services
              and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-border bg-card hover:border-foreground/20 transition-colors text-center"
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
      <section className="py-20 lg:py-32 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-noto tracking-tight mb-6">
              Meet our leadership team
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Elite security professionals with decades of combined experience
              protecting organizations worldwide.
            </p>
          </div>

          {/* CEO Featured Section */}
          <div className="mb-16">
            {teamMembers
              .filter((member) => member.isFeatured)
              .map((member, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl border border-border p-8 lg:p-12"
                >
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-1">
                      <Image
                        src={member.image}
                        width={400}
                        height={600}
                        alt={member.name}
                        className="rounded-xl"
                      />
                    </div>

                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">
                          {member.name}
                        </h3>
                        <p className="text-lg text-muted-foreground mb-4">
                          {member.role}
                        </p>
                        <p className="text-muted-foreground font-body leading-relaxed">
                          {member.bio}
                        </p>
                      </div>

                      <div className="flex gap-4">
                        {member.social.linkedin && (
                          <Link
                            href={member.social.linkedin}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Linkedin className="w-5 h-5" />
                          </Link>
                        )}
                        {member.social.twitter && (
                          <Link
                            href={member.social.twitter}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Twitter className="w-5 h-5" />
                          </Link>
                        )}
                      </div>

                      {/* CEO Message */}
                      <div className="bg-secondary/50 rounded-lg p-6 border border-border">
                        <div className="flex items-start gap-4">
                          <Quote className="w-6 h-6 text-foreground/60 shrink-0 mt-1" />
                          <div>
                            <p className="text-muted-foreground font-body italic mb-4">
                              &quot;At Cynical, we believe that cybersecurity
                              should not be an afterthought for any business
                              with critical data and infrastructure—it&apos;s
                              about protecting people, businesses, and
                              livelihoods. Our mission is to make
                              enterprise-grade security accessible to every
                              organization, regardless of size or
                              industry.&quot;
                            </p>
                            <p className="font-semibold">
                              — {member.name}, CEO & Founder
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Rest of Team */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {teamMembers
              .filter((member) => !member.isFeatured)
              .map((member, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl border border-border p-6 hover:border-foreground/20 transition-colors"
                >
                  <div>
                    <Image
                      src={member.image}
                      width={400}
                      height={400}
                      alt={member.name}
                      className="rounded-xl"
                      style={{
                        width: 350,
                        height: 350,
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-2 mt-2">
                    <h3 className="text-lg font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground font-body mb-4">
                      {member.bio}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    {member.social.linkedin && (
                      <Link
                        href={member.social.linkedin}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </Link>
                    )}
                    {member.social.twitter && (
                      <Link
                        href={member.social.twitter}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                      </Link>
                    )}
                    {member.social.github && (
                      <Link
                        href={member.social.github}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
          </div>

          {/* Departments */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl border border-border bg-background"
              >
                <div className="text-3xl font-bold gradient-text mb-2">
                  {dept.count}
                </div>
                <h3 className="font-semibold mb-2">{dept.name}</h3>
                <p className="text-sm text-muted-foreground font-body">
                  {dept.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-noto tracking-tight mb-6">
              Ready to secure your future?
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
              Join hundreds of organizations who trust Cynical to protect their
              digital assets and secure their future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
