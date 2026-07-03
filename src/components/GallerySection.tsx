import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ZoomIn, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GalleryItem } from '../types';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>('all'); // 'all', 'gold', 'silver', 'bridal', 'showroom'
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'gal-mangalsutra',
      title: 'Divine Shubh Mangalsutra',
      description: 'Handcrafted 22K BIS-hallmarked yellow gold mangalsutra adorned with sacred black beads and a traditional centerpiece pendant.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl83eDw_nJWU20nOqHyM0WAkkvQjRcKn3n00r98_QwRA&s=10',
      type: 'image',
      category: 'gold'
    },
    {
      id: 'gal-rings',
      title: 'Gold Rings',
      description: 'Finely sculpted 22K gold rings featuring modern structural bands and traditional floral engravings.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjL0lttM68A2ofufwAH3tiTtyHvbgt8FkcKiH-783lIg&s=10',
      type: 'image',
      category: 'gold'
    },
    {
      id: 'gal-men-chains',
      title: "Men's Royal Gold Chains",
      description: 'Solid, heavy-link 22K gold chains for men, designed with timeless luxury and exceptional tensile strength.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUZ6DFoE905sXBV4keTDwaQmhXSlo3ounTbzrwE_VtEw&s=10',
      type: 'image',
      category: 'gold'
    },
    {
      id: 'gal-bracelet-kadam',
      title: 'Royal Gold Bracelet men',
      description: 'Substantial 22K gold bracelets .',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6KUqCpLwvUpQGaIdCLdq1XTCB23rY0tZ-TRcQIidd6w&s',
      type: 'image',
      category: 'gold'
    },
    {
      id: 'gal-women-necklace',
      title: "Maharani Women's Gold Necklace",
      description: 'Breathtaking 24K traditional gold necklace with layered floral details and hand-polished precious drop highlights.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdsML98d3caCAlSCOvExdvzrHWHEFzXN7ly6dhRxXUAA&s=10',
      type: 'image',
      category: 'gold'
    },
    {
      id: 'gal-silver-plate',
      title: 'Divine Silver Pooja Plate',
      description: 'Heavyweight 99.9% pure silver plate featuring detailed traditional relief borders, perfect for wedding ceremonies.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1SQptjUvHg33EBIwMzeU4Hzsu65UweChdlyW2zTPGw&s=10',
      type: 'image',
      category: 'silver'
    },
    {
      id: 'gal-diyas',
      title: 'Pure Silver Pooja Diyas',
      description: 'Crafted out of pure 99.9% silver, these elegant oil lamps radiate divine positive energy into your prayer sanctuary.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBWRyx0nLdiGO3qz3Oy41uMlj1vbY3OnDua0rMJOD_MA&s=10',
      type: 'image',
      category: 'silver'
    },
    {
      id: 'gal-god-statue',
      title: 'Sterling Silver Ganesha Statue',
      description: 'Highly detailed, hand-carved pure silver idol of Lord Ganesha, ideal for household blessings and custom luxury gifting.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE0fnVDMworwLpLltZ8z3qWKE-mptK8gUqM-PvB9qhIg&s=10',
      type: 'image',
      category: 'silver'
    },
    {
      id: 'gal-diamond-ring',
      title: 'Diamond Ring',
      description: 'Stunning 18K white gold band topped with a gorgeous round-brilliant solitaire diamond.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrc18S4Z4uFpMj2jgDlYDHZ-zeoCd5_44t5g9jpfDQQA&s=10',
      type: 'image',
      category: 'diamond'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'gold', label: 'Gold Ornaments' },
    { id: 'silver', label: 'Pure Silver Items' },
    { id: 'diamond', label: 'Diamond Exclusives' }
  ];

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : (prev ?? 0) - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : (prev ?? 0) + 1));
    }
  };

  return (
    <div className="relative py-16">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 gold-glow-radial opacity-25 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 gold-glow-radial-sm opacity-20 pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-mono block">Visual Showroom</span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-medium tracking-wide">
            Exquisite Showroom <span className="font-semibold italic gold-shine-text">Gallery</span>
          </h1>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-2" />
          <p className="text-gray-400 text-sm leading-relaxed">
            Take an immersive visual tour through our finest handcrafted masterpieces and premium Bollaram showroom layout. Click any piece to inspect fine facets and carvings.
          </p>
        </div>

        {/* Categories Tab bar */}
        <div className="flex flex-wrap justify-center gap-2 pb-6 border-b border-gold/10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); }}
              className={`px-5 py-2.5 rounded text-xs uppercase tracking-widest font-mono font-medium border transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-gold-light via-gold to-gold-dark text-black border-transparent font-bold'
                  : 'bg-black/40 border-gold/15 text-gray-400 hover:border-gold/40 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Catalog Grid (Masonry style layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightboxIndex(index)}
                className="group relative rounded-xl overflow-hidden glass-panel border border-gold/10 bg-black/40 aspect-[4/5] cursor-zoom-in shadow-md"
              >
                {/* Image */}
                <img 
                  src={item.imageUrl} 
                  alt={`${item.title} - Satyam Jewellery`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Cover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350 z-10 flex flex-col justify-end p-5 space-y-2" />

                {/* Floating Indicators */}
                <div className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/85 border border-gold/30 text-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow">
                  {item.type === 'video' ? <Play size={14} fill="currentColor" /> : <ZoomIn size={14} />}
                </div>

                {/* Content Overlay details */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-20 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 space-y-1">
                  <span className="text-[9px] font-mono uppercase text-gold-light tracking-widest block">
                    {item.category} Spec
                  </span>
                  <h3 className="font-serif text-white font-bold text-sm tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-gray-450 text-[11px] leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Exquisite Lightbox modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center p-4 sm:p-8"
            >
              <button 
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 text-white hover:text-gold z-55 bg-black/50 p-2.5 border border-white/10 rounded-full"
                aria-label="Close Lightbox"
              >
                <X size={24} />
              </button>

              {/* Navigation Left */}
              <button 
                onClick={handlePrev}
                className="absolute left-6 text-white hover:text-gold z-55 bg-black/50 p-3 border border-white/10 rounded-full"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Centered Image with Slide Animation */}
              <div 
                className="max-w-4xl w-full max-h-[85vh] flex flex-col sm:flex-row rounded-xl overflow-hidden glass-panel border border-gold/25 bg-black z-50 shadow-2xl"
                onClick={(e) => e.stopPropagation()} // block auto-close when clicking container
              >
                {/* Photo portion */}
                <div className="sm:w-2/3 bg-black flex items-center justify-center relative aspect-video sm:aspect-auto">
                  <img 
                    src={filteredItems[lightboxIndex].imageUrl} 
                    alt={filteredItems[lightboxIndex].title}
                    className="w-full h-full object-contain max-h-[60vh] sm:max-h-[80vh]"
                    referrerPolicy="no-referrer"
                  />
                  {filteredItems[lightboxIndex].type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none">
                      <div className="w-16 h-16 rounded-full border border-gold bg-black/85 flex items-center justify-center text-gold-light animate-pulse">
                        <Play size={28} fill="currentColor" className="ml-1" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Detail text portion */}
                <div className="sm:w-1/3 p-6 sm:p-8 flex flex-col justify-between bg-luxury-black border-t sm:border-t-0 sm:border-l border-gold/15 space-y-6">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-gold/10 border border-gold/20 text-[9px] font-mono text-gold-light uppercase tracking-widest font-semibold">
                      <Sparkles size={10} className="text-gold animate-spin-slow" />
                      Satyam Showcase Spec
                    </div>
                    
                    <h3 className="font-serif text-white font-bold text-lg sm:text-xl tracking-wide leading-tight">
                      {filteredItems[lightboxIndex].title}
                    </h3>
                    
                    <div className="w-12 h-[1px] bg-gold/40" />
                    
                    <p className="text-gray-450 text-xs sm:text-sm leading-relaxed">
                      {filteredItems[lightboxIndex].description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gold/10 text-xs text-gray-500 font-sans space-y-3">
                    <p>Category: <span className="text-white uppercase font-mono font-medium">{filteredItems[lightboxIndex].category}</span></p>
                    <p>Estd: <span className="text-white font-medium">Since 2021</span></p>
                    
                    <a
                      href={`https://wa.me/918019001254?text=Hello%20Satyam%20Jewellery%2C%20I%20saw%20your%20masterpiece%20%22${encodeURIComponent(filteredItems[lightboxIndex].title)}%22%20on%20your%20website%20gallery.%20Please%20let%20me%20know%20how%20I%20can%20inquire%20about%20similar%20custom%20designs!`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full mt-4 py-3 bg-gradient-to-r from-gold-light via-gold to-gold-dark text-black font-mono font-bold text-[10px] uppercase tracking-widest text-center rounded block shadow hover:brightness-110"
                    >
                      Inquire Custom Order
                    </a>
                  </div>
                </div>

              </div>

              {/* Navigation Right */}
              <button 
                onClick={handleNext}
                className="absolute right-6 text-white hover:text-gold z-55 bg-black/50 p-3 border border-white/10 rounded-full"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
