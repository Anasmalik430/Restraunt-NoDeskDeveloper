import React from 'react';
import { siteData } from '@/data/siteData';
import { MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section id="location" className="py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Info Side */}
          <div className="space-y-16">
            <div className="space-y-6">
              <p className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">Find Us</p>
              <h2 className="text-5xl md:text-7xl font-serif text-accent italic leading-tight">Our Roorkee <br /> Sanctuary</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="space-y-4">
                  <h4 className="text-accent font-bold uppercase tracking-widest text-xs">Location</h4>
                  <p className="text-accent/60 font-medium leading-relaxed">
                    {siteData.brand.location.address} <br />
                    {siteData.brand.location.city} <br />
                    {siteData.brand.location.zip}
                  </p>
                  <a href="#" className="text-primary text-[10px] font-black uppercase tracking-widest border-b border-primary/20 pb-1 inline-block hover:border-primary transition-all">Get Directions</a>
               </div>
               <div className="space-y-4">
                  <h4 className="text-accent font-bold uppercase tracking-widest text-xs">Reservations</h4>
                  <p className="text-accent/60 font-medium leading-relaxed">
                    {siteData.brand.contact.phone} <br />
                    {siteData.brand.contact.email}
                  </p>
                  <a href="#contact" className="text-primary text-[10px] font-black uppercase tracking-widest border-b border-primary/20 pb-1 inline-block hover:border-primary transition-all">Book Now</a>
               </div>
            </div>

            <div className="p-12 bg-secondary rounded-[2.5rem] border border-black/5 shadow-premium">
               <h4 className="text-accent font-bold uppercase tracking-widest text-xs mb-8">Service Hours</h4>
               <div className="space-y-6">
                 {siteData.brand.openingHours.map((h, i) => (
                    <div key={i} className="flex justify-between items-center group">
                       <span className="text-accent/40 font-bold uppercase tracking-widest text-[10px] group-hover:text-primary transition-colors">{h.day}</span>
                       <div className="grow mx-4 border-b border-black/5" />
                       <span className="text-accent font-medium text-sm">{h.hours}</span>

                    </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Map / Image Side */}
          <div className="relative group lg:h-[800px]">
             <div className="absolute inset-0 bg-primary/10 rounded-[3rem] blur-3xl -z-10 animate-pulse" />
             <div className="h-full w-full rounded-[3rem] overflow-hidden shadow-2xl border border-black/5 relative bg-secondary">
                {/* Real Interactive Map */}
                <iframe 
                   src={siteData.brand.location.mapUrl}
                   width="100%" 
                   height="100%" 
                   style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }} 
                   allowFullScreen="" 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                   className="grayscale hover:grayscale-0 transition-all duration-1000"
                />
                
                {/* Overlay Info */}
                <div className="absolute inset-x-12 bottom-12 bg-white/90 backdrop-blur-md p-8 rounded-4xl border border-black/5 shadow-premium flex items-center justify-between group-hover:translate-y-[-10px] transition-transform duration-500">
                   <div>
                      <h5 className="text-accent font-bold text-xs uppercase tracking-widest mb-1">{siteData.brand.name} BISTRO</h5>
                      <p className="text-accent/40 text-[10px] uppercase font-black tracking-widest">Visit us in Roorkee</p>
                   </div>
                   <div className="w-12 h-12 cursor-pointer bg-accent rounded-full flex items-center justify-center shadow-lg group-hover:bg-primary transition-colors duration-500">
                      <MapPin size={20} className="text-white" />
                   </div>
                </div>
             </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
