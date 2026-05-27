import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project, idx }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`relative overflow-hidden glass p-8 rounded-3xl border-white/10 ${project.borderHover} transition-colors duration-500 group h-full flex flex-col`}
      >
        {/* Background gradient blur */}
        <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${project.color} blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform-gpu`}></div>
        
        <div className="relative z-10 flex flex-col h-full transform-gpu" style={{ transform: "translateZ(30px)" }}>
          <div className="flex justify-between items-start mb-4 gap-4">
            <h3 className="text-2xl font-bold text-white group-hover:text-accent1 transition-colors">
              {project.title}
            </h3>
            {project.status && (
              <span className={`shrink-0 text-xs font-bold px-3 py-1 rounded-full ${project.statusColor || 'bg-accent1/20 text-accent1 border border-accent1/30'}`}>
                {project.status}
              </span>
            )}
          </div>
          
          <p className="text-secondary mb-8 flex-grow leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag, tIdx) => (
              <span key={tIdx} className="text-xs font-semibold px-3 py-1 bg-white/5 rounded-full text-white/70 border border-white/5">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-auto">
            {project.github && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl transition-colors border border-white/5 hover:border-white/20 group/btn"
              >
                <FaGithub size={16} className="group-hover/btn:scale-110 transition-transform" />
                GitHub
              </a>
            )}
            {project.demo && (
              <a 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl transition-colors border border-white/5 hover:border-white/20 group/btn"
              >
                <ExternalLink size={16} className="group-hover/btn:scale-110 transition-transform" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Gmusic – Feel the Isai",
      description: "Modern South Indian music web application with immersive UI and smooth music experience.",
      tags: ["C++", "Android", "UI/UX"],
      github: "https://github.com/gowthamraja1253-stack/Gmusic",
      demo: "https://gmusic-three.vercel.app",
      status: "Live",
      statusColor: "bg-green-500/20 text-green-400 border border-green-500/30",
      color: "from-blue-500/20 to-purple-500/20",
      borderHover: "hover:border-blue-500/50"
    },
    {
      title: "Med Reminder",
      description: "Medication reminder full-stack web application built during Hackcelerate’26 to help users track medicine schedules efficiently.",
      tags: ["Full Stack", "Web App", "Hackathon"],
      github: "#",
      demo: "https://dev-dynamos-med-reminder.vercel.app",
      status: "Hackathon Project",
      statusColor: "bg-purple-500/20 text-purple-400 border border-purple-500/30",
      color: "from-green-500/20 to-emerald-500/20",
      borderHover: "hover:border-green-500/50"
    },
    {
      title: "Vehicle Service Center Management",
      description: "Collaborative vehicle management application focused on data organization, scalable UI, and efficient service tracking.",
      tags: ["C++", "Database", "Scalable UI"],
      github: "https://github.com/shivji2138/vehicle_service_center_management",
      color: "from-orange-500/20 to-red-500/20",
      borderHover: "hover:border-orange-500/50"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent1 to-accent2 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
