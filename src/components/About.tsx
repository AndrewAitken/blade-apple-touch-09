
import React from "react";
import { Check, Zap, Shield, Award } from "lucide-react";

const benefitsData = [
  "Профессиональная химия и оборудование",
  "Парк поломоечных машин Lavor, EVOline, FIORENTINI", 
  "Экологичные чистящие средства",
  "Опытный персонал",
  "Гарантия качества", 
  "Фиксированные цены"
];

const equipmentData = [
  {
    title: "Поломоечные машины",
    description: "Работаем на профессиональных брендах Lavor, EVOline, FIORENTINI",
    icon: Zap
  },
  {
    title: "Профессиональная химия",
    description: "Используем сертифицированные средства для различных типов поверхностей",
    icon: Shield
  },
  {
    title: "Современные технологии",
    description: "Соблюдаем технологии уборки, гарантируем качественный результат",
    icon: Award
  }
];

const About = () => {
  return (
    <section id="about" className="section bg-brand-green/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">О компании WashUp</h2>
          <p className="text-lg text-brand-gray/80 max-w-2xl mx-auto">
            Профессиональная команда с современным оборудованием и технологиями уборки
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="aspect-square max-w-md mx-auto lg:mx-0 relative">
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

          <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-6">Наше оборудование и технологии</h3>
            <p className="text-lg mb-6">
              WashUp — это команда профессионалов, специализирующихся на уборке коммерческих объектов. 
              Мы используем современное оборудование и профессиональную химию для достижения идеального результата.
            </p>
            <p className="text-lg mb-8">
              Наша специализация — промышленная и коммерческая уборка с использованием передовых технологий 
              и безопасных для окружающей среды средств.
            </p>

            <div className="grid grid-cols-1 gap-4 mb-8">
              {benefitsData.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-green/20 flex items-center justify-center">
                    <Check size={12} className="text-brand-green" />
                  </span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Секция оборудования */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {equipmentData.map((equipment, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-brand-green/20 rounded-full flex items-center justify-center mb-4">
                <equipment.icon className="text-brand-green" size={24} />
              </div>
              <h4 className="text-xl font-semibold mb-3">{equipment.title}</h4>
              <p className="text-brand-gray/80">{equipment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
