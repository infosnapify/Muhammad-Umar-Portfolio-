import React from 'react';
import { ArrowUp, MapPin, Heart, Mail, Phone } from 'lucide-react';
import { FaWhatsapp, FaLinkedin, FaGithub, FaSnapchatGhost, FaFacebook } from 'react-icons/fa';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-t border-slate-200/80 text-slate-600 text-xs font-semibold relative">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Main Footer Rounded Card */}
        <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 border border-slate-200/80 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-3">
              {/* < Umar /> Brand Logo */}
              <div className="px-3 py-1.5 rounded-2xl bg-slate-900 text-white font-black text-lg tracking-tight shadow-md border border-slate-800 flex items-center">
                <span className="text-[#f43f5e] font-mono">&lt;&nbsp;</span>
                <span className="text-white font-extrabold">{PERSONAL_INFO.shortName || 'Umar'}</span>
                <span className="text-[#f43f5e] font-mono">&nbsp;/&gt;</span>
              </div>
              <div>
                <p className="text-slate-900 font-black text-base">{PERSONAL_INFO.name}</p>
                <p className="text-xs text-[#f43f5e] font-extrabold">{PERSONAL_INFO.title}</p>
              </div>
            </div>
            <p className="text-slate-500 text-xs max-w-sm pt-1">
              Building high-performance React web applications and driving revenue with Snapchat & Meta digital ad campaigns.
            </p>
            <div className="flex items-center gap-2 text-slate-500 text-[11px] pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#f43f5e]" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-bold text-slate-700">
            <a href="#hero" className="hover:text-[#f43f5e] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#f43f5e] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#f43f5e] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#f43f5e] transition-colors">Projects</a>
            <a href="#experience" className="hover:text-[#f43f5e] transition-colors">Experience</a>
            <a href="#contact" className="hover:text-[#f43f5e] transition-colors">Contact</a>
          </div>

          {/* Social Media Links & WhatsApp */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-500 hover:text-white flex items-center justify-center text-lg transition-all cursor-pointer shadow-xs"
              title="WhatsApp (+923056490157)"
            >
              <FaWhatsapp />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-50 text-[#0a66c2] border border-slate-200 hover:bg-[#0a66c2] hover:text-white flex items-center justify-center text-lg transition-all cursor-pointer shadow-xs"
              title="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-50 text-slate-800 border border-slate-200 hover:bg-slate-900 hover:text-white flex items-center justify-center text-lg transition-all cursor-pointer shadow-xs"
              title="GitHub Profile"
            >
              <FaGithub />
            </a>

            <a
              href={PERSONAL_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-50 text-blue-600 border border-slate-200 hover:bg-blue-600 hover:text-white flex items-center justify-center text-lg transition-all cursor-pointer shadow-xs"
              title="Facebook"
            >
              <FaFacebook />
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2 text-[11px] text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-[#f43f5e] text-slate-700 hover:text-white border border-slate-200 transition-all cursor-pointer shadow-xs font-bold text-xs"
            title="Back to Top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

