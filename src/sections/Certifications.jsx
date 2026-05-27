import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Award, Eye, Code, Brain, Shield, Database, Presentation, Laptop } from 'lucide-react';

// Import images safely
import googleImg from '../assets/certificates/google.jpg';
import nptelImg from '../assets/certificates/nptel.jpg';
import wyntrixImg from '../assets/certificates/wyntrix.jpg';
import vitImg from '../assets/certificates/vit.jpg';
import srmImg from '../assets/certificates/srm.jpg';
import hpPresentationsImg from '../assets/certificates/hp-presentations.jpg';
import infosysImg from '../assets/certificates/infosys.jpg';
import hpAiImg from '../assets/certificates/hp-ai.jpg';
import arduinoImg from '../assets/certificates/arduino.jpg';

const certificationsData = [
  {
    id: 1,
    title: "Programming in Java",
    issuer: "NPTEL (IIT Kharagpur)",
    category: "Programming",
    skills: ["Java", "OOP"],
    achievement: "Elite Certification (97/100)",
    image: nptelImg,
    icon: <Code size={24} />
  },
  {
    id: 11,
    title: "Google Top Prompt Creator",
    issuer: "Google Student Ambassador Program",
    category: "AI & Tech",
    skills: ["Prompt Engineering", "Creativity", "AI Communication"],
    achievement: "Top Prompt Creator",
    image: googleImg,
    icon: <Brain size={24} />
  },
  {
    id: 8,
    title: "Hackcelerate’26 Participation",
    issuer: "SRM Institute of Science and Technology",
    category: "Hackathons & Events",
    skills: ["Hackathon Participation", "Problem Solving", "Team Collaboration"],
    image: srmImg,
    icon: <Laptop size={24} />
  },
  {
    id: 9,
    title: "Ashes 1.0 – 24 Hours Hackathon",
    issuer: "WYNTRIX",
    category: "Hackathons & Events",
    skills: ["Innovation", "Problem Solving", "Teamwork"],
    image: wyntrixImg,
    icon: <Laptop size={24} />
  },
  {
    id: 10,
    title: "Dev Hub Hack-A-Thon",
    issuer: "VIT Chennai",
    category: "Hackathons & Events",
    skills: ["Development", "Collaboration", "Innovation"],
    image: vitImg,
    icon: <Laptop size={24} />
  },
  {
    id: 2,
    title: "Java – Mastering the Fundamentals",
    issuer: "Scaler Topics",
    category: "Programming",
    skills: ["Java"],
    link: "https://moonshot.scaler.com/s/li/eG0Iq-nATt",
    icon: <Code size={24} />
  },
  {
    id: 3,
    title: "AI for Beginners",
    issuer: "HP LIFE",
    category: "AI & Tech",
    skills: ["Artificial Intelligence"],
    image: hpAiImg,
    icon: <Brain size={24} />
  },
  {
    id: 4,
    title: "Effective Presentations",
    issuer: "HP LIFE",
    category: "Professional Skills",
    skills: ["Communication", "Presentation"],
    image: hpPresentationsImg,
    icon: <Presentation size={24} />
  },
  {
    id: 5,
    title: "Cyber Security Overview",
    issuer: "Infosys Springboard",
    category: "Cybersecurity",
    skills: ["Cybersecurity Basics"],
    image: infosysImg,
    icon: <Shield size={24} />
  },
  {
    id: 6,
    title: "MongoDB Basics for Students",
    issuer: "MongoDB",
    category: "Databases",
    skills: ["MongoDB"],
    link: "https://learn.mongodb.com/c/6eOA9F_jQnCtI4nD1c4Hpg",
    icon: <Database size={24} />
  },
  {
    id: 7,
    title: "Arduino 101 Crash Course",
    issuer: "UYIR Robotics / ROBOBOUT",
    category: "AI & Tech",
    skills: ["Arduino IDE", "Embedded Systems"],
    image: arduinoImg,
    icon: <Brain size={24} />
  }
];

