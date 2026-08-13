import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { Mail, Download, MapPin, ArrowUpRight } from 'lucide-react';
import { FaWhatsapp, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onCopyEmail: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCopyEmail }) => {
  // 3D Tilt Effect state & logic for Profile Picture
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
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
    <section id="hero" className="pt-24 sm:pt-28 pb-10 px-4 sm:px-6 lg:px-8 relative bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        {/* Main Light Theme Bento Banner Container */}
        <div className="relative bg-white rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-md overflow-hidden">
          
          {/* Subtle Decorative Background Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-100/60 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-100/80 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col items-center text-center max-w-4xl mx-auto relative z-10">
            
            {/* Top Socials Floating Capsule */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 bg-slate-50 p-1.5 px-3 rounded-full border border-slate-200 shadow-2xs mb-6"
            >
              <a
                href={PERSONAL_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white text-slate-600 hover:text-[#f43f5e] flex items-center justify-center text-xs transition-colors"
                title="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white text-slate-600 hover:text-[#f43f5e] flex items-center justify-center text-xs transition-colors"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white text-slate-600 hover:text-[#f43f5e] flex items-center justify-center text-xs transition-colors"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </motion.div>

            {/* Profile Picture with Spinning Pink Dashed Frame */}
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative mb-6 cursor-pointer group"
            >
              {/* Continuously Spinning Pink Dashed Accent Frame */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                className="absolute -inset-2.5 border-2 border-dashed border-[#f43f5e] rounded-3xl pointer-events-none"
              />

              {/* White Profile Box */}
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md p-1 relative z-10">
                <img
                  src={PERSONAL_INFO.profilePic}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>

            {/* Status Pill Badge: Available for opportunities */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold mb-4"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for opportunities</span>
            </motion.div>

            {/* Heading & Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-2 mb-4"
            >
              <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
                HELLO, I'M
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
                Muhammad <span className="text-[#f43f5e]">Umar</span> Waheed
              </h1>
              <p className="text-lg sm:text-2xl font-bold text-[#f43f5e] pt-1">
                {PERSONAL_INFO.title}
              </p>
            </motion.div>

            {/* Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed mb-6 font-normal"
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            {/* Location & Email Info */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-500 mb-8"
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#f43f5e]" />
                {PERSONAL_INFO.location}
              </span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-[#f43f5e] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#f43f5e]" />
                {PERSONAL_INFO.email}
              </a>
            </motion.div>

            {/* Action Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto mb-10"
            >
              {/* Let's Talk Button */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-white bg-slate-900 hover:bg-[#f43f5e] rounded-full shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* WhatsApp Button */}
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-600 hover:text-white rounded-full border border-emerald-200 transition-all duration-200 cursor-pointer"
              >
                <span className="text-base"><FaWhatsapp /></span>
                <span>WhatsApp</span>
              </a>

              {/* Download CV Button */}
              <a
                href={PERSONAL_INFO.cvUrl}
                download="Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-700 bg-white hover:bg-slate-100 rounded-full border border-slate-300 transition-all duration-200 cursor-pointer shadow-2xs"
              >
                <Download className="w-4 h-4 text-slate-500" />
                <span>Download CV</span>
              </a>
            </motion.div>

            {/* Bottom Key Stats Card Pill Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full bg-slate-50 rounded-3xl p-4 sm:p-6 border border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-200"
            >
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="pt-2 sm:pt-0 sm:px-4">
                  <p className="text-3xl sm:text-4xl font-black text-slate-900">{stat.value}</p>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

