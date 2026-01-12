import React from 'react';
import { Facebook, Instagram, Phone, Mail, ShoppingBag } from 'lucide-react';

const SocialTopBar = () => {
  return (
    <div className="bg-zinc-950 text-gray-400 text-[10px] md:text-xs font-medium tracking-widest uppercase py-2.5 px-6 flex justify-between items-center border-b border-white/5 z-50">
      
      {/* Left: Contact Links */}
      <div className="flex items-center gap-6">
        <a href="tel:0909953499" className="flex items-center gap-2 hover:text-white transition-colors">
          <Phone className="w-3 h-3 text-orange-600" /> 
          <span>0909953499</span>
        </a>
        <a href="mailto:arctichunterphilippines@gmail.com" className="hidden md:flex items-center gap-2 hover:text-white transition-colors">
          <Mail className="w-3 h-3 text-orange-600" />
          <span>arctichunterphilippines@gmail.com</span>
        </a>
      </div>
      
      {/* Right: Social & Shop Links */}
      <div className="flex items-center gap-6">
        <span className="hidden md:inline text-gray-600">Follow Us:</span>
        
        <div className="flex gap-4 items-center">
          <a href="https://www.instagram.com/arctichunterphilippines/" target="_blank" rel="noreferrer" className="hover:text-orange-500 transition-colors">
            <Instagram className="w-3.5 h-3.5" />
          </a>
          <a href="https://www.facebook.com/ArcticHunterPhilippines" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">
            <Facebook className="w-3.5 h-3.5" />
          </a>
          {/* TikTok Link */}
          <a href="https://www.tiktok.com/@arctichunter.ph" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors font-bold text-[10px]">
            TIKTOK
          </a>
        </div>

        {/* Vertical Divider */}
        <div className="w-[1px] h-3 bg-gray-700 mx-2"></div>

        {/* Direct Shop Links (Small) */}
        <div className="flex gap-3">
            <a href="https://www.lazada.com.ph/shop/my-arctic-hunter" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                Lazada
            </a>
            <a href="https://shopee.ph/arctichunterph" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                Shopee
            </a>
        </div>
      </div>
    </div>
  );
};

export default SocialTopBar;