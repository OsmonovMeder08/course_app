import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BarChart, DollarSign, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Courses() {
  const { t } = useLanguage();

  const courses = [
    {
      id: 1,
      title: t('courses.web.title'),
      description: t('courses.web.desc'),
      duration: 8,
      level: t('courses.beginner'),
      price: '15,000C',
      priceEn: '$200',
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 2,
      title: t('courses.data.title'),
      description: t('courses.data.desc'),
      duration: 12,
      level: t('courses.intermediate'),
      price: '22,000C',
      priceEn: '$300',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 3,
      title: t('courses.business.title'),
      description: t('courses.business.desc'),
      duration: 6,
      level: t('courses.beginner'),
      price: '18,000C',
      priceEn: '$250',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 4,
      title: t('courses.design.title'),
      description: t('courses.design.desc'),
      duration: 10,
      level: t('courses.intermediate'),
      price: '20,000C',
      priceEn: '$275',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 5,
      title: t('courses.marketing.title'),
      description: t('courses.marketing.desc'),
      duration: 8,
      level: t('courses.beginner'),
      price: '16,000C',
      priceEn: '$220',
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 6,
      title: t('courses.cloud.title'),
      description: t('courses.cloud.desc'),
      duration: 14,
      level: t('courses.advanced'),
      price: '25,000C',
      priceEn: '$350',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const { language } = useLanguage();

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('courses.title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('courses.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105"
            >
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration} {t('courses.weeks')}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <BarChart className="w-4 h-4" />
                    <span>{course.level}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-2xl font-bold text-gray-900">
                    <DollarSign className="w-6 h-6" />
                    <span>{language === 'ru' ? course.price : course.priceEn}</span>
                  </div>
                  <Link
                    to={`/booking/${course.id}`}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
                  >
                    <span>{t('courses.book')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}