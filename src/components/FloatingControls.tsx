import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, MapPin, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingControls() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Satyam Jewellery, I visited your showroom website and am interested in your exquisite ornaments. Could you please share more details about your latest gold & silver collections and customized wedding jewellery?"
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            id="back-to-top"
            aria-label="Back to top"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-gold/40 text-gold-light bg-black/80 backdrop-blur-md shadow-[0_4px_12px_rgba(212,175,55,0.25)] hover:border-gold hover:text-white transition-colors duration-300"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Get Directions Map Location */}
      <motion.a
        href="https://maps.app.goo.gl/3YNcnMRh2JJHpfqu6"
        target="_blank"
        rel="noopener noreferrer"
        id="floating-map"
        aria-label="Get directions on Google Maps"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-12 h-12 rounded-full text-white bg-blue-600/95 shadow-lg hover:bg-blue-500 transition-colors duration-300 border border-blue-400/30"
      >
        <MapPin size={22} />
      </motion.a>

      {/* WhatsApp Chat */}
      <motion.a
        href={`https://wa.me/918019001254?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp"
        aria-label="Chat on WhatsApp"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-12 h-12 rounded-full text-white bg-emerald-600/95 shadow-lg hover:bg-emerald-500 transition-colors duration-300 border border-emerald-400/30"
      >
        <MessageSquare size={22} />
      </motion.a>

      {/* Direct Call */}
      <motion.a
        href="tel:+918019001254"
        id="floating-call"
        aria-label="Call Satyam Jewellery"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-12 h-12 rounded-full text-black bg-gradient-to-r from-gold-light via-gold to-gold-dark shadow-lg hover:brightness-110 transition-all duration-300 border border-gold-light/40"
      >
        <Phone size={22} />
      </motion.a>
    </div>
  );
}
