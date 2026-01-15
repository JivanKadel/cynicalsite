// app/layout-client.tsx
"use client";

import Providers from "@/context/ProgressProvider";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Providers>{children}</Providers>;
}
