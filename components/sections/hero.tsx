"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MotionDiv, MotionButton } from "@/components/motion";
import Link from "next/link";
import { useState, type MouseEvent } from 'react';
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const FilledCursor = ({ className, color }: { className?: string, color: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={color}
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
    </svg>
);

const LOOP_STEPS = 24;

// Sits just below its (relatively positioned) parent, pointing up at it, and glides side to side
// on a flat loop (wide `travel`, small `lift`) so the motion has a slight circular feel
const PointingCursor = ({
    color,
    travel,
    lift = 8,
    duration,
    mirrored = false,
    className,
}: {
    color: string;
    travel: number;
    lift?: number;
    duration: number;
    mirrored?: boolean;
    className?: string;
}) => {
    const reduceMotion = useReducedMotion();
    // Start on the left; a mirrored cursor also loops the other way round
    const angles = Array.from({ length: LOOP_STEPS + 1 }, (_, i) => Math.PI + (mirrored ? -1 : 1) * (2 * Math.PI * i) / LOOP_STEPS);
    const x = angles.map((a) => travel * Math.cos(a));
    const y = angles.map((a) => lift * Math.sin(a));

    return (
        <motion.div
            aria-hidden
            className={cn("pointer-events-none absolute left-1/2 top-full z-30 mt-1 h-8 w-8", className)}
            initial={{ x: x[0], y: y[0] }}
            animate={reduceMotion ? undefined : { x, y }}
            transition={{ duration, ease: "linear", repeat: Infinity }}
        >
            <FilledCursor
                className={cn("h-full w-full drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)]", mirrored && "-scale-x-100")}
                color={color}
            />
        </motion.div>
    );
};


export default function HeroSection() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setPosition({ x: x * 0.2, y: y * 0.2 });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

  return (
    // overflow-x-clip (not hidden) so the cursors can't add horizontal scroll but aren't cut off below
    <section className="flex flex-grow items-center justify-center text-foreground p-4 pb-6 md:py-4 overflow-x-clip">
      <div className="w-full max-w-6xl mx-auto">
        <div className="relative text-center pt-24 min-h-[80vh] md:pt-0 md:min-h-0">
          <MotionDiv
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex items-center gap-4 justify-center mb-4 z-10"
          >
            <Avatar className="h-[70px] w-[70px] overflow-hidden bg-white ring-1 ring-white/30 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <AvatarImage
                src="genmoji (1).png"
                alt="Leo"
                className="object-contain"
              />
              <AvatarFallback>L</AvatarFallback>
            </Avatar>
            <div className="glass relative h-[70px] flex items-center rounded-full px-6 whitespace-nowrap text-lg font-medium text-foreground">
              Hello, I'm Leo
              <PointingCursor color="#3b82f6" travel={45} duration={6} className="h-6 w-6 md:h-8 md:w-8" />
            </div>
          </MotionDiv>

          <div className="relative w-full">
            {/* On desktop the headline scales with screen height so the social bar below stays on the first screen */}
            <h1 className="font-extrabold tracking-tight text-5xl sm:text-6xl md:text-[length:clamp(3rem,calc((100svh_-_24rem)/4.6),6rem)] leading-tight md:leading-[1.15] z-10">
              
              {/* Mobile-only Comments Wrapper */}
              <div className="flex md:hidden justify-center items-center gap-2">
                <MotionDiv
                  initial={{ opacity: 0, x: -10, filter: "blur(10px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-[10px] text-white/70 text-left "
                >
                  // React · Next.js <br /> React Native
                </MotionDiv>
                <MotionDiv
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <span className="text-primary text-5xl sm:text-6xl">JUNIOR</span>
                </MotionDiv>
                <MotionDiv
                  initial={{ opacity: 0, x: 10, filter: "blur(10px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-[10px] text-white/70 text-left tracking-wide leading-relaxed"
                >
                  //based in <br /> Metro Manila, <br /> Philippines
                </MotionDiv>
              </div>

              {/* Desktop-only DIGITAL + comment */}
              <div className="hidden md:flex justify-center items-end gap-4">
                <MotionDiv
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <span className="text-primary">JUNIOR</span>
                </MotionDiv>
                <MotionDiv
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-[10px] sm:text-xs text-white/70 pb-2 text-left tracking-wide leading-relaxed"
                >
                  //based in <br /> Metro Manila, <br /> Philippines
                </MotionDiv>
              </div>

              <div className="flex justify-center items-end gap-4">
                <MotionDiv
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <span className="text-secondary">FULL-STACK</span>
                </MotionDiv>
              </div>

              <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-x-4 gap-y-2 -mt-4">
                <MotionDiv
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <span className="text-foreground/90">WEB/MOBILE</span>
                </MotionDiv>
                <MotionDiv
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="relative z-10 flex-shrink-0 self-center flex text-base leading-none tracking-normal"
                >
                    {/* flex (not inline) so the pill centers on the word instead of sitting on the headline's baseline */}
                    <Link href="/contact" passHref className="flex">
                        <MotionButton
                            className="btn-fill-animation rounded-full px-5 py-4 text-[15px] font-medium leading-6 tracking-tight inline-flex"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            animate={{ x: position.x, y: position.y }}
                            transition={{ type: 'spring', stiffness: 400, damping: 10, mass: 0.5 }}
                        >
                            <span className="btn-content flex items-center gap-2">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                                </span>
                                Let's Connect
                            </span>
                        </MotionButton>
                    </Link>
                    <PointingCursor color="#ec4899" travel={35} duration={5.2} className="hidden md:block" />
                </MotionDiv>
              </div>

              <div className="flex justify-center items-end gap-4">
                <MotionDiv
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="relative z-10 text-xs sm:text-xs text-white/70 pb-2 text-left hidden md:block tracking-wide leading-relaxed"
                >
                  // React · Next.js <br />
                  // React Native
                  {/* Mirrored so it points up-right; -ml-8 keeps its tip (now on the right edge) centered */}
                  <PointingCursor color="#a855f7" travel={30} duration={5.6} mirrored className="-mt-1 -ml-8" />
                </MotionDiv>
                <MotionDiv
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <span className="text-accent">DEVELOPER.</span>
                </MotionDiv>
              </div>
            </h1>
          </div>

          <MotionDiv
            className="mt-2 md:mt-4 max-w-xl mx-auto text-xl md:text-[length:clamp(1.125rem,2.6svh,1.5rem)] text-white/70 leading-relaxed"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            I build web and mobile apps with a focus on{" "}
            <span className="text-secondary font-bold">efficiency</span>,{" "}
            <span className="text-foreground/90 font-bold">clean code</span> and{" "}
            <span className="text-accent font-bold">functionality</span>.
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
