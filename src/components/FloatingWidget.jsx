'use client';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

export default function FloatingWidget() {
  return (
    <div className="fixed bottom-6 right-3 md:right-6 flex flex-col items-end gap-4 z-50">
      
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919425829959?text=Hello%20Mansi%20Computer%20Solutions%2C%20I%20am%20interested%20in%20your%20services." 
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition transform hover:scale-105"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-xl md:text-2xl" />
      </a>

      {/* Call Button */}
      <a
        href="tel:+919425829959" 
        className="w-12 h-12 md:w-14 md:h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg transition transform hover:scale-105"
        title="Call Now"
      >
        <FaPhoneAlt className="text-xl md:text-2xl" />
      </a>

    </div>
  );
}
