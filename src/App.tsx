import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Layanan from './components/Layanan';
import Teknologi from './components/Teknologi';
import Portfolio from './components/Portfolio';
import Keunggulan from './components/Keunggulan';
import Paket from './components/Paket';
import FAQAccordion from './components/FAQAccordion';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { Home, Layers, FolderGit, Sparkles, HelpCircle, Mail, Phone, MessageSquare, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const darkMode = false;

  // Simple state router powered by URL hash
  const [route, setRoute] = useState<string>(() => {
    const hash = window.location.hash;
    if (hash === '#/layanan') return 'layanan';
    if (hash === '#/portfolio') return 'portfolio';
    if (hash === '#/paket') return 'paket';
    if (hash === '#/faq') return 'faq';
    return 'home';
  });

  useEffect(() => {
    localStorage.setItem('theme', 'light');
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/layanan') setRoute('layanan');
      else if (hash === '#/portfolio') setRoute('portfolio');
      else if (hash === '#/paket') setRoute('paket');
      else if (hash === '#/faq') setRoute('faq');
      else {
        setRoute('home');
        // fallback hash
        if (hash !== '#/' && hash !== '' && hash !== '#home') {
          window.location.hash = '#/';
        }
      }
      // Scroll to top comfortably on route change
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const changeRoute = (newRoute: string) => {
    if (newRoute === 'home') window.location.hash = '#/';
    else window.location.hash = `#/${newRoute}`;
  };

  // Render Page with transition
  const renderPage = () => {
    switch (route) {
      case 'layanan':
        return (
          <motion.div
            key="layanan-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="pb-20 md:pb-0"
          >
            <Layanan />
            <Keunggulan />
          </motion.div>
        );
      case 'portfolio':
        return (
          <motion.div
            key="portfolio-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="pb-20 md:pb-0"
          >
            <Portfolio />
            <CTA />
          </motion.div>
        );
      case 'paket':
        return (
          <motion.div
            key="paket-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="pb-20 md:pb-0"
          >
            <Paket />
            <CTA />
          </motion.div>
        );
      case 'faq':
        return (
          <motion.div
            key="faq-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="pb-20 md:pb-0"
          >
            <FAQAccordion />
            
            {/* Elegant Direct Contact Section */}
            <section className="py-16 bg-slate-50 border-t border-slate-200">
              <div className="max-w-md mx-auto px-6">
                <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xl shadow-slate-100 text-center flex flex-col items-center">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-600 block mb-2">Hubungi Kami</span>
                  <h3 className="text-2xl font-bold text-slate-900 font-poppins mb-3">Siap Memulai Proyek Anda?</h3>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    Konsultasikan langsung ide proyek, revisi program, atau bimbingan tugas pemrograman Anda secara gratis bersama tim NGODEX.
                  </p>
                  
                  <button 
                    onClick={() => {
                      const text = encodeURIComponent('Halo NGODEX, saya ingin berkonsultasi mengenai proyek pemrograman saya.');
                      window.open(`https://wa.me/6282286301655?text=${text}`, '_blank');
                    }}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:brightness-110 text-white font-bold rounded-2xl text-base flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/15 active:scale-95 transition-all duration-150 cursor-pointer"
                  >
                    <MessageSquare size={18} />
                    <span>Konsultasi via WhatsApp</span>
                  </button>
                </div>
              </div>
            </section>
          </motion.div>
        );
      default:
        return (
          <motion.div
            key="home-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="pb-20 md:pb-0"
          >
            <Hero />
            <Teknologi />
            <CTA />
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-slate-50 text-slate-800">
      {/* Dynamic Nav Header */}
      <Navbar activeRoute={route} onRoute={changeRoute} />

      {/* Main Page Area */}
      <main className="overflow-hidden">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>

      {/* Modern, Highly Comfortable Mobile Navigation Bar (Bottom Dock) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/85 backdrop-blur-xl border-t border-slate-100 shadow-[0_-8px_30px_rgb(0,0,0,0.04)] px-4 py-2 flex items-center justify-around">
        {[
          { id: 'home', label: 'Beranda', icon: <Home size={20} /> },
          { id: 'layanan', label: 'Layanan', icon: <Layers size={20} /> },
          { id: 'portfolio', label: 'Inspirasi', icon: <FolderGit size={20} /> },
          { id: 'paket', label: 'Paket', icon: <Sparkles size={20} /> },
          { id: 'faq', label: 'FAQ', icon: <HelpCircle size={20} /> },
        ].map((item) => {
          const isActive = route === item.id;
          return (
            <button
              key={item.id}
              onClick={() => changeRoute(item.id)}
              className="flex flex-col items-center justify-center flex-1 py-1 relative cursor-pointer active:scale-90 transition-transform duration-100"
            >
              <div className={`p-1.5 rounded-xl transition-all duration-350 ${
                isActive 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-slate-400 hover:text-slate-600'
              }`}>
                {item.icon}
              </div>
              <span className={`text-[10px] mt-0.5 transition-colors font-medium ${
                isActive ? 'text-blue-600 font-bold' : 'text-slate-500'
              }`}>
                {item.label}
              </span>
              {isActive && (
                <motion.div 
                  layoutId="bottom-indicator" 
                  className="absolute -top-2 w-1.5 h-1.5 bg-blue-600 rounded-full" 
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Footer & Contacts */}
      <Footer />
    </div>
  );
}
