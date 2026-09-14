import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const MagneticButton = ({ children, className = "", href }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.a>
  );
};

const SocialLinks = ({ className = "" }) => {
  const links = [
    { 
      name: 'GitHub', 
      icon: <FaGithub size={20} />, 
      url: 'https://github.com/gowthamraja1253-stack', 
      glowHover: 'group-hover:text-white group-hover:border-white/50 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]'
    },
    { 
      name: 'LinkedIn', 
      icon: <FaLinkedin size={20} />, 
      url: 'https://www.linkedin.com/in/gowtham-raja-0943b5373/', 
      glowHover: 'group-hover:text-[#0a66c2] group-hover:border-[#0a66c2]/50 group-hover:shadow-[0_0_15px_rgba(10,102,194,0.4)]'
    },
    { 
      name: 'Email', 
      icon: <FaEnvelope size={20} />, 
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=gowthamraja1253@gmail.com', 
      glowHover: 'group-hover:text-red-400 group-hover:border-red-400/50 group-hover:shadow-[0_0_15px_rgba(248,113,113,0.4)]'
    }
  ];

  return (
    <div className={`flex gap-4 ${className}`}>
      {links.map((link, idx) => (
        <MagneticButton
          key={idx}
          href={link.url}
          className={`group relative p-4 rounded-full glass border-white/10 transition-colors duration-300 text-secondary bg-white/[0.03] ${link.glowHover}`}
        >
          {link.icon}
          {/* Tooltip */}
          <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 text-xs font-medium text-white bg-black/90 backdrop-blur-md rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap translate-y-2 group-hover:translate-y-0">
            {link.name}
          </span>
        </MagneticButton>
      ))}
    </div>
  );
};

export default SocialLinks;
