import React, { useState } from 'react';

// Placeholder Image
import placeholderImg from '../assets/cat-backpack.jpg'; 

// --- VARIED PRODUCT DATA (Uneven counts per category) ---
const products = [
  // --- BACKPACKS (10 Items - The biggest category) ---
  { id: 101, name: 'B00534 Laptop Backpack', category: 'backpack', price: '₱2,699', tag: 'Best Seller' },
  { id: 102, name: 'Urban Runner Pro', category: 'backpack', price: '₱1,999', tag: 'Featured' },
  { id: 103, name: 'City Trekker', category: 'backpack', price: '₱3,100', tag: '' },
  { id: 104, name: 'Campus Elite', category: 'backpack', price: '₱1,499', tag: 'New' },
  { id: 105, name: 'Tech Commuter', category: 'backpack', price: '₱2,800', tag: '' },
  { id: 106, name: 'Night Rider', category: 'backpack', price: '₱2,200', tag: '' },
  { id: 107, name: 'Weekend Warrior', category: 'backpack', price: '₱3,500', tag: 'Hot' },
  { id: 108, name: 'Nomad X', category: 'backpack', price: '₱4,200', tag: '' },
  { id: 109, name: 'Student Classic', category: 'backpack', price: '₱1,200', tag: '' },
  { id: 110, name: 'Pro Gamer Bag', category: 'backpack', price: '₱3,800', tag: 'Limited' },

  // --- SLINGS (6 Items) ---
  { id: 201, name: 'Chest Pack Pro', category: 'sling', price: '₱1,299', tag: 'Hot' },
  { id: 202, name: 'Tactical Sling', category: 'sling', price: '₱999', tag: '' },
  { id: 203, name: 'Daily Rider Sling', category: 'sling', price: '₱1,150', tag: 'New' },
  { id: 204, name: 'Urban Access Sling', category: 'sling', price: '₱1,400', tag: '' },
  { id: 205, name: 'Sport Sling X', category: 'sling', price: '₱899', tag: '' },
  { id: 206, name: 'Anti-Theft Sling', category: 'sling', price: '₱1,600', tag: 'Best Seller' },

  // --- CROSSBODY (5 Items) ---
  { id: 301, name: 'Crossbody X-Series', category: 'crossbody', price: '₱1,500', tag: '' },
  { id: 302, name: 'Slim Body Guard', category: 'crossbody', price: '₱1,100', tag: '' },
  { id: 303, name: 'Street Cross', category: 'crossbody', price: '₱1,350', tag: 'New' },
  { id: 304, name: 'Tech Cross', category: 'crossbody', price: '₱1,800', tag: '' },
  { id: 305, name: 'Vertical Cross', category: 'crossbody', price: '₱1,200', tag: '' },

  // --- MESSENGER (7 Items) ---
  { id: 401, name: 'Commuter Series', category: 'messenger', price: '₱2,100', tag: 'Featured' },
  { id: 402, name: 'Office Messenger', category: 'messenger', price: '₱2,500', tag: '' },
  { id: 403, name: 'Student Courier', category: 'messenger', price: '₱1,800', tag: '' },
  { id: 404, name: 'Laptop Briefcase', category: 'messenger', price: '₱2,900', tag: 'Hot' },
  { id: 405, name: 'Tactical Brief', category: 'messenger', price: '₱2,300', tag: '' },
  { id: 406, name: 'Satchel Pro', category: 'messenger', price: '₱1,950', tag: '' },
  { id: 407, name: 'Executive Carry', category: 'messenger', price: '₱3,100', tag: '' },

  // --- POUCHES (8 Items) ---
  { id: 501, name: 'Tactical Pouch', category: 'pouch', price: '₱499', tag: '' },
  { id: 502, name: 'Tech Organizer', category: 'pouch', price: '₱650', tag: 'Must Have' },
  { id: 503, name: 'Cable Pouch Pro', category: 'pouch', price: '₱350', tag: '' },
  { id: 504, name: 'Utility Kit', category: 'pouch', price: '₱700', tag: '' },
  { id: 505, name: 'Wash Bag', category: 'pouch', price: '₱550', tag: '' },
  { id: 506, name: 'Mini Pouch', category: 'pouch', price: '₱250', tag: '' },
  { id: 507, name: 'Hard Shell Case', category: 'pouch', price: '₱800', tag: 'New' },
  { id: 508, name: 'Accessory Bag', category: 'pouch', price: '₱400', tag: '' },

  // --- WALLETS (5 Items) ---
  { id: 601, name: 'Tech Wallet', category: 'wallet', price: '₱850', tag: '' },
  { id: 602, name: 'Card Holder Pro', category: 'wallet', price: '₱450', tag: 'New' },
  { id: 603, name: 'Bifold Shield', category: 'wallet', price: '₱900', tag: '' },
  { id: 604, name: 'Zip Wallet', category: 'wallet', price: '₱750', tag: '' },
  { id: 605, name: 'Travel Wallet', category: 'wallet', price: '₱1,100', tag: '' },

  // --- TRAVEL (6 Items) ---
  { id: 701, name: 'Travel Duffel', category: 'travel', price: '₱3,200', tag: 'Heavy Duty' },
  { id: 702, name: 'Gym Duffel Pro', category: 'travel', price: '₱2,400', tag: '' },
  { id: 703, name: 'Weekender Bag', category: 'travel', price: '₱3,500', tag: 'Hot' },
  { id: 704, name: 'Carry-On Master', category: 'travel', price: '₱4,100', tag: '' },
  { id: 705, name: 'Sport Hauler', category: 'travel', price: '₱2,100', tag: '' },
  { id: 706, name: 'Expedition Bag', category: 'travel', price: '₱5,000', tag: 'Exclusive' },
];

