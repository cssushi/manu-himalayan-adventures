import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Tent, MapPin } from 'lucide-react';
import { IMAGES } from '../constants';

const TrekkingAndCamping: React.FC = () => {
  const treks = [
    {
      name: 'Bhrigu Lake Trek',
      description: 'A stunning alpine trek at 14,100 ft with breathtaking views of the Himalayas. Trek through meadows, forests, and pristine lakes.',
      price: '₹3,500',
      images: [IMAGES.bhrigu1, IMAGES.bhrigu2, IMAGES.bhrigu3],
      features: ['4-Day Trek', '14,100 ft Altitude', 'Lake Camping', 'Forest Trail']
    },
    {
      name: 'Bijli & Marhi Trek',
      description: 'An adventurous trek combining two stunning passes. Experience alpine meadows, ancient forests, and night camping under stars.',
      price: '₹4,000',
      images: [IMAGES.bijli1, IMAGES.bijli2, IMAGES.bijli3],
      features: ['5-Day Trek', 'Twin Passes', 'Meadow Camping', 'Expert Guides']
    },
    {
      name: 'Malana Trek',
      description: 'A mystical trek through the isolated village of Malana. Navigate ancient trails, hemp fields, and experience tribal culture.',
      price: '₹3,000',
      images: [IMAGES.malana1, IMAGES.malana2, IMAGES.malana3],
      features: ['3-Day Trek', 'Tribal Village', 'Cultural Experience', 'Riverside Camping']
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full shadow-2xl mb-12">
        <img src={IMAGES.malana3} alt="Trekking and Camping" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/65 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white drop-shadow-lg text-center">Trekking & Camping</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Introduction */}
        <div className="text-center mb-20">
          <div className="flex justify-center gap-3 mb-6">
            <Mountain className="text-amber-600" size={32} />
            <Tent className="text-amber-600" size={32} />
          </div>
          <h2 className="text-4xl font-serif font-bold text-stone-800 mb-4">Experience the Wild Himalaya</h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            Trek through pristine alpine trails, camp under the stars, and immerse yourself in the raw beauty of the mountains. Each trek includes experienced guides, camping gear, and delicious mountain meals.
          </p>
        </div>

        {/* Trek Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {treks.map((trek, idx) => (
            <div key={idx} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-amber-200">
              {/* Trek Images Grid */}
              <div className="grid grid-cols-3 gap-0 h-48">
                {trek.images.map((img, imgIdx) => (
                  <img 
                    key={imgIdx}
                    src={img} 
                    alt={`${trek.name} view ${imgIdx + 1}`} 
                    className="w-full h-full object-cover"
                  />
                ))}
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-stone-800 mb-3">{trek.name}</h3>
                <p className="text-stone-600 mb-6">{trek.description}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {trek.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-sm">
                      <span className="text-amber-600 font-bold">✓</span>
                      <span className="text-stone-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="bg-amber-50 p-4 rounded-2xl border-2 border-amber-200 mb-6 text-center">
                  <p className="text-sm text-stone-600 mb-1">Per Person</p>
                  <p className="text-3xl font-bold text-amber-600">{trek.price}</p>
                </div>

                {/* CTA */}
                <Link
                  to="/contact"
                  className="block w-full bg-amber-600 hover:bg-amber-700 text-white text-center font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
                >
                  Book Trek
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Included Section */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border-2 border-stone-200">
          <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-700">
                <Mountain size={32} />
              </div>
              <h3 className="font-bold text-stone-800 mb-2">Expert Guides</h3>
              <p className="text-sm text-stone-600">Experienced mountain guides leading every trek</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-700">
                <Tent size={32} />
              </div>
              <h3 className="font-bold text-stone-800 mb-2">Camping Gear</h3>
              <p className="text-sm text-stone-600">Premium tents, sleeping bags, and equipment</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-700">
                <MapPin size={32} />
              </div>
              <h3 className="font-bold text-stone-800 mb-2">Safe Routes</h3>
              <p className="text-sm text-stone-600">Well-planned trails with safety protocols</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-700 text-xl font-bold">🍽</div>
              <h3 className="font-bold text-stone-800 mb-2">Meals</h3>
              <p className="text-sm text-stone-600">Delicious mountain meals prepared daily</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrekkingAndCamping;
