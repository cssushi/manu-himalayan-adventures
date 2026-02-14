import React from 'react';
import { Bed, Wifi, Car, Coffee, Check, Star, MapPin, Eye, ExternalLink } from 'lucide-react';
import { IMAGES, MMT_LINK, GOIBIBO_LINK, BOOKING_LINK } from '../constants';
import { Link } from 'react-router-dom';

const HotelStay: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
       <div className="relative w-full h-[120vh] shadow-2xl flex items-center justify-center bg-black/40">
        <img src={IMAGES.hotel} alt="Hotel Rockland Inn" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center pointer-events-none">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white drop-shadow-lg text-center">Hotel Rockland Inn</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">Hotel Rockland Inn</h2>
            <p className="text-stone-600 mb-6 leading-relaxed">
              Our property offers the perfect blend of accessibility and quiet mountain vibes. 
              Whether you are a couple, a family, or a group of friends, our clean, spacious rooms with wooden interiors provide the cozy warmth you need in Manali.
            </p>
            
            <div className="flex gap-4 mb-8 flex-wrap">
               <div className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full flex items-center gap-2 font-bold shadow-sm border border-blue-100">
                  <MapPin size={18} /> Quite and Serene
               </div>
               <div className="bg-purple-50 text-purple-800 px-4 py-2 rounded-full flex items-center gap-2 font-bold shadow-sm border border-purple-100">
                  <Eye size={18} /> Mountain View Available
               </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
               <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-stone-100">
                 <Wifi className="text-forest-600 mb-2" />
                 <span className="text-sm font-medium">Free WiFi</span>
               </div>
               <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-stone-100">
                 <Car className="text-forest-600 mb-2" />
                 <span className="text-sm font-medium">Parking</span>
               </div>
               <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-stone-100">
                 <Bed className="text-forest-600 mb-2" />
                 <span className="text-sm font-medium">Clean Linen</span>
               </div>
               <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-stone-100">
                 <Coffee className="text-forest-600 mb-2" />
                 <span className="text-sm font-medium">Room Service</span>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="h-64 rounded-3xl overflow-hidden shadow-lg relative group">
                <img src={IMAGES.rockland1} alt="Hotel Room" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="h-64 rounded-3xl overflow-hidden shadow-lg relative group">
                <img src={IMAGES.rockland2} alt="Hotel Exterior" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="h-64 rounded-3xl overflow-hidden shadow-lg relative group">
                <img src={IMAGES.rockland3} alt="Hotel Amenities" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="h-64 rounded-3xl overflow-hidden shadow-lg relative group">
                <img src={IMAGES.rockland4} alt="Hotel View" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 mb-8">
              <h3 className="font-bold text-amber-800 mb-2">Special Offers</h3>
              <p className="text-sm text-amber-900 font-medium">Group discounts available for large families and friends!</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm mb-8 border-2 border-amber-200">
              <h3 className="font-bold text-stone-800 mb-4 text-center text-lg">Pricing</h3>
              <p className="text-center text-stone-700 mb-2">Per Night</p>
              <p className="text-center text-3xl font-bold text-amber-600">₹2,800</p>
            </div>

            <section className="bg-white p-6 rounded-2xl shadow-sm mb-8">
               <h3 className="font-bold text-stone-800 mb-4">Location</h3>
               <a href="https://maps.app.goo.gl/xfuMWvpS2XBNF2mG9" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-2xl shadow-sm p-8 border border-stone-200 hover:shadow-lg hover:border-forest-300 transition-all mb-6">
                 <div className="flex items-center justify-between">
                   <div>
                     <h4 className="text-lg font-bold text-stone-800 mb-2">Hotel Rockland Inn</h4>
                     <p className="text-stone-600 text-sm">Manali, Himachal Pradesh</p>
                   </div>
                   <div className="text-forest-600">
                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                     </svg>
                   </div>
                 </div>
               </a>
               <iframe width="100%" height="400" style={{ border: 0 }} loading="lazy" allowFullScreen src="https://www.google.com/maps?q=Hotel+Rockland+Inn,Manali&output=embed" className="rounded-2xl shadow-sm border border-stone-200"></iframe>
            </section>
            
            
          </div>

          <div className="lg:col-span-1">
             <div className="bg-white p-6 rounded-2xl shadow-lg sticky top-24">
               <h3 className="text-xl font-bold mb-6 text-stone-800">Direct Booking</h3>
               
               <div className="space-y-4 mb-8">
                 <div className="flex items-start gap-3">
                   <Check className="text-green-500 mt-1" size={16} />
                   <p className="text-sm text-stone-600">Walking distance to Mall Road</p>
                 </div>
                 <div className="flex items-start gap-3">
                   <Check className="text-green-500 mt-1" size={16} />
                   <p className="text-sm text-stone-600">24/7 Hot Water</p>
                 </div>
               </div>

               <Link 
                to="/contact"
                className="block w-full bg-amber-500 hover:bg-amber-600 text-stone-900 text-center font-bold py-4 rounded-xl transition-all mb-4 shadow-lg hover:shadow-2xl border-2 border-amber-600"
               >
                Check Availability
               </Link>
               <p className="text-center text-xs text-stone-400">Best rates guaranteed via direct WhatsApp booking</p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HotelStay;