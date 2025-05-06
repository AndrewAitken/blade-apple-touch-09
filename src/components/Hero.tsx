
import React from "react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Hero = () => {
  const scrollToNextSection = () => {
    // Scroll to the calculator section
    const calculatorSection = document.getElementById("calculator");
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Используем новое изображение офисного пространства как фон */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/73542c8c-acfb-4955-a168-fd57451411e8.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      
      {/* Добавляем резервное изображение, которое загрузится, если возникнут проблемы с фоном */}
      <img 
        src="/lovable-uploads/73542c8c-acfb-4955-a168-fd57451411e8.png"
        alt="Современный офис для профессиональной уборки WashUp"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-0"
      />
      
      {/* Темный оверлей для лучшей читаемости текста */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px] z-10"></div>
      
      <div className="container mx-auto relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              WashUp - профессиональный клининг в Рязани
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-xl">
              Профессиональная экологичная уборка для вашего дома, офиса или коммерческого помещения. Минималистичный подход — максимальная чистота.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="btn-primary btn-hover-effect group"
                onClick={scrollToNextSection}
              >
                Рассчитать стоимость
              </Button>
              <Button 
                className="btn-secondary group bg-white/10 border-white text-white hover:bg-white/20"
                onClick={scrollToNextSection}
              >
                Узнать больше
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
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
