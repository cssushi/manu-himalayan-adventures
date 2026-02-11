import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bike, Mountain, Users, CheckCircle } from 'lucide-react';
import { IMAGES } from '../constants';

const ManaliLehBikeTour: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero */}
      <div className="relative h-[50vh] w-full flex items-center justify-center shadow-lg" style={{ backgroundColor: 'rgb(28, 25, 23)' }}>
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white drop-shadow-2xl">Manali to Leh Bike Adventure</h1>
          <p className="text-white/90 text-xl font-semibold drop-shadow-lg">400+ km of pure Himalayan adrenaline</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
              <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">The Ultimate Himalayan Bike Journey</h2>
              <p className="text-stone-600 mb-6 leading-relaxed text-lg">
                Challenge yourself on one of the world's most epic bike rides. The Manali to Leh highway stretches over 400+ km through the heart of the Himalayas, crossing mountain passes over 15,000 feet with breathtaking scenery at every turn.
              </p>
              <p className="text-stone-600 mb-6 leading-relaxed text-lg">
                From the lush valleys of Himachal to the stark beauty of Ladakh, experience raw adventure, high altitude terrain, and the camaraderie of fellow riders. This is not just a ride—it's a transformation.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-stone-50 p-6 rounded-2xl">
                  <h4 className="font-bold text-stone-800 mb-1">Distance</h4>
                  <p className="text-stone-600">400+ km</p>
                </div>
                <div className="bg-stone-50 p-6 rounded-2xl">
                  <h4 className="font-bold text-stone-800 mb-1">Best Season</h4>
                  <p className="text-stone-600">June - October</p>
                </div>
              </div>
            </section>

            <section className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 overflow-hidden">
              <img src={IMAGES.manaliLeh} alt="Manali to Leh Bike Tour" className="w-full h-full object-contain rounded-2xl shadow-lg" />
            </section>

            <section className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
              <h3 className="text-2xl font-bold text-stone-800 mb-6">What's Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex gap-3 items-start bg-green-50 p-4 rounded-xl border border-green-100">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="font-bold text-green-900 text-sm">Premium Bike</h4>
                    <p className="text-xs text-green-800">Well-serviced Royal Enfield with GPS</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start bg-green-50 p-4 rounded-xl border border-green-100">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="font-bold text-green-900 text-sm">Experienced Guide</h4>
                    <p className="text-xs text-green-800">Rider with 10+ years on this route</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start bg-green-50 p-4 rounded-xl border border-green-100">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="font-bold text-green-900 text-sm">Accommodation</h4>
                    <p className="text-xs text-green-800">Homestays & guesthouses agreed upon</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start bg-green-50 p-4 rounded-xl border border-green-100">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="font-bold text-green-900 text-sm">Safety Gear</h4>
                    <p className="text-xs text-green-800">Helmets, jackets & rain gear</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start bg-green-50 p-4 rounded-xl border border-green-100">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="font-bold text-green-900 text-sm">Road Support</h4>
                    <p className="text-xs text-green-800">Backup vehicle for emergencies</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start bg-green-50 p-4 rounded-xl border border-green-100">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="font-bold text-green-900 text-sm">Daily Fuel</h4>
                    <p className="text-xs text-green-800">Fuel costs covered in package</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl sticky top-24 border-2 border-white/20">
              <h3 className="text-3xl font-bold mb-6 font-serif text-white">Book Your Epic Ride</h3>
              <p className="text-white mb-6 text-base font-semibold">
                Limited slots available. Best season is June to October. Confirmation within 24 hours.
              </p>
              <Link 
                to="/contact"
                className="block w-full bg-red-600 hover:bg-red-700 text-white text-center font-bold py-4 rounded-xl transition-all shadow-lg mb-4"
              >
                Enquire & Book
              </Link>
              <p className="text-xs text-center text-stone-400">
                WhatsApp us with your dates for instant availability. No advance payment needed.
              </p>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-stone-800 mb-4">Starting Point</h3>
          <a href="https://maps.app.goo.gl/Y5Gf264y9Sg3KKh2A" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-2xl shadow-sm p-8 border border-stone-200 hover:shadow-lg hover:border-forest-300 transition-all mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-bold text-stone-800 mb-2">Manali - Bike Rental Office</h4>
                <p className="text-stone-600 text-sm">Main Bazaar, Manali</p>
              </div>
              <div className="text-forest-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>
          </a>
          <iframe width="100%" height="400" style={{ border: 0 }} loading="lazy" allowFullScreen src="https://www.google.com/maps?q=32.249461,77.185752&z=15&output=embed" className="rounded-2xl shadow-sm border border-stone-200"></iframe>
        </div>
      </div>
    </div>
  );
};

export default ManaliLehBikeTour;
