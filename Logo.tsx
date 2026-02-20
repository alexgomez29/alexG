import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-10 w-auto" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="brandGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2563eb" /> {/* Blue-600 */}
        <stop offset="1" stopColor="#9333ea" /> {/* Purple-600 */}
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    
    {/* Background Circle Glow (Optional, keeps it clean) */}
    {/* <circle cx="50" cy="50" r="45" fill="url(#brandGradient)" opacity="0.1" /> */}

    {/* Stylized L shape */}
    <path 
      d="M35 25 C35 22 32 22 32 25 V75 C32 78 34 80 37 80 H75 C78 80 78 75 75 75 H42 V25 C42 22 38 22 35 25Z" 
      fill="url(#brandGradient)" 
      style={{ filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.1))' }}
    />
    
    {/* Stylized F shape intertwining */}
    <path 
      d="M52 25 C52 22 55 22 55 25 V42 H75 C78 42 78 48 75 48 H55 V58 C55 61 52 61 52 58 V25Z" 
      fill="#1e1b4b" 
    />
    <path 
      d="M52 25 H82 C85 25 85 31 82 31 H55 V25Z" 
      fill="#1e1b4b" 
    />

    {/* Decorative Stars/Sparkles */}
    <path d="M85 20 L87 25 L92 27 L87 29 L85 34 L83 29 L78 27 L83 25 Z" fill="#60a5fa" />
    <path d="M25 70 L26.5 73 L30 74 L26.5 75 L25 78 L23.5 75 L20 74 L23.5 73 Z" fill="#c084fc" />
  </svg>
);

export default Logo;