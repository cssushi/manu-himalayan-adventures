import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';

const Zipline: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif font-bold text-stone-800 mb-6 text-center">Scenic Zipline</h1>
        
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8">
           <div className="relative h-96">
             <img src={IMAGES.zipline} alt="Zipline" className="absolute inset-0 w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
             <div className="absolute bottom-8 left-8 text-white">
                <h2 className="text-3xl font-bold mb-2">Fly Across the River</h2>
                <p className="text-white/90">Safe, thrilling, and scenic.</p>
             </div>
           </div>
           
           <div className="p-12 text-center">
             <p className="text-stone-600 mb-8 leading-relaxed text-lg">
               One of the longest and most scenic ziplines in Manali. Glide over the river and forests securely harnessed to a high-strength steel cable. 
               This activity is perfect for families and children looking for a safe yet thrilling adventure.
             </p>
             
             <div className="flex justify-center gap-8 mb-10 text-stone-800 font-medium">
               <span>• 100% Safe Harness</span>
               <span>• River Crossing</span>
               <span>• Kids Friendly</span>
             </div>

             <div className="bg-amber-50 p-6 rounded-2xl border-2 border-amber-200 inline-block mb-10">
               <p className="text-stone-700 mb-2">Price</p>
               <p className="text-3xl font-bold text-amber-600">₹800</p>
             </div>
             <h3 className="text-2xl font-bold text-stone-800 mb-6 text-center">Experience the Thrill</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <img src={IMAGES.zipline1} alt="Zipline Experience 1" className="w-full h-64 object-cover rounded-2xl shadow-md hover:shadow-lg transition-shadow" />
               <img src={IMAGES.zipline2} alt="Zipline Experience 2" className="w-full h-64 object-cover rounded-2xl shadow-md hover:shadow-lg transition-shadow" />
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Zipline;