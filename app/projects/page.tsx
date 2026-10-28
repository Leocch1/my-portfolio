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
    id: 'alagaco',
    title: 'alagaco',
    tech: 'Next.js, React',
    year: '2026',
    description: [
      'Built the website for alagaco, an all-in-one platform that connects households with verified local professionals for child and adult care, physical therapy, tutoring, home cleaning, and repairs.',
      'Developed the site with Next.js and React, including the services overview, a step-by-step "How it works" guide, and trust & safety content explaining provider vetting and secure payments.',
      'Created a responsive layout with dedicated service pages and clear calls to action for downloading the app and becoming a provider.',
    ],
    image: '/alagaco.png',
    hint: 'care and home services platform website',
    liveLink: 'https://alagaco.com/',
  },
  {
    id: 'alagaco-app',
    title: 'alagaco App',
    tech: 'React Native, JavaScript',
    year: '2026',
    description: [
      'Developed the alagaco mobile app with React Native and JavaScript, available on both Android and iOS, connecting households with verified local providers for care and home services.',
      'Built core screens including a home feed with updates, a services directory with categories such as infant/child care, adult care, physical therapy, house cleaning, home repair, and tutoring, and a list of popular providers nearby.',
      'Implemented tab navigation for Home, Services, Bookings, Messages, and Profile, along with notifications, favorites, and a branded splash screen.',
    ],
    image: '/alagaco-app.png',
    hint: 'mobile app screens for a care services platform',
    liveLink: 'https://play.google.com/store/apps/details?id=com.alagaco.app',
    linkLabel: 'Download for Android',
    appStoreLink: 'https://apps.apple.com/ph/app/alagaco/id6787851037',
  },
  {
    id: 'northstar',
    title: 'Project Northstar',
    tech: 'Next.js, React',
    year: '2026',
    description: [
      'Built the website for Project Northstar, an onboard training platform that helps maritime schools manage and mentor their cadets through every stage of training at sea.',
      'Developed the site with Next.js and React, presenting modules such as the e-Daily Journal, OTG task tracking, health monitoring, technical session booking, document validation, and fleet-wide visibility.',
      'Created a responsive layout with a portal login for schools and cadets, plus clear calls to action for booking a demo and starting a free trial.',
    ],
    image: '/northstar.png',
    hint: 'maritime onboard training platform website',
    liveLink: 'https://www.theprojectnorthstar.com/',
  },
  {
    id: 'my-global-connection',
    title: 'My Global Connection',
    tech: 'Next.js, React',
    year: '2026',
    description: [
      'Built the website for My Global Connection, an Employer of Record (EOR) and recruitment service that helps companies hire and manage talent in the Philippines.',
      'Developed the site with Next.js and React, including service pages, a "Why the Philippines" section, PH compliance and labor law guides, a blog, careers, and FAQs.',
      'Implemented English and German versions of the site, a responsive layout, and calls to action for requesting a quote and logging in to client accounts.',
    ],
    image: '/myglobalconnection.png',
    hint: 'global hiring and employer of record website',
    liveLink: 'https://myglobeconnect.com/en',
  },
  {
    id: 'pixeltech',
    title: 'PixelTech',
    tech: 'Next.js, React',
    year: '2026',
    description: [
      'Built the website for PixelTech, a creative lab offering business IT solutions such as responsive websites, mobile apps, and design and branding.',
      'Developed the site with Next.js and React, with sections for the company story, services, case studies, and a contact page.',
      'Created a responsive layout with a hero slider, a side navigation panel on desktop, and clear calls to action for starting a project.',
    ],
    image: '/pixeltech.png',
    hint: 'business it solutions website',
    liveLink: 'https://pixeltechph.com/',
  },
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
  // Magnetic hover offset per button, keyed by link URL (a project can have more than one button)
  const [positions, setPositions] = useState<Record<string, { x: number; y: number }>>({});

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>, key: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPositions(prev => ({ ...prev, [key]: { x: x * 0.2, y: y * 0.2 } }));
  };

  const handleMouseLeave = (key: string) => {
    setPositions(prev => ({ ...prev, [key]: { x: 0, y: 0 } }));
  };

  return (
    <div className="flex flex-col min-h-screen text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
            My Projects
          </h1>
          <div className="relative flex items-center">
            <hr className="w-full border-t border-white/10" />
            <div className="absolute right-0 md:right-8 top-1/2 -translate-y-1/2">
               <Button
                size="icon"
                variant="ghost"
                className="glass rounded-full w-16 h-16"
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
              className="glass rounded-[32px] p-4 sm:p-6"
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className={cn(
                    index % 2 !== 0 && "lg:order-last"
                )}>
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
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
                  
                  <hr className="border-t border-white/10" />
                  
                  <ul className="space-y-2 list-disc list-inside text-foreground/80 text-sm">
                    {project.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  <div className="pt-4 flex flex-wrap gap-3">
                    {[
                      { href: project.liveLink, label: project.linkLabel ?? 'Visit' },
                      ...(project.appStoreLink ? [{ href: project.appStoreLink, label: 'Download for iOS' }] : []),
                    ].map((link, _, links) => (
                      <Link key={link.href} href={link.href} passHref target="_blank" rel="noopener noreferrer">
                        <MotionButton
                          className={cn(
                            'btn-fill-animation rounded-full py-4 text-base',
                            links.length > 1 ? 'px-8' : 'px-16'
                          )}
                          onMouseMove={(e) => handleMouseMove(e, link.href)}
                          onMouseLeave={() => handleMouseLeave(link.href)}
                          animate={positions[link.href] ?? { x: 0, y: 0 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 10, mass: 0.5 }}
                        >
                          <span className="btn-content">
                            {link.label}
                          </span>
                        </MotionButton>
                      </Link>
                    ))}
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
