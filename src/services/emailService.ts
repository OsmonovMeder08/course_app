import emailjs from '@emailjs/browser';


// EmailJS configuration
const SERVICE_ID = 'service_4j7o3he';
const TEMPLATE_ID_CONTACT = 'template_fdsqyls';
const TEMPLATE_ID_BOOKING = 'template_kyalti8';
const PUBLIC_KEY = '61u2iafAkD7DnQLbC';

// Initialize EmailJS
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
      to_email: 'osmonovmeder748@gmail.com', // Replace with your email
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
      to_email: 'osmonovmeder748@gmail.com', // Replace with your email
    };

    await emailjs.send(SERVICE_ID, TEMPLATE_ID_BOOKING, templateParams);
    return true;
  } catch (error) {
    console.error('Error sending booking email:', error);
    return false;
  }
};