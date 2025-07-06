import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Clock, Award, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: t('home.features.expert'),
      description: t('home.features.expert.desc'),
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: t('home.features.flexible'),
      description: t('home.features.flexible.desc'),
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: t('home.features.quality'),
      description: t('home.features.quality.desc'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <GraduationCap className="w-20 h-20 mx-auto text-blue-400 mb-6" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t('home.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              {t('home.subtitle')}
            </p>
            <p className="text-lg mb-10 text-blue-200 max-w-3xl mx-auto">
              {t('home.description')}
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <span>{t('home.cta')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('home.features.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl hover:shadow-lg transition-all transform hover:scale-105"
              >
                <div className="mb-6 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {t('home.ready.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            {t('home.ready.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105"
            >
              {t('home.ready.courses')}
            </Link>
            <Link
              to="/booking"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
            >
              {t('home.ready.booking')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}