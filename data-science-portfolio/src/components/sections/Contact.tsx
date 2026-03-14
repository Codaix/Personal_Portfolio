"use client";

import { motion } from "framer-motion";
import { H2, P } from "@/components/ui/Typography";
import { Button } from "@/components/ui";
import { Mail, Github, Linkedin, Download } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const LeetCodeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.114.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.834-.645s1.367.195 1.834.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.606-2.697C14.075 4.39 12.593 3.8 10.966 3.8c-1.626 0-3.136.61-4.28 1.764L2.348 9.944C1.194 11.088.584 12.598.584 14.225s.611 3.136 1.764 4.28l4.34 4.37c1.144 1.155 2.654 1.765 4.28 1.765s3.137-.61 4.281-1.765l2.697-2.607c.535-.515.517-1.366-.018-1.901-.535-.536-1.366-.554-1.826-.038z"/>
  </svg>
);

const KaggleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.141c0-.233.118-.351.354-.351h2.431c.234 0 .351.118.351.351v15.353l6.53-6.191c.142-.14.305-.21.492-.21h3.337c.189 0 .282.047.282.14 0 .045-.024.093-.071.141l-5.271 4.981 5.926 8.761c.023.047.035.094.035.141z"/>
  </svg>
);

// Friendly Interactive Owl Companion
function InteractiveCompanion() {
  const owlRef = useRef<HTMLDivElement>(null);
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!owlRef.current) return;
      const rect = owlRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      
      const angle = Math.atan2(deltaY, deltaX);
      const distance = Math.min(10, Math.hypot(deltaX, deltaY) / 12); // Clamped max offset distance
      
      setPupilPos({
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance
      });
      
      // Removed buggy tilt rotation, mapped smooth translation for standard parallax
      setTilt(Math.max(-8, Math.min(8, deltaX / 20)));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="mb-12 flex justify-center w-full group" ref={owlRef}>
      <div className="relative w-40 h-40 flex items-center justify-center transform transition-transform duration-500">
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/20 to-neon-purple/20 blur-2xl rounded-full" />

        <svg viewBox="0 0 200 200" className="w-full h-full relative z-10 overflow-visible drop-shadow-2xl">
          <defs>
            <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fff" stopOpacity="1"/>
              <stop offset="100%" stopColor="#e2e8f0" stopOpacity="1"/>
            </radialGradient>
            <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b"/>
              <stop offset="100%" stopColor="#0f172a"/>
            </linearGradient>
            <linearGradient id="beakGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b"/>
              <stop offset="100%" stopColor="#d97706"/>
            </linearGradient>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000" floodOpacity="0.5" />
            </filter>
          </defs>

          {/* Body/Head Outline */}
          <path 
            d="M 50 180 C 20 180, 20 100, 50 70 M 50 70 L 60 40 L 80 60 C 95 50, 105 50, 120 60 L 140 40 L 150 70 M 150 70 C 180 100, 180 180, 150 180 Z" 
            fill="url(#bodyGrad)"
            stroke="#334155"
            strokeWidth="3"
            filter="url(#shadow)"
          />

          {/* White Face Mask */}
          <path 
            d="M 100 130 C 60 150, 30 110, 50 80 C 70 50, 90 70, 100 90 C 110 70, 130 50, 150 80 C 170 110, 140 150, 100 130 Z" 
            fill="#e2e8f0" 
            opacity="0.9"
          />

          {/* Left Eye Whites */}
          <circle cx="70" cy="95" r="22" fill="url(#eyeGlow)" stroke="#94a3b8" strokeWidth="2" />
          
          {/* Right Eye Whites */}
          <circle cx="130" cy="95" r="22" fill="url(#eyeGlow)" stroke="#94a3b8" strokeWidth="2" />

          {/* Left Iris & Pupil Animated */}
          <motion.g animate={{ x: pupilPos.x, y: pupilPos.y }} transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.2 }}>
            <circle cx="70" cy="95" r="14" fill="#0ea5e9" />
            <circle cx="70" cy="95" r="10" fill="#020617" />
            <circle cx="65" cy="90" r="3" fill="#ffffff" />
          </motion.g>

          {/* Right Iris & Pupil Animated */}
          <motion.g animate={{ x: pupilPos.x, y: pupilPos.y }} transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.2 }}>
            <circle cx="130" cy="95" r="14" fill="#0ea5e9" />
            <circle cx="130" cy="95" r="10" fill="#020617" />
            <circle cx="125" cy="90" r="3" fill="#ffffff" />
          </motion.g>

          {/* Blinking Eyelids (Covers eyes periodically) */}
          <g className="animate-[owl_blink_6s_infinite]">
            {/* Left Eyelid */}
            <path d="M 46 95 L 94 95 A 24 24 0 0 0 46 95 Z" fill="#94a3b8" className="transform origin-top scale-y-0 blink-lid" />
            <path d="M 46 95 L 94 95 A 24 24 0 0 1 46 95 Z" fill="#94a3b8" className="transform origin-bottom scale-y-0 blink-lid" />
            
            {/* Right Eyelid */}
            <path d="M 106 95 L 154 95 A 24 24 0 0 0 106 95 Z" fill="#94a3b8" className="transform origin-top scale-y-0 blink-lid" />
            <path d="M 106 95 L 154 95 A 24 24 0 0 1 106 95 Z" fill="#94a3b8" className="transform origin-bottom scale-y-0 blink-lid" />
          </g>

          {/* Beak */}
          <motion.path 
            d="M 90 115 L 110 115 L 100 135 Z" 
            fill="url(#beakGrad)" 
            animate={{ x: tilt, y: tilt * 0.2 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.5))"
          />

          {/* Feather Details */}
          <path d="M 100 150 Q 100 170 90 180" stroke="#0ea5e9" strokeWidth="2" fill="transparent" strokeLinecap="round" opacity="0.5" />
          <path d="M 100 150 Q 100 170 110 180" stroke="#0ea5e9" strokeWidth="2" fill="transparent" strokeLinecap="round" opacity="0.5" />
          
        </svg>

      </div>

      <style jsx>{`
        /* Custom pure CSS blink animation */
        @keyframes owl_blink {
          0%, 94%, 98%, 100% { clip-path: inset(50% 0 50% 0); }
          96% { clip-path: inset(0 0 0 0); }
        }
        .blink-lid {
          animation: owl_blink 6s infinite;
        }
      `}</style>
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-32 relative z-10 border-t border-gray-800/50 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
        >
          <InteractiveCompanion />

          <div className="inline-flex items-center space-x-2 text-neon-blue font-mono mb-4 text-sm mt-4">
            <span className="w-8 h-[1px] bg-neon-blue"></span>
            <span>04. WHAT'S NEXT?</span>
            <span className="w-8 h-[1px] bg-neon-blue"></span>
          </div>
          
          <H2 className="text-5xl md:text-6xl border-none mb-6">Get In Touch</H2>
          
          <P className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Whether you have a question about my projects, want to discuss an open role, or just want to talk about the latest in machine learning—my inbox is always open.
          </P>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="w-full sm:w-auto text-base group" onClick={() => window.location.href = 'mailto:hello@example.com'}>
              <Mail className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" /> Say Hello
            </Button>
            
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-base group hover:text-white" onClick={() => window.open('/resume.pdf', '_blank')}>
              <Download className="mr-2 w-5 h-5 group-hover:translate-y-1 transition-transform" /> Resume
            </Button>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-800 flex justify-center space-x-6 md:space-x-12">
            <motion.a 
              whileHover={{ y: -5, color: "var(--color-neon-blue)" }}
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 flex flex-col items-center space-y-2 transition-colors interactive"
            >
              <Github className="w-7 h-7 md:w-8 md:h-8" />
              <span className="text-xs font-mono">GitHub</span>
            </motion.a>
            <motion.a 
              whileHover={{ y: -5, color: "var(--color-neon-teal)" }}
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 flex flex-col items-center space-y-2 transition-colors interactive"
            >
              <Linkedin className="w-7 h-7 md:w-8 md:h-8" />
              <span className="text-xs font-mono">LinkedIn</span>
            </motion.a>
            <motion.a 
              whileHover={{ y: -5, color: "var(--color-neon-purple)" }}
              href="https://leetcode.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 flex flex-col items-center space-y-2 transition-colors interactive"
            >
              <LeetCodeIcon className="w-7 h-7 md:w-8 md:h-8" />
              <span className="text-xs font-mono">LeetCode</span>
            </motion.a>
            <motion.a 
              whileHover={{ y: -5, color: "#20beff" }}
              href="https://kaggle.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 flex flex-col items-center space-y-2 transition-colors interactive"
            >
              <KaggleIcon className="w-7 h-7 md:w-8 md:h-8" />
              <span className="text-xs font-mono">Kaggle</span>
            </motion.a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
