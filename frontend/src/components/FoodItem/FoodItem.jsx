import React, { useContext, useState, useEffect } from "react";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url, favorites, addToFavorites, removeFromFavorites, token } = useContext(StoreContext);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showQuantityControls, setShowQuantityControls] = useState(false);

  // Generate random rating between 4.0 and 5.0
  const rating = (Math.random() * 1 + 4).toFixed(1);
  const isInCart = cartItems[id] > 0;
  const isFavorite = favorites && favorites[id];
  
  // Auto-hide quantity controls after adding items
  useEffect(() => {
    if (isInCart && showQuantityControls) {
      const timer = setTimeout(() => {
        setShowQuantityControls(false);
      }, 2000); // Hide after 2 seconds
      
      return () => clearTimeout(timer);
    } else if (!isInCart) {
      // Reset controls state when item is completely removed
      setShowQuantityControls(false);
    }
  }, [isInCart, showQuantityControls]);

  const handleAddToCart = async () => {
    if (isProcessing) return;
    setIsProcessing(true);
    
    try {
      await addToCart(id);
      // Show quantity controls temporarily after adding
      setShowQuantityControls(true);
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setTimeout(() => setIsProcessing(false), 300);
    }
  };

  const handleRemoveFromCart = async () => {
    if (isProcessing) return;
    setIsProcessing(true);
    
    try {
      await removeFromCart(id);
    } catch (error) {
      console.error('Error removing from cart:', error);
    } finally {
      setTimeout(() => setIsProcessing(false), 300);
    }
  };

  const handleToggleFavorite = async () => {
    if (isProcessing) return;
    
    // Only allow favorites for logged-in users
    if (!token) {
      return; // Do nothing for non-logged users
    }
    
    setIsProcessing(true);
    
    try {
      if (isFavorite) {
        await removeFromFavorites(id);
      } else {
        await addToFavorites(id);
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
    } finally {
      setTimeout(() => setIsProcessing(false), 300);
    }
  };

  return (
    <div 
      className={`food-item card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="food-item-img-container">
        <div className="image-wrapper">
          {!imageLoaded && (
            <div className="image-placeholder">
              <div className="spinner"></div>
            </div>
          )}
          <img 
            src={`${url}/images/${image}`} 
            alt={name}
            className={`food-item-image ${imageLoaded ? 'loaded' : ''}`}
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              e.target.src = '/placeholder-food.jpg';
              setImageLoaded(true);
            }}
          />
        </div>
        
        {/* Floating badges */}
        <div className="food-badges">
          <span className="rating-badge">
            <i className="fas fa-star"></i>
            {rating}
          </span>
          {Math.random() > 0.7 && (
            <span className="special-badge">Popular</span>
          )}
        </div>

        {/* Add/Remove Controls */}
        {!isInCart || !showQuantityControls ? (
          <button 
            className={`add-btn btn-primary ${isInCart ? 'in-cart' : ''} ${isProcessing ? 'processing' : ''}`}
            onClick={handleAddToCart}
            disabled={isProcessing}
            aria-label={isInCart ? `Add more ${name} to cart (${cartItems[id]} in cart)` : `Add ${name} to cart`}
          >
            {isProcessing ? (
              <i className="fas fa-spinner fa-spin"></i>
            ) : (
              <i className="fas fa-plus"></i>
            )}
            {isInCart && (
              <span className="in-cart-badge">{cartItems[id]}</span>
            )}
          </button>
        ) : (
          <div className="quantity-controls">
            <button 
              className={`quantity-btn decrease ${isProcessing ? 'processing' : ''}`}
              onClick={handleRemoveFromCart}
              disabled={isProcessing}
              aria-label="Decrease quantity"
            >
              <i className="fas fa-minus"></i>
            </button>
            <span className="quantity-display">{cartItems[id]}</span>
            <button 
              className={`quantity-btn increase ${isProcessing ? 'processing' : ''}`}
              onClick={handleAddToCart}
              disabled={isProcessing}
              aria-label="Increase quantity"
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
        )}
        
        {/* Favorite Button - Only show for logged-in users */}
        {token && (
          <button 
            className={`favorite-btn ${isFavorite ? 'active' : ''} ${isProcessing ? 'processing' : ''}`}
            onClick={handleToggleFavorite}
            disabled={isProcessing}
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isProcessing ? (
              <i className="fas fa-spinner fa-spin"></i>
            ) : (
              <i className={isFavorite ? 'fas fa-heart' : 'far fa-heart'}></i>
            )}
          </button>
        )}
      </div>
      
      <div className="food-item-content">
        <div className="food-header">
          <h3 className="food-name">{name}</h3>
          <div className="price-tag">
            <span className="currency">$</span>
            <span className="price-value">{price}</span>
          </div>
        </div>
        
        <p className="food-description">{description}</p>
        
        <div className="food-footer">
          <div className="food-meta">
            <span className="delivery-time">
              <i className="fas fa-clock"></i>
              20-30 min
            </span>
            <span className="category">
              <i className="fas fa-tag"></i>
              Fast Food
            </span>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default FoodItem;
