import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Research = () => {
  const research = [
    {
      type: "CVE",
      title: "SQL Injection in Fortune 500 ERP Systems",
      description:
        "Pre-auth SQL injection affecting 3 major ERP vendors. Full database access without credentials.",
      date: "2026",
      link: "/research/sql-injection-erp",
    },
    {
      type: "Advisory",
      title: "CVE-2024-XXXXX: Auth Bypass in Enterprise SSO",
      description:
        "SAML signature validation flaw allowing complete authentication bypass in widely-deployed SSO solution.",
      date: "2024",
      link: "#",
    },
    {
      type: "Report",
      title: "API Security: 500 Enterprise Assessments Analyzed",
      description:
        "73% of tested APIs had broken object-level authorization. Data from real penetration tests, not surveys.",
      date: "2024",
      link: "#",
    },
  ];

  return (
    <section id="research" className="py-12 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-sm text-muted-foreground uppercase tracking-widest mb-4 block">
              Research
            </span>
            <h2 className="text-2xl md:text-4xl font-noto">
              We publish what we find.
            </h2>
          </div>
          <Link
            href="/research"
            className="text-sm fonts-medium flex items-center gap-1 hover:gap-2 transition-all link-underline"
          >
            View all research
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {research.map((item, index) => (
            <Link
              key={item.title}
              href={item.link}
              className="group card-elevated p-8 hover-lift block animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs rounded-full bg-secondardy text-muted-foreground">
                  {item.type}
                </span>
                <span className="text-xs text-muted-foreground">
                  {item.date}
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-3 group-hover:text-foreground/80 transition-colors">
                {item.title}
              </h3>

              <p className="text-muted-foreground text-sm font-body">
                {item.description}
              </p>

              <div className="mt-6 flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Read more
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
