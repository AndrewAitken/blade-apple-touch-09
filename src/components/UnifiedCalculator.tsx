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

// B2B Calculator Types
type ServiceCategory = 'regular' | 'general' | 'renovation' | 'machine' | 'windows' | 'disinfection' | 'chemistry' | 'special';
type PropertyType = 'office' | 'warehouse' | 'retail' | 'production' | 'medical' | 'restaurant' | 'business_center' | 'educational' | 'parking' | 'stairs';

interface RateInfo {
  office: number;
  warehouse: number;
  retail: number;
  production: number;
  medical: number;
  restaurant: number;
  business_center: number;
  educational: number;
  parking: number;
  stairs: number;
}

const UnifiedCalculator = () => {
  return (
    <section id="calculator" className="section bg-white py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Рассчитайте стоимость уборки</h2>
          <p className="text-lg text-brand-gray/80 max-w-2xl mx-auto">
            Используйте наш онлайн-калькулятор для быстрого расчета приблизительной стоимости клининговых услуг
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <BusinessCalculator />
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-brand-gray/70 max-w-xl mx-auto">
            Финальная цена формируется после осмотра объекта. Свяжитесь с нашим менеджером для точного расчета.
          </p>
        </div>
      </div>
    </section>
  );
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
      office: 70,
      warehouse: 50,
      retail: 80,
      production: 60,
      medical: 90,
      restaurant: 80,
      business_center: 70,
      educational: 70,
      parking: 0, // не применимо
      stairs: 50
    },
    general: {
      office: 105,
      warehouse: 80,
      retail: 115,
      production: 95,
      medical: 135,
      restaurant: 120,
      business_center: 105,
      educational: 105,
      parking: 65,
      stairs: 80
    },
    renovation: {
      office: 145,
      warehouse: 105,
      retail: 145,
      production: 140,
      medical: 165,
      restaurant: 155,
      business_center: 145,
      educational: 135,
      parking: 95,
      stairs: 115
    },
    machine: {
      office: 50,
      warehouse: 40,
      retail: 60,
      production: 47,
      medical: 60,
      restaurant: 55,
      business_center: 50,
      educational: 45,
      parking: 32,
      stairs: 0 // не применимо
    },
    windows: {
      office: 125,
      warehouse: 100,
      retail: 135,
      production: 115,
      medical: 150,
      restaurant: 140,
      business_center: 125,
      educational: 110,
      parking: 80,
      stairs: 0 // не применимо
    },
    disinfection: {
      office: 40,
      warehouse: 35,
      retail: 45,
      production: 50,
      medical: 100,
      restaurant: 80,
      business_center: 40,
      educational: 55,
      parking: 40,
      stairs: 50
    },
    chemistry: {
      office: 150,
      warehouse: 120,
      retail: 140,
      production: 130,
      medical: 180,
      restaurant: 160,
      business_center: 150,
      educational: 140,
      parking: 100,
      stairs: 120
    },
    special: {
      office: 200,
      warehouse: 180,
      retail: 190,
      production: 220,
      medical: 250,
      restaurant: 240,
      business_center: 200,
      educational: 180,
      parking: 150,
      stairs: 170
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
    chemistry: 'Химчистка',
    special: 'Специальные работы'
  };

  // Названия типов помещений на русском
  const propertyNames: Record<PropertyType, string> = {
    office: 'Офисные помещения',
    warehouse: 'Складские комплексы',
    retail: 'Торговые площади / ТЦ',
    production: 'Производственные помещения / цеха',
    medical: 'Медицинские учреждения',
    restaurant: 'Кафе и рестораны',
    business_center: 'Бизнес-центры',
    educational: 'Образовательные учреждения',
    parking: 'Паркинги и автостоянки',
    stairs: 'Лестничные пролёты / подъезды'
  };

  const calculatePrice = () => {
    const rate = rates[serviceCategory][propertyType];
    
    if (rate === 0) {
      setPrice(null);
      return;
    }
    
    if (serviceCategory === 'windows' || serviceCategory === 'special') {
      const calculatedPrice = rate * quantity;
      setPrice(calculatedPrice);
    } else {
      const calculatedPrice = rate * area;
      setPrice(calculatedPrice);
    }
  };

  // Определение параметра ввода в зависимости от услуги
  const renderInputField = () => {
    if (serviceCategory === 'windows') {
      return (
        <div className="space-y-2">
          <Label htmlFor="quantity">Площадь окон/фасадов (м²)</Label>
          <Input id="quantity" type="number" min="1" value={area} onChange={(e) => setArea(Number(e.target.value))} />
        </div>
      );
    }
    if (serviceCategory === 'special') {
      return (
        <div className="space-y-2">
          <Label htmlFor="quantity">Количество часов</Label>
          <Input id="quantity" type="number" min="1" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
        </div>
      );
    }
    return (
      <div className="space-y-2">
        <Label htmlFor="area">Площадь помещения (м²)</Label>
        <Input id="area" type="number" min="10" value={area} onChange={(e) => setArea(Number(e.target.value))} />
      </div>
    );
  };

  const isServiceAvailable = (service: ServiceCategory, property: PropertyType) => {
    return rates[service][property] > 0;
  };

  return (
    <Card className="shadow-md rounded-2xl">
      <CardHeader className="bg-brand-green/10 rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Калькулятор стоимости уборки</CardTitle>
            <CardDescription>Расчет для коммерческих объектов</CardDescription>
          </div>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
            <Calculator size={20} className="text-brand-green" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div className="space-y-3">
            <Label>Тип помещения</Label>
            <RadioGroup 
              value={propertyType} 
              onValueChange={(value: PropertyType) => setPropertyType(value)} 
              className="grid grid-cols-1 md:grid-cols-2 gap-2"
            >
              {Object.entries(propertyNames).map(([key, name]) => (
                <div key={key} className="flex items-center space-x-2">
                  <RadioGroupItem value={key} id={`property-${key}`} />
                  <Label htmlFor={`property-${key}`} className="cursor-pointer text-sm">{name}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label htmlFor="serviceCategory">Категория услуги</Label>
            <Select value={serviceCategory} onValueChange={(value: ServiceCategory) => setServiceCategory(value)}>
              <SelectTrigger id="serviceCategory">
                <SelectValue placeholder="Выберите категорию" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(serviceNames).map(([key, name]) => {
                  const available = isServiceAvailable(key as ServiceCategory, propertyType);
                  return (
                    <SelectItem 
                      key={key} 
                      value={key}
                      disabled={!available}
                    >
                      {name} {!available && '(недоступно)'}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>

          {renderInputField()}

          {rates[serviceCategory][propertyType] > 0 && (
            <div className="mt-4 p-4 bg-brand-beige/10 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm">
                  Тариф: <span className="font-medium">{rates[serviceCategory][propertyType]} ₽/м²</span>
                </span>
              </div>
            </div>
          )}

          <Button onClick={calculatePrice} className="btn-primary w-full mt-6">
            Рассчитать стоимость
          </Button>

          {price !== null && (
            <div className="mt-6 p-4 bg-brand-green/10 rounded-lg text-center animate-fade-in">
              <p className="text-lg font-semibold">Примерная стоимость: от {price.toLocaleString()} ₽</p>
              <p className="text-sm text-brand-gray/80 mt-2">
                Для получения точной стоимости и специальных условий свяжитесь с менеджером
              </p>
            </div>
          )}

          {rates[serviceCategory][propertyType] === 0 && (
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-center">
              <p className="text-sm text-yellow-800">
                Данная услуга не применима для выбранного типа помещения
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default UnifiedCalculator;
