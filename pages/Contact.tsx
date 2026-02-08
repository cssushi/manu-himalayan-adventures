import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { PHONE_DISPLAY, EMAIL_ADDRESS, LOCATION, WHATSAPP_LINK } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-stone-800 text-center mb-12">Get in Touch</h1>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
           <p className="text-stone-600 mb-8">
             We prefer WhatsApp for all bookings and inquiries to ensure the fastest response. 
             Our team is available to assist you with package customization and current weather updates.
           </p>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
             <div className="flex flex-col items-center">
               <div className="bg-green-100 p-4 rounded-full text-green-700 mb-4">
                 <Phone size={32} />
               </div>
               <h3 className="font-bold text-stone-800 mb-2">Phone / WhatsApp</h3>
               <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-stone-600 hover:text-green-600 font-medium">{PHONE_DISPLAY}</a>
             </div>
             
             <div className="flex flex-col items-center">
               <div className="bg-amber-100 p-4 rounded-full text-amber-700 mb-4">
                 <Mail size={32} />
               </div>
               <h3 className="font-bold text-stone-800 mb-2">Email</h3>
               <a href={`mailto:${EMAIL_ADDRESS}`} className="text-stone-600 hover:text-amber-600 break-all">{EMAIL_ADDRESS}</a>
             </div>

             <div className="flex flex-col items-center">
               <div className="bg-blue-100 p-4 rounded-full text-blue-700 mb-4">
                 <MapPin size={32} />
               </div>
               <h3 className="font-bold text-stone-800 mb-2">Location</h3>
               <p className="text-stone-600">{LOCATION}</p>
             </div>
           </div>

           <a 
             href={WHATSAPP_LINK}
             target="_blank"
             rel="noopener noreferrer"
             className="inline-block bg-clay-700 hover:bg-clay-800 text-white font-bold py-4 px-12 rounded-full shadow-lg transition-transform hover:scale-105"
           >
             Chat on WhatsApp Now
           </a>
        </div>
        
          {/* Map preview removed per request */}
      </div>
    </div>
  );
};

export default Contact;