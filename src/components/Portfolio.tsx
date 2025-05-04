
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const portfolioImages = [
  {
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3",
    alt: "Чистая современная гостиная после уборки",
    category: "Жилые помещения"
  },
  {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3",
    alt: "Уборка офисного помещения",
    category: "Офисы"
  },
  {
    src: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3",
    alt: "Чистая кухня после генеральной уборки",
    category: "Кухни"
  },
  {
    src: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-4.0.3",
    alt: "Ванная комната после уборки",
    category: "Санузлы"
  },
  {
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3",
    alt: "Чистый диван после химчистки",
    category: "Химчистка"
  },
  {
    src: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?ixlib=rb-4.0.3",
    alt: "Мытье окон в высотном здании",
    category: "Окна"
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
              Примеры профессиональной уборки от команды WashUp
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
              <div className="absolute inset-0 bg-gradient-to-t from-brand-gray/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-white text-sm mb-1">{image.category}</span>
                <h4 className="text-white text-xl font-medium">{image.alt}</h4>
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
