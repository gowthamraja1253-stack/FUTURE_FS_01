import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Eye, ArrowUpRight } from 'lucide-react';

import googleImg from '../assets/certificates/google.jpg';
import nptelImg from '../assets/certificates/nptel.jpg';
import wyntrixImg from '../assets/certificates/wyntrix.jpg';
import vitImg from '../assets/certificates/vit.jpg';
import srmImg from '../assets/certificates/srm.jpg';
import hpPresentationsImg from '../assets/certificates/hp-presentations.jpg';
import infosysImg from '../assets/certificates/infosys.jpg';
import hpAiImg from '../assets/certificates/hp-ai.jpg';
import arduinoImg from '../assets/certificates/arduino.jpg';
import signalShiftPdf from '../assets/certificates/signal-shift.pdf';

const certificationsData = [
  { id: 1, title: "Programming in Java", issuer: "NPTEL (IIT Kharagpur)", category: "Programming", skills: ["Java", "OOP"], achievement: "Elite Certification", image: nptelImg },
  { id: 11, title: "Google Top Prompt Creator", issuer: "Google Student Ambassador Program", category: "AI & Tech", skills: ["Prompt Engineering"], achievement: "Top Prompt Creator", image: googleImg },
  { id: 12, title: "Signal Shift 2K26", issuer: "SIMATS Engineering", category: "Hackathons", skills: ["Hackathon"], link: signalShiftPdf },
  { id: 8, title: "Hackcelerate’26", issuer: "SRM IST", category: "Hackathons", skills: ["Hackathon"], image: srmImg },
  { id: 9, title: "Ashes 1.0 – 24 Hours", issuer: "WYNTRIX", category: "Hackathons", skills: ["Innovation"], image: wyntrixImg },
  { id: 10, title: "Dev Hub Hack-A-Thon", issuer: "VIT Chennai", category: "Hackathons", skills: ["Development"], image: vitImg },
  { id: 2, title: "Java – Fundamentals", issuer: "Scaler Topics", category: "Programming", skills: ["Java"], link: "https://moonshot.scaler.com/s/li/eG0Iq-nATt" },
  { id: 3, title: "AI for Beginners", issuer: "HP LIFE", category: "AI & Tech", skills: ["AI"], image: hpAiImg },
  { id: 4, title: "Effective Presentations", issuer: "HP LIFE", category: "Professional Skills", skills: ["Communication"], image: hpPresentationsImg },
  { id: 5, title: "Cyber Security Overview", issuer: "Infosys Springboard", category: "Cybersecurity", skills: ["Security"], image: infosysImg },
  { id: 6, title: "MongoDB Basics", issuer: "MongoDB", category: "Databases", skills: ["MongoDB"], link: "https://learn.mongodb.com/c/6eOA9F_jQnCtI4nD1c4Hpg" },
  { id: 7, title: "Arduino 101 Crash Course", issuer: "UYIR Robotics", category: "AI & Tech", skills: ["Arduino"], image: arduinoImg }
];

const categories = ["All", "Programming", "AI & Tech", "Cybersecurity", "Databases", "Professional Skills", "Hackathons"];

const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredCerts = certificationsData.filter(cert => {
    const matchesCategory = activeCategory === "All" || cert.category === activeCategory;
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="certifications" className="py-32 relative bg-surface border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-5xl md:text-7xl font-serif font-black tracking-tighter text-primary">Credentials</h2>
            <p className="text-secondary text-sm uppercase tracking-[0.2em] font-bold mt-4">Verified Learning</p>
          </motion.div>

          <div className="flex flex-col gap-4 w-full lg:w-auto">
            <div className="relative group w-full lg:w-80">
              <Search size={16} className="absolute left-0 top-1/2 -translate-y-1/2 text-primary/40" />
              <input
                type="text"
                placeholder="Search credentials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-b-2 border-primary/20 py-2 pl-8 pr-4 text-primary placeholder:text-primary/40 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide w-full lg:max-w-md">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap text-xs font-bold uppercase tracking-widest transition-colors ${
                    activeCategory === cat ? 'text-accent1' : 'text-primary/40 hover:text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          <AnimatePresence>
            {filteredCerts.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col border-t border-primary/20 pt-6 hover:border-primary transition-colors duration-500"
              >
                {cert.achievement && (
                  <span className="absolute top-0 right-0 -translate-y-1/2 bg-accent1 text-surface text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                    {cert.achievement}
                  </span>
                )}
                
                <h3 className="text-2xl font-serif font-bold text-primary mb-2 pr-12">{cert.title}</h3>
                <p className="text-secondary text-sm font-medium mb-6 uppercase tracking-widest">{cert.issuer}</p>

                <div className="mt-auto pt-4 flex justify-between items-center">
                  <div className="flex gap-2">
                    {cert.skills.slice(0, 2).map((skill, i) => (
                      <span key={i} className="text-xs font-semibold px-2 py-1 bg-primary/5 text-primary/70">{skill}</span>
                    ))}
                  </div>
                  
                  {cert.link ? (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-surface transition-colors">
                      <ArrowUpRight size={18} />
                    </a>
                  ) : cert.image ? (
                    <button onClick={() => setSelectedImage(cert.image)} className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-surface transition-colors">
                      <Eye size={18} />
                    </button>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredCerts.length === 0 && (
          <div className="py-20 text-center text-secondary font-serif italic text-xl">
            No credentials found.
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary/90 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 p-4 text-surface hover:text-accent1 transition-colors"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X size={32} strokeWidth={1} />
            </button>
            <motion.img 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={selectedImage} 
              alt="Certificate" 
              className="max-w-[95vw] max-h-[90vh] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
