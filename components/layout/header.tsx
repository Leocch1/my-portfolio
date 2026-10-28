"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { MotionDiv, MotionNav } from '@/components/motion';
import { Menu, X, Home, Briefcase, Mail } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home', icon: <Home className="h-5 w-5" /> },
  { href: '/projects', label: 'My Projects', icon: <Briefcase className="h-5 w-5" /> },
  {
    href: '/about',
    label: 'About Me',
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="2" y="3" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="6" cy="8" r="1.5" fill="currentColor"/>
        <rect x="11" y="7" width="4" height="1.5" rx="0.75" fill="currentColor"/>
        <rect x="4" y="11" width="10" height="1.5" rx="0.75" fill="currentColor"/>
      </svg>
    ),
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="relative flex h-20 w-full items-center px-4 sm:px-6 lg:px-8 pt-2">
        {/* Brand Button */}
        <div className="flex-shrink-0">
          <Link
            href="/"
            className="glass glass-interactive rounded-full px-6 py-3 text-base font-semibold text-foreground flex items-center gap-3"
          >
            <span className="h-5 w-5 rounded-full bg-gradient-to-br from-primary via-accent to-secondary" />
            Leocchi
          </Link>
        </div>

        {/* Center NavLinks — Liquid Glass tab bar */}
        <MotionNav
          className="glass hidden md:flex items-center gap-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-1 rounded-full p-1.5"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <MotionDiv
                key={link.href}
                variants={{ hidden: { opacity: 0, y: -20, filter: "blur(10px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }}
                className="relative"
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <Link
                  href={link.href}
                  className={cn(
                    'relative flex items-center gap-2 rounded-full px-5 py-2.5 text-base font-medium transition-colors',
                    isActive ? 'text-white' : 'text-foreground/70 hover:text-white'
                  )}
                >
                  {link.icon}
                  {link.label}
                </Link>
              </MotionDiv>
            );
          })}
        </MotionNav>

        {/* Contact Me Button */}
        <div className="hidden md:flex items-center ml-auto">
          <Link
            href="/contact"
            className={cn(
              'glass glass-interactive rounded-full px-6 py-3 text-base font-medium flex items-center gap-3',
              pathname === '/contact' ? 'text-white bg-white/15' : 'text-foreground/90 hover:text-white'
            )}
          >
            <Mail className="h-5 w-5" />
            Contact Me
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden ml-auto">
          <button
            type="button"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="glass glass-interactive flex h-12 w-12 items-center justify-center rounded-full text-foreground"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — floating glass sheet */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden px-4"
            initial={{ opacity: 0, y: -12, scale: 0.97, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -12, scale: 0.97, filter: 'blur(10px)' }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            style={{ transformOrigin: 'top right' }}
          >
            <div className="glass rounded-[28px] p-2 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-2xl text-lg font-medium transition-colors',
                    pathname === link.href ? 'bg-white/15 text-white' : 'text-foreground/80 hover:text-white hover:bg-white/10'
                  )}
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-base font-semibold text-black"
              >
                <Mail className="h-5 w-5" />
                Contact Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
