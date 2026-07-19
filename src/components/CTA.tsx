import React from 'react';
import { MessageSquare, ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function CTA() {
  const handleWhatsappClick = () => {
    const text = encodeURIComponent(
      'Halo NGODEX, saya ingin berkonsultasi mengenai pengembangan website atau sistem aplikasi saya. Bisakah saya berkonsultasi mengenai kebutuhan proyek saya?'
    );
    window.open(`https://wa.me/6282286301655?text=${text}`, '_blank');
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden text-slate-900 dark:text-white transition-colors duration-300">
      {/* Dynamic light sources */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
 
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-100 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 rounded-3xl p-8 sm:p-14 border border-slate-200 dark:border-blue-500/20 text-center relative overflow-hidden shadow-sm dark:shadow-2xl"
        >
          {/* Subtle details */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />
 
          <p className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase font-mono">
            Konsultasi Gratis 100%
          </p>
 
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold mt-4 leading-tight text-slate-900 dark:text-white">
            Butuh Solusi Pengembangan<br />Website & Aplikasi Profesional?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6 rounded-full" />
 
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-6 leading-relaxed">
            Jangan biarkan pengerjaan sistem bisnis atau proyek aplikasi Anda terkendala oleh bug, setup server, atau kerumitan arsitektur database. Serahkan urusan teknis ke tim NGODEX, nikmati hasil kode berkualitas tinggi, dan dapatkan penjelasan alur transparan!
          </p>
 
          {/* Core action button */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="btn-whatsapp-cta"
              onClick={handleWhatsappClick}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:brightness-110 text-white px-8 py-4 rounded-2xl font-bold text-base shadow-lg shadow-blue-500/15 active:scale-95 transition-all duration-150 cursor-pointer"
            >
              <MessageSquare size={18} />
              <span>Mulai Konsultasi Gratis</span>
            </button>
            
            <a
              href="#/paket"
              id="btn-paket-cta"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-850 border border-slate-200 dark:border-slate-800 text-slate-750 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-8 py-4 rounded-2xl font-semibold text-base active:scale-95 transition-all duration-150 shadow-sm dark:shadow-none"
            >
              <span>Cek Estimasi Biaya</span>
              <ArrowRight size={16} />
            </a>
          </div>
 
          {/* Small assurance footnote */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-slate-500">
            <div className="flex items-center space-x-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="currentColor" />
              ))}
            </div>
            <span>Dilengkapi Garansi Bug & Dukungan Revisi.</span>
          </div>
 
        </motion.div>
      </div>
    </section>
  );
}
