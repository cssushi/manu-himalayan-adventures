import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, PHONE_DISPLAY, IMAGES } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simpler nav behaviour: always use a solid, slightly translucent dark background
  // This ensures legibility on light pages while keeping subtle blur/shadow.
  const desktopBackground = 'bg-earth-900/95 backdrop-blur-md shadow-lg py-3';
  const mobileBackground = 'bg-earth-900 py-3 shadow-lg';
  const textColor = 'text-earth-50';
  const logoSize = scrolled ? 'h-10 w-10' : 'h-16 w-16';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-earth-900/80 backdrop-blur-md shadow-lg py-3 md:py-3">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group" onClick={closeMenu}>
            <img 
              src={IMAGES.logo}
              alt="Manu Himalayan Adventures" 
              className={`${logoSize} rounded-full border-2 border-white/20 transition-all duration-300 group-hover:scale-110 object-cover`}
            />
            <div className={`flex flex-col ${textColor}`}>
              <span className="font-serif font-bold text-lg md:text-xl leading-none tracking-wide">Manu Himalayan</span>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-80">Adventures</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center space-x-0.5 flex-wrap gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-2 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:bg-white/10 ${
                  location.pathname === link.path
                    ? 'bg-white/20 text-white'
                    : `hover:text-clay-500 ${textColor}`
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <Link
              to="/contact"
              className="ml-2 flex items-center gap-1 bg-moss-700 hover:bg-moss-500 text-white px-3 py-1.5 rounded-full font-bold text-[10px] uppercase tracking-wider transition-all hover:scale-105 shadow-lg border border-moss-500"
            >
              <Phone size={12} />
              <span>Book</span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-full hover:bg-white/10 focus:outline-none transition-colors ${textColor}`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

        {/* Mobile Menu Overlay (fully opaque, fills viewport) */}
        <div className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} xl:hidden`}>
          <div className="flex flex-col space-y-4 bg-earth-900/95 min-h-screen p-6 w-full">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className="text-2xl font-serif font-bold text-earth-100 hover:text-clay-500 transition-colors border-b border-earth-800 pb-2"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-8 flex justify-center items-center gap-2 bg-moss-700 text-white py-4 rounded-xl font-bold uppercase tracking-widest"
            >
              Call: {PHONE_DISPLAY}
            </Link>
          </div>
          
          <button onClick={closeMenu} className="absolute top-6 right-6 text-white p-2">
            <X size={32} />
          </button>
      </div>
    </nav>
  );
};

export default Navbar;