const categories = ["All", "Programming", "AI & Tech", "Cybersecurity", "Databases", "Professional Skills", "Hackathons & Events"];

const AnimatedCounter = ({ value, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (start === end) return;
    let totalMilSecDur = parseInt(2000);
    let incrementTime = (totalMilSecDur / end);
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="glass p-6 rounded-2xl border-white/10 flex flex-col items-center justify-center text-center">
      <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent1 to-accent2 mb-2">
        {count}{value.toString().includes('+') ? '+' : ''}
      </h3>
      <p className="text-secondary text-sm font-medium uppercase tracking-wider">{label}</p>
    </div>
  );
};

const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredCerts = certificationsData.filter(cert => {
    const matchesCategory = activeCategory === "All" || cert.category === activeCategory;
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cert.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-accent2/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Certifications & Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent1 to-accent2 rounded-full mb-12"></div>
        </motion.div>

        {/* Statistics Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16">
          <AnimatedCounter value="11" label="Total Certifications" />
          <AnimatedCounter value="3" label="Hackathons" />
          <AnimatedCounter value="2" label="Top Achievements" />
          <AnimatedCounter value="15+" label="Technical Skills" />
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">
          
          {/* Custom Horizontal Scroll Container for Categories */}
          <div className="w-full lg:w-auto overflow-x-auto pb-4 lg:pb-0 scrollbar-hide flex gap-3 snap-x">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`snap-start shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat 
                  ? 'bg-gradient-to-r from-accent1 to-accent2 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]' 
                  : 'glass text-secondary hover:text-white border-white/10 hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="w-full lg:w-80 relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/40 group-focus-within:text-accent1 transition-colors">
              <Search size={18} />
            </div>
            <input
              type="text"
              placeholder="Search certifications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent1/50 focus:border-accent1 transition-all"
            />
          </div>
        </div>

        {/* Grid Layout */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCerts.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                className="group relative glass p-6 rounded-3xl border-white/10 hover:border-accent1/30 transition-all duration-300 flex flex-col h-full overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-accent1/10 blur-[50px] rounded-full group-hover:bg-accent1/20 transition-colors pointer-events-none"></div>
                
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-accent1 group-hover:scale-110 transition-transform">
                    {cert.icon}
                  </div>
                  {cert.achievement && (
                    <span className="px-3 py-1 text-xs font-bold text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 rounded-full">
                      {cert.achievement}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 relative z-10">{cert.title}</h3>
                <p className="text-secondary text-sm font-medium mb-6 relative z-10">{cert.issuer}</p>

                <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs font-semibold bg-white/5 border border-white/10 rounded-md text-white/70">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-auto relative z-10">
                  {cert.link ? (
                    <a 
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent1/50 rounded-xl text-sm font-medium text-white transition-all group/btn"
                    >
                      <Eye size={16} className="text-accent1 group-hover/btn:scale-110 transition-transform" />
                      Verify Credential
                    </a>
                  ) : cert.image ? (
                    <button 
                      onClick={() => setSelectedImage(cert.image)}
                      className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent1/50 rounded-xl text-sm font-medium text-white transition-all group/btn"
                    >
                      <Eye size={16} className="text-accent1 group-hover/btn:scale-110 transition-transform" />
                      View Certificate
                    </button>
                  ) : (
                    <div className="w-full py-3 bg-white/5 border border-white/5 rounded-xl text-sm font-medium text-white/40 text-center cursor-not-allowed">
                      Verified
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredCerts.length === 0 && (
          <div className="py-20 text-center text-secondary">
            <p className="text-lg">No certifications found matching your search.</p>
          </div>
        )}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white transition-colors z-[101]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={24} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-auto h-auto max-w-[90vw] max-h-[90vh] rounded-xl overflow-hidden shadow-2xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Certificate" 
                className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
