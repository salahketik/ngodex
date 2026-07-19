import React from 'react';
import { ShieldCheck, Cpu, Code2, Users2, GraduationCap, LayoutTemplate } from 'lucide-react';
import { motion } from 'motion/react';
import { ADVANTAGES_DATA } from '../data';

export default function Keunggulan() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 size={22} className="text-blue-500" />;
      case 'LayoutTemplate':
        return <LayoutTemplate size={22} className="text-cyan-500" />;
      case 'ShieldCheck':
        return <ShieldCheck size={22} className="text-pink-500" />;
      case 'Cpu':
        return <Cpu size={22} className="text-indigo-500" />;
      case 'Users2':
        return <Users2 size={22} className="text-teal-500" />;
      case 'GraduationCap':
        return <GraduationCap size={22} className="text-emerald-500" />;
      default:
        return <Code2 size={22} className="text-blue-500" />;
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white relative border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6">
            <p className="text-xs font-bold tracking-widest text-blue-500 uppercase font-mono">
              Kenapa Memilih Kami?
            </p>
            <h2 className="text-2xl sm:text-3xl font-poppins font-bold mt-2 text-slate-900 dark:text-white">
              Layanan Profesional, Hasil Kode Program Berkualitas Tinggi
            </h2>
            <div className="w-16 h-1 bg-blue-600 mt-4 rounded-full" />
          </div>
          <div className="lg:col-span-6">
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              Kami tidak sekadar membuatkan aplikasi lalu selesai. Tim kami bantu setup dari nol, merancang database yang efisien, dan menjelaskan logika kodenya secara transparan supaya Anda benar-benar paham cara kerja sistem tersebut.
            </p>
          </div>
        </div>
 
        {/* Bento Grid layout of Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVANTAGES_DATA.map((adv, idx) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-slate-50 dark:bg-slate-900/40 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-850 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-900 transition-all duration-300 relative group shadow-sm dark:shadow-none"
            >
              <div className="p-3 bg-white dark:bg-slate-950 rounded-xl w-fit border border-slate-200 dark:border-slate-800 mb-5 group-hover:scale-105 transition-transform duration-200 shadow-sm dark:shadow-none">
                {getIcon(adv.iconName)}
              </div>
 
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-150">
                {adv.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
                {adv.description}
              </p>
            </motion.div>
          ))}
        </div>
 
      </div>
    </section>
  );
}
