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

    // eslint-disable-next-line react-hooks/set-state-in-effect
    startLoadingTimer(); // unified timer starter
  }, [pathname]);

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}
