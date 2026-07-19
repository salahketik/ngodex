import React, { useState } from 'react';
import { PORTFOLIO_DATA, PORTFOLIO_CATEGORIES_DATA } from '../data';
import { PortfolioItem } from '../types';
import { Search, Filter, ExternalLink, Calendar, Code, CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'web' | 'crud' | 'sistem-informasi'>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const filteredProjects = selectedCategory === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(p => p.category === selectedCategory);

  const handleWhatsappProject = (project: PortfolioItem) => {
    const text = encodeURIComponent(
      `Halo NGODEX, saya tertarik dengan contoh proyek "${project.title}" (${project.technologies.join(', ')}). Saya ingin berdiskusi untuk membuat sistem yang serupa untuk kebutuhan saya.`
    );
    window.open(`https://wa.me/6282286301655?text=${text}`, '_blank');
  };

  return (
    <section id="portfolio" className="py-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase font-mono">
            Inspirasi Solusi
          </p>
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold mt-2 text-slate-900 dark:text-white">
            Model Sistem & Aplikasi yang Bisa Kami Bangun
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-4">
            Berikut adalah rancangan fungsionalitas dan model arsitektur sistem yang siap kami kembangkan secara kustom sesuai kebutuhan bisnis atau proyek impian Anda.
          </p>
        </div>
 
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {PORTFOLIO_CATEGORIES_DATA.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shadow-sm ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-850'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
 
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-slate-900/40 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 group hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xl transition-all duration-300 flex flex-col shadow-sm dark:shadow-none"
              >
                {/* Image Section */}
                <div className="relative aspect-video overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  {/* Overlay for quick action */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                </div>
 
                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-[9px] font-mono font-semibold bg-blue-950/45 dark:bg-blue-950/40 border border-blue-200/50 dark:border-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-md">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-[9px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-md">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
 
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
 
                  {/* Card Action */}
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-850 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center space-x-1 transition-colors cursor-pointer"
                    >
                      <span>Lihat Detail</span>
                      <ExternalLink size={12} />
                    </button>
 
                    <button
                      onClick={() => handleWhatsappProject(project)}
                      className="bg-blue-600/10 hover:bg-blue-600 border border-blue-500/20 hover:border-transparent text-blue-600 dark:text-blue-400 hover:text-white px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer"
                    >
                      Konsultasi Ide Ini
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
 
        {/* Modal for detail view */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative"
              >
                {/* Header with Title and Category, and Close Button */}
                <div className="p-5 sm:p-6 pb-0 flex justify-between items-start">
                  <div className="flex-1 pr-6">
                    <span className="text-[10px] font-mono font-bold bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-md uppercase tracking-wider">
                      {selectedProject.category.replace('-', ' ')}
                    </span>
                    <h3 className="text-lg sm:text-xl font-poppins font-bold text-slate-900 dark:text-white mt-2">
                      {selectedProject.title}
                    </h3>
                  </div>
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-750 text-slate-500 dark:text-slate-400 rounded-lg transition-all active:scale-95 cursor-pointer flex-shrink-0"
                  >
                    <X size={16} />
                  </button>
                </div>
 
                {/* Compact Image */}
                <div className="px-5 sm:px-6 pt-4">
                  <div className="relative h-36 sm:h-44 rounded-2xl overflow-hidden bg-slate-950 border border-slate-150 dark:border-slate-850">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
 
                {/* Info Content */}
                <div className="p-5 sm:p-6 pt-2 space-y-4">
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {selectedProject.description}
                  </p>
 
                  {/* Bullet points of features */}
                  <div className="space-y-1.5">
                    <h4 className="text-[10px] font-bold font-mono uppercase text-slate-400 dark:text-slate-500 tracking-wider">Fitur Utama Sistem:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {selectedProject.features.map((feat) => (
                        <div key={feat} className="flex items-start space-x-1.5 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 size={13} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
 
                  {/* Tech stack used */}
                  <div className="space-y-1.5">
                    <h4 className="text-[10px] font-bold font-mono uppercase text-slate-400 dark:text-slate-500 tracking-wider">Teknologi & Library:</h4>
                    <div className="flex flex-wrap gap-1">
                      {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="text-[10px] font-mono bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
 
                  {/* Actions inside modal */}
                  <div className="pt-4 border-t border-slate-150 dark:border-slate-800 flex items-center justify-end space-x-2">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700 transition-all cursor-pointer"
                    >
                      Tutup
                    </button>
                    <button
                      onClick={() => handleWhatsappProject(selectedProject)}
                      className="px-5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:brightness-110 text-white transition-all shadow-md shadow-blue-500/10 cursor-pointer"
                    >
                      Konsultasi Ide Ini
                    </button>
                  </div>
 
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
 
      </div>
    </section>
  );
}
