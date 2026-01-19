import React, { useState } from 'react';
// ... (All your component imports) ...
import Navbar from './components/Navbar';
import SocialTopBar from './components/SocialTopBar';
import Home from './components/Home';
import Catalogue from './components/Catalogue';
import ItemDetail from './components/ItemDetail';
import Techwear from './components/Techwear';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './components/Admin';

// --- IMPORT ALL IMAGES ---
import heroCity from './assets/hero-cityhunter.jpg';
import heroTough from './assets/hero-toughmen.jpg';
import heroLeads from './assets/hero-leads.jpg';
// Import Category Images
import backpackImg from './assets/cat-backpack.jpg';
import slingImg from './assets/cat-sling.jpg';
import duffleImg from './assets/cat-duffle.jpg';
import messengerImg from './assets/cat-messenger.jpg';
import crossbodyImg from './assets/cat-crossbody.jpg';
import walletImg from './assets/cat-wallet.jpg';
import pouchImg from './assets/cat-pouch.jpg';
// Import Campaign Images
import styleImg from './assets/banner-style.jpg';
import latestImg from './assets/banner-latest.jpg';
import travelImg from './assets/banner-travel.jpg';

// --- INITIAL STATES ---
const INITIAL_PRODUCTS = [
  // --- BACKPACKS ---
  { id: 101, name: 'B00534 Laptop Backpack', category: 'backpack', price: '₱2,699', originalPrice: '₱3,500', tag: 'Best Seller' },
  { id: 102, name: 'Urban Runner Pro', category: 'backpack', price: '₱1,999', originalPrice: '₱2,500', tag: 'Featured' },
  { id: 103, name: 'City Trekker', category: 'backpack', price: '₱3,100', originalPrice: '', tag: '' },
  { id: 104, name: 'Campus Elite', category: 'backpack', price: '₱1,499', originalPrice: '₱1,800', tag: 'New' },
  { id: 105, name: 'Tech Commuter', category: 'backpack', price: '₱2,800', originalPrice: '', tag: '' },
  { id: 106, name: 'Night Rider', category: 'backpack', price: '₱2,200', originalPrice: '', tag: '' },
  { id: 107, name: 'Weekend Warrior', category: 'backpack', price: '₱3,500', originalPrice: '₱4,200', tag: 'Hot' },
  { id: 108, name: 'Nomad X', category: 'backpack', price: '₱4,200', originalPrice: '', tag: '' },
  { id: 109, name: 'Student Classic', category: 'backpack', price: '₱1,200', originalPrice: '', tag: '' },
  { id: 110, name: 'Pro Gamer Bag', category: 'backpack', price: '₱3,800', originalPrice: '₱5,000', tag: 'Limited' },

  // --- SLINGS ---
  { id: 201, name: 'Chest Pack Pro', category: 'sling', price: '₱1,299', originalPrice: '₱1,800', tag: 'Hot' },
  { id: 202, name: 'Tactical Sling', category: 'sling', price: '₱999', originalPrice: '', tag: '' },
  { id: 203, name: 'Daily Rider Sling', category: 'sling', price: '₱1,150', originalPrice: '₱1,500', tag: 'New' },
  { id: 204, name: 'Urban Access Sling', category: 'sling', price: '₱1,400', originalPrice: '', tag: '' },
  { id: 205, name: 'Sport Sling X', category: 'sling', price: '₱899', originalPrice: '₱1,200', tag: '' },
  { id: 206, name: 'Anti-Theft Sling', category: 'sling', price: '₱1,600', originalPrice: '₱2,200', tag: 'Best Seller' },

  // --- CROSSBODY ---
  { id: 301, name: 'Crossbody X-Series', category: 'crossbody', price: '₱1,500', originalPrice: '', tag: '' },
  { id: 302, name: 'Slim Body Guard', category: 'crossbody', price: '₱1,100', originalPrice: '₱1,400', tag: '' },
  { id: 303, name: 'Street Cross', category: 'crossbody', price: '₱1,350', originalPrice: '₱1,800', tag: 'New' },
  { id: 304, name: 'Tech Cross', category: 'crossbody', price: '₱1,800', originalPrice: '', tag: '' },
  { id: 305, name: 'Vertical Cross', category: 'crossbody', price: '₱1,200', originalPrice: '', tag: '' },

  // --- MESSENGER ---
  { id: 401, name: 'Commuter Series', category: 'messenger', price: '₱2,100', originalPrice: '₱2,800', tag: 'Featured' },
  { id: 402, name: 'Office Messenger', category: 'messenger', price: '₱2,500', originalPrice: '', tag: '' },
  { id: 403, name: 'Student Courier', category: 'messenger', price: '₱1,800', originalPrice: '₱2,200', tag: '' },
  { id: 404, name: 'Laptop Briefcase', category: 'messenger', price: '₱2,900', originalPrice: '₱3,800', tag: 'Hot' },
  { id: 405, name: 'Tactical Brief', category: 'messenger', price: '₱2,300', originalPrice: '', tag: '' },
  { id: 406, name: 'Satchel Pro', category: 'messenger', price: '₱1,950', originalPrice: '', tag: '' },
  { id: 407, name: 'Executive Carry', category: 'messenger', price: '₱3,100', originalPrice: '', tag: '' },

  // --- POUCHES ---
  { id: 501, name: 'Tactical Pouch', category: 'pouch', price: '₱499', originalPrice: '', tag: '' },
  { id: 502, name: 'Tech Organizer', category: 'pouch', price: '₱650', originalPrice: '₱900', tag: 'Must Have' },
  { id: 503, name: 'Cable Pouch Pro', category: 'pouch', price: '₱350', originalPrice: '₱500', tag: '' },
  { id: 504, name: 'Utility Kit', category: 'pouch', price: '₱700', originalPrice: '', tag: '' },
  { id: 505, name: 'Wash Bag', category: 'pouch', price: '₱550', originalPrice: '', tag: '' },
  { id: 506, name: 'Mini Pouch', category: 'pouch', price: '₱250', originalPrice: '', tag: '' },
  { id: 507, name: 'Hard Shell Case', category: 'pouch', price: '₱800', originalPrice: '₱1,200', tag: 'New' },
  { id: 508, name: 'Accessory Bag', category: 'pouch', price: '₱400', originalPrice: '', tag: '' },

  // --- WALLETS ---
  { id: 601, name: 'Tech Wallet', category: 'wallet', price: '₱850', originalPrice: '', tag: '' },
  { id: 602, name: 'Card Holder Pro', category: 'wallet', price: '₱450', originalPrice: '₱700', tag: 'New' },
  { id: 603, name: 'Bifold Shield', category: 'wallet', price: '₱900', originalPrice: '₱1,200', tag: '' },
  { id: 604, name: 'Zip Wallet', category: 'wallet', price: '₱750', originalPrice: '', tag: '' },
  { id: 605, name: 'Travel Wallet', category: 'wallet', price: '₱1,100', originalPrice: '', tag: '' },

  // --- TRAVEL ---
  { id: 701, name: 'Travel Duffel', category: 'travel', price: '₱3,200', originalPrice: '₱4,500', tag: 'Heavy Duty' },
  { id: 702, name: 'Gym Duffel Pro', category: 'travel', price: '₱2,400', originalPrice: '', tag: '' },
  { id: 703, name: 'Weekender Bag', category: 'travel', price: '₱3,500', originalPrice: '₱4,800', tag: 'Hot' },
  { id: 704, name: 'Carry-On Master', category: 'travel', price: '₱4,100', originalPrice: '', tag: '' },
  { id: 705, name: 'Sport Hauler', category: 'travel', price: '₱2,100', originalPrice: '', tag: '' },
  { id: 706, name: 'Expedition Bag', category: 'travel', price: '₱5,000', originalPrice: '₱6,500', tag: 'Exclusive' },
];

