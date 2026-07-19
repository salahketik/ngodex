import React, { useState } from 'react';
import { FAQ_DATA } from '../data';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<string | null>('faq-1');

  const handleToggle = (id: string) => {
    if (openIndex === id) {
      setOpenIndex(null);
    } else {
      setOpenIndex(id);
    }
  };

  return (
    <section id="faq" className="py-24 bg-white dark:bg-slate-900 text-slate-900 dark:text-white relative border-y border-slate-200 dark:border-slate-950 transition-colors duration-300">
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
 
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-widest text-blue-500 uppercase font-mono">
            Pertanyaan Umum (FAQ)
          </p>
          <h2 className="text-3xl font-poppins font-bold mt-2 text-slate-900 dark:text-white">
            Mungkin Ini yang Ingin Anda Tanyakan?
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>
 
        {/* Accordions List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openIndex === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-50 dark:bg-slate-950 border-blue-500/30 shadow-lg'
                    : 'bg-white dark:bg-slate-950/40 border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm'
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => handleToggle(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <HelpCircle size={18} className="text-blue-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base font-semibold text-slate-800 dark:text-white">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1.5 bg-slate-100 dark:bg-slate-900/80 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-blue-500 dark:text-blue-400 border-blue-500/20' : ''
                  }`}>
                    <ChevronDown size={16} />
                  </div>
                </button>
 
                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="p-6 pt-0 border-t border-slate-200 dark:border-slate-850 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50/50 dark:bg-slate-950/20">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
 
      </div>
    </section>
  );
}
