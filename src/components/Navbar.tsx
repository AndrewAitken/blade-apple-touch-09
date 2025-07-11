
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle, MessagesSquare, Send, House, Building, SprayCan, Building2 } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-4 sticky top-0 bg-white/100 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2">
            <img 
              alt="WashUp - профессиональный клининг" 
              className="h-7 w-auto" 
              src="/lovable-uploads/cdfb7d8e-4a03-45c8-a01e-57db012c36f7.png" 
            />
          </a>
        </div>

        {/* Десктопное меню - показываем только на экранах lg и больше (1024px+) */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="/#services" className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-brand-green after:origin-bottom-right after:transition-all after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left hover:text-brand-green transition-colors">Услуги</a>
          <a href="/#pricing" className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-brand-green after:origin-bottom-right after:transition-all after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left hover:text-brand-green transition-colors">Цены</a>
          <a href="/#calculator" className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-brand-green after:origin-bottom-right after:transition-all after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left hover:text-brand-green transition-colors">Калькулятор</a>
          <a href="/#portfolio" className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-brand-green after:origin-bottom-right after:transition-all after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left hover:text-brand-green transition-colors">Наши работы</a>
          <a href="/#about" className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-brand-green after:origin-bottom-right after:transition-all after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left hover:text-brand-green transition-colors">О нас</a>
        </nav>

        {/* Кнопки быстрой связи в десктопе - показываем только на экранах lg и больше */}
        <div className="hidden lg:flex items-center gap-2">
          <a href="https://wa.me/79209500808" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#25D366]/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#25D366] hover:text-white hover:scale-110" aria-label="WhatsApp">
            <MessagesSquare size={20} />
          </a>
          <a href="https://t.me/+79209500808" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#0088cc]/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#0088cc] hover:text-white hover:scale-110" aria-label="Telegram">
            <Send size={20} />
          </a>
          <Button className="btn-primary ml-2">
            <span className="hidden sm:inline">Заказать уборку</span>
            <span className="sm:hidden">Заказать</span>
          </Button>
        </div>

        {/* Мобильное меню - показываем на экранах меньше lg (меньше 1024px) */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Мобильная навигация - показываем на экранах меньше lg */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-md p-4 z-50">
          <nav className="flex flex-col space-y-4">
            <a href="/#services" className="hover:text-brand-green transition-colors" onClick={() => setIsOpen(false)}>Услуги</a>
            <a href="/#pricing" className="hover:text-brand-green transition-colors" onClick={() => setIsOpen(false)}>Цены</a>
            <a href="/#calculator" className="hover:text-brand-green transition-colors" onClick={() => setIsOpen(false)}>Калькулятор</a>
            <a href="/#portfolio" className="hover:text-brand-green transition-colors" onClick={() => setIsOpen(false)}>Наши работы</a>
            <a href="/#about" className="hover:text-brand-green transition-colors" onClick={() => setIsOpen(false)}>О нас</a>
            
            <div className="flex gap-3 mt-2">
              <a href="https://wa.me/79209500808" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#25D366]/10 rounded-lg text-sm hover:bg-[#25D366] hover:text-white transition-colors">
                <MessagesSquare size={18} /> WhatsApp
              </a>
              <a href="https://t.me/+79209500808" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#0088cc]/10 rounded-lg text-sm hover:bg-[#0088cc] hover:text-white transition-colors">
                <Send size={18} /> Telegram
              </a>
            </div>
            
            <Button className="btn-primary w-full mt-2">Заказать уборку</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
