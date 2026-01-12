"use client";
import Tilt from "react-parallax-tilt";

export default function ParallaxImage({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <Tilt className={className}>{children}</Tilt>;
}
