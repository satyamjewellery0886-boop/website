import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import Logo from './Logo';

export default function ContactSection() {
  // Form States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  
  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) {
      setSubmitResult({ success: false, text: 'Please fill in Name, Phone Number, and Message fields.' });
      return;
    }

    setSubmitting(true);
    setSubmitResult(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSubmitResult({ 
          success: true, 
          text: `Thank you, ${name}! Your inquiry message has been submitted securely. Managing owner Avinash Nandam will get in touch shortly.` 
        });
        // Reset form
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        setSubmitResult({ 
          success: false, 
          text: data.error || 'Something went wrong. Please try again or call us directly.' 
        });
      }
    } catch (err) {
      setSubmitResult({ 
        success: false, 
        text: 'Network error. Could not submit contact form. Please try again later.' 
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative py-16">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 gold-glow-radial opacity-30 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 gold-glow-radial-sm opacity-20 pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-mono block">Inquire Showroom</span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-medium tracking-wide">
            Connect With <span className="font-semibold italic gold-shine-text">Satyam</span>
          </h1>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-2" />
          <p className="text-gray-400 text-sm leading-relaxed">
            Have questions about pricing, custom gold ornament designs, or family wedding collections? Send a secure message directly to Avinash Nandam or call us directly.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Column Left: Details & Working Hours (5 Cols) */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="font-serif text-2xl text-white font-medium tracking-wide">Showroom Details</h2>
              <div className="w-12 h-[1.5px] bg-gold" />
              <p className="text-gray-400 text-sm leading-relaxed">
                Satyam Jewellery is established in the Bollaram Industrial Area, serving Hyderabad and greater Telangana families with certified pure gold and sterling silver.
              </p>
            </div>

            {/* List entries */}
            <div className="space-y-6 font-sans">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-charcoal/20 border border-gold/5">
                <MapPin size={22} className="text-gold shrink-0 mt-0.5" />
                <div className="space-y-1 text-sm text-gray-300">
                  <span className="font-serif font-bold text-white block">Our Address</span>
                  <p className="leading-relaxed">
                    S.No. 02, KJR Complex, Hanuman Temple Road,<br />
                    Venkat Reddy Nagar, Bollaram Industrial Area,<br />
                    Bollaram, Hyderabad, Telangana – 502325
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-charcoal/20 border border-gold/5">
                <Phone size={22} className="text-gold shrink-0 mt-0.5" />
                <div className="space-y-1 text-sm text-gray-300">
                  <span className="font-serif font-bold text-white block">Direct Numbers</span>
                  <div className="flex flex-col">
                    <a href="tel:+918019001254" className="hover:text-gold transition-colors font-semibold">+91 80190 01254</a>
                    <a href="tel:+919849829216" className="hover:text-gold transition-colors font-semibold">+91 98498 29216</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-charcoal/20 border border-gold/5">
                <Mail size={22} className="text-gold shrink-0 mt-0.5" />
                <div className="space-y-1 text-sm text-gray-300">
                  <span className="font-serif font-bold text-white block">Showroom Email</span>
                  <a href="mailto:satyamjewelleryadmin@gmail.com" className="hover:text-gold transition-colors break-all">
                    satyamjewelleryadmin@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-charcoal/20 border border-gold/5">
                <Clock size={22} className="text-gold shrink-0 mt-0.5" />
                <div className="space-y-1 text-sm text-gray-300">
                  <span className="font-serif font-bold text-white block">Working Hours</span>
                  <p>Monday – Sunday</p>
                  <p className="text-xs text-gray-400">10:30 AM – 08:30 PM (Daily)</p>
                </div>
              </div>
            </div>

            {/* Quick Map trigger */}
            <div className="pt-4">
              <a 
                href="https://maps.app.goo.gl/3YNcnMRh2JJHpfqu6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded bg-gradient-to-r from-gold-light to-gold text-black text-xs font-mono font-bold uppercase tracking-widest text-center block shadow hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <MapPin size={14} />
                Get Directions on Google Maps
              </a>
            </div>

          </div>

          {/* Column Right: Interactive Form (7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl glass-panel border border-gold/15 bg-black/60 p-6 sm:p-8 space-y-6">
            <h2 className="font-serif text-2xl text-white font-medium tracking-wide">Showroom Inquiry Form</h2>
            <div className="w-12 h-[1.5px] bg-gold" />
            
            <form onSubmit={handleSubmit} className="space-y-5 font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-gray-400 block">
                    Full Name <span className="text-gold">*</span>
                  </label>
                  <input 
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-charcoal/40 border border-gold/15 rounded p-3 text-sm text-white focus:border-gold focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-gray-400 block">
                    Phone Number <span className="text-gold">*</span>
                  </label>
                  <input 
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-charcoal/40 border border-gold/15 rounded p-3 text-sm text-white focus:border-gold focus:outline-none font-mono"
                    placeholder="e.g. +91 80190 01254"
                  />
                </div>

              </div>

              {/* Email (Optional) */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-gray-400 block">
                  Email Address <span className="text-gray-600 text-[10px] uppercase font-mono">(Optional)</span>
                </label>
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-charcoal/40 border border-gold/15 rounded p-3 text-sm text-white focus:border-gold focus:outline-none"
                  placeholder="e.g. customer@gmail.com"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-gray-400 block">
                  Detailed Inquiry Message <span className="text-gold">*</span>
                </label>
                <textarea 
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-charcoal/40 border border-gold/15 rounded p-3 text-sm text-white focus:border-gold focus:outline-none"
                  placeholder="Please describe the gold or silver ornament type, required karat purity, estimated weight, or bridal customization ideas..."
                />
              </div>

              {/* Submit feedback */}
              <AnimatePresence>
                {submitResult && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-lg flex items-start gap-3 text-xs leading-relaxed ${
                      submitResult.success 
                        ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300' 
                        : 'bg-rose-500/10 border border-rose-500/30 text-rose-300'
                    }`}
                  >
                    {submitResult.success ? (
                      <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle size={16} className="text-rose-400 shrink-0 mt-0.5" />
                    )}
                    <span>{submitResult.text}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded bg-gradient-to-r from-gold-light via-gold to-gold-dark text-black text-xs font-mono font-bold uppercase tracking-widest text-center shadow hover:brightness-110 hover:scale-[1.01] transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {submitting ? 'Submitting Inquiry...' : 'Submit Showroom Inquiry'}
                <Send size={14} />
              </button>

            </form>
          </div>

        </div>

        {/* Full Embedded Google Map Section */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-serif text-2xl text-white font-medium tracking-wide">Google Maps Showroom Location</h2>
            <div className="w-12 h-[1px] bg-gold mx-auto" />
          </div>

          <div className="rounded-2xl border border-gold/15 overflow-hidden shadow-2xl relative aspect-[16/9] md:aspect-[21/9] min-h-[350px] w-full">
            <iframe 
              src="https://maps.google.com/maps?q=Satyam%20Jewellers,%20KJR%20Complex,%20Hanuman%20Temple%20Road,%20Bollaram,%20Hyderabad,%20Telangana%20502325&t=&z=16&ie=UTF8&iwloc=B&output=embed" 
              className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-90"
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Satyam Jewellery Showroom Interactive Map"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
