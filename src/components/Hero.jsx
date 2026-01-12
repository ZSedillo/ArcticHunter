import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center pt-20 overflow-hidden bg-black text-white">
      
      {/* Background Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Main Content */}
      <div className="z-10 text-center max-w-5xl px-4">
        <p className="text-red-600 tracking-[0.3em] text-sm font-bold uppercase mb-4 animate-pulse">
          System Online // Ready for Deployment
        </p>
        
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none mb-6">
          Future <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
            Nomad
          </span>
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto text-lg mb-10 leading-relaxed">
          Engineered for the modern professional. Waterproof, anti-theft, and built for the urban wilderness.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button className="group bg-white text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center">
            View Catalogue
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 border border-white/20 text-gray-300 font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
            Watch Trailer
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 animate-bounce">
        <ChevronDown className="text-gray-500 w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;