"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MotionDiv, MotionNav, MotionHeader } from '@/components/motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <MotionHeader
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-bold text-primary font-headline">
          Leocchi
        </Link>
        <MotionNav
          className="hidden items-center space-x-6 md:flex"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {navLinks.map((link) => (
            <MotionDiv key={link.href} variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}>
              <Link href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                {link.label}
              </Link>
            </MotionDiv>
          ))}
        </MotionNav>
        <div className="hidden items-center space-x-4 md:flex">
          <Link href="/contact" passHref>
            <Button>Contact Me</Button>
          </Link>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent/50">
                {link.label}
              </Link>
            ))}
            <Link href="/contact" passHref>
              <Button className="w-full mt-2" onClick={() => setIsMenuOpen(false)}>Contact Me</Button>
            </Link>
          </div>
        </div>
      )}
    </MotionHeader>
  );
}
