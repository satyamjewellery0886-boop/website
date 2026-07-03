import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, Instagram, Facebook, Youtube } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  setRoute: (route: string) => void;
}

export default function Footer({ setRoute }: FooterProps) {
  const handleLinkClick = (route: string) => {
    setRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-luxury-black border-t border-gold/15 pt-16 pb-8 overflow-hidden z-10">
      {/* Background ambient gold spots */}
      <div className="absolute top-0 left-1/4 w-80 h-80 gold-glow-radial-sm opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 gold-glow-radial-sm opacity-30 pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-gold/10">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center cursor-pointer" onClick={() => handleLinkClick('home')}>
              <Logo size="md" showText={true} />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-sans">
              Satyam Jewellery represents the height of luxury, elegance, and purity. Since 2021, under the ownership of Avinash Nandam, we have crafted premium gold and silver ornaments with timeless craftsmanship.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="flex items-center justify-center w-9 h-9 rounded-full bg-gold/10 border border-gold/20 text-gold-light hover:bg-gold hover:text-black transition-all duration-300">
                <Instagram size={16} />
              </a>
              <a href="#" className="flex items-center justify-center w-9 h-9 rounded-full bg-gold/10 border border-gold/20 text-gold-light hover:bg-gold hover:text-black transition-all duration-300">
                <Facebook size={16} />
              </a>
              <a href="#" className="flex items-center justify-center w-9 h-9 rounded-full bg-gold/10 border border-gold/20 text-gold-light hover:bg-gold hover:text-black transition-all duration-300">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-serif text-gold-light tracking-wider font-semibold text-sm uppercase mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[1px] after:bg-gold">
              Showroom Navigation
            </h3>
            <ul className="space-y-3.5">
              {[
                { id: 'home', label: 'Showroom Home' },
                { id: 'about', label: 'Our Legacy' },
                { id: 'rates', label: 'Live Gold & Silver Rates' },
                { id: 'gallery', label: 'Exquisite Gallery' },
                { id: 'contact', label: 'Contact Showroom' },
                { id: 'admin', label: 'Admin Portal' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="group flex items-center text-gray-400 hover:text-gold-light text-sm transition-colors duration-250 font-sans"
                  >
                    <ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 mr-2 text-gold" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Showroom Location */}
          <div>
            <h3 className="font-serif text-gold-light tracking-wider font-semibold text-sm uppercase mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[1px] after:bg-gold">
              Contact Details
            </h3>
            <ul className="space-y-4 text-sm text-gray-400 font-sans">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                <span>
                  S.No. 02, KJR Complex,<br />
                  Hanuman Temple Road, Venkat Reddy Nagar,<br />
                  Bollaram Industrial Area, Bollaram,<br />
                  Hyderabad, Telangana – 502325
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+918019001254" className="hover:text-white transition-colors">+91 80190 01254</a>
                  <a href="tel:+919849829216" className="hover:text-white transition-colors">+91 98498 29216</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold shrink-0" />
                <a href="mailto:satyamjewelleryadmin@gmail.com" className="hover:text-white transition-colors break-all">
                  satyamjewelleryadmin@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Showroom Timing */}
          <div>
            <h3 className="font-serif text-gold-light tracking-wider font-semibold text-sm uppercase mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[1px] after:bg-gold">
              Showroom Hours
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-gray-400 font-sans">
                <Clock size={18} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white mb-1">Monday – Sunday</p>
                  <p className="text-xs">10:30 AM – 08:30 PM</p>
                  <span className="inline-block mt-2 px-2.5 py-1 text-[10px] font-mono tracking-widest bg-gold/10 border border-gold/20 text-gold-light rounded uppercase">
                    Open Every Day
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-sans">
          <div className="space-y-1 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Satyam Jewellery. All Rights Reserved. Established Since 2021.</p>
            <p className="text-[11px] text-gold/60">Designed by Abhijeet</p>
          </div>
          <div className="flex gap-6">
            <button onClick={() => handleLinkClick('about')} className="hover:text-gold transition-colors">Privacy Policy</button>
            <button onClick={() => handleLinkClick('contact')} className="hover:text-gold transition-colors">Showroom Terms</button>
            <button onClick={() => handleLinkClick('admin')} className="hover:text-gold transition-colors text-gold/60 font-mono">Staff Login</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
