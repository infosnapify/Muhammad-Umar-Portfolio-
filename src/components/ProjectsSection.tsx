import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, ArrowUpRight, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'E-Commerce', 'Web App', 'SEO & Analytics', 'Desktop App'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(project => {
        if (selectedCategory === 'E-Commerce') return project.type.includes('E-Commerce');
        if (selectedCategory === 'Web App') return project.type.includes('Web') || project.type.includes('SaaS');
        if (selectedCategory === 'SEO & Analytics') return project.type.includes('SEO') || project.type.includes('Analytics');
        if (selectedCategory === 'Desktop App') return project.type.includes('Desktop');
        return true;
      });

  return (
    <section id="projects" className="py-10 px-4 sm:px-6 lg:px-8 relative bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-md">
          
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-[#f43f5e]"></span>
            <span className="text-xs font-black text-[#f43f5e] uppercase tracking-widest">PORTFOLIO</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Recent Projects
              </h2>
              <p className="text-slate-500 text-sm sm:text-base mt-1">
                A showcase of my work and contributions
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#f43f5e] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group bg-slate-50 rounded-3xl border border-slate-200/80 hover:border-rose-200 hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Project Banner Image Header */}
                {project.bannerImage && (
                  <div className="relative w-full h-52 sm:h-60 bg-slate-200 overflow-hidden border-b border-slate-200/80">
                    <img
                      src={project.bannerImage}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Floating Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[#f43f5e] text-[10px] font-black uppercase tracking-wider rounded-full shadow-2xs border border-rose-100">
                        {project.type}
                      </span>
                    </div>

                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <span className="px-3 py-1 bg-[#f43f5e] text-white text-[10px] font-black uppercase tracking-wider rounded-full shadow-xs">
                          FEATURED
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* Card Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#f43f5e] transition-colors mb-2">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                      {project.description}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white border border-slate-200 text-slate-700 font-bold text-[11px] rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between mt-auto">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-bold text-slate-600 hover:text-[#f43f5e] flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Key Highlights</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#f43f5e] hover:bg-rose-600 text-white text-xs font-bold rounded-full shadow-xs transition-colors cursor-pointer"
                      >
                        <span>Visit Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="px-3 py-1 bg-slate-200 text-slate-600 text-xs font-bold rounded-full">
                        Desktop App
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-[2.5rem] max-w-2xl w-full border border-slate-200 shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-30 p-2 rounded-full bg-white/90 hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer border border-slate-200 shadow-xs"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Banner */}
              {selectedProject.bannerImage && (
                <div className="relative w-full h-56 sm:h-64 bg-slate-100 overflow-hidden shrink-0 border-b border-slate-200">
                  <img
                    src={selectedProject.bannerImage}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Modal Content */}
              <div className="p-6 sm:p-8 overflow-y-auto">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-[#f43f5e] text-xs font-bold mb-3 border border-rose-200">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{selectedProject.type}</span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  {selectedProject.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {selectedProject.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-extrabold text-[#f43f5e] uppercase tracking-wider">Highlights & Technical Accomplishments</h4>
                  {selectedProject.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-full border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#f43f5e] hover:bg-rose-600 text-white font-bold text-xs rounded-full shadow-xs transition-colors cursor-pointer"
                    >
                      <span>Launch Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-full transition-colors cursor-pointer border border-slate-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

