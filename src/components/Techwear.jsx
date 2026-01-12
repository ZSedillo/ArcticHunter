import React from 'react';
import { Shield, Zap, Droplets, Smartphone } from 'lucide-react';

const Techwear = () => {
  const specs = [
    { icon: <Droplets className="w-8 h-8"/>, title: "Hydro-Repellent", desc: "Coated oxford fabric ensuring zero moisture penetration." },
    { icon: <Zap className="w-8 h-8"/>, title: "USB Integration", desc: "External charging ports for on-the-move power management." },
    { icon: <Shield className="w-8 h-8"/>, title: "Anti-Theft", desc: "Hidden zippers and reinforced layers for urban security." },
    { icon: <Smartphone className="w-8 h-8"/>, title: "Smart Storage", desc: "Dedicated compartments for tech ecosystem management." }
  ];

  return (
    <div className="pt-24 min-h-screen bg-black px-6 animate-fade-in flex flex-col items-center">
      <h1 className="text-5xl md:text-7xl font-black uppercase text-center mb-16 tracking-tighter text-white">
        Tech<span className="text-zinc-600">Specs</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl w-full">
        {specs.map((spec, index) => (
          <div key={index} className="p-8 border border-white/10 hover:bg-zinc-900 transition-colors group">
            <div className="text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300">
              {spec.icon}
            </div>
            <h3 className="text-xl font-bold uppercase text-white mb-2 tracking-widest">{spec.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{spec.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techwear;