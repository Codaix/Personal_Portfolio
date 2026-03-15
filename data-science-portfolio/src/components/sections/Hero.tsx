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
              <span className="text-sm font-mono text-white/80">pipeline.execute()</span>
            </motion.div>
            
            <H1 className="text-6xl sm:text-7xl lg:text-[6rem] xl:text-[7rem] leading-none tracking-tight">
              Hello, I'm <br className="hidden sm:block lg:hidden" />
              <span className="text-transparent bg-clip-text bg-[length:200%_auto] animate-[gradient_10s_linear_infinite]" style={{ backgroundImage: "linear-gradient(to right, #0ea5e9, #a855f7, #10b981, #f59e0b, #f43f5e, #0ea5e9)" }}>Pranav</span>.
            </H1>
            
            <div className="space-y-4 max-w-2xl">
              <P className="text-2xl md:text-3xl text-gray-300 font-heading font-medium mt-0">
                Transforming raw data into strategic insight.
              </P>
              <P className="text-lg text-gray-500 font-mono">
                Data Analyst & Predictive Modeler
              </P>
            </div>
            
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

          {/* Portrait Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:flex justify-center items-center"
          >
             <div className="relative w-[350px] h-[350px] xl:w-[450px] xl:h-[450px] rounded-full flex items-center justify-center group">
               {/* Animated Outline Rings */}
               <div className="absolute inset-[-20px] rounded-full border border-neon-teal/30 animate-[spin_20s_linear_infinite] group-hover:border-neon-teal transition-colors duration-500"></div>
               <div className="absolute inset-[-40px] rounded-full border-t border-neon-blue/40 animate-[spin_15s_linear_infinite_reverse] group-hover:border-neon-blue transition-colors duration-500"></div>
               
               {/* Core Portrait Container */}
               <div className="w-full h-full rounded-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_80px_rgba(59,130,246,0.2)] transition-shadow duration-500">
                  <img src="/SharmaPranav/profile.png" alt="Pranav" className="w-full h-full object-cover scale-[1.02] opacity-90 hover:opacity-100 transition-opacity" />
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
      
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
}
