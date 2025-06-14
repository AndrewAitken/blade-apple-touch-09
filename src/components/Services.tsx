
import React from "react";
import { Building, Building2, Wrench, ShoppingCart } from "lucide-react";

const servicesData = [
  {
    title: "Склады и производственные объекты",
    description: "Профессиональная уборка промышленных помещений: удаление пыли, загрязнений, машинная мойка полов (бетон, топпинг), обработка стеллажей и зон погрузки.",
    icon: Building
  },
  {
    title: "Бизнес и торговые центры",
    description: "Ежедневная и глубокая уборка холлов, офисов, лифтов, стеклянных фасадов, санузлов и общих зон. Дезинфекция и поддержание идеальной чистоты для клиентов и арендаторов.",
    icon: Building2
  },
  {
    title: "Уборка после строительства и ремонта",
    description: "Удаление строительной пыли, цемента, клея, остатков стройматериалов. Подготовка объекта к сдаче или запуску проекта.",
    icon: Wrench
  },
  {
    title: "Ритейл & HoReCa",
    description: "Комплексная уборка торговых залов, бутиков, супермаркетов и точек общественного питания. Поддержание чистоты без остановки работы.",
    icon: ShoppingCart
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-lg text-brand-gray/80 max-w-2xl mx-auto">
            Мы предлагаем полный комплекс услуг для запуска вашего помещения в работу, или поддерживать ваш комфорт и чистоту.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="service-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-brand-green-lighter/50 rounded-full flex items-center justify-center mb-4">
                <service.icon className="text-brand-green" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-brand-gray/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
