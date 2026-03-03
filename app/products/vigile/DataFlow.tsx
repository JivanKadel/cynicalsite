"use client";
import { Cpu, HatGlasses } from "lucide-react";
import Image from "next/image";

const DataFlowDiagram = () => {
  return (
    <section className="relative py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 relative">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0 scale-150"
          viewBox="0 0 1000 400"
          preserveAspectRatio="none"
        >
          <path
            d="M140 110 C 320 110, 380 200, 500 200"
            className="flow-blue"
          />

          <path
            d="M140 290 C 320 290, 380 200, 500 200"
            className="flow-blue delay"
          />

          <path
            d="M500 200 C 650 200, 750 200, 780 200"
            className="flow-green"
          />
        </svg>

        <div className="relative grid grid-cols-5 items-center z-10 -ml-18">
          {/* LEFT SOURCES */}
          <div className="col-span-1 flex flex-col gap-28 items-start">
            <div className="flex flex-col items-center">
              <HatGlasses className="w-9 h-9 text-muted-foreground bg-background" />
              <span className="text-xs font-semibold">Dark Web</span>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/products/outlook.svg"
                alt="Microsoft 365"
                width={36}
                height={36}
                className="bg-background"
              />
              <span className="text-xs font-semibold">Microsoft 365</span>
            </div>
          </div>

          <div className="col-span-3 flex justify-center">
            <div className="relative flex flex-col justify-center items-center">
              <div className="absolute w-12 h-12 rounded-full bg-background border border-green-500/30 shadow-sm" />

              <Cpu className="w-7 h-7 text-green-500 relative z-10" />
            </div>
          </div>

          <div className="col-span-1 flex justify-end">
            <div className="w-16 h-16 bg-black border rounded-2xl flex items-center justify-center shadow-sm">
              <Image
                src="/products/vigile_logo.png"
                alt="Vigile.ai"
                width={38}
                height={38}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .flow-blue,
        .flow-green {
          fill: none;
          stroke-width: 2.5;
          stroke-linecap: round;
          stroke-dasharray: 10 10;
          animation: flow 3s linear infinite;
        }

        .flow-blue {
          stroke: rgba(59, 130, 246, 0.85);
        }

        .flow-green {
          stroke: rgba(34, 197, 94, 0.85);
        }

        .delay {
          animation-delay: 0.6s;
        }

        @keyframes flow {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -20;
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spinSlow 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default DataFlowDiagram;
