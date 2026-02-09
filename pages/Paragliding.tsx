import React from 'react';
import { Link } from 'react-router-dom';
import { Wind, Cloud, ThumbsUp, CheckCircle, ShieldAlert } from 'lucide-react';
import { IMAGES } from '../constants';

const Paragliding: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero */}
      <div className="relative h-[60vh] w-full">
        <img src={IMAGES.paragliding} alt="Paragliding in Manali" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white drop-shadow-lg text-center">High Fly Paragliding</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <section className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
                <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">Fly Like a Bird</h2>
                <p className="text-stone-600 mb-6 leading-relaxed text-lg">
                  Soar 8000 feet above sea level with a 360-degree view of the snow-capped Himalayan peaks. 
                  Our tandem flights require no prior experience. Sit back, relax, and let our certified pilot handle the skies.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-stone-50 p-6 rounded-2xl">
                    <h4 className="font-bold text-stone-800 mb-1">Duration</h4>
                    <p className="text-stone-600">8 - 10 Mins</p>
                  </div>
                   <div className="bg-stone-50 p-6 rounded-2xl">
                    <h4 className="font-bold text-stone-800 mb-1">Type</h4>
                    <p className="text-stone-600">Tandem Flight</p>
                  </div>
                </div>
              </section>

              <section className="bg-red-50 border-2 border-red-100 p-8 rounded-3xl shadow-sm relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                     <div className="bg-white p-2 rounded-full shadow-sm text-red-600">
                        <ShieldAlert size={28} />
                     </div>
                     <h3 className="text-2xl font-bold text-stone-900 uppercase tracking-wide">Safety First</h3>
                  </div>
                  
                  <p className="text-stone-800 mb-6 font-medium text-lg">
                    Zero tolerance on safety. Daily equipment inspections and strictly weather-dependent flights.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex gap-3 items-center bg-white/60 p-3 rounded-xl">
                      <Wind className="text-stone-700" />
                      <span className="text-sm font-bold text-stone-800">Weather Checked</span>
                    </div>
                    <div className="flex gap-3 items-center bg-white/60 p-3 rounded-xl">
                      <ThumbsUp className="text-stone-700" />
                      <span className="text-sm font-bold text-stone-800">Certified Pilots</span>
                    </div>
                    <div className="flex gap-3 items-center bg-white/60 p-3 rounded-xl">
                      <CheckCircle className="text-stone-700" />
                      <span className="text-sm font-bold text-stone-800">Pre-Flight Brief</span>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
                <h3 className="text-2xl font-bold text-stone-800 mb-6">Experience the Magic</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <img src="/paramain.jpg" alt="Paragliding Main View" className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <img src={IMAGES.paragliding2} alt="Paragliding View" className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <img src={IMAGES.paragliding3} alt="Sky Adventure" className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
              </section>
            </div>

            <div className="lg:col-span-1">
               <div className="bg-stone-900 text-white p-8 rounded-3xl shadow-xl sticky top-24">
                  <h3 className="text-2xl font-bold mb-6 font-serif">Book Flight</h3>
                  <ul className="text-stone-300 space-y-4 mb-8">
                    <li className="flex gap-2"><CheckCircle size={18} className="text-moss-500" /> High Fly from Dobhi/Solang</li>
                    <li className="flex gap-2"><CheckCircle size={18} className="text-moss-500" /> Professional Pilot</li>
                    <li className="flex gap-2"><CheckCircle size={18} className="text-moss-500" /> Transport Included</li>
                  </ul>
                  <Link
                    to="/contact"
                    className="block w-full bg-moss-600 hover:bg-moss-500 text-white text-center font-bold py-4 rounded-xl transition-all hover:scale-105 shadow-lg mb-6"
                  >
                    Book on Contact
                  </Link>
                  <p className="text-xs text-center text-stone-500">
                    No advance payment needed to block inquiry.
                  </p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Paragliding;