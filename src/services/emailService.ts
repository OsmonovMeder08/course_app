import emailjs from '@emailjs/browser';

// EmailJS configuration (из .env)
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID_CONTACT = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT;
const TEMPLATE_ID_BOOKING = import.meta.env.VITE_EMAILJS_TEMPLATE_BOOKING;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '61u2iafAkD7DnQLbC'; // <-- Добавил дефолтный ключ, если в env нет

// Инициализация
emailjs.init(PUBLIC_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  teacher: string;
  date: string;
  time: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    await emailjs.send(SERVICE_ID, TEMPLATE_ID_CONTACT, templateParams);
    return true;
  } catch (error) {
    console.error('Error sending contact email:', error);
    return false;
  }
};

export const sendBookingEmail = async (formData: BookingFormData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      course: formData.course,
      teacher: formData.teacher,
      date: formData.date,
      time: formData.time,
      message: formData.message,
    };

    await emailjs.send(SERVICE_ID, TEMPLATE_ID_BOOKING, templateParams);
    return true;
  } catch (error) {
    console.error('Error sending booking email:', error);
    return false;
  }
};
