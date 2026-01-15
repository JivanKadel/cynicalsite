// "use client";

// import {
//   createContext,
//   useContext,
//   useState,
//   useEffect,
//   useRef,
//   ReactNode,
// } from "react";
// import { usePathname } from "next/navigation";

// type LoadingContextType = { isLoading: boolean };

// const LoadingContext = createContext<LoadingContextType>({ isLoading: false });

// export function useLoading() {
//   return useContext(LoadingContext);
// }

// export function LoadingProvider({ children }: { children: ReactNode }) {
//   const pathname = usePathname();
//   const [isLoading, setIsLoading] = useState(true);
//   const prevPathnameRef = useRef(pathname);
//   const timerRef = useRef<NodeJS.Timeout | null>(null);

//   const MIN_DURATION = 500;

//   // Clear any existing timer
//   const clearTimer = () => {
//     if (timerRef.current) {
//       clearTimeout(timerRef.current);
//       timerRef.current = null;
//     }
//   };

//   // first load
//   useEffect(() => {
//     timerRef.current = setTimeout(() => {
//       setIsLoading(false);
//     }, MIN_DURATION);

//     return clearTimer;
//   }, []);

//   // Navigation changes
//   useEffect(() => {
//     if (prevPathnameRef.current === pathname) return;

//     prevPathnameRef.current = pathname;

//     clearTimer();

//     // eslint-disable-next-line react-hooks/set-state-in-effect
//     setIsLoading(true);

//     timerRef.current = setTimeout(() => {
//       setIsLoading(false);
//     }, MIN_DURATION);

//     return clearTimer;
//   }, [pathname]);

//   return (
//     <LoadingContext.Provider value={{ isLoading }}>
//       {children}
//     </LoadingContext.Provider>
//   );
// }

// lib/LoadingProvider.tsx
// "use client";

// import {
//   createContext,
//   useContext,
//   useState,
//   useEffect,
//   useRef,
//   ReactNode,
// } from "react";
// import { usePathname } from "next/navigation";

// type LoadingContextType = { isLoading: boolean };

// const LoadingContext = createContext<LoadingContextType>({ isLoading: false });

// export function useLoading() {
//   return useContext(LoadingContext);
// }

// export function LoadingProvider({ children }: { children: ReactNode }) {
//   const pathname = usePathname();
//   const [isLoading, setIsLoading] = useState(true);
//   const prevPathnameRef = useRef(pathname);
//   const timerRef = useRef<NodeJS.Timeout | null>(null);

//   const MIN_DURATION = 400;

//   const clearTimer = () => {
//     if (timerRef.current) {
//       clearTimeout(timerRef.current);
//       timerRef.current = null;
//     }
//   };

//   useEffect(() => {
//     const handleClick = (e: MouseEvent) => {
//       // Find nearest <a> or element with role=link
//       let target = e.target as HTMLElement;
//       while (target && target !== document.body) {
//         if (
//           target.tagName === "A" ||
//           target.getAttribute("role") === "link" ||
//           target.closest("a") // covers wrapped elements
//         ) {
//           const href =
//             target.getAttribute("href") ||
//             target.closest("a")?.getAttribute("href");

//           if (
//             href &&
//             !href.startsWith("#") &&
//             !href.startsWith("mailto:") &&
//             !href.startsWith("tel:")
//           ) {
//             // Likely a navigation → show loading NOW
//             clearTimer();
//             setIsLoading(true);
//             // We don't clear it here — pathname change will handle min duration
//           }
//           break;
//         }
//         target = target.parentElement!;
//       }
//     };

//     document.addEventListener("click", handleClick, true); // capture phase = earliest possible

//     return () => {
//       document.removeEventListener("click", handleClick, true);
//     };
//   }, []);

//   // Initial load minimum
//   useEffect(() => {
//     timerRef.current = setTimeout(() => setIsLoading(false), MIN_DURATION);
//     return clearTimer;
//   }, []);

//   // Pathname change → enforce minimum duration (handles back/forward too)
//   useEffect(() => {
//     if (prevPathnameRef.current === pathname) return;
//     prevPathnameRef.current = pathname;

//     clearTimer();
//     // eslint-disable-next-line react-hooks/set-state-in-effect
//     setIsLoading(true);

//     timerRef.current = setTimeout(() => {
//       setIsLoading(false);
//     }, MIN_DURATION);

//     return clearTimer;
//   }, [pathname]);

//   return (
//     <LoadingContext.Provider value={{ isLoading }}>
//       {children}
//     </LoadingContext.Provider>
//   );
// }

// lib/LoadingProvider.tsx
"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  ReactNode,
} from "react";
import { usePathname } from "next/navigation";

type LoadingContextType = { isLoading: boolean };

const LoadingContext = createContext<LoadingContextType>({ isLoading: false });

export function useLoading() {
  return useContext(LoadingContext);
}

export function LoadingProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const prevPathnameRef = useRef(pathname);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const MIN_DURATION = 400;

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const startLoadingTimer = () => {
    clearTimer();
    setIsLoading(true);
    timerRef.current = setTimeout(() => {
      setIsLoading(false);
    }, MIN_DURATION);
  };

  // Click detection – now handles same-route navigations too
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      let target = e.target as HTMLElement;
      while (target && target !== document.body) {
        const link = target.tagName === "A" ? target : target.closest("a");
        if (link) {
          const href = link.getAttribute("href");

          if (
            href &&
            !href.startsWith("#") &&
            !href.startsWith("mailto:") &&
            !href.startsWith("tel:") &&
            href.startsWith("/") // internal link
          ) {
            // Normalize href (remove origin, handle ./ ../ etc. roughly)
            const targetPath = new URL(href, window.location.origin).pathname;

            clearTimer();

            if (targetPath === pathname) {
              // Same route → force loading feedback + timer
              startLoadingTimer();
            } else {
              // Different route → set true now, timer will be managed by pathname effect
              setIsLoading(true);
            }
            break;
          }
        }
        target = target.parentElement!;
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [pathname]); // ← add pathname dep so it knows current path

  // Initial load
  useEffect(() => {
    timerRef.current = setTimeout(() => setIsLoading(false), MIN_DURATION);
    return clearTimer;
  }, []);

  // Real pathname changes (different routes, back/forward)
  useEffect(() => {
    if (prevPathnameRef.current === pathname) return;
    prevPathnameRef.current = pathname;

    startLoadingTimer(); // unified timer starter
  }, [pathname]);

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}
