"use client";

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { MotionDiv, MotionButton } from '@/components/motion';
import { useState, useEffect, type MouseEvent } from 'react';

const WavingHand = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <span style={{ display: 'inline-block' }}>👋</span>;
  }

  return (
    <MotionDiv
      animate={{ rotate: [0, 20, -10, 20, 0] }}
      transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
      style={{ display: 'inline-block', originX: 0.7, originY: 0.7 }}
    >
      <span>👋</span>
    </MotionDiv>
  );
};

const services = [
    {
        number: '01',
        title: 'Design',
        description: 'With a proven track record in designing websites, I deliver robust and user-friendly digital designs that are seamlessly integrated with development. My expertise ensures that each project not only looks great but also performs flawlessly, providing an exceptional user experience from start to finish.',
    },
    {
        number: '02',
        title: 'Development',
        description: 'I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions, and interaction. I use Next.js and React.js for development and incorporate GSAP and Framer Motion for animations.',
    },
    {
        number: '03',
        title: 'The full package',
        description: 'What sets me apart is my ability to deliver complete full-stack applications from concept to implementation. My keen eye for design, along with my expertise in frontend and backend development, including database integration, allows me to create exceptional projects.',
    },
];

export default function AboutPage() {
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
    <div className="flex flex-col min-h-screen bg-[#101210] text-foreground relative">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <MotionDiv
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
                Hello! I'm Leo <WavingHand />
              </h1>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground/80">
                Crafting Digital Excellence
              </h2>
            </MotionDiv>
            
            <MotionDiv
              className="mt-12 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <hr className="mb-8" style={{ borderColor: "#bfa27a" }} />
              <p className="text-xl md:text-2xl text-muted-foreground leading-snug">
                As a Computer Science student aspiring to be a Software Engineer, I excel in building scalable applications, enhancing user experiences, and streamlining development processes.
              </p>
            </MotionDiv>
          </div>
          
          <MotionDiv
            className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden hidden lg:block"
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              src="https://placehold.co/500x625.png"
              alt="A portrait of Leo"
              fill
              className="object-cover"
              data-ai-hint="portrait professional"
            />
          </MotionDiv>
        </div>

        <MotionDiv
            className="text-center my-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
        >
            <p className="text-xl text-primary font-semibold">I can help you with...</p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20">
            {services.map((service, index) => (
                <MotionDiv
                    key={service.number}
                    className="relative"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm text-muted-foreground">{service.number}</span>
                      <hr className="w-full" style={{ borderColor: "#bfa27a" }} />
                    </div>
                    <div className="pt-4">
                        <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                        <p className="text-base text-muted-foreground">{service.description}</p>
                    </div>
                </MotionDiv>
            ))}
        </div>

        <MotionDiv
            className="mt-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <hr className="mb-12" style={{ borderColor: "#bfa27a" }} />
            <div className="text-center">
              <Link href="/contact" passHref>
                  <MotionButton
                    className="btn-fill-animation rounded-full px-8 py-6 text-lg font-medium border-[#bfa27a]"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    animate={{ x: position.x, y: position.y }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10, mass: 0.5 }}
                  >
                    <span className="btn-content">
                        Contact Me
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                  </MotionButton>
              </Link>
            </div>
        </MotionDiv>
      </main>
      <div className="fixed top-0 right-0 h-full w-2 bg-primary z-10 hidden sm:block" />
      <Footer />
    </div>
  );
}
