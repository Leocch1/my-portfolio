'use client';

import { useState } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import ProjectsSection from '@/components/sections/projects';
import TechStackSection from '@/components/sections/tech-stack';
import SocialBar from '@/components/sections/social-bar';
import HelloSplash from '@/components/HelloSplash';

export default function Home() {
  const [splashFinished, setSplashFinished] = useState(false);

  return (
    <>
      {!splashFinished && <HelloSplash onFinish={() => setSplashFinished(true)} />}

      {splashFinished && (
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {/* First screen: on desktop the hero + social bar fill the viewport below the header (h-20) */}
            <div className="flex flex-col md:min-h-[calc(100svh-5rem)]">
              <HeroSection />
              <SocialBar />
            </div>
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
