"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MotionDiv, MotionNav, MotionHeader } from '@/components/motion';
import { Menu, X, Home, Briefcase, Mail } from 'lucide-react';
import { useState } from 'react';

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
        <rect x="2" y="3" width="16" height="12" rx="2" stroke="#f3e7d5" strokeWidth="1.5"/>
        <circle cx="6" cy="8" r="1.5" fill="#f3e7d5"/>
        <rect x="11" y="7" width="4" height="1.5" rx="0.75" fill="#f3e7d5"/>
        <rect x="4" y="11" width="10" height="1.5" rx="0.75" fill="#f3e7d5"/>
      </svg>
    ),
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="w-full border-b bg-[#101210] border-[#f3e7d5]/60 backdrop-blur supports-[backdrop-filter]:bg-[#101210]"
    >
      <div className="relative flex h-20 w-full items-center px-4 sm:px-6 lg:px-8 pt-2">
        {/* Brand Button */}
        <div className="flex-shrink-0">
          <Link
            href="/"
            className="rounded-full border border-[#f3e7d5]/60 px-8 py-3 text-base font-semibold text-[#f3e7d5] flex items-center gap-3 bg-[#101210]"
          >
            <span className="h-5 w-5 rounded-full bg-[#f3e7d5]" />
            Leocchi
          </Link>
        </div>

        {/* Center NavLinks */}
        <MotionNav
          className="hidden md:flex items-center space-x-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f3e7d5]/60 px-8 py-3 bg-[#101210]"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {navLinks.map((link) => (
            <MotionDiv
              key={link.href}
              variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
              className="flex items-center gap-2 text-base font-medium text-[#f3e7d5] hover:text-white"
            >
              {link.icon}
              <Link href={link.href}>{link.label}</Link>
            </MotionDiv>
          ))}
        </MotionNav>

        {/* Contact Me Button */}
        <div className="hidden md:flex items-center ml-auto">
          <Link href="/contact" passHref>
            <div className="rounded-full border border-[#f3e7d5]/60 px-8 py-3 text-base font-medium flex items-center gap-3 text-[#f3e7d5] hover:text-white hover:border-white bg-[#101210]">
              <Mail className="h-5 w-5" />
              Contact Me
            </div>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden ml-auto">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6 text-[#f3e7d5]" /> : <Menu className="h-6 w-6 text-[#f3e7d5]" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#101210] border-t border-[#f3e7d5]/20">
          <div className="px-4 pt-4 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2 rounded-md text-lg font-medium text-[#f3e7d5] hover:text-white hover:bg-[#f3e7d5]/10"
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
            <Link href="/contact" passHref>
              <div
                onClick={() => setIsMenuOpen(false)}
                className="w-full mt-2 text-base flex items-center justify-center gap-2 rounded-full border border-[#f3e7d5]/60 px-8 py-3 text-[#f3e7d5] bg-[#101210] hover:bg-[#bfa27a]/10"
              >
                <Mail className="h-5 w-5" />
                Contact Me
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
