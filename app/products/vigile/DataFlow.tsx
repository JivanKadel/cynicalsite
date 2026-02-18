"use client";
import { Cpu, HatGlasses } from "lucide-react";
import Image from "next/image";

const DataFlowDiagram = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-5 items-center gap-4">
          <div className="col-span-1 flex flex-col gap-12 items-start z-10">
            <div className="relative w-full max-w-[200px] mt-6 ml-4">
              <div className="flex flex-col items-center">
                <h4 className="text-xs font-bold text-center">Dark Web</h4>
              </div>
              <div className="relative flex flex-col items-center text-center">
                <div className="text-foreground">
                  <HatGlasses className="w-8 h-8" />
                </div>
              </div>
            </div>

            <div className="relative w-full max-w-[250px]  mb-6 ml-4">
              <div className="absolute -inset-1 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000" />
              <div className="relative flex flex-col items-center text-center">
                <div className=" text-blue-600">
                  <Image
                    src={"/products/outlook.svg"}
                    alt="Microsoft 365"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h4 className="font-bold mb-1 text-xs text-center">
                  Microsoft 365
                </h4>
              </div>
            </div>
          </div>

          <div className="col-span-1 flex justify-center h-64 relative">
            <div className="absolute top-[30%] w-full h-0.5 bg-gradient-to-r from-blue-500/10 via-blue-500/40 to-blue-500/10 animate-pulse scale-x-125" />
            <div className="absolute top-[65%] w-full h-0.5 bg-gradient-to-r from-blue-500/10 via-blue-500/40 to-blue-500/10 animate-pulse scale-x-125" />
          </div>

          {/* Center Processing */}
          <div className="col-span-1 flex justify-center z-10">
            <div className="relative z-10 text-center">
              <Cpu className="w-8 h-8 mx-auto mb-2 text-green-500" />
              <div className="font-bold text-[10px] uppercase tracking-widest">
                Vigile.AI
                <span className="block">Engine</span>
              </div>
              <div className="flex gap-1 justify-center mt-2">
                <div className="w-1 h-3 bg-green-500 animate-bounce" />
                <div
                  className="w-1 h-5 bg-green-500 animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                />
                <div
                  className="w-1 h-2 bg-green-500 animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                />
              </div>
            </div>
          </div>

          <div className="col-span-1 flex justify-center h-64 relative">
            <div className="absolute top-1/2 w-full h-0.5 bg-gradient-to-r from-green-500/10 via-green-500/40 to-green-500/10 animate-pulse scale-x-125" />
          </div>

          <div className="col-span-1 flex justify-end z-10">
            <div className="relative w-full max-w-[280px]">
              <div className="w-14 h-14 bg-black dark:border rounded-2xl flex items-center justify-center shadow-lg">
                <Image
                  src={"/products/vigile_logo.png"}
                  alt="Vigile.ai"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes flow {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </section>
  );
};

export default DataFlowDiagram;