const Catalogue = ({ onItemClick, initialFilter = 'all' }) => {
  const [filter, setFilter] = useState(initialFilter);

  // Filter Logic
  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  const categories = [
    { id: 'all', label: 'All Gear' },
    { id: 'backpack', label: 'Backpacks' },
    { id: 'sling', label: 'Slings' },
    { id: 'crossbody', label: 'Crossbody' },
    { id: 'messenger', label: 'Messenger' },
    { id: 'pouch', label: 'Pouches' },
    { id: 'wallet', label: 'Wallets' },
    { id: 'travel', label: 'Travel' },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-black px-6 animate-fade-in">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-2">
          Equipment <span className="text-red-600">Log</span>
        </h1>
        <p className="text-gray-500 tracking-widest uppercase text-xs">
          // {filteredProducts.length} Items Found
        </p>
      </div>

      {/* --- SCROLLABLE CATEGORY BAR --- */}
      <div className="max-w-7xl mx-auto mb-10 overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-4 min-w-max">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 text-xs font-bold uppercase tracking-widest border transition-all duration-300 ${
                filter === cat.id 
                  ? 'bg-red-600 border-red-600 text-white' 
                  : 'bg-transparent border-white/20 text-gray-500 hover:border-white hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((item) => (
          <div 
            key={item.id} 
            onClick={() => onItemClick(item)}
            className="group relative bg-zinc-900 border border-white/5 cursor-pointer hover:border-red-600/50 transition-all duration-300 overflow-hidden"
          >
            
            {/* Tag */}
            {item.tag && (
              <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest z-10">
                {item.tag}
              </div>
            )}

            {/* Image Placeholder */}
            <div className="h-64 bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-800/80 transition-colors relative overflow-hidden">
              <img 
                src={placeholderImg} 
                alt={item.name} 
                className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500" 
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white border border-white px-4 py-2 uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-colors">
                  View Specs
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="p-4 border-t border-white/5">
              <h3 className="text-sm font-bold text-white uppercase group-hover:text-red-500 transition-colors truncate">
                {item.name}
              </h3>
              <div className="flex justify-between items-center mt-2">
                 <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                  {item.category} Series
                 </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;