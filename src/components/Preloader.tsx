import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface PreloaderProps {
  onFinish?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 300);
          return 100;
        }
        // Increment smoothly
        const step = Math.floor(Math.random() * 12) + 8;
        return Math.min(100, prev + step);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
      className="fixed inset-0 z-[100] bg-slate-950 text-white flex flex-col items-center justify-center p-6 select-none"
    >
      {/* Brand Logo < Umar /> */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center text-4xl sm:text-6xl font-black tracking-tight mb-6"
      >
        <span className="text-[#f43f5e] font-mono">&lt;&nbsp;</span>
        <span className="text-white font-extrabold tracking-normal">
          {PERSONAL_INFO.shortName || 'Umar'}
        </span>
        <span className="text-[#f43f5e] font-mono">&nbsp;/&gt;</span>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-slate-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-8 text-center"
      >
        {PERSONAL_INFO.title}
      </motion.p>

      {/* Loading Progress Bar Container */}
      <div className="w-full max-w-xs sm:max-w-sm space-y-3">
        <div className="relative w-full h-2.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700/60 p-0.5">
          <motion.div
            className="h-full bg-gradient-to-r from-rose-500 via-pink-500 to-amber-400 rounded-full shadow-[0_0_12px_rgba(244,63,94,0.8)]"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut' }}
          />
        </div>

        <div className="flex items-center justify-between text-xs font-mono text-slate-400 font-bold px-1">
          <span>LOADING PORTFOLIO...</span>
          <span className="text-[#f43f5e]">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
};
