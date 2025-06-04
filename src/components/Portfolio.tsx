
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const portfolioImages = [
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3",
    alt: "Уборка современного офисного пространства",
    category: "Офисные помещения",
    title: "Клининг офиса после работы",
    description: "Ежедневная поддерживающая уборка с дезинфекцией рабочих мест"
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3",
    alt: "Клининг складского комплекса",
    category: "Складские помещения",
    title: "Машинная уборка склада",
    description: "Комплексная очистка складских площадей с использованием спецтехники"
  },
  {
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3",
    alt: "Уборка торгового центра",
    category: "Торговые центры",
    title: "Клининг торгового центра",
    description: "Регулярная уборка общественных зон и торговых площадей"
  },
  {
    src: "/lovable-uploads/208d3f35-4f0f-42c0-8a28-b891c0673eba.png",
    alt: "Клининг ресторана после работы",
    category: "Рестораны",
    title: "Клининг ресторана после работы",
    description: "Глубокая очистка кухни, зала и обезжиривание оборудования"
  },
  {
    src: "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-4.0.3",
    alt: "Машинная уборка производственных полов",
    category: "Производственные объекты",
    title: "Уборка производственного цеха",
    description: "Специализированная очистка с соблюдением промышленных стандартов"
  },
  {
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3",
    alt: "Уборка бизнес-центра",
    category: "Бизнес-центры",
    title: "Генеральная уборка бизнес-центра",
    description: "Комплексная уборка всех зон с мытьем фасадов и окон"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши работы</h2>
            <p className="text-lg text-brand-gray/80 max-w-2xl">
              Примеры профессиональной уборки коммерческих объектов от команды WashUp
            </p>
          </div>
          <Button variant="ghost" className="hidden md:flex items-center gap-2 mt-4 md:mt-0">
            Смотреть все работы <ArrowRight size={16} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((image, index) => (
            <div 
              key={index} 
              className="group overflow-hidden rounded-2xl relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Градиентный фон и текст, прижатый к низу */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:-translate-y-2">
                  <span className="text-white/90 text-sm mb-2 block">{image.category}</span>
                  <h4 className="text-white text-xl font-semibold mb-2">{image.title}</h4>
                  
                  {/* Описание, которое появляется при наведении */}
                  <p className="text-white/90 text-sm leading-relaxed opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="ghost" className="flex items-center gap-2 mx-auto">
            Смотреть все работы <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
