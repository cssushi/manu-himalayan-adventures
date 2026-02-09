import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { PHONE_DISPLAY, EMAIL_ADDRESS, LOCATION, IMAGES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
               <img 
                src={IMAGES.logo}
                alt="Manu Himalayan Adventures" 
                className="h-12 w-12 rounded-full border-2 border-forest-400 object-cover flex-shrink-0"
              />
              <span className="font-serif font-bold text-lg text-white">Manu Himalayan</span>
            </Link>
            <p className="text-sm mb-4">
              Your trusted partner for safe and unforgettable Himalayan adventures in Manali. Certified guides and premium service.
            </p>
          </div>

          <div>
            <h3 className="text-white font-serif font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/river-rafting" className="hover:text-forest-400 transition">River Rafting</Link></li>
              <li><Link to="/paragliding" className="hover:text-forest-400 transition">Paragliding</Link></li>
              <li><Link to="/vehicle-rental" className="hover:text-forest-400 transition">Vehicle Rental</Link></li>
              <li><Link to="/hotel-stay" className="hover:text-forest-400 transition">Hotel Stay</Link></li>
              <li><Link to="/contact" className="hover:text-forest-400 transition">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif font-bold mb-4">Adventures</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/bungee-jumping" className="hover:text-forest-400 transition">Bungee Jumping</Link></li>
              <li><Link to="/zipline" className="hover:text-forest-400 transition">Zipline</Link></li>
              <li><Link to="/camping" className="hover:text-forest-400 transition">Riverside Camping</Link></li>
              <li><Link to="/sightseeing" className="hover:text-forest-400 transition">Local Sightseeing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-forest-500 mt-0.5 flex-shrink-0" />
                <span>{LOCATION}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-forest-500 flex-shrink-0" />
                <Link to="/contact" className="hover:text-white">{PHONE_DISPLAY}</Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-forest-500 flex-shrink-0" />
                <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-white break-all">{EMAIL_ADDRESS}</a>
              </li>
            </ul>
          </div>

        </div>
        <div className="border-t border-stone-800 mt-8 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Manu Himalayan Adventures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;