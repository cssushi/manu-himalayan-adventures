import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';
import { MapPin } from 'lucide-react';

const BungeeJumping: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif font-bold text-stone-800 mb-6 text-center">Bungee Jumping</h1>
        
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8">
           <div className="relative h-96">
              <img src={IMAGES.bungee1} alt="Bungee Jumping" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h2 className="text-3xl font-bold mb-2">Kothi Manali Bungee</h2>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">Certified Safe</span>
              </div>
              <div className="absolute top-6 right-6">
                <a href="https://maps.app.goo.gl/hYYywUge45rYpFiz7" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-2 rounded-full text-sm hover:bg-white/20">
                  <MapPin size={16} /> View Location
                </a>
              </div>
           </div>

           <div className="p-12">
             <p className="text-stone-600 mb-8 leading-relaxed text-lg text-center">
               Challenge your fears with our professional Bungee Jumping setup in Kothi. 
               Operated by highly trained staff with international standard safety cords and harnesses. 
               Feel the adrenaline rush as you jump into the scenic valley backdrop.
             </p>

             <div className="border-t border-stone-100 pt-8 mb-8">
                <h3 className="font-bold text-stone-800 mb-6 text-center">Traveler Reviews</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-stone-50 p-6 rounded-2xl">
                    <p className="text-stone-600 italic mb-4">"The staff was very encouraging. I was terrified but they helped me jump. Best feeling ever!"</p>
                    <p className="text-sm font-bold text-stone-900">- Rohan, Delhi</p>
                  </div>
                   <div className="bg-stone-50 p-6 rounded-2xl">
                    <p className="text-stone-600 italic mb-4">"Very professional setup. Safety checks were thorough."</p>
                    <p className="text-sm font-bold text-stone-900">- Vikram, Punjab</p>
                  </div>
                </div>
             </div>
             
             <div className="text-center">
               <Link 
                 to="/contact"
                 className="inline-block bg-clay-700 hover:bg-clay-800 text-white font-bold py-4 px-12 rounded-full shadow-lg transition-transform hover:scale-105"
               >
                 Book Now via Contact
               </Link>
             </div>

             {/* Bungee Images Gallery */}
             <div className="mt-12">
               <h3 className="text-2xl font-bold text-stone-800 mb-6">Experience the Jump</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <img src="/10.jpeg" alt="Bungee Jump Experience 1" className="w-full h-64 object-cover rounded-2xl shadow-md hover:shadow-lg transition-shadow" />
                 <img src={IMAGES.bungee2} alt="Bungee Jump Experience 2" className="w-full h-64 object-cover rounded-2xl shadow-md hover:shadow-lg transition-shadow" />
               </div>
             </div>
           </div>

           {/* Location Section */}
           <div className="mt-12">
             <h3 className="text-2xl font-bold text-stone-800 mb-4">Location</h3>
             <a href="https://maps.app.goo.gl/hYYywUge45rYpFiz7" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-2xl shadow-md p-12 border-2 border-stone-300 hover:shadow-lg hover:border-forest-400 transition-all mb-6">
               <div className="flex items-center justify-between">
                 <div>
                   <h4 className="text-2xl font-bold text-stone-800 mb-3">Atal Bihari Vajpayee Bridge - Bungee Point</h4>
                   <p className="text-stone-600 text-base">Raison River, Aut Valley</p>
                 </div>
                 <div className="text-forest-600">
                   <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                   </svg>
                 </div>
               </div>
             </a>
             <iframe width="100%" height="400" style={{ border: 0 }} loading="lazy" allowFullScreen src="https://www.google.com/maps?q=32.316980,77.187161&z=15&output=embed" className="rounded-2xl shadow-sm border border-stone-200"></iframe>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BungeeJumping;