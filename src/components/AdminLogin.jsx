import React, { useState } from 'react';
import { Lock, ArrowRight, ArrowLeft } from 'lucide-react';

const AdminLogin = ({ onLogin, onBack }) => { // <--- Added 'onBack' prop
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(); 
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black"></div>
      
      <div className="relative z-10 w-full max-w-md bg-zinc-900/50 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl animate-fade-in">
        
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="absolute top-6 left-6 text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        <div className="text-center mb-8 mt-4">
          <div className="w-16 h-16 rounded-full bg-zinc-800 text-white flex items-center justify-center mx-auto mb-4 border border-white/5 shadow-lg">
            <Lock className="w-6 h-6 text-orange-600" />
          </div>
          <h2 className="text-2xl font-black text-white uppercase tracking-tighter">
            System <span className="text-orange-600">Access</span>
          </h2>
          <p className="text-xs text-zinc-500 uppercase tracking-widest mt-2">Authorized Personnel Only</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input 
              type="password" 
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="ACCESS CODE"
              className="w-full bg-black/50 border border-white/10 focus:border-orange-600 p-4 text-center text-white tracking-[0.5em] font-mono outline-none rounded-lg transition-all placeholder:tracking-normal placeholder:text-zinc-700"
            />
          </div>
          <button className="w-full bg-white text-black font-black uppercase tracking-widest py-4 rounded-lg hover:bg-orange-600 hover:text-white transition-all flex items-center justify-center gap-2 shadow-lg group">
            Unlock System <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;