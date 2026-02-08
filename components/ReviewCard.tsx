import React from 'react';
import { Star, MapPin, Quote } from 'lucide-react';

interface ReviewProps {
  name: string;
  date: string;
  text: string;
  rating: number;
  location: string;
}

const ReviewCard: React.FC<ReviewProps> = ({ name, date, text, rating, location }) => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-earth-200 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full relative group">
      <Quote className="absolute top-6 right-6 text-earth-100 group-hover:text-clay-100 transition-colors" size={48} />
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className={`${i < rating ? 'text-clay-500 fill-current' : 'text-earth-200'}`} />
        ))}
      </div>
      
      <p className="text-earth-700 text-lg font-serif italic mb-6 leading-relaxed flex-grow relative z-10">"{text}"</p>
      
      <div className="flex items-center justify-between border-t border-earth-100 pt-4 mt-auto">
        <div>
          <h4 className="font-bold text-earth-900 text-sm uppercase tracking-wide">{name}</h4>
          <div className="flex items-center text-xs text-earth-500 gap-1 mt-1">
             <MapPin size={10} />
             <span>{location}</span>
          </div>
        </div>
        <span className="text-xs font-bold text-earth-400 bg-earth-50 px-3 py-1 rounded-full">{date}</span>
      </div>
    </div>
  );
};

export default ReviewCard;