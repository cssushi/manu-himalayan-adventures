import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhatsAppButton: React.FC = () => {
  return (
    <Link
      to="/contact"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 animate-bounce-slow"
      aria-label="Contact us"
    >
      <MessageCircle size={24} fill="white" />
      <span className="hidden md:inline">Book on WhatsApp</span>
    </Link>
  );
};

export default WhatsAppButton;