import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Laptop, Code } from 'lucide-react';

const About = () => {
  const stats = [
    { label: "Hackathons", value: "10+", icon: <Laptop className="text-accent1" size={24} /> },
    { label: "Certifications", value: "5+", icon: <Award className="text-accent2" size={24} /> },
    { label: "Live Projects", value: "4+", icon: <Code className="text-accent1" size={24} /> },
    { label: "Technologies", value: "15+", icon: <BookOpen className="text-accent2" size={24} /> },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent1 to-accent2 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-secondary leading-relaxed"
          >
            <p>
              I am a B.Tech Information Technology student at <span className="text-white font-medium">SRM Institute of Science and Technology, Ramapuram</span>.
              I am deeply passionate about building impactful software across web, mobile, AI, and embedded systems.
            </p>
            <p>
              My journey involves constant learning and building. I am recognized as a <span className="text-accent1 font-medium">Google Top Prompt Creator</span> and an <span className="text-accent2 font-medium">NPTEL Elite achiever</span> with 97/100 in Java.
            </p>
            <p>
              As a hackathon enthusiast, I thrive in fast-paced collaborative environments, constantly pushing the boundaries of what's possible with modern technologies and rapid prototyping.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center space-y-2 border-white/10 hover:border-accent1/50 transition-colors"
              >
                <div className="p-3 bg-white/5 rounded-full mb-2">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                <p className="text-sm text-secondary font-medium uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
