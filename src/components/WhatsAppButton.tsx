import React from 'react';
import { Sparkles } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[999] group">
      <div className="relative flex items-center justify-center">
        {/* Floating Cleaner Animation */}
        <div className="absolute -top-4 text-[#25D366] animate-float">
          <Sparkles size={20} />
        </div>

        {/* WhatsApp Button using img icon */}
        <a
          href="https://wa.me/919497436336"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-[#25D366] to-[#1A8B3C] p-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <img
            src="https://img.icons8.com/ios-filled/48/000000/whatsapp.png"
            alt="WhatsApp"
            className="w-10 h-10 dark:invert"
          />
        </a>
      </div>
    </div>
  );
};

export default WhatsAppButton;