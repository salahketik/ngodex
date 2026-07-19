import React, { useState } from 'react';
import { Cpu, Layout, Server, Database, Settings } from 'lucide-react';
import { motion } from 'motion/react';
import { TECH_STACK_DATA } from '../data';

interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tool';
  color: string;
  badgeBg: string;
  borderColor: string;
}

export default function Teknologi() {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'database' | 'tool'>('all');

  const techStack: TechItem[] = TECH_STACK_DATA;

  const filteredTech = filter === 'all' ? techStack : techStack.filter(t => t.category === filter);

  return (
    <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-850 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="text-xs font-bold tracking-widest text-cyan-500 uppercase font-mono">
              Ecosystem Teknologi
            </p>
            <h2 className="text-3xl font-poppins font-bold text-slate-900 dark:text-white mt-1">
              Teknologi & Tools yang Didukung
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 max-w-xl">
              Kami mendampingi pengerjaan dengan stack teknologi terbaru sesuai kebutuhan kurikulum kampus dan panduan praktis skripsi Anda.
            </p>
          </div>
 
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0 bg-slate-100 dark:bg-slate-950 p-1 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-inner">
            {[
              { id: 'all', label: 'Semua', icon: <Cpu size={12} /> },
              { id: 'frontend', label: 'Frontend', icon: <Layout size={12} /> },
              { id: 'backend', label: 'Backend', icon: <Server size={12} /> },
              { id: 'database', label: 'Database', icon: <Database size={12} /> },
              { id: 'tool', label: 'Tools', icon: <Settings size={12} /> },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all duration-150 ${
                  filter === cat.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-600/10'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
 
        {/* Tech Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredTech.map((tech, idx) => (
            <motion.div
              layout
              key={tech.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: idx * 0.02 }}
              className={`group bg-slate-50 dark:bg-slate-950/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-950 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex items-center space-x-3 ${tech.borderColor}`}
            >
              <div className={`p-2.5 rounded-xl ${tech.badgeBg} ${tech.color} font-bold font-mono text-xs group-hover:scale-105 transition-transform duration-200`}>
                &lt;/&gt;
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {tech.name}
                </p>
                <span className="text-[9px] font-mono tracking-wider uppercase text-slate-400 dark:text-slate-500">
                  {tech.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
 
        {/* Dynamic running slide line for decoration */}
        <div className="mt-14 overflow-hidden py-4 border-t border-dashed border-slate-200 dark:border-slate-800">
          <p className="text-center text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest animate-pulse">
            ✦ Clean Code ✦ MVC Architecture ✦ Normalisasi Database ✦ API Integration ✦ Deployment ✦
          </p>
        </div>

      </div>
    </section>
  );
}
