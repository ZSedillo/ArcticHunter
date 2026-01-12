import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Catalogue', id: 'catalogue' },
    { name: 'Techwear', id: 'techwear' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="w-full bg-black border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Text Logo (Reverted) */}
        <div 
          className="cursor-pointer text-2xl font-bold tracking-tighter uppercase italic text-white"
          onClick={() => setActiveTab('home')}
        >
          Arctic <span className="text-red-600">Hunter</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 text-xs font-bold tracking-[0.2em] uppercase">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              className={`transition-all duration-300 relative py-2 ${
                activeTab === link.id ? 'text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 h-[2px] bg-red-600 transition-all duration-300 ${
                activeTab === link.id ? 'w-full' : 'w-0'
              }`}></span>
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center space-x-6 text-white">
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-white/10 py-6 px-6 space-y-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setActiveTab(link.id);
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left uppercase tracking-widest text-sm ${
                activeTab === link.id ? 'text-red-500 font-bold' : 'text-gray-400'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;