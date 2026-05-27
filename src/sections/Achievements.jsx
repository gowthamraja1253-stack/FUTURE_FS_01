import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Shield, Database } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Google Top Prompt Creator",
      issuer: "Google",
      icon: <Star className="text-yellow-400" size={32} />,
      gradient: "from-yellow-400/20 to-orange-500/20"
    },
    {
      title: "NPTEL Elite Certification",
      issuer: "Java (97/100)",
      icon: <Trophy className="text-accent1" size={32} />,
      gradient: "from-blue-400/20 to-cyan-500/20"
    },
    {
      title: "Cyber Security",
      issuer: "Infosys Springboard",
      icon: <Shield className="text-accent2" size={32} />,
      gradient: "from-purple-400/20 to-pink-500/20"
    },
    {
      title: "MongoDB Basics",
      issuer: "MongoDB",
      icon: <Database className="text-green-400" size={32} />,
      gradient: "from-green-400/20 to-emerald-500/20"
    },
    {
      title: "HP LIFE Certifications",
      issuer: "HP",
      icon: <Award className="text-blue-400" size={32} />,
      gradient: "from-blue-500/20 to-indigo-500/20"
    }
  ];

  // We missed importing Award in the initial list, let's fix it above or just redefine here for safety if we change icons.
  // We'll import it correctly in the code.

  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent1 to-accent2 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative p-[1px] rounded-2xl overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
              <div className="relative glass h-full p-8 rounded-2xl flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-background/50 rounded-full border border-white/10 backdrop-blur-md">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-secondary text-sm font-medium">{item.issuer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Quick fix for missing Award import
import { Award } from 'lucide-react';

export default Achievements;
