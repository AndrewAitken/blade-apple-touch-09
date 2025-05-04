
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-4 sticky top-0 bg-white/80 backdrop-blur-lg z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            {/* Логотип WashUp с иконками из бренд-бука */}
            <div className="grid grid-cols-2 gap-0.5 border-2 border-brand-gray p-1 w-10 h-10">
              <div className="bg-brand-gray"></div>
              <div className="bg-brand-gray"></div>
              <div className="bg-brand-gray"></div>
              <div className="bg-brand-gray"></div>
            </div>
            <span className="text-xl font-bold">WashUp</span>
          </div>
        </div>

        {/* Десктопное меню */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="hover:text-brand-green transition-colors">Услуги</a>
          <a href="#pricing" className="hover:text-brand-green transition-colors">Цены</a>
          <a href="#portfolio" className="hover:text-brand-green transition-colors">Наши работы</a>
          <a href="#about" className="hover:text-brand-green transition-colors">О нас</a>
          <a href="#contact" className="hover:text-brand-green transition-colors">Контакты</a>
        </nav>

        {/* Кнопка заказа */}
        <div className="hidden md:block">
          <Button className="btn-primary">Заказать уборку</Button>
        </div>

        {/* Мобильное меню */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Мобильная навигация */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md p-4 z-50">
          <nav className="flex flex-col space-y-4">
            <a href="#services" className="hover:text-brand-green transition-colors" onClick={() => setIsOpen(false)}>Услуги</a>
            <a href="#pricing" className="hover:text-brand-green transition-colors" onClick={() => setIsOpen(false)}>Цены</a>
            <a href="#portfolio" className="hover:text-brand-green transition-colors" onClick={() => setIsOpen(false)}>Наши работы</a>
            <a href="#about" className="hover:text-brand-green transition-colors" onClick={() => setIsOpen(false)}>О нас</a>
            <a href="#contact" className="hover:text-brand-green transition-colors" onClick={() => setIsOpen(false)}>Контакты</a>
            <Button className="btn-primary w-full">Заказать уборку</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
