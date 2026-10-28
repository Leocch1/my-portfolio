"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const greetings = [
  "Hello",
  "Kamusta",
  "Hola",
  "Bonjour",
  "Ciao",
  "Hallo",
  "안녕하세요",
  "नमस्ते",
  "こんにちは",
];

const FIRST_HOLD = 1500; // ms "Hello" stays on screen
const STEP = 450; // ms between the remaining greetings
const LAST_HOLD = 900; // ms before the sheet swipes away

// Soft wallpaper blobs, tinted with the site's primary / secondary / accent colors
const blobs = [
  { color: "hsl(261 90% 70% / 0.55)", className: "-top-1/4 -left-1/4 h-[70vmax] w-[70vmax]", drift: { x: [0, 60, -20, 0], y: [0, 40, 80, 0] } },
  { color: "hsl(165 75% 61% / 0.35)", className: "-bottom-1/3 -right-1/4 h-[65vmax] w-[65vmax]", drift: { x: [0, -50, 30, 0], y: [0, -60, -20, 0] } },
  { color: "hsl(39 90% 72% / 0.30)", className: "top-1/3 left-1/2 h-[45vmax] w-[45vmax]", drift: { x: [0, -80, 20, 0], y: [0, 30, -40, 0] } },
];

const sfFont =
  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", system-ui, sans-serif';

export default function HelloSplash({ onFinish }: { onFinish: () => void }) {
  const [index, setIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const reduceMotion = useReducedMotion();
  const onFinishRef = useRef(onFinish);
  onFinishRef.current = onFinish;

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 1; i < greetings.length; i++) {
      timers.push(setTimeout(() => setIndex(i), FIRST_HOLD + (i - 1) * STEP));
    }
    const exitAt = FIRST_HOLD + (greetings.length - 2) * STEP + LAST_HOLD;
    timers.push(setTimeout(() => setIsExiting(true), exitAt));
    return () => timers.forEach(clearTimeout);
  }, []);

  const textBlur = reduceMotion ? "blur(0px)" : "blur(12px)";

  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-hidden"
      style={{ backgroundColor: "#0b0b0f", fontFamily: sfFont }}
      initial={{ y: 0, scale: 1, borderRadius: 0 }}
      animate={
        isExiting
          ? { y: "-110%", scale: 0.9, borderRadius: 48 }
          : { y: 0, scale: 1, borderRadius: 0 }
      }
      transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
      onAnimationComplete={() => {
        if (isExiting) onFinishRef.current();
      }}
    >
      {/* Wallpaper */}
      <div className="pointer-events-none absolute inset-0">
        {blobs.map((blob, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${blob.className}`}
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

      {/* Content */}
      <div className="relative flex h-full w-full flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: textBlur }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="flex flex-col items-center gap-8"
        >
          {/* Liquid Glass capsule — morphs width like the Dynamic Island */}
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="relative overflow-hidden rounded-full px-10 py-5 md:px-14 md:py-7"
            style={{
              background: "rgba(255, 255, 255, 0.07)",
              backdropFilter: "blur(28px) saturate(180%)",
              WebkitBackdropFilter: "blur(28px) saturate(180%)",
              border: "1px solid rgba(255, 255, 255, 0.16)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(255,255,255,0.06), 0 24px 70px rgba(0,0,0,0.45)",
            }}
          >
            {/* Specular highlight */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{
                background:
                  "linear-gradient(160deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.04) 35%, transparent 60%, rgba(255,255,255,0.06) 100%)",
              }}
            />
            <div className="relative flex items-center justify-center">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.h1
                  key={index}
                  layout="position"
                  className="whitespace-nowrap text-[2.5rem] font-semibold leading-none tracking-tight text-white md:text-[4rem] lg:text-[5rem]"
                  initial={{ opacity: 0, filter: textBlur, scale: 0.92 }}
                  animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                  exit={{ opacity: 0, filter: textBlur, scale: 1.06 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {greetings[index]}
                </motion.h1>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* iOS page control */}
          <div className="flex items-center gap-[7px]" aria-hidden>
            {greetings.map((_, i) => (
              <motion.span
                key={i}
                className="h-[7px] rounded-full bg-white"
                animate={{ width: i === index ? 22 : 7, opacity: i === index ? 0.95 : 0.3 }}
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Home indicator */}
        <motion.div
          aria-hidden
          className="absolute bottom-3 h-[5px] w-[134px] rounded-full bg-white/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        />
      </div>
    </motion.div>
  );
}
