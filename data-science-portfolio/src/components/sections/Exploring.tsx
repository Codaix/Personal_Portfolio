"use client";

import { motion } from "framer-motion";
import { H2, P } from "@/components/ui/Typography";

const topics = [
  "Large Language Models (LLMs)",
  "Retrieval-Augmented Generation (RAG)",
  "Graph Neural Networks",
  "Reinforcement Learning",
  "MLOps & CI/CD for Models",
  "Cloud Native Architectures"
];

export function Exploring() {
  return (
    <section id="exploring" className="py-24 border-b border-gray-800 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
        >
          <H2 className="text-3xl md:text-4xl border-none mb-6">Currently Exploring</H2>
          <P className="text-gray-400 mb-10 max-w-xl mx-auto">
            The data landscape is always evolving. Here are the topics and technologies I'm actively researching and learning right now.
          </P>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {topics.map((topic, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 240, 255, 0.1)" }}
                className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-full font-mono text-sm text-neon-blue transition-colors cursor-default"
              >
                {topic}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Abstract scattered nodes background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, Math.random() * 20 - 10],
              x: [0, Math.random() * 20 - 10],
            }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, repeatType: "reverse" }}
            className={`absolute rounded-full blur-xl`}
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
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
