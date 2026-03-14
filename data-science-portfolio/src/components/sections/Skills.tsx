"use client";

import { motion } from "framer-motion";
import { H2, H3 } from "@/components/ui/Typography";
import { Card } from "@/components/ui";

const skillCategories = [
  {
    title: "Programming",
    color: "neon-blue",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 85 },
      { name: "SQL", level: 80 },
      { name: "C++", level: 70 },
    ],
  },
  {
    title: "Data Analysis & Viz",
    color: "neon-teal",
    skills: [
      { name: "Pandas / NumPy", level: 95 },
      { name: "Power BI", level: 85 },
      { name: "Matplotlib / Seaborn", level: 90 },
      { name: "Hadoop", level: 65 },
    ],
  },
  {
    title: "Machine Learning",
    color: "neon-purple",
    skills: [
      { name: "Scikit-Learn", level: 85 },
      { name: "PyTorch", level: 80 },
      { name: "TensorFlow", level: 75 },
      { name: "NLP", level: 70 },
    ],
  },
  {
    title: "Data Tools & Stats",
    color: "white", // Revert to white and handle explicitly below
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "Statistical Modeling", level: 85 },
      { name: "A/B Testing", level: 80 },
    ],
  },
];

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="skills" className="py-24 border-b border-gray-800 relative bg-black/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <div className="inline-flex items-center space-x-2 text-neon-blue font-mono mb-4 text-sm">
              <span className="w-8 h-[1px] bg-neon-blue"></span>
              <span>02. TECHNICAL ARSENAL</span>
            </div>
            <H2 className="text-4xl md:text-5xl border-none">Skills & Expertise</H2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="group h-full"
              >
                <div className="p-8 h-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 relative overflow-hidden">

                  {/* Soft top-light glare effect (Apple Glassmorphism) */}
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

                  {/* Gentle hover glow */}
                  <div className="absolute -inset-20 bg-gradient-to-br from-[var(--color-neon-blue)]/0 to-[var(--color-neon-purple)]/0 group-hover:from-[var(--color-neon-blue)]/10 group-hover:to-[var(--color-neon-purple)]/10 blur-[50px] transition-all duration-700 z-0 mix-blend-screen pointer-events-none"></div>

                  <div className="relative z-10">
                    <H3 className="mb-8 flex items-center text-white/90 group-hover:text-white transition-colors">
                      <span className={`w-3 h-3 rounded-full mr-3 ${category.color === "white" ? "bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]" : `bg-${category.color} shadow-[0_0_12px_var(--color-${category.color})]`}`} />
                      {category.title}
                    </H3>
                    <div className="space-y-6 flex flex-col">
                      {category.skills.map((skill, sIndex) => (
                        <div key={sIndex} className="group/skill">
                          <div className="flex justify-between mb-2">
                            <span className="text-gray-300 font-sans font-medium text-sm group-hover/skill:text-white transition-colors">{skill.name}</span>
                            <span className="text-gray-400 font-mono text-xs group-hover/skill:text-white transition-colors">{skill.level}%</span>
                          </div>
                          {/* Inner shadow container for the bar */}
                          <div className="w-full bg-black/40 rounded-full h-2 overflow-hidden border border-white/5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.2, delay: 0.2 + (sIndex * 0.1), ease: [0.22, 1, 0.36, 1] }} // Apple-like ease
                              className={`h-full rounded-full ${category.color === "white" ? "bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" : `bg-${category.color} shadow-[0_0_10px_var(--color-${category.color})]`} opacity-80 group-hover/skill:opacity-100 transition-opacity`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>

      {/* Decorative matrix-like grid background */}
      <div className="absolute inset-0 z-[-1] opacity-5 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>
    </section>
  );
}
