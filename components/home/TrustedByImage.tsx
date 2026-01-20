"use client";

import Link from "next/link";
import Image from "next/image";

interface TrustedByProps {
  name: string;
  logo: string;
  link: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  className?: string;
}

export function TrustedByImage({
  name,
  logo,
  link,
  width = 100,
  height = 80,
  style = {},
  className = "",
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
        style={style}
        className={`object-contain hover:scale-105 transition-transform opacity-90 hover:opacity-100 ${className}`}
      />
    </Link>
  );
}
