import React from "react";
import { ArrowUp, House, Building, SprayCan, Building2 } from "lucide-react";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return <footer className="bg-brand-gray py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="grid grid-cols-2 gap-0.5 border-2 border-white p-1 w-8 h-8">
                <div className="bg-white flex items-center justify-center">
                  <House size={14} className="text-brand-gray" />
                </div>
                <div className="bg-white flex items-center justify-center">
                  <SprayCan size={14} className="text-brand-gray" />
                </div>
                <div className="bg-white flex items-center justify-center">
                  <Building size={14} className="text-brand-gray" />
                </div>
                <div className="bg-white flex items-center justify-center">
                  <Building2 size={14} className="text-brand-gray" />
                </div>
              </div>
              <span className="text-xl font-bold text-white">WashUp</span>
            </div>
            <p className="text-brand-beige/80 max-w-sm">
              Premium-эко-клининг с минималистичным подходом. 
              Мы создаем чистые и здоровые пространства для жизни и работы.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-brand-beige/80 hover:text-white transition-colors">Услуги</a></li>
              <li><a href="#pricing" className="text-brand-beige/80 hover:text-white transition-colors">Цены</a></li>
              <li><a href="#portfolio" className="text-brand-beige/80 hover:text-white transition-colors">Наши работы</a></li>
              <li><a href="#about" className="text-brand-beige/80 hover:text-white transition-colors">О нас</a></li>
              <li><a href="#contact" className="text-brand-beige/80 hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li className="text-brand-beige/80">8 920 950 08 08</li>
              <li className="text-brand-beige/80">info@clean-hub.ru</li>
              <li className="text-brand-beige/80">г. Рязань, ул. Соборная, д. 15А</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <p className="text-brand-beige/60 text-sm">
            © {new Date().getFullYear()} WashUp. Premium Eco Cleaning. Все права защищены.
          </p>
          
          <button onClick={scrollToTop} className="flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full mt-4 md:mt-0 transition-all duration-300 hover:scale-105">
            Наверх <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>;
};
export default Footer;