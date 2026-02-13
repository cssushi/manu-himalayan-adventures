import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Shield, Clock, MapPin, Users, CheckCircle, Smile } from 'lucide-react';
import { IMAGES } from '../constants';
import ReviewCard from '../components/ReviewCard';

const RiverRafting: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero */}
      <div className="relative h-[60vh] w-full">
        <img src={IMAGES.rafting} alt="Beas River Rafting" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white drop-shadow-lg text-center">River Rafting on Beas River</h1>
          <div className="absolute top-6 right-6">
            <a href="https://maps.app.goo.gl/Y5Gf264y9Sg3KKh2A" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-2 rounded-full text-sm hover:bg-white/20">
              <MapPin size={16} /> View Location
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <section className="bg-white p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4">A Family Friendly Adventure</h2>
              <p className="text-stone-600 mb-4 leading-relaxed">
                Experience the thrill of white water rafting in the crystal clear waters of the Beas River with your loved ones. 
                Manu Himalayan Adventures specializes in family rafting trips that balance excitement with absolute safety.
                Starting from Pirdi, our stretch offers splashes and smiles for everyone, from kids to seniors.
              </p>
              <div className="flex items-center gap-4 bg-green-50 p-4 rounded-xl border border-green-100">
                <Smile className="text-green-600" size={32} />
                <div>
                  <h4 className="font-bold text-green-900">Safe for Kids</h4>
                  <p className="text-sm text-green-800">Special attention and gear provided for children. Our guides are experts in managing family groups.</p>
                </div>
              </div>
            </section>

            {/* Video player: make the rafting video viewable (controls) rather than autoplay hero */}
            <section className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-stone-800 mb-4">Rafting: Watch a Short Clip</h3>
              <div className="w-full rounded-xl overflow-hidden">
                <video src="/2.mp4" poster={IMAGES.rafting} className="w-full h-auto" controls playsInline />
              </div>
            </section>

            <section className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-stone-800 mb-6">Rafting Moments</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img src={IMAGES.rafting1} alt="Rafting Experience 1" className="w-full h-80 object-cover rounded-2xl shadow-md hover:shadow-lg transition-shadow" />
                <img src={IMAGES.rafting2} alt="Rafting Experience 2" className="w-full h-80 object-cover rounded-2xl shadow-md hover:shadow-lg transition-shadow" />
                <img src={IMAGES.rafting3} alt="Rafting Experience 3" className="w-full h-80 object-cover rounded-2xl shadow-md hover:shadow-lg transition-shadow col-span-1 md:col-span-2" />
              </div>
            </section>

            <section className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-stone-800 mb-6">Why Choose Us?</h3>
              <ul className="space-y-3">
                 <li className="flex items-start gap-2">
                   <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                   <span className="text-stone-700"><strong>Professional Guides:</strong> Licensed experts with years of experience on the Beas.</span>
                 </li>
                 <li className="flex items-start gap-2">
                   <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                   <span className="text-stone-700"><strong>Top Safety Gear:</strong> We never compromise on the quality of helmets and life jackets.</span>
                 </li>
                 <li className="flex items-start gap-2">
                   <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                   <span className="text-stone-700"><strong>Friendly Staff:</strong> We ensure your family feels comfortable and happy throughout the trip.</span>
                 </li>
                 <li className="flex items-start gap-2">
                   <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                   <span className="text-stone-700"><strong>Changing Rooms:</strong> Clean and accessible changing facilities near the river.</span>
                 </li>
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-sky-900/90 text-white p-6 rounded-2xl shadow-lg sticky top-24">
              <h3 className="text-xl font-bold mb-4">Book Your Raft</h3>
              <p className="mb-6 text-white text-sm">March to June is the best season! Slots fill up fast.</p>
              <Link 
                to="/contact"
                className="block w-full bg-emerald-700 hover:bg-emerald-800 text-white text-center font-bold py-3 rounded-xl transition-colors mb-4"
              >
                Book via Contact
              </Link>
              <p className="text-xs text-center text-white/80">Instant confirmation • No booking fees</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
               <h4 className="font-bold mb-4 text-stone-800">Customer Reviews</h4>
               <div className="space-y-4">
                 <div className="border-b border-stone-100 pb-4">
                   <div className="flex text-amber-400 mb-1"><Shield size={16} fill="currentColor" /> <span className="ml-2 text-stone-800 text-sm font-semibold">Safety Focused</span></div>
                   <p className="text-sm text-stone-600">"My kids loved it! The guide was very careful with them." - <span className="text-stone-900 font-medium">Suresh K.</span></p>
                 </div>
                 <div>
                   <div className="flex text-amber-400 mb-1"><Shield size={16} fill="currentColor" /> <span className="ml-2 text-stone-800 text-sm font-semibold">Super Fun</span></div>
                   <p className="text-sm text-stone-600">"The rapids were amazing. Best part of our Manali trip." - <span className="text-stone-900 font-medium">Anjali R.</span></p>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-stone-800 mb-4">Location</h3>
          <a href="https://maps.app.goo.gl/Y5Gf264y9Sg3KKh2A" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-2xl shadow-sm p-8 border border-stone-200 hover:shadow-lg hover:border-forest-300 transition-all mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-bold text-stone-800 mb-2">Beas River Rafting Start Point</h4>
                <p className="text-stone-600 text-sm">Manali - Kullu Highway</p>
              </div>
              <div className="text-forest-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>
          </a>
          <iframe width="100%" height="400" style={{ border: 0 }} loading="lazy" allowFullScreen src="https://www.google.com/maps?q=32.053841,77.135077&z=15&output=embed" className="rounded-2xl shadow-sm border border-stone-200"></iframe>
        </div>
      </div>
    </div>
  );
};

export default RiverRafting;