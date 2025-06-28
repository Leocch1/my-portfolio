"use client";

import { useState } from "react";
import HelloSplash from "@/components/HelloSplash";
import { Header } from "@/components/Header";

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <HelloSplash onFinish={() => setShowSplash(false)} />
      ) : (
        <>
          <Header />
          <main className="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-white dark:bg-black">
            <h1 className="text-4xl md:text-6xl font-bold">Leo Louise Jimenez</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-xl">
              Welcome to my personal portfolio. I build modern web apps using Next.js, TypeScript, Tailwind, and Framer Motion.
            </p>
          </main>
        </>
      )}
    </>
  );
}