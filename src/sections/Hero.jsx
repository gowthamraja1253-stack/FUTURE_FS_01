import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Cpu, ArrowRight, Download } from 'lucide-react';
import SocialLinks from '../components/SocialLinks';
const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent1/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-50"></div>
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-accent2/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen opacity-40 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center md:text-left flex flex-col md:flex-row items-center">
        <motion.div 
          className="flex-1 space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-block">
            <span className="px-4 py-2 rounded-full border border-white/10 glass text-sm text-secondary font-medium tracking-wide">
              Welcome to my portfolio
            </span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            Hi, I'm <br className="hidden md:block"/>
            <span className="text-gradient">Gowtham Raja</span>
          </motion.h1>
          
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center md:justify-start gap-4 text-xl md:text-2xl text-secondary font-light">
            <span className="flex items-center gap-2"><Code2 size={24} className="text-accent1" /> Full Stack Developer</span>
            <span className="hidden md:block text-white/20">•</span>
            <span className="flex items-center gap-2"><Smartphone size={24} className="text-accent2" /> Android Developer</span>
            <span className="hidden md:block text-white/20">•</span>
            <span className="flex items-center gap-2"><Cpu size={24} className="text-accent1" /> AI Enthusiast</span>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
            <a href="#projects" className="group px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition-all flex items-center gap-2">
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#" className="px-8 py-4 rounded-full font-medium border border-white/20 glass glass-hover transition-all flex items-center gap-2 text-white">
              <Download size={18} />
              Resume
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-4 flex justify-center md:justify-start">
            <SocialLinks />
          </motion.div>
        </motion.div>

        {/* Decorative elements for right side / floating icons */}
        <motion.div 
          className="hidden md:flex flex-1 justify-center relative h-[500px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* We can use placeholder geometric shapes or icons here */}
          <div className="absolute top-1/4 right-1/4 animate-float" style={{ animationDelay: '0s' }}>
             <div className="w-24 h-24 rounded-2xl glass flex items-center justify-center rotate-12 border-accent1/30">
                <Code2 size={40} className="text-accent1" />
             </div>
          </div>
          <div className="absolute bottom-1/3 right-1/2 animate-float" style={{ animationDelay: '1s' }}>
             <div className="w-32 h-32 rounded-full glass flex items-center justify-center -rotate-12 border-accent2/30">
                <Smartphone size={50} className="text-accent2" />
             </div>
          </div>
          <div className="absolute top-1/2 right-0 animate-float" style={{ animationDelay: '2s' }}>
             <div className="w-20 h-20 rounded-xl glass flex items-center justify-center rotate-45 border-white/20">
                <Cpu size={32} className="text-white" />
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
