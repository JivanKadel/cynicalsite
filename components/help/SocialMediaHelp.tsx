"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MessageSquareLock } from "lucide-react";
import { HelpDialog } from "./HelpDialog";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function HelpWidget() {
  const pathname = usePathname();

  const [visible, setVisible] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasDismissedMobile, setHasDismissedMobile] = useState(false);

  const pendingCollapseRef = useRef(false);

  useEffect(() => {
    const checkMobile = () => window.innerWidth < 640;
    setIsMobile(checkMobile());

    const handleResize = () => setIsMobile(checkMobile());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const collapseWidget = useCallback(() => {
    if (isMobile) {
      setVisible(false);
      setHasDismissedMobile(true);
    } else {
      setCollapsed(true);
    }
  }, [isMobile]);

  useEffect(() => {
    if (pathname !== "/" || hasDismissedMobile) return;

    setMounted(true);

    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 1500);

    const collapseTimer = setTimeout(() => {
      if (showDialog) {
        // Mark that we need to collapse after dialog closes
        pendingCollapseRef.current = true;
        return;
      }
      collapseWidget();
    }, 7000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(collapseTimer);
    };
  }, [pathname, collapseWidget, hasDismissedMobile, showDialog]);

  // Handle post-dialog collapse
  useEffect(() => {
    if (!showDialog && pendingCollapseRef.current) {
      pendingCollapseRef.current = false;
      collapseWidget();
    }
  }, [showDialog, collapseWidget]);

  useEffect(() => {
    if (!visible || collapsed || isMobile || showDialog) return;

    const autoCollapseTimer = setTimeout(() => {
      collapseWidget();
    }, 7000);

    return () => clearTimeout(autoCollapseTimer);
  }, [visible, collapsed, isMobile, showDialog, collapseWidget]);

  const handleExpand = () => {
    setCollapsed(false);
    setVisible(true);
  };

  const shouldHide = hasDismissedMobile && !showDialog;

  if (!mounted || pathname !== "/" || shouldHide) return null;

  return (
    <>
      <div className="fixed bottom-6 right-0 z-10 flex items-end">
        <AnimatePresence mode="wait">
          {!collapsed ? (
            <motion.div
              key="content"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="bg-background border border-border text-foreground p-4 rounded-l-xl shadow-lg w-48 sm:w-64 lg:w-72">
                <p className="text-sm mb-3">
                  Need help recovering hacked social media accounts?
                </p>

                <Link href={"/solutions/account-recovery"}>
                  <Button
                    className="w-full"
                    onClick={() => setShowDialog(true)}
                  >
                    Get Help
                  </Button>
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.button
              key="button"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onClick={handleExpand}
              className="hidden sm:flex items-center justify-center
            w-12 h-12 rounded-l-xl border border-border
            bg-background shadow-lg hover:bg-muted
            transition-colors"
            >
              <MessageSquareLock size={20} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      {/* <HelpDialog
        open={showDialog}
        onOpenChange={(open) => {
          setShowDialog(open);
          if (!open && isMobile) {
            setVisible(false);
            setHasDismissedMobile(true);
          }
        }}
      /> */}
    </>
  );
}
