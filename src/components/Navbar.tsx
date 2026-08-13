import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Menu, X } from 'lucide-react';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onCopyEmail: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCopyEmail }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'services', 'projects', 'experience', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navLinks = [
    { name: 'Home', href: 'hero' },
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Services', href: 'services' },
    { name: 'Portfolio', href: 'projects' },
    { name: 'Experience', href: 'experience' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className={`w-full px-4 sm:px-8 py-3 sm:py-4 transition-all ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo / Brand Name: < Junaid /> or < Umar /> */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center text-xl font-black text-slate-900 tracking-tight cursor-pointer group"
          >
            <span className="text-[#f43f5e] group-hover:scale-110 transition-transform">&lt;&nbsp;</span>
            <span className="text-slate-900 font-extrabold">{PERSONAL_INFO.shortName || 'Umar'}</span>
            <span className="text-[#f43f5e] group-hover:scale-110 transition-transform">&nbsp;/&gt;</span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 bg-white/80 p-1.5 rounded-full border border-slate-200 shadow-sm backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-white bg-[#f43f5e] shadow-md shadow-rose-500/30'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>

          {/* Top Socials & Action CTAs */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1.5 bg-slate-100 p-1 rounded-full border border-slate-200">
              <a
                href={PERSONAL_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white hover:bg-[#f43f5e] hover:text-white text-slate-600 flex items-center justify-center text-xs transition-colors shadow-2xs"
                title="Facebook"
              >
                <span className="text-xs"><FaFacebookF /></span>
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white hover:bg-[#f43f5e] hover:text-white text-slate-600 flex items-center justify-center text-xs transition-colors shadow-2xs"
                title="GitHub"
              >
                <span className="text-xs"><FaGithub /></span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white hover:bg-[#f43f5e] hover:text-white text-slate-600 flex items-center justify-center text-xs transition-colors shadow-2xs"
                title="LinkedIn"
              >
                <span className="text-xs"><FaLinkedinIn /></span>
              </a>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-800 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer border border-slate-200/60 bg-white"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#f43f5e]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-3 p-4 bg-white/95 backdrop-blur-2xl rounded-3xl border border-slate-200 shadow-xl flex flex-col gap-1 max-w-6xl mx-auto"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`text-left px-4 py-2.5 rounded-2xl text-sm font-bold transition-colors cursor-pointer ${
                  activeSection === link.href
                    ? 'bg-[#f43f5e] text-white shadow-md shadow-rose-500/20'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="pt-3 mt-1 border-t border-slate-100 flex items-center justify-between px-2">
              <span className="text-xs text-slate-500 font-medium">Connect:</span>
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors text-sm"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-[#f43f5e] hover:text-white transition-colors text-sm"
                >
                  <FaGithub />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-[#f43f5e] hover:text-white transition-colors text-sm"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

