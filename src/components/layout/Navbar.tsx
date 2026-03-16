import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';
import rrLogo from '../../assets/RR.png';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Awards', href: '#awards' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src={rrLogo} alt="Logo" className="w-10 h-10 object-contain" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
            Raja Rishith
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-4 border-l border-slate-700 pl-4 ml-0 lg:ml-2">
            <a href="https://github.com/Rishith06" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ram-rishith" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>

          <a
            // href="https://drive.google.com/file/d/1rCiM1Kjvk50_3_DrDiqpanE5QQ7NZW-Q/view?usp=drive_link"
            href="https://drive.google.com/file/d/1OX-Vy8W2JNhGUWFeoNaWz9mpBTYWU0CB/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="flex px-4 py-2 rounded-full bg-blue-600/10 text-blue-400 font-medium hover:bg-blue-600 hover:text-white transition-all border border-blue-500/30 ml-2"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="absolute top-20 left-6 right-6 glass bg-slate-900/95 backdrop-blur-xl rounded-2xl p-4 flex flex-col gap-4 md:hidden shadow-2xl border border-slate-700/50 z-50"
          style={{ willChange: 'transform, opacity' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-slate-300 hover:text-white px-4 py-2 hover:bg-slate-800/50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex justify-between items-center px-4 py-2 mt-2 border-t border-slate-700">
            <div className="flex gap-6">
              <a href="https://github.com/Rishith06" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ram-rishith" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
            
            <a
              href="https://drive.google.com/file/d/1flilFkJT5VDtWjNCu8gHa7rsaVLsc3KT/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-blue-600/20 text-blue-400 font-medium hover:bg-blue-600 hover:text-white transition-all border border-blue-500/30"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
