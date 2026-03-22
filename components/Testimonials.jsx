'use client';

import React, { useRef, useEffect } from 'react';
import { siteData } from '@/data/siteData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const reviewsRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".review-elem", 
        { y: 30, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.2, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: reviewsRef.current,
            start: "top 80%",
          }
        }
      );
    }, reviewsRef);

    return () => ctx.revert();
  }, []);

  // Triple the array to ensure no gaps during the infinite marquee loop
  const marqueeReviews = [...siteData.testimonials, ...siteData.testimonials, ...siteData.testimonials];

  return (
    <section id="reviews" ref={reviewsRef} className="py-32 bg-white overflow-hidden scroll-smooth">
      <div className="review-elem max-w-7xl mx-auto px-6 mb-24 text-center">
        <p className="text-primary font-bold tracking-[0.4em] uppercase mb-4 text-[10px]">Voices of Excellence</p>
        <h2 className="text-5xl md:text-7xl font-serif text-accent italic">Guest Experiences</h2>
      </div>

      {/* Infinite Marquee Wrapper */}
      <div className="review-elem relative w-full overflow-hidden py-10">
        <div className="animate-marquee flex gap-8">
          {marqueeReviews.map((review, idx) => (
            <div 
              key={idx} 
              className="w-[380px] md:w-[450px] shrink-0 bg-secondary p-12 rounded-[2.5rem] border border-black/5 shadow-premium hover:border-primary/30 transition-all duration-500 card-hover"
            >
              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white ring-4 ring-primary/5">
                  <Image 
                    src={review.avatar} 
                    width={1080}
                    height={960}
                    alt={review.name} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div>
                  <h4 className="text-accent font-bold text-xs tracking-[0.2em] uppercase">{review.name}</h4>
                  <p className="text-primary text-[9px] uppercase font-black tracking-widest mt-1 opacity-70">{review.role}</p>
                </div>
              </div>

              <div className="flex gap-1.5 mb-8">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-primary text-[10px]">★</span>
                ))}
              </div>

              <p className="text-accent/80 text-lg leading-relaxed font-serif italic tracking-wide">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Cinematic Gradient Masking for "Fade Out" effect */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-linear-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-linear-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
      </div>

      <div className="review-elem max-w-7xl mx-auto px-6 mt-20 text-center">
         <p className="text-accent/30 text-[10px] font-bold uppercase tracking-[0.6em]">
            Join 10,000+ happy guests &bull; Since 1998
         </p>
      </div>
    </section>
  );
};

export default Testimonials;

