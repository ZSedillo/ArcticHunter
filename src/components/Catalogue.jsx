import React, { useState } from 'react';

// Placeholder Image
import placeholderImg from '../assets/cat-backpack.jpg'; 

const Catalogue = ({ onItemClick, initialFilter = 'all', products }) => {
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