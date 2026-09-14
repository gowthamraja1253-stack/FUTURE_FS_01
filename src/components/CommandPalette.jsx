import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, Briefcase, FileCode, Mail, FileText } from 'lucide-react';

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [isMac, setIsMac] = useState(true);

  useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0);

    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const commands = [
    { name: "About Me", icon: <User size={16} />, href: "#about" },
    { name: "My Skills", icon: <FileCode size={16} />, href: "#skills" },
    { name: "Selected Works", icon: <Briefcase size={16} />, href: "#projects" },
    { name: "Experience Timeline", icon: <Briefcase size={16} />, href: "#experience" },
    { name: "Send a Message", icon: <Mail size={16} />, href: "#contact" },
  ];

  const filteredCommands = commands.filter(cmd => 
    cmd.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (href) => {
    setIsOpen(false);
    setSearch("");
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Floating Cmd+K Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-2 bg-surface text-primary border border-primary/10 px-4 py-2 rounded-full shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
      >
        <Search size={14} className="text-primary/60" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">Navigate</span>
        <kbd className="ml-2 px-2 py-0.5 rounded bg-primary/5 text-primary text-[10px] font-bold border border-primary/10">
          {isMac ? '⌘ K' : 'Ctrl K'}
        </kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-[100]"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-lg bg-surface rounded-2xl shadow-2xl overflow-hidden z-[101] border border-primary/10"
            >
              <div className="flex items-center px-4 py-4 border-b border-primary/10">
                <Search size={20} className="text-primary/40 mr-3" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Type a command or search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-transparent text-lg text-primary placeholder:text-primary/40 focus:outline-none font-light"
                />
                <kbd className="px-2 py-1 text-xs text-primary/40 bg-primary/5 rounded border border-primary/10">ESC</kbd>
              </div>

              <div className="max-h-96 overflow-y-auto py-2">
                {filteredCommands.length > 0 ? (
                  filteredCommands.map((cmd, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelect(cmd.href)}
                      className="w-full text-left px-6 py-3 flex items-center gap-4 hover:bg-primary/5 transition-colors group"
                    >
                      <span className="text-primary/40 group-hover:text-accent1 transition-colors">
                        {cmd.icon}
                      </span>
                      <span className="text-primary font-medium text-sm">{cmd.name}</span>
                    </button>
                  ))
                ) : (
                  <div className="px-6 py-8 text-center text-primary/40 text-sm">
                    No commands found.
                  </div>
                )}
                
                <div className="px-6 py-2 mt-2 border-t border-primary/10">
                  <a
                    href="/Gowtham_Raja_Resume.pdf"
                    download
                    className="w-full text-left py-3 flex items-center gap-4 hover:bg-primary/5 transition-colors group"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-primary/40 group-hover:text-accent1 transition-colors">
                      <FileText size={16} />
                    </span>
                    <span className="text-primary font-medium text-sm">Download Resume</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommandPalette;
