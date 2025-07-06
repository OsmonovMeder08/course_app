import React, { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Calendar, Clock, User, Book, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { sendBookingEmail } from '../services/emailService';

export default function Booking() {
  const { courseId } = useParams();
  const [searchParams] = useSearchParams();
  const teacherId = searchParams.get('teacher');
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: courseId || '',
    teacher: teacherId || '',
    date: '',
    time: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const courses = [
    { id: '1', name: t('courses.web.title') },
    { id: '2', name: t('courses.data.title') },
    { id: '3', name: t('courses.business.title') },
    { id: '4', name: t('courses.design.title') },
    { id: '5', name: t('courses.marketing.title') },
    { id: '6', name: t('courses.cloud.title') },
  ];

  const teachers = [
    { id: '1', name: 'Аrtykbaeva Jumaida', specialty: t('courses.web.title') },
    { id: '2', name: 'Osmonov Meder', specialty: t('courses.data.title') },
    { id: '3', name: 'Artykova Ayat', specialty: t('courses.design.title') },
    { id: '4', name: 'Osmonov Bekbolot', specialty: t('courses.marketing.title') },
    { id: '5', name: 'Osmonova Aizat', specialty: t('courses.business.title') },
    { id: '6', name: 'Osmonov Orzubek', specialty: t('courses.cloud.title') },
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const success = await sendBookingEmail(formData);
      if (success) {
        alert(t('booking.success'));
        setFormData({
          name: '',
          email: '',
          phone: '',
          course: courseId || '',
          teacher: teacherId || '',
          date: '',
          time: '',
          message: '',
        });
      } else {
        alert(t('booking.error'));
      }
    } catch (error) {
      alert(t('booking.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('booking.title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('booking.subtitle')}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.name')} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.email')} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('booking.phone')} *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            {/* Course and Teacher Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                  <Book className="inline w-4 h-4 mr-2" />
                  {t('booking.course')}
                </label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">{t('booking.select.course')}</option>
                  {courses.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="teacher" className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="inline w-4 h-4 mr-2" />
                  {t('booking.teacher')}
                </label>
                <select
                  id="teacher"
                  name="teacher"
                  value={formData.teacher}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">{t('booking.select.teacher')}</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.id}>
                      {teacher.name} - {teacher.specialty}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date and Time Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="inline w-4 h-4 mr-2" />
                  {t('booking.date')} *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock className="inline w-4 h-4 mr-2" />
                  {t('booking.time')} *
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">{t('booking.select.time')}</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                {t('booking.additional')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder={t('booking.additional.placeholder')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Check className="w-5 h-5" />
              <span>{isSubmitting ? 'Отправка...' : t('booking.submit')}</span>
            </button>
          </form>

          {/* Booking Information */}
          <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('booking.info.title')}</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>{t('booking.info.duration')}</p>
              <p>{t('booking.info.contact')}</p>
              <p>{t('booking.info.cancel')}</p>
              <p>{t('booking.info.format')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}