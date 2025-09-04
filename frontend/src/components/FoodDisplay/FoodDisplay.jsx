import React, { useContext, useState, useEffect } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import { useSearchParams, useNavigate } from "react-router-dom";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('default');
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const searchQuery = searchParams.get('search');
  
  const clearSearch = () => {
    navigate('/');
  };

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [category]);

  useEffect(() => {
    let items = food_list.filter(item => {
      // If there's a search query, only filter by search (ignore category)
      if (searchQuery) {
        return item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
               item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
               item.category.toLowerCase().includes(searchQuery.toLowerCase());
      }
      
      // Otherwise, filter by category normally
      return category === "All" || category === item.category;
    });

    // Sort items based on sortBy value
    switch (sortBy) {
      case 'price-low':
        items = items.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        items = items.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        items = items.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        items = items.sort((a, b) => (Math.random() * 1 + 4) - (Math.random() * 1 + 4));
        break;
      default:
        // Default order
        break;
    }

    setFilteredItems(items);
  }, [food_list, category, sortBy, searchQuery]);

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  if (loading) {
    return (
      <div className="food-display" id="food-display">
        <div className="food-display-header">
          <div className="section-info">
            <h2 className="gradient-text">Loading delicious dishes...</h2>
          </div>
        </div>
        <div className="loading-grid">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="food-item-skeleton">
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
    );
  }

  return (
    <div className="food-display" id="food-display">
      <div className="food-display-header">
        <div className="section-info">
          <h2 className="gradient-text">
            {searchQuery ? `Search results for "${searchQuery}"` : 
             category === "All" ? "All Dishes" : category}
          </h2>
          <p className="section-description">
            {filteredItems.length} delicious {searchQuery ? "results" : 
             category === "All" ? "dishes" : category.toLowerCase()} 
            available for delivery
          </p>
          {searchQuery && (
            <button 
              className="clear-search-btn"
              onClick={clearSearch}
              title="Clear search and show all items"
            >
              <i className="fas fa-times"></i>
              Clear Search
            </button>
          )}
        </div>
        
        <div className="display-controls">
          <div className="sort-dropdown">
            <label htmlFor="sort-select">
              <i className="fas fa-sort"></i>
              Sort by:
            </label>
            <select 
              id="sort-select"
              value={sortBy} 
              onChange={(e) => handleSortChange(e.target.value)}
              className="sort-select"
            >
              <option value="default">Default</option>
              <option value="name">Name (A-Z)</option>
              <option value="price-low">Price (Low to High)</option>
              <option value="price-high">Price (High to Low)</option>
              <option value="rating">Rating</option>
            </select>
          </div>
          
          <div className="view-options">
            <button className="view-btn grid-view active" title="Grid View">
              <i className="fas fa-th"></i>
            </button>
            <button className="view-btn list-view" title="List View">
              <i className="fas fa-list"></i>
            </button>
          </div>
        </div>
      </div>

      {filteredItems.length === 0 ? (
        <div className="no-items-found">
          <div className="no-items-icon">
            <i className="fas fa-search"></i>
          </div>
          <h3>No dishes found</h3>
          <p>We couldn't find any {category.toLowerCase()} dishes. Try exploring other categories!</p>
        </div>
      ) : (
        <div className="food-display-list animate-fade-in">
          {filteredItems.map((item, index) => (
            <FoodItem
              key={item._id || index}
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
  );
};

export default FoodDisplay;
