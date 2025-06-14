
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
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import CTAForm from "@/components/CTAForm";

// B2B Calculator Types
type ServiceCategory = 'regular' | 'general' | 'renovation' | 'machine' | 'windows' | 'special';
type SpecialService = 'dust_removal' | 'floor_cleaning' | 'stain_removal' | 'height_work' | 'emergency_cleanup';
type PropertyType = 'office' | 'warehouse' | 'retail' | 'production' | 'medical' | 'restaurant' | 'business_center' | 'educational' | 'parking' | 'stairs';

interface PriceRange {
  min: number;
  max: number;
}

interface RateInfo {
  office: PriceRange | null;
  warehouse: PriceRange | null;
  retail: PriceRange | null;
  production: PriceRange | null;
  medical: PriceRange | null;
  restaurant: PriceRange | null;
  business_center: PriceRange | null;
  educational: PriceRange | null;
  parking: PriceRange | null;
  stairs: PriceRange | null;
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

        <div className="max-w-2xl mx-auto">
          <BusinessCalculator />
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-brand-gray/70 max-w-xl mx-auto">
            Финальная цена формируется после осмотра объекта. Свяжитесь с нашим менеджером для точного расчета.
          </p>
        </div>
      </div>
    </section>;
};

const BusinessCalculator = () => {
  const [serviceCategory, setServiceCategory] = useState<ServiceCategory>('regular');
  const [specialService, setSpecialService] = useState<SpecialService>('dust_removal');
  const [propertyType, setPropertyType] = useState<PropertyType>('office');
  const [area, setArea] = useState<number>(100);
  const [priceRange, setPriceRange] = useState<PriceRange | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Тарифы для разных категорий услуг и типов помещений (₽/м²)
  const rates: Record<ServiceCategory, RateInfo> = {
    regular: {
      office: { min: 60, max: 80 },
      warehouse: { min: 40, max: 60 },
      retail: { min: 70, max: 90 },
      production: { min: 50, max: 70 },
      medical: { min: 80, max: 100 },
      restaurant: { min: 70, max: 90 },
      business_center: { min: 60, max: 80 },
      educational: { min: 60, max: 80 },
      parking: null,
      stairs: { min: 40, max: 60 }
    },
    general: {
      office: { min: 90, max: 120 },
      warehouse: { min: 70, max: 90 },
      retail: { min: 100, max: 130 },
      production: { min: 80, max: 110 },
      medical: { min: 120, max: 150 },
      restaurant: { min: 100, max: 140 },
      business_center: { min: 90, max: 120 },
      educational: { min: 90, max: 120 },
      parking: { min: 50, max: 80 },
      stairs: { min: 70, max: 90 }
    },
    renovation: {
      office: { min: 130, max: 160 },
      warehouse: { min: 90, max: 120 },
      retail: { min: 130, max: 160 },
      production: { min: 120, max: 160 },
      medical: { min: 150, max: 180 },
      restaurant: { min: 140, max: 170 },
      business_center: { min: 130, max: 160 },
      educational: { min: 120, max: 150 },
      parking: { min: 80, max: 110 },
      stairs: { min: 100, max: 130 }
    },
    machine: {
      office: { min: 40, max: 60 },
      warehouse: { min: 30, max: 50 },
      retail: { min: 50, max: 70 },
      production: { min: 35, max: 60 },
      medical: { min: 50, max: 70 },
      restaurant: { min: 45, max: 65 },
      business_center: { min: 40, max: 60 },
      educational: { min: 35, max: 55 },
      parking: { min: 25, max: 40 },
      stairs: null
    },
    windows: {
      office: { min: 125, max: 125 },
      warehouse: { min: 100, max: 100 },
      retail: { min: 135, max: 135 },
      production: { min: 115, max: 115 },
      medical: { min: 150, max: 150 },
      restaurant: { min: 140, max: 140 },
      business_center: { min: 125, max: 125 },
      educational: { min: 110, max: 110 },
      parking: { min: 80, max: 80 },
      stairs: null
    },
    special: {
      office: { min: 200, max: 250 },
      warehouse: { min: 180, max: 220 },
      retail: { min: 190, max: 240 },
      production: { min: 220, max: 280 },
      medical: { min: 250, max: 300 },
      restaurant: { min: 240, max: 290 },
      business_center: { min: 200, max: 250 },
      educational: { min: 180, max: 230 },
      parking: { min: 150, max: 200 },
      stairs: { min: 170, max: 220 }
    }
  };

  // Названия услуг на русском
  const serviceNames: Record<ServiceCategory, string> = {
    regular: 'Регулярная уборка',
    general: 'Генеральная уборка',
    renovation: 'Уборка после ремонта',
    machine: 'Машинная уборка полов',
    windows: 'Мытьё фасадов и окон',
    special: 'Специальные работы'
  };

  // Названия специальных услуг
  const specialServiceNames: Record<SpecialService, string> = {
    dust_removal: 'Удаление строительной пыли',
    floor_cleaning: 'Очистка наливных полов и топпинга',
    stain_removal: 'Удаление стойких загрязнений',
    height_work: 'Работа на высоте / труднодоступные зоны',
    emergency_cleanup: 'Уборка после ЧС (затопления, возгорания)'
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
    if (!rate) {
      setPriceRange(null);
      return;
    }

    const minPrice = rate.min * area;
    const maxPrice = rate.max * area;
    setPriceRange({ min: minPrice, max: maxPrice });
  };

  const handleCalculateClick = () => {
    calculatePrice();
    setIsDialogOpen(true);
  };

  const handleFormSuccess = () => {
    setIsDialogOpen(false);
  };

  const isServiceAvailable = (service: ServiceCategory, property: PropertyType) => {
    return rates[service][property] !== null;
  };

  const renderSpecialServiceSelect = () => {
    if (serviceCategory !== 'special') return null;

    return (
      <div className="space-y-3">
        <Label htmlFor="specialService">Вид специальных работ</Label>
        <Select value={specialService} onValueChange={(value: SpecialService) => setSpecialService(value)}>
          <SelectTrigger id="specialService">
            <SelectValue placeholder="Выберите вид работ" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(specialServiceNames).map(([key, name]) => (
              <SelectItem key={key} value={key}>
                {name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  };

  return <Card className="shadow-md rounded-2xl">
      <CardHeader className="bg-brand-green/10 rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Калькулятор</CardTitle>
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
            <RadioGroup value={propertyType} onValueChange={(value: PropertyType) => setPropertyType(value)} className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
            <div className="space-y-2">
              {Object.entries(serviceNames).map(([key, name]) => {
                const available = isServiceAvailable(key as ServiceCategory, propertyType);
                const isSelected = serviceCategory === key;
                return (
                  <div 
                    key={key} 
                    className={`p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      isSelected 
                        ? 'bg-brand-green text-white border-brand-green' 
                        : available 
                          ? 'bg-white border-gray-200 hover:border-brand-green/50 hover:bg-brand-green/5' 
                          : 'bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                    onClick={() => available && setServiceCategory(key as ServiceCategory)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{name}</span>
                      {isSelected && <span className="text-sm">✓</span>}
                      {!available && <span className="text-xs">(недоступно)</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {renderSpecialServiceSelect()}

          <div className="space-y-2">
            <Label htmlFor="area">Площадь помещения (м²)</Label>
            <Input 
              id="area" 
              type="number" 
              min="10" 
              value={area} 
              onChange={e => setArea(Number(e.target.value))} 
            />
          </div>

          {rates[serviceCategory][propertyType] && (
            <div className="mt-4 p-4 bg-brand-beige/10 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm">
                  Тариф: <span className="font-medium">
                    {rates[serviceCategory][propertyType]!.min === rates[serviceCategory][propertyType]!.max 
                      ? `${rates[serviceCategory][propertyType]!.min} ₽/м²`
                      : `${rates[serviceCategory][propertyType]!.min}–${rates[serviceCategory][propertyType]!.max} ₽/м²`
                    }
                  </span>
                </span>
              </div>
            </div>
          )}

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={handleCalculateClick} className="btn-primary w-full mt-6">
                Рассчитать стоимость
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Расчет стоимости уборки</DialogTitle>
                <DialogDescription>
                  {priceRange ? (
                    <div className="mt-4 p-4 bg-brand-green/10 rounded-lg text-center">
                      <p className="text-lg font-semibold">
                        Примерная стоимость: {priceRange.min === priceRange.max 
                          ? `от ${priceRange.min.toLocaleString()} ₽`
                          : `${priceRange.min.toLocaleString()}–${priceRange.max.toLocaleString()} ₽`
                        }
                      </p>
                      <p className="text-sm text-brand-gray/80 mt-2">
                        Для получения точной стоимости оставьте заявку
                      </p>
                    </div>
                  ) : (
                    <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-center">
                      <p className="text-sm text-yellow-800">
                        Данная услуга не применима для выбранного типа помещения
                      </p>
                    </div>
                  )}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6">
                <CTAForm onSuccess={handleFormSuccess} />
              </div>
            </DialogContent>
          </Dialog>

          {!rates[serviceCategory][propertyType] && (
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-center">
              <p className="text-sm text-yellow-800">
                Данная услуга не применима для выбранного типа помещения
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>;
};

export default UnifiedCalculator;
