import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">Meda</span>
            </div>
            <p className="text-gray-400">
              {t('footer.about.text')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.courses')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/courses" className="hover:text-white transition-colors">{t('courses.web.title')}</Link></li>
              <li><Link to="/courses" className="hover:text-white transition-colors">{t('courses.data.title')}</Link></li>
              <li><Link to="/courses" className="hover:text-white transition-colors">{t('courses.business.title')}</Link></li>
              <li><Link to="/courses" className="hover:text-white transition-colors">{t('courses.design.title')}</Link></li>
            </ul>
          </div>

          {/* Teachers */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.teachers')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/teachers" className="hover:text-white transition-colors">Artykbaeva Jumaida</Link></li>
              <li><Link to="/teachers" className="hover:text-white transition-colors">Osmonov Orzubek</Link></li>
              <li><Link to="/teachers" className="hover:text-white transition-colors">Osmonova Aizat</Link></li>
              <li><Link to="/teachers" className="hover:text-white transition-colors">Osmonov Meder</Link></li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+996 (505) 14-70-52</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>mrmedaea08@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Bishkek, Kyrgyzstan</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{t('contact.hours.value')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-2xl font-bold text-center mb-8">{t('pricing.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Consultation */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-2">{t('pricing.consultation')}</h4>
              <div className="text-3xl font-bold text-blue-300 mb-2">{t('pricing.consultation.price')}</div>
              <p className="text-blue-200">{t('pricing.consultation.duration')}</p>
            </div>

            {/* Course */}
            <div className="bg-gradient-to-br from-purple-900 to-purple-800 p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-2">{t('pricing.course')}</h4>
              <div className="text-3xl font-bold text-purple-300 mb-2">{t('pricing.course.price')}</div>
              <p className="text-purple-200">{t('pricing.course.duration')}</p>
            </div>

            {/* Premium */}
            <div className="bg-gradient-to-br from-green-900 to-green-800 p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-2">{t('pricing.premium')}</h4>
              <div className="text-3xl font-bold text-green-300 mb-2">{t('pricing.premium.price')}</div>
              <p className="text-green-200">{t('pricing.premium.duration')}</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 Meda. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}