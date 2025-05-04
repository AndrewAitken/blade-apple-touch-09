
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-brand-beige/30 py-20 md:py-32">
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Premium <br/> Eco Cleaning
            </h1>
            <p className="text-lg md:text-xl text-brand-gray/80 max-w-xl">
              Профессиональная экологичная уборка для вашего дома, офиса или коммерческого помещения. Минималистичный подход — максимальная чистота.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary">Рассчитать стоимость</Button>
              <Button className="btn-secondary">Узнать больше</Button>
            </div>
          </div>
          <div className="relative h-64 md:h-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="absolute top-0 right-0 w-full h-full">
              <div className="grid grid-cols-2 gap-1 w-64 h-64 md:w-80 md:h-80 mx-auto border-4 border-brand-gray p-2">
                <div className="bg-brand-green/20 rounded"></div>
                <div className="bg-brand-beige/40 rounded flex items-center justify-center">
                  <div className="w-10 h-10 bg-brand-gray"></div>
                </div>
                <div className="bg-brand-beige/40 rounded"></div>
                <div className="bg-brand-green/20 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
