import React, { useState } from 'react';
import { Plus, Edit, Trash2, Search, Upload } from 'lucide-react';
import placeholderImg from '../assets/cat-backpack.jpg';
import ConfirmModal from './ConfirmModal'; // <--- Import the Modal

const AdminInventory = ({ products, onAdd, onUpdate, onDelete, showToast }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    id: '', name: '', category: 'backpack', tag: 'New', image: null
  });

  // --- NEW: MODAL STATE ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setFormData({ ...formData, image: reader.result });
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...formData, image: formData.image || null };
    if (isEditing) {
      onUpdate(payload);
      showToast('Item Updated Successfully');
    } else {
      onAdd({ ...payload, id: Date.now() });
      showToast('New Asset Added');
    }
    setIsEditing(false);
    setFormData({ id: '', name: '', category: 'backpack', tag: '', image: null });
  };

  const handleEdit = (product) => {
    setIsEditing(true);
    setFormData(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- NEW: DELETE HANDLERS ---
  const handleDeleteClick = (id) => {
    setItemToDelete(id);   // 1. Remember which item
    setIsModalOpen(true);  // 2. Open the modal
  };

  const confirmDelete = () => {
    if (itemToDelete) {
      onDelete(itemToDelete);
      showToast('Item Deleted Permanently', 'error');
      setIsModalOpen(false);
      setItemToDelete(null);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in">
        {/* FORM (Left Side) */}
        <div className="lg:col-span-4">
          <div className="bg-zinc-900 border border-white/5 p-6 rounded-xl sticky top-6">
             <h3 className="text-sm font-bold text-white uppercase mb-6 flex items-center gap-2 border-b border-white/5 pb-4">
                {isEditing ? <Edit className="w-4 h-4 text-orange-500"/> : <Plus className="w-4 h-4 text-green-500"/>}
                {isEditing ? 'Edit Asset' : 'Add New Asset'}
             </h3>
             <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-zinc-500">Name</label>
                    <input required type="text" className="w-full bg-black border border-white/10 p-3 text-white text-sm rounded focus:border-orange-600 outline-none" 
                        value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-zinc-500">Category</label>
                    <select className="w-full bg-black border border-white/10 p-3 text-white text-sm rounded focus:border-orange-600 outline-none"
                        value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                        <option value="backpack">Backpack</option>
                        <option value="sling">Sling</option>
                        <option value="travel">Travel</option>
                        <option value="wallet">Wallet</option>
                        <option value="pouch">Pouch</option>
                        <option value="messenger">Messenger</option>
                        <option value="crossbody">Crossbody</option>
                    </select>
                </div>
                 <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-zinc-500">Tag</label>
                    <input type="text" className="w-full bg-black border border-white/10 p-3 text-white text-sm rounded focus:border-orange-600 outline-none" 
                        value={formData.tag} onChange={(e) => setFormData({...formData, tag: e.target.value})} />
                </div>
                <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase text-zinc-500">Image</label>
                      <div className="relative h-32 bg-black border-dashed border-2 border-white/10 rounded-lg flex items-center justify-center overflow-hidden hover:border-orange-600 transition-colors">
                          {formData.image ? <img src={formData.image} className="w-full h-full object-cover" /> : <Upload className="w-6 h-6 text-zinc-700" />}
                          <input type="file" accept="image/*" onChange={handleImageUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
                      </div>
                </div>
                <button className="w-full bg-white text-black font-bold py-3 uppercase tracking-widest text-xs rounded hover:bg-orange-600 hover:text-white transition-all">
                    {isEditing ? 'Save Changes' : 'Initialize Upload'}
                </button>
                {isEditing && <button type="button" onClick={() => {setIsEditing(false); setFormData({id: '', name: '', category: 'backpack', tag: '', image: null})}} className="w-full text-zinc-500 text-[10px] uppercase py-2 hover:text-white">Cancel</button>}
             </form>
          </div>
        </div>

        {/* LIST (Right Side) */}
        <div className="lg:col-span-8 space-y-6">
           <div className="flex items-center gap-4 bg-zinc-900 p-4 rounded-lg border border-white/5">
              <Search className="w-5 h-5 text-zinc-500" />
              <input type="text" placeholder="SEARCH DATABASE..." className="bg-transparent border-none outline-none text-white text-sm w-full font-mono uppercase" 
                     value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {filteredProducts.map(item => (
                   <div key={item.id} className="bg-zinc-900/50 border border-white/5 p-3 rounded-lg flex items-start gap-4 hover:border-white/20 transition-all group">
                       <div className="w-16 h-16 bg-black rounded-md overflow-hidden shrink-0 border border-white/5">
                           <img src={item.image || placeholderImg} className="w-full h-full object-cover opacity-80" />
                       </div>
                       <div className="flex-grow">
                           <h4 className="text-white font-bold text-sm truncate">{item.name}</h4>
                           <span className="text-[10px] uppercase text-zinc-500 tracking-wider bg-black/40 px-2 py-0.5 rounded">{item.category}</span>
                       </div>
                       <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                           <button onClick={() => handleEdit(item)} className="p-2 bg-black text-blue-400 rounded hover:bg-blue-600 hover:text-white"><Edit className="w-3 h-3" /></button>
                           {/* --- TRIGGER DELETE MODAL HERE --- */}
                           <button onClick={() => handleDeleteClick(item.id)} className="p-2 bg-black text-red-400 rounded hover:bg-red-600 hover:text-white"><Trash2 className="w-3 h-3" /></button>
                       </div>
                   </div>
               ))}
           </div>
        </div>
      </div>

      {/* --- RENDER MODAL --- */}
      <ConfirmModal 
        isOpen={isModalOpen}
        title="Delete Item?"
        message="This action will permanently remove this item from the catalogue. This cannot be undone."
        onConfirm={confirmDelete}
        onCancel={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default AdminInventory;