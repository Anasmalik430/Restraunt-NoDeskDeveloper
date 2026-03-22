import React from "react";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Featured from "@/components/Featured";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Reservation from "@/components/Reservation";
import ContactInfo from "@/components/ContactInfo";

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <About />
      <Featured />
      <Menu />
      <Gallery />
      <Testimonials />
      <Reservation />
      <ContactInfo />
      
    </div>
  );
};

export default Home;






