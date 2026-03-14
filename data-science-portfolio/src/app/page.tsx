import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Exploring } from "@/components/sections/Exploring";
import { Contact } from "@/components/sections/Contact";
import { Preloader } from "@/components/layout/Preloader";
import { InteractiveRibbon } from "@/components/effects/InteractiveRibbon";

export default function Home() {
  return (
    <div className="relative min-h-screen selection:bg-neon-blue/30 overflow-x-hidden">
      <Preloader />
      <CustomCursor />
      <Navbar />
      
      <main className="flex flex-col w-full">
        <Hero />
        <About />
        <InteractiveRibbon />
        <Skills />
        <Projects />
        <Achievements />
        <Exploring />
        <InteractiveRibbon />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
