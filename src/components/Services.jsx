'use client';
import React from 'react';

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-br from-blue-50 via-sky-100 to-indigo-100 overflow-hidden">
      
      {/* Decorative Blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-sky-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/3 left-1/2 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-tight text-center mb-8">Our Services</h3>

        <div className="grid md:grid-cols-3 gap-10">
          
          {/* Card 1 */}
          <div className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full shadow-lg mb-6 text-3xl border-2 border-indigo-300">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h4 className="text-2xl font-semibold mb-4 text-slate-800">Computer Repair</h4>
            <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
              <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i> Hardware & software issues fix</li>
              <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i> Laptop, desktop & peripherals</li>
              <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i> Fast turnaround & affordable</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 flex items-center justify-center bg-sky-100 text-sky-600 rounded-full shadow-lg mb-6 text-3xl border-2 border-sky-300">
              <i className="fas fa-network-wired"></i>
            </div>
            <h4 className="text-2xl font-semibold mb-4 text-slate-800">Networking Setup</h4>
            <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
              <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i> Router installation & setup</li>
              <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i> LAN & WiFi configuration</li>
              <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i> Office/home network optimization</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full shadow-lg mb-6 text-3xl border-2 border-purple-300">
              <i className="fas fa-tools"></i>
            </div>
            <h4 className="text-2xl font-semibold mb-4 text-slate-800">Annual Maintenance</h4>
            <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
              <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i> AMC plans for homes & offices</li>
              <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i> Regular checkups & tune-ups</li>
              <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i> System health monitoring</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
