import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative col-span-3 xl:ml-8 lg:mt-8 dark:lg:mt-0 scale-120 dark:transform-[translateY(25%)_translateX(30%)_scale(1.7)_rotateX(30deg)_rotateY(20deg)_rotate(345deg)]">
      <Image
        src="/vigile.webp"
        width={1920}
        height={924}
        alt="Vigile.AI dashboard screenshot"
        className="block"
      />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-transparent dark:to-black/80" />
    </div>
  );
}
