import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Marketing Vice Head",
      company: "AWS Cloud Club",
      date: "Aug 2026 - Present",
      description: "Leading marketing initiatives, managing outreach campaigns, and promoting cloud computing technologies and events to the community.",
    },
    {
      title: "Software Engineer Intern",
      company: "Cybernaut EdTech",
      date: "Aug 2026 - Present",
      description: "Software Development intern working remotely from Chennai. Focused on building robust software solutions and enhancing application architecture.",
    },
    {
      title: "Full Stack Web Development Intern",
      company: "Future Interns",
      date: "May 2026 - Jun 2026",
      description: "Completed a comprehensive full-stack web development internship. Focused on front-end and back-end integration to build real-world web applications.",
    },
    {
      title: "Technical Team Member",
      company: "Beta Bots | SRM RMP",
      date: "Sep 2025 - Jul 2026",
      description: "Collaborated with cross-functional teams to build and prototype robotic systems. Organized technical workshops and led sessions on rapid prototyping.",
    },
    {
      title: "Student Intern",
      company: "Futura Robotics",
      date: "May 2023 - Jun 2023",
      description: "🚀 GPT Internship at Futura Robotics. I had the opportunity to intern at Futura Robotics, where I explored custom GPT solutions and prompt engineering strategies to automate internal workflows.",
    }
  ];

  return (
    <section id="experience" className="py-32 relative bg-background border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-primary/20 pb-8"
        >
          <h2 className="text-5xl md:text-7xl font-serif font-black text-primary tracking-tighter">Experience</h2>
          <p className="text-secondary text-sm uppercase tracking-[0.2em] font-bold mt-6 md:mt-0">Career Timeline</p>
        </motion.div>

        <div className="flex flex-col border-b border-primary/20">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="grid md:grid-cols-12 gap-8 py-10 md:py-16 border-t border-primary/20 hover:bg-surface/50 transition-colors group"
            >
              <div className="md:col-span-3">
                <span className="text-sm font-semibold uppercase tracking-widest text-primary/60 group-hover:text-primary transition-colors">{exp.date}</span>
              </div>
              
              <div className="md:col-span-4">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary group-hover:text-accent2 transition-colors mb-2">{exp.title}</h3>
                <p className="text-lg font-medium text-secondary">{exp.company}</p>
              </div>
              
              <div className="md:col-span-5">
                <p className="text-primary/70 font-light leading-relaxed text-base md:text-lg">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
