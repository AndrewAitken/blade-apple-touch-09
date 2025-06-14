
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
    <section id="about" className="section bg-brand-green-lighter/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">О компании WashUp</h2>
          <p className="text-lg text-brand-gray/80 max-w-2xl mx-auto">
            Профессиональная команда с современным оборудованием и технологиями уборки
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Наше оборудование и технологии</h3>
            <p className="text-lg mb-6">
              WashUp — это команда профессионалов, специализирующихся на уборке коммерческих объектов. 
              Мы используем современное оборудование и профессиональную химию для достижения идеального результата.
            </p>
            <p className="text-lg">
              Наша специализация — промышленная и коммерческая уборка с использованием передовых технологий 
              и безопасных для окружающей среды средств.
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="grid grid-cols-1 gap-4">
              {benefitsData.map((benefit, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 flex items-start gap-4"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-green-lighter/60 flex items-center justify-center">
                    <Check size={14} className="text-brand-green" />
                  </span>
                  <span className="text-sm font-medium">{benefit}</span>
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
              <div className="w-12 h-12 bg-brand-green-lighter/50 rounded-full flex items-center justify-center mb-4">
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
