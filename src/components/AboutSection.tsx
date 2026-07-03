import React from 'react';
import { motion } from 'motion/react';
import { Award, Compass, History, Shield, Star, Users } from 'lucide-react';
import Logo from './Logo';

export default function AboutSection() {
  return (
    <div className="relative overflow-hidden py-16">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-96 h-96 gold-glow-radial opacity-45 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 gold-glow-radial-sm opacity-40 pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-mono block">Our Legacy & Purpose</span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-medium tracking-wide">
            Crafting Purity <span className="font-semibold italic gold-shine-text">Since 2021</span>
          </h1>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-2" />
          <p className="text-gray-400 text-sm leading-relaxed">
            Satyam Jewellery is built on a foundation of absolute purity, exceptional craftsmanship, and personal hospitality. Get to know the story behind our brand.
          </p>
        </div>

        {/* Story & History Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-gold">
              <History size={18} />
              <span className="text-xs uppercase tracking-widest font-mono font-semibold">Our Showroom Journey</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-medium">A Legacy Founded on Trust</h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Founded in 2021 by visionary founder Krishna Kumari alongside founding member and managing owner Avinash Nandam in Bollaram, Hyderabad, Satyam Jewellery was born with a singular mission: to provide certified, high-end gold and silver jewelry to our local community with absolute rate transparency. In an industry where trust is paramount, we stood out by introducing rigorous verification, 100% hallmarked ornaments, and personalized customer care.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              We understand that jewelry is not just an investment; it is a precious heirloom passed down through generations. That is why our karigars put their heart and soul into every hand-carved design, ensuring that each piece carries a story of luxury, dedication, and beauty.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute -inset-2 rounded-xl border border-gold/15 opacity-40 pointer-events-none" />
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrjFwdM1Mcql5myMsCmeUejzGF_8cbEUGQsg7bchk1wg&s=10" 
                alt="Luxury golden showroom design - Satyam Jewellery" 
                className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Mission & Vision Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-xl glass-panel bg-gradient-to-br from-gold-deep/20 via-charcoal/20 to-black border border-gold/15"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 text-gold mb-6 border border-gold/20">
              <Compass size={22} />
            </div>
            <h3 className="font-serif text-white font-semibold text-xl tracking-wider mb-3">Our Mission</h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              To design and deliver exceptional gold, silver, and custom jewelry that reflects the highest standards of quality, certified authenticity, and exquisite artistry. We strive to make luxury jewelry accessible while sustaining a transparent and hospitable buying experience.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-xl glass-panel bg-gradient-to-br from-gold-deep/20 via-charcoal/20 to-black border border-gold/15"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 text-gold mb-6 border border-gold/20">
              <Star size={22} />
            </div>
            <h3 className="font-serif text-white font-semibold text-xl tracking-wider mb-3">Our Vision</h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              To be the most trusted and preferred gold and silver jewelry showroom in Bollaram and the greater Hyderabad region, renowned for our customer-centricity, creative custom wedding craftsmanship, and unwavering integrity in jewelry valuation.
            </p>
          </motion.div>
        </div>

        {/* Leadership & Heritage (Founder & Managing Owner) */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-mono block">Leadership & Heritage</span>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-medium">Our Founders & Management</h2>
            <div className="w-12 h-[1px] bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Krishna Kumari */}
            <div className="p-8 rounded-2xl glass-panel border border-gold/15 bg-black/60 flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="w-24 h-24 rounded-full border border-gold/30 p-1 flex-shrink-0 flex items-center justify-center bg-gold-deep/10">
                <div className="w-full h-full rounded-full bg-charcoal/80 flex items-center justify-center">
                  <span className="font-serif text-3xl text-gold-light font-medium">KK</span>
                </div>
              </div>
              <div className="space-y-3 text-center sm:text-left">
                <div>
                  <h3 className="font-serif text-white text-lg font-bold">Krishna Kumari</h3>
                  <span className="text-gold text-xs font-mono uppercase tracking-widest font-semibold block">Founder</span>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  As the visionary founder of Satyam Jewellery, Krishna Kumari established the core philosophy of absolute honesty, pure quality, and exquisite craftsmanship. Her passion for traditional Indian gold and silver artistry continues to inspire our high brand standards.
                </p>
              </div>
            </div>

            {/* Avinash Nandam */}
            <div className="p-8 rounded-2xl glass-panel border border-gold/15 bg-black/60 flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="w-24 h-24 rounded-full border border-gold/30 p-1 flex-shrink-0 flex items-center justify-center bg-gold-deep/10">
                <div className="w-full h-full rounded-full bg-charcoal/80 flex items-center justify-center">
                  <span className="font-serif text-3xl text-gold-light font-medium">AN</span>
                </div>
              </div>
              <div className="space-y-3 text-center sm:text-left">
                <div>
                  <h3 className="font-serif text-white text-lg font-bold">Avinash Nandam</h3>
                  <span className="text-gold text-xs font-mono uppercase tracking-widest font-semibold block">Founding Member & Managing Owner</span>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Working hand-in-hand with the founder from day one, Avinash Nandam oversees showroom operations, bespoke wedding design consultations, and ensures that every ornament conforms strictly to standard-certified excellence.
                </p>
              </div>
            </div>
          </div>
          
          {/* Unified Statement / Message */}
          <div className="p-8 rounded-2xl glass-panel border border-gold/15 bg-black/40 max-w-4xl mx-auto text-center space-y-4">
            <h3 className="font-serif text-white text-lg font-medium tracking-wide">Our Promise of Purity</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed italic max-w-3xl mx-auto">
              "When we established Satyam Jewellery in 2021, our primary goal was to build more than a business. We wanted to establish an absolute promise of quality. Whether you are shopping for a small silver gift, purchasing investment-grade 24K gold, or preparing bespoke wedding jewelry, our showroom welcomes you with warmth and guarantees standard-certified excellence."
            </p>
            <p className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">
              Krishna Kumari (Founder) & Avinash Nandam (Managing Owner)
            </p>
          </div>
        </div>

        {/* Core Values / Why Customers Trust Us */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Shield size={24} />,
              title: 'Guaranteed Purity',
              desc: 'BIS 916 Hallmark certified gold ensuring exact metal content values.'
            },
            {
              icon: <Award size={24} />,
              title: 'Exquisite Artistry',
              desc: 'Handcrafted styles by seasoned karigars of traditional legacy.'
            },
            {
              icon: <Users size={24} />,
              title: 'Transparent Pricing',
              desc: 'Zero hidden calculations. Exact item weights and live transparent rates.'
            },
            {
              icon: <Star size={24} />,
              title: 'Bespoke Experience',
              desc: 'Specialized wedding consultations and customized jewelry designs.'
            }
          ].map((val, idx) => (
            <div key={idx} className="p-6 rounded-lg bg-charcoal/20 border border-gold/5 hover:border-gold/20 transition-all duration-300">
              <div className="text-gold mb-4">{val.icon}</div>
              <h4 className="font-serif text-white font-semibold text-sm tracking-wide mb-2">{val.title}</h4>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
