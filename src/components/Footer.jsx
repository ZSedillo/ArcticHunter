import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = ({ setPage }) => {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 text-gray-400 text-sm py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Column 1: Brand */}
        <div className="space-y-6">
          <div className="text-2xl font-bold tracking-tighter uppercase italic text-white">
            Arctic <span className="text-orange-600">Hunter</span>
          </div>
          <p className="leading-relaxed">
            Engineered for the modern professional. Waterproof, anti-theft, and built for the urban wilderness.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/ArcticHunterPhilippines" target="_blank" rel="noreferrer" className="bg-zinc-900 p-2 rounded hover:bg-orange-600 hover:text-white transition-colors"><Facebook className="w-5 h-5"/></a>
            <a href="https://www.instagram.com/arctichunterphilippines/" target="_blank" rel="noreferrer" className="bg-zinc-900 p-2 rounded hover:bg-orange-600 hover:text-white transition-colors"><Instagram className="w-5 h-5"/></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-white font-bold uppercase tracking-widest mb-6">Explore</h3>
          <ul className="space-y-4">
            <li><button onClick={() => setPage('home')} className="hover:text-orange-600 transition-colors uppercase text-xs tracking-wider">Home Base</button></li>
            <li><button onClick={() => setPage('catalogue')} className="hover:text-orange-600 transition-colors uppercase text-xs tracking-wider">Full Catalogue</button></li>
            <li><button onClick={() => setPage('techwear')} className="hover:text-orange-600 transition-colors uppercase text-xs tracking-wider">Tech Specs</button></li>
          </ul>
        </div>

        {/* Column 3: Legal/Support */}
        <div>
          <h3 className="text-white font-bold uppercase tracking-widest mb-6">Support</h3>
          <ul className="space-y-4">
             {/* These are placeholders, usually you'd have real links here */}
            <li><a href="#" className="hover:text-orange-600 transition-colors uppercase text-xs tracking-wider">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-orange-600 transition-colors uppercase text-xs tracking-wider">Warranty Info</a></li>
            <li><a href="#" className="hover:text-orange-600 transition-colors uppercase text-xs tracking-wider">Track Order</a></li>
          </ul>
        </div>

        {/* Column 4: Contact Mini */}
        <div>
          <h3 className="text-white font-bold uppercase tracking-widest mb-6">Contact</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-orange-600 shrink-0" />
              <span>Manila, Philippines</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-orange-600 shrink-0" />
              <span>0909953499</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-orange-600 shrink-0" />
              <span>arctichunterphilippines@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Strip */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest text-zinc-600">
        <p>&copy; 2026 Arctic Hunter Philippines. All Rights Reserved.</p>
        <p>Official Distributor</p>
      </div>
    </footer>
  );
};

export default Footer;