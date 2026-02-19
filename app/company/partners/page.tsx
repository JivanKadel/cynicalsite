import { partners } from "@/data/company/partners.data";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partners | Cynical Technology",
  description:
    "Discover our trusted partners in the cybersecurity industry. Collaborate with leading organizations to enhance your security posture.",
};

export default function PartnersPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Our Partners</h1>

        <div className="space-y-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6 border-b border-muted pb-8"
            >
              <div className="w-32 h-32 relative shrink-0">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain rounded"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{partner.name}</h2>
                <p className="text-sm font-semibold text-muted-foreground">
                  {partner.address}
                </p>
                <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-muted p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Interested in Partnering with Us?
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            We are always looking to collaborate with organizations that share
            our vision. Reach out to us and let’s build something impactful
            together.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-2 bg-foreground text-background rounded hover:opacity-80 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
