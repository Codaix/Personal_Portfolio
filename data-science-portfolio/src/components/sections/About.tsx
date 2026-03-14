"use client";

import { motion } from "framer-motion";
import { H2, H3, P } from "@/components/ui/Typography";
import { Database, Code2, LineChart, Brain, Terminal, Coffee, Layers, Activity } from "lucide-react";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <section id="about" className="py-32 border-b border-gray-800 relative bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <div className="inline-flex items-center space-x-2 text-neon-teal font-mono mb-4 text-sm">
              <span className="w-8 h-[1px] bg-neon-teal"></span>
              <span>01. ABOUT ME</span>
            </div>
            <H2 className="text-4xl md:text-5xl border-none">Curiosity Driven by Data</H2>
          </motion.div>

          {/* Bento Box Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
            
            {/* Main Narrative Card (Spans 2 columns) */}
            <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2">
              <div className="h-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-white/[0.07] transition-colors relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Brain className="w-32 h-32 md:w-48 md:h-48 text-neon-blue" />
                </div>
                
                <H3 className="text-2xl md:text-3xl text-white mb-6 font-semibold inline-flex items-center gap-3 relative z-10">
                  <Terminal className="text-neon-teal" /> The Analyst's Mindset
                </H3>
                <div className="space-y-6 relative z-10 text-gray-300 text-lg leading-relaxed">
                  <p>
                    I am a Data Science student with a profound passion for uncovering hidden patterns within complex datasets. My journey stems from a deep curiosity about how we can leverage raw information to drive meaningful decisions and solve real-world problems.
                  </p>
                  <p>
                    By combining a strong foundation in statistical modeling and machine learning with practical software engineering skills, I strive to build scalable, analytical products that bridge the gap between abstract algorithms and actionable insights.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats Card (Spans 1 column) */}
            <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-2 flex flex-col gap-6">
              <div className="h-1/2 bg-gradient-to-br from-gray-900/80 to-black backdrop-blur-xl border border-gray-800 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group hover:border-neon-purple/50 transition-colors">
                <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-neon-purple/20 rounded-full blur-3xl group-hover:bg-neon-purple/30 transition-colors"></div>
                <Code2 className="text-neon-purple mb-4 w-8 h-8" />
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">150+</div>
                <div className="text-sm font-mono text-gray-400">LeetCode Questions Solved</div>
              </div>
              
              <div className="h-1/2 bg-gradient-to-br from-gray-900/80 to-black backdrop-blur-xl border border-gray-800 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group hover:border-neon-teal/50 transition-colors">
                <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-neon-teal/20 rounded-full blur-3xl group-hover:bg-neon-teal/30 transition-colors"></div>
                <Activity className="text-neon-teal mb-4 w-8 h-8" />
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">15+</div>
                <div className="text-sm font-mono text-gray-400">ML Models Deployed</div>
              </div>
            </motion.div>

            {/* Data Pipeline Card */}
            <motion.div variants={itemVariants} className="md:col-span-1">
              <div className="h-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 flex flex-col justify-center group hover:bg-white/[0.08] transition-colors relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
                <Layers className="text-neon-blue mb-4 w-8 h-8 group-hover:scale-110 transition-transform" />
                <H3 className="text-xl text-white mb-2">Data Pipelines</H3>
                <p className="text-sm text-gray-400 font-sans">Architecting robust ETL workflows that scale elegantly.</p>
              </div>
            </motion.div>

            {/* Coffee/Code Card */}
            <motion.div variants={itemVariants} className="md:col-span-1">
              <div className="h-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 flex flex-col justify-center group hover:bg-white/[0.08] transition-colors">
                <Coffee className="text-yellow-500 mb-4 w-8 h-8 group-hover:rotate-12 transition-transform" />
                <H3 className="text-xl text-white mb-2">Fuel Source</H3>
                <p className="text-sm text-gray-400 font-sans">Turning vast quantities of espresso into predictive algorithms.</p>
              </div>
            </motion.div>

            {/* Visual Analytics Card */}
            <motion.div variants={itemVariants} className="md:col-span-1">
              <div className="h-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 flex flex-col justify-center group hover:bg-white/[0.08] transition-colors overflow-hidden relative">
                <LineChart className="text-emerald-400 mb-4 w-8 h-8 z-10 relative" />
                <H3 className="text-xl text-white mb-2 z-10 relative">Visual Storytelling</H3>
                <p className="text-sm text-gray-400 font-sans z-10 relative">Translating raw matrices into compelling visual narratives.</p>
                
                {/* Decorative Mini Chart Graphic */}
                <svg className="absolute bottom-0 right-0 w-32 h-24 opacity-20 group-hover:opacity-40 transition-opacity" viewBox="0 0 100 50">
                  <path d="M0,50 L20,30 L40,40 L70,10 L100,20 L100,50 Z" fill="url(#chartGrad)" />
                  <path d="M0,50 L20,30 L40,40 L70,10 L100,20" fill="none" stroke="#34d399" strokeWidth="2" />
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#34d399" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
      
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-neon-teal/5 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
}
