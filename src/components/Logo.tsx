import React from 'react';
// @ts-ignore
import logoImage from '../assets/images/satyam_logo_1783018515769.jpg';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColor?: string;
}

export default function Logo({
  className = '',
  size = 'md',
  showText = true,
  textColor = 'text-gold-light'
}: LogoProps) {
  const dimensions = {
    sm: { width: 'w-10 h-10' },
    md: { width: 'w-16 h-16' },
    lg: { width: 'w-24 h-24' },
    xl: { width: 'w-36 h-36' }
  };

  const sizeClass = dimensions[size].width;

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Circle crop of the high-end custom logo */}
      <div className={`relative ${sizeClass} rounded-full overflow-hidden border-2 border-gold/40 shadow-[0_2px_12px_rgba(212,175,55,0.45)] transition-transform duration-500 hover:scale-105 bg-[#1C130D]`}>
        <img
          src={logoImage}
          alt="Satyam Jewellery Official Logo"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Subtle inner golden shine overlay */}
        <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none" />
      </div>

      {/* Text Branding */}
      {showText && (
        <div className="mt-3 text-center pointer-events-none select-none">
          <h1 
            className={`font-serif tracking-[0.25em] text-sm uppercase leading-tight font-medium ${textColor}`}
            style={{ fontFamily: "'Playfair Display', 'Cinzel', serif" }}
          >
            Satyam
          </h1>
          <span 
            className="text-[0.6rem] tracking-[0.4em] uppercase text-gray-400 font-mono block mt-1"
          >
            Jewellery
          </span>
        </div>
      )}
    </div>
  );
}
