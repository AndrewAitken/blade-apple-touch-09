
import React from "react";
import { Home, Building, Building2, Car } from "lucide-react";

const servicesData = [
  {
    title: "Уборка квартир",
    description: "Генеральная и поддерживающая уборка жилых помещений с использованием экологичных средств",
    icon: Home
  },
  {
    title: "Уборка офисов",
    description: "Регулярная и разовая уборка офисных помещений любой площади",
    icon: Building
  },
  {
    title: "Коммерческая уборка",
    description: "Профессиональная уборка торговых центров, ресторанов и других коммерческих объектов",
    icon: Building2
  },
  {
    title: "Химчистка",
    description: "Чистка мягкой мебели, ковров и текстильных поверхностей с помощью современного оборудования",
    icon: Car
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-lg text-brand-gray/80 max-w-2xl mx-auto">
            Мы предлагаем полный комплекс клининговых услуг для вашего комфорта
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="service-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-brand-beige/30 rounded-full flex items-center justify-center mb-4">
                <service.icon className="text-brand-green" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-brand-gray/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
