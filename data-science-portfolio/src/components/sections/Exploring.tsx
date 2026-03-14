"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { H2, P } from "@/components/ui/Typography";

const topics = [
  { text: "Large Language Models (LLMs)", color: "from-neon-blue/80 to-blue-500/80", size: "w-48 h-48 md:w-56 md:h-56", delay: 0, pos: { x: -300, y: -180 } },
  { text: "DevOps", color: "from-neon-teal/80 to-teal-500/80", size: "w-56 h-56 md:w-64 md:h-64", delay: 1, pos: { x: 0, y: -280 } },
  { text: "Graph Neural Networks", color: "from-neon-purple/80 to-purple-500/80", size: "w-52 h-52 md:w-60 md:h-60", delay: 0.5, pos: { x: 300, y: -180 } },
  { text: "Reinforcement Learning", color: "from-blue-600/80 to-indigo-500/80", size: "w-44 h-44 md:w-52 md:h-52", delay: 1.5, pos: { x: -300, y: 180 } },
  { text: "MLOps & CI/CD", color: "from-emerald-500/80 to-teal-600/80", size: "w-40 h-40 md:w-48 md:h-48", delay: 0.8, pos: { x: 300, y: 180 } },
  { text: "Cloud Native Architectures", color: "from-violet-500/80 to-fuchsia-500/80", size: "w-48 h-48 md:w-56 md:h-56", delay: 2, pos: { x: 0, y: 280 } }
];

export function Exploring() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="exploring" className="py-32 border-b border-gray-800 relative overflow-hidden bg-black text-center min-h-[800px] flex flex-col items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="mb-16"
        >
          <H2 className="text-4xl md:text-5xl border-none mb-6">Currently Exploring</H2>
          <P className="text-gray-400 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
            The data landscape is always evolving. Here are the fields and technologies I'm actively researching right now.
          </P>
        </motion.div>
      </div>

      {/* Floating Blobs Container */}
      <div className="relative w-full max-w-6xl h-[800px] mx-auto z-10 flex items-center justify-center">
        {mounted && topics.map((topic, i) => {
          // Responsive coordinates (scale down on mobile roughly by 0.5)
          const isMobile = window.innerWidth < 768;
          const xPos = isMobile ? topic.pos.x * 0.5 : topic.pos.x;
          const yPos = isMobile ? topic.pos.y * 0.5 : topic.pos.y;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                x: [xPos, xPos + (Math.random() * 40 - 20), xPos],
                y: [yPos, yPos + (Math.random() * 40 - 20), yPos],
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: topic.delay * 0.2 },
                scale: { type: "spring", stiffness: 100, delay: topic.delay * 0.2 },
                x: { duration: 4 + Math.random() * 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
                y: { duration: 3 + Math.random() * 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
              }}
              whileHover={{ scale: 1.1, zIndex: 50 }}
              className={`absolute ${topic.size} bg-gradient-to-br ${topic.color} backdrop-blur-3xl rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/20 flex items-center justify-center p-6 text-center cursor-pointer transition-shadow hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]`}
              style={{
                animation: `morph ${8 + i}s ease-in-out infinite alternate`,
              }}
            >
              <span className="text-white font-semibold font-sans drop-shadow-md text-sm md:text-base leading-tight select-none pointer-events-none">
                {topic.text}
              </span>
            </motion.div>
          );
        })}
      </div>

      <style jsx global>{`
        @keyframes morph {
          0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
          34% { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; }
          67% { border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%; }
          100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
        }
      `}</style>

      {/* Abstract scattered nodes background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        {mounted && [...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, Math.random() * 40 - 20],
              x: [0, Math.random() * 40 - 20],
            }}
            transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, repeatType: "reverse" }}
            className={`absolute rounded-full blur-3xl`}
            style={{
              width: `${Math.random() * 150 + 100}px`,
              height: `${Math.random() * 150 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: i % 2 === 0 ? 'var(--color-neon-blue)' : 'var(--color-neon-purple)'
            }}
          />
        ))}
      </div>
    </section>
  );
}
