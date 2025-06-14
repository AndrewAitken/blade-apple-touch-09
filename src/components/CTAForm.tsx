import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Send } from "lucide-react";
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
  comment: z.string().min(1, "Комментарий обязателен")
});
interface CTAFormProps {
  onSuccess?: () => void;
}
const CTAForm = ({
  onSuccess
}: CTAFormProps) => {
  const {
    toast
  } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      comment: ""
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
      console.log("Отправка заявки в CTA форму:", submissionData);

      // Отправка в Telegram бот @wash_up_cleaning_bot
      await fetch("https://api.telegram.org/bot7252849088:AAHCQfLWz-YyxY227f15HhJGzqvjydDe_cY/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: "393097451",
          text: `🧼 Новая заявка CleanHub (Калькулятор):\nИмя: ${data.name}\nТелефон: ${phoneForSubmission}\nEmail: ${data.email || "Не указан"}\nКомментарий: ${data.comment}`
        })
      });
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время",
        variant: "default"
      });
      form.reset();
      onSuccess?.();
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
  return;
};
export default CTAForm;