
import React from "react";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import UnifiedCalculator from "@/components/UnifiedCalculator";
import Footer from "@/components/Footer";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <div className="section pt-24">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Цены на клининговые услуги</h1>
              <p className="text-lg text-brand-gray/80 max-w-2xl mx-auto">
                Прозрачные цены на все виды профессиональной уборки коммерческих объектов
              </p>
            </div>
          </div>
        </div>
        <Pricing />
        <UnifiedCalculator />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
