"use client";
import React, { useState } from 'react';
import { MapPin } from 'lucide-react'; // Added MapPin import

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '19:00',
    guests: '2'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-32 bg-secondary/50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-black/5">
          
          {/* Information & Ambience Side */}
          <div className="w-full lg:w-1/2 relative min-h-[400px]">
            <img 
              src="/reservation-banner.webp" 
              alt="Reservation Background"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-accent/60 backdrop-blur-sm flex flex-col justify-center px-12 md:px-20 text-white">
              <p className="text-primary font-bold tracking-[0.4em] uppercase mb-6 text-[10px]">Private Dining</p>
              <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
                Secure Your <br />
                <span className="italic font-normal">Golden Table</span>
              </h2>
              <div className="space-y-6 text-white/70 text-sm md:text-base font-medium">
                <p>Enjoy an evening of excellence in our heritage hall or private gold suite.</p>
                <div className="flex flex-col gap-4 mt-10">
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-px bg-primary" />
                     <span className="tracking-widest uppercase text-[10px]">Open: 12:00 PM - 11:30 PM</span>
                   </div>
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-px bg-primary" />
                     <span className="tracking-widest uppercase text-[10px]">Dress Code: Smart Casual</span>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-1/2 p-12 md:p-20 bg-white">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-accent/40 block ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full bg-secondary border-none px-6 py-4 rounded-xl text-accent focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm font-medium"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-accent/40 block ml-1">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+91 XXXXXXXXXX" 
                      className="w-full bg-secondary border-none px-6 py-4 rounded-xl text-accent focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm font-medium"
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                   <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-accent/40 block ml-1">Date</label>
                    <input 
                      required
                      type="date" 
                      className="w-full bg-secondary border-none px-6 py-4 rounded-xl text-accent focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm font-medium"
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-accent/40 block ml-1">Time</label>
                    <select 
                      className="w-full bg-secondary border-none px-6 py-4 rounded-xl text-accent focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm font-medium appearance-none"
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                    >
                      <option>19:00</option>
                      <option>20:00</option>
                      <option>21:00</option>
                      <option>22:00</option>
                    </select>
                  </div>
                  <div className="col-span-2 md:col-span-1 space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-accent/40 block ml-1">Guests</label>
                    <select 
                      className="w-full bg-secondary border-none px-6 py-4 rounded-xl text-accent focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm font-medium appearance-none"
                      onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    >
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>4 Guests</option>
                      <option>6+ Guests</option>
                    </select>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 bg-accent text-white font-bold uppercase tracking-[0.4em] text-xs hover:bg-primary hover:shadow-2xl transition-all duration-500 rounded-xl mt-4"
                >
                  Secure Reservation
                </button>

                <p className="text-[9px] text-accent/40 text-center uppercase tracking-widest leading-loose">
                  By booking, you agree to our heritage reservation policies. <br />
                  A confirmation SMS will be sent shortly.
                </p>
              </form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in duration-700">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-4xl text-primary">✓</span>
                </div>
                <h3 className="text-3xl font-serif text-accent tracking-tight">Reservation Requested</h3>
                <p className="text-accent/60 max-w-xs font-medium">
                  Thank you, <span className="text-accent font-bold">{formData.name}</span>. Our Maître d' will confirm your golden table for {formData.date} at {formData.time} shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
