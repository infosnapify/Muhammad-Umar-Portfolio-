import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceEducation } from './components/ExperienceEducation';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CursorTrail } from './components/CursorTrail';
import { Preloader } from './components/Preloader';
import { PERSONAL_INFO } from './data/portfolioData';
import { Check } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-rose-500 selection:text-white antialiased overflow-x-hidden relative">
      {/* Website Preloader Screen */}
      <AnimatePresence>
        {loading && <Preloader onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Interactive Floating Trail Animation on Cursor Move / Mobile Touch */}
      <CursorTrail />

      {/* Navigation Header */}
      <Navbar onCopyEmail={handleCopyEmail} />

      {/* Main Content Sections */}
      <main className="space-y-4 sm:space-y-6">
        <HeroSection onCopyEmail={handleCopyEmail} />
        <SkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <ExperienceEducation />
        <ContactSection onCopyEmail={handleCopyEmail} copied={copied} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Toast Notification when Email Copied */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-slate-700"
          >
            <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-emerald-400">Email Copied to Clipboard!</p>
              <p className="text-[10px] text-slate-300">{PERSONAL_INFO.email}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


