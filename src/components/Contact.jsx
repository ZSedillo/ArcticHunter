import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black pt-10 pb-20 px-6 animate-fade-in">
      
      {/* Header */}
      <div className="text-center mb-16 pt-10">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-2">
          Reach <span className="text-orange-600">Out</span>
        </h1>
        <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">
          We are ready to assist you
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-zinc-900 border border-white/10 shadow-2xl overflow-hidden rounded-xl">
        
        {/* Left Side: Contact Info (Darker) */}
        <div className="bg-zinc-950 p-12 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 rounded-bl-full blur-xl"></div>

          <div>
            <h3 className="text-2xl font-bold uppercase tracking-widest mb-8 border-b border-white/10 pb-4 text-orange-600">
              Contact Info
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-zinc-900 rounded border border-white/5 group-hover:border-orange-600/50 transition-colors">
                  <Phone className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-gray-500 tracking-widest mb-1 font-bold">Mobile</p>
                  <p className="text-lg font-bold text-gray-200">0909953499</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-zinc-900 rounded border border-white/5 group-hover:border-orange-600/50 transition-colors">
                  <Mail className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-gray-500 tracking-widest mb-1 font-bold">Email</p>
                  <p className="text-lg font-bold text-gray-200 break-all">arctichunterphilippines@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-zinc-900 rounded border border-white/5 group-hover:border-orange-600/50 transition-colors">
                  <MapPin className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-gray-500 tracking-widest mb-1 font-bold">Location</p>
                  <p className="text-lg font-bold text-gray-200">Manila, Philippines</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
             <p className="text-xs text-gray-600 uppercase tracking-widest">
               Official Arctic Hunter Philippines
             </p>
          </div>
        </div>

        {/* Right Side: Message Form (Dark Mode) */}
        <div className="p-12 bg-zinc-900">
          <h3 className="text-2xl font-bold uppercase tracking-widest mb-2 text-white">
            Send a Message
          </h3>
          <p className="text-gray-500 text-sm mb-8">
            Got a question about our gear? Fill out the form below.
          </p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">Name</label>
                <input type="text" className="w-full bg-black border border-white/10 p-4 text-white outline-none focus:border-orange-600 transition-colors text-sm" placeholder="JUAN DELA CRUZ" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">Phone</label>
                <input type="text" className="w-full bg-black border border-white/10 p-4 text-white outline-none focus:border-orange-600 transition-colors text-sm" placeholder="09XX XXX XXXX" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">Email</label>
              <input type="email" className="w-full bg-black border border-white/10 p-4 text-white outline-none focus:border-orange-600 transition-colors text-sm" placeholder="YOU@EMAIL.COM" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">Message</label>
              <textarea rows="4" className="w-full bg-black border border-white/10 p-4 text-white outline-none focus:border-orange-600 transition-colors text-sm" placeholder="I AM INTERESTED IN..."></textarea>
            </div>

            <button className="w-full bg-white text-black font-black uppercase tracking-[0.2em] py-4 hover:bg-orange-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group">
              Send Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;