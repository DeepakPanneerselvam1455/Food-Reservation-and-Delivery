import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const slides = [
    {
      title: "Delicious Food Delivered Fast",
      subtitle: "Order your favourite food here",
      description: "Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.",
      cta: "Explore Menu",
      stats: { restaurants: "500+", deliveries: "10k+", rating: "4.8" }
    },
    {
      title: "Fresh Ingredients, Amazing Taste",
      subtitle: "Quality you can taste",
      description: "We partner with the best local restaurants to bring you fresh, high-quality meals delivered right to your doorstep.",
      cta: "Order Now",
      stats: { restaurants: "500+", deliveries: "10k+", rating: "4.8" }
    },
    {
      title: "30-Min Delivery Guarantee",
      subtitle: "Hot food, delivered fast",
      description: "Our lightning-fast delivery network ensures your food arrives hot and fresh, exactly when you need it most.",
      cta: "Get Started",
      stats: { restaurants: "500+", deliveries: "10k+", rating: "4.8" }
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleMenuClick = () => {
    document.getElementById('explore-menu')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="header">
      <div className="header-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="header-container">
        <div className={`header-content ${isVisible ? 'animate-fade-in' : ''}`}>
          <div className="header-badge animate-slide-in">
            <i className="fas fa-star"></i>
            <span>Rated #{currentSlideData.stats.rating} Food Delivery Service</span>
          </div>
          
          <h1 className="header-title gradient-text">
            {currentSlideData.title}
          </h1>
          
          <h2 className="header-subtitle">
            {currentSlideData.subtitle}
          </h2>
          
          <p className="header-description">
            {currentSlideData.description}
          </p>
          
          <div className="header-actions">
            <button className="btn-primary cta-button" onClick={handleMenuClick}>
              <i className="fas fa-utensils"></i>
              {currentSlideData.cta}
            </button>
            
            <button className="btn-outline play-button">
              <i className="fas fa-play"></i>
              Watch Video
            </button>
          </div>
          
          <div className="header-stats">
            <div className="stat-item">
              <div className="stat-number">{currentSlideData.stats.restaurants}</div>
              <div className="stat-label">Partner Restaurants</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">{currentSlideData.stats.deliveries}</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">{currentSlideData.stats.rating}</div>
              <div className="stat-label">Average Rating</div>
            </div>
          </div>
        </div>
        
        <div className="header-visual">
          <div className="food-showcase">
            <div className="showcase-card card-1 animate-slide-up">
              <div className="food-icon">
                <i className="fas fa-pizza-slice"></i>
              </div>
              <h4>Pizza</h4>
              <p>From $12.99</p>
            </div>
            
            <div className="showcase-card card-2 animate-slide-up">
              <div className="food-icon">
                <i className="fas fa-hamburger"></i>
              </div>
              <h4>Burgers</h4>
              <p>From $8.99</p>
            </div>
            
            <div className="showcase-card card-3 animate-slide-up">
              <div className="food-icon">
                <i className="fas fa-ice-cream"></i>
              </div>
              <h4>Desserts</h4>
              <p>From $5.99</p>
            </div>
          </div>
          
          <div className="floating-elements">
            <div className="floating-icon icon-1">
              <i className="fas fa-motorcycle"></i>
            </div>
            <div className="floating-icon icon-2">
              <i className="fas fa-clock"></i>
            </div>
            <div className="floating-icon icon-3">
              <i className="fas fa-heart"></i>
            </div>
          </div>
        </div>
      </div>
      
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slide-indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          >
          </button>
        ))}
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow animate-bounce">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
