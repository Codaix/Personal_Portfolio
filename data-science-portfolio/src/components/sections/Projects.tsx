"use client";

import { motion } from "framer-motion";
import { H2, H3, P } from "@/components/ui/Typography";
import { Card, Badge, Button } from "@/components/ui";
import { Github, ExternalLink } from "lucide-react";
import { personalLinks } from "@/config/personalLinks";


const projects = [
  {
    title: "Epidemic Admission Modeling",
    problem: "Predicting weekly admissions and detecting surge periods for respiratory diseases using Machine Learning algorithms.",
    techniques: "Machine Learning, Trend Analysis",
    tools: ["Python", "Scikit-Learn", "Pandas"],
    github: "https://github.com/Codaix/Data_Science_Projects/blob/main/ML_Respiratory_Analysis%20(2).py",
    demo: "#",
    bgImage: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2070&auto=format&fit=crop",
  },

  {
    title: "Air Quality Index Dashboard",
    problem: "Interactive dashboard for state-wise air quality visualization, dynamic filters, and pollution-surge forecasting.",
    techniques: "Geospatial Mapping, Data Visualization",
    tools: ["Power BI", "Data Modeling"],
    github: "https://github.com/Codaix/Power_BI/blob/main/Power_BI_project.pbix",
    demo: "#",
    bgImage: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=2070&auto=format&fit=crop",
  },

  {
    title: "Event Reminder System",
    problem: "Robust digital event reminder system built to automate alerts, streamline new event creation, and manage schedules efficiently.",
    techniques: "GUI Development, Task Scheduling",
    tools: ["Java", "Swing", "OOP"],
    github: "https://github.com/Codaix/Event_Reminder",
    demo: "#",
    bgImage: "https://images.unsplash.com/photo-1478479405421-ce83c92fb3ba?q=80&w=2070&auto=format&fit=crop",
  },

  {
    title: "House Price Regression Prediction",
    problem: "Estimating property values using historical tabular housing data.",
    techniques: "Machine Learning, Regression Analysis",
    tools: ["Python", "Pandas", "Scikit-Learn"],
    github: "https://github.com/Codaix/Data_Science_Projects/blob/main/House%20price%20prediction%20model.py",
    demo: "#",
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
];

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="py-24 border-b border-gray-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <div className="inline-flex items-center space-x-2 text-neon-purple font-mono mb-4 text-sm">
              <span className="w-8 h-[1px] bg-neon-purple"></span>
              <span>03. SELECTED WORKS</span>
            </div>
            <H2 className="text-4xl md:text-5xl border-none">Projects</H2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="group relative h-[450px] lg:h-[500px] flex flex-col rounded-2xl overflow-hidden transition-transform hover:-translate-y-2 duration-300 pointer-events-auto border border-gray-800 hover:border-neon-teal/50 shadow-lg">
                  
                  {/* Background Image Setup */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.bgImage})` }}
                  />
                  
                  {/* Heavy Gradient Overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/30 z-10" />

                  <div className="relative z-20 flex flex-col h-full p-8">
                    <div className="flex justify-between items-start mb-6">
                      <H3 className="text-2xl text-white group-hover:text-neon-teal transition-colors drop-shadow-md">{project.title}</H3>
                      <div className="flex space-x-4 text-gray-300">
                        <a href={project.github} className="hover:text-white bg-black/60 p-3 rounded-full backdrop-blur-md transition-all hover:scale-110 border border-gray-600 shadow-xl">
                          <Github className="w-7 h-7" />
                        </a>
                        <a href={project.demo} className="hover:text-white bg-black/60 p-3 rounded-full backdrop-blur-md transition-all hover:scale-110 border border-gray-600 shadow-xl">
                          <ExternalLink className="w-7 h-7" />
                        </a>
                      </div>
                    </div>

                    <div className="mb-6 flex-grow flex flex-col justify-end">
                      <P className="text-base text-gray-300 mt-0 mb-4 drop-shadow-sm">{project.problem}</P>
                      <div className="text-sm font-mono text-gray-400 bg-black/40 p-3 rounded-lg backdrop-blur-md border border-gray-800/50">
                        <span className="text-neon-blue font-bold">Techniques:</span> {project.techniques}
                      </div>
                    </div>

                    <div className="mt-auto flex flex-wrap gap-2 pt-6 border-t border-gray-800/50">
                      {project.tools.map((tool, tIndex) => (
                        <span key={tIndex} className="px-3 py-1 text-xs font-mono text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <Button variant="outline" size="lg" className="font-mono" onClick={() => window.open(personalLinks.github, '_blank')}>

              View All on GitHub <Github className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
