import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Video } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isAuthPage = ['/login', '/signup', '/forgot-password'].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  if (isAuthPage) return null;

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Video className="h-8 w-8 text-indigo-600 mr-2" />
          <span className="text-xl font-bold text-gray-900">PodcastPro</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300">Features</a>
          <a href="#workflow" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300">How It Works</a>
          <a href="#pricing" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300">Pricing</a>
          <a href="#faq" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300">FAQ</a>
          <Link to="/login" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300">Sign in</Link>
          <Link
            to="/signup"
            className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
          >
            Get Started
          </Link>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 py-2"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a 
              href="#workflow" 
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 py-2"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#pricing" 
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 py-2"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#faq" 
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 py-2"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
            <Link
              to="/login"
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 py-2"
              onClick={() => setIsOpen(false)}
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;