const INITIAL_SLIDES = [
    { id: 1, image: heroCity, title: "City Hunter", subtitle: "Series", desc: "Smart gear for smart students & professionals." },
    { id: 2, image: heroTough, title: "Tough Men", subtitle: "Series", desc: "Rugged durability meets modern tactical design." },
    { id: 3, image: heroLeads, title: "The Leads", subtitle: "Series", desc: "Premium aesthetics for the urban leader." }
];

const INITIAL_CATEGORIES = [
    { id: 'backpack', label: 'Backpacks', image: backpackImg },
    { id: 'sling', label: 'Slings', image: slingImg },
    { id: 'travel', label: 'Travel', image: duffleImg },
    { id: 'messenger', label: 'Messenger', image: messengerImg },
    { id: 'crossbody', label: 'Crossbody', image: crossbodyImg },
    { id: 'pouch', label: 'Pouches', image: pouchImg },
    { id: 'wallet', label: 'Wallets', image: walletImg },
];

const INITIAL_CAMPAIGNS = [
    { id: 1, img: styleImg },
    { id: 2, img: latestImg },
    { id: 3, img: travelImg }
];

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // --- MASTER STATES ---
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [slides, setSlides] = useState(INITIAL_SLIDES);
  const [categories, setCategories] = useState(INITIAL_CATEGORIES);
  const [campaigns, setCampaigns] = useState(INITIAL_CAMPAIGNS);

  // --- HANDLERS ---
  const handleAddProduct = (item) => setProducts([item, ...products]);
  const handleUpdateProduct = (item) => setProducts(products.map(p => p.id === item.id ? item : p));
  const handleDeleteProduct = (id) => setProducts(products.filter(p => p.id !== id));
  
  const handleUpdateSlide = (id, field, value) => {
    setSlides(slides.map(s => s.id === id ? { ...s, [field]: value } : s));
  };
  
  const handleUpdateCategory = (id, newImage) => {
    setCategories(categories.map(c => c.id === id ? { ...c, image: newImage } : c));
  };

  const handleUpdateCampaign = (id, newImage) => {
    setCampaigns(campaigns.map(c => c.id === id ? { ...c, img: newImage } : c));
  };

  // --- SLIDE HANDLERS
  const handleAddSlide = (newSlideData) => {
      const newSlide = {
        id: Date.now(),
        ...newSlideData // <--- This spreads the title, subtitle, desc, and image from the modal
      };
      setSlides([...slides, newSlide]);
    };
    
  const handleDeleteSlide = (id) => {
    // Prevent deleting the last slide so the site doesn't break
    if (slides.length <= 1) {
      alert("Cannot delete the last slide!");
      return;
    }
    setSlides(slides.filter(s => s.id !== id));
  };

  // --- NAV HANDLERS ---
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedProduct(null);
    if(tab !== 'catalogue') setSelectedCategory('all');
  };
  
  const navigateToCategory = (catId) => {
    setSelectedCategory(catId);
    setActiveTab('catalogue');
  };

  return (
    <div className="bg-white min-h-screen text-zinc-900 font-sans selection:bg-orange-600 selection:text-white flex flex-col">
      {activeTab !== 'admin' && (
        <>
          <SocialTopBar />
          <div className="sticky top-0 z-40"><Navbar activeTab={activeTab} setActiveTab={handleTabChange} /></div>
        </>
      )}
      
      <main className="flex-grow bg-black">
        {activeTab === 'home' && (
          <Home 
            setPage={handleTabChange} 
            setCategory={navigateToCategory} 
            slides={slides} 
            categories={categories}
            campaigns={campaigns}
          />
        )}
        
        {activeTab === 'catalogue' && (
          selectedProduct ? 
            <ItemDetail product={selectedProduct} onBack={() => setSelectedProduct(null)} /> : 
            <Catalogue onItemClick={setSelectedProduct} initialFilter={selectedCategory} products={products} />
        )}

        {activeTab === 'techwear' && <Techwear />}
        {activeTab === 'contact' && <Contact />}

        {activeTab === 'admin' && (
           <Admin 
              products={products}
              slides={slides}
              categories={categories}
              campaigns={campaigns}
              onAddProduct={handleAddProduct} 
              onUpdateProduct={handleUpdateProduct}
              onDeleteProduct={handleDeleteProduct}
              onAddSlide={handleAddSlide}
              onDeleteSlide={handleDeleteSlide}
              onUpdateSlide={handleUpdateSlide}
              onUpdateCategory={handleUpdateCategory}
              onUpdateCampaign={handleUpdateCampaign}
              onExit={() => setActiveTab('home')} 
           />
        )}
      </main>

      {activeTab !== 'admin' && <Footer setPage={handleTabChange} />}
    </div>
  );
}

export default App;