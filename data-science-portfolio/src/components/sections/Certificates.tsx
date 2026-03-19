"use client";

import { motion } from "framer-motion";
import { H2, H3, P } from "@/components/ui/Typography";
import { Button } from "@/components/ui";
import { Database, Cloud, Brain, Award, Shield, ArrowRight, ExternalLink } from "lucide-react";
import { topCertificates, Certificate } from "@/config/certificates";
import { useRouter } from "next/navigation";

const iconMap = {
  database: Database,
  cloud: Cloud,
  brain: Brain,
  award: Award,
  shield: Shield
};

export function Certificates() {
  const router = useRouter();
  return (
    <section id="certificates" className="py-24 border-b border-gray-800 relative bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="mb-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 text-neon-purple font-mono mb-4 text-sm justify-center w-full">
            <span className="w-8 h-[1px] bg-neon-purple"></span>
            <span>03. VERIFIED CREDENTIALS</span>
            <span className="w-8 h-[1px] bg-neon-purple"></span>
          </div>
          <H2 className="text-4xl md:text-5xl border-none mb-4">Certified Expertise</H2>
          <P className="text-gray-400 max-w-2xl mx-auto mt-0">Standardizing core competencies through globally recognized programs.</P>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topCertificates.map((cert: Certificate, index: number) => {
            const Icon = iconMap[cert.iconType] || Award;
            return (
              <motion.a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.25, zIndex: 50 }}
                className="relative group h-full flex flex-col bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.5)] overflow-hidden cursor-pointer"
              >
                {/* Backlight effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                
                {/* Background Certificate Image */}
                {cert.bgImage && (
                  <div className="absolute inset-0 z-0 overflow-hidden bg-black/0 group-hover:bg-black transition-colors duration-300">
                    <img 
                      src={cert.bgImage} 
                      alt={cert.title}
                      className="object-cover group-hover:object-contain w-full h-full opacity-30 group-hover:opacity-100 transition-all duration-500" 
                    />
                    <div className="absolute inset-0 bg-black/80 group-hover:bg-black/0 transition-colors duration-500" />
                  </div>
                )}
                
                {/* Wrap all content in a fading container on hover */}
                <div className="relative z-10 h-full flex flex-col group-hover:opacity-0 transition-opacity duration-500">
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neon-purple group-hover:scale-110 group-hover:text-white transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-gray-500 mb-1 block">{cert.date}</span>
                    <H3 className="text-lg font-bold text-white leading-snug">{cert.title}</H3>
                  </div>
                </div>

                <div className="flex-grow">
                   <p className="text-sm text-gray-400 font-sans leading-relaxed">{cert.description}</p>
                   <span className="text-xs font-mono text-neon-teal mt-3 block">{cert.issuer}</span>
                </div>

                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => router.push('/certificates')}
            className="group hover:text-white border-white/20 hover:border-white/40 transition-all duration-300"
          >
             View All Certificates <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
        
      </div>
      
      {/* Decorative gradient blob */}
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
}
