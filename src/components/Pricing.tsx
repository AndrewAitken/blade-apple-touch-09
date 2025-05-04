
import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingData = [
  {
    name: "Базовая уборка",
    price: "2500 ₽",
    unit: "за 45 м²",
    description: "Идеальное решение для поддерживающей регулярной уборки",
    features: [
      "Влажная уборка полов",
      "Удаление пыли с доступных поверхностей",
      "Уборка санузла",
      "Уборка кухонной зоны",
      "Вынос мусора"
    ],
    popular: false
  },
  {
    name: "Генеральная уборка",
    price: "5900 ₽",
    unit: "за 45 м²",
    description: "Комплексная уборка всех поверхностей, включая труднодоступные места",
    features: [
      "Влажная уборка полов и плинтусов",
      "Удаление пыли со всех поверхностей",
      "Мытье окон (2 шт)",
      "Чистка сантехники и кафеля",
      "Уборка кухонной техники снаружи",
      "Вынос мусора"
    ],
    popular: true
  },
  {
    name: "Премиум уборка",
    price: "8500 ₽",
    unit: "за 45 м²",
    description: "Максимально глубокая уборка с использованием профессионального оборудования",
    features: [
      "Влажная уборка всех поверхностей",
      "Удаление пыли везде, включая труднодоступные места",
      "Мытье окон (все)",
      "Чистка сантехники и кафеля с дезинфекцией",
      "Уборка кухонной техники внутри и снаружи",
      "Химчистка мягкой мебели",
      "Вынос мусора"
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="section bg-brand-beige/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Цены на услуги</h2>
          <p className="text-lg text-brand-gray/80 max-w-2xl mx-auto">
            Выберите подходящий вариант уборки для вашего пространства
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {pricingData.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl overflow-hidden animate-fade-in ${
                plan.popular 
                  ? "border-2 border-brand-green shadow-lg" 
                  : "border border-brand-beige/50"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="bg-brand-green text-white text-center py-2">
                  <span className="text-sm font-medium">Самый популярный</span>
                </div>
              )}
              <div className="p-6 md:p-8 bg-white">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                  <span className="text-brand-gray/70 pb-1">{plan.unit}</span>
                </div>
                <p className="text-brand-gray/80 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-green/20 flex items-center justify-center">
                        <Check size={12} className="text-brand-green" />
                      </span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className={
                  plan.popular ? "btn-primary w-full" : "btn-secondary w-full"
                }>
                  Заказать
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-brand-gray/70 mb-4">Нужна индивидуальная оценка?</p>
          <Button className="btn-secondary">Получить расчет стоимости</Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
