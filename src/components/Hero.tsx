
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById("calculator");
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Используем новое изображение склада как фон */}
      <div 
        className="absolute inset-0 z-0 animate-fade-in"
        style={{
          backgroundImage: "url('/lovable-uploads/541572cd-9bf6-4d49-bb4a-b68e4d446a8b.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          animationDuration: "1s"
        }}
      ></div>
      
      {/* Добавляем резервное изображение, которое загрузится, если возникнут проблемы с фоном */}
      <img 
        src="/lovable-uploads/541572cd-9bf6-4d49-bb4a-b68e4d446a8b.png"
        alt="Современный склад для профессиональной уборки WashUp"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-0"
      />
      
      {/* Темный оверлей для лучшей читаемости текста */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px] z-10 animate-fade-in" style={{ animationDuration: "1.2s", animationDelay: "0.3s", animationFillMode: "both" }}></div>
      
      <div className="container mx-auto relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white opacity-0 animate-fade-in" 
                style={{ animationDuration: "0.8s", animationDelay: "0.6s", animationFillMode: "both" }}>
              WashUp - профессиональный клининг в Рязани
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-xl opacity-0 animate-fade-in" 
               style={{ animationDuration: "0.8s", animationDelay: "0.9s", animationFillMode: "both" }}>
              Уборка производственных объектов, складов, торговых и бизнес-центров, ресторанов и офисов. Соблюдаем технологии, используем профессиональную химию.
            </p>
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in" 
                 style={{ animationDuration: "0.8s", animationDelay: "1.2s", animationFillMode: "both" }}>
              <Button 
                className="btn-primary btn-hover-effect group transform hover:scale-105 transition-all duration-300"
                onClick={scrollToCalculator}
              >
                Рассчитать стоимость
              </Button>
              <Button 
                className="btn-secondary group bg-white/10 border-white text-white hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
                onClick={scrollToAbout}
              >
                О нас
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-auto opacity-0 animate-fade-in" style={{
            animationDuration: "0.8s",
            animationDelay: "1.5s",
            animationFillMode: "both"
          }}>
            <div className="absolute top-0 right-0 w-full h-full">
              
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 animate-fade-in" 
           style={{ animationDuration: "0.8s", animationDelay: "1.8s", animationFillMode: "both" }}></div>
    </section>
  );
};

export default Hero;
