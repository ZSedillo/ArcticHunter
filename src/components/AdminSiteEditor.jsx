import React from 'react';
import { Upload, Image as ImageIcon, LayoutGrid, Star } from 'lucide-react';

const AdminSiteEditor = ({ slides, onUpdateSlide, categories, onUpdateCategory, campaigns, onUpdateCampaign, showToast }) => {
  
  const handleUpload = (e, callback) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => callback(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-16 animate-fade-in">
      
      {/* 1. HERO SLIDES */}
      <div>
        <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
           <ImageIcon className="w-5 h-5 text-orange-600" />
           <h3 className="text-white font-bold uppercase tracking-widest text-lg">Hero Slides</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {slides.map((slide) => (
                <div key={slide.id} className="bg-zinc-900 border border-white/5 p-4 rounded-xl space-y-4">
                    <div className="relative h-32 bg-black rounded-lg overflow-hidden border border-white/5 group">
                        <img src={slide.image} className="w-full h-full object-cover opacity-60" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/60 transition-all">
                             <span className="text-[10px] font-bold text-white uppercase">Change Image</span>
                        </div>
                        <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer"
                               onChange={(e) => handleUpload(e, (res) => { onUpdateSlide(slide.id, 'image', res); showToast('Slide Image Updated'); })} />
                    </div>
                    <input type="text" value={slide.title} onChange={(e) => onUpdateSlide(slide.id, 'title', e.target.value)} 
                        className="w-full bg-black border border-white/10 p-2 text-white text-xs font-bold rounded outline-none focus:border-orange-600" />
                    <input type="text" value={slide.subtitle} onChange={(e) => onUpdateSlide(slide.id, 'subtitle', e.target.value)} 
                        className="w-full bg-black border border-white/10 p-2 text-white text-xs rounded outline-none focus:border-orange-600" />
                </div>
            ))}
        </div>
      </div>

      {/* 2. GEAR UP (Categories) */}
      <div>
        <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
           <LayoutGrid className="w-5 h-5 text-orange-600" />
           <h3 className="text-white font-bold uppercase tracking-widest text-lg">"Gear Up" Images</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
                <div key={cat.id} className="bg-zinc-900 border border-white/5 p-3 rounded-xl relative group">
                    <p className="text-[10px] font-bold text-zinc-500 uppercase mb-2">{cat.label}</p>
                    <div className="relative h-24 bg-black rounded overflow-hidden border border-white/5 hover:border-orange-600 transition-colors">
                        <img src={cat.image} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                             <Upload className="w-5 h-5 text-white" />
                        </div>
                        <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer"
                               onChange={(e) => handleUpload(e, (res) => { onUpdateCategory(cat.id, res); showToast(`${cat.label} Image Updated`); })} />
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* 3. FEATURED CAMPAIGNS */}
      <div>
        <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
           <Star className="w-5 h-5 text-orange-600" />
           <h3 className="text-white font-bold uppercase tracking-widest text-lg">Featured Campaigns</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {campaigns.map((camp) => (
                <div key={camp.id} className="bg-zinc-900 border border-white/5 p-4 rounded-xl">
                    <div className="relative h-40 bg-black rounded-lg overflow-hidden border border-white/5 group hover:border-orange-600 transition-colors">
                        <img src={camp.img} className="w-full h-full object-cover" />
                         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/60 transition-all">
                             <span className="text-[10px] font-bold text-white uppercase">Upload Banner</span>
                        </div>
                        <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer"
                               onChange={(e) => handleUpload(e, (res) => { onUpdateCampaign(camp.id, res); showToast('Campaign Banner Updated'); })} />
                    </div>
                    <p className="text-[10px] text-zinc-500 uppercase mt-2 text-center">Campaign Slot {camp.id}</p>
                </div>
            ))}
        </div>
      </div>

    </div>
  );
};

export default AdminSiteEditor;