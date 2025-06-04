
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import UnifiedCalculator from "@/components/UnifiedCalculator";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <UnifiedCalculator />
        <Portfolio />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
