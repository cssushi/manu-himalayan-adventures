import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';
import ActivityCard from '../components/ActivityCard';

const AdventureSports: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-stone-800 mb-4">Adventure Sports in Manali</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            From the rushing waters of the Beas to the open skies, we offer the complete Himalayan adrenaline package.
            Safety certified and family friendly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <Link to="/river-rafting" className="group">
             <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
               <div className="h-64 overflow-hidden relative">
                 <img src={IMAGES.rafting} alt="Rafting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</div>
               </div>
               <div className="p-6 flex-grow">
                 <h3 className="text-xl font-bold text-stone-800 mb-2">River Rafting</h3>
                 <p className="text-stone-600 text-sm">13km white water rafting on Beas river. Grade II & III rapids.</p>
               </div>
               <div className="px-6 pb-6 text-forest-600 font-bold flex items-center gap-2">View Details &rarr;</div>
             </div>
           </Link>

           <Link to="/paragliding" className="group">
             <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
               <div className="h-64 overflow-hidden relative">
                 <img src={IMAGES.paragliding} alt="Paragliding" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               </div>
               <div className="p-6 flex-grow">
                 <h3 className="text-xl font-bold text-stone-800 mb-2">Paragliding</h3>
                 <p className="text-stone-600 text-sm">High fly tandem rides. Experience the bird's eye view of Kullu Valley.</p>
               </div>
               <div className="px-6 pb-6 text-forest-600 font-bold flex items-center gap-2">View Details &rarr;</div>
             </div>
           </Link>

           <Link to="/bungee-jumping" className="group">
             <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
               <div className="h-64 overflow-hidden relative">
                 <img src={IMAGES.bungee} alt="Bungee" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               </div>
               <div className="p-6 flex-grow">
                 <h3 className="text-xl font-bold text-stone-800 mb-2">Bungee Jumping</h3>
                 <p className="text-stone-600 text-sm">Take the leap of faith at Kothee Manali. Safe setup with trained masters.</p>
               </div>
               <div className="px-6 pb-6 text-forest-600 font-bold flex items-center gap-2">View Details &rarr;</div>
             </div>
           </Link>

           <Link to="/zipline" className="group">
             <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
               <div className="h-64 overflow-hidden relative">
                 <img src={IMAGES.zipline} alt="Zipline" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               </div>
               <div className="p-6 flex-grow">
                 <h3 className="text-xl font-bold text-stone-800 mb-2">Zipline</h3>
                 <p className="text-stone-600 text-sm">Long scenic ziplines across the river and valley. Great for families.</p>
               </div>
               <div className="px-6 pb-6 text-forest-600 font-bold flex items-center gap-2">View Details &rarr;</div>
             </div>
           </Link>

           <Link to="/camping" className="group">
             <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
               <div className="h-64 overflow-hidden relative">
                 <img src={IMAGES.camping} alt="Camping" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               </div>
               <div className="p-6 flex-grow">
                 <h3 className="text-xl font-bold text-stone-800 mb-2">Riverside Camping</h3>
                 <p className="text-stone-600 text-sm">Stay in luxury tents by the river. Bonfires, music, and nature.</p>
               </div>
               <div className="px-6 pb-6 text-forest-600 font-bold flex items-center gap-2">View Details &rarr;</div>
             </div>
           </Link>
        </div>
      </div>
    </div>
  );
};

export default AdventureSports;