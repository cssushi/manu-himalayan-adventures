import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';

const Balloon: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="relative h-[60vh] w-full">
        <img src={IMAGES.balloon2} alt="Hot Air Balloon" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white drop-shadow-lg text-center">Hot Air Balloon Rides</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
              <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">Balloon Rides — The Major Attraction</h2>
              <p className="text-stone-600 mb-6 leading-relaxed text-lg">
                Experience a serene sunrise balloon flight above the Kullu valley. Our balloon rides are operated by certified pilots with a strong safety record.
                Flights include transport, pre-flight briefing and a short celebration on landing.
              </p>
              <div className="bg-stone-50 p-6 rounded-2xl">
                <h4 className="font-bold text-stone-800 mb-1">Group Size</h4>
                <p className="text-stone-600">Small groups for intimate experience</p>
              </div>
            </section>

            <section className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold text-stone-800 mb-4">What to Expect</h3>
              <ul className="list-disc pl-5 text-stone-700 space-y-2">
                <li>Sunrise or sunset flights for best light</li>
                <li>Safety briefing and pilot demonstration</li>
                <li>Transport included from Manali</li>
              </ul>
            </section>

            <section className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold text-stone-800 mb-6">Experience in Pictures</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img src={IMAGES.balloon1} alt="Balloon Experience 1" className="w-full h-64 object-cover rounded-2xl shadow-md hover:shadow-lg transition-shadow" />
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-xl sticky top-24">
              <h3 className="text-2xl font-bold mb-6 font-serif">Book Balloon Ride</h3>
              <p className="text-stone-600 mb-6">No advance payment required to hold an inquiry. We will confirm availability and meeting point on WhatsApp.</p>
              <Link to="/contact" className="block w-full bg-green-600 hover:bg-green-700 text-white text-center font-bold py-3 rounded-xl transition-all shadow-md">Enquire Now</Link>
            </div>
          </div>
        </div>

        <section className="mt-12 bg-white p-8 rounded-2xl shadow-sm">
          <h3 className="font-bold text-stone-800 mb-4">Family Fun: Trampoline Park Nearby</h3>
          <p className="text-stone-600">We run a small trampoline area alongside the balloon venue — perfect for kids while parents enjoy the flight. Supervised, soft-foam pits and safety nets.</p>
        </section>

        {/* Location Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-stone-800 mb-4">Location</h3>
          <a href="https://maps.app.goo.gl/YiK5KNTA5XA6dywc7" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-2xl shadow-sm p-8 border border-stone-200 hover:shadow-lg hover:border-forest-300 transition-all mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-bold text-stone-800 mb-2">Hot Air Balloon Launch Site</h4>
                <p className="text-stone-600 text-sm">Manali, Himachal Pradesh</p>
              </div>
              <div className="text-forest-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>
          </a>
          <iframe width="100%" height="400" style={{ border: 0 }} loading="lazy" allowFullScreen src="https://www.google.com/maps?q=32.257823,77.187411&z=15&output=embed" className="rounded-2xl shadow-sm border border-stone-200"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Balloon;
