
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

// Phone input masking function for the Landing page
const formatPhoneNumber = (value: string) => {
  if (!value) return "";
  
  // Remove all non-digit characters
  const phoneNumber = value.replace(/\D/g, "");
  
  // Format according to the mask
  if (phoneNumber.length === 0) {
    return "";
  } else if (phoneNumber.length <= 1) {
    return `+7`;
  } else if (phoneNumber.length <= 4) {
    return `+7 (${phoneNumber.slice(1, 4)}`;
  } else if (phoneNumber.length <= 7) {
    return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}`;
  } else if (phoneNumber.length <= 9) {
    return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 9)}`;
  } else {
    return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9, 11)}`;
  }
};

export default function Landing() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
    area: "",
    bathrooms: ""
  });

  const [price, setPrice] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === "phone") {
      setFormData({ ...formData, [name]: formatPhoneNumber(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const calculatePrice = () => {
    const base = 2000;
    const area = parseInt(formData.area) || 0;
    const bathrooms = parseInt(formData.bathrooms) || 0;
    const total = base + area * 50 + bathrooms * 500;
    setPrice(total);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Process the phone number before submission
      const cleanedPhone = formData.phone.replace(/\D/g, "");
      const phoneForSubmission = cleanedPhone.length > 0 ? `+${cleanedPhone}` : "";
      
      // Отправка в Telegram
      await fetch("https://api.telegram.org/bot7252849088:AAHCQfLWz-YyxY227f15HhJGzqvjydDe_cY/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: "393097451",
          text: `🧼 Новая заявка WashUp:\nИмя: ${formData.name}\nТелефон: ${phoneForSubmission}\nУслуга: ${formData.service}\nКомментарий: ${formData.message}\nПлощадь: ${formData.area} м²\nСанузлы: ${formData.bathrooms}`
        })
      });

      toast.success("Заявка отправлена! Мы скоро свяжемся с вами.");
      
      setFormData({
        name: "",
        phone: "",
        service: "",
        message: "",
        area: "",
        bathrooms: ""
      });
      setPrice(null);
    } catch (error) {
      toast.error("Ошибка при отправке заявки. Попробуйте позже.");
    }
  };

  return (
    <main className="min-h-screen bg-white text-black px-4 py-10">
      <section className="max-w-3xl mx-auto space-y-10">
        <header className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="grid grid-cols-2 gap-0.5 border-2 border-brand-gray p-1 w-10 h-10">
              <div className="bg-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gray"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              </div>
              <div className="bg-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gray"><path d="M3 3v18h18"></path><path d="M7 11c.887 0 1.6-.72 1.6-1.6v-4.8C8.6 3.72 7.887 3 7 3c-.887 0-1.6.72-1.6 1.6v4.8c0 .88.713 1.6 1.6 1.6Z"></path><path d="M5.5 18a2.5 2.5 0 0 1 0-5H22"></path><path d="M8.5 21H5.1C4.433 21 3.9 20.467 3.9 19.8V18h16.172"></path><path d="M17.5 18a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"></path></svg>
              </div>
              <div className="bg-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gray"><path d="M3 3v18h18"></path><path d="M7 17V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v12"></path><path d="M5 17h14"></path></svg>
              </div>
              <div className="bg-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gray"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h8"></path><path d="M8 10h8"></path></svg>
              </div>
            </div>
            <h1 className="text-4xl font-bold">WashUp</h1>
          </div>
          <p className="text-lg text-gray-600">Клининг нового уровня - чисто, быстро, экологично</p>
        </header>

        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">💰 Калькулятор стоимости</h2>
            <div className="space-y-3">
              <Input name="area" placeholder="Площадь в м²" onChange={handleChange} value={formData.area} type="number" />
              <Input name="bathrooms" placeholder="Количество санузлов" onChange={handleChange} value={formData.bathrooms} type="number" />
              <Button type="button" onClick={calculatePrice} className="w-full">Рассчитать</Button>
              {price !== null && (
                <div className="bg-brand-beige/20 p-3 rounded-md">
                  <p className="text-center font-semibold">Примерная стоимость: {price} ₽</p>
                  <p className="text-xs text-center text-gray-500 mt-1">Окончательная стоимость может отличаться после осмотра объекта</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <h2 className="text-2xl font-semibold">📋 Оставить заявку</h2>
          <Input name="name" placeholder="Ваше имя" onChange={handleChange} value={formData.name} required />
          <Input name="phone" placeholder="Телефон" onChange={handleChange} value={formData.phone} required />
          <Input name="service" placeholder="Услуга (например: уборка после ремонта)" onChange={handleChange} value={formData.service} />
          <Textarea name="message" placeholder="Комментарий" onChange={handleChange} value={formData.message} />
          <Button type="submit">Оставить заявку</Button>
        </form>

        <section className="bg-brand-beige/10 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">🧼 Наши услуги</h2>
          <ul className="space-y-3">
            {[
              "Генеральная уборка квартир и домов",
              "Уборка после ремонта",
              "Химчистка мебели",
              "Эко-клининг без химии",
              "B2B уборка офисов и ресторанов"
            ].map((service, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-brand-green rounded-full mr-3"></span>
                {service}
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col sm:flex-row justify-around gap-6 bg-white p-6 rounded-lg shadow-sm">
          <div className="text-center">
            <div className="bg-brand-beige/20 w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
            </div>
            <h3 className="font-medium">До и после</h3>
            <p className="text-sm text-gray-600">Фотофиксация результатов</p>
          </div>

          <div className="text-center">
            <div className="bg-brand-beige/20 w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 0v6h14V4H5z"></path><path d="M6 8h.01M9 8h.01"></path><path d="M5 12v8h14v-8"></path></svg>
            </div>
            <h3 className="font-medium">Безналичный расчет</h3>
            <p className="text-sm text-gray-600">Чеки и документы</p>
          </div>

          <div className="text-center">
            <div className="bg-brand-beige/20 w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
            </div>
            <h3 className="font-medium">Эко-средства</h3>
            <p className="text-sm text-gray-600">Безопасны для детей и животных</p>
          </div>
        </section>

        <footer className="text-center text-sm text-gray-400 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-center gap-3 mb-3">
            <a href="https://wa.me/79209500808" className="hover:text-green-600 transition-colors">
              WhatsApp
            </a>
            <span>•</span>
            <a href="https://t.me/+79209500808" className="hover:text-blue-500 transition-colors">
              Telegram
            </a>
            <span>•</span>
            <a href="tel:+79209500808" className="hover:text-gray-800 transition-colors">
              8 920 950 08 08
            </a>
          </div>
          © {new Date().getFullYear()} WashUp. Все права защищены.
        </footer>
      </section>
    </main>
  );
}
