// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// export default function DataFlow() {
//   const pathRef = useRef<SVGPathElement>(null);
//   const glowRef = useRef<SVGGElement>(null);

//   useEffect(() => {
//     if (!pathRef.current) return;

//     // Main flow animation - slower and more natural
//     gsap.to(pathRef.current, {
//       strokeDashoffset: -800,
//       duration: 8, // Slower duration
//       repeat: -1,
//       ease: "power1.inOut", // Smoother easing
//     });

//     // Subtle glow pulse
//     if (glowRef.current) {
//       gsap.to(glowRef.current, {
//         opacity: 0.6,
//         duration: 3,
//         repeat: -1,
//         yoyo: true,
//         ease: "power2.inOut",
//       });
//     }
//   }, []);

//   return (
//     <div className="w-full flex justify-center items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-8 rounded-2xl">
//       <svg viewBox="0 0 900 300" className="w-full max-w-6xl h-auto">
//         <defs>
//           <linearGradient
//             id="flowGradient"
//             gradientUnits="userSpaceOnUse"
//             x1="0"
//             y1="0"
//             x2="900"
//             y2="0"
//           >
//             <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
//             <stop offset="25%" stopColor="#22d3ee" stopOpacity="0.3" />
//             <stop offset="50%" stopColor="#41ee22" stopOpacity="1" />
//             <stop offset="75%" stopColor="#ee9622" stopOpacity="0.3" />
//             <stop offset="100%" stopColor="#ee9622" stopOpacity="0" />
//           </linearGradient>

//           <linearGradient
//             id="pathGlow"
//             gradientUnits="userSpaceOnUse"
//             x1="0"
//             y1="0"
//             x2="900"
//             y2="0"
//           >
//             <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.1" />
//             <stop offset="50%" stopColor="#41ee22" stopOpacity="0.3" />
//             <stop offset="100%" stopColor="#ee9622" stopOpacity="0.1" />
//           </linearGradient>

//           <filter id="glow">
//             <feGaussianBlur stdDeviation="6" result="blur" />
//             <feColorMatrix
//               in="blur"
//               type="matrix"
//               values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8"
//               result="glow"
//             />
//             <feComposite in="SourceGraphic" in2="glow" operator="over" />
//           </filter>

//           <filter id="softGlow">
//             <feGaussianBlur stdDeviation="3" result="blur" />
//             <feMerge>
//               <feMergeNode in="blur" />
//               <feMergeNode in="SourceGraphic" />
//             </feMerge>
//           </filter>
//         </defs>

//         {/* Background glow layer */}
//         <g ref={glowRef} opacity="0.8">
//           <path
//             d="M140 140 C 320 40, 580 240, 760 140"
//             fill="none"
//             stroke="url(#pathGlow)"
//             strokeWidth="24"
//             strokeLinecap="round"
//             filter="url(#softGlow)"
//           />
//         </g>

//         {/* Base path with softer edges */}
//         <path
//           d="M140 140 C 320 40, 580 240, 760 140"
//           fill="none"
//           stroke="rgba(84, 109, 168, 0.3)"
//           strokeWidth="12"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />

//         {/* Animated flow path */}
//         <path
//           ref={pathRef}
//           d="M140 140 C 320 40, 580 240, 760 140"
//           fill="none"
//           stroke="url(#flowGradient)"
//           strokeWidth="12"
//           strokeDasharray="140 660"
//           strokeLinecap="round"
//           filter="url(#glow)"
//         />

//         {/* Source logo with glow */}
//         <g filter="url(#softGlow)">
//           <image
//             href="/products/vigile_logo.png"
//             x="40"
//             y="100"
//             width="80"
//             height="80"
//             className="opacity-90"
//           />
//         </g>

//         {/* Destination logo with glow */}
//         <g filter="url(#softGlow)">
//           <image
//             href="/products/outlook.svg"
//             x="780"
//             y="100"
//             width="80"
//             height="80"
//             className="opacity-90"
//           />
//         </g>

//         {/* Connection points with subtle animation */}
//         <circle
//           cx="140"
//           cy="140"
//           r="8"
//           fill="#22d3ee"
//           opacity="0.6"
//           filter="url(#softGlow)"
//         >
//           <animate
//             attributeName="opacity"
//             values="0.6;1;0.6"
//             dur="2s"
//             repeatCount="indefinite"
//           />
//         </circle>

