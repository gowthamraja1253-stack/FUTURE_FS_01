import React from 'react';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col items-center md:items-start">
          <a href="#" className="text-3xl font-serif font-bold tracking-tight mb-2">
            Gowtham<span className="text-accent1">.</span>
          </a>
          <p className="text-surface/50 text-sm font-light">
            © {new Date().getFullYear()} Gowtham Raja. All rights reserved.
          </p>
        </div>

        <SocialLinks />
        
      </div>
    </footer>
  );
};

export default Footer;
