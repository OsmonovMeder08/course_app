import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/courses', label: t('nav.courses') },
    { path: '/teachers', label: t('nav.teachers') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Meda</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
              className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{language.toUpperCase()}</span>
            </button>

            {/* CTA Button */}
            <Link
              to="/booking"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              {t('nav.booking')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>{language.toUpperCase()}</span>
              </button>
              <Link
                to="/booking"
                onClick={() => setIsOpen(false)}
                className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-md text-base font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                {t('nav.booking')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}