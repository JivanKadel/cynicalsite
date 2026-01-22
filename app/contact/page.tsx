import { Mail, Clock, Phone, MapPin, Globe, Calendar } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+977-01-4530730",
      href: "tel:+977-01-4530730",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@cynicaltechnology.com ",
      href: "mailto:info@cynicaltechnology.com ",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "Sharada Bhawan, Maitidevi Marg, Kathmandu, Nepal",
      href: null,
    },
    {
      icon: Globe,
      title: "Website",
      content: "https://cynicaltechnology.com/",
      href: "https://cynicaltechnology.com/",
    },
  ];

  return (
    <main className="pt-12 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-4">
              Security Inquiry
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Request a Security Assessment
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Share your security requirements. Our offensive security team will
              evaluate your needs and propose a tailored engagement.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="p-8 border border-border/50 rounded-xl bg-card/50 backdrop-blur-sm shadow-xl">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we&apos;ll get back to you
                    within 24 hours.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>

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
                            className="text-sm text-muted-foreground"
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
                  <p>Sunday - Friday: 10:00 AM - 5:00 PM GMT +05:45</p>
                  <p>Emergency Support: 24/7 Available</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 mt-16 border border-border/50 rounded-xl bg-card/50 backdrop-blur-sm">
            <h3 className="font-semibold mb-4">What Happens Next</h3>
            <ol className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="font-mono text-primary font-bold">01</span>
                <span>Our team reviews your requirements</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-primary font-bold">02</span>
                <span>We schedule a confidential scoping call</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-primary font-bold">03</span>
                <span>You receive a tailored proposal and timeline</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
