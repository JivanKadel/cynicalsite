import Image from "next/image";

export default function HeroImage() {
  return (
    <a
      href="https://vigile.ai/"
      target="_blank"
      rel="noopener noreferrer"
      className="relative col-span-3 xl:ml-8 lg:mt-8 lg:mt-0 scale-120 transform-[translateY(25%)_translateX(30%)_scale(1.7)_rotateX(30deg)_rotateY(20deg)_rotate(345deg)]"
    >
      <Image
        src="/vigile_dashboard_light.png"
        width={1920}
        height={924}
        alt="Vigile.AI dashboard screenshot light"
        className="block dark:hidden"
        priority
      />

      <Image
        src="/vigile_dashboard_dark.webp"
        width={1920}
        height={924}
        alt="Vigile.AI dashboard screenshot dark"
        className="hidden dark:block"
        priority
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent dark:to-black/80" />
    </a>
  );
}
