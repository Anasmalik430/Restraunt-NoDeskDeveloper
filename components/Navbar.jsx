"use client"
import React, { useState, useEffect } from 'react';
import { siteData } from '@/data/siteData';
import { Menu, X, Phone, ShoppingBag, Utensils } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Location', href: '#location' }
  ];

  return (
    <>
      {/* Top Slogan Bar - Subtle & Premium */}
      <div className={`sticky top-0 left-0 w-full z-101 bg-accent text-[8px] md:text-[9px] text-white/40 flex items-center justify-center gap-6 py-2 transition-all duration-700 font-['Outfit'] uppercase tracking-[0.4em] ${scrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
         <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
            <span>{siteData.brand.slogan}</span>
         </div>
         <div className="hidden md:flex items-center gap-6">
            <div className="w-px h-2 bg-white/10" />
            <div className="flex items-center gap-2">
               <Phone size={10} className="text-primary" />
               <span>{siteData.brand.contact.phone}</span>
            </div>
         </div>
      </div>

      <nav 
        className={`fixed left-1/2 -translate-x-1/2 z-100 w-full transition-all duration-700 px-6 ${
          scrolled 
            ? 'top-4 max-w-6xl' 
            : 'top-10 max-w-7xl'
        }`}
      >
        <div 
          className={`relative flex items-center justify-between px-8 md:px-12 py-5 transition-all duration-700 ${
            scrolled 
              ? 'bg-white/80 backdrop-blur-2xl rounded-full shadow-2xl border border-white/20' 
              : 'bg-transparent border-b border-white/5'
          }`}
        >
          {/* Logo Section */}
          <a href="#home" className="flex flex-col cursor-pointer group relative z-110">
            <span className={`text-2xl md:text-3xl font-serif font-black tracking-tighter leading-none transition-colors duration-500 ${scrolled ? 'text-accent' : 'text-accent'}`}>
              {siteData.brand.name}
            </span>
            <span className="text-[9px] tracking-[0.4em] text-primary uppercase font-black opacity-80 mt-1">
              {siteData.brand.subtitle}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative py-2"
              >
                <span className={`text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-500 font-['Outfit'] ${
                  scrolled ? 'text-accent/60 hover:text-accent' : 'text-accent/60 hover:text-accent'
                }`}>
                  {link.name}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full" />
              </a>
            ))}

            <div className="w-px h-6 bg-accent/5 mx-4" />

            <a 
              href="#contact" 
              className="flex items-center gap-3 px-8 py-3 bg-accent text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-primary hover:scale-105 hover:shadow-[0_20px_40px_-10px_rgba(184,134,11,0.3)] transition-all duration-500 group"
            >
              <Utensils size={14} className="group-hover:rotate-12 transition-transform" />
              Book Table
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-3 focus:outline-none relative z-110 group"
          >
            <div className={`w-8 h-[2px] bg-accent transition-all duration-500 ${isOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
            <div className={`w-8 h-[2px] bg-accent transition-all duration-500 ${isOpen ? 'opacity-0' : ''}`} />
            <div className={`w-8 h-[2px] bg-accent transition-all duration-500 ${isOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`md:hidden fixed inset-0 w-full h-screen bg-white transition-all duration-1000 flex flex-col items-center justify-center gap-12 z-105 ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
        >
          {/* Decorative Background for Mobile Menu */}
          <div className="absolute inset-0 bg-secondary/30 pointer-events-none overflow-hidden">
             <div className="absolute top-[20%] left-[10%] text-[20rem] font-serif font-black text-accent/3 rotate-12 select-none">GOLD</div>
             <div className="absolute bottom-[10%] right-[10%] text-[15rem] font-serif font-black text-accent/3 -rotate-12 select-none">KITCHEN</div>
          </div>


          <div className="relative z-10 flex flex-col items-center gap-8">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-3xl font-serif italic text-accent hover:text-primary transition-all duration-500 animate-in fade-in slide-in-from-bottom-10`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="relative z-10 w-full px-12">
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="w-full py-6 flex items-center justify-center gap-4 bg-accent text-white text-xs font-black uppercase tracking-[0.4em] rounded-2xl"
            >
              <ShoppingBag size={18} />
              Reservations
            </a>
          </div>
          
          <div className="relative z-10 flex flex-col items-center gap-4">
             <p className="text-[9px] uppercase tracking-[0.5em] text-accent/40 font-bold">{siteData.brand.name} • ROORKEE</p>
             <p className="text-[8px] uppercase tracking-[0.3em] text-primary font-black animate-pulse">Experience Gold</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;




