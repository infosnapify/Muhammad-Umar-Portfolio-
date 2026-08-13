import React from 'react';
import { Code2, Cloud, Database, Layout, Smartphone, Zap } from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';

export const ServicesSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'fullstack':
        return <Code2 className="w-5 h-5 text-[#f43f5e]" />;
      case 'cloud':
        return <Cloud className="w-5 h-5 text-[#f43f5e]" />;
      case 'backend':
        return <Database className="w-5 h-5 text-[#f43f5e]" />;
      case 'uiux':
        return <Layout className="w-5 h-5 text-[#f43f5e]" />;
      case 'responsive':
        return <Smartphone className="w-5 h-5 text-[#f43f5e]" />;
      case 'performance':
        return <Zap className="w-5 h-5 text-[#f43f5e]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#f43f5e]" />;
    }
  };

  return (
    <section id="services" className="py-10 px-4 sm:px-6 lg:px-8 relative bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-md">
          
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-[#f43f5e]"></span>
            <span className="text-xs font-black text-[#f43f5e] uppercase tracking-widest">SERVICES</span>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              What I Bring to the Table
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">
              Transforming ideas into exceptional digital experiences
            </p>
          </div>

          {/* 6 Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="bg-slate-50 hover:bg-rose-50/30 p-6 rounded-3xl border border-slate-200/80 hover:border-rose-200 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {getIcon(service.id)}
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#f43f5e] transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200/60">
                  {service.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white text-slate-600 border border-slate-200/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
