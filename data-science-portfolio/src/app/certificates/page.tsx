"use client";

import { motion } from "framer-motion";
import { H1, H2, H3, P } from "@/components/ui/Typography";
import { Button } from "@/components/ui";
import { Database, Cloud, Brain, Award, Shield, ArrowLeft, ExternalLink } from "lucide-react";
import { allCertificates, Certificate } from "@/config/certificates";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const iconMap = {
  database: Database,
  cloud: Cloud,
  brain: Brain,
  award: Award,
  shield: Shield
};

export default function CertificatesPage() {
  const router = useRouter();
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden selection:bg-neon-blue/30">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10">
        
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button 
            variant="ghost" 
            onClick={() => router.push('/#certificates')}
            className="hover:bg-white/5 text-gray-400 hover:text-white flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Button>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="mb-16"
        >
          <H1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500 border-none mb-4">All Credentials</H1>
          <P className="text-gray-400 max-w-2xl mt-0">A comprehensive record of certifications and specialized programs completed over my academic and professional journey.</P>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCertificates.map((cert: Certificate, index: number) => {
            const Icon = iconMap[cert.iconType] || Award;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.25, zIndex: 50 }}
                className="relative group h-full flex flex-col bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.5)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                
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
                <div className="flex-grow h-full flex flex-col group-hover:opacity-0 transition-opacity duration-500">
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neon-purple group-hover:scale-110 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
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

                  <div className="mt-8 pt-4 border-t border-white/5 flex justify-end">
                    <motion.a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-white flex items-center gap-2 text-sm transition-colors text-right"
                      whileHover={{ scale: 1.15, zIndex: 50 }}
                    >
                      {cert.buttonText || "Verify"} <ExternalLink className="w-3.5 h-3.5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </main>

      <Footer />
      
      {/* Decorative gradient background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute opacity-20 inset-0 grid-background -z-20"></div>
    </div>
  );
}
