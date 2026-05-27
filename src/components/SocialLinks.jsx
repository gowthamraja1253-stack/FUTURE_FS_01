import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

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
        <motion.a
          key={idx}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.95 }}
          className={`group relative p-4 rounded-full glass border-white/10 transition-all duration-300 text-secondary bg-white/5 ${link.glowHover}`}
        >
          {link.icon}
          
          {/* Tooltip */}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-semibold text-white bg-black/80 rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            {link.name}
          </span>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
