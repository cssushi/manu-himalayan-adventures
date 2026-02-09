import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';
import { Flame, Music, Footprints } from 'lucide-react';

const Camping: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-stone-800 mb-6">Riverside Camping</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Disconnect to reconnect. Spend a night under the stars by the roaring Beas river. 
            Our packages are all-inclusive and designed for the perfect mountain evening.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
               <div className="bg-orange-100 p-4 rounded-full text-orange-600 mb-6">
                  <Flame size={32} />
               </div>
               <h3 className="font-bold text-xl text-stone-800 mb-2">Bonfire Night</h3>
               <p className="text-stone-600">Gather around a warm fire under the open sky. Share stories and enjoy the warmth.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
               <div className="bg-purple-100 p-4 rounded-full text-purple-600 mb-6">
                  <Music size={32} />
               </div>
               <h3 className="font-bold text-xl text-stone-800 mb-2">Music & Vibes</h3>
               <p className="text-stone-600">Light music to set the mood. Dance or just relax to the acoustic tunes.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
               <div className="bg-blue-100 p-4 rounded-full text-blue-600 mb-6">
                  <Footprints size={32} />
               </div>
               <h3 className="font-bold text-xl text-stone-800 mb-2">Riverside Walk</h3>
               <p className="text-stone-600">Safe, guided walks along the river bank. Listen to the water and breathe fresh air.</p>
            </div>
        </div>

        {/* Image Grid with CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
           <div className="h-80 rounded-3xl overflow-hidden shadow-lg relative group">
             <img src={IMAGES.camping} alt="Riverside Tents" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
             <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/70 to-transparent w-full">
               <p className="text-white font-bold">Cozy Bedding</p>
             </div>
           </div>
           <div className="h-80 rounded-3xl overflow-hidden shadow-lg relative group">
             <img src={IMAGES.tent_inside} alt="Inside Tent" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/70 to-transparent w-full">
               <p className="text-white font-bold">Premium Tents</p>
             </div>
           </div>
           <div className="h-80 rounded-3xl overflow-hidden shadow-lg relative group">
             <img src={IMAGES.skyView} alt="Night at Camp" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/70 to-transparent w-full">
               <p className="text-white font-bold">Night at Camp</p>
                </div>
           </div>

           <div className="h-80 rounded-3xl overflow-hidden shadow-lg relative bg-white flex flex-col items-center justify-center text-center p-8 border-2 border-stone-200">
                <h3 className="text-3xl font-serif font-bold text-forest-700 mb-4">Book Your Stay</h3>
                <p className="text-stone-700 mb-8 max-w-xs">Includes Dinner, Breakfast, Snacks, and Activities.</p>
                <Link 
                 to="/contact"
                 className="inline-block bg-amber-500 text-stone-900 font-bold py-3 px-8 rounded-full hover:bg-amber-600 transition-colors"
               >
                 Check Availability
               </Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Camping;