"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useState, MouseEvent } from "react";

export function InteractiveRibbon() {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div 
      className="w-full h-32 relative bg-black flex items-center justify-center cursor-crosshair border-y border-gray-900/50 my-12 overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Cursor Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 mix-blend-screen z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.4),
              transparent 80%
            )
          `,
        }}
      />
      <div className="absolute inset-0 z-0 overflow-hidden opacity-40 mix-blend-screen">
        <motion.div
          initial={false}
          animate={{ 
            scaleY: isHovered ? 2.5 : 1,
            filter: isHovered ? "blur(2px) drop-shadow(0px 0px 15px rgba(14,165,233,0.8))" : "blur(0px) drop-shadow(0px 0px 0px rgba(0,0,0,0))"
          }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="w-[200%] h-full flex"
        >
          {/* Smooth Sine Wave Path */}
          <motion.svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 2000 100"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          >
            <defs>
              <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="25%" stopColor="#14b8a6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="75%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#14b8a6" />
              </linearGradient>
            </defs>
            <path 
              d="M0,50 C166.6,10 333.3,90 500,50 C666.6,10 833.3,90 1000,50 C1166.6,10 1333.3,90 1500,50 C1666.6,10 1833.3,90 2000,50" 
              stroke="url(#ribbonGrad)" 
              strokeWidth={isHovered ? "8" : "3"} 
              fill="none" 
              strokeLinecap="round"
              className="transition-all duration-300"
            />
            <path 
              d="M0,50 C166.6,90 333.3,10 500,50 C666.6,90 833.3,10 1000,50 C1166.6,90 1333.3,10 1500,50 C1666.6,90 1833.3,10 2000,50" 
              stroke="url(#ribbonGrad)" 
              strokeWidth={isHovered ? "4" : "2"} 
              fill="none" 
              strokeLinecap="round"
              opacity="0.5"
              className="transition-all duration-300"
            />
          </motion.svg>
        </motion.div>
      </div>
    </div>
  );
}
