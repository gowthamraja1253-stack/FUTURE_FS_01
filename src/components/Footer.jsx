import React from 'react';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 mt-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-accent1/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        <p className="text-secondary text-sm">
          &copy; {new Date().getFullYear()} Designed & Developed by Gowtham Raja
        </p>
        <div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
