import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { PHONE_DISPLAY, EMAIL_ADDRESS, LOCATION, WHATSAPP_LINK } from '../constants';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const template = `Booking Inquiry from Website\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`;
    const url = `${WHATSAPP_LINK}?text=${encodeURIComponent(template)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-stone-800 text-center mb-8">Get in Touch</h1>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 mb-8">
          <p className="text-stone-600">We prefer WhatsApp for fastest booking responses. Fill the form and we'll open WhatsApp with a prefilled message.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="flex flex-col items-start">
              <div className="bg-green-100 p-3 rounded-full text-green-700 mb-3">
                <Phone size={20} />
              </div>
              <h3 className="font-bold text-stone-800 mb-2">Phone / WhatsApp</h3>
              <div className="space-y-1">
                <p className="text-stone-600">{PHONE_DISPLAY}</p>
                <p className="text-stone-600">+91 9459994020</p>
                <p className="text-stone-600">+91 7037617755</p>
              </div>
            </div>

            <div className="flex flex-col items-start">
              <div className="bg-amber-100 p-3 rounded-full text-amber-700 mb-3">
                <Mail size={20} />
              </div>
              <h3 className="font-bold text-stone-800 mb-1">Email</h3>
              <a href={`mailto:${EMAIL_ADDRESS}`} className="text-stone-600 hover:text-amber-600 break-all">{EMAIL_ADDRESS}</a>
            </div>

            <div className="flex flex-col items-start">
              <div className="bg-blue-100 p-3 rounded-full text-blue-700 mb-3">
                <MapPin size={20} />
              </div>
              <h3 className="font-bold text-stone-800 mb-1">Location</h3>
              <p className="text-stone-600">{LOCATION}</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Name*</label>
              <input required value={name} onChange={e => setName(e.target.value)} className="w-full border border-stone-200 rounded-md px-4 py-3" />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Email*</label>
              <input required type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full border border-stone-200 rounded-md px-4 py-3" />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Phone*</label>
              <input required value={phone} onChange={e => setPhone(e.target.value)} className="w-full border border-stone-200 rounded-md px-4 py-3" />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Subject*</label>
              <input required value={subject} onChange={e => setSubject(e.target.value)} className="w-full border border-stone-200 rounded-md px-4 py-3" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-stone-700 mb-2">Message*</label>
              <textarea required value={message} onChange={e => setMessage(e.target.value)} rows={5} className="w-full border border-stone-200 rounded-md px-4 py-3" />
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-full">Send to WhatsApp</button>
            <p className="text-sm text-stone-600">All fields required. You will be redirected to WhatsApp to complete the chat.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;