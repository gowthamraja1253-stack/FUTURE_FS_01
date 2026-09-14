import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Shield, Database, Award } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Google Top Prompt Creator",
      issuer: "Google",
      icon: <Star size={32} strokeWidth={1.5} />,
      colSpan: "md:col-span-2",
      bg: "bg-surface"
    },
    {
      title: "NPTEL Elite Certification",
      issuer: "Java (97/100)",
      icon: <Trophy size={32} strokeWidth={1.5} />,
      colSpan: "md:col-span-1",
      bg: "bg-primary text-surface"
    },
    {
      title: "Cyber Security",
      issuer: "Infosys Springboard",
      icon: <Shield size={32} strokeWidth={1.5} />,
      colSpan: "md:col-span-1",
      bg: "bg-surface"
    },
    {
      title: "MongoDB Basics",
      issuer: "MongoDB",
      icon: <Database size={32} strokeWidth={1.5} />,
      colSpan: "md:col-span-1",
      bg: "bg-surface"
    },
    {
      title: "HP LIFE Certifications",
      issuer: "HP",
      icon: <Award size={32} strokeWidth={1.5} />,
      colSpan: "md:col-span-1",
      bg: "bg-surface"
    }
  ];

  return (
    <section id="achievements" className="py-32 relative bg-background">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-serif font-black tracking-tighter text-primary">Honors<br/><span className="text-secondary italic font-light">&</span> Awards.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-10 border border-primary/10 ${item.colSpan} ${item.bg} hover:-translate-y-2 transition-transform duration-500 flex flex-col justify-between min-h-[250px]`}
            >
              <div className={`mb-8 ${item.bg === 'bg-surface' ? 'text-primary' : 'text-surface'}`}>
                {item.icon}
              </div>
              <div>
                <p className={`text-xs uppercase tracking-[0.2em] font-bold mb-2 ${item.bg === 'bg-surface' ? 'text-secondary' : 'text-surface/70'}`}>
                  {item.issuer}
                </p>
                <h3 className="text-2xl font-serif font-bold tracking-tight">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
