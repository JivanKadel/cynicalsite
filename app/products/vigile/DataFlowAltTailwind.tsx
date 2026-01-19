// "use client";

// import { Book, Bug, Cookie, FishingHook, Lock, Mail } from "lucide-react";
// import Image from "next/image";
// import React from "react";

// interface BreachType {
//   id: string;
//   label: string;
//   icon: string;
//   count: number;
//   risk: "low" | "medium" | "high" | "critical";
//   color: string;
//   description: string;
// }

// interface Node extends BreachType {
//   x: number;
//   y: number;
//   isCenter: boolean;
// }

// interface Props {
//   domain?: string;
// }

// const DataFlowAltTailwind: React.FC<Props> = ({ domain = "example.com" }) => {
//   const centerX = 400;
//   const centerY = 300;
//   const radius = 180;

//   const breachTypes: BreachType[] = [
//     {
//       id: "password",
//       label: "Password Breaches",
//       icon: Lock,
//       count: 12,
//       risk: "high",
//       color: "#ef4444",
//       description: "Leaked or reused passwords found in public breaches",
//     },
//     {
//       id: "cookies",
//       label: "Cookie Exposure",
//       icon: Cookie,
//       count: 8,
//       risk: "medium",
//       color: "#f59e0b",
//       description: "Session or tracking cookies exposed to third parties",
//     },
//     {
//       id: "autofill",
//       label: "Autofill Data",
//       icon: Book,
//       count: 5,
//       risk: "low",
//       color: "#10b981",
//       description: "Saved browser autofill data potentially compromised",
//     },
//     {
//       id: "malware",
//       label: "Malware",
//       icon: Bug,
//       count: 3,
//       risk: "high",
//       color: "#ef4444",
//       description: "Malicious payloads associated with the domain",
//     },
//     {
//       id: "phishing",
//       label: "Phishing",
//       icon: FishingHook,
//       count: 7,
//       risk: "medium",
//       color: "#f59e0b",
//       description: "Known phishing campaigns impersonating the domain",
//     },
//     {
//       id: "office",
//       label: "Office 365",
//       icon: "/products/outlook.svg",
//       count: 2,
//       risk: "low",
//       color: "#3b82f6",
//       description: "Exposure related to Office 365 tenant data",
//     },
//     {
//       id: "email",
//       label: "Email Security",
//       icon: Mail,
//       count: 4,
//       risk: "medium",
//       color: "#8b5cf6",
//       description: "Email configuration and breach-related findings",
//     },
//   ];

//   const nodes: Node[] = [
//     {
//       id: "vigile",
//       label: "Vigile",
//       icon: "/products/vigile_logo.png",
//       count: breachTypes.reduce((a, b) => a + b.count, 0),
//       risk: "critical",
//       color: "#1f2937",
//       description: "Aggregated security posture for the target domain",
//       x: centerX,
//       y: centerY,
//       isCenter: true,
//     },
//     ...breachTypes.map((type, index) => {
//       const angle = (index * 2 * Math.PI) / breachTypes.length;
//       return {
//         ...type,
//         x: centerX + radius * Math.cos(angle),
//         y: centerY + radius * Math.sin(angle),
//         isCenter: false,
//       };
//     }),
//   ];

//   const getPath = (from: Node, to: Node) => {
//     const midX = (from.x + to.x) / 2;
//     const midY = (from.y + to.y) / 2 - 30;
//     return `M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`;
//   };

//   return (
//     <div className="mx-auto max-w-[900px] p-5 font-sans bg-background">
//       <div className="mb-4 flex items-center justify-between">
//         <h2 className="text-lg font-semibold text-gray-800">
//           Domain Security Analysis
//         </h2>
//         <div className="flex items-center gap-2 text-sm text-gray-500">
//           <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
//           Scanning
//         </div>
//       </div>

//       <div className="relative mx-auto h-[600px] w-[800px] rounded-xl bg-background border-2 border-red-500 shadow">
//         <svg
//           className="absolute inset-0 pointer-events-none"
//           width={800}
//           height={600}
//         >
//           {nodes
//             .filter((n) => !n.isCenter)
//             .map((node) => {
//               const center = nodes[0];
//               return (
//                 <path
//                   key={node.id}
//                   d={getPath(center, node)}
//                   stroke={node.color}
//                   strokeWidth={3}
//                   fill="none"
//                   opacity={0.6}
//                   strokeDasharray="5 5"
//                 />
//               );
//             })}
//         </svg>

//         {nodes.map((node) => (
//           <div
//             key={node.id}
//             className="group absolute flex cursor-default flex-col items-center justify-center rounded-full border-4 bg-white shadow transition-transform hover:scale-110"
//             style={{
//               left: node.x - (node.isCenter ? 60 : 40),
//               top: node.y - (node.isCenter ? 60 : 40),
//               width: node.isCenter ? 120 : 80,
//               height: node.isCenter ? 120 : 80,
//               borderColor: node.color,
//               backgroundColor: node.isCenter ? "black" : `${node.color}20`,
//             }}
//           >
//             <div className="text-2xl">
//               {typeof node.icon === "string" ? (
//                 <Image
//                   width={100}
//                   height={100}
//                   src={node.icon}
//                   alt={node.label}
//                 />
//               ) : (
//                 <node.icon color={node.color} />
//               )}
//             </div>
//             <div
//               className={`mt-1 text-center text-[10px] font-medium dark:text-gray-200 ${
//                 node.isCenter ? "text-gray-300" : "text-gray-700"
//               }`}
//             >
//               {node.label}
//             </div>
//             <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
//               {node.count}
//             </div>

