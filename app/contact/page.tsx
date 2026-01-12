"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Mail,
  Clock,
  Building2,
  Phone,
  MapPin,
  Globe,
  Calendar,
  Lock,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const trustIndicators = [
    {
      icon: Lock,
      title: "Confidential",
      description:
        "All communications are encrypted and handled under strict NDA",
    },
    {
      icon: Clock,
      title: "24-Hour Response",
      description: "Our security team responds within one business day",
    },
    {
      icon: Building2,
      title: "Enterprise Ready",
      description: "Serving Fortune 500 companies and government agencies",
    },
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: Mail,
      title: "Email",
      content: "security@cynical.tech",
      href: "mailto:security@cynical.tech",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "123 Security Blvd, Suite 100\nSan Francisco, CA 94105",
      href: null,
    },
    {
      icon: Globe,
      title: "Website",
      content: "www.cynical.tech",
      href: "https://www.cynical.tech",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-background to-muted/20">
      <section className="pt-12 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-4">
                Security Inquiry
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Request a Security Assessment
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Share your security requirements. Our offensive security team
                will evaluate your needs and propose a tailored engagement.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {trustIndicators.map((item, index) => (
                <div
                  key={index}
                  className="p-6 border border-border/50 rounded-xl bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground text-center">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="p-8 border border-border/50 rounded-xl bg-card/50 backdrop-blur-sm shadow-xl">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
                    <p className="text-muted-foreground">
                      Fill out the form below and we&apos;ll get back to you
                      within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors focus:ring-2 focus:ring-primary/20"
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors focus:ring-2 focus:ring-primary/20"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors focus:ring-2 focus:ring-primary/20"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Company *
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors focus:ring-2 focus:ring-primary/20"
                          placeholder="Company name"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              company: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Role / Title
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors focus:ring-2 focus:ring-primary/20"
                        placeholder="CISO, Security Lead, etc."
                        value={formData.role}
                        onChange={(e) =>
                          setFormData({ ...formData, role: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Security Requirements *
                      </label>
                      <textarea
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors h-36 resize-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Describe your security needs, compliance requirements, or specific concerns..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                      />
                    </div>

                    <Button
                      size="lg"
                      className="w-full text-foreground group bg-linear-to-r from-background via-background/90 to-background hover:from-background/95 hover:via-background/85 hover:to-background/95 border border-border duration-500 transition-colors"
                    >
                      Submit Inquiry
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting, you agree to our privacy policy. We do not
                      share your information with third parties.
                    </p>
                  </form>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Contact Information */}
                <div className="p-6 border border-border/50 rounded-xl bg-card/50 backdrop-blur-sm">
                  <h3 className="font-semibold mb-6 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <item.icon className="w-5 h-5 text-primary mt-0.5" />
                        <div className="flex-1">
                          <p className="font-medium text-sm">{item.title}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                              {item.content}
                            </a>
                          ) : (
                            <p className="text-sm text-muted-foreground whitespace-pre-line">
                              {item.content}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Office Hours */}
                <div className="p-6 border border-border/50 rounded-xl bg-card/50 backdrop-blur-sm">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Office Hours
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM PST</p>
                    <p>Emergency Support: 24/7 Available</p>
                  </div>
                </div>

                {/* What Happens Next */}
                <div className="p-6 border border-border/50 rounded-xl bg-card/50 backdrop-blur-sm">
                  <h3 className="font-semibold mb-4">What Happens Next</h3>
                  <ol className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="font-mono text-primary font-bold">
                        01
                      </span>
                      <span>Our team reviews your requirements</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-mono text-primary font-bold">
                        02
                      </span>
                      <span>We schedule a confidential scoping call</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-mono text-primary font-bold">
                        03
                      </span>
                      <span>You receive a tailored proposal and timeline</span>
                    </li>
                  </ol>
                </div>

                {/* Industries We Serve */}
                {/* <div className="p-6 border border-border/50 rounded-xl bg-card/50 backdrop-blur-sm">
                  <h3 className="font-semibold mb-4">Industries We Serve</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Financial Services",
                      "Healthcare",
                      "Government",
                      "Technology",
                      "Defense",
                    ].map((industry) => (
                      <span
                        key={industry}
                        className="text-xs px-3 py-1 rounded-full border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div> */}

                {/* Social Proof */}
                {/* <div className="p-6 border border-border/50 rounded-xl bg-card/50 backdrop-blur-sm">
                  <h3 className="font-semibold mb-3">Trusted By</h3>
                  <div className="text-sm text-muted-foreground">
                    <p className="mb-2">500+ Enterprise Clients</p>
                    <p className="mb-2">98% Client Satisfaction</p>
                    <p>10+ Years Experience</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
