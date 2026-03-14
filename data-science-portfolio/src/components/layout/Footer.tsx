import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-black/50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          <div className="flex flex-col items-center md:items-start space-y-2">
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative w-12 h-12 transition-transform group-hover:scale-110 group-hover:rotate-6">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                  {/* Minion Body */}
                  <rect x="30" y="20" width="40" height="60" rx="20" fill="#facc15" />
                  
                  {/* Minion Overalls */}
                  <path d="M 30 60 L 70 60 L 70 70 A 20 20 0 0 1 30 70 Z" fill="#3b82f6" />
                  <rect x="30" y="50" width="10" height="10" fill="#3b82f6" />
                  <rect x="60" y="50" width="10" height="10" fill="#3b82f6" />
                  
                  {/* Goggles Strap */}
                  <rect x="28" y="32" width="44" height="6" fill="#1f2937" />
                  
                  {/* Goggles & Eye (Single Eye Minion) */}
                  <circle cx="50" cy="35" r="14" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
                  <circle cx="50" cy="35" r="10" fill="#ffffff" />
                  <circle cx="50" cy="35" r="4" fill="#9333ea" className="animate-pulse" />
                  
                  {/* Left Arm (Resting) */}
                  <path d="M 30 50 Q 20 60 25 70" stroke="#facc15" strokeWidth="4" fill="none" strokeLinecap="round" />
                  <circle cx="25" cy="70" r="3" fill="#1f2937" />

                  {/* Right Arm (Waving) */}
                  <g style={{ transformOrigin: '70px 50px', animation: 'minion-wave 1.5s ease-in-out infinite' }}>
                    <path d="M 70 50 Q 85 35 75 20" stroke="#facc15" strokeWidth="4" fill="none" strokeLinecap="round" />
                    <circle cx="75" cy="20" r="3" fill="#1f2937" />
                  </g>
                  
                  {/* Legs & Shoes */}
                  <rect x="42" y="85" width="6" height="8" fill="#3b82f6" />
                  <rect x="52" y="85" width="6" height="8" fill="#3b82f6" />
                  <path d="M 38 93 Q 45 90 48 93 L 48 96 L 38 96 Z" fill="#1f2937" />
                  <path d="M 52 93 Q 55 90 62 93 L 62 96 L 52 96 Z" fill="#1f2937" />

                  {/* Smile */}
                  <path d="M 40 45 Q 50 52 60 45" stroke="#475569" strokeWidth="2" fill="none" strokeLinecap="round" />
                  
                  {/* Hair */}
                  <path d="M 45 20 L 40 10 M 50 20 L 50 8 M 55 20 L 60 10" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
                  
                  <style>{`
                    @keyframes minion-wave {
                      0%, 100% { transform: rotate(0deg); }
                      25% { transform: rotate(25deg); }
                      75% { transform: rotate(-15deg); }
                    }
                  `}</style>
                </svg>
              </div>
              <div className="text-xl font-heading font-bold text-white flex items-center bg-gray-900/80 px-4 py-2 rounded-2xl border border-gray-800 relative ml-2 group-hover:border-neon-purple/50 transition-colors">
                {/* Speech Bubble Tail */}
                <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-4 bg-gray-900/80 border-l border-b border-gray-800 rotate-45 group-hover:border-neon-purple/50 transition-colors"></div>
                <span className="text-neon-purple mr-2">{"{"}</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">Bello, Tu!</span>
                <span className="text-neon-purple ml-2">{"}"}</span>
              </div>
            </Link>
            <p className="text-gray-500 text-sm font-sans">
              Turning Data into Insight.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.removenull.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-teal transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:contact@example.com" className="text-gray-400 hover:text-neon-purple transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </a>
          </div>
          
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm font-mono">
            &copy; {currentYear} Personal Portfolio. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <span className="text-xs font-mono text-gray-600">Built with Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-neon-blue via-neon-teal to-neon-purple opacity-30"></div>
    </footer>
  );
}
