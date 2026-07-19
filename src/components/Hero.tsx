import React, { useState, useEffect } from 'react';
import { MessageSquare, FolderGit, Laptop } from 'lucide-react';
import { motion } from 'motion/react';
const heroBg = '/src/assets/images/background.jpg';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsappClick = () => {
    const text = encodeURIComponent(
      'Halo NGODEX, saya tertarik dengan layanan pengembangan website dan konsultasi pemrograman. Saya ingin konsultasi proyek saya.'
    );
    window.open(`https://wa.me/6282286301655?text=${text}`, '_blank');
  };

  return (
    <section
      id="home"
      className="relative pt-36 pb-24 overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300"
    >
      {/* Parallax Background Illustration Art */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <div 
          className="absolute inset-0 w-full h-[120%] -top-[10%] transition-transform duration-75 ease-out"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
          }}
        >
          <img 
            src={heroBg} 
            alt="Hero Background Illustration"
            className="w-full h-full object-cover object-center opacity-[0.12] dark:opacity-[0.25] dark:brightness-90 filter blur-[1px]"
            referrerPolicy="no-referrer"
          />
        </div>
        {/* Modern elegant overlay masks to blend the illustration cleanly */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/20 via-slate-50/90 to-slate-50 dark:from-slate-950/20 dark:via-slate-950/90 dark:to-slate-950" />
      </div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none z-0" />
 
      {/* Code Grid Lines Pattern */}
      <div className="absolute inset-0 hero-grid-pattern pointer-events-none z-0" />
 
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <div className="flex flex-col items-center space-y-8">
          
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center bg-blue-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-400 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide"
          >
            <span>NGODEX — Jasa Pemrograman &amp; Bimbingan Tugas</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white"
          >
            Bangun Website & Aplikasi{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Tanpa Ribet
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed mx-auto"
          >
            Kami membantu pengembangan website, sistem informasi, aplikasi desktop, API, revisi project, debugging, hingga bimbingan penjelasan alur kode program.
          </motion.p>
 
          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full max-w-md sm:max-w-none"
          >
            <button
              id="btn-consult-hero"
              onClick={handleWhatsappClick}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:brightness-110 text-white px-8 py-4 rounded-2xl text-base font-bold shadow-lg shadow-blue-500/10 active:scale-95 transition-all duration-150 cursor-pointer"
            >
              <MessageSquare size={18} />
              <span>Mulai Konsultasi</span>
            </button>
            
            <a
              href="#/portfolio"
              id="btn-portfolio-hero"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-8 py-4 rounded-2xl text-base font-semibold active:scale-95 transition-all duration-150 shadow-sm dark:shadow-none"
            >
              <FolderGit size={18} />
              <span>Lihat Portofolio</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
