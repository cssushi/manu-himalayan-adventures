import React from 'react';
import { Camera, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';

const Sightseeing: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-12">
       <div className="max-w-6xl mx-auto px-4">
         <h1 className="text-4xl font-serif font-bold text-center text-stone-800 mb-16">Local Sightseeing Gems</h1>

         {/* Jana Waterfall */}
         <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-16 flex flex-col md:flex-row group hover:shadow-2xl transition-shadow duration-300">
          <div className="md:w-1/2 h-64 md:h-80 overflow-hidden">
               <img src="/janafinal.jpeg" alt="Jana Waterfall" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
               <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4 flex items-center gap-2">
                 <MapPin className="text-forest-600" /> Jana Waterfall
               </h2>
               <p className="text-stone-600 mb-8 leading-relaxed">
                 A hidden gem surrounded by deodar and pine forests. This 30ft waterfall is perfect for a relaxing day out. 
                 Enjoy a small trek through apple orchards and enjoy local Himachali food at the nearby stalls.
               </p>
               <Link to="/contact" className="inline-block bg-forest-600 text-white px-8 py-3 rounded-full font-bold w-fit hover:bg-forest-700 transition-colors">Plan a Visit</Link>
            </div>
         </div>

         {/* Krishna Temple */}
         <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-16 flex flex-col md:flex-row-reverse group hover:shadow-2xl transition-shadow duration-300">
            <div className="md:w-1/2 h-72 md:h-auto overflow-hidden">
               <img src={IMAGES.temple} alt="Krishna Temple" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
               <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4 flex items-center gap-2">
                 <MapPin className="text-forest-600" /> Krishna Temple, Naggar
               </h2>
               <p className="text-stone-600 mb-8 leading-relaxed">
                 Also known as Murlidhar Temple, this historic site features beautiful Pagoda-style architecture with intricate wood and stone carvings.
                 Located on a hilltop, it offers panoramic views of the Kullu valley.
               </p>
               <Link to="/contact" className="inline-block bg-forest-600 text-white px-8 py-3 rounded-full font-bold w-fit hover:bg-forest-700 transition-colors">Plan a Visit</Link>
            </div>
         </div>
         
         {/* Jogni Falls */}
         <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-16 flex flex-col md:flex-row group hover:shadow-2xl transition-shadow duration-300">
           <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img src="/jogni.jpeg" alt="Jogni Falls" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
             </div>
             <div className="md:w-1/2 p-10 flex flex-col justify-center">
                <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4 flex items-center gap-2">
                  <MapPin className="text-forest-600" /> Jogni Falls
                </h2>
                <p className="text-stone-600 mb-8 leading-relaxed">
                  A short, scenic walk from Old Manali brings you to Jogni Falls — a local favorite for its tranquil pools and picnic spots.
                </p>
                <Link to="/contact" className="inline-block bg-forest-600 text-white px-8 py-3 rounded-full font-bold w-fit hover:bg-forest-700 transition-colors">Plan a Visit</Link>
             </div>
         </div>

         {/* Lama Dugh */}
         <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-16 flex flex-col md:flex-row-reverse group hover:shadow-2xl transition-shadow duration-300">
            <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
               <img src="/lamadugh.jpeg" alt="Lama Dugh" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
               <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4 flex items-center gap-2">
                 <MapPin className="text-forest-600" /> Lama Dugh
               </h2>
               <p className="text-stone-600 mb-8 leading-relaxed">
                 A peaceful meadow known for sweeping views and seasonal wildflowers — perfect for an easy half-day outing.
               </p>
               <Link to="/contact" className="inline-block bg-forest-600 text-white px-8 py-3 rounded-full font-bold w-fit hover:bg-forest-700 transition-colors">Plan a Visit</Link>
            </div>
         </div>
         <div className="text-center mt-12 bg-stone-100 p-8 rounded-2xl">
           <p className="text-stone-600 mb-4 text-lg">We also arrange customized tours to Solang Valley, Atal Tunnel, and Hadimba Temple.</p>
           <Link to="/contact" className="text-forest-700 font-bold underline hover:text-forest-900 text-lg">Chat with us to customize your tour</Link>
         </div>

       </div>
    </div>
  );
};

export default Sightseeing;