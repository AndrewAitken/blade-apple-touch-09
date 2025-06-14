
import React from "react";
import { MessagesSquare, Send } from "lucide-react";

const ContactForm = () => {
  return (
    <section id="contact" className="section bg-brand-beige/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Связаться с нами</h2>
          <p className="text-lg text-brand-gray/80 max-w-2xl mx-auto">
            Свяжитесь с нами для консультации и расчета стоимости уборки
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {/* Контактная информация */}
          <div className="bg-white p-8 shadow-sm rounded-2xl">
            <h3 className="text-xl font-bold mb-6 text-center">Контактная информация</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Телефон:</h4>
                <p className="text-lg">8 920 950 08 08</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Email:</h4>
                <p className="text-lg">info@clean-hub.ru</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Адрес:</h4>
                <p className="text-lg">г. Рязань, Соборная ул., 15А</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Режим работы:</h4>
                <p className="text-lg">Пн-Вс: с 8:00 до 22:00</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-center">Мы в мессенджерах:</h4>
              <div className="flex gap-4 justify-center">
                <a href="https://wa.me/79209500808" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#25D366]/10 rounded-lg text-sm hover:bg-[#25D366] hover:text-white transition-colors hover:scale-105">
                  <MessagesSquare size={20} /> WhatsApp
                </a>
                <a href="https://t.me/+79209500808" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#0088cc]/10 rounded-lg text-sm hover:bg-[#0088cc] hover:text-white transition-colors hover:scale-105">
                  <Send size={20} /> Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
