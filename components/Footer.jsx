'use client';

import React, { useRef, useEffect } from 'react';
import { siteData } from '@/data/siteData';
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".footer-col", 
        { y: 40, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.1, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          }
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-accent py-24 px-6 text-white border-t border-white/5 font-['Outfit']">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          
          {/* Brand Column */}
          <div className="footer-col space-y-8">
            <div className="flex flex-col">
              <span className="text-4xl font-serif font-bold tracking-[0.2em] leading-none mb-2 text-white">
                {siteData.brand.name}
              </span>
              <span className="text-[10px] tracking-[0.5em] text-primary uppercase font-black opacity-80">
                {siteData.brand.subtitle}
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs font-medium">
              Elevating the culinary heritage of Roorkee through golden standards and unrivaled hospitality.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer-col space-y-8">
            <h4 className="text-white font-bold uppercase tracking-[0.4em] text-[10px]">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Story', 'Menu', 'Location', 'Reviews'].map((item) => (
                <li key={item}>
                   <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-white/40 text-sm hover:text-primary transition-colors duration-300 font-medium cursor-pointer flex items-center gap-2 group"
                   >
                     <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300" />
                     {item}
                   </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="footer-col space-y-8">
            <h4 className="text-white font-bold uppercase tracking-[0.4em] text-[10px]">Reservations</h4>
            <div className="space-y-4 text-white/40 text-sm font-medium">
               <div className="flex items-center gap-3">
                  <Phone size={14} className="text-primary" />
                  <p>{siteData.brand.contact.phone}</p>
               </div>
               <div className="flex items-center gap-3">
                  <Mail size={14} className="text-primary" />
                  <p>{siteData.brand.contact.email}</p>
               </div>
               <div className="flex items-center gap-3">
                  <MapPin size={14} className="text-primary" />
                  <p className="italic font-serif">{siteData.brand.location.city}</p>
               </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="footer-col space-y-8">
            <h4 className="text-white font-bold uppercase tracking-[0.4em] text-[10px]">Connect</h4>
            <div className="flex gap-6">
               <Link href="#" className="p-3 bg-white/5 rounded-full hover:bg-primary hover:text-accent transition-all duration-500 group">
                  <Instagram size={18} className="group-hover:scale-110 transition-transform" />
               </Link>
               <Link href="#" className="p-3 bg-white/5 rounded-full hover:bg-primary hover:text-accent transition-all duration-500 group">
                  <Facebook size={18} className="group-hover:scale-110 transition-transform" />
               </Link>
               <Link href="#" className="p-3 bg-white/5 rounded-full hover:bg-primary hover:text-accent transition-all duration-500 group">
                  <Twitter size={18} className="group-hover:scale-110 transition-transform" />
               </Link>
               
            </div>
          </div>

        </div>

        <div className="footer-col pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-4">
              <p className="text-[10px] text-white/20 uppercase font-black tracking-[0.3em]">
                &copy; {new Date().getFullYear()} {siteData.brand.name}
              </p>
              <div className="w-1 h-1 bg-white/10 rounded-full" />
              <p className="text-[10px] text-white/20 uppercase font-black tracking-[0.3em]">
                All Rights Reserved
              </p>
           </div>
           
           <div className="flex items-center gap-10">
              <Link href="#" className="text-[10px] text-white/20 hover:text-white transition-colors uppercase font-black tracking-[0.3em]">Privacy</Link>
              <Link href="#" className="text-[10px] text-white/20 hover:text-white transition-colors uppercase font-black tracking-[0.3em]">Terms</Link>
              <Link href="https://nodeskdeveloper.in" target='_blank' className="text-[10px] text-white/20 hover:text-white transition-colors uppercase font-black tracking-[0.3em]">Build by NoDeskDev Team</Link>
              
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

