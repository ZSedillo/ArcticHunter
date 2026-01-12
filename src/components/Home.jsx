import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import VoucherSection from './VoucherSection'; 
import CategoryGrid from './CategoryGrid';
import PromoCarousel from './PromoCarousel'; 

const Home = ({ setPage, setCategory, slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      // Check if slides exist to prevent crash if empty
      if (slides && slides.length > 0) {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [slides]);

  const nextSlide = () => {
    if (slides && slides.length > 0) {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }
  };

  const prevSlide = () => {
    if (slides && slides.length > 0) {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  };

  // Safe check if slides are missing
  if (!slides || slides.length === 0) {
    return <div className="bg-black text-white p-20 text-center">Loading Slides...</div>;
  }

  return (
    <div className="animate-fade-in bg-black pb-0">
      
      {/* 1. HERO SLIDER */}
      <div className="relative w-full h-[60vh] md:h-screen bg-zinc-900 overflow-hidden group">
        
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          </div>
        ))}

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col justify-end pb-20 px-6 md:px-20 z-10">
          <h2 className="text-orange-600 font-bold tracking-[0.3em] uppercase mb-2 animate-slide-up">
            Official Arctic Hunter
          </h2>
          
          <div className="overflow-hidden mb-6">
            <h1 className="text-5xl md:text-8xl text-white font-black uppercase italic tracking-tighter leading-none drop-shadow-lg transition-transform duration-500">
              {slides[currentSlide].title} <br />
              <span className="text-gray-400">{slides[currentSlide].subtitle}</span>
            </h1>
          </div>

          <p className="text-gray-300 text-lg max-w-xl mb-8 border-l-4 border-orange-600 pl-4 bg-black/30 backdrop-blur-sm p-4 rounded-r-lg">
            {slides[currentSlide].desc}
          </p>

          <div className="flex gap-4">
            <a 
              href="https://www.lazada.com.ph/shop/my-arctic-hunter"
              target="_blank" 
              rel="noreferrer"
              className="bg-orange-600 text-white px-8 py-3 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center gap-2"
            >
              Shop Series <ArrowRight className="w-4 h-4" />
            </a>
            <button 
              onClick={() => setPage('catalogue')}
              className="border border-white text-white px-8 py-3 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              View Catalogue
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-8 right-8 flex gap-2 z-20">
          <button onClick={prevSlide} className="p-3 border border-white/20 text-white hover:bg-orange-600 transition-colors">
            <ChevronLeft />
          </button>
          <button onClick={nextSlide} className="p-3 border border-white/20 text-white hover:bg-orange-600 transition-colors">
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* 2. VOUCHERS */}
      {/* <VoucherSection /> */}

      {/* 3. CATEGORY GRID */}
      <CategoryGrid setPage={setPage} setCategory={setCategory} />

      {/* 4. PROMO CAROUSEL */}
      <PromoCarousel setPage={setPage} />

      {/* 5. WORLD CLASS FACILITY (Text Section) */}
      <section className="bg-zinc-900 py-24 px-6 border-t border-white/5 relative overflow-hidden">
        {/* Background Texture Effect */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-8">
            World Class <span className="text-orange-600">Facility</span>
          </h2>
          
          <div className="space-y-8 text-gray-400 leading-relaxed font-light text-lg md:text-xl">
            <p>
              In order to provide you with a bag that has <span className="text-white font-bold">maximum utility</span> at the most incredibly reasonable cost, a huge amount of attention goes into the detail of all of the Arctic Hunter range of products.
            </p>
            
            <div className="h-[1px] w-20 bg-orange-600 mx-auto"></div>

            <p>
              The first focus is on the <span className="text-white font-bold">practical utility</span> of each bag. This is followed by the judicious selection of material that is precisely focused on balancing cost and versatility.
            </p>

            <p>
              The final stage is combining our array of <span className="text-white font-bold">quality finishes</span>, all of which ensure that each of our Arctic Hunter community comfortably and stylishly displays their <span className="italic text-orange-500">"badge of pride"</span>.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;