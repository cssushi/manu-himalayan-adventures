import React from 'react';
import { IMAGES } from '../constants';

const Gallery: React.FC = () => {
  // Collection of images representing user's uploads + stock
  const images = [
    { src: IMAGES.snowmobile, size: 'large', label: 'Camping' },
    { src: IMAGES.camping, size: 'tall', label: 'Cozy Interiors' },
    { src: IMAGES.rafting, size: 'wide', label: 'White Water Rafting' },
    { src: IMAGES.zipline, size: 'wide', label: 'Zipline Crossing' },
    { src: IMAGES.paragliding, size: 'tall', label: 'High Fly Paragliding' },
    { src: IMAGES.temple, size: 'small', label: 'Krishna Temple' },
    { src: IMAGES.cafe, size: 'small', label: 'Inside Camp' },
    { src: IMAGES.hotel, size: 'large', label: 'Premium Stays' },
    { src: IMAGES.waterfall, size: 'tall', label: 'Jana Waterfall' },
    { src: IMAGES.safetyGear, size: 'small', label: 'Paragliding' },
    { src: IMAGES.skyView, size: 'wide', label: 'Night at Camp' },
    { src: IMAGES.mountainView, size: 'tall', label: 'Lounge' },
    { src: IMAGES.bike, size: 'small', label: 'Bike Rentals' },
    { src: IMAGES.para1, size: 'wide', label: 'Paragliding Adventure' },
    { src: IMAGES.para2, size: 'tall', label: 'Aerial Views' },
    { src: IMAGES.rafting1, size: 'tall', label: 'White Water Thrills' },
    { src: IMAGES.rafting2, size: 'large', label: 'River Adventure' },
    { src: IMAGES.rafting3, size: 'wide', label: 'Rapids Challenge' },
    { src: IMAGES.zipline1, size: 'large', label: 'Zipline Adrenaline' },
    { src: IMAGES.zipline2, size: 'tall', label: 'Forest Zipline' },
  ];

  return (
    <div className="min-h-screen bg-stone-100 py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-stone-900 mb-6">Moments in the Mountains</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            A glimpse into the adventures, the smiles, and the breathtaking landscapes of Manali. 
            Real photos from our travelers.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-gray-200
                ${img.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${img.size === 'wide' ? 'md:col-span-2' : ''}
                ${img.size === 'tall' ? 'md:row-span-2' : ''}
              `}
            >
              <img 
                src={img.src} 
                alt={img.label} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                 <p className="text-white font-serif text-lg tracking-wide">{img.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;