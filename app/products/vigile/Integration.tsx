"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import Image from "next/image";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "border-border z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function Integration({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full items-center justify-center overflow-hidden p-10",
        className,
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref} className="bg-background text-foreground">
            <Icons.googleDrive />
          </Circle>
          <Circle ref={div2Ref} className="bg-background text-foreground">
            <Icons.googleDocs />
          </Circle>
          <Circle ref={div3Ref} className="bg-background text-foreground">
            <Icons.whatsapp />
          </Circle>
          <Circle ref={div4Ref} className="bg-background text-foreground">
            <Icons.messenger />
          </Circle>
          <Circle ref={div5Ref} className="bg-background text-foreground">
            <Icons.notion />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-16 bg-black">
            <Image
              src={"/products/vigile_logo.png"}
              width={60}
              height={60}
              style={{
                scale: "1",
              }}
              alt={"Vigile Logo"}
            />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref} className="size-16 bg-background">
            <Image
              src={"/products/outlook.svg"}
              width={60}
              height={60}
              style={{
                scale: "1",
              }}
              alt={"Office 365 Integration"}
            />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
      />
    </div>
  );
}

const Icons = {
  notion: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M7 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0m5-5V3m-1 0h2m2.536 5.464l2.828-2.828m-.707-.707l1.414 1.414M17 12h4m0-1v2m-5.465 2.536l2.829 2.828m.707-.707l-1.414 1.414M12 17v4m1 0h-2m-2.535-5.464l-2.829 2.828m.707.707L4.93 17.657M7 12H3m0 1v-2m5.464-2.536L5.636 5.636m-.707.707L6.343 4.93"
      />
    </svg>
  ),
  openai: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g fill="none">
        <path
          fill="#020202"
          d="M10.666 20.185a3.9 3.9 0 0 0-1.36-1.69a5.3 5.3 0 0 0-1.109-.59a3.3 3.3 0 0 0 .81-3.538a3.66 3.66 0 0 0-4.558-2.289a3.46 3.46 0 0 0-2.369 2.63a3.47 3.47 0 0 0 .93 3.338l.07.06a5.5 5.5 0 0 0-.73.37q-.441.284-.81.66a5.6 5.6 0 0 0-.67.839a6.7 6.7 0 0 0-.859 2.159a.33.33 0 0 0 .22.4a.32.32 0 0 0 .4-.21a7.1 7.1 0 0 1 1.06-1.79c.18-.22.38-.43.59-.64s.399-.39.629-.579q.474-.404 1-.74q.13.05.27.07a5.3 5.3 0 0 0 1.908 0a.31.31 0 0 0 .23-.18a.22.22 0 0 0 0 .13a.32.32 0 0 0 .41.18a4 4 0 0 0 .7-.33q.613.39 1.15.88q.318.3.599.64q.285.338.51.72c.355.634.643 1.304.86 1.998a.32.32 0 0 0 .254.28a.32.32 0 0 0 .382-.287a.3.3 0 0 0-.017-.133a8.6 8.6 0 0 0-.5-2.358m-4.098-2a.3.3 0 0 0-.18.2v-.05a.28.28 0 0 0-.32-.24c-3.878.39-3.058-2.858-3.058-3.118a2.48 2.48 0 0 1 1.679-1.83a2.71 2.71 0 0 1 3.388 1.56a2.63 2.63 0 0 1-1.509 3.439zM23.34 7.46l-.25-.17a7.3 7.3 0 0 0 .53-1.829a4.8 4.8 0 0 0-.32-2.478a3.5 3.5 0 0 0-2.589-1.9a3.42 3.42 0 0 0-3.068 1a4.1 4.1 0 0 0-.77 1.32a13 13 0 0 0-.51 1.998l-.66-.12h-.07a.29.29 0 0 0-.3.1a8.3 8.3 0 0 0-.999 1.51q-.429.789-.75 1.629a9.4 9.4 0 0 0-.789 2.05c-.073.377-.038.769.1 1.128c.145.335.368.63.65.86c.375.297.789.542 1.23.73q1.126.53 2.318.89q1.19.356 2.419.55a6.4 6.4 0 0 0 1.33.11a2.4 2.4 0 0 0 .999-.25a2.26 2.26 0 0 0 1-1q.358-.834.56-1.72c.341-.955.543-1.955.599-2.968a1.87 1.87 0 0 0-.66-1.44m-5.767-3.788c.172-.377.416-.717.72-1a2.53 2.53 0 0 1 2.229-.539a2.58 2.58 0 0 1 1.879 1.3c.308.593.446 1.26.4 1.929a6.4 6.4 0 0 1-.32 1.619a7 7 0 0 0-.8-.25l-1.68-.4c-.869-.22-1.708-.47-2.558-.68l-.56-.12q.273-.956.69-1.859M23 9.28a13 13 0 0 1-.63 2.269a7.6 7.6 0 0 1-.5 1.499a1.35 1.35 0 0 1-.529.58q-.278.116-.58.12a5.7 5.7 0 0 1-1.11-.08a20 20 0 0 1-2.288-.5a19 19 0 0 1-2.229-.75a4.5 4.5 0 0 1-1-.56a1.4 1.4 0 0 1-.43-.51a1.38 1.38 0 0 1 0-.919q.255-.846.6-1.66q.282-.814.66-1.588q.277-.63.66-1.2c.57.11 1.13.25 1.659.4c.85.24 1.68.52 2.549.77l1.61.48q.444.125.869.31q.242.116.45.29A1.17 1.17 0 0 1 23 9.28"
        />
        <path
          fill="#020202"
          d="M18.723 8.98c-1-.31-2.4.52-1.51 1.52c1.18 1.349 3.668-.81 1.51-1.52"
        />
        <path
          fill="#0c6fff"
          d="M11.626 5.551a4.8 4.8 0 0 0-2.779.21a7 7 0 0 0-1.08.53a5.7 5.7 0 0 0-.929.75a4.93 4.93 0 0 0-1.36 2.419a.29.29 0 0 0 .53.17a4.7 4.7 0 0 1 1.5-1.82q.396-.325.83-.6q.427-.284.889-.51a4.4 4.4 0 0 1 2.269-.519a.32.32 0 0 0 .11-.63zm6.647 9.426a.29.29 0 0 0-.33.24a6.1 6.1 0 0 1-1.26 2.219a8 8 0 0 1-.73.81q-.374.387-.799.72a4 4 0 0 1-2.269.909a.33.33 0 0 0-.26.542a.32.32 0 0 0 .22.107a4.6 4.6 0 0 0 2.879-.72a5.4 5.4 0 0 0 1-.779q.451-.459.799-1a6.1 6.1 0 0 0 1-2.738a.3.3 0 0 0-.25-.31"
        />
      </g>
    </svg>
  ),
  googleDrive: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M10.666 20.185a3.9 3.9 0 0 0-1.36-1.69a5.3 5.3 0 0 0-1.109-.59a3.3 3.3 0 0 0 .81-3.538a3.66 3.66 0 0 0-4.558-2.289a3.46 3.46 0 0 0-2.369 2.63a3.47 3.47 0 0 0 .93 3.338l.07.06a5.5 5.5 0 0 0-.73.37q-.441.284-.81.66a5.6 5.6 0 0 0-.67.839a6.7 6.7 0 0 0-.859 2.159a.33.33 0 0 0 .22.4a.32.32 0 0 0 .4-.21a7.1 7.1 0 0 1 1.06-1.79c.18-.22.38-.43.59-.64s.399-.39.629-.579q.474-.404 1-.74q.13.05.27.07a5.3 5.3 0 0 0 1.908 0a.31.31 0 0 0 .23-.18a.22.22 0 0 0 0 .13a.32.32 0 0 0 .41.18a4 4 0 0 0 .7-.33q.613.39 1.15.88q.318.3.599.64q.285.338.51.72c.355.634.643 1.304.86 1.998a.32.32 0 0 0 .254.28a.32.32 0 0 0 .382-.287a.3.3 0 0 0-.017-.133a8.6 8.6 0 0 0-.5-2.358m-4.098-2a.3.3 0 0 0-.18.2v-.05a.28.28 0 0 0-.32-.24c-3.878.39-3.058-2.858-3.058-3.118a2.48 2.48 0 0 1 1.679-1.83a2.71 2.71 0 0 1 3.388 1.56a2.63 2.63 0 0 1-1.509 3.439zM23.34 7.46l-.25-.17a7.3 7.3 0 0 0 .53-1.829a4.8 4.8 0 0 0-.32-2.478a3.5 3.5 0 0 0-2.589-1.9a3.42 3.42 0 0 0-3.068 1a4.1 4.1 0 0 0-.77 1.32c-.224.65-.394 1.32-.51 1.998l-.66-.12h-.07a.29.29 0 0 0-.299.1a8.3 8.3 0 0 0-1 1.51q-.429.789-.75 1.629a9.4 9.4 0 0 0-.789 2.05c-.073.377-.038.769.1 1.128c.145.335.368.63.65.86c.375.297.789.542 1.23.73q1.126.53 2.318.89q1.19.356 2.419.55q.659.123 1.33.11a2.4 2.4 0 0 0 .999-.25a2.26 2.26 0 0 0 1-1q.358-.834.56-1.72c.341-.955.543-1.955.599-2.968a1.87 1.87 0 0 0-.66-1.44m-5.767-3.788c.172-.377.416-.717.72-1a2.53 2.53 0 0 1 2.229-.539a2.58 2.58 0 0 1 1.879 1.3c.308.593.446 1.26.4 1.929a6.4 6.4 0 0 1-.32 1.619a7 7 0 0 0-.8-.25l-1.68-.4c-.869-.22-1.708-.47-2.558-.68l-.56-.12q.274-.956.69-1.859M23 9.28a13 13 0 0 1-.63 2.269a7.5 7.5 0 0 1-.5 1.499a1.35 1.35 0 0 1-.529.58q-.278.116-.58.12a5.7 5.7 0 0 1-1.109-.08a20 20 0 0 1-2.289-.5a19 19 0 0 1-2.229-.75a4.5 4.5 0 0 1-1-.56a1.4 1.4 0 0 1-.43-.51a1.38 1.38 0 0 1 0-.919q.255-.846.6-1.66q.282-.814.66-1.588q.277-.63.66-1.2c.57.11 1.13.25 1.66.4c.849.24 1.678.52 2.548.77l1.61.48q.444.125.869.31q.242.116.45.29A1.17 1.17 0 0 1 23 9.28"
        stroke-width="1"
        stroke="currentColor"
      />
      <path
        fill="currentColor"
        d="M18.722 8.98c-1-.31-2.399.52-1.509 1.52c1.18 1.349 3.668-.81 1.51-1.52m-7.097-3.429a4.8 4.8 0 0 0-2.779.21a7 7 0 0 0-1.08.53a5.7 5.7 0 0 0-.929.75a4.93 4.93 0 0 0-1.36 2.419a.29.29 0 0 0 .53.17a4.7 4.7 0 0 1 1.5-1.82q.396-.325.83-.6q.427-.284.889-.51a4.4 4.4 0 0 1 2.269-.519a.32.32 0 0 0 .11-.63zm6.647 9.426a.29.29 0 0 0-.33.24a6.1 6.1 0 0 1-1.26 2.219a8 8 0 0 1-.73.81a8 8 0 0 1-.799.72a4 4 0 0 1-2.269.909a.33.33 0 0 0-.323.434a.32.32 0 0 0 .283.215a4.6 4.6 0 0 0 2.879-.72q.546-.33 1-.779q.451-.459.799-1a6.1 6.1 0 0 0 1-2.738a.3.3 0 0 0-.25-.31"
        stroke-width="1"
        stroke="currentColor"
      />
    </svg>
  ),
  whatsapp: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M17.06 13c-1.86 0-3.42 1.33-3.82 3.1c-.95-.41-1.82-.3-2.48-.01C10.35 14.31 8.79 13 6.94 13C4.77 13 3 14.79 3 17s1.77 4 3.94 4c2.06 0 3.74-1.62 3.9-3.68c.34-.24 1.23-.69 2.32.02c.18 2.05 1.84 3.66 3.9 3.66c2.17 0 3.94-1.79 3.94-4s-1.77-4-3.94-4M6.94 19.86c-1.56 0-2.81-1.28-2.81-2.86s1.26-2.86 2.81-2.86c1.56 0 2.81 1.28 2.81 2.86s-1.25 2.86-2.81 2.86m10.12 0c-1.56 0-2.81-1.28-2.81-2.86s1.25-2.86 2.81-2.86s2.82 1.28 2.82 2.86s-1.27 2.86-2.82 2.86M22 10.5H2V12h20zm-6.47-7.87c-.22-.49-.78-.75-1.31-.58L12 2.79l-2.23-.74l-.05-.01c-.53-.15-1.09.13-1.29.64L6 9h12l-2.44-6.32z"
        stroke-width="0.6"
        stroke="currentColor"
      />
    </svg>
  ),
  googleDocs: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M9.41 20H6.5c-1.5 0-2.82-.5-3.89-1.57C1.54 17.38 1 16.09 1 14.58q0-1.95 1.17-3.48a5.25 5.25 0 0 1 3.08-1.95c.42-1.53 1.25-2.77 2.5-3.72C9 4.5 10.42 4 12 4c1.95 0 3.61.68 4.96 2.04C18.32 7.39 19 9.05 19 11c1.15.13 2.11.63 2.86 1.5c.64.73 1 1.56 1.1 2.5H18a5.01 5.01 0 0 0-4-2c-2.8 0-5 2.2-5 5c0 .72.15 1.39.41 2M23 17v2h-2v2h-2v-2h-2.2c-.4 1.2-1.5 2-2.8 2c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.3 0 2.4.8 2.8 2zm-8 1c0-.5-.4-1-1-1s-1 .5-1 1s.4 1 1 1s1-.5 1-1"
      />
    </svg>
  ),
  zapier: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M7 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0m5-5V3m-1 0h2m2.536 5.464l2.828-2.828m-.707-.707l1.414 1.414M17 12h4m0-1v2m-5.465 2.536l2.829 2.828m.707-.707l-1.414 1.414M12 17v4m1 0h-2m-2.535-5.464l-2.829 2.828m.707.707L4.93 17.657M7 12H3m0 1v-2m5.464-2.536L5.636 5.636m-.707.707L6.343 4.93"
      />
    </svg>
  ),
  messenger: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 16 16"
    >
      <g fill="currentColor" stroke-width="0.6" stroke="currentColor">
        <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5a.5.5 0 0 1-.5.5a.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5a.5.5 0 0 1-.5-.5" />
        <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585q.084.236.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5q.001-.264.085-.5M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1" />
      </g>
    </svg>
  ),
  user: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 48 48"
      scale={4}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.9322 9.34307L7.97588 23.8943L6.00165 20.7797V18.0959C6.00165 17.1188 6.49634 16.2081 7.31603 15.6762L20.6606 7.01716C22.6937 5.69792 25.3125 5.69771 27.3458 7.01665L30.9322 9.34307Z"
        fill="url(#paint0_linear_76780_14576)"
      />
      <path
        d="M27.1402 6.88928C27.2092 6.93033 27.2777 6.97284 27.3455 7.01682L37.76 13.7724L11.9375 30.1404L7.97498 23.8891L26.9262 11.8533C28.7213 10.7133 28.7999 8.14871 27.1402 6.88928Z"
        fill="url(#paint1_linear_76780_14576)"
      />
      <path
        d="M27.1402 6.88928C27.2092 6.93033 27.2777 6.97284 27.3455 7.01682L37.76 13.7724L11.9375 30.1404L7.97498 23.8891L26.9262 11.8533C28.7213 10.7133 28.7999 8.14871 27.1402 6.88928Z"
        fill="url(#paint2_linear_76780_14576)"
        fill-opacity="0.2"
      />
      <path
        d="M22.2402 33.2659L11.9377 30.1406L33.842 16.2557C35.6868 15.0864 35.682 12.3932 33.8331 11.2304L33.7344 11.1684L34.0185 11.3451L40.685 15.6695C41.5049 16.2014 41.9998 17.1122 41.9998 18.0895V20.687L22.2402 33.2659Z"
        fill="url(#paint3_linear_76780_14576)"
      />
      <path
        d="M22.2402 33.2659L11.9377 30.1406L33.842 16.2557C35.6868 15.0864 35.682 12.3932 33.8331 11.2304L33.7344 11.1684L34.0185 11.3451L40.685 15.6695C41.5049 16.2014 41.9998 17.1122 41.9998 18.0895V20.687L22.2402 33.2659Z"
        fill="url(#paint4_linear_76780_14576)"
        fill-opacity="0.2"
      />
      <path
        d="M27.3458 7.01665C25.3125 5.69771 22.6937 5.69792 20.6605 7.01716L7.31603 15.6762C6.49634 16.2081 6.00165 17.1188 6.00165 18.0959V18.2272C6.03382 19.208 6.55002 20.1121 7.38373 20.6378L23.9764 31.0985L40.6108 20.6537C41.4747 20.1112 41.999 19.1628 41.999 18.1427V20.6873L41.9994 18.0896C41.9994 17.1123 41.5045 16.2015 40.6846 15.6696L27.3458 7.01665Z"
        fill="url(#paint5_radial_76780_14576)"
      />
      <path
        d="M21.0513 42.0035H35.748C39.1998 42.0035 41.998 39.2053 41.998 35.7535L41.998 18.1426C41.998 19.1627 41.4736 20.1111 40.6098 20.6536L18.7495 34.3798C17.5703 35.1202 16.8546 36.4149 16.8547 37.8073C16.8549 40.1248 18.7337 42.0035 21.0513 42.0035Z"
        fill="url(#paint6_linear_76780_14576)"
      />
      <path
        d="M21.0513 42.0035H35.748C39.1998 42.0035 41.998 39.2053 41.998 35.7535L41.998 18.1426C41.998 19.1627 41.4736 20.1111 40.6098 20.6536L18.7495 34.3798C17.5703 35.1202 16.8546 36.4149 16.8547 37.8073C16.8549 40.1248 18.7337 42.0035 21.0513 42.0035Z"
        fill="url(#paint7_radial_76780_14576)"
        fill-opacity="0.4"
      />
      <path
        d="M21.0513 42.0035H35.748C39.1998 42.0035 41.998 39.2053 41.998 35.7535L41.998 18.1426C41.998 19.1627 41.4736 20.1111 40.6098 20.6536L18.7495 34.3798C17.5703 35.1202 16.8546 36.4149 16.8547 37.8073C16.8549 40.1248 18.7337 42.0035 21.0513 42.0035Z"
        fill="url(#paint8_radial_76780_14576)"
        fill-opacity="0.5"
      />
      <path
        d="M27.0268 42.0023H12.2492C8.79745 42.0023 5.99923 39.2041 5.99923 35.7523V18.1297C5.99923 19.1478 6.52165 20.0948 7.38292 20.6377L29.2215 34.4058C30.4171 35.1595 31.1423 36.4741 31.1421 37.8874C31.1419 40.1601 29.2995 42.0023 27.0268 42.0023Z"
        fill="url(#paint9_radial_76780_14576)"
      />
      <path
        d="M27.0268 42.0023H12.2492C8.79745 42.0023 5.99923 39.2041 5.99923 35.7523V18.1297C5.99923 19.1478 6.52165 20.0948 7.38292 20.6377L29.2215 34.4058C30.4171 35.1595 31.1423 36.4741 31.1421 37.8874C31.1419 40.1601 29.2995 42.0023 27.0268 42.0023Z"
        fill="url(#paint10_linear_76780_14576)"
      />
      <rect
        x="4"
        y="23"
        width="16"
        height="16"
        rx="3.25"
        fill="url(#paint11_radial_76780_14576)"
      />
      <rect
        x="4"
        y="23"
        width="16"
        height="16"
        rx="3.25"
        fill="url(#paint12_radial_76780_14576)"
        fill-opacity="0.5"
      />
      <path
        d="M11.959 35.5999C10.636 35.5999 9.54994 35.186 8.70069 34.3583C7.85144 33.5306 7.42682 32.4505 7.42682 31.1179C7.42682 29.7107 7.85785 28.5726 8.7199 27.7035C9.58195 26.8345 10.7107 26.3999 12.1062 26.3999C13.4249 26.3999 14.4982 26.8158 15.3261 27.6477C16.1583 28.4795 16.5744 29.5762 16.5744 30.9378C16.5744 32.3367 16.1433 33.4644 15.2813 34.3211C14.4235 35.1736 13.3161 35.5999 11.959 35.5999ZM11.9974 33.8431C12.7186 33.8431 13.299 33.5968 13.7386 33.1044C14.1781 32.6119 14.3979 31.9269 14.3979 31.0496C14.3979 30.1349 14.1845 29.4231 13.7578 28.9141C13.331 28.405 12.7613 28.1505 12.0486 28.1505C11.3146 28.1505 10.7235 28.4133 10.2754 28.9389C9.82733 29.4604 9.60328 30.1515 9.60328 31.0123C9.60328 31.8856 9.82733 32.5767 10.2754 33.0857C10.7235 33.5906 11.2975 33.8431 11.9974 33.8431Z"
        fill="white"
      />
      <path
        d="M11.9554 35.7233C10.6375 35.7233 9.55551 35.2982 8.7095 34.448C7.8635 33.5977 7.44049 32.4881 7.44049 31.1192C7.44049 29.6737 7.86987 28.5046 8.72864 27.6119C9.5874 26.7191 10.7119 26.2727 12.102 26.2727C13.4157 26.2727 14.4849 26.7 15.3097 27.5545C16.1387 28.409 16.5532 29.5356 16.5532 30.9343C16.5532 32.3712 16.1238 33.5297 15.265 34.4097C14.4105 35.2855 13.3073 35.7233 11.9554 35.7233ZM11.9936 33.9187C12.7121 33.9187 13.2903 33.6657 13.7282 33.1598C14.1661 32.6539 14.385 31.9503 14.385 31.049C14.385 30.1095 14.1724 29.3783 13.7473 28.8554C13.3222 28.3325 12.7546 28.071 12.0447 28.071C11.3134 28.071 10.7246 28.341 10.2782 28.8809C9.83185 29.4165 9.60865 30.1265 9.60865 31.0108C9.60865 31.9078 9.83185 32.6178 10.2782 33.1407C10.7246 33.6593 11.2964 33.9187 11.9936 33.9187Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_76780_14576"
          x1="9.98908"
          y1="22.3649"
          x2="30.9322"
          y2="9.37495"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#20A7FA" />
          <stop offset="0.4" stop-color="#3BD5FF" />
          <stop offset="1" stop-color="#C4B0FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_76780_14576"
          x1="17.1972"
          y1="26.7945"
          x2="28.8562"
          y2="8.12575"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#165AD9" />
          <stop offset="0.5008" stop-color="#1880E5" />
          <stop offset="1" stop-color="#8587FF" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_76780_14576"
          x1="25.7005"
          y1="27.0484"
          x2="12.7563"
          y2="16.5013"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.236946" stop-color="#448AFF" stop-opacity="0" />
          <stop offset="0.792113" stop-color="#0032B1" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_76780_14576"
          x1="24.0534"
          y1="31.1099"
          x2="44.51"
          y2="18.0177"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1A43A6" />
          <stop offset="0.492267" stop-color="#2052CB" />
          <stop offset="1" stop-color="#5F20CB" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_76780_14576"
          x1="29.8281"
          y1="30.3273"
          x2="17.3975"
          y2="19.5708"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0045B9" stop-opacity="0" />
          <stop offset="0.669859" stop-color="#0D1F69" />
        </linearGradient>
        <radialGradient
          id="paint5_radial_76780_14576"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(24.0018 6.81788) rotate(-90) scale(27.0027 29.2262)"
        >
          <stop offset="0.568182" stop-color="#275FF0" stop-opacity="0" />
          <stop offset="0.992424" stop-color="#002177" />
        </radialGradient>
        <linearGradient
          id="paint6_linear_76780_14576"
          x1="41.998"
          y1="29.9431"
          x2="23.8517"
          y2="29.9431"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#4DC4FF" />
          <stop offset="0.196145" stop-color="#0FAFFF" />
        </linearGradient>
        <radialGradient
          id="paint7_radial_76780_14576"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(28.0928 37.9117) rotate(-45) scale(11.572)"
        >
          <stop offset="0.259477" stop-color="#0060D1" />
          <stop offset="0.908166" stop-color="#0383F1" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="paint8_radial_76780_14576"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(10.6314 46.472) rotate(-52.6577) scale(39.2814 35.5204)"
        >
          <stop offset="0.732317" stop-color="#F4A7F7" stop-opacity="0" />
          <stop offset="1" stop-color="#F4A7F7" />
        </radialGradient>
        <radialGradient
          id="paint9_radial_76780_14576"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18.5708 27.5319) rotate(123.339) scale(20.7258 53.7859)"
        >
          <stop stop-color="#49DEFF" />
          <stop offset="0.724349" stop-color="#29C3FF" />
        </radialGradient>
        <linearGradient
          id="paint10_linear_76780_14576"
          x1="3.45756"
          y1="37.8723"
          x2="20.9291"
          y2="37.8597"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.205882" stop-color="#6CE0FF" />
          <stop offset="0.535" stop-color="#50D5FF" stop-opacity="0" />
        </linearGradient>
        <radialGradient
          id="paint11_radial_76780_14576"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(3.94291 23.6154) rotate(46.9242) scale(21.0618)"
        >
          <stop offset="0.038877" stop-color="#0091FF" />
          <stop offset="0.919119" stop-color="#183DAD" />
        </radialGradient>
        <radialGradient
          id="paint12_radial_76780_14576"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12 32.7439) rotate(90) scale(11.2 12.9188)"
        >
          <stop offset="0.557796" stop-color="#0FA5F7" stop-opacity="0" />
          <stop offset="1" stop-color="#74C6FF" />
        </radialGradient>
      </defs>
    </svg>

    // <svg
    //   width="24"
    //   height="24"
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   stroke="#000000"
    //   strokeWidth="2"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    //   <circle cx="12" cy="7" r="4" />
    // </svg>
  ),
};
