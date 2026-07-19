import React from 'react';
import { MessageSquare, Instagram, Github, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    {
      title: 'Layanan',
      items: [
        { name: 'CRUD Website', href: '#/layanan' },
        { name: 'Sistem Informasi', href: '#/layanan' },
        { name: 'Database & ERD', href: '#/layanan' },
        { name: 'Hosting & Deploy', href: '#/layanan' },
      ],
    },
    {
      title: 'Perusahaan',
      items: [
        { name: 'Tentang Kami', href: '#/' },
        { name: 'Portfolio Sukses', href: '#/portfolio' },
        { name: 'Pilihan Paket', href: '#/paket' },
      ],
    },
    {
      title: 'Bantuan',
      items: [
        { name: 'FAQ Umum', href: '#/faq' },
        { name: 'Konsultasi Gratis', href: 'https://wa.me/6282286301655' },
        { name: 'Garansi Bug', href: '#/faq' },
        { name: 'Panduan Sistem', href: '#/faq' },
      ],
    },
  ];

  return (
    <footer className="bg-slate-50 text-slate-800 border-t border-slate-200 pt-16 pb-24 md:pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          
          {/* Brand Info (takes 2 columns) */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <a href="#/" className="flex items-center space-x-2.5 group">
              <div className="overflow-hidden rounded-xl shadow-md shadow-blue-600/15 w-10 h-10 border border-blue-400/20 group-hover:scale-105 transition-transform duration-200">
                <img src="/src/assets/images/logo.jpg" alt="NGODEX Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex items-center space-x-1">
                <span className="font-poppins font-black text-xl tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  NGODEX
                </span>
              </div>
            </a>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm">
              Software studio dan pendampingan coding profesional. Kami membantu pengembangan website, sistem informasi, aplikasi desktop, API, revisi project, debugging, hingga konsultasi pemrograman dengan transfer knowledge optimal.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://wa.me/6282286301655"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white border border-slate-200 text-slate-500 hover:text-slate-950 hover:border-slate-300 rounded-xl transition-all active:scale-95 cursor-pointer shadow-sm"
                aria-label="WhatsApp Contact"
              >
                <MessageSquare size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white border border-slate-200 text-slate-500 hover:text-slate-950 hover:border-slate-300 rounded-xl transition-all active:scale-95 cursor-pointer shadow-sm"
                aria-label="Instagram Profile"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white border border-slate-200 text-slate-500 hover:text-slate-950 hover:border-slate-300 rounded-xl transition-all active:scale-95 cursor-pointer shadow-sm"
                aria-label="GitHub Page"
              >
                <Github size={16} />
              </a>
            </div>
          </div>
  
          {/* Links columns (takes 3 columns) */}
          {footerLinks.map((col) => (
            <div key={col.title} className="lg:col-span-1 flex flex-col space-y-4">
              <h4 className="text-xs font-bold font-mono uppercase text-slate-400 tracking-wider">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.items.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 transition-colors duration-150"
                    >
                      {link.href.startsWith('http') ? (
                        <span onClick={(e) => {
                          e.preventDefault();
                          window.open(link.href, '_blank');
                        }} className="cursor-pointer">
                          {link.name}
                        </span>
                      ) : (
                        <span>{link.name}</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
  
        </div>
  
        {/* Bottom copyright and scrolling back to top button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            &copy; {currentYear} NGODEX. Seluruh hak cipta dilindungi.
          </p>
          
          <button
            onClick={handleScrollTop}
            className="flex items-center space-x-1.5 text-xs text-slate-600 hover:text-slate-950 transition-colors border border-slate-200 bg-white px-3.5 py-1.5 rounded-xl active:scale-95 cursor-pointer shadow-sm"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp size={12} />
          </button>
        </div>
  
      </div>
    </footer>
  );
}
