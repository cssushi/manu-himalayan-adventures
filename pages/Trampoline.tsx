import React from 'react';
import { Link } from 'react-router-dom';

const Trampoline: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-stone-800 mb-6">Trampoline Park — Family Friendly</h1>
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <p className="text-stone-600 mb-4">A supervised trampoline area next to our adventure base. Soft landing pits, age-segregated sessions, and trained attendants make it safe and fun for younger visitors.</p>
          <ul className="list-disc pl-5 text-stone-700 mb-6">
            <li>Sessions available hourly</li>
            <li>Safety harness and soft-foam pits</li>
            <li>Suitable for ages 4–12 (adult supervision required)</li>
          </ul>
          <Link to="/contact" className="inline-block bg-forest-600 text-white px-6 py-3 rounded-full font-bold hover:bg-forest-700">Book Trampoline Session</Link>
        </div>
      </div>
    </div>
  );
};

export default Trampoline;
