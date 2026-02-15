import React from 'react';
import { Clock, MapPin, Calendar, ArrowRight, Bus, Navigation, Shield } from 'lucide-react';
import { IMAGES, WHATSAPP_LINK } from '../constants';

const BusService: React.FC = () => {
  const departureTimes = ["8:25 PM", "9:25 PM", "10:25 PM"];

  return (
    <div className="flex flex-col min-h-screen bg-earth-50">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.reobus1} 
            alt="Luxury Bus Service" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-earth-900"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <div className="inline-block mb-4 px-4 py-2 bg-moss-600/80 backdrop-blur-sm rounded-full">
              <span className="text-white text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                <Bus size={16} /> Premium Travel
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-2xl">
              Delhi ↔ Manali<br/>Bus Service
            </h1>
            <p className="text-xl md:text-2xl text-earth-100 font-light max-w-2xl mx-auto">
              Comfortable overnight journeys connecting the capital to the mountains
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-moss-900 text-white py-8 -mt-1">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Clock className="text-moss-300 mb-2" size={32} />
            <h3 className="font-bold text-lg mb-1">Duration</h3>
            <p className="text-moss-200 text-sm">11 hrs 30 mins (avg)</p>
          </div>
          <div className="flex flex-col items-center">
            <Calendar className="text-moss-300 mb-2" size={32} />
            <h3 className="font-bold text-lg mb-1">Daily Service</h3>
            <p className="text-moss-200 text-sm">3 departures every evening</p>
          </div>
          <div className="flex flex-col items-center">
            <Bus className="text-moss-300 mb-2" size={32} />
            <h3 className="font-bold text-lg mb-1">Volvo 9600</h3>
            <p className="text-moss-200 text-sm">AC Semi-Sleeper Comfort</p>
          </div>
        </div>
      </section>

      {/* Volvo 9600 Feature Highlight */}
      <section className="relative py-20 px-4 md:px-8 overflow-hidden bg-gradient-to-br from-earth-900 via-stone-900 to-moss-900">
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-moss-600 to-moss-500 text-white rounded-full mb-6 shadow-lg">
              <Bus size={20} className="animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-widest">Premium Fleet</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-2xl">
              Travel in Asia's Longest Bus
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-moss-400 to-transparent mx-auto mb-6"></div>
            <p className="text-earth-200 text-xl leading-relaxed max-w-3xl mx-auto">
              Experience luxury on wheels with our flagship Volvo 9600 semi-sleeper coaches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="group bg-black/60 backdrop-blur-md border border-white/30 rounded-2xl p-6 hover:bg-black/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="w-14 h-14 bg-gradient-to-br from-moss-500 to-moss-700 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform shadow-lg">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Spacious Seating</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                Extra legroom and reclining seats for maximum comfort during your journey
              </p>
            </div>

            <div className="group bg-black/60 backdrop-blur-md border border-white/30 rounded-2xl p-6 hover:bg-black/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="w-14 h-14 bg-gradient-to-br from-clay-500 to-clay-700 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform shadow-lg">
                <Clock className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Smooth Ride</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                Advanced suspension system ensures a comfortable journey on mountain roads
              </p>
            </div>

            <div className="group bg-black/60 backdrop-blur-md border border-white/30 rounded-2xl p-6 hover:bg-black/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="w-14 h-14 bg-gradient-to-br from-stone-500 to-stone-700 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform shadow-lg">
                <Navigation className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Climate Control</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                Premium AC system maintains perfect temperature throughout the trip
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Route Information */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth-900 mb-4">
            Route Details
          </h2>
          <p className="text-earth-600 text-lg">Choose your direction and preferred departure time</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Delhi to Manali */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-moss-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-moss-600 rounded-full flex items-center justify-center">
                <Navigation className="text-white rotate-45" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-earth-900">Delhi → Manali</h3>
                <p className="text-earth-600 text-sm">Northbound Journey</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="text-moss-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-earth-900">Pickup Point</h4>
                  <p className="text-earth-700">Kashmir Gate, New Delhi</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="text-moss-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-earth-900">Departure Times</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {departureTimes.map((time) => (
                      <span key={time} className="px-3 py-1 bg-moss-100 text-moss-800 rounded-full text-sm font-semibold">
                        {time}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed - Kashmir Gate */}
            <div className="rounded-2xl overflow-hidden border-2 border-earth-200 mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.0842916773934!2d77.22844731508236!3d28.66739408241076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0683921e1f%3A0x3d6bdf9d3fe1df1a!2sKashmere%20Gate%20ISBT!5e0!3m2!1sen!2sin!4v1645000000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kashmir Gate Delhi Location"
              ></iframe>
            </div>
          </div>

          {/* Manali to Delhi */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-clay-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-clay-600 rounded-full flex items-center justify-center">
                <Navigation className="text-white -rotate-135" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-earth-900">Manali → Delhi</h3>
                <p className="text-earth-600 text-sm">Southbound Journey</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="text-clay-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-earth-900">Pickup Point</h4>
                  <p className="text-earth-700">Private Bus Stand, Manali</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="text-clay-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-earth-900">Departure Times</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {departureTimes.map((time) => (
                      <span key={time} className="px-3 py-1 bg-orange-100 text-orange-900 rounded-full text-sm font-semibold border border-orange-200">
                        {time}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed - Manali Private Bus Stand */}
            <div className="rounded-2xl overflow-hidden border-2 border-earth-200 mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3371.975!2d77.1879622!3d32.2341253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390489dddc4cd671%3A0xebe573e64709c68!2sManali%20Pvt%20Bus%20Stand!5e0!3m2!1sen!2sin!4v1771160045361!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Manali Private Bus Stand Location"
              ></iframe>
            </div>
          </div>

        </div>
      </section>

      {/* Bus Gallery */}
      <section className="py-20 px-4 md:px-8 bg-earth-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth-900 mb-4">
              Our Fleet
            </h2>
            <p className="text-earth-600 text-lg">Comfortable and well-maintained buses for your journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[IMAGES.reobus2, IMAGES.reobus3, IMAGES.reobus4, IMAGES.reobus1].map((img, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                <img 
                  src={img} 
                  alt={`Bus interior ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-moss-900 to-earth-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Bus className="w-16 h-16 mx-auto mb-6 text-moss-300" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Book Your Bus Tickets
          </h2>
          <p className="text-xl text-earth-200 mb-8 max-w-2xl mx-auto">
            Contact us via WhatsApp to reserve your seats. We'll help you choose the best departure time and confirm your booking instantly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-xl"
            >
              Book via WhatsApp <ArrowRight size={20} />
            </a>
            <a
              href="tel:+917807364252"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-earth-900 px-10 py-4 rounded-full font-bold text-lg transition-colors"
            >
              Call to Book
            </a>
          </div>

          <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <p className="text-sm text-earth-200">
              <strong className="text-white">Note:</strong> Departure times are subject to minor variations. 
              We recommend arriving 30 minutes before scheduled departure. Advance booking recommended during peak season.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BusService;
