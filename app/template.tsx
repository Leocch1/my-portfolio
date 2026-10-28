"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

// Blur-in on every route change, like iOS app transitions.
// The filter is cleared afterwards so fixed-position children keep working.
export default function Template({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();

  // Home opens with its own splash screen, which is fixed-position and has its own entrance
  if (pathname === "/" || reduceMotion) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(12px)" }}
      animate={{ opacity: 1, filter: "blur(0px)", transitionEnd: { filter: "none" } }}
      transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
    >
      {children}
    </motion.div>
  );
}
