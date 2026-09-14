import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: "Languages",
    skills: ["C++", "Java", "Python", "JavaScript", "HTML/CSS"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React.js", "Node.js", "Express.js", "Tailwind CSS"],
  },
  {
    category: "Tools & Databases",
    skills: ["MongoDB", "MySQL", "Git", "GitHub", "Figma", "Postman", "Arduino", "Thunkable"],
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative bg-background overflow-hidden">
      
      {/* Background Marquee */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-5 pointer-events-none overflow-hidden whitespace-nowrap">
        <h2 className="text-[15vw] font-serif font-black uppercase tracking-tighter animate-marquee">
          Capabilities Capabilities Capabilities
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-accent1 mb-4">Toolkit</h2>
          <div className="w-16 h-px bg-primary/20"></div>
        </motion.div>

        <div className="space-y-12 md:space-y-0">
          {skillCategories.map((group, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="grid md:grid-cols-4 border-b border-primary/10 py-12 md:py-16 hover:bg-surface transition-colors duration-500 px-4 -mx-4 group"
            >
              <div className="md:col-span-1 mb-6 md:mb-0">
                <h3 className="text-xl font-serif font-bold text-primary group-hover:text-accent1 transition-colors">{group.category}</h3>
              </div>
              <div className="md:col-span-3 flex flex-wrap gap-4 md:gap-8">
                {group.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="text-lg md:text-2xl font-light text-secondary hover:text-primary transition-colors cursor-default hover:scale-105 transform-gpu duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
