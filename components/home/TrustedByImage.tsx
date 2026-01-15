"use client";

import Link from "next/link";
import Image from "next/image";

interface TrustedByProps {
  name: string;
  logo: string;
  link: string;
  width?: number;
  height?: number;
}

export function TrustedByImage({
  name,
  logo,
  link,
  width = 100,
  height = 80,
}: TrustedByProps) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center p-2 rounded-m"
    >
      <Image
        src={logo}
        alt={name}
        width={width}
        height={height}
        className="object-contain hover:scale-105 transition-transform grayscale-10 hover:grayscale-0 opacity-90 hover:opacity-100"
      />
      {/* <p className="text-muted-foreground">{name}</p> */}
    </Link>
  );
}
