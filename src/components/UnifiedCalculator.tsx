import React from "react";
import { Calculator } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

// B2C Calculator Types
type CleaningType = 'regular' | 'general' | 'renovation' | 'moving';

// B2B Calculator Types 
type ServiceCategory = 'regular' | 'general' | 'renovation' | 'machine' | 'windows' | 'disinfection' | 'special';
type PropertyType = 'office' | 'restaurant' | 'warehouse' | 'retail' | 'medical' | 'educational';
interface RateInfo {
  office: number;
  restaurant: number;
  warehouse: number;
  retail: number;
  medical: number;
  educational: number;
}
const UnifiedCalculator = () => {
  return <section id="calculator" className="section bg-white py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Рассчитайте стоимость уборки</h2>
          <p className="text-lg text-brand-gray/80 max-w-2xl mx-auto">
            Используйте наш онлайн-калькулятор для быстрого расчета приблизительной стоимости клининговых услуг
          </p>
        </div>

        <Tabs defaultValue="home" className="max-w-2xl mx-auto">
          <TabsList className="grid grid-cols-2 mb-8 w-full py-0 h-12 rounded-2xl bg-neutral-100">
            <TabsTrigger value="home" className="text-base py-[8px] rounded-xl">Для дома</TabsTrigger>
            <TabsTrigger value="business" className="text-base py-[8px] rounded-xl">Для бизнеса</TabsTrigger>
          </TabsList>
          
          <TabsContent value="home">
            <HomeCalculator />
          </TabsContent>
          
          <TabsContent value="business">
            <BusinessCalculator />
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <p className="text-sm text-brand-gray/70 max-w-xl mx-auto">
            Для получения точной стоимости рекомендуем заказать бесплатный выезд специалиста или связаться с нашим менеджером
          </p>
        </div>
      </div>
    </section>;
};
const HomeCalculator = () => {
  const [objectType, setObjectType] = useState("apartment");
  const [cleaningType, setCleaningType] = useState<CleaningType>("regular");
  const [area, setArea] = useState(40);
  const [windows, setWindows] = useState(0);
  const [balcony, setBalcony] = useState(false);
  const [sofas, setSofas] = useState(0);
  const [armchairs, setArmchairs] = useState(0);
  const [price, setPrice] = useState<number | "individual" | null>(null);

  // Базовые цены и шаги увеличения по типам уборки
  const cleaningBaseRates = {
    regular: {
      base: 2500,
      step: 1000
    },
    general: {
      base: 5000,
      step: 2000
    },
    renovation: {
      base: 7000,
      step: 2000
    },
    moving: {
      base: 4500,
      step: 2000
    }
  };

  // Названия типов уборки
  const cleaningTypeNames = {
    regular: "Поддерживающая",
    general: "Генеральная",
    renovation: "После ремонта",
    moving: "При переезде"
  };
  const calculatePrice = () => {
    // Если площадь больше 100 м², возвращаем "индивидуально"
    if (area > 100) {
      setPrice("individual");
      return;
    }

    // Получаем базовую цену в зависимости от типа уборки
    const {
      base,
      step
    } = cleaningBaseRates[cleaningType];

    // Рассчитываем надбавку за площадь
    let areaPrice = base;
    if (area > 40) {
      const extraArea = Math.ceil((area - 40) / 20);
      areaPrice += extraArea * step;
    }

    // Добавляем стоимость дополнительных услуг
    const windowsPrice = windows * 500;
    const balconyPrice = balcony ? 1500 : 0;
    const sofasPrice = sofas * 2500;
    const armchairsPrice = armchairs * 1500;

    // Итоговая стоимость
    const totalPrice = areaPrice + windowsPrice + balconyPrice + sofasPrice + armchairsPrice;
    setPrice(totalPrice);
  };

  // Функции для изменения количества
  const incrementWindows = () => setWindows(prev => prev + 1);
  const decrementWindows = () => setWindows(prev => prev > 0 ? prev - 1 : 0);
  const incrementSofas = () => setSofas(prev => prev + 1);
  const decrementSofas = () => setSofas(prev => prev > 0 ? prev - 1 : 0);
  const incrementArmchairs = () => setArmchairs(prev => prev + 1);
  const decrementArmchairs = () => setArmchairs(prev => prev > 0 ? prev - 1 : 0);
  return <Card className="shadow-md rounded-2xl">
      <CardHeader className="bg-brand-beige/10 rounded-xl">
        <CardTitle>Калькулятор для дома</CardTitle>
        <CardDescription>Расчет стоимости для частных клиентов</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="cleaningType">Тип уборки</Label>
              <Select value={cleaningType} onValueChange={(value: CleaningType) => setCleaningType(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите тип уборки" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(cleaningTypeNames).map(([key, name]) => <SelectItem key={key} value={key}>{name}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="balcony">Балкон/лоджия (+1500 руб.)</Label>
              <Select value={balcony ? "yes" : "no"} onValueChange={value => setBalcony(value === "yes")}>
                <SelectTrigger>
                  <SelectValue placeholder="Наличие балкона" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="no">Нет</SelectItem>
                  <SelectItem value="yes">Да</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label>Площадь помещения: {area} м²</Label>
              {area > 100 && <span className="text-xs text-red-500">Свыше 100 м² - индивидуальный расчёт</span>}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm">20 м²</span>
              <Slider value={[area]} min={20} max={100} step={1} onValueChange={values => setArea(values[0])} className="flex-1" />
              <span className="text-sm">100 м²</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label>Количество окон: {windows}</Label>
              <div className="flex">
                <Button type="button" variant="outline" onClick={decrementWindows} className="rounded-r-none">
                  -
                </Button>
                <Input type="number" value={windows} onChange={e => setWindows(Number(e.target.value))} min={0} className="rounded-none text-center w-full" />
                <Button type="button" variant="outline" onClick={incrementWindows} className="rounded-l-none">
                  +
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">+500 руб. за окно</p>
            </div>

            <div className="space-y-2">
              <Label>Количество диванов: {sofas}</Label>
              <div className="flex">
                <Button type="button" variant="outline" onClick={decrementSofas} className="rounded-r-none">
                  -
                </Button>
                <Input type="number" value={sofas} onChange={e => setSofas(Number(e.target.value))} min={0} className="rounded-none text-center w-full" />
                <Button type="button" variant="outline" onClick={incrementSofas} className="rounded-l-none">
                  +
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">+2500 руб. за диван</p>
            </div>

            <div className="space-y-2">
              <Label>Количество кресел: {armchairs}</Label>
              <div className="flex">
                <Button type="button" variant="outline" onClick={decrementArmchairs} className="rounded-r-none">
                  -
                </Button>
                <Input type="number" value={armchairs} onChange={e => setArmchairs(Number(e.target.value))} min={0} className="rounded-none text-center w-full" />
                <Button type="button" variant="outline" onClick={incrementArmchairs} className="rounded-l-none">
                  +
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">+1500 руб. за кресло</p>
            </div>
          </div>

          <Button onClick={calculatePrice} className="btn-primary w-full mt-6 rounded-xl py-0 h-12 text-base">
            Рассчитать стоимость
          </Button>

          {price && <div className="mt-6 p-4 bg-brand-beige/20 rounded-lg text-center animate-fade-in">
              {price === "individual" ? <p className="text-lg font-semibold">
                  Требуется индивидуальный расчет
                  <span className="block text-sm text-brand-gray/80 mt-2">
                    Позвоните нам для получения точной стоимости
                  </span>
                </p> : <p className="text-lg font-semibold">
                  Стоимость: {price.toLocaleString()} руб.
                  <span className="block text-sm text-brand-gray/80 mt-2">
                    Окончательная цена может отличаться после осмотра объекта
                  </span>
                </p>}
            </div>}
        </div>
      </CardContent>
    </Card>;
};
const BusinessCalculator = () => {
  const [serviceCategory, setServiceCategory] = useState<ServiceCategory>('regular');
  const [propertyType, setPropertyType] = useState<PropertyType>('office');
  const [area, setArea] = useState<number>(100);
  const [quantity, setQuantity] = useState<number>(1);
  const [price, setPrice] = useState<number | null>(null);

  // Тарифы для разных категорий услуг и типов помещений (₽/м²)
  const rates: Record<ServiceCategory, RateInfo> = {
    regular: {
      office: 60,
      restaurant: 70,
      warehouse: 45,
      retail: 65,
      medical: 80,
      educational: 55
    },
    general: {
      office: 90,
      restaurant: 110,
      warehouse: 70,
      retail: 95,
      medical: 120,
      educational: 85
    },
    renovation: {
      office: 120,
      restaurant: 150,
      warehouse: 90,
      retail: 130,
      medical: 160,
      educational: 110
    },
    machine: {
      office: 40,
      restaurant: 50,
      warehouse: 35,
      retail: 45,
      medical: 55,
      educational: 40
    },
    windows: {
      office: 400,
      restaurant: 450,
      warehouse: 350,
      retail: 420,
      medical: 500,
      educational: 380
    },
    disinfection: {
      office: 70,
      restaurant: 90,
      warehouse: 60,
      retail: 75,
      medical: 100,
      educational: 80
    },
    special: {
      office: 150,
      restaurant: 180,
      warehouse: 130,
      retail: 160,
      medical: 200,
      educational: 140
    }
  };

  // Названия услуг на русском
  const serviceNames: Record<ServiceCategory, string> = {
    regular: 'Регулярная уборка',
    general: 'Генеральная уборка',
    renovation: 'Уборка после ремонта',
    machine: 'Машинная уборка полов',
    windows: 'Мытьё фасадов и окон',
    disinfection: 'Дезинфекция',
    special: 'Специальные работы'
  };

  // Названия типов помещений на русском
  const propertyNames: Record<PropertyType, string> = {
    office: 'Офисные помещения',
    restaurant: 'Кафе/рестораны',
    warehouse: 'Складские помещения',
    retail: 'Торговые площади',
    medical: 'Медицинские учреждения',
    educational: 'Образовательные учреждения'
  };

  // Единицы измерения для разных категорий услуг
  const serviceUnits: Record<ServiceCategory, string> = {
    regular: 'м²',
    general: 'м²',
    renovation: 'м²',
    machine: 'м²',
    windows: 'окно',
    disinfection: 'м²',
    special: 'час'
  };

  // Параметр ввода в зависимости от единицы измерения
  const inputLabel = serviceCategory === 'windows' ? 'Количество окон' : serviceCategory === 'special' ? 'Количество часов' : 'Площадь (м²)';
  const calculatePrice = () => {
    const rate = rates[serviceCategory][propertyType];
    let calculatedPrice;
    if (serviceCategory === 'windows' || serviceCategory === 'special') {
      calculatedPrice = rate * quantity;
    } else {
      calculatedPrice = rate * area;
    }
    setPrice(calculatedPrice);
  };

  // Определение параметра ввода в зависимости от услуги
  const renderInputField = () => {
    if (serviceCategory === 'windows' || serviceCategory === 'special') {
      return <div className="space-y-2">
          <Label htmlFor="quantity">{inputLabel}</Label>
          <Input id="quantity" type="number" min="1" value={quantity} onChange={e => setQuantity(Number(e.target.value))} />
        </div>;
    }
    return <div className="space-y-2">
        <Label htmlFor="area">{inputLabel}</Label>
        <Input id="area" type="number" min="10" value={area} onChange={e => setArea(Number(e.target.value))} />
      </div>;
  };
  return <Card className="shadow-md rounded-2xl">
      <CardHeader className="bg-brand-green/10 rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Расчет для бизнес-клиентов</CardTitle>
            <CardDescription>B2B калькулятор стоимости</CardDescription>
          </div>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
            <Calculator size={20} className="text-brand-green" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div className="space-y-3">
            <Label htmlFor="serviceCategory">Категория услуги</Label>
            <Select value={serviceCategory} onValueChange={(value: ServiceCategory) => setServiceCategory(value)}>
              <SelectTrigger id="serviceCategory">
                <SelectValue placeholder="Выберите категорию" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(serviceNames).map(([key, name]) => <SelectItem key={key} value={key}>{name}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label>Тип помещения</Label>
            <RadioGroup value={propertyType} onValueChange={(value: PropertyType) => setPropertyType(value)} className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {Object.entries(propertyNames).map(([key, name]) => <div key={key} className="flex items-center space-x-2">
                  <RadioGroupItem value={key} id={`property-${key}`} />
                  <Label htmlFor={`property-${key}`} className="cursor-pointer">{name}</Label>
                </div>)}
            </RadioGroup>
          </div>

          {renderInputField()}

          <div className="mt-4 p-4 bg-brand-beige/10 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm">
                Тариф: <span className="font-medium">{rates[serviceCategory][propertyType]} ₽/{serviceUnits[serviceCategory]}</span>
              </span>
            </div>
          </div>

          <Button onClick={calculatePrice} className="btn-primary w-full mt-6">
            Рассчитать стоимость
          </Button>

          {price !== null && <div className="mt-6 p-4 bg-brand-green/10 rounded-lg text-center animate-fade-in">
              <p className="text-lg font-semibold">Примерная стоимость: от {price.toLocaleString()} ₽</p>
              <p className="text-sm text-brand-gray/80 mt-2">
                Для получения точной стоимости и специальных условий свяжитесь с менеджером
              </p>
            </div>}
        </div>
      </CardContent>
    </Card>;
};
export default UnifiedCalculator;