//         <circle
//           cx="760"
//           cy="140"
//           r="8"
//           fill="#ee9622"
//           opacity="0.6"
//           filter="url(#softGlow)"
//         >
//           <animate
//             attributeName="opacity"
//             values="0.6;1;0.6"
//             dur="2s"
//             repeatCount="indefinite"
//             begin="1s"
//           />
//         </circle>
//       </svg>
//     </div>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function DataFlow() {
  const pathRef = useRef<SVGPathElement>(null);
  const glowRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (!pathRef.current) return;

    // Back and forth animation for bidirectional flow
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(pathRef.current, {
      strokeDashoffset: -800,
      duration: 4,
      ease: "power1.inOut",
    }).to(pathRef.current, {
      strokeDashoffset: 0,
      duration: 4,
      ease: "power1.inOut",
    });

    // Subtle glow pulse
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        opacity: 0.6,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }
  }, []);

  return (
    <div className="w-full flex justify-center items-center">
      <svg viewBox="0 0 900 300" className="w-full max-w-6xl h-auto">
        <defs>
          <linearGradient
            id="flowGradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="900"
            y2="0"
          >
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
            <stop offset="25%" stopColor="#22d3ee" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#41ee22" stopOpacity="1" />
            <stop offset="75%" stopColor="#ee9622" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ee9622" stopOpacity="0" />
          </linearGradient>

          <linearGradient
            id="pathGlow"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="900"
            y2="0"
          >
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#41ee22" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ee9622" stopOpacity="0.1" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8"
              result="glow"
            />
            <feComposite in="SourceGraphic" in2="glow" operator="over" />
          </filter>

          {/* <filter id="softGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter> */}

          {/* Mask to prevent cropping at edges */}
          <mask id="edgeMask">
            <rect x="0" y="0" width="900" height="300" fill="white" />
            <rect x="0" y="0" width="20" height="300" fill="black" />
            <rect x="880" y="0" width="20" height="300" fill="black" />
          </mask>
        </defs>

        {/* Background glow layer - extended to prevent cropping */}
        <g ref={glowRef} opacity="0.8" mask="url(#edgeMask)">
          <path
            d="M140 140 C 320 40, 580 240, 760 140"
            fill="none"
            stroke="url(#pathGlow)"
            strokeWidth="24"
            strokeLinecap="round"
            filter="url(#softGlow)"
          />
        </g>

        {/* Base path with softer edges */}
        <path
          d="M140 140 C 320 40, 580 240, 760 140"
          fill="none"
          stroke="rgba(84, 109, 168, 0.3)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Animated flow path */}
        <path
          ref={pathRef}
          d="M140 140 C 320 40, 580 240, 760 140"
          fill="none"
          stroke="url(#flowGradient)"
          strokeWidth="12"
          strokeDasharray="140 660"
          strokeLinecap="round"
          filter="url(#glow)"
        />

        {/* Source logo with glow */}
        <g filter="url(#softGlow)">
          <image
            href="/products/vigile_logo.png"
            x="40"
            y="100"
            width="80"
            height="80"
            className="opacity-90"
          />
        </g>

        {/* Destination logo with glow */}
        <g filter="url(#softGlow)">
          <image
            href="/products/outlook.svg"
            x="780"
            y="100"
            width="80"
            height="80"
            className="opacity-90"
          />
        </g>

        {/* Connection points with subtle animation */}
        <circle
          cx="140"
          cy="140"
          r="8"
          fill="#22d3ee"
          opacity="0.6"
          filter="url(#softGlow)"
        >
          <animate
            attributeName="opacity"
            values="0.6;1;0.6"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>

        <circle
          cx="760"
          cy="140"
          r="8"
          fill="#ee9622"
          opacity="0.6"
          filter="url(#softGlow)"
        >
          <animate
            attributeName="opacity"
            values="0.6;1;0.6"
            dur="2s"
            repeatCount="indefinite"
            begin="1s"
          />
        </circle>
      </svg>
    </div>
  );
}
