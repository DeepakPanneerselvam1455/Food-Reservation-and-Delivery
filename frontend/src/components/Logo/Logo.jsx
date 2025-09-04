import React from 'react';
import './Logo.css';

const Logo = ({ size = 'default' }) => {
  return (
    <div className={`logo-container ${size}`}>
      <div className="logo-icon">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B6B"/>
              <stop offset="50%" stopColor="#FF8E53"/>
              <stop offset="100%" stopColor="#FF6B35"/>
            </linearGradient>
          </defs>
          
          {/* Background circle */}
          <circle cx="24" cy="24" r="22" fill="url(#logoGradient)" opacity="0.1"/>
          <circle cx="24" cy="24" r="20" fill="url(#logoGradient)"/>
          
          {/* Fork */}
          <path d="M16 12v4c0 .7.5 1.2 1.2 1.2h.3c.7 0 1.2-.5 1.2-1.2V12M16 12c0-.8.5-1.3 1.3-1.3s1.3.5 1.3 1.3M16 12v10M18.5 12v10" 
                stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          
          {/* Plate */}
          <ellipse cx="30" cy="30" rx="8" ry="3" fill="white" opacity="0.9"/>
          
          {/* Food items */}
          <circle cx="27" cy="28.5" r="2" fill="#FF6B6B" opacity="0.8"/>
          <circle cx="31.5" cy="29" r="1.5" fill="#FF8E53" opacity="0.8"/>
          <circle cx="30" cy="26" r="1.2" fill="#FF6B35" opacity="0.8"/>
        </svg>
      </div>
      <div className="logo-text">
        <span className="logo-name gradient-text">FoodieHub</span>
        <span className="logo-tagline">Premium Delivery</span>
      </div>
    </div>
  );
};

export default Logo;
