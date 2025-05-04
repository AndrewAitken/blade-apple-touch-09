
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, Clock, MessageCircle, Telegram, WhatsApp } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // В реальном проекте здесь была бы отправка формы
    toast({
      title: "Сообщение отправлено",
      description: "Спасибо за обращение! Мы свяжемся с вами в ближайшее время.",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Телефон",
      value: "8 920 950 08 08",
      link: "tel:+79209500808"
    },
    {
      icon: Mail,
      title: "Электронная почта",
      value: "info@washup.ru",
      link: "mailto:info@washup.ru"
    },
    {
      icon: MapPin,
      title: "Адрес",
      value: "г. Рязань, ул. Чистая, д. 10",
      link: "#"
    },
    {
      icon: Clock,
      title: "Режим работы",
      value: "Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-lg text-brand-gray/80 max-w-2xl mx-auto">
            Оставьте заявку, и мы свяжемся с вами для расчета стоимости и обсуждения деталей
          </p>
          
          {/* Быстрые действия - кнопки связи */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a 
              href="https://wa.me/79209500808" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-md"
            >
              <WhatsApp size={24} />
              Написать в WhatsApp
            </a>
            <a 
              href="https://t.me/+79209500808" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0088cc] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-md"
            >
              <Telegram size={24} />
              Написать в Telegram
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Введите ваше имя"
                    required
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Номер телефона
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (___) ___-____"
                    required
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="service" className="block text-sm font-medium">
                  Интересующая услуга
                </label>
                <select 
                  id="service"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="" disabled selected>Выберите услугу</option>
                  <option value="regular">Поддерживающая уборка</option>
                  <option value="general">Генеральная уборка</option>
                  <option value="renovation">Уборка после ремонта</option>
                  <option value="moving">Уборка при переезде</option>
                  <option value="office">Уборка офиса</option>
                  <option value="commercial">Коммерческая уборка</option>
                  <option value="other">Другое</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Сообщение
                </label>
                <Textarea
                  id="message"
                  placeholder="Опишите ваши пожелания или задайте вопрос"
                  rows={4}
                  className="w-full resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="btn-primary w-full transition-all duration-300 hover:scale-105"
              >
                Отправить заявку
              </Button>
            </form>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-brand-beige/10 p-8 rounded-2xl h-full">
              <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index}
                    href={item.link}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-brand-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 transition-all group-hover:bg-brand-green/40">
                      <item.icon size={20} className="text-brand-green" />
                    </div>
                    <div>
                      <h4 className="text-sm text-brand-gray/70 mb-1">{item.title}</h4>
                      <p className="text-lg group-hover:text-brand-green transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-12">
                <h4 className="text-lg font-medium mb-4">Мы в социальных сетях</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-brand-beige/30 rounded-full flex items-center justify-center hover:bg-brand-green/30 transition-colors hover:scale-110 transition-transform duration-300">
                    <span className="sr-only">Instagram</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="https://t.me/+79209500808" className="w-10 h-10 bg-brand-beige/30 rounded-full flex items-center justify-center hover:bg-brand-green/30 transition-colors hover:scale-110 transition-transform duration-300">
                    <span className="sr-only">Telegram</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m22 2-7 20-4-9-9-4 20-7Z"></path>
                      <path d="M22 2 11 13"></path>
                    </svg>
                  </a>
                  <a href="https://wa.me/79209500808" className="w-10 h-10 bg-brand-beige/30 rounded-full flex items-center justify-center hover:bg-brand-green/30 transition-colors hover:scale-110 transition-transform duration-300">
                    <span className="sr-only">WhatsApp</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.6 6.8A7.8 7.8 0 1 0 5.4 15L4 20l5-1.2a7.8 7.8 0 0 0 8.6-12Z"></path>
                      <path d="m14.5 9.9-2.7 2.7-1.3-1.2"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
