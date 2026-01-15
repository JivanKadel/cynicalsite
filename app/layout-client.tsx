// app/layout-client.tsx
"use client";

import { LoadingProvider } from "@/context/LoadingProvider";
import LoadingOverlay from "@/components/loading/LoadingOverlay";
import { ProgressProvider } from "@bprogress/next/app";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProgressProvider>{children}</ProgressProvider>;
}
