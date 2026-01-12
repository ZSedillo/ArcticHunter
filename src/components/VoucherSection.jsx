import React, { useState } from 'react';
import { Copy, CheckCircle } from 'lucide-react';

// --- IMPORTS ---
import freeShippingImg from '../assets/free-shipping.jpg';
import voucher150 from '../assets/voucher-150.jpg';
import voucher100 from '../assets/voucher-100.jpg';
import voucher10 from '../assets/voucher-10.jpg';

const VoucherSection = () => {
  const [copiedId, setCopiedId] = useState(null);

  // Function to handle copying code
  const handleCopy = (id, code) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    
    // Reset the "Copied" state after 2 seconds
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  // ORIGINAL DATA
  const originalVouchers = [
    { id: 1, img: voucher150, code: 'AH150OFF' },
    { id: 2, img: voucher100, code: 'AH100OFF' },
    { id: 3, img: voucher10, code: 'AH10OFF' },
    { id: 4, img: voucher150, code: 'AH150OFF' },
    { id: 5, img: voucher100, code: 'AH100OFF' },
    { id: 6, img: voucher10, code: 'AH10OFF' },
  ];

  // DUPLICATE DATA for seamless looping
  // We combine the list with itself so there is no gap when it loops
  const vouchers = [...originalVouchers, ...originalVouchers];

  return (
    <div className="bg-zinc-950 py-16 border-y border-white/10 overflow-hidden">
      
      {/* 1. FREE SHIPPING BANNER (Static) */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="relative group overflow-hidden rounded-lg shadow-2xl border border-orange-600/30 cursor-pointer hover:border-orange-600/60 transition-colors">
          <img 
            src={freeShippingImg} 
            alt="Free Shipping Nationwide" 
            className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>

      {/* 2. INFINITE VOUCHER MARQUEE */}
      <div className="relative w-full">
        
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-4 mb-8">
          <div className="h-[2px] w-8 bg-orange-600"></div>
          <h2 className="text-white text-2xl md:text-3xl font-black uppercase italic tracking-tighter">
            Claim Your <span className="text-orange-600">Rewards</span>
          </h2>
        </div>

        {/* --- SCROLLING TRACK --- */}
        {/* 'overflow-hidden' on parent, 'flex' on child with animation */}
        <div className="w-full overflow-hidden flex">
          
          <div className="flex gap-8 animate-scroll px-6">
            {vouchers.map((voucher, index) => (
              /* Added 'index' to key to allow duplicates */
              <div 
                key={`${voucher.id}-${index}`} 
                onClick={() => handleCopy(voucher.id, voucher.code)}
                className="min-w-[280px] md:min-w-[320px] relative group/card cursor-pointer"
              >
                {/* Card Container */}
                <div className="relative rounded-xl overflow-hidden shadow-lg border border-white/10 group-hover/card:border-orange-600 transition-all duration-300 bg-zinc-900">
                  
                  <img 
                    src={voucher.img} 
                    alt="Voucher" 
                    className={`w-full transition-opacity duration-300 ${copiedId === voucher.id ? 'opacity-20' : 'opacity-100 group-hover/card:opacity-40'}`} 
                  />
                  
                  {/* Default Hint */}
                  <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${copiedId === voucher.id ? 'opacity-0' : 'opacity-0 group-hover/card:opacity-100'}`}>
                    <Copy className="text-orange-500 w-8 h-8 mb-2 drop-shadow-lg" />
                    <span className="text-white font-bold uppercase tracking-widest text-sm drop-shadow-md">
                      Click to Copy
                    </span>
                  </div>

                  {/* Copied State */}
                  {copiedId === voucher.id && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center animate-fade-in bg-zinc-900/90">
                      <CheckCircle className="text-green-500 w-10 h-10 mb-2" />
                      <span className="text-white font-bold uppercase tracking-widest text-sm">
                        Code Copied!
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default VoucherSection;