import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Send, Check, Copy, MessageSquare, ExternalLink } from 'lucide-react';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onCopyEmail: () => void;
  copied: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onCopyEmail, copied }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUri = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUri;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-10 px-4 sm:px-6 lg:px-8 relative bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-md">
          
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-[#f43f5e]"></span>
            <span className="text-xs font-black text-[#f43f5e] uppercase tracking-widest">GET IN TOUCH</span>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Let's Work Together
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-1">
              Have a project in mind? Reach out via WhatsApp or email
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: WhatsApp, Email & Social Badges */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* WhatsApp Card */}
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-5 rounded-3xl bg-emerald-50/80 border border-emerald-200 hover:border-emerald-400 hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center font-bold text-lg shadow-2xs">
                      <FaWhatsapp />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors">
                        WhatsApp Instant Chat
                      </h3>
                      <p className="text-xs font-bold text-emerald-600">
                        {PERSONAL_INFO.whatsapp}
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <p className="text-xs text-slate-600 mt-1 font-normal">
                  Direct message for rapid project quotes and instant replies.
                </p>
              </a>

              {/* Copy Email Card */}
              <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-2xl bg-rose-50 text-[#f43f5e] border border-rose-100 flex items-center justify-center font-bold shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Email Address</p>
                    <p className="text-xs sm:text-sm font-extrabold text-slate-800 truncate">{PERSONAL_INFO.email}</p>
                  </div>
                </div>

                <button
                  onClick={onCopyEmail}
                  className="px-3.5 py-2 rounded-full bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 transition-all text-xs font-bold flex items-center gap-1.5 shrink-0 cursor-pointer shadow-2xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-rose-50 text-[#f43f5e] border border-rose-100 flex items-center justify-center font-bold shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Location</p>
                  <p className="text-xs sm:text-sm font-extrabold text-slate-800">{PERSONAL_INFO.location}</p>
                </div>
              </div>

              {/* Social Channels Row */}
              <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col gap-3">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Connect Online</p>
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-full bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 transition-all text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                  >
                    <span className="text-sm text-[#0a66c2]"><FaLinkedin /></span>
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-full bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 transition-all text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                  >
                    <span className="text-sm text-slate-900"><FaGithub /></span>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80">
              <h3 className="text-lg font-extrabold text-slate-900 mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-500 mb-6 font-normal">
                Fill out the form below to send an email inquiry directly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 bg-white text-slate-900 rounded-2xl border border-slate-200 focus:border-[#f43f5e] focus:ring-1 focus:ring-[#f43f5e] outline-none text-xs font-semibold placeholder:text-slate-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 bg-white text-slate-900 rounded-2xl border border-slate-200 focus:border-[#f43f5e] focus:ring-1 focus:ring-[#f43f5e] outline-none text-xs font-semibold placeholder:text-slate-400 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Web Development Project"
                    className="w-full px-4 py-3 bg-white text-slate-900 rounded-2xl border border-slate-200 focus:border-[#f43f5e] focus:ring-1 focus:ring-[#f43f5e] outline-none text-xs font-semibold placeholder:text-slate-400 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Project Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, requirements, or timeline..."
                    className="w-full px-4 py-3 bg-white text-slate-900 rounded-2xl border border-slate-200 focus:border-[#f43f5e] focus:ring-1 focus:ring-[#f43f5e] outline-none text-xs font-semibold placeholder:text-slate-400 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#f43f5e] hover:bg-rose-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>

                {formSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-2xl text-xs font-bold text-center"
                  >
                    Opening your default email app to send the message!
                  </motion.div>
                )}
              </form>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

