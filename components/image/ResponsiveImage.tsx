import Image from "next/image";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ResponsiveImage({
  src,
  alt,
  className,
}: ResponsiveImageProps) {
  return (
    <div
      className={`relative w-full h-full min-h-64 max-h-110 ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="w-full h-full object-cover rounded-lg"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}
