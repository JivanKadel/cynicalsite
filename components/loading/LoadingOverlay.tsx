// components/LoadingOverlay.tsx
"use client";

import { useLoading } from "@/context/LoadingProvider";

export default function LoadingOverlay() {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,1)",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        transition: "opacity 0.3s",
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          border: "5px solid #fff",
          borderTopColor: "#cad2df",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />
      <h1 className="font-aeonik text-2xl md:text-5xl">Loading...</h1>
      <style jsx global>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
