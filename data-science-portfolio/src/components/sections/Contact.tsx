"use client";

import { motion } from "framer-motion";
import { H2, P } from "@/components/ui/Typography";
import { Button } from "@/components/ui";
import { Mail, Github, Linkedin, Download } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 text-neon-blue font-mono mb-4 text-sm">
            <span className="w-8 h-[1px] bg-neon-blue"></span>
            <span>04. WHAT'S NEXT?</span>
            <span className="w-8 h-[1px] bg-neon-blue"></span>
          </div>
          
          <H2 className="text-5xl md:text-6xl border-none mb-6">Get In Touch</H2>
          
          <P className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Whether you have a question about my projects, want to discuss an open role, or just want to talk about the latest in machine learning—my inbox is always open.
          </P>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="w-full sm:w-auto text-base group" onClick={() => window.location.href = 'mailto:hello@example.com'}>
              <Mail className="mr-2 w-5 h-5 group-hover:animate-pulse" /> Say Hello
            </Button>
            
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-base" onClick={() => window.open('/resume.pdf', '_blank')}>
              <Download className="mr-2 w-5 h-5" /> Resume
            </Button>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-800 flex justify-center space-x-8">
            <motion.a 
              whileHover={{ y: -5, color: "var(--color-neon-blue)" }}
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 flex flex-col items-center space-y-2 transition-colors interactive"
            >
              <Github className="w-8 h-8" />
              <span className="text-xs font-mono">GitHub</span>
            </motion.a>
            <motion.a 
              whileHover={{ y: -5, color: "var(--color-neon-teal)" }}
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 flex flex-col items-center space-y-2 transition-colors interactive"
            >
              <Linkedin className="w-8 h-8" />
              <span className="text-xs font-mono">LinkedIn</span>
            </motion.a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
