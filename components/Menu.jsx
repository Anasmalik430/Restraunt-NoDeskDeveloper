'use client';

import React, { useRef, useEffect } from 'react';
import { siteData } from '@/data/siteData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const Menu = () => {
  const menuRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".menu-card", 
        { y: 60, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: menuRef.current,
            start: "top 80%",
          }
        }
      );
    }, menuRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="menu" ref={menuRef} className="py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
         <div className="review-elem max-w-7xl mx-auto px-6 mb-24 text-center">
        <p className="text-primary font-bold tracking-[0.4em] uppercase mb-4 text-[10px]">Culinary Masterpieces</p>
        <h2 className="text-5xl md:text-7xl font-serif text-accent italic">Signature Offerings</h2>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {siteData.menu.map((dish) => (
            <div key={dish.id} className="menu-card group cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-[2.5rem] mb-8 bg-secondary border border-black/5 shadow-premium">
                <Image 
                  src={dish.image} 
                  width={1080}
                  height={960}
                  loading='lazy'
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full border border-black/5">
                   <span className="text-accent font-bold text-xs uppercase tracking-widest">{dish.price}</span>
                </div>
              </div>

              <div className="px-2 space-y-4">
                <div className="flex justify-between items-start">
                   <h3 className="text-2xl font-serif text-accent group-hover:text-primary transition-colors duration-300 leading-tight">
                      {dish.name}
                   </h3>
                </div>
                <p className="text-accent/60 text-sm leading-relaxed font-medium line-clamp-2">
                  {dish.description}
                </p>
                <div className="pt-4 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                   <span className="w-8 h-px bg-primary" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-primary">Discover Details</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
