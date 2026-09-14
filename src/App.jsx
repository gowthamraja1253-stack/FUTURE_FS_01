import React from 'react';
import { motion, useScroll } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Achievements from './sections/Achievements';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import GithubIntegration from './sections/GithubIntegration';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative w-full min-h-screen bg-background text-primary selection:bg-accent1/30">
      <CustomCursor />
      <CommandPalette />
      
      {/* Reading Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-accent1 z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GithubIntegration />
        <Experience />
        <Achievements />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
