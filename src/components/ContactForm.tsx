import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Check, MessageCircle, MessagesSquare, Send } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";

// Phone input masking function
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
const formSchema = z.object({
  name: z.string().min(2, "Имя должно содержать не менее 2 символов"),
  phone: z.string().min(10, "Введите корректный номер телефона"),
  email: z.string().email("Введите корректный email").optional().or(z.literal("")),
  message: z.string().min(10, "Сообщение должно содержать не менее 10 символов"),
  agreement: z.boolean().refine(val => val === true, {
    message: "Необходимо согласиться с условиями"
  })
});
const ContactForm = () => {
  const {
    toast
  } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      agreement: false
    }
  });
  const onSubmit = async (data: any) => {
    try {
      // Process the phone number before submission (remove formatting)
      const cleanedPhone = data.phone.replace(/\D/g, "");
      const phoneForSubmission = cleanedPhone.length > 0 ? `+${cleanedPhone}` : "";
      const submissionData = {
        ...data,
        phone: phoneForSubmission
      };
      console.log("Отправка формы:", submissionData);

      // Отправка в Telegram
      await fetch("https://api.telegram.org/bot7252849088:AAHCQfLWz-YyxY227f15HhJGzqvjydDe_cY/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: "393097451",
          text: `🧼 Новая заявка CleanHub:\nИмя: ${data.name}\nТелефон: ${phoneForSubmission}\nEmail: ${data.email || "Не указан"}\nСообщение: ${data.message}`
        })
      });
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время",
        variant: "default"
      });
      form.reset();
    } catch (error) {
      console.error("Ошибка при отправке заявки:", error);
      toast({
        title: "Ошибка отправки",
        description: "Не удалось отправить заявку. Пожалуйста, попробуйте позже.",
        variant: "destructive"
      });
    }
  };

  // Handle phone input with masking
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>, onChange: (value: string) => void) => {
    const formattedValue = formatPhoneNumber(e.target.value);
    onChange(formattedValue);
  };
  return <section id="contact" className="section bg-brand-beige/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Связаться с нами</h2>
          <p className="text-lg text-brand-gray/80 max-w-2xl mx-auto">
            Оставьте заявку, и мы свяжемся с вами для консультации и расчета стоимости уборки
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Контактная информация */}
          <div className="bg-white p-8 shadow-sm rounded-2xl">
            <h3 className="text-xl font-bold mb-4">Контактная информация</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Телефон:</h4>
                <p className="text-lg font-normal">8 920 950 08 08</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Email:</h4>
                <a 
                  href="mailto:washup.info@mail.ru?subject=Заявка на клининг"
                  className="text-lg text-brand-green hover:text-brand-green/80 hover:underline cursor-pointer transition-colors"
                >
                  washup.info@mail.ru
                </a>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Адрес:</h4>
                <p className="text-lg">г. Рязань, Соборная ул., 15А  </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Режим работы:</h4>
                <p className="text-lg">Пн-Вс: с 8:00 до 22:00</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Мы в мессенджерах:</h4>
              <div className="flex gap-4">
                <a href="https://wa.me/79209500808" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#25D366]/10 rounded-lg text-sm hover:bg-[#25D366] hover:text-white transition-colors hover:scale-105">
                  <MessagesSquare size={20} /> WhatsApp
                </a>
                <a href="https://t.me/+79209500808" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#0088cc]/10 rounded-lg text-sm hover:bg-[#0088cc] hover:text-white transition-colors hover:scale-105">
                  <Send size={20} /> Telegram
                </a>
              </div>
            </div>
          </div>
          
          {/* Форма обратной связи */}
          <div className="bg-white p-8 shadow-sm rounded-2xl">
            <h3 className="text-xl font-bold mb-6">Оставить заявку</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField control={form.control} name="name" render={({
                field
              }) => <FormItem>
                      <FormLabel>Имя</FormLabel>
                      <FormControl>
                        <Input placeholder="Иван Иванов" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                
                <FormField control={form.control} name="phone" render={({
                field
              }) => <FormItem>
                      <FormLabel>Телефон*</FormLabel>
                      <FormControl>
                        <Input placeholder="+7 (999) 123-45-67" value={field.value} onChange={e => handlePhoneChange(e, field.onChange)} onBlur={field.onBlur} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                
                <FormField control={form.control} name="email" render={({
                field
              }) => <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="example@mail.ru" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                
                <FormField control={form.control} name="message" render={({
                field
              }) => <FormItem>
                      <FormLabel>Сообщение</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Опишите ваш запрос или вопрос..." className="min-h-[120px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                
                <FormField control={form.control} name="agreement" render={({
                field
              }) => <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-4">
                      <FormControl>
                        <input type="checkbox" className="w-5 h-5 mt-1 text-brand-green border-gray-300 rounded focus:ring-brand-green" checked={field.value} onChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          Я соглашаюсь с условиями обработки персональных данных
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>} />
                
                <Button type="submit" className="btn-primary w-full">
                  <Check size={18} className="mr-2" /> Отправить заявку
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactForm;
