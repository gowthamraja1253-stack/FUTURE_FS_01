import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "JavaScript", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Java", "Python", "REST APIs"]
    },
    {
      title: "Mobile Development",
      skills: ["Android Development", "Java (Android)", "XML"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "Firebase"]
    },
    {
      title: "AI & Prompt Engineering",
      skills: ["Prompt Engineering", "Custom GPTs", "AI Integrations"]
    },
    {
      title: "Tools & Others",
      skills: ["GitHub", "Vercel", "Arduino", "Rapid Prototyping", "MERN Stack"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent1 to-accent2 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl border-white/10 hover:border-accent1/50 transition-colors group"
            >
              <h3 className="text-xl font-bold mb-6 text-white group-hover:text-accent1 transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1.5 text-sm font-medium bg-white/5 border border-white/10 rounded-lg text-secondary group-hover:border-white/20 transition-colors"
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
