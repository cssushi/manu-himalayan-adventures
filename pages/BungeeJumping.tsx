import React from 'react';
import { IMAGES, WHATSAPP_LINK } from '../constants';

const BungeeJumping: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif font-bold text-stone-800 mb-6 text-center">Bungee Jumping</h1>
        
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8">
           <div className="relative h-96">
              <img src={IMAGES.bungee} alt="Bungee Jumping" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h2 className="text-3xl font-bold mb-2">Kothi Manali Bungee</h2>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">Certified Safe</span>
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
               <a 
                 href={WHATSAPP_LINK}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-block bg-clay-700 hover:bg-clay-800 text-white font-bold py-4 px-12 rounded-full shadow-lg transition-transform hover:scale-105"
               >
                 Book Now via WhatsApp
               </a>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BungeeJumping;