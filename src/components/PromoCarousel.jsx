import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- IMPORTS ---
import styleImg from '../assets/banner-style.jpg';
import latestImg from '../assets/banner-latest.jpg';
import travelImg from '../assets/banner-travel.jpg';

const PromoCarousel = ({ setPage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // The Banners Data
  const banners = [
    { id: 1, img: styleImg, link: 'catalogue' }, // "New Style"
    { id: 2, img: latestImg, link: 'catalogue' }, // "Latest"
    { id: 3, img: travelImg, link: 'travel' }     // "Travel" -> filters to travel category
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000); // Change every 4 seconds
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  return (
    <div className="bg-zinc-950 py-12 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header (Optional, keeps the layout structured) */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[2px] w-8 bg-orange-600"></div>
          <h2 className="text-white text-xl md:text-2xl font-black uppercase italic tracking-tighter">
            Featured <span className="text-orange-600">Campaigns</span>
          </h2>
        </div>

        {/* --- CAROUSEL CONTAINER --- */}
        <div className="relative group rounded-xl overflow-hidden shadow-2xl border border-white/10">
          
          {/* Images */}
          <div 
            className="w-full h-[300px] md:h-[500px] relative cursor-pointer"
            onClick={() => setPage('catalogue')}
          >
            {banners.map((banner, index) => (
              <img
                key={banner.id}
                src={banner.img}
                alt="Promo Banner"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>

          {/* Left Button */}
          <button 
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-orange-600 text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Button */}
          <button 
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-orange-600 text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators (Dots) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {banners.map((_, index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-orange-600 w-6' : 'bg-white/50'
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default PromoCarousel;