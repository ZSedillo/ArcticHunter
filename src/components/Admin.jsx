import React, { useState } from 'react';
import { Terminal, LogOut, Box, Layers } from 'lucide-react';
import AdminLogin from './AdminLogin';
import AdminInventory from './AdminInventory';
import AdminSiteEditor from './AdminSiteEditor';
import Toast from './Toast';

const Admin = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('inventory');
  const [toast, setToast] = useState(null); // { message, type }

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={() => setIsAuthenticated(true)} onBack={props.onExit} />;
  }

  return (
    <div className="min-h-screen bg-zinc-950 pt-6 px-6 pb-20 font-sans text-zinc-100">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-8 border-b border-white/5 pb-4">
         <div className="flex items-center gap-3">
            <div className="bg-red-600 p-2 rounded-sm shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                <Terminal className="w-5 h-5 text-white" />
            </div>
            <div>
                <h1 className="text-xl font-black italic uppercase tracking-tighter text-white leading-none">
                    Arctic <span className="text-red-600">Admin</span>
                </h1>
                <p className="text-[9px] text-zinc-500 uppercase tracking-widest">System Level Access</p>
            </div>
         </div>
         <button onClick={props.onExit} className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded hover:bg-white hover:text-black transition-all">
            <LogOut className="w-4 h-4" /> <span className="text-xs font-bold uppercase tracking-widest">Exit</span>
         </button>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* TAB NAV */}
        <div className="flex gap-2 mb-8 bg-zinc-900/50 p-1 rounded-lg w-fit border border-white/5">
            <button onClick={() => setActiveTab('inventory')}
                className={`flex items-center gap-2 px-6 py-2 rounded-md text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'inventory' ? 'bg-zinc-800 text-white shadow-lg border border-white/10' : 'text-zinc-500 hover:text-white'}`}>
                <Box className="w-4 h-4" /> Inventory
            </button>
            <button onClick={() => setActiveTab('content')}
                className={`flex items-center gap-2 px-6 py-2 rounded-md text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'content' ? 'bg-zinc-800 text-white shadow-lg border border-white/10' : 'text-zinc-500 hover:text-white'}`}>
                <Layers className="w-4 h-4" /> Site Editor
            </button>
        </div>

        {/* CONTENT AREA */}
        {activeTab === 'inventory' && (
          <AdminInventory 
            products={props.products} 
            onAdd={props.onAddProduct} 
            onUpdate={props.onUpdateProduct} 
            onDelete={props.onDeleteProduct}
            showToast={showToast}
          />
        )}

        {activeTab === 'content' && (
          <AdminSiteEditor 
             slides={props.slides} 
             onUpdateSlide={props.onUpdateSlide}
             categories={props.categories}
             onUpdateCategory={props.onUpdateCategory}
             campaigns={props.campaigns}
             onUpdateCampaign={props.onUpdateCampaign}
             showToast={showToast}
          />
        )}
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
};

export default Admin;