import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Teachers from './pages/Teachers';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking/:courseId?" element={<Booking />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;