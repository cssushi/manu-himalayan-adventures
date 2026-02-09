import React from 'react';
import { Link } from 'react-router-dom';
import { Bike, Car, Shield, Check, FileText } from 'lucide-react';
import { IMAGES } from '../constants';

const VehicleRental: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="bg-stone-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl font-serif font-bold mb-4">Vehicle Rental in Manali</h1>
        <p className="text-stone-300 max-w-2xl mx-auto">Explore the mountains at your own pace. Premium bikes and cars for rent.</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Fleet Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
             <div className="h-64">
               <img src={IMAGES.bike} alt="Royal Enfield" className="w-full h-full object-cover" />
             </div>
             <div className="p-8">
               <div className="flex items-center gap-2 text-forest-700 mb-2">
                 <Bike size={24} />
                 <h3 className="text-2xl font-serif font-bold">Bike Rental</h3>
               </div>
               <p className="text-stone-600 mb-6">
                 Choose from our well-maintained fleet of Royal Enfield Classic, Himalayan, and Hunter bikes. Perfect for trips to Atal Tunnel, Rohtang Pass, and Leh.
               </p>
               <ul className="space-y-2 mb-8 text-sm text-stone-700">
                 <li className="flex gap-2"><Check size={16} className="text-green-500"/> Helmets Included (Rider + Pillion)</li>
                 <li className="flex gap-2"><Check size={16} className="text-green-500"/> Well Serviced Engines</li>
                 <li className="flex gap-2"><Check size={16} className="text-green-500"/> Document Assistance</li>
               </ul>
               <Link to="/contact" className="block w-full bg-forest-600 text-white text-center py-3 rounded-xl font-bold hover:bg-forest-700 transition">Check Rates</Link>
             </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
             <div className="h-64">
               <img src={IMAGES.jimny} alt="Suzuki Jimny" className="w-full h-full object-cover" />
             </div>
             <div className="p-8">
               <div className="flex items-center gap-2 text-forest-700 mb-2">
                 <Car size={24} />
                 <h3 className="text-2xl font-serif font-bold">4x4 Car Tour</h3>
               </div>
               <p className="text-stone-600 mb-6">
                 Guided 4x4 tours in Suzuki Jimny and similar vehicles. Our experienced drivers lead curated off-road tours—this is a driven tour service, not self-drive.
               </p>
               <ul className="space-y-2 mb-8 text-sm text-stone-700">
                 <li className="flex gap-2"><Check size={16} className="text-green-500"/> All Terrain Tyres</li>
                 <li className="flex gap-2"><Check size={16} className="text-green-500"/> Clean & Sanitized</li>
                 <li className="flex gap-2"><Check size={16} className="text-green-500"/> 24/7 Roadside Support</li>
               </ul>
               <Link to="/contact" className="block w-full bg-forest-600 text-white text-center py-3 rounded-xl font-bold hover:bg-forest-700 transition">Check Rates</Link>
             </div>
          </div>
        </div>

        {/* Policy Section */}
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
           <h3 className="text-2xl font-bold text-stone-800 mb-8 text-center">Rental Policy & Requirements</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                 <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-stone-700">
                   <FileText size={28} />
                 </div>
                 <h4 className="font-bold mb-2">Documents Required</h4>
                 <p className="text-sm text-stone-600">Original Driving License and Aadhar Card/Voter ID are mandatory for all rentals.</p>
              </div>
              <div className="text-center">
                 <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-stone-700">
                   <Shield size={28} />
                 </div>
                 <h4 className="font-bold mb-2">Security Deposit</h4>
                 <p className="text-sm text-stone-600">A fully refundable security deposit is required. Returned instantly upon safe vehicle return.</p>
              </div>
              <div className="text-center">
                 <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-stone-700">
                   <Check size={28} />
                 </div>
                 <h4 className="font-bold mb-2">Transparent Pricing</h4>
                 <p className="text-sm text-stone-600">No hidden mechanic costs. Discounts available for weekly and long-term bookings.</p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default VehicleRental;