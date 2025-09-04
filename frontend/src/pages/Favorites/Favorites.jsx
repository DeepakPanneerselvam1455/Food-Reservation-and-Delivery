import React, { useContext, useState, useEffect } from 'react';
import './Favorites.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../../components/FoodItem/FoodItem';

const Favorites = () => {
  const { favorites, food_list, token } = useContext(StoreContext);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // Filter food items that are in favorites (works for all users)
    const favItems = food_list.filter(item => favorites && favorites[item._id]);
    setFavoriteItems(favItems);
    
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [favorites, food_list]);

  // Remove login requirement - favorites work for all users via localStorage

  if (loading) {
    return (
      <div className="favorites-page">
        <div className="favorites-container">
          <div className="favorites-header">
            <h1 className="gradient-text">My Favorites</h1>
            <p>Loading your favorite dishes...</p>
          </div>
          <div className="loading-grid">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="favorite-item-skeleton">
                <div className="skeleton-image"></div>
                <div className="skeleton-content">
                  <div className="skeleton-title"></div>
                  <div className="skeleton-description"></div>
                  <div className="skeleton-price"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-page">
      <div className="favorites-container">
        <div className="favorites-header">
          <div className="header-content">
            <h1 className="gradient-text">
              <i className="fas fa-heart"></i>
              My Favorites
            </h1>
            <p className="header-description">
              {favoriteItems.length > 0 
                ? `You have ${favoriteItems.length} favorite ${favoriteItems.length === 1 ? 'dish' : 'dishes'} saved${!token ? ' locally' : ''}`
                : 'Start adding dishes to your favorites by clicking the heart icon!'
              }
              {!token && (
                <span className="login-hint">
                  <i className="fas fa-info-circle"></i>
                  Sign in to sync your favorites across devices
                </span>
              )}
            </p>
          </div>
          
          {favoriteItems.length > 0 && (
            <div className="favorites-stats">
              <div className="stat-card">
                <div className="stat-number">{favoriteItems.length}</div>
                <div className="stat-label">Saved Items</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">
                  {favoriteItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
                </div>
                <div className="stat-label">Total Value</div>
              </div>
            </div>
          )}
        </div>

        {favoriteItems.length === 0 ? (
          <div className="empty-favorites">
            <div className="empty-icon">
              <i className="far fa-heart"></i>
            </div>
            <h3>No favorites yet</h3>
            <p>
              Discover delicious dishes and save them here by clicking the heart icon. 
              Your favorites will be saved to your account!
            </p>
            <button 
              className="btn-primary explore-btn"
              onClick={() => window.location.href = '/#explore-menu'}
            >
              <i className="fas fa-utensils"></i>
              Explore Menu
            </button>
          </div>
        ) : (
          <div className="favorites-grid">
            {favoriteItems.map((item) => (
              <FoodItem
                key={item._id}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
