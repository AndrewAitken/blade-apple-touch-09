
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calculator } from "lucide-react";

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

const B2BCalculator = () => {
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
  const inputLabel = 
    serviceCategory === 'windows' ? 'Количество окон' : 
    serviceCategory === 'special' ? 'Количество часов' : 
    'Площадь (м²)';

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
      return (
        <div className="space-y-2">
          <Label htmlFor="quantity">{inputLabel}</Label>
          <Input 
            id="quantity" 
            type="number" 
            min="1" 
            value={quantity} 
            onChange={(e) => setQuantity(Number(e.target.value))} 
          />
        </div>
      );
    }
    
    return (
      <div className="space-y-2">
        <Label htmlFor="area">{inputLabel}</Label>
        <Input 
          id="area" 
          type="number" 
          min="10" 
          value={area} 
          onChange={(e) => setArea(Number(e.target.value))} 
        />
      </div>
    );
  };

  return (
    <section id="b2b-calculator" className="section bg-brand-beige/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Калькулятор для бизнеса</h2>
          <p className="text-lg text-brand-gray/80 max-w-2xl mx-auto">
            Рассчитайте стоимость клининговых услуг для вашего коммерческого объекта
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-md">
          <CardHeader className="bg-brand-green/10">
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
                    {Object.entries(serviceNames).map(([key, name]) => (
                      <SelectItem key={key} value={key}>{name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

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
                      <Label htmlFor={`property-${key}`} className="cursor-pointer">{name}</Label>
                    </div>
                  ))}
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

              <Button 
                onClick={calculatePrice} 
                className="btn-primary w-full mt-6"
              >
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
            </div>
          </CardContent>
        </Card>

        <div className="mt-10 p-6 bg-white rounded-lg shadow-sm max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-4">Преимущества для бизнес-клиентов</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 bg-brand-green rounded-full"></span>
              <span>Индивидуальный подход к каждому объекту</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 bg-brand-green rounded-full"></span>
              <span>Гибкие условия сотрудничества</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 bg-brand-green rounded-full"></span>
              <span>Возможность заключения долгосрочных контрактов</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 bg-brand-green rounded-full"></span>
              <span>Профессиональное оборудование и сертифицированные средства</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 bg-brand-green rounded-full"></span>
              <span>Подтверждение качества актами выполненных работ</span>
            </li>
          </ul>
          <div className="mt-6 text-center">
            <Button variant="outline" className="hover:bg-brand-beige/20">
              Получить коммерческое предложение
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BCalculator;
