"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Dribbble, ArrowRight } from 'lucide-react';
import { MotionFooter, MotionDiv } from '@/components/motion';

const BehanceIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M14.626 10.124h4.155V7.643h-4.155v2.481zM9.43 14.238h4.155v-2.48h-4.155v2.48zm-4.71-2.48h4.155v-2.48H4.72v2.48zM16.48 3H7.52C5.022 3 3 5.022 3 7.52v8.96C3 18.978 5.022 21 7.52 21h8.96c2.498 0 4.52-2.022 4.52-4.52V7.52C21 5.022 18.978 3 16.48 3zm-1.854 9.17h-2.12v2.481h2.12c1.32 0 1.966-.662 1.966-1.24 0-.578-.646-1.241-1.966-1.241zm-5.045-2.046c0-.578.646-1.24 1.965-1.24h2.12V7.643h-2.12c-1.32 0-1.965-.662-1.965-1.24 0-.578.645-1.24 1.965-1.24h2.59c1.653 0 2.949 1.296 2.949 2.95v.661c0 1.654-1.296 2.95-2.95 2.95h-2.589c-1.653 0-2.95-1.296-2.95-2.95z"/>
    </svg>
);

const DiscordIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M19.54 5.23c-1.48-1.04-3.23-1.76-5.1-2.09a1.05 1.05 0 0 0-1.05.7l-.58 2.34a13.3 13.3 0 0 0-4.66 0l-.58-2.34a1.05 1.05 0 0 0-1.05-.7c-1.87.33-3.62 1.05-5.1 2.09a1 1 0 0 0-.34.79c.1 2.06.89 6.22 3.22 8.52a1 1 0 0 0 .86.34 10.7 10.7 0 0 0 2.37-.92 1 1 0 0 0 .34-1.16l-.28-.88a1 1 0 0 1 .18-.9 7.69 7.69 0 0 1 3.42 0 1 1 0 0 1 .18.9l-.28.88a1 1 0 0 0 .34 1.16c.77.4 1.56.73 2.37.92a1 1 0 0 0 .86-.34c2.33-2.3 3.12-6.46 3.22-8.52a1 1 0 0 0-.34-.79Z"/>
    </svg>
);

const socialLinks = [
  { href: '#', icon: <Linkedin className="h-5 w-5" />, name: 'LinkedIn' },
  { href: '#', icon: <Dribbble className="h-5 w-5" />, name: 'Dribble' },
  { href: '#', icon: <Github className="h-5 w-5" />, name: 'Github' },
  { href: '#', icon: <BehanceIcon className="h-5 w-5" />, name: 'Behance' },
  { href: '#', icon: <DiscordIcon className="h-5 w-5" />, name: 'Discord' },
];

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <MotionFooter 
      className="bg-card text-foreground/80 pt-12 pb-8 border-t border-border/40 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"> {/* gap-4 mb-6 for compactness */}
          <div>
            <h3 className="text-base font-medium leading-tight">
              Where <span className="text-primary font-semibold">aesthetics</span> & <span className="text-accent font-semibold">functionality</span> meet
            </h3>
          </div>
          
          <div>
            <h4 className="font-semibold text-base text-secondary mb-2">Explore</h4>
            <nav className="space-y-2">
              <Link href="/" className="block hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="block hover:text-primary transition-colors">About Me</Link>
              <Link href="/contact" className="block hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>
          
          <div>
            <h4 className="font-semibold text-base text-accent mb-2">Follow Me</h4>
            <div className="space-y-2">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  {social.icon}
                  <span className="text-sm">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <Link href="/contact" className="group block">
              <div className="flex items-center justify-between py-1 border-b border-border/40 hover:border-primary/50 transition-colors">
                <div>
                  <p className="font-semibold text-sm">Contact Me</p>
                  <p className="text-xs text-muted-foreground">Say Hello!</p>
                </div>
                <div className="p-1 border border-border rounded-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
            <Link href="/projects" className="group block">
              <div className="flex items-center justify-between py-1 border-b border-border/40 hover:border-primary/50 transition-colors">
                <div>
                  <p className="font-semibold text-sm">My Projects</p>
                  <p className="text-xs text-muted-foreground">Explore Projects</p>
                </div>
                <div className="p-1 border border-border rounded-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-[12vw] md:text-[8vw] font-black tracking-tighter text-foreground/90 leading-tight select-none mb-2">Leocchi</h1>
        </MotionDiv>
        
        <div className="mt-6 pt-2 border-t border-border/40 text-xs text-muted-foreground">
          <div className="flex flex-col text-center gap-1 sm:flex-row sm:justify-between sm:text-left">
            <p>&copy; {year} Leocchi - <Link href="#" className="hover:text-primary">Privacy Policy</Link></p>
            <p>Metro Manila, Philippines</p>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 h-full w-1 bg-primary" />
    </MotionFooter>
  );
}
