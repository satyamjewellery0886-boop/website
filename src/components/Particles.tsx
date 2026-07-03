import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: string;
  size: string;
  delay: string;
  duration: string;
}

export default function Particles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles
    const list: Particle[] = Array.from({ length: 20 }).map((_, i) => {
      const sizeValue = Math.random() * 4 + 2; // 2px to 6px
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        size: `${sizeValue}px`,
        delay: `${Math.random() * 10}s`,
        duration: `${Math.random() * 15 + 10}s` // 10s to 25s
      };
    });
    setParticles(list);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="floating-particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
            bottom: '-10px'
          }}
        />
      ))}
    </div>
  );
}
