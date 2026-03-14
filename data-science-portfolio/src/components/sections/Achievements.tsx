"use client";

import { motion } from "framer-motion";
import { H2, H3, P } from "@/components/ui/Typography";
import { Trophy, Award, BookOpen, Star } from "lucide-react";

const achievements = [
  {
    title: "1st Place - National Data Hackathon",
    date: "November 2025",
    description: "Built a real-time anomaly detection system for predicting traffic congestion using sensor data and XGBoost.",
    icon: <Trophy className="w-6 h-6 text-yellow-400" />
  },
  {
    title: "Deep Learning Specialization",
    date: "August 2025",
    description: "Completed the 5-course series on Coursera (by Andrew Ng), covering Neural Networks, CNNs, Sequence Models, and hyperparameter tuning.",
    icon: <Award className="w-6 h-6 text-neon-blue" />
  },
  {
    title: "Kaggle Competitions Expert",
    date: "May 2025",
    description: "Achieved top 5% in two consecutive tabular data competitions, focusing on feature engineering and model ensembling.",
    icon: <Star className="w-6 h-6 text-neon-teal" />
  },
  {
    title: "Published Article on Medium",
    date: "February 2025",
    description: "Wrote a comprehensive guide on 'Optimizing Pandas DataFrames for Big Data', which received over 10K reads.",
    icon: <BookOpen className="w-6 h-6 text-neon-purple" />
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 border-b border-gray-800 relative bg-black/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="mb-16 text-center"
        >
          <H2 className="text-4xl md:text-5xl border-none mb-4">Milestones & Achievements</H2>
          <P className="text-gray-400 max-w-2xl mx-auto mt-0">My journey of continuous learning and pushing boundaries in the field of data science.</P>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-neon-blue via-neon-teal to-transparent transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {achievements.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative flex items-center justify-start md:justify-center"
                >
                  
                  {/* Icon circle */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    {item.icon}
                  </div>

                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${isEven ? 'md:pr-16 md:text-right md:mr-auto' : 'md:pl-16 md:ml-auto'}`}>
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-lg hover:border-gray-600 transition-colors">
                      <span className="text-xs font-mono text-neon-teal mb-2 block">{item.date}</span>
                      <H3 className="text-xl mb-3 text-white">{item.title}</H3>
                      <P className="text-sm mt-0">{item.description}</P>
                    </div>
                  </div>
                  
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
