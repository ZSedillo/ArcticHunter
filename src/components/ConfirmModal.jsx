import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

const ConfirmModal = ({ isOpen, title, message, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
      <div className="w-full max-w-sm bg-zinc-900 border border-white/10 rounded-xl shadow-2xl p-6 relative">
        
        <button onClick={onCancel} className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors">
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mb-4 border border-red-500/20">
            <AlertTriangle className="w-6 h-6 text-red-500" />
          </div>
          
          <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-2">
            {title}
          </h3>
          
          <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
            {message}
          </p>

          <div className="flex gap-3 w-full">
            <button 
              onClick={onCancel}
              className="flex-1 py-3 border border-white/10 rounded-lg text-xs font-bold uppercase tracking-widest text-zinc-400 hover:bg-white/5 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={onConfirm}
              className="flex-1 py-3 bg-red-600 rounded-lg text-xs font-bold uppercase tracking-widest text-white hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;