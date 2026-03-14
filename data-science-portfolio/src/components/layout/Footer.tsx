import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-black/50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          <div className="flex flex-col items-center md:items-start space-y-2">
            <Link href="/" className="text-xl font-heading font-bold text-white">
              <span className="text-neon-purple">{"{"}</span>
              <span className="mx-1">Data Science</span>
              <span className="text-neon-purple">{"}"}</span>
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
