import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Gift, Zap } from 'lucide-react';
import { IMAGES } from '../constants';

const Packages: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-green-50 border-2 border-green-300 rounded-3xl p-8 mb-12 text-center">
          <p className="text-green-700 font-bold text-xl mb-2">💰 SAVE 20% on Bundled Packages</p>
          <p className="text-green-600">Book multiple adventures together and enjoy exclusive discounts</p>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-stone-800 mb-6">Bundled Adventure Packages</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Combine your favorite adventures and save big! Our specially curated packages offer the perfect mountain experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* River Rafting + Paragliding Package */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-green-200">
            <div className="bg-gradient-to-r from-green-400 to-green-600 p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Gift size={32} />
                <h3 className="text-2xl font-bold">River & Sky Combo</h3>
              </div>
              <p className="text-green-100">Raft the rapids + Soar through the skies</p>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <h4 className="text-lg font-bold text-stone-800 mb-4">What's Included:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <div>
                      <p className="font-bold text-stone-800">River Rafting (Solo)</p>
                      <p className="text-sm text-stone-600">13km white water adventure</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <div>
                      <p className="font-bold text-stone-800">Paragliding (Solo)</p>
                      <p className="text-sm text-stone-600">8-10 min tandem flight with certified pilot</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <div>
                      <p className="font-bold text-stone-800">Full Group River Rafting Combo</p>
                      <p className="text-sm text-stone-600">Perfect for 5 people</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-stone-50 p-6 rounded-2xl mb-8 border border-stone-200">
                <h4 className="font-bold text-stone-800 mb-4 text-lg">Pricing</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-stone-700">River Rafting</span>
                    <span className="font-bold text-stone-800">₹1,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-stone-700">Group River Rafting (5 People)</span>
                    <span className="font-bold text-stone-800">₹4,500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-stone-700">Paragliding</span>
                    <span className="font-bold text-stone-800">₹2,800</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-2xl mb-8 border border-green-200">
                <h4 className="font-bold text-green-800 mb-4 text-lg">Total Savings: 20% OFF</h4>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-green-600">Package Price: ₹3800</p>
                </div>
              </div>

              <Link 
                to="/contact"
                className="block w-full bg-green-600 hover:bg-green-700 text-white text-center font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                Book This Package
              </Link>
            </div>
          </div>

          {/* Ultimate Adventure Package */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-purple-200 relative">
            <div className="absolute top-4 right-4 bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 pointer-events-none">
              <Zap size={16} /> Ultimate
            </div>
            
            <div className="bg-gradient-to-r from-purple-400 to-purple-600 p-8 pt-14 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Gift size={32} />
                <h3 className="text-2xl font-bold">Ultimate Adventure</h3>
              </div>
              <p className="text-purple-100">All thrills in one epic weekend</p>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <h4 className="text-lg font-bold text-stone-800 mb-4">What's Included:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold">✓</span>
                    <div>
                      <p className="font-bold text-stone-800">River Rafting</p>
                      <p className="text-sm text-stone-600">Solo: ₹1,000 | Group: ₹4,500</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold">✓</span>
                    <div>
                      <p className="font-bold text-stone-800">Paragliding</p>
                      <p className="text-sm text-stone-600">₹3,000</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold">✓</span>
                    <div>
                      <p className="font-bold text-stone-800">Bungee Jumping</p>
                      <p className="text-sm text-stone-600">Solo: ₹4,000 | Group: ₹7,000</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold">✓</span>
                    <div>
                      <p className="font-bold text-stone-800">Zipline</p>
                      <p className="text-sm text-stone-600">₹700</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold">✓</span>
                    <div>
                      <p className="font-bold text-stone-800">Camping & Trekking</p>
                      <p className="text-sm text-stone-600">₹5,000</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-2xl mb-8 border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-4 text-lg">Total Savings: 20% OFF</h4>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-purple-600">Package Price: ₹13,700</p>
                </div>
              </div>

              <Link 
                to="/contact"
                className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                Book This Package
              </Link>
            </div>
          </div>

          {/* Manali-Leh Bike Adventure */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-red-200 relative">
            <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
              <Zap size={16} /> Epic
            </div>
            
            <div className="h-64 overflow-hidden">
              <img src={IMAGES.manaliLeh} alt="Manali to Leh" className="w-full h-full object-cover" />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-stone-800 mb-4">Manali to Leh Bike Adventure</h3>
              <p className="text-stone-600 mb-6">
                400+ km of pure Himalayan adrenaline. One of the world's most epic bike rides through mountain passes over 15,000 feet.
              </p>

              <div className="bg-red-50 p-6 rounded-2xl mb-8 border-2 border-red-200">
                <p className="text-stone-700 mb-4">
                  <span className="font-bold">Premium package includes:</span> Bike rental, experienced guide, accommodation, safety gear, daily fuel, and 24/7 support.
                </p>
                <p className="text-sm text-stone-600"> Limited slots available
                </p>
              </div>

              <div className="space-y-3 mb-8">
                <Link 
                  to="/manali-leh-bike"
                  className="block w-full bg-red-600 hover:bg-red-700 text-white text-center font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Know More <ArrowRight size={20} />
                </Link>
                <Link 
                  to="/contact"
                  className="block w-full bg-stone-200 hover:bg-stone-300 text-stone-800 text-center font-bold py-3 rounded-xl transition-all"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">Why Choose Our Packages?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-700 text-2xl font-bold">
                20%
              </div>
              <h3 className="font-bold text-stone-800 mb-2">Save Money</h3>
              <p className="text-stone-600">Bundle discounts on combined packages</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-700 text-2xl font-bold">
                ✓
              </div>
              <h3 className="font-bold text-stone-800 mb-2">Hassle-Free</h3>
              <p className="text-stone-600">One booking for multiple adventures</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-700 text-2xl font-bold">
                ★
              </div>
              <h3 className="font-bold text-stone-800 mb-2">Best Experience</h3>
              <p className="text-stone-600">Expertly curated adventure combinations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
