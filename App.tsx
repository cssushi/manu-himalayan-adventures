import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import AdventureSports from './pages/AdventureSports';
import RiverRafting from './pages/RiverRafting';
import Paragliding from './pages/Paragliding';
import BungeeJumping from './pages/BungeeJumping';
import Zipline from './pages/Zipline';
import Camping from './pages/Camping';
import VehicleRental from './pages/VehicleRental';
import HotelStay from './pages/HotelStay';
import Sightseeing from './pages/Sightseeing';
import Packages from './pages/Packages';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Balloon from './pages/Balloon';
import ManaliLehBikeTour from './pages/ManaliLehBikeTour';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  // Dynamically set body padding-top equal to the navbar height so the fixed nav
  // never covers content. Use ResizeObserver to react to height changes
  // (menu open/close, responsive layout).
  useEffect(() => {
    const nav = document.querySelector('nav');
    if (!nav) return;

    const setPadding = () => {
      const height = Math.ceil((nav as HTMLElement).getBoundingClientRect().height);
      document.body.style.paddingTop = `${height}px`;
    };

    setPadding();

    // ResizeObserver covers changes to nav size (e.g., mobile menu open)
    let ro: ResizeObserver | null = null;
    if ((window as any).ResizeObserver) {
      ro = new (window as any).ResizeObserver(setPadding);
      ro.observe(nav as Element);
    }

    window.addEventListener('resize', setPadding);
    // Also update on load in case fonts/images change layout
    window.addEventListener('load', setPadding);

    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener('resize', setPadding);
      window.removeEventListener('load', setPadding);
      // cleanup padding
      document.body.style.paddingTop = '0';
    };
  }, []);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-stone-900 bg-stone-50 selection:bg-forest-200 selection:text-forest-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adventure-sports" element={<AdventureSports />} />
            <Route path="/river-rafting" element={<RiverRafting />} />
            <Route path="/paragliding" element={<Paragliding />} />
            <Route path="/bungee-jumping" element={<BungeeJumping />} />
            <Route path="/balloon" element={<Balloon />} />
            <Route path="/manali-leh-bike" element={<ManaliLehBikeTour />} />
            <Route path="/zipline" element={<Zipline />} />
            <Route path="/camping" element={<Camping />} />
            <Route path="/vehicle-rental" element={<VehicleRental />} />
            <Route path="/hotel-stay" element={<HotelStay />} />
            <Route path="/sightseeing" element={<Sightseeing />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </HashRouter>
  );
};

export default App;