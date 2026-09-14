import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

import gmusicImg from '../assets/projects/gmusic.jpg';
import tripnestImg from '../assets/projects/tripnest.jpg';
import medReminderImg from '../assets/projects/med_reminder.jpg';
import vehicleServiceImg from '../assets/projects/vehicle_service.jpg';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    if (hoveredProject !== null) {
      window.addEventListener('mousemove', updateMouse);
    }
    return () => window.removeEventListener('mousemove', updateMouse);
  }, [hoveredProject]);

  const projects = [
    {
      title: "Gmusic – Feel the Isai",
      description: "Modern South Indian music web application with immersive UI and smooth music experience. Focuses on seamless audio streaming and cultural aesthetic.",
      tags: ["C++", "Android", "UI/UX"],
      github: "https://github.com/gowthamraja1253-stack/Gmusic",
      demo: "https://gmusic-three.vercel.app",
      status: "Live",
      image: gmusicImg
    },
    {
      title: "TRIPNEST",
      description: "A comprehensive travel booking and management platform developed during my Infosys Springboard internship.",
      tags: ["Full Stack", "Web App", "Internship"],
      demo: "https://tripnest-frontend-s6wx.onrender.com",
      status: "Internship Project",
      image: tripnestImg
    },
    {
      title: "Med Reminder",
      description: "Medication reminder full-stack web application built during Hackcelerate’26 to help users track medicine schedules efficiently.",
      tags: ["Full Stack", "Web App", "Hackathon"],
      demo: "https://dev-dynamos-med-reminder.vercel.app",
      status: "Hackathon",
      image: medReminderImg
    },
    {
      title: "Vehicle Service Center",
      description: "Collaborative vehicle management application focused on data organization, scalable UI, and efficient service tracking.",
      tags: ["C++", "Database", "Scalable UI"],
      github: "https://github.com/shivji2138/vehicle_service_center_management",
      image: vehicleServiceImg
    }
  ];

  return (
    <section id="projects" className="py-32 relative bg-surface text-primary">
      
      {/* Floating Dynamic Preview Image */}
      <AnimatePresence>
        {hoveredProject !== null && projects[hoveredProject].image && (
          <motion.img
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: (mousePos.x % 10) - 5, // Subtle dynamic tilt based on mouse X
              x: mousePos.x + 20,
              y: mousePos.y + 20,
            }}
            exit={{ opacity: 0, scale: 0.8, rotate: 0 }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.2 }}
            src={projects[hoveredProject].image}
            alt="Project Preview"
            className="fixed top-0 left-0 w-72 h-48 md:w-[400px] md:h-[250px] object-cover pointer-events-none z-[100] shadow-2xl hidden md:block border-2 border-primary/10 rounded-xl"
          />
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-primary/10 pb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl font-serif font-black tracking-tighter">Selected<br/>Works.</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary/60 max-w-sm mt-8 md:mt-0 font-light text-lg"
          >
            A showcase of digital products, hackathon prototypes, and robust system architectures.
          </motion.p>
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col gap-8 md:gap-16 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center group`}
            >
              
              {/* Massive Title Block */}
              <div 
                className="w-full md:w-1/2 cursor-crosshair"
                onMouseEnter={() => setHoveredProject(idx)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <h3 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-[1.1] tracking-tight text-primary/50 group-hover:text-accent1 transition-colors duration-500">
                  {project.title}
                </h3>
                {project.status && (
                  <span className="inline-block mt-6 text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-2 border border-primary/10 rounded-full text-primary group-hover:border-accent1 group-hover:text-accent1 transition-colors">
                    {project.status}
                  </span>
                )}
              </div>

              {/* Description & Links */}
              <div className="w-full md:w-1/2 p-8 md:p-12 bg-primary/5 border border-primary/10 rounded-none md:rounded-3xl hover:bg-surface/10 transition-colors duration-500 relative overflow-hidden">
                <div className="absolute -inset-full w-full h-full bg-gradient-to-tr from-accent1/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full blur-[100px]"></div>
                
                <p className="text-lg md:text-xl text-primary/80 font-light leading-relaxed mb-10 relative z-10">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-12 relative z-10">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-medium px-4 py-1.5 bg-surface text-primary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 relative z-10">
                  {project.github && project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest hover:text-accent1 transition-colors">
                      <FaGithub size={18} />
                      Source Code
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest hover:text-accent2 transition-colors">
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
