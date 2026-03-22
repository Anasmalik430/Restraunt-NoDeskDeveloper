'use client';

import React, { useRef, useEffect } from 'react';
import { siteData } from '@/data/siteData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const Featured = () => {
  const featuredRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animate each card when it enters the viewport
      gsap.utils.toArray('.featured-card').forEach((card) => {
        gsap.fromTo(card, 
          { y: 80, opacity: 0 }, 
          { 
            y: 0, 
            opacity: 1, 
            duration: 1.2, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );
      });
    }, featuredRef);

    return () => ctx.revert();
  }, []);

  // Get first 3 items from siteData menu
  const featuredDishes = siteData.menu.slice(0, 3);

  return (
    <section ref={featuredRef} className="py-32 bg-secondary/20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-32 space-y-6">
          <p className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">Chef's Selection</p>
          <h2 className="text-5xl md:text-8xl font-serif text-accent italic tracking-tighter">Iconic Masterpieces</h2>
        </div>

        <div className="space-y-40">
          {featuredDishes.map((dish, idx) => (
            <div key={idx} className={`featured-card flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-20 group`}>
              
              {/* Image Side */}
              <div className="w-full lg:w-3/5 relative">
                <div className="relative z-10 aspect-video overflow-hidden rounded-[3rem] shadow-2xl border border-black/5 bg-secondary">
                  <Image 
                    src={dish.image} 
                    width={1080}
                    height={960}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-2000 group-hover:scale-110"
                  />
                </div>
                {/* Visual Flair */}
                <div className="absolute -inset-10 bg-primary/5 rounded-4xl blur-3xl -z-10 group-hover:bg-primary/10 transition-colors duration-1000" />
                
                <div className={`absolute top-1/2 -translate-y-1/2 ${idx % 2 === 0 ? '-right-10' : '-left-10'} hidden lg:block z-20`}>
                   <span className="text-[10rem] font-serif italic text-accent/5 select-none tracking-tighter">0{idx + 1}</span>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-2/5 space-y-8">
                <div className="space-y-4">
                  <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">Spotlight {idx + 1}</span>
                  <h3 className="text-4xl md:text-6xl font-serif text-accent italic leading-tight group-hover:text-primary transition-colors duration-500">
                    {dish.name}
                  </h3>
                </div>
                <p className="text-accent/60 text-lg leading-relaxed font-medium">
                  {dish.description}
                </p>
                <div className="pt-6">
                  <button className="flex items-center gap-6 group/btn">
                     <span className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] group-hover/btn:text-primary">Culinary Story</span>
                     <div className="w-12 h-px bg-accent/20 transition-all duration-500 group-hover/btn:w-20 group-hover/btn:bg-primary" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
