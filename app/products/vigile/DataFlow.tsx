"use client";

import Image from "next/image";
// import Image from "next/image";

// export default function DataFlow() {
//   return (
//     <div className="absolute top-0 left-0 right-0 bottom-0 lg:top-16 lg:left-10 lg:right-10 lg:bottom-16">
//       <div className="absolute top-0 left-0 bg-background z-10">
//         <Image
//           src={"/products/vigile_logo.png"}
//           width={120}
//           height={120}
//           alt="Vigile Logo"
//         />
//       </div>
//       <div className="absolute top-6 w-1/2 border-3 border-green-400"></div>
//       <div className="absolute bottom-6 right-0 w-1/2 border-3 border-green-400"></div>
//       <div className="absolute left-1/2 right-1/2 border-3 border-blue-400 top-6 bottom-6"></div>
//       <div className="absolute bottom-0 right-0 bg-background">
//         <Image
//           src={"/products/outlook.svg"}
//           width={100}
//           height={80}
//           alt="Vigile Logo"
//         />
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";

interface DataParticle {
  id: number;
  x: number;
  y: number;
  progress: number;
  direction: "toOutlook" | "toVigile";
  delay: number;
}

export default function DataFlow() {
  const [particles, setParticles] = useState<DataParticle[]>([]);

  // Initialize particles
  useEffect(() => {
    const initialParticles: DataParticle[] = [];
    for (let i = 0; i < 4; i++) {
      initialParticles.push({
        id: i,
        x: 0,
        y: 0,
        progress: Math.random(),
        direction: i % 2 === 0 ? "toOutlook" : "toVigile",
        delay: Math.random() * 2,
      });
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(initialParticles);
  }, []);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          progress: p.progress >= 1 ? 0 : p.progress + 0.02,
        }))
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Calculate position along the path
  const calculatePosition = (progress: number, reverse: boolean = false) => {
    const adjustedProgress = reverse ? 1 - progress : progress;

    // Bézier curve path coordinates
    const t = adjustedProgress;
    // Control points for a gentle S-curve
    const p0 = { x: 20, y: 60 }; // Start near Vigile
    const p1 = { x: 40, y: 30 }; // Control point 1
    const p2 = { x: 60, y: 90 }; // Control point 2
    const p3 = { x: 80, y: 60 }; // End near Outlook

    // Cubic Bézier formula
    const x =
      Math.pow(1 - t, 3) * p0.x +
      3 * Math.pow(1 - t, 2) * t * p1.x +
      3 * (1 - t) * Math.pow(t, 2) * p2.x +
      Math.pow(t, 3) * p3.x;

    const y =
      Math.pow(1 - t, 3) * p0.y +
      3 * Math.pow(1 - t, 2) * t * p1.y +
      3 * (1 - t) * Math.pow(t, 2) * p2.y +
      Math.pow(t, 3) * p3.y;

    return { x, y };
  };

  return (
    <div className="relative w-full h-full min-h-64 lg:p-12">
      <div className="absolute inset-0 lg:inset-4">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#34D399" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#34D399" stopOpacity="0.5" />
            </linearGradient>
          </defs>

          {/* Animated glow effect */}
          <path
            d="M 20,60 C 40,30 60,90 80,60"
            stroke="url(#pathGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />

          {/* Secondary path for depth */}
          <path
            d="M 20,60 C 40,30 60,90 80,60"
            stroke="rgba(96, 165, 250, 0.2)"
            strokeWidth="4"
            fill="none"
          />
        </svg>

        {/* Vigile Node */}
        <div className="absolute z-30 left-0 top-1/2 -translate-y-1/2">
          <div className="relative z-30">
            <div className="relative w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl shadow-green-500/20 p-3 flex items-center justify-center">
              <Image
                src={"/products/vigile_logo.png"}
                width={100}
                height={100}
                alt="Vigile Logo"
              />
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-2xl shadow-2xl shadow-blue-500/20 p-3 flex items-center justify-center">
              <Image
                src={"/products/outlook.svg"}
                width={100}
                height={100}
                alt="Outlook Logo"
              />
            </div>
          </div>
        </div>

        {/* Animated data particles */}
        <div className="absolute inset-0">
          {particles.map((particle) => {
            const pos = calculatePosition(
              particle.progress,
              particle.direction === "toVigile"
            );
            return (
              <div
                key={particle.id}
                // className="absolute w-3 h-3 lg:w-4 lg:h-4 rounded-full"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  transform: "translate(-50%, -50%)",
                  animationDelay: `${particle.delay}s`,
                  background:
                    particle.direction === "toOutlook"
                      ? "radial-gradient(circle at 30% 30%, #34D399, #059669)"
                      : "radial-gradient(circle at 30% 30%, #60A5FA, #2563EB)",
                  boxShadow:
                    particle.direction === "toOutlook"
                      ? "0 0 12px #34D399, 0 0 24px #34D399/50"
                      : "0 0 12px #60A5FA, 0 0 24px #60A5FA/50",
                }}
                className={`absolute w-3 h-3 lg:w-4 lg:h-4 rounded-full animate-pulse ${
                  particle.direction === "toOutlook"
                    ? "bg-green-400"
                    : "bg-blue-400"
                }`}
              />
            );
          })}
        </div>

        {/* Connection status indicator */}
        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs lg:text-sm text-gray-400 font-medium">
                Live Connection
              </span>
            </div>
            <div className="text-xs text-gray-500 bg-gray-900/80 px-3 py-1 rounded-full">
              Bidirectional Data Flow
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
