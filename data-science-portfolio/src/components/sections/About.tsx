"use client";

import { motion } from "framer-motion";
import { H2, H3, P } from "@/components/ui/Typography";
import { Card } from "@/components/ui";
import { Database, Code2, LineChart, Brain } from "lucide-react";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 border-b border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-12">
            <div className="inline-flex items-center space-x-2 text-neon-teal font-mono mb-4 text-sm">
              <span className="w-8 h-[1px] bg-neon-teal"></span>
              <span>01. ABOUT ME</span>
            </div>
            <H2 className="text-4xl md:text-5xl border-none">Curiosity Driven by Data</H2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <motion.div variants={itemVariants} className="space-y-6">
              <P className="text-lg">
                I am a Data Science student with a profound passion for uncovering hidden patterns within complex datasets. My journey stems from a deep curiosity about how we can leverage raw information to drive meaningful decisions and solve real-world problems.
              </P>
              <P className="text-lg">
                By combining a strong foundation in statistical modeling and machine learning with practical software engineering skills, I strive to build scalable, analytical products that bridge the gap between abstract algorithms and actionable insights.
              </P>
              <P className="text-lg">
                When I'm not training models or wrangling data, you can find me exploring the intersection of deep learning and creative coding, or participating in hackathons to test my skills under pressure.
              </P>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="flex flex-col items-start p-6 space-y-4 hover:border-neon-blue/50 transition-colors">
                <Database className="w-8 h-8 text-neon-blue" />
                <div>
                  <H3 className="text-xl mb-1 text-white">Data Engineering</H3>
                  <p className="text-sm text-gray-400 font-mono">ETL, SQL, Pipelines</p>
                </div>
              </Card>
              
              <Card className="flex flex-col items-start p-6 space-y-4 hover:border-neon-teal/50 transition-colors">
                <LineChart className="w-8 h-8 text-neon-teal" />
                <div>
                  <H3 className="text-xl mb-1 text-white">Analytics</H3>
                  <p className="text-sm text-gray-400 font-mono">Viz, Pandas, Tableau</p>
                </div>
              </Card>

              <Card className="flex flex-col items-start p-6 space-y-4 hover:border-neon-purple/50 transition-colors">
                <Brain className="w-8 h-8 text-neon-purple" />
                <div>
                  <H3 className="text-xl mb-1 text-white">Machine Learning</H3>
                  <p className="text-sm text-gray-400 font-mono">Scikit-Learn, PyTorch</p>
                </div>
              </Card>

              <Card className="flex flex-col items-start p-6 space-y-4 hover:border-white/50 transition-colors">
                <Code2 className="w-8 h-8 text-gray-300" />
                <div>
                  <H3 className="text-xl mb-1 text-white">Software Dev</H3>
                  <p className="text-sm text-gray-400 font-mono">Python, API, React</p>
                </div>
              </Card>
            </motion.div>

          </div>
        </motion.div>
      </div>
      
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
