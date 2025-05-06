import React from "react";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="relative overflow-hidden bg-brand-beige/30 py-20 md:py-32">
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              WashUp - профессиональный клининг в Рязани
            </h1>
            <p className="text-lg md:text-xl text-brand-gray/80 max-w-xl">
              Профессиональная экологичная уборка для вашего дома, офиса или коммерческого помещения. Минималистичный подход — максимальная чистота.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary btn-hover-effect group">
                Рассчитать стоимость
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Button>
              <Button className="btn-secondary group">
                Узнать больше
                <span className="inline-block transition-transform duration-300 group-hover:translate-y-1">↓</span>
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-auto animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            <div className="absolute top-0 right-0 w-full h-full">
              
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>;
};
export default Hero;