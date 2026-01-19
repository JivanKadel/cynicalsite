"use client";

import Image from "next/image";
import React from "react";

interface FlowNode {
  id: string;
  label: string;
  subLabel?: string;
  icon: string;
}

interface Props {
  email?: string;
}

const DataFlowDarkAlt: React.FC<Props> = ({
  email = "richard@companyemail.com",
}) => {
  const nodes: FlowNode[] = [
    {
      id: "stealer",
      label: "Stealer Log",
      icon: "/icons/user.svg",
    },
    {
      id: "email",
      label: email,
      icon: "/icons/mail.svg",
    },
    {
      id: "azure",
      label: "3 Connected Services",
      icon: "/icons/azure.svg",
    },
    {
      id: "aws",
      label: "2 Connected Services",
      icon: "/icons/aws.svg",
    },
    {
      id: "unknown",
      label: "Unknown Services",
      icon: "/icons/gcp.svg",
    },
    {
      id: "github",
      label: "3 Connected Services",
      subLabel: "(Intellectual Property)",
      icon: "/icons/github.svg",
    },
    {
      id: "adp",
      label: "Admin Access HR Payroll",
      subLabel: "(Contains PII)",
      icon: "/icons/adp.svg",
    },
    {
      id: "ai",
      label: "Access to",
      subLabel: "AI Agent Credentials",
      icon: "/icons/ai.svg",
    },
  ];

  return (
    <div className="w-full rounded-2xl bg-gradient-to-br from-[#050812] via-[#070b1a] to-[#050812] p-6">
      <div className="relative mx-auto w-full max-w-6xl">
        {/* Flow lines */}
        <svg
          className="pointer-events-none absolute inset-0"
          viewBox="0 0 1000 500"
          preserveAspectRatio="xMidYMid meet"
        >
          <path d="M120 250 H280" stroke="#4f6cff" strokeWidth="2" />
          <path d="M420 250 H560" stroke="#4f6cff" strokeWidth="2" />

          <path
            d="M560 250 C620 250 620 100 700 100"
            stroke="#4f6cff"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M560 250 C620 250 620 200 700 200"
            stroke="#4f6cff"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M560 250 C620 250 620 300 700 300"
            stroke="#4f6cff"
            strokeWidth="2"
            fill="none"
            strokeDasharray="6 6"
          />

          <path d="M840 200 H940" stroke="#4f6cff" strokeWidth="2" />
          <path d="M840 300 H940" stroke="#4f6cff" strokeWidth="2" />
        </svg>

        {/* Nodes */}
        <div className="grid grid-cols-[auto_auto_1fr_1fr] gap-x-10 gap-y-10 items-center">
          {/* Column 1 */}
          <FlowBox node={nodes[0]} />

          {/* Column 2 */}
          <FlowBox node={nodes[1]} />

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <FlowBox node={nodes[2]} />
            <FlowBox node={nodes[3]} />
            <FlowBox node={nodes[4]} dashed />
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-6">
            <FlowBox node={nodes[5]} />
            <FlowBox node={nodes[6]} />
            <FlowBox node={nodes[7]} />
          </div>
        </div>
      </div>
    </div>
  );
};

const FlowBox: React.FC<{ node: FlowNode; dashed?: boolean }> = ({
  node,
  dashed,
}) => {
  return (
    <div
      className={`group relative flex min-w-[200px] items-center gap-3 rounded-xl border px-4 py-3 shadow-lg backdrop-blur ${
        dashed ? "border-dashed border-blue-500/40" : "border-blue-500/40"
      } bg-gradient-to-b from-[#0b1226] to-[#070b1a]`}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0e1735]">
        <Image src={node.icon} alt={node.label} width={24} height={24} />
      </div>
      <div className="leading-tight">
        <div className="text-sm font-semibold text-white">{node.label}</div>
        {node.subLabel && (
          <div className="text-xs text-blue-300">{node.subLabel}</div>
        )}
      </div>
    </div>
  );
};

export default DataFlowDarkAlt;
