import React from 'react';
import { PACKAGES_DATA } from '../data';
import { Check, MessageSquare, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Paket() {
  const handleWhatsappPackage = (packageName: string) => {
    const text = encodeURIComponent(
      `Halo NGODEX, saya ingin berkonsultasi untuk pemesanan "${packageName}". Saya ingin mendiskusikan penawaran harga secara privat sesuai kebutuhan sistem proyek saya.`
    );
    window.open(`https://wa.me/6282286301655?text=${text}`, '_blank');
  };

  return (
    <section id="paket" className="py-24 bg-white dark:bg-slate-900 text-slate-900 dark:text-white relative transition-colors duration-300">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase font-mono">
            Investasi Terbaik untuk Proyek Anda
          </p>
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold mt-2 text-slate-900 dark:text-white">
            Pilihan Paket Layanan Terbaik
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-4">
            Pilih paket standar yang sesuai dengan skala kebutuhan Anda. Semua paket dikerjakan dengan standar performa tinggi, keamanan optimal, dan transfer knowledge penjelasan alur kode.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES_DATA.map((pkg) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: pkg.id === 'basic' ? 0.1 : pkg.id === 'standard' ? 0.2 : 0.3 }}
              className={`bg-white dark:bg-slate-950 rounded-3xl p-8 border flex flex-col justify-between relative group ${
                pkg.isPopular
                  ? 'border-blue-500/50 shadow-2xl shadow-blue-500/5'
                  : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50/50 dark:hover:bg-slate-950 transition-all duration-300 shadow-sm dark:shadow-none'
              }`}
            >
              {/* Popular Badge */}
              {pkg.isPopular && (
                <span className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] uppercase tracking-widest font-extrabold px-4 py-1.5 rounded-full shadow-lg flex items-center space-x-1">
                  <Sparkles size={10} />
                  <span>Terfavorit</span>
                </span>
              )}

              {/* Top Content */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2 font-poppins">{pkg.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed h-12">
                  {pkg.description}
                </p>

                {/* Pricing Info Replacement */}
                <div className="my-6 border-y border-slate-100 dark:border-slate-850 py-4 flex flex-col justify-center">
                  <span className="text-lg font-bold text-blue-650 dark:text-blue-400 font-poppins">
                    {pkg.id === 'basic' ? 'Biaya Sangat Terjangkau' : pkg.id === 'standard' ? 'Sistem Pembayaran Bertahap' : 'All-In-One Terlengkap'}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    {pkg.id === 'basic' 
                      ? 'Investasi efisien untuk startup, UKM, atau MVP dengan fitur esensial.' 
                      : pkg.id === 'standard' 
                        ? 'Pembayaran bertahap sesuai progres pembuatan sistem informasi.' 
                        : 'Solusi lengkap siap pakai dari awal hingga aplikasi online.'}
                  </span>
                </div>

                {/* Feature Bullet Points */}
                <ul className="space-y-3.5 mb-8">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-normal">
                      <div className="mt-0.5 p-0.5 bg-blue-500/10 text-blue-650 dark:text-blue-400 border border-blue-500/20 rounded-md">
                        <Check size={11} className="stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => handleWhatsappPackage(pkg.name)}
                className={`w-full py-3.5 rounded-2xl font-bold text-sm text-center flex items-center justify-center space-x-2 active:scale-95 transition-all duration-150 cursor-pointer ${
                  pkg.isPopular
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:shadow-lg hover:shadow-blue-500/20'
                    : 'bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-850 dark:hover:border-slate-700 dark:hover:text-white'
                }`}
              >
                <MessageSquare size={16} />
                <span>Diskusi Harga Privat</span>
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
