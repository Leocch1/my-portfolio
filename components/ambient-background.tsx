"use client";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

// Soft wallpaper blobs, tinted with the site's primary / accent / secondary colors
const blobs = [
  { color: "hsl(261 90% 70% / 0.55)", className: "-top-1/4 -left-1/4 h-[70vmax] w-[70vmax]", drift: { x: [0, 60, -20, 0], y: [0, 40, 80, 0] } },
  { color: "hsl(165 75% 61% / 0.35)", className: "-bottom-1/3 -right-1/4 h-[65vmax] w-[65vmax]", drift: { x: [0, -50, 30, 0], y: [0, -60, -20, 0] } },
  { color: "hsl(39 90% 72% / 0.30)", className: "top-1/3 left-1/2 h-[45vmax] w-[45vmax]", drift: { x: [0, -80, 20, 0], y: [0, 30, -40, 0] } },
];

export default function AmbientBackground({
  className,
  intensity = 1,
}: {
  className?: string;
  intensity?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden className={cn("pointer-events-none overflow-hidden", className)} style={{ opacity: intensity }}>
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full will-change-transform ${blob.className}`}
          style={{
            background: `radial-gradient(circle at center, ${blob.color}, transparent 65%)`,
            filter: "blur(60px)",
          }}
          animate={reduceMotion ? undefined : blob.drift}
          transition={{ duration: 14 + i * 3, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      {/* Subtle vignette to keep the edges deep */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
    </div>
  );
}
