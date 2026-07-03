import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Clock, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Calculator, 
  CheckCircle, 
  Compass,
  AlertCircle,
  RefreshCw
} from 'lucide-react';
import Logo from './Logo';
import { PriceData } from '../types';

interface RatesSectionProps {
  rates: PriceData | null;
  loading: boolean;
  refreshRates: () => Promise<void>;
}

export default function RatesSection({ rates, loading, refreshRates }: RatesSectionProps) {
  // Calculator States
  const [calcWeight, setCalcWeight] = useState<number>(10);
  const [calcType, setCalcType] = useState<'24k' | '22k' | '18k' | 'silver'>('22k');
  const [makingCharges, setMakingCharges] = useState<number>(10); // standard 10% making charges
  const [includeGst, setIncludeGst] = useState<boolean>(true); // 3% GST standard on jewellery in India

  // Computed Values
  const getRatePerGram = () => {
    if (!rates) return 0;
    switch (calcType) {
      case '24k':
        return rates.gold24kPer10g / 10;
      case '22k':
        return rates.gold22kPer10g / 10;
      case '18k':
        return rates.gold18kPer10g / 10;
      case 'silver':
        return rates.silverPerKg / 1000;
      default:
        return 0;
    }
  };

  const ratePerGram = getRatePerGram();
  const rawMetalPrice = ratePerGram * calcWeight;
  const makingChargesAmount = rawMetalPrice * (makingCharges / 100);
  const subtotalBeforeTax = rawMetalPrice + makingChargesAmount;
  const gstAmount = includeGst ? subtotalBeforeTax * 0.03 : 0;
  const totalEstimate = subtotalBeforeTax + gstAmount;

  const formatDate = (isoString?: string) => {
    if (!isoString) return 'Loading...';
    const date = new Date(isoString);
    return date.toLocaleString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata'
    });
  };

  const getWhatsAppPriceQuoteUrl = () => {
    const text = encodeURIComponent(
      `Hello Satyam Jewellery! I calculated a live rate quote using your website's Gold & Silver Calculator:\n\n- Metal: ${calcType.toUpperCase()}\n- Weight: ${calcWeight}g\n- Rate/g: ₹${ratePerGram.toFixed(2)}\n- Metal Price: ₹${rawMetalPrice.toFixed(2)}\n- Est. Making Charges (${makingCharges}%): ₹${makingChargesAmount.toFixed(2)}\n- GST (3%): ₹${gstAmount.toFixed(2)}\n- Estimated Total: ₹${totalEstimate.toFixed(2)}\n\nI would love to schedule a showroom visit with Avinash garu to explore options. Please let me know how to proceed!`
    );
    return `https://wa.me/918019001254?text=${text}`;
  };

  return (
    <div className="relative py-16">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 gold-glow-radial opacity-35 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 gold-glow-radial-sm opacity-25 pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-mono block">Transparent Valuations</span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-medium tracking-wide">
            Live Gold & Silver <span className="font-semibold italic gold-shine-text">Rates</span>
          </h1>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-2" />
          <p className="text-gray-400 text-sm leading-relaxed">
            Updated in real-time to reflect the global Hyderabad market price indices. Handled with absolute transparency to guarantee standard value for your gold investments.
          </p>
        </div>

        {/* Live Rates Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: 24K Gold */}
          <div className="rounded-xl glass-panel border border-gold bg-black/60 p-6 flex flex-col justify-between space-y-4 shadow-[0_4px_20px_rgba(212,175,55,0.15)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gold/10 to-transparent rounded-bl-full" />
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-gold font-semibold">24K Pure Gold</span>
              <h3 className="font-serif text-white font-bold text-2xl">Gold 99.9%</h3>
              <p className="text-xs text-gray-400">Pure investment gold bar standards</p>
            </div>
            <div>
              <span className="text-sm font-mono text-gray-400">Per 10 Grams</span>
              <div className="text-3xl font-serif font-bold text-gold-light mt-1">
                {rates ? `₹${rates.gold24kPer10g.toLocaleString('en-IN')}` : 'Loading...'}
              </div>
              <span className="text-[10px] font-mono text-emerald-400 mt-1 block">Live Showroom Price</span>
            </div>
          </div>

          {/* Card 2: 22K Gold */}
          <div className="rounded-xl glass-panel border border-gold/15 bg-black/40 p-6 flex flex-col justify-between space-y-4 relative overflow-hidden">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-gold-light">22K Ornaments Gold</span>
              <h3 className="font-serif text-white font-bold text-2xl">Gold 91.6%</h3>
              <p className="text-xs text-gray-400">Standard for beautiful gold ornaments</p>
            </div>
            <div>
              <span className="text-sm font-mono text-gray-400">Per 10 Grams</span>
              <div className="text-3xl font-serif font-bold text-gold-light mt-1">
                {rates ? `₹${rates.gold22kPer10g.toLocaleString('en-IN')}` : 'Loading...'}
              </div>
              <span className="text-[10px] font-mono text-emerald-400 mt-1 block">BIS 916 Hallmark Standard</span>
            </div>
          </div>

          {/* Card 3: 18K Gold */}
          <div className="rounded-xl glass-panel border border-gold/15 bg-black/40 p-6 flex flex-col justify-between space-y-4 relative overflow-hidden">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-gray-400">18K Modern Gold</span>
              <h3 className="font-serif text-white font-bold text-2xl">Gold 75.0%</h3>
              <p className="text-xs text-gray-400">Best for modern diamond/emerald settings</p>
            </div>
            <div>
              <span className="text-sm font-mono text-gray-400">Per 10 Grams</span>
              <div className="text-3xl font-serif font-bold text-gold-light mt-1">
                {rates ? `₹${rates.gold18kPer10g.toLocaleString('en-IN')}` : 'Loading...'}
              </div>
              <span className="text-[10px] font-mono text-emerald-400 mt-1 block">Lightweight & Resilient</span>
            </div>
          </div>

          {/* Card 4: Pure Silver */}
          <div className="rounded-xl glass-panel border border-gold/15 bg-black/40 p-6 flex flex-col justify-between space-y-4 relative overflow-hidden">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-gray-400">Pure Silver</span>
              <h3 className="font-serif text-white font-bold text-2xl">Silver 99.9%</h3>
              <p className="text-xs text-gray-400">Pooja sets, anklets, silver utensils</p>
            </div>
            <div>
              <span className="text-sm font-mono text-gray-400">Per 1 Kilogram</span>
              <div className="text-3xl font-serif font-bold text-gold-light mt-1">
                {rates ? `₹${rates.silverPerKg.toLocaleString('en-IN')}` : 'Loading...'}
              </div>
              <span className="text-[10px] font-mono text-emerald-400 mt-1 block">999 Chandi Standard</span>
            </div>
          </div>

        </div>

        {/* Timestamp & Refresh Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl glass-panel bg-black/60 border border-gold/10">
          <div className="flex items-center gap-3 text-xs text-gray-400 font-mono">
            <Clock size={16} className="text-gold animate-pulse shrink-0" />
            <span>
              Rates Last Synchronized: <span className="text-white font-semibold">{rates ? formatDate(rates.lastUpdated) : 'Syncing...'}</span>
            </span>
          </div>

          <button
            onClick={refreshRates}
            disabled={loading}
            className="px-4 py-2 bg-gold/10 border border-gold/35 hover:bg-gold/20 text-gold-light rounded text-[10px] uppercase font-mono tracking-widest font-semibold flex items-center gap-2 transition-all cursor-pointer disabled:opacity-50"
          >
            <RefreshCw size={12} className={`${loading ? 'animate-spin' : ''}`} />
            Refresh Rates
          </button>
        </div>

        {/* Premium Estimate Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-6">
          
          {/* Calculator Inputs (7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl glass-panel border border-gold/15 bg-black/75 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gold">
                <Calculator size={18} />
                <h3 className="font-serif text-white font-semibold text-lg tracking-wide uppercase">Showroom Estimation Calculator</h3>
              </div>
              <p className="text-xs text-gray-450 leading-relaxed font-sans">
                Obtain a highly accurate, fully transparent price approximation for any gold or silver jewelry ornament. Enter your specific weight and select options.
              </p>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Field 1: Weight input */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-gray-400 block">
                  Weight (in Grams)
                </label>
                <div className="relative">
                  <input 
                    type="number"
                    min="0.1"
                    step="0.01"
                    value={calcWeight || ''}
                    onChange={(e) => setCalcWeight(Math.max(0.1, Number(e.target.value)))}
                    className="w-full bg-charcoal/40 border border-gold/20 rounded p-3 text-sm font-semibold font-mono text-white focus:border-gold focus:outline-none"
                    placeholder="e.g. 10.5"
                  />
                  <span className="absolute right-3 top-3 text-xs font-mono text-gray-400">grams</span>
                </div>
              </div>

              {/* Field 2: Metal Type */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-gray-400 block">
                  Purity / Metal Type
                </label>
                <select
                  value={calcType}
                  onChange={(e) => setCalcType(e.target.value as any)}
                  className="w-full bg-charcoal/40 border border-gold/20 rounded p-3 text-sm font-semibold font-sans text-white focus:border-gold focus:outline-none cursor-pointer"
                >
                  <option value="22k" className="bg-luxury-black text-white">22K Gold Ornaments</option>
                  <option value="24k" className="bg-luxury-black text-white">24K Pure Gold Bar</option>
                  <option value="18k" className="bg-luxury-black text-white">18K Modern Gold</option>
                  <option value="silver" className="bg-luxury-black text-white">99.9% Pure Silver</option>
                </select>
              </div>

              {/* Field 3: Making charges estimation */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-gray-400 block">
                  Estimated Making Charges (%)
                </label>
                <div className="relative">
                  <input 
                    type="number"
                    min="0"
                    max="30"
                    value={makingCharges}
                    onChange={(e) => setMakingCharges(Math.max(0, Math.min(30, Number(e.target.value))))}
                    className="w-full bg-charcoal/40 border border-gold/20 rounded p-3 text-sm font-semibold font-mono text-white focus:border-gold focus:outline-none"
                    placeholder="e.g. 10"
                  />
                  <span className="absolute right-3 top-3 text-xs font-mono text-gray-400">%</span>
                </div>
                <span className="text-[10px] text-gray-500 font-sans block">Typical making charges range from 6% to 15%</span>
              </div>

              {/* Field 4: Include Tax toggle */}
              <div className="flex items-center justify-between p-3.5 bg-charcoal/10 border border-gold/10 rounded sm:mt-6 cursor-pointer" onClick={() => setIncludeGst(!includeGst)}>
                <div className="space-y-0.5">
                  <span className="text-xs font-sans text-white font-medium block">Standard GST (3%)</span>
                  <span className="text-[9px] font-mono text-gray-500 block">Required under Indian Tax codes</span>
                </div>
                <input 
                  type="checkbox"
                  checked={includeGst}
                  onChange={() => {}} // toggled via parent div click
                  className="w-4 h-4 rounded text-gold bg-black accent-gold border-gold/40 focus:ring-gold focus:ring-opacity-25"
                />
              </div>

            </div>

            <div className="p-4 bg-gold-deep/20 border border-gold/10 rounded-lg text-xs leading-relaxed text-gray-400 font-sans flex items-start gap-2.5">
              <CheckCircle size={14} className="text-gold shrink-0 mt-0.5 animate-pulse" />
              <span>
                GST of <span className="text-white font-semibold">3%</span> is standard on gold purchases. Making charges cover master craftsmanship and design intricacies. This is an unofficial showroom estimator tool; final billing values are computed live at checkout based on exact item weights.
              </span>
            </div>

          </div>

          {/* Calculator Output Breakdown (5 Cols) */}
          <div className="lg:col-span-5 rounded-2xl border border-gold/25 bg-gradient-to-br from-gold-deep/70 to-luxury-black p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-[0_8px_32px_rgba(212,175,55,0.1)]">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <TrendingUp size={16} className="text-gold" />
                <h3 className="font-serif text-gold-light font-bold text-sm uppercase tracking-widest">Est. Invoice Summary</h3>
              </div>
              <div className="w-12 h-[1px] bg-gold/40" />
            </div>

            {/* Values Rows */}
            <div className="space-y-4 text-sm font-sans">
              <div className="flex justify-between items-center text-gray-400">
                <span>Selected Metal Rate (1g)</span>
                <span className="font-mono text-white font-semibold">₹{ratePerGram.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-gray-400">
                <span>Total Net Weight</span>
                <span className="font-mono text-white font-semibold">{calcWeight} g</span>
              </div>
              <div className="flex justify-between items-center text-gray-400">
                <span>Raw Metal Value</span>
                <span className="font-mono text-white font-semibold">₹{rawMetalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-gray-400">
                <span>Making Charges ({makingCharges}%)</span>
                <span className="font-mono text-white font-semibold">₹{makingChargesAmount.toFixed(2)}</span>
              </div>

              <div className="border-t border-gold/15 pt-3 flex justify-between items-center text-gray-400">
                <span>Subtotal (Before GST)</span>
                <span className="font-mono text-white font-bold">₹{subtotalBeforeTax.toFixed(2)}</span>
              </div>

              <div className="flex justify-between items-center text-gray-450 text-xs">
                <span>GST Tax (3%)</span>
                <span className="font-mono text-white">₹{gstAmount.toFixed(2)}</span>
              </div>

              {/* Big Grand Total */}
              <div className="border-t-2 border-dashed border-gold/20 pt-4 flex justify-between items-center">
                <span className="font-serif text-gold-light font-bold text-sm uppercase tracking-wider">Estimated Total</span>
                <div className="text-right">
                  <span className="font-serif text-gold-light font-bold text-2xl tracking-wide block">
                    ₹{totalEstimate.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                  </span>
                  <span className="text-[9px] font-mono text-gray-500">Hallmark Included</span>
                </div>
              </div>

            </div>

            {/* Inquire on WhatsApp */}
            <div className="pt-4">
              <a 
                href={getWhatsAppPriceQuoteUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded bg-gradient-to-r from-gold-light via-gold to-gold-dark text-black text-xs font-mono font-bold uppercase tracking-widest text-center block shadow-[0_4px_15px_rgba(212,175,55,0.3)] hover:brightness-110 hover:scale-[1.01] transition-all"
              >
                Inquire Invoice Quote
              </a>
            </div>

          </div>

        </div>

        {/* Brand/Showroom details card */}
        <div className="glass-panel border border-gold/15 rounded-2xl p-8 sm:p-12 bg-black/60 grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-w-4xl mx-auto">
          <div className="md:col-span-4 flex flex-col items-center border-b md:border-b-0 md:border-r border-gold/10 pb-6 md:pb-0 md:pr-8">
            <Logo size="md" showText={true} />
            <p className="text-[10px] text-gray-500 font-mono tracking-widest mt-2 uppercase">ESTD. 2021</p>
          </div>

          <div className="md:col-span-8 space-y-4 text-sm text-gray-400 font-sans">
            <h4 className="font-serif text-white font-bold text-lg tracking-wide uppercase">Bollaram Showroom Details</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold block">Address</span>
                <p>
                  S.No. 02, KJR Complex, Hanuman Temple Road,<br />
                  Bollaram Industrial Area, Bollaram, Hyderabad
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold block">Contact Showroom</span>
                <p>+91 80190 01254, +91 98498 29216</p>
                <p className="text-[10px]">satyamjewelleryadmin@gmail.com</p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <a 
                href="tel:+918019001254"
                className="px-5 py-2.5 bg-gold/10 border border-gold/30 rounded hover:bg-gold/20 text-[10px] uppercase font-mono tracking-widest text-gold-light font-semibold transition-all"
              >
                Call Primary Showroom
              </a>
              <a 
                href="https://maps.app.goo.gl/3YNcnMRh2JJHpfqu6"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-blue-600/90 hover:bg-blue-500 rounded text-[10px] uppercase font-mono tracking-widest text-white font-semibold transition-all"
              >
                Open Google Directions
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
