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

const certifications = [
    {
        title: 'Responsive Web Design',
        issuer: 'freeCodeCamp',
        year: '2025',
        image: 'cert3.png',
        hint: 'certificate web design'
    },
    {
        title: 'JavaScript Algorithms and Data Structures',
        issuer: 'freeCodeCamp',
        year: '2025',
        image: 'cert2.png',
        hint: 'certificate javascript'
    },
    {
        title: 'Front-End Development Libraries',
        issuer: 'freeCodeCamp',
        year: '2025',
        image: 'cert1.png',
        hint: 'certificate meta front-end'
    },
    {
        title: 'JavaScript (Basic)',
        issuer: 'HackerRank',
        year: '2025',
        image: 'cert4.png',
        hint: 'certificate javascript'
    },
    {
        title: 'SQL (Basic)',
        issuer: 'HackerRank',
        year: '2025',
        image: 'cert5.png',
        hint: 'certificate sql'
    },
    {
        title: 'CSS (Basic)',
        issuer: 'HackerRank',
        year: '2025',
        image: 'cert6.png',
        hint: 'certificate css'
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
            className="relative w-[600px] h-[700px] rounded-2xl overflow-hidden hidden lg:block"
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              src="/leo.jpg"
              alt="A portrait of Leo"
              width={600}
              height={700}
              className="object-cover w-full h-full"
              data-ai-hint="portrait professional"
              priority
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
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            <hr className="mb-12" style={{ borderColor: "#bfa27a" }} />
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold tracking-tight">Online Certifications</h2>
                <p className="mt-2 text-lg text-muted-foreground">My commitment to continuous learning.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certifications.map((cert, index) => (
                    <MotionDiv
                        key={index}
                        className="bg-card/30 rounded-lg border border-border/20 p-4 flex flex-col items-center text-center group"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden bg-muted mb-4">
                            <Image
                              src={cert.image.startsWith('http') ? cert.image : `/${cert.image}`}
                              alt={cert.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              data-ai-hint={cert.hint}
                            />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-xl font-bold">{cert.title}</h3>
                            <p className="text-md text-muted-foreground">{cert.issuer}</p>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">{cert.year}</p>
                    </MotionDiv>
                ))}
            </div>
        </MotionDiv>

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
      <Footer />
    </div>
  );
}
