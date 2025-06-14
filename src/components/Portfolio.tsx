import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const portfolioImages = [
  {
    src: "/lovable-uploads/0a23f6ed-5f09-462c-b10a-1e8e2e1fe936.png",
    alt: "Уборка современного офисного пространства",
    category: "Офисные помещения",
    title: "Клининг офиса после работы",
    description: "Ежедневная поддерживающая уборка с дезинфекцией рабочих мест"
  },
  {
    src: "/lovable-uploads/64280a18-b4da-47f0-88a5-87b29971d3b1.png",
    alt: "Клининг складского комплекса",
    category: "Складские помещения",
    title: "Машинная уборка склада",
    description: "Комплексная очистка складских площадей с использованием спецтехники"
  },
  {
    src: "/lovable-uploads/406d90d6-b3a5-46d3-a844-0d8044dff34e.png",
    alt: "Уборка торгового центра",
    category: "Торговые центры",
    title: "Клининг торгового центра",
    description: "Регулярная уборка общественных зон и торговых площадей"
  },
  {
    src: "/lovable-uploads/0ffbb3c5-c949-4092-ab18-b7e45aaf5f04.png",
    alt: "Профессиональная уборка ресторана",
    category: "Рестораны",
    title: "Клининг ресторана после работы",
    description: "Глубокая очистка кухни, зала и обезжиривание оборудования"
  },
  {
    src: "/lovable-uploads/30476c8b-8e80-430a-86a3-1593c8c1025a.png",
    alt: "Машинная уборка производственных полов",
    category: "Производственные объекты",
    title: "Уборка производственного цеха",
    description: "Специализированная очистка с соблюдением промышленных стандартов"
  },
  {
    src: "/lovable-uploads/4d57582a-6160-4d30-a56c-9928b02b9fef.png",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Направления работ</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl relative animate-fade-in"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Градиентный фон и текст, прижатый к низу */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 pb-6 px-6">
                  <div className="transform transition-transform duration-300 group-hover:-translate-y-4">
                    <span className="text-white/90 text-sm mb-2 block">{image.category}</span>
                    <h4 className="text-white text-xl font-semibold mb-2">{image.title}</h4>
                  </div>
                  
                  {/* Описание, которое появляется при наведении и сдвигает основной текст вверх */}
                  <p className="text-white/90 text-sm leading-relaxed opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
