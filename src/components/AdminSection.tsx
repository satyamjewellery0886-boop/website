import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Lock, 
  TrendingUp, 
  Clock, 
  Save, 
  User, 
  MessageSquare, 
  CheckCircle, 
  AlertCircle, 
  Trash, 
  LogOut,
  Mail,
  Phone,
  Calendar,
  Layers
} from 'lucide-react';
import { PriceData, ContactMessage } from '../types';
import Logo from './Logo';

interface AdminSectionProps {
  rates: PriceData | null;
  refreshRates: () => Promise<void>;
}

export default function AdminSection({ rates, refreshRates }: AdminSectionProps) {
  // Authentication states
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authToken, setAuthToken] = useState<string | null>(() => {
    return localStorage.getItem('satyam_admin_token');
  });
  
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loginSubmitting, setLoginSubmitting] = useState(false);

  // Price form states
  const [gold22k, setGold22k] = useState<number>(72450);
  const [gold24k, setGold24k] = useState<number>(79050);
  const [gold18k, setGold18k] = useState<number>(59280);
  const [silver, setSilver] = useState<number>(89500);
  
  const [priceSubmitting, setPriceSubmitting] = useState(false);
  const [priceResult, setPriceResult] = useState<{ success: boolean; text: string } | null>(null);

  // Inquiries states
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [messagesLoading, setMessagesLoading] = useState(false);

  // Synchronization initial inputs when rates are loaded
  useEffect(() => {
    if (rates) {
      setGold22k(rates.gold22kPer10g);
      setGold24k(rates.gold24kPer10g);
      setGold18k(rates.gold18kPer10g);
      setSilver(rates.silverPerKg);
    }
  }, [rates]);

  // Load inquiries once logged in
  useEffect(() => {
    if (authToken) {
      fetchMessages();
    }
  }, [authToken]);

  const fetchMessages = async () => {
    if (!authToken) return;
    setMessagesLoading(true);
    try {
      const response = await fetch(`/api/contact/messages?token=${authToken}`);
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      }
    } catch (err) {
      console.error('Failed to load showroom messages');
    } finally {
      setMessagesLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    setLoginSubmitting(true);

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        localStorage.setItem('satyam_admin_token', data.token);
        setAuthToken(data.token);
        setUsername('');
        setPassword('');
      } else {
        setLoginError(data.error || 'Invalid username or password.');
      }
    } catch (err) {
      setLoginError('Server authentication failure. Please try again.');
    } finally {
      setLoginSubmitting(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('satyam_admin_token');
    setAuthToken(null);
    setPriceResult(null);
  };

  const handleUpdatePrices = async (e: React.FormEvent) => {
    e.preventDefault();
    setPriceResult(null);
    setPriceSubmitting(true);

    try {
      const response = await fetch('/api/rates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          gold22kPer10g: gold22k,
          gold24kPer10g: gold24k,
          gold18kPer10g: gold18k,
          silverPerKg: silver,
          token: authToken
        })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setPriceResult({ success: true, text: 'Gold & Silver Rates updated successfully in database!' });
        await refreshRates();
      } else {
        setPriceResult({ success: false, text: data.error || 'Failed to update rates.' });
      }
    } catch (err) {
      setPriceResult({ success: false, text: 'Network synchronization error. Please retry.' });
    } finally {
      setPriceSubmitting(false);
    }
  };

  const formatDate = (isoString: string) => {
    const d = new Date(isoString);
    return d.toLocaleString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  // If NOT Logged In, Render Secure Login Screen
  if (!authToken) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-16 px-4">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 gold-glow-radial opacity-30 pointer-events-none" />
        
        <div className="w-full max-w-md rounded-2xl glass-panel border border-gold/25 bg-black/75 p-8 space-y-6 shadow-2xl relative z-10 text-center">
          
          <Logo size="md" showText={false} />
          
          <div className="space-y-2">
            <h1 className="font-serif text-2xl text-white font-medium tracking-wide uppercase">Satyam Admin Portal</h1>
            <p className="text-xs text-gray-450 font-sans">
              Enter authorized showroom staff credentials to access Gold/Silver price controllers and client messages.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-left font-sans">
            {/* Username */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400 block">
                Showroom User ID
              </label>
              <div className="relative">
                <User size={16} className="absolute left-3 top-3 text-gold/60" />
                <input 
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-charcoal/40 border border-gold/15 rounded p-3 pl-10 text-sm text-white focus:border-gold focus:outline-none font-mono"
                  placeholder="ID (e.g. satyam)"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400 block">
                Secret Access Password
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-3 text-gold/60" />
                <input 
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-charcoal/40 border border-gold/15 rounded p-3 pl-10 text-sm text-white focus:border-gold focus:outline-none font-mono"
                  placeholder="Password"
                />
              </div>
            </div>

            {/* Error messaging */}
            {loginError && (
              <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded text-xs text-rose-300 flex items-start gap-2">
                <AlertCircle size={14} className="text-rose-400 shrink-0 mt-0.5" />
                <span>{loginError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loginSubmitting}
              className="w-full py-3.5 bg-gradient-to-r from-gold-light via-gold to-gold-dark text-black rounded font-mono font-bold text-xs uppercase tracking-widest text-center shadow hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <Lock size={14} />
              {loginSubmitting ? 'Authenticating Staff...' : 'Verify & Log In'}
            </button>
          </form>

          <div className="p-3 bg-gold-deep/10 border border-gold/10 rounded text-[10px] text-gray-500 font-mono text-center">
            Default: ID "satyam" | Pass "avinash123"
          </div>

        </div>
      </div>
    );
  }

  // Logged In Authorized Dashboard View
  return (
    <div className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl xl:max-w-[1440px] mx-auto space-y-12">
      
      {/* Header Panel */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-gold/10">
        <div className="flex items-center gap-4">
          <Logo size="sm" showText={false} />
          <div>
            <h1 className="font-serif text-2xl text-white font-medium tracking-wide">Showroom Admin Dashboard</h1>
            <p className="text-xs text-gray-400 font-sans">
              Welcome back, <span className="text-white font-semibold">Avinash Nandam</span> (Managing Owner)
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-rose-500/10 border border-rose-500/30 text-rose-300 rounded font-mono text-xs uppercase tracking-widest font-semibold flex items-center gap-2 hover:bg-rose-500/25 transition-all cursor-pointer"
        >
          <LogOut size={14} />
          Sign Out
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Column 1: Live Rate controllers (5 Cols) */}
        <div className="lg:col-span-5 rounded-xl glass-panel border border-gold/15 bg-black/60 p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gold">
              <TrendingUp size={18} />
              <h2 className="font-serif text-white font-semibold text-lg uppercase tracking-wide">Gold & Silver Rates Manager</h2>
            </div>
            <p className="text-xs text-gray-400 font-sans">
              Update live pricing indices here. Changes will immediately synchronize and update on the client Live rates calculators.
            </p>
          </div>

          <form onSubmit={handleUpdatePrices} className="space-y-4 font-sans text-left">
            
            {/* 22K Gold per 10g */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono uppercase tracking-widest text-gold-light block">
                22K Ornaments Gold Price (10gm)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-sm font-mono text-gray-550">₹</span>
                <input 
                  type="number"
                  required
                  value={gold22k}
                  onChange={(e) => setGold22k(Number(e.target.value))}
                  className="w-full bg-charcoal/40 border border-gold/15 rounded p-3 pl-8 text-sm text-white font-semibold font-mono focus:border-gold focus:outline-none"
                />
              </div>
            </div>

            {/* 24K Gold per 10g */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono uppercase tracking-widest text-gold-light block">
                24K Pure Investment Gold Price (10gm)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-sm font-mono text-gray-550">₹</span>
                <input 
                  type="number"
                  required
                  value={gold24k}
                  onChange={(e) => setGold24k(Number(e.target.value))}
                  className="w-full bg-charcoal/40 border border-gold/15 rounded p-3 pl-8 text-sm text-white font-semibold font-mono focus:border-gold focus:outline-none"
                />
              </div>
            </div>

            {/* 18K Gold per 10g */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono uppercase tracking-widest text-gold-light block">
                18K Modern Gold Price (10gm)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-sm font-mono text-gray-550">₹</span>
                <input 
                  type="number"
                  required
                  value={gold18k}
                  onChange={(e) => setGold18k(Number(e.target.value))}
                  className="w-full bg-charcoal/40 border border-gold/15 rounded p-3 pl-8 text-sm text-white font-semibold font-mono focus:border-gold focus:outline-none"
                />
              </div>
            </div>

            {/* Silver per 1kg */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono uppercase tracking-widest text-gold-light block">
                99.9% Pure Silver Price (1kg)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-sm font-mono text-gray-550">₹</span>
                <input 
                  type="number"
                  required
                  value={silver}
                  onChange={(e) => setSilver(Number(e.target.value))}
                  className="w-full bg-charcoal/40 border border-gold/15 rounded p-3 pl-8 text-sm text-white font-semibold font-mono focus:border-gold focus:outline-none"
                />
              </div>
            </div>

            {/* Sync Results */}
            {priceResult && (
              <div className={`p-4 rounded text-xs leading-relaxed flex items-start gap-2.5 ${
                priceResult.success ? 'bg-emerald-500/10 border border-emerald-500/25 text-emerald-300' : 'bg-rose-500/10 border border-rose-500/25 text-rose-300'
              }`}>
                {priceResult.success ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                <span>{priceResult.text}</span>
              </div>
            )}

            {/* Last update marker */}
            <div className="text-[10px] font-mono text-gray-500 flex items-center gap-1.5">
              <Clock size={12} />
              <span>Current Server Sync Time: {rates ? formatDate(rates.lastUpdated) : 'Never'}</span>
            </div>

            <button
              type="submit"
              disabled={priceSubmitting}
              className="w-full py-4 bg-gradient-to-r from-gold-light via-gold to-gold-dark text-black rounded font-mono font-bold text-xs uppercase tracking-widest text-center shadow hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <Save size={14} />
              {priceSubmitting ? 'Synchronizing prices...' : 'Save Live Changes'}
            </button>

          </form>
        </div>

        {/* Column 2: Client messages / inquiries manager (7 Cols) */}
        <div className="lg:col-span-7 rounded-xl glass-panel border border-gold/10 bg-black/45 p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-gold/10">
            <div className="flex items-center gap-2 text-gold">
              <MessageSquare size={18} />
              <h2 className="font-serif text-white font-semibold text-lg uppercase tracking-wide">Client Form Inquiries</h2>
            </div>
            
            <button
              onClick={fetchMessages}
              disabled={messagesLoading}
              className="text-[10px] font-mono text-gold-light hover:text-white flex items-center gap-1 cursor-pointer disabled:opacity-40"
            >
              {messagesLoading ? 'Refreshing...' : 'Reload Inquiries'}
            </button>
          </div>

          <p className="text-xs text-gray-450 font-sans leading-relaxed">
            Manage inquiries submitted by clients via the contact page form. Reach out immediately on Call or WhatsApp.
          </p>

          {/* Inquiries List */}
          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
            {messagesLoading && messages.length === 0 ? (
              <div className="text-center py-12 text-sm text-gray-500 font-sans">
                Fetching showroom messages...
              </div>
            ) : messages.length > 0 ? (
              messages.map((msg) => (
                <div 
                  key={msg.id}
                  className="p-5 rounded-lg bg-charcoal/15 border border-gold/5 flex flex-col justify-between space-y-4 shadow-md"
                >
                  <div className="space-y-2">
                    {/* Header customer detail */}
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="font-serif font-bold text-white text-sm">{msg.name}</span>
                      <span className="text-[10px] font-mono text-gray-500 flex items-center gap-1">
                        <Calendar size={12} />
                        {formatDate(msg.createdAt)}
                      </span>
                    </div>

                    {/* Inquiry message content */}
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic bg-black/30 p-3 rounded border border-gold/5 font-sans">
                      "{msg.message}"
                    </p>
                  </div>

                  {/* Actions buttons */}
                  <div className="pt-2 border-t border-gold/5 flex justify-between items-center flex-wrap gap-2">
                    <div className="flex gap-4 text-[11px] text-gray-400 font-mono">
                      {msg.email && (
                        <a href={`mailto:${msg.email}`} className="hover:text-gold flex items-center gap-1">
                          <Mail size={12} className="text-gold" />
                          Email Customer
                        </a>
                      )}
                      <a href={`tel:${msg.phone}`} className="hover:text-gold flex items-center gap-1">
                        <Phone size={12} className="text-gold" />
                        Call ({msg.phone})
                      </a>
                    </div>
                    
                    {/* Quick WhatsApp Action with Customer */}
                    <a
                      href={`https://wa.me/${msg.phone.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-[10px] uppercase font-mono tracking-wider font-semibold text-white flex items-center gap-1 transition-colors"
                    >
                      <MessageSquare size={10} />
                      WhatsApp Client
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16 text-gray-500 font-sans space-y-2 border border-dashed border-gold/10 rounded-lg">
                <Layers size={32} className="text-gold/20 mx-auto" />
                <h4 className="font-serif font-semibold text-white/50">No Inquiries Found</h4>
                <p className="text-xs text-gray-500">
                  Client contact form queries will load here automatically once submitted.
                </p>
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
}
