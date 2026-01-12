import React, { useEffect } from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

const Toast = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); 
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
      <div className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-2xl border ${
        type === 'success' ? 'bg-zinc-900 border-green-500/50 text-white' : 'bg-zinc-900 border-red-500/50 text-white'
      }`}>
        {type === 'success' ? <CheckCircle className="w-5 h-5 text-green-500" /> : <AlertCircle className="w-5 h-5 text-red-500" />}
        <span className="text-sm font-bold uppercase tracking-wide">{message}</span>
        <button onClick={onClose} className="ml-4 text-zinc-500 hover:text-white"><X className="w-4 h-4" /></button>
      </div>
    </div>
  );
};

export default Toast;