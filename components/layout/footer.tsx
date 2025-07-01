"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { MotionA, MotionFooter, MotionDiv } from '@/components/motion';

const socialLinks = [
  { href: '#', icon: <Github className="h-5 w-5" />, name: 'GitHub' },
  { href: '#', icon: <Linkedin className="h-5 w-5" />, name: 'LinkedIn' },
  { href: '#', icon: <Twitter className="h-5 w-5" />, name: 'Twitter' },
];

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <MotionFooter 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="border-t border-border/40 bg-background/95"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold text-primary font-headline">Leocchi</h3>
            <p className="text-muted-foreground mt-2 text-center md:text-left">Crafting digital experiences.</p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="mt-4 space-y-2">
              <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors text-center">About</Link>
              <Link href="/projects" className="block text-muted-foreground hover:text-primary transition-colors text-center">Projects</Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-primary transition-colors text-center">Contact</Link>
            </nav>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-semibold text-lg">Get in Touch</h4>
             <div className="flex space-x-4 mt-4">
              {socialLinks.map((social, index) => (
                <MotionA
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {social.icon}
                </MotionA>
              ))}
            </div>
            <Link href="/contact" passHref>
              <Button className="mt-4" variant="outline">Let's Talk</Button>
            </Link>
          </div>
        </div>
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground"
        >
          © {year} Leocchi. All Rights Reserved.
        </MotionDiv>
      </div>
    </MotionFooter>
  );
}
