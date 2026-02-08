import { Mountain, Wind, ShieldCheck, Smile, MapPin, Phone, Mail, Tent, Bike, Car, Camera, CheckCircle } from 'lucide-react';

// Contact Details
export const PHONE_NUMBER = "+917807364252";
export const PHONE_DISPLAY = "+91 7807364252";
export const WHATSAPP_LINK = `https://wa.me/917807364252`;
export const EMAIL_ADDRESS = "Manuhimalayanadventures@gmail.com";
export const LOCATION = "Manali / Kullu, Himachal Pradesh, India";

// External Booking Links
export const MMT_LINK = "https://www.makemytrip.com/hotels/";
export const GOIBIBO_LINK = "https://www.goibibo.com/hotels/";
export const BOOKING_LINK = "https://www.booking.com/";

// Local Images from public folder
export const IMAGES = {
  // Use local files from webimagesall
  hero: "/webimagesall/Manali_in_winters.png",
  // Action rafting (keep local video/poster)
  rafting: "/webimagesall/24.jpeg",
  // Paragliding: use local paraback and images 4 & 5
  paragliding: "/webimagesall/paraback.jpg",
  paragliding2: "/4.jpeg",
  paragliding3: "/5.jpeg",
  // Safety Gear
  safetyGear: "/5.jpeg",
  // Green tents by river/forest
  camping: "/1.jpeg",
  // Zipline
  zipline: "/6.jpeg",
  // Bungee Jumping - use image number 10 as requested
  bungee: "/10.jpeg",
  // Royal Enfield / Bike
  bike: "/23.jpeg",
  // 4x4 / Vehicle - use local jimny image
  jimny: "/webimagesall/jimny.jpg",
  // Wooden hotel room
  hotel: "/20.jpeg",
  // Waterfall (Jana Waterfall) - use local uploaded file
  waterfall: "/webimagesall/jana1.jpg",
  // Krishna Temple
  temple: "/9.jpeg",

  // Gallery specific - correct mappings
  snowmobile: "/16.jpeg",
  yak: "/12.jpeg",
  cafe: "/13.jpeg",
  tent_inside: "/14.jpeg",
  skyView: "/15.jpeg",
  mountainView: "/18.jpeg",
  adventureGroup: "/19.jpeg",
  sunsetView: "/22.jpeg",

  // Logo
  logo: "/logoback.png"
};

// Reviews
export const REVIEWS = [
  {
    name: "Rahul Sharma",
    date: "Jan 2026",
    text: "The rafting was absolutely insane! The guides were professional, and the gear was top-notch.",
    rating: 5,
    location: "Delhi"
  },
  {
    name: "Priya Verma",
    date: "Dec 2025",
    text: "Flew over the Himalayas today. Manu Adventures made it safe and magical. Highly recommended!",
    rating: 5,
    location: "Chandigarh"
  },
  {
    name: "Aman Gupta",
    date: "Jan 2026",
    text: "Rented a Himalayan for the Atal Tunnel trip. Bike was in mint condition. Smooth experience.",
    rating: 5,
    location: "Pune"
  }
];

// Flattened Nav Links for "More Sections"
export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Rafting", path: "/river-rafting" },
  { name: "Paragliding", path: "/paragliding" },
  { name: "Camping", path: "/camping" },
  { name: "Rentals", path: "/vehicle-rental" },
  { name: "Stays", path: "/hotel-stay" },
  { name: "Zipline", path: "/zipline" },
  { name: "Bungee", path: "/bungee-jumping" },
  { name: "Sightseeing", path: "/sightseeing" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];