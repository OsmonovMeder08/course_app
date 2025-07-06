import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'ru' | 'en';
  setLanguage: (lang: 'ru' | 'en') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.courses': 'Курсы',
    'nav.teachers': 'Преподаватели',
    'nav.contact': 'Контакты',
    'nav.booking': 'Запись',
    
    // Home Page
    'home.title': 'Профессиональные Консультации и Курсы',
    'home.subtitle': 'Изучайте новые навыки с лучшими преподавателями',
    'home.description': 'Наша платформа предлагает персонализированные консультации и курсы от опытных специалистов. Начните свой путь к профессиональному росту сегодня.',
    'home.cta': 'Записаться на консультацию',
    'home.features.title': 'Почему выбирают нас',
    'home.features.expert': 'Экспертные преподаватели',
    'home.features.expert.desc': 'Наши преподаватели имеют многолетний опыт',
    'home.features.flexible': 'Гибкое расписание',
    'home.features.flexible.desc': 'Выбирайте удобное время для занятий',
    'home.features.quality': 'Качественное обучение',
    'home.features.quality.desc': 'Современные методики и подходы',
    'home.ready.title': 'Готовы начать обучение?',
    'home.ready.subtitle': 'Присоединяйтесь к тысячам студентов, которые уже изменили свою карьеру',
    'home.ready.courses': 'Посмотреть курсы',
    'home.ready.booking': 'Записаться на консультацию',
    
    // Courses
    'courses.title': 'Наши Курсы',
    'courses.subtitle': 'Выберите курс для изучения',
    'courses.book': 'Записаться',
    'courses.duration': 'Длительность',
    'courses.level': 'Уровень',
    'courses.price': 'Цена',
    'courses.weeks': 'недель',
    'courses.beginner': 'Начинающий',
    'courses.intermediate': 'Средний',
    'courses.advanced': 'Продвинутый',
    'courses.web.title': 'Веб-разработка',
    'courses.web.desc': 'Изучите современные технологии веб-разработки',
    'courses.data.title': 'Наука о данных',
    'courses.data.desc': 'Анализ данных и машинное обучение',
    'courses.business.title': 'Бизнес-аналитика',
    'courses.business.desc': 'Бизнес-аналитика и управление проектами',
    'courses.design.title': 'UX/UI Дизайн',
    'courses.design.desc': 'Дизайн пользовательских интерфейсов',
    'courses.marketing.title': 'Цифровой маркетинг',
    'courses.marketing.desc': 'Цифровой маркетинг и продвижение',
    'courses.cloud.title': 'Облачные вычисления',
    'courses.cloud.desc': 'Облачные технологии и DevOps',
    
    // Teachers
    'teachers.title': 'Наши Преподаватели',
    'teachers.subtitle': 'Познакомьтесь с нашей командой экспертов',
    'teachers.experience': 'Опыт работы',
    'teachers.years': 'лет',
    'teachers.book': 'Записаться к преподавателю',
    'teachers.students': 'студентов',
    'teachers.anna.desc': 'Опытный разработчик с экспертизой в React, Node.js и современных веб-технологиях.',
    'teachers.dmitry.desc': 'Эксперт в области машинного обучения и анализа данных с опытом в крупных IT-компаниях.',
    'teachers.maria.desc': 'Креативный дизайнер с фокусом на пользовательский опыт и современные дизайн-тренды.',
    'teachers.alexey.desc': 'Специалист по цифровому маркетингу с опытом продвижения брендов в интернете.',
    'teachers.elena.desc': 'Бизнес-аналитик с экспертизой в области управления проектами и анализа бизнес-процессов.',
    'teachers.sergey.desc': 'Архитектор облачных решений с многолетним опытом работы с AWS, Azure и Google Cloud.',
    
    // Contact
    'contact.title': 'Связаться с Администратором',
    'contact.subtitle': 'Мы всегда готовы помочь',
    'contact.name': 'Имя',
    'contact.email': 'Email',
    'contact.message': 'Сообщение',
    'contact.send': 'Отправить',
    'contact.info': 'Контактная информация',
    'contact.phone': 'Телефон',
    'contact.hours': 'Часы работы',
    'contact.hours.value': 'Пн-Пт: 9:00-18:00',
    'contact.address': 'Адрес',
    'contact.admin.title': 'Связаться с администратором',
    'contact.admin.desc': 'Для срочных вопросов и персональных консультаций',
    'contact.admin.direct': 'прямая линия',
    'contact.success': 'Сообщение отправлено! Мы свяжемся с вами в ближайшее время.',
    'contact.error': 'Ошибка при отправке сообщения. Попробуйте еще раз.',
    
    // Booking
    'booking.title': 'Запись на Консультацию',
    'booking.subtitle': 'Выберите удобное время',
    'booking.course': 'Курс',
    'booking.teacher': 'Преподаватель',
    'booking.date': 'Дата',
    'booking.time': 'Время',
    'booking.submit': 'Записаться',
    'booking.select.course': 'Выберите курс',
    'booking.select.teacher': 'Выберите преподавателя',
    'booking.select.time': 'Выберите время',
    'booking.phone': 'Телефон',
    'booking.additional': 'Дополнительная информация',
    'booking.additional.placeholder': 'Расскажите о ваших целях и ожиданиях от консультации...',
    'booking.info.title': 'Информация о бронировании',
    'booking.info.duration': '• Консультация длится 60 минут',
    'booking.info.contact': '• После отправки заявки с вами свяжется администратор для подтверждения',
    'booking.info.cancel': '• Отменить или перенести консультацию можно за 24 часа до начала',
    'booking.info.format': '• Консультация проводится онлайн или в нашем офисе',
    'booking.success': 'Заявка на консультацию отправлена! Мы свяжемся с вами для подтверждения.',
    'booking.error': 'Ошибка при отправке заявки. Попробуйте еще раз.',
    
    // Footer
    'footer.about': 'О нас',
    'footer.about.text': 'Мы предоставляем качественное образование и консультации для профессионального роста.',
    'footer.contact': 'Контакты',
    'footer.courses': 'Курсы',
    'footer.teachers': 'Преподаватели',
    'footer.rights': 'Все права защищены',
    
    // Pricing
    'pricing.title': 'Цены',
    'pricing.consultation': 'Консультация',
    'pricing.consultation.price': '₽2,500',
    'pricing.consultation.duration': '60 минут',
    'pricing.course': 'Полный курс',
    'pricing.course.price': '₽15,000',
    'pricing.course.duration': '8 недель',
    'pricing.premium': 'Премиум',
    'pricing.premium.price': '₽25,000',
    'pricing.premium.duration': '12 недель + поддержка',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.courses': 'Courses',
    'nav.teachers': 'Teachers',
    'nav.contact': 'Contact',
    'nav.booking': 'Booking',
    
    // Home Page
    'home.title': 'Professional Consultations and Courses',
    'home.subtitle': 'Learn new skills with the best teachers',
    'home.description': 'Our platform offers personalized consultations and courses from experienced specialists. Start your journey to professional growth today.',
    'home.cta': 'Book a consultation',
    'home.features.title': 'Why choose us',
    'home.features.expert': 'Expert teachers',
    'home.features.expert.desc': 'Our teachers have years of experience',
    'home.features.flexible': 'Flexible schedule',
    'home.features.flexible.desc': 'Choose convenient time for classes',
    'home.features.quality': 'Quality education',
    'home.features.quality.desc': 'Modern methods and approaches',
    'home.ready.title': 'Ready to start learning?',
    'home.ready.subtitle': 'Join thousands of students who have already changed their careers',
    'home.ready.courses': 'View courses',
    'home.ready.booking': 'Book a consultation',
    
    // Courses
    'courses.title': 'Our Courses',
    'courses.subtitle': 'Choose a course to study',
    'courses.book': 'Book Now',
    'courses.duration': 'Duration',
    'courses.level': 'Level',
    'courses.price': 'Price',
    'courses.weeks': 'weeks',
    'courses.beginner': 'Beginner',
    'courses.intermediate': 'Intermediate',
    'courses.advanced': 'Advanced',
    'courses.web.title': 'Web Development',
    'courses.web.desc': 'Learn modern web development technologies',
    'courses.data.title': 'Data Science',
    'courses.data.desc': 'Data analysis and machine learning',
    'courses.business.title': 'Business Analytics',
    'courses.business.desc': 'Business analytics and project management',
    'courses.design.title': 'UX/UI Design',
    'courses.design.desc': 'User interface design',
    'courses.marketing.title': 'Digital Marketing',
    'courses.marketing.desc': 'Digital marketing and promotion',
    'courses.cloud.title': 'Cloud Computing',
    'courses.cloud.desc': 'Cloud technologies and DevOps',
    
    // Teachers
    'teachers.title': 'Our Teachers',
    'teachers.subtitle': 'Meet our team of experts',
    'teachers.experience': 'Experience',
    'teachers.years': 'years',
    'teachers.book': 'Book with teacher',
    'teachers.students': 'students',
    'teachers.anna.desc': 'Experienced developer with expertise in React, Node.js and modern web technologies.',
    'teachers.dmitry.desc': 'Expert in machine learning and data analysis with experience in major IT companies.',
    'teachers.maria.desc': 'Creative designer focused on user experience and modern design trends.',
    'teachers.alexey.desc': 'Digital marketing specialist with experience in online brand promotion.',
    'teachers.elena.desc': 'Business analyst with expertise in project management and business process analysis.',
    'teachers.sergey.desc': 'Cloud solutions architect with years of experience with AWS, Azure and Google Cloud.',
    
    // Contact
    'contact.title': 'Contact Administrator',
    'contact.subtitle': 'We are always ready to help',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'contact.info': 'Contact Information',
    'contact.phone': 'Phone',
    'contact.hours': 'Working Hours',
    'contact.hours.value': 'Mon-Fri: 9:00-18:00',
    'contact.address': 'Address',
    'contact.admin.title': 'Contact administrator',
    'contact.admin.desc': 'For urgent questions and personal consultations',
    'contact.admin.direct': 'direct line',
    'contact.success': 'Message sent! We will contact you shortly.',
    'contact.error': 'Error sending message. Please try again.',
    
    // Booking
    'booking.title': 'Book a Consultation',
    'booking.subtitle': 'Choose convenient time',
    'booking.course': 'Course',
    'booking.teacher': 'Teacher',
    'booking.date': 'Date',
    'booking.time': 'Time',
    'booking.submit': 'Book',
    'booking.select.course': 'Select course',
    'booking.select.teacher': 'Select teacher',
    'booking.select.time': 'Select time',
    'booking.phone': 'Phone',
    'booking.additional': 'Additional information',
    'booking.additional.placeholder': 'Tell us about your goals and expectations from the consultation...',
    'booking.info.title': 'Booking Information',
    'booking.info.duration': '• Consultation lasts 60 minutes',
    'booking.info.contact': '• After submitting the request, an administrator will contact you for confirmation',
    'booking.info.cancel': '• You can cancel or reschedule the consultation 24 hours before the start',
    'booking.info.format': '• Consultation is conducted online or in our office',
    'booking.success': 'Consultation request sent! We will contact you for confirmation.',
    'booking.error': 'Error sending request. Please try again.',
    
    // Footer
    'footer.about': 'About Us',
    'footer.about.text': 'We provide quality education and consultations for professional growth.',
    'footer.contact': 'Contact',
    'footer.courses': 'Courses',
    'footer.teachers': 'Teachers',
    'footer.rights': 'All rights reserved',
    
    // Pricing
    'pricing.title': 'Pricing',
    'pricing.consultation': 'Consultation',
    'pricing.consultation.price': '$35',
    'pricing.consultation.duration': '60 minutes',
    'pricing.course': 'Full Course',
    'pricing.course.price': '$200',
    'pricing.course.duration': '8 weeks',
    'pricing.premium': 'Premium',
    'pricing.premium.price': '$350',
    'pricing.premium.duration': '12 weeks + support',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<'ru' | 'en'>('ru');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}