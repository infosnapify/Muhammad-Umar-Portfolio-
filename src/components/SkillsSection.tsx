import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, ExternalLink, Code2, Briefcase, GraduationCap, MapPin, Award } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { PERSONAL_INFO, SKILL_PROGRESS_BARS, SKILLS_DATA } from '../data/portfolioData';
import { SkillIcon } from './SkillIcon';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Languages', 'Frontend & Frameworks', 'Marketing & SEO'];

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter(skill => skill.category === selectedCategory);

  return (
    <section id="about" className="py-10 px-4 sm:px-6 lg:px-8 relative bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* ABOUT ME Container */}
        <div className="bg-white rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-md">
          
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-[#f43f5e]"></span>
            <span className="text-xs font-black text-[#f43f5e] uppercase tracking-widest">ABOUT ME</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Passionate Software Engineer & Problem Solver
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-4xl">
            {PERSONAL_INFO.detailedBio}
          </p>

          {/* 4 Info Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-xl bg-rose-50 text-[#f43f5e]">
                  <Briefcase className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">CURRENT ROLE</span>
              </div>
              <p className="font-extrabold text-slate-800 text-sm sm:text-base">{PERSONAL_INFO.currentRole}</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-xl bg-rose-50 text-[#f43f5e]">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">EDUCATION</span>
              </div>
              <p className="font-extrabold text-slate-800 text-sm sm:text-base">{PERSONAL_INFO.educationShort}</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-xl bg-rose-50 text-[#f43f5e]">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">LOCATION</span>
              </div>
              <p className="font-extrabold text-slate-800 text-sm sm:text-base">{PERSONAL_INFO.location}</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-xl bg-rose-50 text-[#f43f5e]">
                  <Award className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">EXPERIENCE</span>
              </div>
              <p className="font-extrabold text-slate-800 text-sm sm:text-base">{PERSONAL_INFO.experienceYears}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={PERSONAL_INFO.cvUrl}
              download="Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#f43f5e] hover:bg-rose-600 rounded-full shadow-sm transition-all duration-200 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-slate-700 bg-white hover:bg-slate-100 rounded-full border border-slate-300 transition-all duration-200 cursor-pointer"
            >
              <span className="text-base"><FaGithub /></span>
              <span>View GitHub</span>
            </a>
          </div>
        </div>

        {/* TECHNICAL EXPERTISE Section (Progress Bars) */}
        <div id="skills" className="bg-white rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-md">
          
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-[#f43f5e]"></span>
            <span className="text-xs font-black text-[#f43f5e] uppercase tracking-widest">SKILLS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-8">
            Technical Expertise
          </h2>

          {/* Progress Bars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {SKILL_PROGRESS_BARS.map((bar, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between text-xs font-extrabold text-slate-800">
                  <span>{bar.name}</span>
                  <span className="text-[#f43f5e]">{bar.percentage}%</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/60">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bar.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                    className="h-full bg-gradient-to-r from-[#f43f5e] to-rose-400 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Skill Pills Filter */}
          <div className="pt-6 border-t border-slate-100">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#f43f5e] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Skills Pills Display */}
            <motion.div layout className="flex flex-wrap gap-2.5">
              <AnimatePresence>
                {filteredSkills.map((skill) => (
                  <motion.div
                    key={skill.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex items-center gap-2 bg-slate-50 hover:bg-rose-50/50 px-4 py-2 rounded-full border border-slate-200 transition-colors group cursor-default"
                  >
                    <div className="text-[#f43f5e]">
                      <SkillIcon iconName={skill.iconName} className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-slate-800 group-hover:text-[#f43f5e] transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

