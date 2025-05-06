import React from "react";
import { Check } from "lucide-react";
const benefitsData = ["Экологичные чистящие средства", "Современное оборудование", "Опытный персонал", "Гарантия качества", "Фиксированные цены", "Бережное отношение к вашим вещам"];
const About = () => {
  return <section id="about" className="section bg-brand-green/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <div className="aspect-square max-w-md mx-auto md:mx-0 relative">
              <div className="absolute inset-0 grid grid-cols-2 gap-4">
                <div className="bg-brand-beige rounded-2xl"></div>
                <div className="bg-brand-green/30 rounded-2xl"></div>
                <div className="bg-brand-green/30 rounded-2xl"></div>
                <div className="bg-brand-beige rounded-2xl"></div>
              </div>
              <div className="absolute inset-8 bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center">
                <div className="text-center">
                  <img src="/lovable-uploads/8a80a736-9474-4dcb-840c-ac39b2518b81.png" alt="WashUp Logo" className="w-56 h-56 mx-auto mb-4" />
                  
                  
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">О компании WashUp</h2>
            <p className="text-lg mb-6">
              WashUp — это команда профессионалов с многолетним опытом работы в сфере клининга. 
              Мы специализируемся на экологически чистой уборке, используя только безопасные для 
              человека и окружающей среды средства.
            </p>
            <p className="text-lg mb-8">
              Наша миссия — сделать уборку максимально эффективной, сохраняя минималистичный подход. 
              Мы верим в философию "меньше значит больше" и стремимся создавать чистые и здоровые пространства 
              для жизни и работы.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {benefitsData.map((benefit, index) => <div key={index} className="flex items-center gap-2">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-green/20 flex items-center justify-center">
                    <Check size={12} className="text-brand-green" />
                  </span>
                  <span>{benefit}</span>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;