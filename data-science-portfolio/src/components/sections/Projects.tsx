"use client";

import { motion } from "framer-motion";
import { H2, H3, P } from "@/components/ui/Typography";
import { Card, Badge, Button } from "@/components/ui";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Predictive Maintenance for Industrial IoT",
    problem: "Equipment failure in manufacturing leads to costly downtime. The goal was to predict failures before they occur.",
    techniques: "Random Forest, XGBoost, Time Series Analysis",
    tools: ["Python", "Scikit-Learn", "Pandas"],
    github: "#",
    demo: "#",
  },
  {
    title: "Customer Segmentation & Lifetime Value",
    problem: "E-commerce store needed to identify high-value customer cohorts to optimize marketing spend.",
    techniques: "K-Means Clustering, RFM Analysis, PCA",
    tools: ["Python", "Seaborn", "Tableau"],
    github: "#",
    demo: "#",
  },
  {
    title: "Real-Time Twitter Sentiment Dashboard",
    problem: "Tracking public brand perception in real-time during product launches.",
    techniques: "NLP (VADER), Streaming Data Pipeline",
    tools: ["Python", "Kafka", "Streamlit", "NLTK"],
    github: "#",
    demo: "#",
  },
  {
    title: "Housing Price Image Regression",
    problem: "Estimating property values using both tabular data and satellite imagery.",
    techniques: "Convolutional Neural Networks (CNN), Multimodal Learning",
    tools: ["PyTorch", "OpenCV", "NumPy"],
    github: "#",
    demo: "#",
  }
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
            <H2 className="text-4xl md:text-5xl border-none">Data Science Projects</H2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full flex flex-col p-8 transition-transform hover:-translate-y-2 duration-300 pointer-events-auto">
                  
                  <div className="flex justify-between items-start mb-6">
                    <H3 className="text-2xl text-white">{project.title}</H3>
                    <div className="flex space-x-3 text-gray-400">
                      <a href={project.github} className="hover:text-neon-blue transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={project.demo} className="hover:text-neon-teal transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <div className="mb-6 flex-grow">
                    <P className="text-sm mt-0 mb-4">{project.problem}</P>
                    <div className="text-sm font-mono text-gray-400">
                      <span className="text-neon-teal">Techniques:</span> {project.techniques}
                    </div>
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2 pt-6 border-t border-gray-800">
                    {project.tools.map((tool, tIndex) => (
                      <Badge key={tIndex} variant="neon">{tool}</Badge>
                    ))}
                  </div>
                  
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <Button variant="outline" size="lg" className="font-mono">
              View All on GitHub <Github className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
