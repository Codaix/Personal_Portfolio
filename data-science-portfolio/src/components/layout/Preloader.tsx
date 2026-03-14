"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "Hello", // English
  "नमस्ते", // Hindi
  "Hallo", // German
  "Hola", // Spanish
  "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ", // Punjabi
  "こんにちは" // Japanese
];

export function Preloader() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (index < greetings.length - 1) {
      const timer = setTimeout(() => {
        setIndex(index + 1);
      }, 250); // fast switch
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShow(false);
      }, 800); // hold the last greeting briefly before disappearing
      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100vh" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
          <div className="flex items-center text-4xl md:text-6xl font-sans text-white font-medium tracking-tight">
            <div className="flex items-center gap-4">
              <span className="w-3 h-3 rounded-full bg-neon-blue inline-block shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.15 }}
                >
                  {greetings[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
