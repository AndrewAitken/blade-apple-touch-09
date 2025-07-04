import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CTAForm from "./CTAForm";

const mainServices = [{
  service: "Регулярная уборка",
  unit: "м²",
  price: "от 50",
  description: "Влажная уборка полов, вынос мусора, пыль с поверхностей, санузлы."
}, {
  service: "Генеральная уборка",
  unit: "м²",
  price: "от 70",
  description: "Углублённая очистка всех поверхностей, мебели, остекления, вентиляции."
}, {
  service: "Уборка после ремонта",
  unit: "м²",
  price: "от 90",
  description: "Удаление строительной пыли, пятен, следов клея, цемента."
}, {
  service: "Машинная уборка полов",
  unit: "м²",
  price: "от 45",
  description: "Поломоечные и роторные машины: топпинг, бетон, плитка."
}, {
  service: "Мойка фасадов и окон",
  unit: "м²",
  price: "от 90",
  description: "Стёкла, фасады, витражи снаружи и внутри. Возможен промышленный альпинизм."
}, {
  service: "Дезинфекция помещений",
  unit: "м² или помещение",
  price: "от 20/м² или 1 000",
  description: "Обработка по СанПиН: бактерии, грибки, вирусы. Распыляемые или контактные растворы."
}, {
  service: "Специальные работы",
  unit: "Индивидуально",
  price: "по запросу",
  description: "Вытяжки, воздуховоды, ангарные зоны, удаление масложировых загрязнений."
}];
const additionalServices = [{
  service: "Мойка стеллажей",
  unit: "м²",
  price: "от 35",
  description: "Сухая и влажная обработка складских конструкций."
}, {
  service: "Очистка наливного/топпинг-пола",
  unit: "м²",
  price: "от 55",
  description: "Удаление стойких загрязнений с упрочнённых покрытий."
}, {
  service: "Очистка холодильных камер",
  unit: "м²",
  price: "от 200",
  description: "Внутренняя и внешняя очистка, санитарная дезинфекция."
}, {
  service: "Химчистка ковров/ковролина",
  unit: "м²",
  price: "от 120",
  description: "Профессиональные машины и химия."
}, {
  service: "Обезжиривание кухонного оборудования",
  unit: "шт.",
  price: "от 1000",
  description: "Для ресторанов, пищевых производств."
}, {
  service: "Мойка лифтов, лестниц",
  unit: "м²",
  price: "от 60",
  description: "Все виды покрытий: от плитки до металла."
}, {
  service: "Очистка вентиляционных решёток",
  unit: "шт.",
  price: "от 200",
  description: "Пыль, жир, налёт."
}];

const Pricing = () => {
  return (
    <section id="pricing" className="section bg-brand-beige/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Цены на услуги</h2>
          <p className="text-lg text-brand-gray/80 max-w-2xl mx-auto">
            Выберите нужный тип уборки и ориентируйтесь на среднюю стоимость (финальная цена формируется после осмотра объекта).
          </p>
        </div>

        <Accordion type="multiple" className="space-y-6" defaultValue={["main-services", "additional-services"]}>
          {/* Основные услуги */}
          <AccordionItem value="main-services" className="bg-white rounded-2xl shadow-lg border-0">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <h3 className="text-xl md:text-2xl font-bold text-left">Типовые клининговые услуги для коммерческих объектов</h3>
            </AccordionTrigger>
            <AccordionContent className="px-0 pb-0">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[240px]">
                  <thead className="bg-brand-green text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Услуга</th>
                      <th className="px-6 py-4 text-center">Ед. измерения</th>
                      <th className="px-6 py-4 text-center">Цена (руб.)</th>
                      <th className="px-6 py-4 text-left">Описание</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mainServices.map((item, index) => <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="px-6 py-4 font-semibold">{item.service}</td>
                        <td className="px-6 py-4 text-center">{item.unit}</td>
                        <td className="px-6 py-4 text-center font-bold text-brand-green">{item.price}</td>
                        <td className="px-6 py-4 text-sm text-brand-gray/80">{item.description}</td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Дополнительные услуги */}
          <AccordionItem value="additional-services" className="bg-white rounded-2xl shadow-lg border-0">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <h3 className="text-xl md:text-2xl font-bold text-left">Дополнительные услуги</h3>
            </AccordionTrigger>
            <AccordionContent className="px-0 pb-0">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[240px]">
                  <thead className="bg-brand-green text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Услуга</th>
                      <th className="px-6 py-4 text-center">Ед. измерения</th>
                      <th className="px-6 py-4 text-center">Цена (руб.)</th>
                      <th className="px-6 py-4 text-left">Описание</th>
                    </tr>
                  </thead>
                  <tbody>
                    {additionalServices.map((item, index) => <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="px-6 py-4 font-semibold">{item.service}</td>
                        <td className="px-6 py-4 text-center">{item.unit}</td>
                        <td className="px-6 py-4 text-center font-bold text-brand-green">{item.price}</td>
                        <td className="px-6 py-4 text-sm text-brand-gray/80">{item.description}</td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Pricing;
