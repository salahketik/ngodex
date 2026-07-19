import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { motion } from 'motion/react';

interface LazySectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  minHeight?: string;
}

export default function LazySection({ children, id, className = '', minHeight = '300px' }: LazySectionProps) {
  const [isIntersected, setIsIntersected] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsIntersected(true);
          observer.disconnect(); // Disconnect once loaded
        }
      },
      {
        rootMargin: '300px', // Trigger slightly before it rolls into view for seamless user experience
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id={id}
      className={className}
      style={{ minHeight: isIntersected ? 'auto' : minHeight }}
    >
      {isIntersected ? (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      ) : (
        /* Subtle loading skeleton or layout placeholder matching original background */
        <div className="w-full h-full flex items-center justify-center py-20 opacity-30">
          <div className="flex flex-col items-center space-y-3">
            <div className="w-12 h-12 rounded-full border-4 border-t-blue-500 border-blue-500/10 animate-spin" />
            <span className="text-xs font-mono text-slate-500">Memuat modul...</span>
          </div>
        </div>
      )}
    </div>
  );
}
