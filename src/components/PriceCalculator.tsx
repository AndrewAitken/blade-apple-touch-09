
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

const PriceCalculator = () => {
  const [objectType, setObjectType] = useState("apartment");
  const [cleaningType, setCleaningType] = useState("regular");
  const [area, setArea] = useState(40);
  const [windows, setWindows] = useState(0);
  const [balcony, setBalcony] = useState(false);
  const [sofas, setSofas] = useState(0);
  const [armchairs, setArmchairs] = useState(0);
  const [price, setPrice] = useState(null);

  // Базовые цены и шаги увеличения по типам уборки
  const cleaningBaseRates = {
    regular: { base: 2500, step: 1000 },
    general: { base: 5000, step: 2000 },
    renovation: { base: 7000, step: 2000 },
    moving: { base: 4500, step: 2000 }
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
    const { base, step } = cleaningBaseRates[cleaningType];
    
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
  const decrementWindows = () => setWindows(prev => (prev > 0 ? prev - 1 : 0));
  
  const incrementSofas = () => setSofas(prev => prev + 1);
  const decrementSofas = () => setSofas(prev => (prev > 0 ? prev - 1 : 0));
  
  const incrementArmchairs = () => setArmchairs(prev => prev + 1);
  const decrementArmchairs = () => setArmchairs(prev => (prev > 0 ? prev - 1 : 0));

  return (
    <section id="calculator" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Рассчитайте стоимость уборки</h2>
          <p className="text-lg text-brand-gray/80 max-w-2xl mx-auto">
            Используйте наш онлайн-калькулятор для быстрого расчета приблизительной стоимости клининговых услуг для дома
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-md">
          <CardHeader className="bg-brand-beige/10">
            <CardTitle>Калькулятор для дома</CardTitle>
            <CardDescription>Расчет стоимости для частных клиентов</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="cleaningType">Тип уборки</Label>
                  <Select value={cleaningType} onValueChange={setCleaningType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип уборки" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(cleaningTypeNames).map(([key, name]) => (
                        <SelectItem key={key} value={key}>{name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="balcony">Балкон/лоджия (+1500 руб.)</Label>
                  <Select 
                    value={balcony ? "yes" : "no"}
                    onValueChange={(value) => setBalcony(value === "yes")}
                  >
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
                  {area > 100 && (
                    <span className="text-xs text-red-500">Свыше 100 м² - индивидуальный расчёт</span>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm">20 м²</span>
                  <Slider 
                    value={[area]} 
                    min={20} 
                    max={100} 
                    step={1} 
                    onValueChange={(values) => setArea(values[0])} 
                    className="flex-1"
                  />
                  <span className="text-sm">100 м²</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label>Количество окон: {windows}</Label>
                  <div className="flex">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={decrementWindows}
                      className="rounded-r-none"
                    >
                      -
                    </Button>
                    <Input 
                      type="number" 
                      value={windows} 
                      onChange={(e) => setWindows(Number(e.target.value))}
                      min={0}
                      className="rounded-none text-center w-full"
                    />
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={incrementWindows}
                      className="rounded-l-none"
                    >
                      +
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">+500 руб. за окно</p>
                </div>

                <div className="space-y-2">
                  <Label>Количество диванов: {sofas}</Label>
                  <div className="flex">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={decrementSofas}
                      className="rounded-r-none"
                    >
                      -
                    </Button>
                    <Input 
                      type="number" 
                      value={sofas} 
                      onChange={(e) => setSofas(Number(e.target.value))}
                      min={0}
                      className="rounded-none text-center w-full"
                    />
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={incrementSofas}
                      className="rounded-l-none"
                    >
                      +
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">+2500 руб. за диван</p>
                </div>

                <div className="space-y-2">
                  <Label>Количество кресел: {armchairs}</Label>
                  <div className="flex">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={decrementArmchairs}
                      className="rounded-r-none"
                    >
                      -
                    </Button>
                    <Input 
                      type="number" 
                      value={armchairs} 
                      onChange={(e) => setArmchairs(Number(e.target.value))}
                      min={0}
                      className="rounded-none text-center w-full"
                    />
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={incrementArmchairs}
                      className="rounded-l-none"
                    >
                      +
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">+1500 руб. за кресло</p>
                </div>
              </div>

              <Button 
                onClick={calculatePrice} 
                className="btn-primary w-full mt-6"
              >
                Рассчитать стоимость
              </Button>

              {price && (
                <div className="mt-6 p-4 bg-brand-beige/20 rounded-lg text-center animate-fade-in">
                  {price === "individual" ? (
                    <p className="text-lg font-semibold">
                      Требуется индивидуальный расчет
                      <span className="block text-sm text-brand-gray/80 mt-2">
                        Позвоните нам для получения точной стоимости
                      </span>
                    </p>
                  ) : (
                    <p className="text-lg font-semibold">
                      Стоимость: {price.toLocaleString()} руб.
                      <span className="block text-sm text-brand-gray/80 mt-2">
                        Окончательная цена может отличаться после осмотра объекта
                      </span>
                    </p>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-sm text-brand-gray/70 max-w-xl mx-auto">
            Для получения точной стоимости рекомендуем заказать бесплатный выезд специалиста или связаться с нашим менеджером
          </p>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;
