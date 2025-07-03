"use client"

import { MotionSection } from '@/components/motion';
import { motion } from "framer-motion";

// Add this to your _app.tsx or _document.tsx <Head> for global CSS if not already present:
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

const technologies = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
  { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg' },
  // Add more as needed
];

const animateScrollLeft = {
animate: {
    x: ['-50%', '0%'],
    transition: {
      repeat: Infinity,
      repeatType: 'loop',
      duration: 40,
      ease: 'linear',
    },
  },
};

export default function TechStackSection() {
  return (
    <MotionSection 
      id="tech-stack" 
      className="py-4 md:py-8 bg-[#101210] text-foreground" // further reduced vertical padding
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative inline-block mb-4 mt-0">
            <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-20 h-0.5 bg-primary/50" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-widest uppercase text-primary">
                My Tech Stack
            </h2>
        </div>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
          My expertise spans a diverse range of{' '}
          <span className="text-secondary font-semibold">technologies</span>, enabling me to deliver
          comprehensive and{' '}
          <span className="text-accent font-semibold">cutting-edge solutions</span> across various
          platforms.
        </p>
      </div>
      <div
        className="relative mt-8 w-full overflow-hidden px-4" // px-4 for section padding
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div className="flex w-max" style={{ minWidth: '100%' }}>
          <div className="flex w-max mx-8 md:mx-20" style={{ minWidth: '100%' }}>
            <motion.div
              className="flex w-max px-8 md:px-16"
              animate={{ x: ['-50%', '0%'] }}
              transition={{
                repeat: Infinity,
                repeatType: 'loop',
                duration: 16,
                ease: 'linear',
              }}
            >
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 w-32 h-32 flex flex-col items-center justify-center mx-1 group"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-20 w-20 mb-2 transition-all duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="text-foreground/70 group-hover:text-foreground text-base font-semibold">
                    {tech.name}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
