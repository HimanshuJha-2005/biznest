import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';

const PublicNavbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
            B
          </div>

          <span className="text-3xl font-extrabold text-blue-600">
            BizNest.
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/features" className="font-medium hover:text-blue-600 transition">
            Features
          </Link>

          <Link to="/pricing" className="font-medium hover:text-blue-600 transition">
            Pricing
          </Link>

          <Link to="/about" className="font-medium hover:text-blue-600 transition">
            About
          </Link>

          <Link to="/blog" className="font-medium hover:text-blue-600 transition">
            Blog
          </Link>

          <Link to="/contact" className="font-medium hover:text-blue-600 transition">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition"
          >
            {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          <Link
            to="/login"
            className="font-medium hover:text-blue-600 transition"
          >
            Sign In
          </Link>

          <Link
            to="/login"
            className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default PublicNavbar;