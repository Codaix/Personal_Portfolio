"use client";

import { motion } from "framer-motion";
import { H2, H3 } from "@/components/ui/Typography";
import { Card } from "@/components/ui";

const skillCategories = [
  {
    title: "Programming",
    color: "neon-blue",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 85 },
      { name: "R", level: 75 },
      { name: "C++", level: 65 },
    ],
  },
  {
    title: "Data Analysis & Viz",
    color: "neon-teal",
    skills: [
      { name: "Pandas / NumPy", level: 95 },
      { name: "Tableau", level: 85 },
      { name: "Matplotlib / Seaborn", level: 90 },
      { name: "D3.js", level: 60 },
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
    color: "white",
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
    <section id="skills" className="py-24 border-b border-gray-800 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-8 h-full">
                  <H3 className="mb-6 flex items-center">
                    <span className={`w-3 h-3 rounded-full bg-${category.color} mr-3`} />
                    {category.title}
                  </H3>
                  <div className="space-y-6">
                    {category.skills.map((skill, sIndex) => (
                      <div key={sIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300 font-mono text-sm">{skill.name}</span>
                          <span className="text-gray-500 font-mono text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 + (sIndex * 0.1), ease: "easeOut" }}
                            className={`h-full rounded-full bg-${category.color === "white" ? "gray-300" : category.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
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
