import React from 'react';
import { CheckCircle, Shield, Calendar, Users, Globe, Headphones } from 'lucide-react';

const AboutMe: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-earth-50">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))`,
            backgroundColor: '#2d3e2f'
          }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
              Meet The Founder
            </h1>
            <p className="text-xl md:text-2xl text-earth-100 italic font-light">
              The Vision Behind The Adventure
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Placeholder */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[3/4] bg-gradient-to-br from-moss-200 to-earth-300 rounded-3xl shadow-2xl flex items-center justify-center border-4 border-white">
              <div className="text-center p-8">
                <Users className="w-24 h-24 text-moss-700 mx-auto mb-4 opacity-30" />
                <p className="text-moss-800 font-semibold text-lg">Owner Photo</p>
                <p className="text-moss-600 text-sm mt-2">Image Coming Soon</p>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth-900 mb-4">
                Hi, I'm Lalit
              </h2>
              <p className="text-clay-600 text-xl font-semibold mb-6">
                Founder
              </p>
            </div>

            <p className="text-earth-700 text-lg leading-relaxed">
              With over <span className="font-bold text-moss-700">20 years of experience</span> in the adventure travel industry, I specialize in planning, managing, and delivering seamless outdoor experiences for explorers who expect more than ordinary trips.
            </p>

            <div className="bg-moss-50 border-l-4 border-moss-600 p-6 rounded-r-lg">
              <p className="text-earth-800 italic leading-relaxed">
                "Adventure mere liye sirf safar nahi - ek responsibility hai. Har journey ke peeche detailed planning, safety standards, logistics coordination aur flawless digital management hota hai."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Ensure Section */}
      <section className="py-20 bg-earth-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              As Webmaster & Operations Manager
            </h2>
            <p className="text-earth-300 text-lg max-w-3xl mx-auto">
              I personally oversee every aspect to ensure your experience is exceptional from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-earth-800/50 backdrop-blur-sm p-8 rounded-2xl border border-earth-700 hover:border-moss-600 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-moss-600 rounded-full flex items-center justify-center">
                  <Globe className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-moss-400">Smooth & Secure Online Booking</h3>
                  <p className="text-earth-300 leading-relaxed">
                    Easy-to-use digital platform with secure payment processing and instant confirmation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-earth-800/50 backdrop-blur-sm p-8 rounded-2xl border border-earth-700 hover:border-moss-600 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-clay-600 rounded-full flex items-center justify-center">
                  <Calendar className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-clay-400">Accurate Trip Details & Transparent Pricing</h3>
                  <p className="text-earth-300 leading-relaxed">
                    No hidden costs. Clear itineraries. What you see is exactly what you get.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-earth-800/50 backdrop-blur-sm p-8 rounded-2xl border border-earth-700 hover:border-moss-600 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-moss-600 rounded-full flex items-center justify-center">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-moss-400">Professional Coordination</h3>
                  <p className="text-earth-300 leading-relaxed">
                    Direct collaboration with certified guides and trusted partners for flawless execution.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-earth-800/50 backdrop-blur-sm p-8 rounded-2xl border border-earth-700 hover:border-moss-600 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-clay-600 rounded-full flex items-center justify-center">
                  <Headphones className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-clay-400">Premium Customer Support</h3>
                  <p className="text-earth-300 leading-relaxed">
                    From your initial inquiry to your safe return home, I'm here every step of the way.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-moss-50 to-earth-100">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 text-moss-600 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-6">
            My Mission is Simple
          </h2>
          <p className="text-2xl md:text-3xl text-earth-800 font-light leading-relaxed mb-8">
            Deliver premium adventure experiences backed by professional management and digital excellence.
          </p>
          <p className="text-lg text-earth-700 leading-relaxed max-w-2xl mx-auto">
            I personally manage every expedition to ensure it's properly organized, safe, and memorable. Your adventure is my responsibility, and I take that seriously.
          </p>
        </div>
      </section>

    </div>
  );
};

export default AboutMe;
