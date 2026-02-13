import { socialLinks } from "@/data/company/socials.data";

export default function Socials() {
  return (
    <div className="mt-8 border-t border-b text-center py-6">
      <h2>In the Meantime, Connect With Us</h2>
      <div className="flex justify-center items-center gap-4 mt-6">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            className={`w-10 h-10 rounded-lg bg-secondary flex items-center justify-center ${social.hoverBg} transition-colors`}
            aria-label={social.label}
          >
            <social.icon
              className={`w-6 h-6 text-muted-foreground ${social.hoverColor}`}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
