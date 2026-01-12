import React from 'react';
import { ArrowLeft, ShoppingCart, ExternalLink } from 'lucide-react';

const ItemDetail = ({ product, onBack }) => {
  return (
    <div className="pt-24 min-h-screen bg-black animate-fade-in px-6 pb-20">
      
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="text-gray-500 hover:text-white flex items-center gap-2 uppercase text-xs tracking-widest mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Return to Catalogue
      </button>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Large Image Placeholder */}
        <div className="bg-zinc-900 aspect-square flex items-center justify-center border border-white/10 rounded-lg relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 to-black opacity-50"></div>
          <span className="text-gray-500 uppercase tracking-widest text-xl font-bold z-10">
            {product.name} View
          </span>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-4xl md:text-6xl font-black uppercase text-white mb-4 leading-none">
            {product.name}
          </h1>
          
          <div className="flex gap-4 mb-8 text-xs font-mono text-red-500 uppercase tracking-widest">
            <span>// Official Gear</span>
            <span>// In Stock</span>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Engineered for high-performance urban travel. Features water-resistant coating, 
            ergonomic strap design, and dedicated compartments for all your tech essentials.
            Verified Arctic Hunter quality.
          </p>

          {/* Action Buttons */}
          <div className="space-y-4">
            <p className="text-white uppercase tracking-widest text-xs font-bold mb-2">Select Retailer:</p>
            
            <a 
              href="https://www.lazada.com.ph/shop/arctic-hunter" 
              target="_blank" 
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-[#0f1540] border border-[#1a2569] text-white py-4 font-bold uppercase tracking-widest hover:bg-[#1a2569] transition-all group"
            >
              <ShoppingCart className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
              Buy on Lazada
              <ExternalLink className="w-4 h-4 opacity-50" />
            </a>

            <a 
              href="https://shopee.ph/arctichunterph" 
              target="_blank" 
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-[#ee4d2d]/10 border border-[#ee4d2d]/50 text-[#ee4d2d] py-4 font-bold uppercase tracking-widest hover:bg-[#ee4d2d] hover:text-white transition-all group"
            >
              <ShoppingCart className="w-5 h-5" />
              Buy on Shopee
              <ExternalLink className="w-4 h-4 opacity-50" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;