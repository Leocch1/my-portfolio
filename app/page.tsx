'use client';

import { useState } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import ProjectsSection from '@/components/sections/projects';
import TechStackSection from '@/components/sections/tech-stack';
import HelloSplash from '@/components/HelloSplash';

export default function Home() {
  const [splashFinished, setSplashFinished] = useState(false);

  return (
    <>
      {!splashFinished && <HelloSplash onFinish={() => setSplashFinished(true)} />}

      {splashFinished && (
        <div className="flex flex-col min-h-screen bg-background">
          <Header />
          <main className="flex-grow">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <TechStackSection />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
