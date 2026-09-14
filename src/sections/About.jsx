import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { label: "Hackathons", value: "10+" },
    { label: "Live Projects", value: "04+" },
    { label: "Technologies", value: "15+" },
  ];

  return (
    <section id="about" className="py-32 relative bg-surface border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Left Column: Huge Title */}
        <div className="md:col-span-5 lg:col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sticky top-32"
          >
            <h2 className="text-5xl md:text-6xl font-serif font-black text-primary leading-none tracking-tighter mb-8">
              The<br/>Engineer<br/><span className="text-secondary italic">Behind</span><br/>The Code.
            </h2>
            
            <div className="hidden md:flex flex-col gap-8 mt-16">
              {stats.map((stat, idx) => (
                <div key={idx} className="border-l-2 border-primary/20 pl-6">
                  <h4 className="text-4xl font-serif font-bold text-primary">{stat.value}</h4>
                  <p className="text-xs uppercase tracking-widest text-secondary mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Editorial Text */}
        <div className="md:col-span-7 lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-primary/80 font-light leading-relaxed space-y-10"
          >
            <p className="first-letter:text-6xl first-letter:font-serif first-letter:float-left first-letter:mr-4 first-letter:mt-2 first-letter:text-accent1">
              I am a B.Tech Information Technology student at SRM Institute of Science and Technology, Ramapuram. I am deeply passionate about building impactful software across web, mobile, AI, and embedded systems.
            </p>
            
            <p>
              My journey involves constant learning and building. I am recognized as a <strong className="font-semibold text-primary">Google Top Prompt Creator</strong> and an NPTEL Elite achiever with 97/100 in Java.
            </p>

            <p>
              As a hackathon enthusiast, I thrive in fast-paced collaborative environments, constantly pushing the boundaries of what's possible with modern technologies and rapid prototyping. I aim to merge high-level system architecture with flawless frontend execution.
            </p>
            
            <div className="md:hidden flex gap-8 pt-8 border-t border-primary/10">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <h4 className="text-2xl font-serif font-bold text-primary">{stat.value}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-secondary mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
