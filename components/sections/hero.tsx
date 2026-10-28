"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MotionDiv, MotionButton } from "@/components/motion";
import Link from "next/link";
import { useState, type MouseEvent } from 'react';

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
    <section className="flex flex-grow items-center justify-center text-foreground p-4 pb-6 md:py-4 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto">
        <div className="relative text-center pt-24 min-h-[80vh] md:pt-0 md:min-h-0">
          {/* Cursors */}
          <MotionDiv
            className="absolute z-30 h-6 w-6 md:h-8 md:w-8"
            style={{ 
              top: '20%', 
              left: '48%' 
            }}
            animate={{
              x: [-25, 25, -25],
              y: [20, -20, 20],
              rotate: [-25, 25, -25],
            }}
            transition={{
              duration: 8,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'mirror',
            }}
          >
            <FilledCursor className="h-full w-full" color="#3b82f6" />
          </MotionDiv>
          
          <MotionDiv
            className="absolute z-30 h-8 w-8 hidden md:block"
            style={{ 
              top: '60%',
              right: '38%'
            }}
            animate={{
              x: [30, -30, 30],
              y: [-25, 25, -25],
              rotate: [-20, 20, -20],
            }}
            transition={{
              duration: 8.5,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'mirror',
            }}
          >
            <FilledCursor className="h-full w-full" color="#ec4899" />
          </MotionDiv>
          
          <MotionDiv
            className="absolute z-30 h-8 w-8 hidden md:block"
            style={{
              bottom: '18%', 
              left: '20%'
            }}
            animate={{
              x: [-25, 25, -25],
              y: [20, -20, 20],
              rotate: [30, -30, 30],
            }}
            transition={{
              duration: 7.5,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'mirror',
            }}
          >
            <FilledCursor className="h-full w-full" color="#a855f7" />
          </MotionDiv>
          
          <MotionDiv
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
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
            <div className="glass h-[70px] flex items-center rounded-full px-6 whitespace-nowrap text-lg font-medium text-foreground">
              Hello, I'm Leo
            </div>
          </MotionDiv>

          <div className="relative w-full">
            {/* On desktop the headline scales with screen height so the social bar below stays on the first screen */}
            <h1 className="font-extrabold tracking-tight text-5xl sm:text-6xl md:text-[length:clamp(3rem,calc((100svh_-_24rem)/4.6),6rem)] leading-tight md:leading-[1.15] z-10">
              
              {/* Mobile-only Comments Wrapper */}
              <div className="flex md:hidden justify-center items-center gap-2">
                <MotionDiv
                  initial={{ opacity: 0, x: -10, filter: "blur(10px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-[10px] text-white/70 text-left "
                >
                  // React · Next.js <br /> React Native
                </MotionDiv>
                <MotionDiv
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <span className="text-primary text-5xl sm:text-6xl">JUNIOR</span>
                </MotionDiv>
                <MotionDiv
                  initial={{ opacity: 0, x: 10, filter: "blur(10px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
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
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <span className="text-primary">JUNIOR</span>
                </MotionDiv>
                <MotionDiv
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-[10px] sm:text-xs text-white/70 pb-2 text-left tracking-wide leading-relaxed"
                >
                  //based in <br /> Metro Manila, <br /> Philippines
                </MotionDiv>
              </div>

              <div className="flex justify-center items-end gap-4">
                <MotionDiv
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <span className="text-secondary">FULL-STACK</span>
                </MotionDiv>
              </div>

              <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-x-4 gap-y-2 -mt-4">
                <MotionDiv
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <span className="text-foreground/90">WEB/MOBILE</span>
                </MotionDiv>
                <MotionDiv
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex-shrink-0 self-center flex text-base leading-none tracking-normal"
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
                </MotionDiv>
              </div>

              <div className="flex justify-center items-end gap-4">
                <MotionDiv
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-xs sm:text-xs text-white/70 pb-2 text-left hidden md:block tracking-wide leading-relaxed"
                >
                  // React · Next.js <br />
                  // React Native
                </MotionDiv>
                <MotionDiv
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
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
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
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
