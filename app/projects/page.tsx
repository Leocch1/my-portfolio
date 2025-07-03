"use client";

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MotionDiv, MotionButton } from '@/components/motion';
import { Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, type MouseEvent } from 'react';

const detailedProjects = [
  {
    id: 'totentale',
    title: 'Tote&Tale',
    tech: 'Next.js, Typescript, Sanity, Clerk, Stripe',
    year: '2025',
    description: [
      'Developed Tote&Tale, a modern e-commerce platform for bag enthusiasts, utilizing Next.js 14, TypeScript, and Sanity for a robust and scalable architecture.',
      'Implemented Clerk for secure user authentication and Stripe for seamless payment processing, ensuring a smooth shopping experience.',
      'Designed a responsive and visually appealing user interface with Tailwind CSS, enhancing user engagement and accessibility across devices.',
    ],
    image: '/totentale1.png',
    hint: 'modern e-commerce platform for bag enthusiasts',
    liveLink: 'https://totentale.vercel.app/',
  },
  {
    id: 'enrollment-system',
    title: 'CvSU Enrollment System',
    tech: 'Laravel, PHP, MySQL, Bootstrap',
    year: '2024',
    description: [
      'Designed and developed an enrollment system for Cavite State University, implementing features such as student registration, course management, and payment processing.',
      'Utilized Laravel for backend development, ensuring a secure and efficient system with a user-friendly interface built using Bootstrap.',
      'Integrated MySQL for database management, enabling efficient data storage and retrieval.',
    ],
    image: '/cvsu.png',
    hint: 'enrollment system for Cavite State University',
    liveLink: 'https://github.com/Leocch1/enrollment-system',
  },
  {
    id: 'daily-sweets',
    title: 'Daily Sweets',
    tech: 'React, JavaScript XML, Tailwind CSS, Django',
    year: '2024',
    description: [
      'Developed Daily Sweets, an online store for selling sweets and pastries, using React for the frontend and Django for the backend.',
      'Implemented a responsive design with Tailwind CSS, ensuring a visually appealing and user-friendly interface across devices.',
      'Integrated features such as product listings, shopping cart functionality, and secure payment processing to enhance user experience.',
    ],
    image: '/dailysweets.jpg',
    hint: 'online store for sweets and pastries',
    liveLink: 'https://github.com/Leocch1/daily-sweets',
  },
  {
    id: 'leocchi-portfolio',
    title: 'Leocchi Portfolio',
    tech: 'Next.js, JavaScript XML, Tailwind CSS, Shadcn UI, Framer Motion',
    year: '2024',
    description: [
      'Created a personal portfolio website to showcase my skills and projects, utilizing Next.js for server-side rendering and static site generation.',
      'Designed a modern and responsive layout with Tailwind CSS and Shadcn UI components, ensuring a visually appealing user experience.',
      'Incorporated Framer Motion for smooth animations and transitions, enhancing the overall interactivity of the portfolio.',
    ],
    image: '/portfolio.png',
    hint: 'personal portfolio website',
    liveLink: 'https://leo-jimenez.vercel.app/',
  },
  {
    id: 'student-checklist',
    title: 'Student Checklist',
    tech: 'PHP, MySQL',
    year: '2023',
    description: [
      'Developed a simple checklist application for students to manage their subjects and grades, using PHP for backend development and MySQL for database management.',
    ],
    image: '/checklist.jpg',
    hint: 'student management system',
    liveLink: 'https://github.com/Leolouise26/MyChecklist',
  }
];

export default function ProjectsPage() {
  const [positions, setPositions] = useState(
    detailedProjects.map(() => ({ x: 0, y: 0 }))
  );

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPositions(prev => {
      const newPositions = [...prev];
      newPositions[index] = { x: x * 0.2, y: y * 0.2 };
      return newPositions;
    });
  };

  const handleMouseLeave = (index: number) => {
    setPositions(prev => {
      const newPositions = [...prev];
      newPositions[index] = { x: 0, y: 0 };
      return newPositions;
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#101210] text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
            My Projects
          </h1>
          <div className="relative flex items-center">
            <hr className="w-full border-t-2" style={{ borderColor: "#bfa27a" }} />
            <div className="absolute right-0 md:right-8 top-1/2 -translate-y-1/2">
               <Button
                size="icon"
                variant="outline"
                className="rounded-full w-16 h-16 bg-background border-2 shadow-lg"
                style={{ borderColor: "#bfa27a" }}
              >
                <Briefcase className="h-7 w-7" />
              </Button>
            </div>
          </div>
        </MotionDiv>
        
        <div className="space-y-8">
          {detailedProjects.map((project, index) => (
            <MotionDiv
              key={project.id}
              className="bg-[#101210] rounded-2xl border-2 p-4 sm:p-6"
              style={{ borderColor: "#bfa27a" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className={cn(
                    index % 2 !== 0 && "lg:order-last"
                )}>
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      data-ai-hint={project.hint}
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold">{project.title}</h2>
                      <p className="text-muted-foreground">{project.tech}</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono flex-shrink-0 mt-2">{project.year}</span>
                  </div>
                  
                  <hr className="border-t-2" style={{ borderColor: "#bfa27a" }}/>
                  
                  <ul className="space-y-2 list-disc list-inside text-foreground/80 text-sm">
                    {project.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <Link href={project.liveLink} passHref target="_blank" rel="noopener noreferrer">
                      <MotionButton
                        className="btn-fill-animation rounded-full px-16 py-4 text-base border-2"
                        style={{ borderColor: "#bfa27a" }}
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        animate={positions[index]}
                        transition={{ type: 'spring', stiffness: 400, damping: 10, mass: 0.5 }}
                      >
                        <span className="btn-content">
                          Visit
                        </span>
                      </MotionButton>
                    </Link>
                  </div>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
