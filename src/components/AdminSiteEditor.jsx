import React, { useState } from 'react';
import { Upload, Image as ImageIcon, LayoutGrid, Star, Plus, Trash2, X } from 'lucide-react';
import ConfirmModal from './ConfirmModal'; // Import the Delete Modal

const AdminSiteEditor = ({ 
  slides, 
  onAddSlide, 
  onDeleteSlide, 
  onUpdateSlide, 
  categories, 
  onUpdateCategory, 
  campaigns, 
  onUpdateCampaign, 
  showToast 
}) => {
  
  // --- STATE FOR ADD SLIDE MODAL ---
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newSlide, setNewSlide] = useState({
    title: '', subtitle: '', desc: '', image: null
  });

  // --- STATE FOR DELETE MODAL ---
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [slideToDelete, setSlideToDelete] = useState(null);

  // Generic Uploader
  const handleUpload = (file, callback) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => callback(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // --- ADD SLIDE HANDLERS ---
  const handleNewSlideUpload = (e) => {
    handleUpload(e.target.files[0], (res) => setNewSlide({ ...newSlide, image: res }));
  };

  const submitNewSlide = (e) => {
    e.preventDefault();
    if (!newSlide.image) return alert('Please upload an image first');
    
    onAddSlide(newSlide); // Pass the data to App.jsx
    showToast('New Hero Slide Published');
    
    // Reset and Close
    setNewSlide({ title: '', subtitle: '', desc: '', image: null });
    setIsAddModalOpen(false);
  };

  // --- DELETE SLIDE HANDLERS ---
  const confirmDeleteSlide = () => {
    if (slideToDelete) {
      onDeleteSlide(slideToDelete);
      showToast('Slide Removed Successfully', 'error');
      setIsDeleteModalOpen(false);
      setSlideToDelete(null);
    }
  };

  return (
    <div className="space-y-16 animate-fade-in relative">
      
      {/* 1. HERO SLIDES */}
      <div>
        <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
           <div className="flex items-center gap-3">
             <ImageIcon className="w-5 h-5 text-orange-600" />
             <h3 className="text-white font-bold uppercase tracking-widest text-lg">Hero Slides</h3>
           </div>
           
           {/* OPEN ADD MODAL BUTTON */}
           <button 
             onClick={() => setIsAddModalOpen(true)}
             className="flex items-center gap-2 bg-zinc-900 border border-white/10 px-4 py-2 rounded hover:bg-white hover:text-black transition-all text-xs font-bold uppercase tracking-widest"
           >
             <Plus className="w-4 h-4" /> Add Slide
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {slides.map((slide, index) => (
                <div key={slide.id} className="bg-zinc-900 border border-white/5 p-4 rounded-xl space-y-4 relative group">
                    
                    {/* TRIGGER DELETE MODAL */}
                    <button 
                        onClick={() => { setSlideToDelete(slide.id); setIsDeleteModalOpen(true); }}
                        className="absolute top-2 right-2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100"
                        title="Delete Slide"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>

                    {/* Image Preview / Edit */}
                    <div className="relative h-32 bg-black rounded-lg overflow-hidden border border-white/5 group">
                        <img src={slide.image} className="w-full h-full object-cover opacity-60" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/60 transition-all">
                             <span className="text-[10px] font-bold text-white uppercase">Change Image</span>
                        </div>
                        <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer"
                               onChange={(e) => handleUpload(e.target.files[0], (res) => { onUpdateSlide(slide.id, 'image', res); showToast('Slide Image Updated'); })} />
                    </div>
                    
                    {/* Text Inputs */}
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-[9px] font-bold text-zinc-500 uppercase">Slide {index + 1}</span>
                        </div>
                        <input type="text" value={slide.title} onChange={(e) => onUpdateSlide(slide.id, 'title', e.target.value)} 
                            className="w-full bg-black border border-white/10 p-2 text-white text-xs font-bold rounded outline-none focus:border-orange-600" placeholder="TITLE" />
                        <input type="text" value={slide.subtitle} onChange={(e) => onUpdateSlide(slide.id, 'subtitle', e.target.value)} 
                            className="w-full bg-black border border-white/10 p-2 text-white text-xs rounded outline-none focus:border-orange-600" placeholder="SUBTITLE" />
                         <textarea rows="2" value={slide.desc} onChange={(e) => onUpdateSlide(slide.id, 'desc', e.target.value)}
                            className="w-full bg-black border border-white/10 p-2 text-zinc-300 text-xs rounded outline-none focus:border-orange-600 resize-none" placeholder="Description..."/>
                    </div>
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
                               onChange={(e) => handleUpload(e.target.files[0], (res) => { onUpdateCategory(cat.id, res); showToast(`${cat.label} Image Updated`); })} />
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
                               onChange={(e) => handleUpload(e.target.files[0], (res) => { onUpdateCampaign(camp.id, res); showToast('Campaign Banner Updated'); })} />
                    </div>
                    <p className="text-[10px] text-zinc-500 uppercase mt-2 text-center">Campaign Slot {camp.id}</p>
                </div>
            ))}
        </div>
      </div>

      {/* --- ADD SLIDE MODAL (Popup) --- */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
            <div className="w-full max-w-md bg-zinc-900 border border-white/10 rounded-xl shadow-2xl p-6 relative">
                <button onClick={() => setIsAddModalOpen(false)} className="absolute top-4 right-4 text-zinc-500 hover:text-white"><X className="w-5 h-5"/></button>
                <h3 className="text-xl font-bold text-white uppercase mb-6">Add New Slide</h3>
                
                <form onSubmit={submitNewSlide} className="space-y-4">
                    <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase text-zinc-500">Slide Image</label>
                        <div className="relative h-32 bg-black border-dashed border-2 border-white/10 rounded-lg flex items-center justify-center overflow-hidden hover:border-orange-600 transition-colors">
                            {newSlide.image ? <img src={newSlide.image} className="w-full h-full object-cover"/> : <Upload className="w-6 h-6 text-zinc-700"/>}
                            <input type="file" accept="image/*" onChange={handleNewSlideUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase text-zinc-500">Main Title</label>
                        <input required type="text" className="w-full bg-black border border-white/10 p-3 text-white text-sm rounded focus:border-orange-600 outline-none"
                            value={newSlide.title} onChange={(e) => setNewSlide({...newSlide, title: e.target.value})} placeholder="e.g. URBAN EXPLORER" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase text-zinc-500">Subtitle</label>
                        <input required type="text" className="w-full bg-black border border-white/10 p-3 text-white text-sm rounded focus:border-orange-600 outline-none"
                            value={newSlide.subtitle} onChange={(e) => setNewSlide({...newSlide, subtitle: e.target.value})} placeholder="e.g. SERIES 2024" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase text-zinc-500">Description</label>
                        <textarea rows="2" className="w-full bg-black border border-white/10 p-3 text-white text-sm rounded focus:border-orange-600 outline-none resize-none"
                            value={newSlide.desc} onChange={(e) => setNewSlide({...newSlide, desc: e.target.value})} placeholder="Short description..." />
                    </div>
                    <button className="w-full bg-white text-black font-bold py-3 uppercase tracking-widest text-xs rounded hover:bg-orange-600 hover:text-white transition-all">
                        Publish Slide
                    </button>
                </form>
            </div>
        </div>
      )}

      {/* --- CONFIRM DELETE MODAL --- */}
      <ConfirmModal 
        isOpen={isDeleteModalOpen}
        title="Delete Slide?"
        message="This will remove the slide from the homepage carousel. This action cannot be undone."
        onConfirm={confirmDeleteSlide}
        onCancel={() => setIsDeleteModalOpen(false)}
      />

    </div>
  );
};

export default AdminSiteEditor;