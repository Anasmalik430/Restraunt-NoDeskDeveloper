'use client';

import React, { useRef, useEffect } from 'react';
import { siteData } from '@/data/siteData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Multi-speed vertical parallax based on index (even vs odd)
      gsap.utils.toArray('.gallery-item').forEach((item, i) => {
        const speed = i % 2 === 0 ? 50 : -50;
        gsap.to(item, {
          y: speed,
          ease: "none",
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      });
    }, galleryRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={galleryRef} className="py-32 pb-6 bg-white px-6">
      <div className="max-w-7xl mx-auto">
       <div className="review-elem max-w-7xl mx-auto px-6 mb-24 text-center">
        <p className="text-primary font-bold tracking-[0.4em] uppercase mb-4 text-[10px]">The Visual Soul</p>
        <h2 className="text-5xl md:text-7xl font-serif text-accent italic">Ambiance Gallery</h2>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-3 gap-8 h-auto lg:h-[1200px]">

          {siteData.gallery.map((img, idx) => (
            <div key={idx} className={`gallery-item relative overflow-hidden rounded-[2.5rem] group ${img.size} shadow-premium border border-black/5`}>
              <Image 
                src={img.url} 
                width={1080}
                height={960}
                alt={img.title}
                className="w-full h-full object-cover scale-[1.1] transition-transform duration-1000 group-hover:scale-[1.2]"
              />
              {/* Minimal Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12">
                 <span className="text-primary font-bold tracking-[0.4em] uppercase text-[9px] mb-2">Exhibit</span>
                 <h4 className="text-white text-3xl font-serif italic">{img.title}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 md:mt-40 flex justify-center">
           <button className="flex flex-col items-center gap-4 group">
              <span className="text-accent/40 text-[10px] font-bold uppercase tracking-[0.5em] group-hover:text-primary transition-colors">Follow Our Journey</span>
              <div className="w-px h-12 bg-accent/10 group-hover:h-20 group-hover:bg-primary transition-all duration-500" />
           </button>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
