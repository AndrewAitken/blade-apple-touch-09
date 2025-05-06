import React, { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Shimmer } from "@/components/ui/skeleton";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useIsMobile } from "@/hooks/use-mobile";

type CleaningType = 'regular' | 'general' | 'renovation' | 'moving';

const Pricing = () => {
  const [selectedTab, setSelectedTab] = useState<CleaningType>('regular');
  const isMobile = useIsMobile();

  const regularCleaningData = [
    { area: "до 40", price: "от 2500" },
    { area: "41-60", price: "от 3500" },
    { area: "61-80", price: "от 4500" },
    { area: "81-100", price: "от 5500" },
    { area: "свыше 100", price: "Индивидуально" }
  ];

  const generalCleaningData = [
    { area: "до 40", price: "от 5000" },
    { area: "41-60", price: "от 7000" },
    { area: "61-80", price: "от 9000" },
    { area: "81-100", price: "от 11000" },
    { area: "свыше 100", price: "Индивидуально" }
  ];

  const renovationCleaningData = [
    { area: "до 40", price: "от 7000" },
    { area: "41-60", price: "от 9000" },
    { area: "61-80", price: "от 11000" },
    { area: "81-100", price: "от 13000" },
    { area: "свыше 100", price: "Индивидуально" }
  ];

  const movingCleaningData = [
    { area: "до 40", price: "от 4500" },
    { area: "41-60", price: "от 6500" },
    { area: "61-80", price: "от 8500" },
    { area: "81-100", price: "от 10500" },
    { area: "свыше 100", price: "Индивидуально" }
  ];

  const additionalServices = [
    { service: "Мытье окон (одно окно)", unit: "шт.", price: "от 500", description: "Мойка рамы, стекол (с обеих сторон), подоконника." },
    { service: "Мытье балкона/лоджии (стандарт)", unit: "шт.", price: "от 1500", description: "Мойка рам, стекол (с обеих сторон), пола." },
    { service: "Химчистка ковров/ковролина", unit: "м²", price: "от 500", description: "Химчистка с использованием профессионального оборудования и средств." },
    { service: "Химчистка мягкой мебели (диван)", unit: "шт.", price: "от 2500", description: "Химчистка с использованием профессионального оборудования и средств. Цена зависит от размера и степени загрязнения." },
    { service: "Химчистка мягкой мебели (кресло)", unit: "шт.", price: "от 1500", description: "Химчистка с использованием профессионального оборудования и средств. Цена зависит от размера и степени загрязнения." },
    { service: "Мытье холодильника (внутри)", unit: "шт.", price: "от 1000", description: "Мытье и дезинфекция холодильника." },
    { service: "Мытье духового шкафа (внутри)", unit: "шт.", price: "от 1000", description: "Удаление жира и нагара." },
    { service: "Глажка белья", unit: "кг", price: "от 400", description: "" },
    { service: "Уборка в шкафах (один шкаф)", unit: "шт.", price: "от 800", description: "Сортировка, протирка полок, удаление пыли." },
    { service: "Дезинфекция санузла", unit: "помещение", price: "от 800", description: "Обраб��тка поверхностей дезинфицирующими средствами." },
    { service: "Вынос мусора (большой объем)", unit: "м³", price: "Индивидуально", description: "" }
  ];

  const cleaningTypes = [
    { id: 'regular', name: 'Поддерживающая уборка', description: 'Влажная уборка полов, удаление пыли с поверхностей, вынос мусора, уборка санузла и кухни (легкая).', data: regularCleaningData },
    { id: 'general', name: 'Генеральная уборка', description: 'Поддерживающая уборка + мытье окон (внутри), чистка зеркал и стеклянных поверхностей, чистка сантехники и кухонной плиты, удаление пыли с труднодоступных мест.', data: generalCleaningData },
    { id: 'renovation', name: 'Уборка после ремонта', description: 'Генеральная уборка + удаление строительной пыли, следов краски, клея и других загрязнений.', data: renovationCleaningData },
    { id: 'moving', name: 'Уборка при переезде', description: 'Генеральная уборка (может включать чистку мебели и техники по запросу).', data: movingCleaningData }
  ];

  const getCleaningData = () => {
    const selectedType = cleaningTypes.find(type => type.id === selectedTab);
    return selectedType ? selectedType.data : regularCleaningData;
  };

  const getCleaningDescription = () => {
    const selectedType = cleaningTypes.find(type => type.id === selectedTab);
    return selectedType ? selectedType.description : '';
  };

  return (
    <section id="pricing" className="section bg-brand-beige/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Цены на услуги</h2>
          <p className="text-lg text-brand-gray/80 max-w-2xl mx-auto">
            Выберите подходящий вариант уборки для вашего пространства
          </p>
        </div>

        {/* Переключение между табами и селе��том в зависимости от размера экрана */}
        <div className="mb-8">
          {isMobile ? (
            <div className="w-full max-w-sm mx-auto">
              <Select 
                value={selectedTab}
                onValueChange={(value: CleaningType) => setSelectedTab(value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Выберите тип уборки" />
                </SelectTrigger>
                <SelectContent>
                  {cleaningTypes.map((type) => (
                    <SelectItem key={type.id} value={type.id}>
                      {type.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ) : (
            <Tabs 
              value={selectedTab} 
              onValueChange={(value: CleaningType) => setSelectedTab(value)}
              className="justify-center"
            >
              <TabsList className="w-full md:w-auto grid grid-cols-4 gap-2">
                {cleaningTypes.map((type) => (
                  <TabsTrigger
                    key={type.id}
                    value={type.id as CleaningType}
                    className="px-4 py-2"
                  >
                    {type.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          )}
        </div>

        {/* Описание выбранного типа уборки */}
        <div className="bg-white p-4 rounded-lg mb-8 text-center animate-fade-in">
          <p className="text-brand-gray/80">{getCleaningDescription()}</p>
        </div>

        {/* Таблица цен для выбранного типа уборки */}
        <div className="overflow-hidden bg-white rounded-lg shadow-md mb-12 animate-fade-in">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3">Площадь, м²</TableHead>
                <TableHead className="w-1/3 text-right">Цена (руб.)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {getCleaningData().map((item, index) => (
                <TableRow key={index} className="hover:bg-brand-beige/10">
                  <TableCell className="font-medium">{item.area}</TableCell>
                  <TableCell className="text-right font-semibold text-brand-green">{item.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Заголовок для дополнительных услуг */}
        <div className="text-center mb-8 mt-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Дополнительные услуги</h3>
        </div>

        {/* Таблица дополнительных услуг */}
        <div className="overflow-x-auto bg-white rounded-lg shadow-md mb-12 animate-fade-in">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3">Услуга</TableHead>
                <TableHead className="w-1/6">Ед. измерения</TableHead>
                <TableHead className="w-1/6">Цена (руб.)</TableHead>
                <TableHead className="w-1/3">Описание</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {additionalServices.map((service, index) => (
                <TableRow key={index} className="hover:bg-brand-beige/10">
                  <TableCell className="font-medium">{service.service}</TableCell>
                  <TableCell>{service.unit}</TableCell>
                  <TableCell className="font-semibold text-brand-green">{service.price}</TableCell>
                  <TableCell className="text-sm text-brand-gray/80">{service.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Дополнительная информация */}
        <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-in">
          <h3 className="text-xl font-bold mb-4">Дополнительная информация</h3>
          <ul className="space-y-2 list-disc pl-5">
            <li>Минимальный заказ: 3000 рублей.</li>
            <li>Выезд за пределы города: Оплачивается дополнительно (уточняйте у оператора).</li>
            <li>Использование профессионального оборудования и моющих средств включено в стоимость.</li>
            <li>Сильные загрязнения (застарелый жир, плесень и т.д.) оплачиваются дополнительно.</li>
            <li>Оплата: Наличными, банковской картой, безналичный расчет (для юридических лиц).</li>
            <li>Скидки постоянным клиентам и при больших объемах работ!</li>
            <li>Работаем по Рязани и Рязанской области.</li>
            <li>Стоимость уборки может быть увеличена в зависимости от степени загрязнения помещения.</li>
            <li>Выезд специалиста для оценки стоимости - бесплатно</li>
          </ul>
        </div>
        
        <div className="mt-12 text-center">
          <div className="p-4 inline-block">
            <Shimmer className="inline-block overflow-visible">
              <Button className="btn-primary transition-all duration-300">
                Получить расчет стоимости
              </Button>
            </Shimmer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
