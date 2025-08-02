'use client'; 

import { useState, useEffect } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      {/* Header */}
      <header className="bg-blue-500 text-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 py-4 flex justify-between items-center">
          {/* Brand */}
          <h1 className="text-xl md:text-2xl font-bold tracking-wide text-white drop-shadow">
            <span className="text-white">Mansi Computer</span>{' '}
            <span className="text-yellow-300">Solutions</span>
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-base font-medium">
            <a href="#services" className="hover:text-indigo-300 transition">
              Services
            </a>

             <a href="#products" className="hover:text-indigo-300 transition">
              Products
            </a>
            <a href="#about" className="hover:text-indigo-300 transition">
              About
            </a>
            <a href="#contact" className="hover:text-indigo-300 transition">
              Contact
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-[#0f172a] text-white transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-60 shadow-lg`}
      >
        {/* Drawer Header */}
        <div className="p-6 flex justify-between items-center border-b border-blue-800">
          <h2 className="text-lg font-bold text-indigo-400 tracking-wide">
            Menu
          </h2>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-slate-300 hover:text-white transition"
          >
            ✕
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-6 space-y-4 text-base font-medium">
          <a
            href="#services"
            className="hover:text-indigo-300 transition"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#products"
            className="hover:text-indigo-300 transition"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </a>
          <a
            href="#about"
            className="hover:text-indigo-300 transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-indigo-300 transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 backdrop-blur-sm"
        ></div>
      )}
    </>
  );
}
