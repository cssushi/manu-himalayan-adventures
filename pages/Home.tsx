import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Users, Map } from 'lucide-react';
import { IMAGES, REVIEWS } from '../constants';
import ReviewCard from '../components/ReviewCard';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-earth-50 overflow-x-hidden">
      
      {/* 1. Hero Section - Parallax & Earthy */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${IMAGES.homeback})`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}
        ></div>
        
        {/* Overlay with Grain Texture */}
        <div className="absolute inset-0 bg-earth-900/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-earth-900"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <div className="animate-fade-up mb-8" style={{ animationDelay: '0.1s' }}>
            <img 
              src={IMAGES.logo} 
              alt="Manu Himalayan Adventures Logo" 
              className="w-48 md:w-64 lg:w-80 rounded-full border-4 border-white/20 shadow-2xl"
            />
          </div>
          
          <p className="text-lg md:text-2xl text-earth-50 mb-10 max-w-2xl font-light leading-relaxed animate-fade-up drop-shadow-md" style={{ animationDelay: '0.2s' }}>
            Curated Himalayan expeditions for the modern explorer. <br/>
            <span className="italic font-serif text-clay-500 font-bold">Rafting. Flying. Living.</span>
          </p>
          
          {/* High Contrast CTA */}
          <Link
            to="/adventure-sports"
            className="group relative px-10 py-5 bg-moss-600 text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 animate-fade-up shadow-[0_0_20px_rgba(79,119,45,0.5)] border-2 border-moss-500"
            style={{ animationDelay: '0.3s' }}
          >
            <span className="relative z-10 flex items-center gap-2 uppercase tracking-widest text-sm">
              Start Adventure <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-moss-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </Link>

          {/* Packages CTA */}
          <Link
            to="/packages"
            className="group relative px-10 py-5 bg-clay-600 text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 animate-fade-up shadow-[0_0_20px_rgba(193,100,68,0.5)] border-2 border-clay-500 mt-6"
            style={{ animationDelay: '0.4s' }}
          >
            <span className="relative z-10 flex items-center gap-2 uppercase tracking-widest text-sm">
              View Packages <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-clay-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </Link>
        </div>
      </div>

      {/* 2. Complex Grid "Bento Box" Navigation */}
      <section className="py-32 px-6 lg:px-12 max-w-full -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-max w-full">
          
          {/* Main Large Card - Rafting */}
          <Link to="/river-rafting" className="group md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer h-96 md:h-full">
            <img src={IMAGES.rafting} alt="Rafting" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <span className="text-clay-500 text-xs font-bold uppercase tracking-widest mb-2 block">Most Popular</span>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-2">River Rafting</h3>
              <p className="text-earth-200 text-sm md:text-base opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                Conquer the Beas. 14KM of white water adrenaline.
              </p>
            </div>
          </Link>

          {/* Paragliding */}
          <Link to="/paragliding" className="group md:col-span-2 md:row-span-1 relative rounded-3xl overflow-hidden shadow-xl cursor-pointer h-64">
            <img src={IMAGES.paragliding} alt="Paragliding" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute bottom-6 left-6">
               <h3 className="text-2xl font-serif font-bold text-white">Paragliding</h3>
            </div>
            <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
               <ArrowRight size={20} className="group-hover:-rotate-45 transition-transform duration-300" />
            </div>
          </Link>

          {/* Camping */}
          <Link to="/camping" className="group md:col-span-1 md:row-span-2 relative rounded-3xl overflow-hidden shadow-xl cursor-pointer bg-moss-900 h-96 md:h-full">
            <img src={IMAGES.camping} alt="Camping" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity group-hover:opacity-40" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 border border-white/10 m-2 rounded-2xl">
              <Star className="text-clay-500 mb-4" size={32} />
              <h3 className="text-2xl font-serif font-bold text-white mb-2">Camping</h3>
              <p className="text-earth-200 text-xs">Under the stars, by the river.</p>
            </div>
          </Link>

          {/* Bike Rental */}
          <Link to="/vehicle-rental" className="group md:col-span-1 md:row-span-1 relative rounded-3xl overflow-hidden shadow-xl cursor-pointer h-64">
            <img src={IMAGES.bike} alt="Bike Rental" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-serif font-bold text-white">Moto Rentals</h3>
            </div>
          </Link>

          {/* Bungee Jumping */}
          <Link to="/bungee-jumping" className="group md:col-span-1 md:row-span-1 relative rounded-3xl overflow-hidden shadow-xl cursor-pointer h-64">
            <img src={IMAGES.bungee} alt="Bungee" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-serif font-bold text-white">Bungee Jump</h3>
            </div>
          </Link>

          {/* Zipline */}
          <Link to="/zipline" className="group md:col-span-1 md:row-span-1 relative rounded-3xl overflow-hidden shadow-xl cursor-pointer h-64">
            <img src={IMAGES.zipline} alt="Zipline" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-serif font-bold text-white">Zipline</h3>
            </div>
          </Link>

          {/* Hot Air Balloon */}
          <Link to="/balloon" className="group md:col-span-1 md:row-span-1 relative rounded-3xl overflow-hidden shadow-xl cursor-pointer h-64">
            <img src={IMAGES.balloon2} alt="Balloon" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-serif font-bold text-white">Balloon Ride</h3>
            </div>
          </Link>

          {/* Hotel Stay */}
          <Link to="/hotel-stay" className="group md:col-span-1 md:row-span-1 relative rounded-3xl overflow-hidden shadow-xl cursor-pointer h-64">
            <img src={IMAGES.hotel} alt="Hotel" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-serif font-bold text-white">Luxury Stays</h3>
            </div>
          </Link>

          {/* Sightseeing */}
          <Link to="/sightseeing" className="group md:col-span-1 md:row-span-1 relative rounded-3xl overflow-hidden shadow-xl cursor-pointer h-64">
            <img src={IMAGES.temple} alt="Sightseeing" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-serif font-bold text-white">Sightseeing</h3>
            </div>
          </Link>

          {/* Treks */}
          <Link to="/trekking-camping" className="group md:col-span-1 md:row-span-1 relative rounded-3xl overflow-hidden shadow-xl cursor-pointer h-64">
            <img src={IMAGES.malana3} alt="Treks" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-serif font-bold text-white">Treks</h3>
            </div>
          </Link>

          {/* About Me */}
          <Link to="/about-me" className="group md:col-span-1 md:row-span-1 relative rounded-3xl overflow-hidden shadow-xl cursor-pointer h-64">
            <img src={IMAGES.advent} alt="About Me" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
              <img src={IMAGES.logo} alt="Logo" className="w-16 h-16 rounded-full mb-3 border-2 border-white/30 shadow-lg opacity-80" />
              <h3 className="text-xl font-serif font-bold text-white mb-2">About Me</h3>
              <p className="text-earth-200 text-xs">Meet Lalit - 20+ Years of Adventure</p>
            </div>
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowRight size={16} className="group-hover:-rotate-45 transition-transform duration-300" />
            </div>
          </Link>

        </div>
      </section>

      {/* 3. Text & Texture Section */}
      <section className="py-24 bg-earth-900 text-earth-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-earth-50 to-transparent opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block p-4 border border-earth-700 rounded-full mb-8">
            <Shield className="text-moss-500" size={32} />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
            We don't just guide.<br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-moss-500 to-clay-500">We live the mountain.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mt-16">
            <div>
              <h4 className="font-bold text-xl mb-4 text-clay-500">01. Authenticity</h4>
              <p className="text-earth-400 leading-relaxed text-sm">Born and raised in these valleys, we know every hidden trail, silent forest, and roaring rapid. No corporate scripts, just raw Himalaya.</p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-4 text-clay-500">02. Safety First</h4>
              <p className="text-earth-400 leading-relaxed text-sm">We use international standard gear. Our rafts, gliders, and ropes are inspected daily. Your safety is the bedrock of our adventure.</p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-4 text-clay-500">03. Small Batches</h4>
              <p className="text-earth-400 leading-relaxed text-sm">We believe in quality over quantity. Small groups ensure personalized attention and a deeper connection with nature.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Sliding Gallery Strip */}
      <section className="py-0 overflow-hidden bg-earth-900">
         <div className="flex gap-4 w-full animate-[slideIn_60s_linear_infinite] hover:pause">
           {[IMAGES.snowmobile, IMAGES.yak, IMAGES.bungee, IMAGES.zipline, IMAGES.waterfall, IMAGES.temple].map((img, i) => (
             <div key={i} className="w-[400px] h-[300px] flex-shrink-0 relative group overflow-hidden">
               <img src={img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Gallery" />
               <div className="absolute inset-0 bg-moss-900/20 group-hover:bg-transparent transition-colors"></div>
             </div>
           ))}
         </div>
      </section>

      {/* 5. Stats / Trust Section */}
      <section className="py-20 bg-moss-900 text-white border-t border-moss-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
           <div className="p-6">
             <h3 className="text-5xl font-serif font-bold text-moss-100 mb-2">10+</h3>
             <p className="text-xs uppercase tracking-widest opacity-60">Years Experience</p>
           </div>
           <div className="p-6">
             <h3 className="text-5xl font-serif font-bold text-moss-100 mb-2">5k+</h3>
             <p className="text-xs uppercase tracking-widest opacity-60">Happy Travelers</p>
           </div>
           <div className="p-6">
             <h3 className="text-5xl font-serif font-bold text-moss-100 mb-2">100%</h3>
             <p className="text-xs uppercase tracking-widest opacity-60">Safety Record</p>
           </div>
           <div className="p-6">
             <h3 className="text-5xl font-serif font-bold text-moss-100 mb-2">4.9</h3>
             <p className="text-xs uppercase tracking-widest opacity-60">Google Rating</p>
           </div>
        </div>
      </section>

      {/* 6. Reviews Marquee */}
      <section className="py-24 bg-earth-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <h2 className="text-4xl font-serif font-bold text-earth-900">Traveler Stories</h2>
          <p className="text-earth-600 mt-2">Don't take our word for it.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
          {REVIEWS.map((review, idx) => (
             <ReviewCard key={idx} {...review} />
          ))}
        </div>
      </section>

      {/* 7. Big CTA */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.zipline} className="w-full h-full object-cover" alt="CTA" />
          <div className="absolute inset-0 bg-earth-900/80"></div>
        </div>
        <div className="relative z-10 text-center px-4">
           <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">
             The Mountains Are Calling
           </h2>
           <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-moss-600 hover:bg-moss-500 text-white px-10 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
            >
              Book via Contact
            </Link>
            <Link 
              to="/adventure-sports"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-earth-900 px-10 py-4 rounded-full font-bold text-lg transition-colors flex items-center justify-center gap-2"
            >
              View All Packages
            </Link>
           </div>
        </div>
      </section>

    </div>
  );
};

export default Home;