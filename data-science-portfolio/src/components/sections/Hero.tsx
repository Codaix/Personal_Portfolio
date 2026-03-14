"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import { H1, P } from "@/components/ui/Typography";
import { ParticleNetwork } from "@/components/effects/ParticleNetwork";
import { ArrowRight, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effect */}
      <ParticleNetwork />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-6"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="inline-flex items-center space-x-2 bg-gray-900/50 border border-gray-800 rounded-full px-4 py-1.5 w-max"
            >
              <Terminal size={16} className="text-neon-teal" />
              <span className="text-sm font-mono text-gray-300">import student as DataScientist</span>
            </motion.div>
            
            <H1 className="text-5xl lg:text-7xl">
              Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-teal to-neon-purple">Pranav</span>
            </H1>
            
            <P className="text-xl md:text-2xl text-gray-400 font-mono max-w-lg">
              Data Science Student | Turning Data into Insight
            </P>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View Projects
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore My Work <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side abstract graphic (optional) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center"
          >
             {/* A complementary floating data element or leave empty allowing particles to be prominent */}
             <div className="relative w-80 h-80 border-2 border-neon-blue/20 rounded-full flex items-center justify-center before:content-[''] before:absolute before:inset-[-20px] before:border before:border-neon-teal/20 before:rounded-full before:animate-[spin_20s_linear_infinite] after:content-[''] after:absolute after:inset-[-40px] after:border-t after:border-neon-purple/30 after:rounded-full after:animate-[spin_15s_linear_infinite_reverse]">
               <div className="text-center">
                 <div className="text-6xl font-heading text-white font-bold tracking-tighter">
                   <span className="text-neon-blue">{"{ "}</span>
                   Data
                   <span className="text-neon-blue">{" }"}</span>
                 </div>
               </div>
             </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer interactive text-gray-500 hover:text-neon-blue transition-colors"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs font-mono mb-2">SCROLL DOWN</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-transparent via-current to-transparent" />
      </motion.div>
      
    </section>
  );
}
