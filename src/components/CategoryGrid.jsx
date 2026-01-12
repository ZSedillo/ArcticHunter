import React from 'react';

import backpackImg from '../assets/cat-backpack.jpg';
import slingImg from '../assets/cat-sling.jpg';
import duffleImg from '../assets/cat-duffle.jpg';
import messengerImg from '../assets/cat-messenger.jpg';
import crossbodyImg from '../assets/cat-crossbody.jpg';
import walletImg from '../assets/cat-wallet.jpg';
import pouchImg from '../assets/cat-pouch.jpg'; // New Image

const CategoryGrid = ({ setPage, setCategory }) => {
  
  const handleCategoryClick = (category) => {
    setCategory(category);
    setPage('catalogue');
  };

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-zinc-900 mb-4">
            Gear Up <span className="text-orange-600">For School</span>
          </h2>
          <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">
            Select your loadout
          </p>
        </div>

        {/* --- BENTO GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          
          {/* 1. BACKPACK (Big Square: 2x2) */}
          <div 
            onClick={() => handleCategoryClick('backpack')}
            className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl cursor-pointer"
          >
            <img src={backpackImg} alt="Backpacks" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
            <div className="absolute bottom-6 left-6">
              <span className="bg-white text-black px-6 py-3 font-bold uppercase tracking-widest text-sm hover:bg-orange-600 hover:text-white transition-colors shadow-lg">
                Shop Backpacks
              </span>
            </div>
          </div>

          {/* 2. SLING (Tall: 1x2) */}
          <div 
            onClick={() => handleCategoryClick('sling')}
            className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-xl cursor-pointer"
          >
            <img src={slingImg} alt="Sling Bags" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
            <div className="absolute bottom-6 left-6">
              <span className="bg-white text-black px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-orange-600 hover:text-white transition-colors shadow-lg">
                Slings
              </span>
            </div>
          </div>

          {/* 3. DUFFLE (Wide: 1x1) */}
          <div 
            onClick={() => handleCategoryClick('travel')}
            className="md:col-span-1 relative group overflow-hidden rounded-xl cursor-pointer"
          >
            <img src={duffleImg} alt="Duffle Bags" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute bottom-6 left-6">
              <span className="bg-white text-black px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-orange-600 hover:text-white transition-colors shadow-lg">
                Travel
              </span>
            </div>
          </div>

          {/* 4. MESSENGER (1x1) */}
          <div 
            onClick={() => handleCategoryClick('messenger')}
            className="md:col-span-1 relative group overflow-hidden rounded-xl cursor-pointer"
          >
            <img src={messengerImg} alt="Messenger" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute bottom-6 left-6">
              <span className="bg-white text-black px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-orange-600 hover:text-white transition-colors shadow-lg">
                Messenger
              </span>
            </div>
          </div>

          {/* 5. CROSSBODY (Wide: 2x1) */}
          <div 
            onClick={() => handleCategoryClick('crossbody')}
            className="md:col-span-2 relative group overflow-hidden rounded-xl cursor-pointer"
          >
            <img src={crossbodyImg} alt="Crossbody" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute bottom-6 left-6">
              <span className="bg-white text-black px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-orange-600 hover:text-white transition-colors shadow-lg">
                Crossbody
              </span>
            </div>
          </div>

          {/* 6. POUCH (New Item: 1x1) */}
          <div 
            onClick={() => handleCategoryClick('pouch')}
            className="md:col-span-1 relative group overflow-hidden rounded-xl cursor-pointer"
          >
            <img src={pouchImg} alt="Pouch" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute bottom-6 left-6">
              <span className="bg-white text-black px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-orange-600 hover:text-white transition-colors shadow-lg">
                Pouches
              </span>
            </div>
          </div>

          {/* 7. WALLET (1x1) */}
          <div 
            onClick={() => handleCategoryClick('wallet')}
            className="md:col-span-1 relative group overflow-hidden rounded-xl cursor-pointer"
          >
            <img src={walletImg} alt="Wallet" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute bottom-6 left-6">
              <span className="bg-white text-black px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-orange-600 hover:text-white transition-colors shadow-lg">
                Wallets
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;