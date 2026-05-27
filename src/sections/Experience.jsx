import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Technical Team Member",
      company: "Beta Bots | SRM RMP",
      date: "Sep 2025 - Present",
      description: "Collaborated with cross-functional teams to build and prototype robotic systems. Organized technical workshops and led sessions on rapid prototyping.",
    },
    {
      title: "GPT Intern",
      company: "Futura Robotics",
      date: "Summer 2023",
      description: "Developed custom GPT solutions and prompt engineering strategies to automate internal workflows. Explored AI integrations for robotic processes.",
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent1 to-accent2 rounded-full mx-auto"></div>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 glass bg-background text-accent1 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase size={18} />
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl glass border-white/10 hover:border-accent1/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <span className="text-sm font-medium text-accent2 px-3 py-1 bg-accent2/10 rounded-full w-fit">
                    {exp.date}
                  </span>
                </div>
                <h4 className="text-md font-medium text-secondary mb-4">{exp.company}</h4>
                <p className="text-white/70 leading-relaxed text-sm">
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
