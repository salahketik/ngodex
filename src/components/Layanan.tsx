import React from 'react';
import { Database, LayoutGrid, Palette, Server, Bug, Globe } from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { motion } from 'motion/react';

export default function Layanan() {
  // Helper to map icon names from data to Lucide Icons
  const getIcon = (name: string) => {
    switch (name) {
      case 'Database':
        return <Database className="w-6 h-6 text-blue-500" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-6 h-6 text-cyan-500" />;
      case 'Figma':
        return <Palette className="w-6 h-6 text-pink-500" />;
      case 'Server':
        return <Server className="w-6 h-6 text-indigo-500" />;
      case 'BugPlay':
        return <Bug className="w-6 h-6 text-red-500" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-emerald-500" />;
      default:
        return <Database className="w-6 h-6 text-blue-500" />;
    }
  };

  return (
    <section id="layanan" className="py-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-blue-500 uppercase font-mono"
          >
            Layanan Terbaik Kami
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-poppins font-bold mt-2 text-slate-900 dark:text-white"
          >
            Solusi Menyeluruh untuk Pengembangan Website & Aplikasi
          </motion.h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-sm mt-4"
          >
            Pilihlah layanan yang sesuai dengan kebutuhan kustomisasi proyek Anda. Kami mengutamakan keaslian kode, kebersihan struktur, dan performa yang optimal.
          </motion.p>
        </div>
 
        {/* 3x2 Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(37,99,235,0.08)] transition-all duration-300 relative group overflow-hidden shadow-sm dark:shadow-none"
            >
              {/* Highlight Background Glow */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/5 rounded-full blur-xl group-hover:bg-blue-500/10 transition-colors" />
 
              {/* Service Icon */}
              <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl w-fit border border-slate-200 dark:border-slate-800/80 mb-6 group-hover:scale-110 transition-transform duration-300">
                {getIcon(service.iconName)}
              </div>
 
              {/* Service Title */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                {service.title}
              </h3>
 
              {/* Service Description */}
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 leading-relaxed">
                {service.description}
              </p>
 
              {/* Tags/Keywords */}
              <div className="flex flex-wrap gap-2 mt-6">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 text-slate-600 dark:text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
 
      </div>
    </section>
  );
}
