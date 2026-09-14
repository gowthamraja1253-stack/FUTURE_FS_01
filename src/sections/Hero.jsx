import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Download, ArrowRight, Clock } from 'lucide-react';
import Magnetic from '../components/Magnetic';

const LocalTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Chennai is IST (UTC+5:30)
      const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
      setTime(now.toLocaleTimeString('en-US', options));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary mt-12 md:mt-24">
      <Clock size={12} className="text-accent1" />
      <span>Chennai, IN — {time}</span>
    </div>
  );
};

const CinematicLetter = ({ char, index, delayOffset, shouldReduceMotion }) => {
  // Deterministic pseudo-random values based on character index for consistency
  const seed = (index * 29) % 100; 
  
  const dirX = seed % 2 === 0 ? 1 : -1;
  const dirY = (seed * 3) % 2 === 0 ? 1 : -1;
  
  // Dramatic initial state: spread out, off-screen, deep Z space
  const startX = shouldReduceMotion ? 0 : dirX * ((seed % 40) + 20) + 'vw';
  const startY = shouldReduceMotion ? 20 : dirY * ((seed % 30) + 20) + 'vh';
  const startZ = shouldReduceMotion ? 0 : ((seed * 7) % 1000) - 500;
  
  // Dramatic 3D rotations
  const rotateX = shouldReduceMotion ? 0 : dirX * ((seed * 11) % 180);
  const rotateY = shouldReduceMotion ? 0 : dirY * ((seed * 13) % 180);
  const rotateZ = shouldReduceMotion ? 0 : dirX * ((seed * 17) % 90);

  return (
    <motion.span
      className="inline-block relative origin-center"
      initial={{ 
        opacity: 0, 
        x: startX, 
        y: startY, 
        z: startZ, 
        rotateX, 
        rotateY, 
        rotateZ,
        scale: shouldReduceMotion ? 1 : 2.5,
        filter: shouldReduceMotion ? "blur(0px)" : "blur(20px)"
      }}
      animate={{ 
        opacity: 1, 
        x: 0, 
        y: 0, 
        z: 0, 
        rotateX: 0, 
        rotateY: 0, 
        rotateZ: 0,
        scale: 1,
        filter: "blur(0px)"
      }}
      transition={{
        type: "spring",
        damping: 12,    // Allows a very natural overshoot
        stiffness: 90,  // Energetic but heavy
        mass: 1.2,      // Gives the letters a sense of weight and power
        delay: delayOffset + index * 0.05,
      }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};

const CinematicWord = ({ text, delayOffset = 0, className = "" }) => {
  const shouldReduceMotion = useReducedMotion();
  const letters = Array.from(text);
  
  return (
    <span 
      className={`inline-flex relative ${className}`} 
      style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
    >
      {letters.map((char, i) => (
        <CinematicLetter 
          key={i} 
          char={char} 
          index={i} 
          delayOffset={delayOffset} 
          shouldReduceMotion={shouldReduceMotion} 
        />
      ))}
    </span>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-background">
      {/* Decorative accent shape */}
      <div className="absolute right-0 top-0 w-[40vw] h-[100vh] bg-accent1/5 rounded-l-full mix-blend-multiply pointer-events-none"></div>

      <motion.div 
        style={{ y: y1, opacity }}
        className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-12 gap-8 items-center"
      >
        <div className="md:col-span-12 lg:col-span-10">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-xs uppercase tracking-[0.2em] font-bold text-accent1 mb-6"
          >
            Portfolio
          </motion.p>

          <motion.div
            initial={false}
            animate={{ 
              scale: shouldReduceMotion ? 1 : [1, 1.02, 1],
              z: shouldReduceMotion ? 0 : [0, 30, 0],
              filter: shouldReduceMotion ? "none" : [
                "drop-shadow(0px 0px 0px rgba(255,77,0,0))", 
                "drop-shadow(0px 0px 20px rgba(255,77,0,0.2))", 
                "drop-shadow(0px 0px 0px rgba(255,77,0,0))"
              ]
            }}
            transition={{ delay: 1.8, duration: 1.2, ease: "easeInOut" }}
            className="relative mb-8 transform-gpu"
            style={{ perspective: "2000px", transformStyle: "preserve-3d" }}
          >
            {/* Final Impact: Subtle Glow Sweep */}
            {!shouldReduceMotion && (
              <motion.div 
                className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-transparent via-accent1/30 to-transparent mix-blend-overlay"
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "100%", opacity: [0, 1, 0] }}
                transition={{ delay: 1.8, duration: 1.2, ease: "easeInOut" }}
                style={{ skewX: "-20deg" }}
              />
            )}
            
            <h1 className="text-[12vw] md:text-[8vw] leading-[0.9] font-serif font-black tracking-tighter flex flex-wrap gap-x-4 md:gap-x-8 gap-y-2 relative z-10">
              <CinematicWord text="Gowtham" delayOffset={0.1} className="text-primary" />
              <CinematicWord text="Raja" delayOffset={0.5} className="text-secondary" />
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-end relative z-30">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.8 }}
              className="text-lg md:text-xl text-primary/70 font-light leading-relaxed max-w-md"
            >
              Full Stack Developer & AI Enthusiast engineering robust software systems and crafting meticulous digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.0 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <Magnetic>
                <a href="#projects" className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-primary hover:text-accent1 transition-colors py-4 px-2">
                  Explore Work
                  <span className="w-10 h-px bg-primary group-hover:bg-accent1 group-hover:w-16 transition-all duration-300"></span>
                </a>
              </Magnetic>
              <Magnetic>
                <a href="/Gowtham_Raja_Resume.pdf" download="Gowtham_Raja_Resume.pdf" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors py-4 px-2">
                  <Download size={16} className="group-hover:-translate-y-1 transition-transform" />
                  Resume
                </a>
              </Magnetic>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
          >
            <LocalTime />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
