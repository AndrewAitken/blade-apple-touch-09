
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PriceCalculator = () => {
  const [objectType, setObjectType] = useState("apartment");
  const [area, setArea] = useState(50);
  const [windows, setWindows] = useState(false);
  const [furniture, setFurniture] = useState(false);
  const [postRepair, setPostRepair] = useState(false);
  const [urgent, setUrgent] = useState(false);
  const [price, setPrice] = useState(null);

  const calculatePrice = () => {
    let baseRate = 80; // руб/м²
    
    // Корректировка базовой ставки в зависимости от типа объекта
    switch (objectType) {
      case "apartment":
        baseRate = 80;
        break;
      case "house":
        baseRate = 90;
        break;
      case "office":
        baseRate = 60;
        break;
      case "warehouse":
        baseRate = 45;
        break;
      default:
        baseRate = 80;
    }

    let calculatedPrice = baseRate * area;

    if (windows) calculatedPrice += 1000;
    if (furniture) calculatedPrice += 2000;
    if (postRepair) calculatedPrice *= 1.3;
    if (urgent) calculatedPrice *= 1.2;

    setPrice(Math.round(calculatedPrice));
  };

  return (
    <section id="calculator" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Рассчитайте стоимость уборки</h2>
          <p className="text-lg text-brand-gray/80 max-w-2xl mx-auto">
            Используйте наш онлайн-калькулятор для быстрого расчета приблизительной стоимости клининговых услуг
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-md">
          <CardHeader className="bg-brand-beige/10">
            <CardTitle>Калькулятор стоимости</CardTitle>
            <CardDescription>Укажите параметры для расчета</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="objectType">Тип объекта</Label>
                  <Select value={objectType} onValueChange={setObjectType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип объекта" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Квартира</SelectItem>
                      <SelectItem value="house">Дом</SelectItem>
                      <SelectItem value="office">Офис</SelectItem>
                      <SelectItem value="warehouse">Склад</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="area">Площадь (м²)</Label>
                  <Input 
                    id="area" 
                    type="number" 
                    min="10" 
                    value={area} 
                    onChange={(e) => setArea(Number(e.target.value))} 
                  />
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="windows" 
                    checked={windows} 
                    onCheckedChange={(checked) => setWindows(!!checked)} 
                  />
                  <Label htmlFor="windows">
                    Мытьё окон (+1000 руб.)
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="furniture" 
                    checked={furniture} 
                    onCheckedChange={(checked) => setFurniture(!!checked)} 
                  />
                  <Label htmlFor="furniture">
                    Химчистка мебели (+2000 руб.)
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="postRepair" 
                    checked={postRepair} 
                    onCheckedChange={(checked) => setPostRepair(!!checked)} 
                  />
                  <Label htmlFor="postRepair">
                    Уборка после ремонта (+30%)
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="urgent" 
                    checked={urgent} 
                    onCheckedChange={(checked) => setUrgent(!!checked)} 
                  />
                  <Label htmlFor="urgent">
                    Срочный выезд (+20%)
                  </Label>
                </div>
              </div>

              <Button 
                onClick={calculatePrice} 
                className="btn-primary w-full mt-6"
              >
                Рассчитать стоимость
              </Button>

              {price !== null && (
                <div className="mt-6 p-4 bg-brand-beige/20 rounded-lg text-center animate-fade-in">
                  <p className="text-lg font-semibold">Стоимость: {price} руб.</p>
                  <p className="text-sm text-brand-gray/80 mt-2">
                    Окончательная цена может отличаться после осмотра объекта
                  </p>
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
