import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Sparkles } from 'lucide-react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingControls from './components/FloatingControls';
import Logo from './components/Logo';

// Subsections
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import RatesSection from './components/RatesSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import AdminSection from './components/AdminSection';

import { PriceData } from './types';

export default function App() {
  // Routing State
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    const hash = window.location.hash.replace('#', '');
    return hash || 'home';
  });

  // Rates State
  const [rates, setRates] = useState<PriceData | null>(null);
  const [loadingRates, setLoadingRates] = useState<boolean>(true);

  // App Initial Loading Screen Overlay State
  const [showLoadingScreen, setShowLoadingScreen] = useState<boolean>(true);

  // Synchronize route switches on HashChange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setCurrentRoute(hash || 'home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Fetch Gold & Silver rates from database
  const fetchLiveRates = async () => {
    setLoadingRates(true);
    try {
      const response = await fetch('/api/rates');
      if (response.ok) {
        const data = await response.json();
        setRates(data);
      } else {
        console.error('Rates response failed');
      }
    } catch (err) {
      console.error('Error fetching live gold/silver rates', err);
    } finally {
      setLoadingRates(false);
    }
  };

  useEffect(() => {
    // Initial fetches
    fetchLiveRates();

    // Stagger loading screen exit to feel extremely luxurious & high-end
    const timer = setTimeout(() => {
      setShowLoadingScreen(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const setRoute = (route: string) => {
    window.location.hash = route;
  };

  // Helper function to render active page content
  const renderPageContent = () => {
    switch (currentRoute) {
      case 'home':
        return (
          <HomeSection 
            setRoute={setRoute} 
            goldPrice22k={rates?.gold22kPer10g || 72450} 
            silverPricePerKg={rates?.silverPerKg || 89500} 
          />
        );
      case 'about':
        return <AboutSection />;
      case 'rates':
        return (
          <RatesSection 
            rates={rates} 
            loading={loadingRates} 
            refreshRates={fetchLiveRates} 
          />
        );
      case 'gallery':
        return <GallerySection />;
      case 'contact':
        return <ContactSection />;
      case 'admin':
        return (
          <AdminSection 
            rates={rates} 
            refreshRates={fetchLiveRates} 
          />
        );
      default:
        return (
          <HomeSection 
            setRoute={setRoute} 
            goldPrice22k={rates?.gold22kPer10g || 72450} 
            silverPricePerKg={rates?.silverPerKg || 89500} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-luxury-black text-white relative flex flex-col font-sans overflow-x-hidden selection:bg-gold/30 selection:text-gold-light">
      
      {/* 1. LUXURY APP INTRO PAGE LOADER */}
      <AnimatePresence>
        {showLoadingScreen && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.65, ease: 'easeInOut' }}
            className="fixed inset-0 bg-luxury-black z-100 flex flex-col items-center justify-center space-y-6"
          >
            {/* Spinning/breathing gold logo container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative p-6"
            >
              <Logo size="xl" showText={true} />
              
              {/* Spinning gold halo backdrop */}
              <div className="absolute inset-0 rounded-full border border-gold/15 opacity-40 animate-spin-slow pointer-events-none" />
            </motion.div>

            <div className="flex flex-col items-center space-y-2">
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-mono animate-pulse block">
                Loading Showroom Experience
              </span>
              <div className="w-32 h-[1px] bg-gold/15 relative overflow-hidden rounded">
                {/* Horizontal flow line */}
                <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-transparent via-gold to-transparent animate-[goldShine_2s_infinite]" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main app contents - loaded once loading completes */}
      <div className="flex-1 flex flex-col min-h-screen">
        
        {/* Responsive Navbar header */}
        <Navbar currentRoute={currentRoute} setRoute={setRoute} />

        {/* Dynamic Route Switcher Content Wrapper */}
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRoute}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              {renderPageContent()}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Global Footer */}
        <Footer setRoute={setRoute} />

        {/* Always visible responsive Floating Controls (tel, whatsapp, map, scroll to top) */}
        <FloatingControls />

      </div>

    </div>
  );
}
