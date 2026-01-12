import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SocialTopBar from './components/SocialTopBar';
import Home from './components/Home';
import Catalogue from './components/Catalogue';
import ItemDetail from './components/ItemDetail';
import Techwear from './components/Techwear';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  // NEW: State to hold the pre-selected category filter
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleItemClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBackToCatalogue = () => {
    setSelectedProduct(null);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedProduct(null);
    // If we are going home or elsewhere, reset filter, unless specifically navigating to catalogue
    if (tab !== 'catalogue') {
      setSelectedCategory('all');
    }
  };

  // Helper to handle switching to catalogue AND setting a category
  const navigateToCategory = (category) => {
    setSelectedCategory(category);
    setActiveTab('catalogue');
  };

  return (
    <div className="bg-white min-h-screen text-zinc-900 font-sans selection:bg-orange-600 selection:text-white flex flex-col">
      <SocialTopBar />
      <div className="sticky top-0 z-40">
        <Navbar activeTab={activeTab} setActiveTab={handleTabChange} />
      </div>
      
      <main className="flex-grow bg-white">
        {/* Pass navigateToCategory to Home */}
        {activeTab === 'home' && <Home setPage={handleTabChange} setCategory={navigateToCategory} />}
        
        {/* Pass selectedCategory to Catalogue */}
        {activeTab === 'catalogue' && (
          selectedProduct ? (
            <ItemDetail product={selectedProduct} onBack={handleBackToCatalogue} />
          ) : (
            <Catalogue onItemClick={handleItemClick} initialFilter={selectedCategory} />
          )
        )}
        
        {activeTab === 'techwear' && <Techwear />}
        {activeTab === 'contact' && <Contact />}
      </main>

        <Footer setPage={handleTabChange} />

    </div>
  );
}

export default App;