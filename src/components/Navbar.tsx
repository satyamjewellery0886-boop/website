import React, { useState } from 'react';
import { Menu, X, Phone, TrendingUp, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

interface NavbarProps {
  currentRoute: string;
  setRoute: (route: string) => void;
}

export default function Navbar({ currentRoute, setRoute }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'rates', label: 'Live Rates', icon: <TrendingUp size={14} className="text-gold animate-pulse mr-1 inline" /> },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    setRoute(id);
    setIsOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full glass-panel border-b border-gold/15 backdrop-blur-xl">
        <div className="max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Brand */}
            <div 
              className="flex items-center cursor-pointer group"
              onClick={() => handleNavClick('home')}
            >
              <Logo size="sm" showText={false} />
              <div className="ml-3">
                <span 
                  className="font-serif text-lg sm:text-xl uppercase tracking-[0.2em] bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent font-semibold block leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Satyam
                </span>
                <span className="text-[0.6rem] tracking-[0.35em] text-gray-400 font-mono block">
                  JEWELLERY
                </span>
              </div>
            </div>

            {/* Desktop Nav Items */}
            <nav className="hidden md:flex space-x-1 lg:space-x-4 items-center">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3 py-2 text-xs lg:text-sm font-sans tracking-[0.1em] uppercase font-medium transition-colors duration-300 rounded ${
                    currentRoute === item.id
                      ? 'text-white font-semibold'
                      : 'text-gray-350 hover:text-gold'
                  }`}
                >
                  {item.icon}
                  {item.label}
                  {currentRoute === item.id && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-gold-light via-gold to-gold-dark"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}

              {/* Live Gold Rate Speed CTA */}
              <button
                onClick={() => handleNavClick('rates')}
                className="ml-4 px-4 py-2 text-xs font-mono uppercase tracking-wider text-black bg-gradient-to-r from-gold-light via-gold to-gold-dark rounded font-semibold flex items-center gap-1.5 hover:brightness-110 shadow-[0_2px_10px_rgba(212,175,55,0.25)] transition-all duration-300 hover:scale-[1.02]"
              >
                <Compass size={14} className="animate-spin-slow" />
                Live Rates
              </button>
            </nav>

            {/* Hamburger Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
                className="text-gray-300 hover:text-gold focus:outline-none p-2"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-45"
            />
            {/* Sidebar drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-luxury-black border-l border-gold/15 shadow-2xl z-50 p-6 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-gold/10">
                <div className="flex items-center">
                  <Logo size="sm" showText={false} />
                  <div className="ml-3">
                    <span className="font-serif text-lg uppercase tracking-wider text-gold-light">
                      Satyam
                    </span>
                    <span className="text-[0.6rem] tracking-[0.3em] text-gray-400 block font-mono">
                      JEWELLERY
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gold"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Nav Items list */}
              <div className="flex-1 py-8 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm tracking-widest uppercase font-medium border transition-all duration-300 ${
                      currentRoute === item.id
                        ? 'bg-gold/10 border-gold/40 text-gold-light font-bold'
                        : 'border-transparent text-gray-300 hover:bg-gold/5 hover:text-gold'
                    }`}
                  >
                    <span className="flex items-center">
                      {item.icon}
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Call to Action details */}
              <div className="pt-6 border-t border-gold/10 text-center space-y-3">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-mono">
                  Bollaram, Hyderabad
                </p>
                <a
                  href="tel:+918019001254"
                  className="inline-flex items-center gap-2 px-5 py-3 w-full justify-center text-xs tracking-widest font-bold uppercase text-black bg-gradient-to-r from-gold-light to-gold rounded-lg shadow-md hover:brightness-110"
                >
                  <Phone size={14} />
                  +91 80190 01254
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