//             <div className="pointer-events-none absolute bottom-full z-20 mb-2 w-48 rounded-md bg-gray-900 px-3 py-2 text-xs text-white opacity-0 shadow transition-opacity group-hover:opacity-100">
//               {node.description}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DataFlowAltTailwind;

"use client";

import { Book, Bug, Cookie, FishingHook, Lock, Mail } from "lucide-react";
import Image from "next/image";
import React, { useMemo } from "react";

interface BreachType {
  id: string;
  label: string;
  icon: any;
  count: number;
  risk: "low" | "medium" | "high" | "critical";
  color: string;
  description: string;
}

interface Node extends BreachType {
  x: number; // normalized 0–1
  y: number; // normalized 0–1
  isCenter: boolean;
}

interface Props {
  domain?: string;
}

const DataFlowAltTailwind: React.FC<Props> = ({ domain = "example.com" }) => {
  const breachTypes: BreachType[] = [
    {
      id: "password",
      label: "Password Breaches",
      icon: Lock,
      count: 12,
      risk: "high",
      color: "#ef4444",
      description: "Leaked or reused passwords found in public breaches",
    },
    {
      id: "cookies",
      label: "Cookie Exposure",
      icon: Cookie,
      count: 8,
      risk: "medium",
      color: "#f59e0b",
      description: "Session or tracking cookies exposed to third parties",
    },
    {
      id: "autofill",
      label: "Autofill Data",
      icon: Book,
      count: 5,
      risk: "low",
      color: "#10b981",
      description: "Saved browser autofill data potentially compromised",
    },
    {
      id: "malware",
      label: "Malware",
      icon: Bug,
      count: 3,
      risk: "high",
      color: "#ef4444",
      description: "Malicious payloads associated with the domain",
    },
    {
      id: "phishing",
      label: "Phishing",
      icon: FishingHook,
      count: 7,
      risk: "medium",
      color: "#f59e0b",
      description: "Known phishing campaigns impersonating the domain",
    },
    {
      id: "office",
      label: "Office 365",
      icon: "/products/outlook.svg",
      count: 2,
      risk: "low",
      color: "#3b82f6",
      description: "Exposure related to Office 365 tenant data",
    },
    {
      id: "email",
      label: "Email Security",
      icon: Mail,
      count: 4,
      risk: "medium",
      color: "#8b5cf6",
      description: "Email configuration and breach-related findings",
    },
  ];

  const nodes: Node[] = useMemo(() => {
    const centerX = 0.5;
    const centerY = 0.5;
    const radius = 0.32; // tighter, removes excess padding

    return [
      {
        id: "vigile",
        label: "Vigile",
        icon: "/products/vigile_logo.png",
        count: breachTypes.reduce((a, b) => a + b.count, 0),
        risk: "critical",
        color: "#1f2937",
        description: "Aggregated security posture for the target domain",
        x: centerX,
        y: centerY,
        isCenter: true,
      },
      ...breachTypes.map((type, index) => {
        const angle = (index * 2 * Math.PI) / breachTypes.length;
        return {
          ...type,
          x: centerX + radius * Math.cos(angle),
          y: centerY + radius * Math.sin(angle),
          isCenter: false,
        };
      }),
    ];
  }, [breachTypes]);

  const getPath = (from: Node, to: Node) => {
    const midX = (from.x + to.x) / 2;
    const midY = (from.y + to.y) / 2 - 0.04;
    return `M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`;
  };

  return (
    <div className="w-11/12">
      <div className="relative w-full aspect-[4/3]  rounded-xl bg-background">
        <svg
          className="absolute inset-0"
          viewBox="0 0 1 1"
          preserveAspectRatio="xMidYMid meet"
        >
          {nodes
            .filter((n) => !n.isCenter)
            .map((node) => {
              const center = nodes[0];
              return (
                <path
                  key={node.id}
                  d={getPath(center, node)}
                  stroke={node.color}
                  strokeWidth={0.004}
                  fill="none"
                  opacity={0.6}
                  strokeDasharray="0.01 0.01"
                />
              );
            })}
        </svg>

        {nodes.map((node) => {
          const size = node.isCenter ? 0.14 : 0.11;

          return (
            <div
              key={node.id}
              className="group absolute flex flex-col items-center justify-center rounded-full border shadow transition-transform hover:scale-110"
              style={{
                left: `${node.x * 100}%`,
                top: `${node.y * 130}%`,
                width: `${size * 100}%`,
                height: `${size * 100}%`,
                transform: "translate(-50%, -50%)",
                borderColor: node.color,
                backgroundColor: node.isCenter ? "#000000" : `${node.color}`,
              }}
            >
              <div className="flex items-center justify-center">
                {typeof node.icon === "string" ? (
                  <Image
                    src={node.icon}
                    alt={node.label}
                    width={80}
                    height={80}
                    objectFit="cover"
                    className="h-12 w-12 md:h-16 md:w-16"
                  />
                ) : (
                  <node.icon
                    color={"#fafafa"}
                    className="h-8 w-8 md:h-10 md:w-10"
                  />
                )}
              </div>

              <div
                className={`mt-1 px-1 text-center text-[9px] font-medium leading-tight md:text-[10px] ${
                  node.isCenter ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {node.label}
              </div>

              <div className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white md:h-5 md:w-5">
                {node.count}
              </div>

              <div className="pointer-events-none absolute bottom-full z-20 mb-2 w-48 rounded-md bg-gray-900 px-3 py-2 text-xs text-white opacity-0 shadow transition-opacity group-hover:opacity-100">
                {node.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DataFlowAltTailwind;
