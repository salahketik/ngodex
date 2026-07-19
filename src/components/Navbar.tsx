import React, { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import logoImg from '../assets/images/logo.jpg';

interface NavbarProps {
  activeRoute: string;
  onRoute: (route: string) => void;
}

export default function Navbar({ activeRoute, onRoute }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home', href: '#/' },
    { name: 'Layanan', id: 'layanan', href: '#/layanan' },
    { name: 'Inspirasi', id: 'portfolio', href: '#/portfolio' },
    { name: 'Pilihan Paket', id: 'paket', href: '#/paket' },
    { name: 'FAQ', id: 'faq', href: '#/faq' },
  ];

  const handleConsultClick = () => {
    const text = encodeURIComponent(
      'Halo NGODEX, saya ingin berkonsultasi mengenai pengembangan proyek website atau sistem aplikasi saya. Apakah ada waktu luang?'
    );
    window.open(`https://wa.me/6282286301655?text=${text}`, '_blank');
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md py-3 shadow-sm border-b border-slate-100'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#/" 
            onClick={(e) => {
              e.preventDefault();
              onRoute('home');
            }} 
            className="flex items-center space-x-2.5 group cursor-pointer"
          >
            <div className="overflow-hidden rounded-xl shadow-md shadow-blue-600/15 w-10 h-10 border border-blue-400/20 group-hover:scale-105 transition-transform duration-200">
              <img src={logoImg} alt="NGODEX Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <span className="font-poppins font-black text-xl tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  NGODEX
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => {
                const isActive = activeRoute === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onRoute(link.id);
                    }}
                    className={`font-sans text-sm font-semibold transition-all duration-200 cursor-pointer py-1 relative ${
                      isActive 
                        ? 'text-blue-600' 
                        : 'text-slate-600 hover:text-blue-600'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <motion.div 
                        layoutId="nav-underline" 
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" 
                        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            <div className="flex items-center space-x-4 border-l border-slate-200 pl-6">
              {/* CTA */}
              <button
                id="btn-konsultasi-navbar"
                onClick={handleConsultClick}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:brightness-110 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-blue-500/10 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <MessageSquare size={16} />
                <span>Konsultasi</span>
              </button>
            </div>
          </div>

          {/* Mobile Right Controls: Replaces Hamburger with instant CTA, keeping Bottom Nav as pure page manager */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              id="btn-konsultasi-mobile-header"
              onClick={handleConsultClick}
              className="flex items-center space-x-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:brightness-110 text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-md shadow-blue-500/10 active:scale-95 transition-all duration-150 cursor-pointer"
            >
              <MessageSquare size={13} />
              <span>Konsultasi</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
