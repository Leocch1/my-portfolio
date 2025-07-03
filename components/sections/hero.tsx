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
    <section className="flex flex-grow items-center justify-center bg-[#101210] text-[#f3e7d5] p-4 pb-6 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto">
        <div className="relative text-center pt-24 min-h-[80vh]">
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex items-center gap-4 justify-center mb-4 z-10"
          >
            <Avatar className="h-[70px] w-[70px] border-2 border-border overflow-hidden bg-white">
              <AvatarImage
                src="genmoji (1).png"
                alt="Leo"
                className="object-contain"
              />
              <AvatarFallback>L</AvatarFallback>
            </Avatar>
            <div className="h-[70px] flex items-center border border-[#bfa27a] rounded-full px-4 whitespace-nowrap bg-[#101210] text-lg font-medium text-[#f3e7d5]">
              Hello, I'm Leo
            </div>
          </MotionDiv>

          <div className="relative w-full">
            <h1 className="font-extrabold tracking-tight text-5xl sm:text-6xl md:text-8xl leading-tight md:leading-[1.15] z-10">
              
              {/* Mobile-only Comments Wrapper */}
              <div className="flex md:hidden justify-center items-center gap-2">
                <MotionDiv
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-[10px] text-white/70 text-left "
                >
                  // UI/UX Designer <br /> Full-Stack Developer
                </MotionDiv>
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <span className="text-primary text-5xl sm:text-6xl">DIGITAL</span>
                </MotionDiv>
                <MotionDiv
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-[10px] text-white/70 text-left tracking-wide leading-relaxed"
                >
                  //based in <br /> Metro Manila, <br /> Philippines
                </MotionDiv>
              </div>

              {/* Desktop-only DIGITAL + comment */}
              <div className="hidden md:flex justify-center items-end gap-4">
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <span className="text-primary">DIGITAL</span>
                </MotionDiv>
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-[10px] sm:text-xs text-white/70 pb-2 text-left tracking-wide leading-relaxed"
                >
                  //based in <br /> Metro Manila, <br /> Philippines
                </MotionDiv>
              </div>

              <div className="flex justify-center items-end gap-4">
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <span className="text-secondary">EXPERIENCE</span>
                </MotionDiv>
              </div>

              <div className="flex justify-center items-center gap-4 -mt-4">
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <span className="text-foreground/90">STUDENT</span>
                </MotionDiv>
                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex-shrink-0 self-center"
                >
                    <Link href="/contact" passHref>
                        <MotionButton
                            className="btn-fill-animation rounded-full px-6 py-4 text-base font-medium inline-flex"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            animate={{ x: position.x, y: position.y }}
                            transition={{ type: 'spring', stiffness: 400, damping: 10, mass: 0.5 }}
                        >
                            <span className="btn-content flex items-center gap-2.5">
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-xs sm:text-sm text-white/70 pb-2 text-left hidden md:block"
                >
                  // UI/UX Designer <br />
                  // Full-Stack Developer
                </MotionDiv>
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <span className="text-accent">& DEVELOPER.</span>
                </MotionDiv>
              </div>
            </h1>
          </div>

          <MotionDiv
            className="mt-2 md:mt-4 max-w-xl mx-auto text-xl md:text-2xl text-white/70 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            I create a digital experience that borders on{" "}
            <span className="text-secondary font-bold">efficiency</span>,{" "}
            <span className="text-foreground/90 font-bold">aesthetics</span> and{" "}
            <span className="text-accent font-bold">functionality</span>.
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
