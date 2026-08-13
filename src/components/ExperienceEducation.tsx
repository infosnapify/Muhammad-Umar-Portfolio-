import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Calendar, Building2 } from 'lucide-react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../data/portfolioData';

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="experience" className="py-10 px-4 sm:px-6 lg:px-8 relative bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* EXPERIENCE Container */}
        <div className="bg-white rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-md">
          
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-[#f43f5e]"></span>
            <span className="text-xs font-black text-[#f43f5e] uppercase tracking-widest">EXPERIENCE</span>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Professional Journey
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">
              Building digital solutions that make a difference
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative pl-6 sm:pl-8 border-l-2 border-rose-200 space-y-8">
            {EXPERIENCE_DATA.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative bg-slate-50 p-6 rounded-3xl border border-slate-200/80 hover:border-rose-200 transition-all group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-5 h-5 rounded-full bg-white border-4 border-[#f43f5e] shadow-xs group-hover:scale-125 transition-transform" />

                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#f43f5e] transition-colors">
                      {item.role}
                    </h3>
                    <span className="text-xs font-bold text-[#f43f5e]">@ {item.company}</span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-slate-600 text-xs font-bold rounded-full border border-slate-200 shadow-2xs">
                    <Calendar className="w-3.5 h-3.5 text-[#f43f5e]" />
                    {item.period}
                  </span>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {item.skillsUsed.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-[11px] font-bold rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* EDUCATION Container */}
        <div className="bg-white rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-md">
          
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-[#f43f5e]"></span>
            <span className="text-xs font-black text-[#f43f5e] uppercase tracking-widest">EDUCATION</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-8">
            Academic Background
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION_DATA.map((edu) => (
              <div
                key={edu.id}
                className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 hover:border-rose-200 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white p-1.5 border border-slate-200 shadow-2xs shrink-0 flex items-center justify-center overflow-hidden">
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      className="w-full h-full object-contain rounded-xl"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>

                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">
                      {edu.degree}
                    </h3>
                    <p className="text-xs font-bold text-[#f43f5e] flex items-center gap-1 mt-0.5">
                      <Building2 className="w-3 h-3" />
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-slate-600 text-xs font-bold rounded-full border border-slate-200">
                    <Calendar className="w-3.5 h-3.5 text-[#f43f5e]" />
                    {edu.period}
                  </span>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

