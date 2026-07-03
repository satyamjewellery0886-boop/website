import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Award, 
  Star, 
  MapPin, 
  Phone, 
  Compass, 
  MessageSquare,
  Clock
} from 'lucide-react';
import Particles from './Particles';
import Logo from './Logo';

interface HomeSectionProps {
  setRoute: (route: string) => void;
  goldPrice22k: number;
  silverPricePerKg: number;
}

export default function HomeSection({ setRoute, goldPrice22k, silverPricePerKg }: HomeSectionProps) {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const featuredCollections = [
    {
      id: 'col-1',
      title: 'Royal Bridal Collections',
      desc: 'Ornate traditional chokers and necklace sets designed with exquisite craftsmanship for your special day.',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop',
      route: 'gallery'
    },
    {
      id: 'col-2',
      title: 'Timeless Gold Ornaments',
      desc: 'Finest 22K gold rings, traditional bangles, and solid gold chains that symbolize absolute purity.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp8MNsXDCE8b3owenL21ffeM9Kveh0DN6vtROd_WY04g&s=10',
      route: 'gallery'
    },
    {
      id: 'col-3',
      title: 'Pure Silver Masterpieces',
      desc: 'Splendid silver dinner sets, intricate silver chains, anklets, and divine pooja ornaments.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmwIAVMSrp8QBxNWAcPZ7kJgKz11cTCSJZ9m-f_d2MUg&s=10',
      route: 'gallery'
    }
  ];

  const googleReviews = [
    {
      id: 1,
      author: "Venkata Rama Rao",
      rating: 5,
      comment: "Excellent collections at Satyam Jewellery, Bollaram. The gold purity is authentic and the designs are extremely beautiful. Highly recommend Avinash garu for custom ornaments.",
      time: "2 weeks ago"
    },
    {
      id: 2,
      author: "Sneha Reddy",
      rating: 5,
      comment: "Best jewellery showroom near Venkat Reddy Nagar. They have perfect 18K and 22K designs. Customer satisfaction is their highest priority, very transparent rates.",
      time: "1 month ago"
    },
    {
      id: 3,
      author: "Anitha Krishna",
      rating: 5,
      comment: "They made customized bridal jewellery for my daughter's wedding. The final outcome is mindblowing, even better than big showroom brands. Very reliable and supportive staff.",
      time: "3 months ago"
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* 1. LUXURY HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Particle Effect Backdrop */}
        <Particles />
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 gold-glow-radial opacity-60 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/10 w-120 h-120 gold-glow-radial opacity-40 pointer-events-none" />
        
        <div className="max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-7 text-left space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/25 text-gold-light text-xs font-mono uppercase tracking-[0.2em]">
              <Sparkles size={14} className="text-gold animate-pulse" />
              ESTD 2021 • Pure Luxury & Trust
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-white font-medium">
              Where Pure <span className="gold-shine-text font-semibold italic">Gold</span> Meets <br />
              Timeless <span className="text-gold-light font-semibold">Artistry</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
              Welcome to <span className="text-gold-light font-medium">Satyam Jewellery Showroom</span>, managed by <span className="text-white font-semibold">Avinash Nandam</span>. Discover our legendary, handcrafted 22K and 18K gold collections, exquisite bridal sets, and high-purity silver ornaments tailored for the modern connoisseur.
            </p>

            {/* Quick Live Prices Banner */}
            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl glass-panel border border-gold/15 bg-black/60 max-w-md">
              <div>
                <span className="text-xs uppercase tracking-widest text-gray-400 block font-mono">Today's Gold Rate</span>
                <span className="text-xl font-serif text-gold-light font-bold mt-1 block">
                  ₹{goldPrice22k.toLocaleString('en-IN')} <span className="text-xs font-sans text-gray-400 font-normal">/ 10g</span>
                </span>
                <span className="text-[10px] font-mono text-emerald-400">22K BIS Hallmarked</span>
              </div>
              <div className="border-l border-gold/10 pl-4">
                <span className="text-xs uppercase tracking-widest text-gray-400 block font-mono">Today's Silver Rate</span>
                <span className="text-xl font-serif text-gold-light font-bold mt-1 block">
                  ₹{silverPricePerKg.toLocaleString('en-IN')} <span className="text-xs font-sans text-gray-400 font-normal">/ 1kg</span>
                </span>
                <span className="text-[10px] font-mono text-amber-500">99.9% Pure Silver</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => setRoute('gallery')}
                className="px-8 py-4 text-sm font-serif font-bold uppercase tracking-widest text-black bg-gradient-to-r from-gold-light via-gold to-gold-dark rounded shadow-[0_4px_20px_rgba(212,175,55,0.4)] hover:brightness-110 hover:scale-[1.03] transition-all duration-300 flex items-center gap-2"
              >
                Explore Showroom
                <ArrowRight size={16} />
              </button>

              <button 
                onClick={() => setRoute('rates')}
                className="px-8 py-4 text-sm font-serif font-bold uppercase tracking-widest text-white border border-gold/40 hover:border-gold hover:bg-gold/5 bg-black/40 backdrop-blur-sm rounded transition-all duration-300 flex items-center gap-2"
              >
                <Compass size={16} className="text-gold animate-spin-slow" />
                Live Gold Prices
              </button>
            </div>
          </motion.div>

          {/* Hero Right Image Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Elegant outer layout frame */}
            <div className="absolute -inset-2 rounded-2xl border border-gold/20 opacity-30 pointer-events-none" />
            
            <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/5] max-w-sm mx-auto group">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent z-10" />
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqQntbCOydTqrQMOfE9QqqERK5RTzPqtTdiQOhG3IjDQ&s=10" 
                alt="Luxury Indian Bridal Gold Jewelry Set - Satyam Jewellery Showroom" 
                className="w-full h-full object-cover transition-transform duration-7000 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              
              {/* Floating micro info card inside hero photo */}
              <div className="absolute bottom-6 left-6 right-6 z-20 p-4 rounded-lg glass-panel bg-black/85 border border-gold/20 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-white text-sm font-semibold tracking-wide">Royal Antique Necklace</h4>
                  <p className="text-[10px] text-gray-400 font-mono">22 Carat pure yellow gold</p>
                </div>
                <button 
                  onClick={() => setRoute('gallery')}
                  className="p-2 rounded-full bg-gold/15 text-gold-light hover:bg-gold hover:text-black transition-colors"
                >
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. CHOOSE SATYAM - CUSTOMER TRUST BANNER */}
      <section className="py-20 bg-charcoal/40 border-y border-gold/10 relative z-10">
        <div className="max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <motion.div 
              whileHover={{ y: -6 }}
              className="p-8 rounded-xl glass-panel text-center space-y-4"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 text-gold border border-gold/20">
                <ShieldCheck size={28} />
              </div>
              <h3 className="font-serif text-white font-semibold text-lg tracking-wider">100% BIS Hallmarked</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Every ornament at Satyam Jewellery is rigorously certified with full BIS Hallmarking, guaranteeing absolute transparency and gold purity.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -6 }}
              className="p-8 rounded-xl glass-panel text-center space-y-4"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 text-gold border border-gold/20">
                <Sparkles size={28} />
              </div>
              <h3 className="font-serif text-white font-semibold text-lg tracking-wider">Custom Jewelry Tailoring</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We craft unique gold ornaments based on your dream designs. Collaborate with our master karigars for flawless bespoke wedding jewelry.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -6 }}
              className="p-8 rounded-xl glass-panel text-center space-y-4"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 text-gold border border-gold/20">
                <Award size={28} />
              </div>
              <h3 className="font-serif text-white font-semibold text-lg tracking-wider">Legacy of Transparency</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Estd in 2021, under owner Avinash Nandam, Satyam Jewellery prioritizes customer trust with zero hidden costs and exact billing.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. LATEST EXQUISITE COLLECTIONS */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-mono block">Signature Masterpieces</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-wide leading-tight">
              Curated <span className="font-semibold italic gold-shine-text">Collections</span> of Grandeur
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-2" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Explore our hand-selected signature collections, reflecting centuries-old Indian goldsmith traditions infused with modern sleek luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCollections.map((col) => (
              <motion.div
                key={col.id}
                whileHover={{ y: -8 }}
                className="group rounded-xl overflow-hidden glass-panel border border-gold/15 bg-black/40 shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/0 transition-colors duration-300 z-10" />
                  <img 
                    src={col.image} 
                    alt={`${col.title} - Satyam Jewellery, Bollaram`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-black/75 px-3 py-1 border border-gold/30 rounded text-[10px] font-mono uppercase text-gold-light tracking-wider">
                    Estd 2021
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="font-serif text-white font-bold text-xl tracking-wide group-hover:text-gold-light transition-colors">
                    {col.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {col.desc}
                  </p>
                  <button
                    onClick={() => setRoute(col.route)}
                    className="text-xs font-mono uppercase tracking-widest text-gold hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    View Selection
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. OWNER MESSAGE (AVINASH NANDAM) */}
      <section className="py-24 bg-gradient-to-b from-charcoal/30 to-black border-t border-gold/10 relative z-10">
        <div className="max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Owner Photo placeholder/luxury setup */}
            {/* Left side: Founders & Leadership Info */}
            <div className="lg:col-span-5 space-y-4 relative">
              <div className="absolute -inset-4 rounded-xl border border-gold/5 opacity-25 pointer-events-none" />
              
              {/* Krishna Kumari */}
              <div className="relative rounded-xl p-6 glass-panel border border-gold/15 shadow-xl bg-gradient-to-r from-black/80 via-charcoal/40 to-black/80 flex items-center gap-4 hover:border-gold/30 transition-colors duration-300">
                <div className="w-16 h-16 rounded-full border border-gold/30 p-1 flex-shrink-0 flex items-center justify-center bg-gold-deep/10">
                  <div className="w-full h-full rounded-full bg-charcoal/80 flex items-center justify-center">
                    <span className="font-serif text-2xl text-gold-light font-medium">KK</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-white text-lg font-bold">Krishna Kumari</h3>
                  <p className="text-gold text-xs font-mono uppercase tracking-widest font-semibold">Founder</p>
                  <p className="text-xs text-gray-400 font-sans mt-1">Visionary behind Satyam's legacy and trust promise</p>
                </div>
              </div>

              {/* Avinash Nandam */}
              <div className="relative rounded-xl p-6 glass-panel border border-gold/15 shadow-xl bg-gradient-to-r from-black/80 via-charcoal/40 to-black/80 flex items-center gap-4 hover:border-gold/30 transition-colors duration-300">
                <div className="w-16 h-16 rounded-full border border-gold/30 p-1 flex-shrink-0 flex items-center justify-center bg-gold-deep/10">
                  <div className="w-full h-full rounded-full bg-charcoal/80 flex items-center justify-center">
                    <span className="font-serif text-2xl text-gold-light font-medium">AN</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-white text-lg font-bold">Avinash Nandam</h3>
                  <p className="text-gold text-xs font-mono uppercase tracking-widest font-semibold">Founding Member & Managing Owner</p>
                  <p className="text-xs text-gray-400 font-sans mt-1">Oversees bespoke design curation & showroom operations</p>
                </div>
              </div>

              <div className="text-center lg:text-left pt-2">
                <p className="text-xs text-gray-500 font-mono tracking-wider">Satyam Jewellery Showroom • Bollaram, Hyderabad</p>
              </div>
            </div>

            {/* Right side: Legacy quote */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs uppercase tracking-[0.25em] text-gold font-mono block">Legacy of Pure Goldsmithing</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-wide">
                Our Guarantee is Your Absolute <span className="font-semibold italic gold-shine-text">Trust</span>
              </h2>
              <div className="w-16 h-[2px] bg-gold" />
              
              <blockquote className="space-y-4">
                <p className="text-gray-300 font-serif text-lg leading-relaxed italic">
                  "When we established Satyam Jewellery in 2021, our primary goal was to build more than a business. We wanted to establish an absolute promise of quality. Whether you are shopping for a small silver gift, purchasing investment-grade 24K gold, or preparing bespoke wedding jewelry, our showroom welcomes you with warmth and guarantees standard-certified excellence."
                </p>
                <cite className="block text-sm font-sans font-medium text-white not-italic">
                  — Krishna Kumari (Founder) & Avinash Nandam (Managing Owner)
                </cite>
              </blockquote>

              <div className="pt-6 grid grid-cols-2 gap-6 max-w-md border-t border-gold/10">
                <div>
                  <span className="text-2xl font-serif text-white font-bold block">100%</span>
                  <span className="text-xs text-gray-400 font-sans">Hallmarked Guarantee</span>
                </div>
                <div>
                  <span className="text-2xl font-serif text-white font-bold block">Since 2021</span>
                  <span className="text-xs text-gray-400 font-sans">Serving Hyderabad Families</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. GOOGLE REVIEWS SECTION */}
      <section className="py-24 bg-charcoal/20 border-y border-gold/10 relative z-10">
        <div className="max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-mono block">Client Testimonials</span>
            <h2 className="font-serif text-3xl text-white tracking-wide">
              What Our <span className="font-semibold italic gold-shine-text">Customers</span> Say
            </h2>
            <div className="flex justify-center gap-1 text-amber-400 mt-2">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <span className="text-xs text-gray-300 font-mono ml-2">5.0 Star Rating (Google Reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {googleReviews.map((rev) => (
              <div 
                key={rev.id}
                className="p-8 rounded-xl glass-panel bg-black/50 border border-gold/10 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-sans font-semibold text-white tracking-wider text-sm">{rev.author}</span>
                    <span className="text-xs text-gray-500 font-mono">{rev.time}</span>
                  </div>
                  <div className="flex gap-0.5 text-amber-400">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed italic font-sans">
                    "{rev.comment}"
                  </p>
                </div>
                
                <div className="pt-4 border-t border-gold/10 mt-6 flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-blue-600 text-[8px] font-bold flex items-center justify-center text-white font-mono">G</span>
                  <span className="text-[10px] uppercase font-mono text-gray-500">Verified Google Review</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. LOCATION PREVIEW & QUICK CONTACT */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel border border-gold/20 rounded-2xl overflow-hidden bg-black/75 grid grid-cols-1 lg:grid-cols-12 shadow-2xl">
            
            {/* Quick Details left side */}
            <div className="lg:col-span-5 p-8 sm:p-12 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.25em] text-gold font-mono block">Visit Showroom</span>
                <h3 className="font-serif text-white text-2xl sm:text-3xl font-medium">Satyam Jewellery Showroom</h3>
                <div className="w-12 h-[2px] bg-gold" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Located conveniently in the Bollaram Industrial Area, Hyderabad. Experience personalized hospitality, live rate transparency, and customized jewelry consults.
                </p>
              </div>

              <div className="space-y-4 py-4 border-y border-gold/10 text-sm text-gray-400">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                  <span>
                    S.No. 02, KJR Complex, Hanuman Temple Road,<br />
                    Venkat Reddy Nagar, Bollaram Industrial Area,<br />
                    Bollaram, Hyderabad, Telangana – 502325
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-gold shrink-0" />
                  <span>Open Daily: 10:30 AM – 8:30 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-gold shrink-0" />
                  <span>+91 80190 01254, +91 98498 29216</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://maps.app.goo.gl/3YNcnMRh2JJHpfqu6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded text-xs font-mono uppercase tracking-widest text-white text-center font-bold flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <MapPin size={14} />
                  Get Directions
                </a>
                <a 
                  href="tel:+918019001254"
                  className="px-6 py-3 bg-gradient-to-r from-gold-light to-gold text-black rounded text-xs font-mono uppercase tracking-widest text-center font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:brightness-110"
                >
                  <Phone size={14} />
                  Call Now
                </a>
              </div>
            </div>

            {/* Quick iframe map map-preview right side */}
            <div className="lg:col-span-7 aspect-[16/9] lg:aspect-auto min-h-[300px] relative">
              <iframe 
                src="https://maps.google.com/maps?q=Satyam%20Jewellers,%20KJR%20Complex,%20Hanuman%20Temple%20Road,%20Bollaram,%20Hyderabad,%20Telangana%20502325&t=&z=16&ie=UTF8&iwloc=B&output=embed" 
                className="absolute inset-0 w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 transition-all duration-500"
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Satyam Jewellery Google Maps Location"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
