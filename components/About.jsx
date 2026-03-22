'use client';

import React, { useRef, useEffect } from 'react';
import { siteData } from '@/data/siteData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Image Safe Parallax
      gsap.to(".about-img", {
        y: "0%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });

      // Story Stagger Reveal
      gsap.fromTo(".story-elem", 
        { y: 50, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.15, 
          duration: 1.2, 
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".story-container",
            start: "top 75%",
          }
        }
      );

      // Badge Pop
      gsap.fromTo(".legacy-badge", 
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "back.out(2)", scrollTrigger: {
            trigger: sectionRef.current, start: "top 60%"
        }}
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="story" ref={sectionRef} className="py-32 pb-12 bg-secondary/30 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        
        {/* Imaging Column */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
            <Image 
              src="/about-img.webp" 
              width={1080}
              height={960}
              loading="eager"
              alt="Heritage Chef"
              className="about-img w-full h-[600px] object-cover scale-[1.25] origin-top transition-transform duration-1000 group-hover:scale-[1.3]"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl z-0" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl z-0" />
          
          <div className="legacy-badge absolute -bottom-12 -left-4 md:-left-8 bg-white p-10 rounded-3xl shadow-2xl z-20 border border-black/5">
             <span className="text-4xl font-serif text-accent block mb-2 tracking-tighter">25+</span>
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Years of Legacy</span>
          </div>
        </div>

        {/* Story Column */}
        <div className="story-container w-full lg:w-1/2 space-y-10">
          <div className="story-elem space-y-6">
            <p className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">The Golden Story</p>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight text-accent italic">
               Our Heritage <br /> 
               <span className="font-normal font-sans not-italic tracking-tighter">Culinary Secrets</span>
            </h2>
          </div>

          <div className="story-elem space-y-8 text-accent/70 text-lg leading-relaxed font-medium">
            <p className="max-w-xl">
               Since 1998, Aladdin has been more than a restraunt. It's a sanctuary where heritage spices meet modern techniques to create "Golden Plate" experiences.
            </p>
            <p className="max-w-lg italic font-serif">
               "{siteData.brand.chef.bio}"
            </p>
          </div>

          <div className="story-elem flex items-center gap-6 pt-6">
             <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                <Image 
                   src="/chef-avatar.webp" 
                   width={1080}
                   height={960}
                   alt="Chef Kabir" 
                   className="w-full h-full object-cover grayscale"
                />
             </div>
             <div>
                <h4 className="text-accent font-bold text-sm tracking-widest uppercase">{siteData.brand.chef.name}</h4>
                <p className="text-primary text-[10px] uppercase font-black tracking-widest">{siteData.brand.chef.role}</p>
             </div>
          </div>

          <div className="story-elem pt-10">
             <button className="flex items-center gap-4 text-accent text-[10px] font-bold uppercase tracking-[0.3em] group">
                Discover More 
                <span className="w-12 h-px bg-primary transition-all duration-300 group-hover:w-20" />
             </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
