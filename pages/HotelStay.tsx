import React from 'react';
import { Bed, Wifi, Car, Coffee, Check, Star, MapPin, Eye, ExternalLink } from 'lucide-react';
import { IMAGES, WHATSAPP_LINK, MMT_LINK, GOIBIBO_LINK, BOOKING_LINK } from '../constants';

const HotelStay: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
       <div className="relative h-[50vh] w-full">
        <img src={IMAGES.hotel} alt="Comfortable Stays" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white drop-shadow-lg text-center">Comfortable Stays in Manali</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">Manu Himalayan Homestay & Hotel</h2>
            <p className="text-stone-600 mb-6 leading-relaxed">
              Located peacefully near Mall Road, our property offers the perfect blend of accessibility and quiet mountain vibes. 
              Whether you are a couple, a family, or a group of friends, our clean, spacious rooms with wooden interiors provide the cozy warmth you need in Manali.
            </p>
            
            <div className="flex gap-4 mb-8 flex-wrap">
               <div className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full flex items-center gap-2 font-bold shadow-sm border border-blue-100">
                  <MapPin size={18} /> Near Mall Road
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

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 mb-8">
              <h3 className="font-bold text-amber-800 mb-2">Special Offers</h3>
              <p className="text-sm text-amber-900 font-medium">Group discounts available for large families and friends!</p>
            </div>

            <section className="bg-white p-6 rounded-2xl shadow-sm mb-8">
               <h3 className="font-bold text-stone-800 mb-4">Property Video Tour</h3>
               <video src="/11.mp4" poster={IMAGES.hotel} controls className="w-full rounded-xl" playsInline />
            </section>
            
            <div>
               <h3 className="font-bold text-stone-800 mb-4">Book via our Partners</h3>
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                 <a href={MMT_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white px-4 py-3 rounded-xl border border-stone-200 shadow-sm font-bold text-red-600 hover:shadow-md hover:border-red-200 transition-all">
                   MakeMyTrip <ExternalLink size={14} />
                 </a>
                 <a href={GOIBIBO_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white px-4 py-3 rounded-xl border border-stone-200 shadow-sm font-bold text-blue-600 hover:shadow-md hover:border-blue-200 transition-all">
                   Goibibo <ExternalLink size={14} />
                 </a>
                 <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white px-4 py-3 rounded-xl border border-stone-200 shadow-sm font-bold text-blue-900 hover:shadow-md hover:border-blue-200 transition-all">
                   Booking.com <ExternalLink size={14} />
                 </a>
               </div>
            </div>
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

               <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-amber-500 hover:bg-amber-600 text-stone-900 text-center font-bold py-4 rounded-xl transition-all mb-4 shadow-lg hover:shadow-2xl border-2 border-amber-600"
               >
                Check Availability
               </a>
               <p className="text-center text-xs text-stone-400">Best rates guaranteed via direct WhatsApp booking</p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HotelStay;