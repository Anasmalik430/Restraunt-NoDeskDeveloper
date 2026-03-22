'use client';

import React, { useRef, useEffect } from 'react';
import { siteData } from '@/data/siteData';
import { Utensils, ArrowRight, Star, Clock } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // Staggered cinematic reveal
      tl.fromTo(".hero-tagline", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.2 })
        .fromTo(".hero-title .char", 
           { y: 80, opacity: 0, rotationX: -45, transformOrigin: "bottom center" }, 
           { y: 0, opacity: 1, rotationX: 0, stagger: 0.05, duration: 1.2 }, "-=0.6")
        .fromTo(".hero-slogan", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 }, "-=0.8")
        .fromTo(".hero-buttons a", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.1 }, "-=1")
        .fromTo([".hero-metrics", ".scroll-indicator"], { opacity: 0 }, { opacity: 0.6, duration: 1, stagger: 0.2 }, "-=0.5");

      // Safe Parallax Image Scrubbing (no empty edges)
      gsap.to(".hero-bg-img", {
        y: "15%",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
      
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const renderTitleChars = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="char inline-block perspective-[1000px]">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section id="home" ref={heroRef} className="relative h-screen w-full overflow-hidden bg-white">
      
      {/* Background Layer - Verified Reliability */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/hero-banner.webp" 
          alt="Aladdin Signature Interior"
          className="hero-bg-img h-[120%] w-full object-cover -top-[10%] relative origin-top"
        />
        {/* Layered Cinematic Overlays for Centralized Text */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[3px] md:bg-white/60 md:backdrop-blur-[2px] z-10" />
        {/* Subtle vignette for deeper contrast in center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.4)_100%)] z-10 hidden md:block" />
        <div className="absolute inset-0 bg-linear-to-t from-white via-white/20 to-transparent z-10" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center items-center text-center pt-20">
        
        <div className="max-w-4xl flex flex-col items-center space-y-10">
          
          <div className="space-y-6 flex flex-col items-center">
            <div className="hero-tagline flex items-center justify-center gap-4">
              <div className="w-8 md:w-16 h-px bg-primary opacity-50" />
              <p className="text-primary font-bold tracking-[0.5em] md:tracking-[0.8em] uppercase text-[9px] md:text-xs font-['Outfit']">
                {siteData.brand.tagline}
              </p>
              <div className="w-8 md:w-16 h-px bg-primary opacity-50" />
            </div>
            
            <h1 className="hero-title flex flex-wrap justify-center text-6xl sm:text-8xl md:text-[10rem] font-serif font-black leading-[0.85] text-accent tracking-tighter antialiased">
              {renderTitleChars(siteData.brand.name)}
            </h1>
          </div>




          <p className="hero-slogan text-accent/80 text-sm md:text-xl font-medium font-['Outfit'] max-w-2xl leading-relaxed italic mx-auto">
            "{siteData.brand.slogan}. Serving heritage flavors in Uttarakhand's most iconic sanctuary."
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 w-full sm:w-auto">
            <a 
              href="#menu"
              className="group w-full sm:w-auto px-12 py-5 bg-accent text-white font-['Outfit'] font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-primary transition-all duration-500 rounded-xl flex items-center justify-center gap-3 shadow-2xl hover:shadow-primary/20"
            >
              <Utensils size={14} className="group-hover:rotate-12 transition-transform" />
              Explore Menu
            </a>
            <a 
               href="#contact"
               className="group w-full sm:w-auto px-12 py-5 border border-accent/20 text-accent font-['Outfit'] font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-accent hover:text-white transition-all duration-500 rounded-xl flex items-center justify-center gap-3"
            >
              Reserve Table
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="hero-metrics flex flex-wrap items-center justify-center gap-8 md:gap-16 pt-8 md:pt-12 opacity-80">
             <div className="flex items-center gap-3">
                <Star size={16} className="text-primary fill-primary" />
                <div className="flex flex-col">
                   <span className="text-lg font-serif italic text-accent leading-none">4.9/5</span>
                   <span className="text-[8px] uppercase tracking-widest font-black">Rating</span>
                </div>
             </div>
             <div className="flex items-center gap-3">
                <Clock size={16} className="text-primary" />
                <div className="flex flex-col">
                   <span className="text-lg font-serif italic text-accent leading-none">Est. 1998</span>
                   <span className="text-[8px] uppercase tracking-widest font-black">Heritage</span>
                </div>
             </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator absolute bottom-12 right-8 hidden lg:flex flex-col items-center gap-6 opacity-40 group cursor-pointer hover:opacity-100 transition-opacity">
           <span className="text-[9px] uppercase tracking-[0.6em] font-black font-['Outfit'] text-accent rotate-90 origin-right whitespace-nowrap">Scroll Down</span>
           <div className="w-px h-20 bg-accent/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-primary animate-scroll-indicator" />
           </div>
        </div>

      </div>

      {/* Decorative Branding */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
    </section>
  );
};

export default Hero;


