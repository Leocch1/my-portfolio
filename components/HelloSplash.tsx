"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "Hello",
  "Kamusta",
  "Hola",
  "Bonjour",
  "Ciao",
  "Hallo",
  "안녕하세요",
  "नमस्ते",
  "こんにちは",
];

export default function HelloSplash({ onFinish }: { onFinish: () => void }) {
  const [index, setIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const firstTimeout = setTimeout(() => {
      setIndex(1);

      const interval = setInterval(() => {
        setIndex((prev) => {
          const nextIndex = prev + 1;
          if (nextIndex >= greetings.length) {
            setTimeout(() => {
              setIsExiting(true);
              setTimeout(() => {
                setShowSplash(false);
                onFinish();
              }, 1000);
            }, 600);
            return prev;
          }
          return nextIndex;
        });
      }, 200);

      return () => clearInterval(interval);
    }, 1500);

    return () => clearTimeout(firstTimeout);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-50"
          initial={{ opacity: 1, y: 0 }}
          animate={isExiting ? { y: "-100vh", opacity: 0 } : { y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            minWidth: "100vw",
            backgroundColor: "#101210", // changed background color
          }}
        >
          <div className="w-full flex flex-col items-center justify-center text-center px-6">
            <motion.h1
              key={index}
              className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-light text-center leading-none"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              style={{
                color: "#f3e7d5", // changed text color
              }}
            >
              • {greetings[index]}
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
