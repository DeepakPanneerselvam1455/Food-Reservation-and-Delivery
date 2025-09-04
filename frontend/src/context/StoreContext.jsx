/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4000"; // Local backend for development
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);
  const [favorites, setFavorites] = useState({});
  
  // Toast debouncing to prevent duplicate notifications
  const [lastActionTime, setLastActionTime] = useState({});
  const [isProcessing, setIsProcessing] = useState({});
  
  const canPerformAction = (actionKey, minInterval = 800) => {
    const now = Date.now();
    const lastTime = lastActionTime[actionKey] || 0;
    const isCurrentlyProcessing = isProcessing[actionKey];
    
    if (isCurrentlyProcessing || (now - lastTime < minInterval)) {
      return false;
    }
    
    setLastActionTime(prev => ({ ...prev, [actionKey]: now }));
    setIsProcessing(prev => ({ ...prev, [actionKey]: true }));
    
    // Clear processing state after action completes
    setTimeout(() => {
      setIsProcessing(prev => ({ ...prev, [actionKey]: false }));
    }, minInterval);
    
    return true;
  };

  const addToCart = async (itemId) => {
    const actionKey = `cart-add-${itemId}`;
    if (!canPerformAction(actionKey, 600)) return;
    
    try {
      let newCartItems;
      const isNewItem = !cartItems[itemId];
      
      if (isNewItem) {
        newCartItems = { ...cartItems, [itemId]: 1 };
      } else {
        newCartItems = { ...cartItems, [itemId]: cartItems[itemId] + 1 };
      }
      
      setCartItems(newCartItems);
      
      // Save to user-specific localStorage
      const cartKey = token ? `cartItems_${token}` : 'cartItems_guest';
      localStorage.setItem(cartKey, JSON.stringify(newCartItems));
      
      // Show success toast
      toast.success("Item Added to Cart");
      
      // Sync with backend if logged in
      if (token) {
        try {
          await axios.post(
            url + "/api/cart/add",
            { itemId },
            { headers: { token } }
          );
        } catch (error) {
          console.error("Backend cart sync error:", error);
        }
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Failed to add item to cart");
    }
  };

  const removeFromCart = async (itemId) => {
    const currentQuantity = cartItems[itemId] || 0;
    if (currentQuantity <= 0) return;
    
    const actionKey = `cart-remove-${itemId}`;
    if (!canPerformAction(actionKey, 600)) return;
    
    try {
      const newCartItems = { ...cartItems };
      newCartItems[itemId] = currentQuantity - 1;
      
      // Remove item completely if quantity reaches 0
      if (newCartItems[itemId] === 0) {
        delete newCartItems[itemId];
      }
      
      setCartItems(newCartItems);
      
      // Save to user-specific localStorage
      const cartKey = token ? `cartItems_${token}` : 'cartItems_guest';
      localStorage.setItem(cartKey, JSON.stringify(newCartItems));
      
      // Show success toast
      toast.success("Item Removed from Cart");
      
      // Sync with backend if logged in
      if (token) {
        try {
          await axios.post(
            url + "/api/cart/remove",
            { itemId },
            { headers: { token } }
          );
        } catch (error) {
          console.error("Backend cart sync error:", error);
        }
      }
    } catch (error) {
      console.error("Error removing from cart:", error);
      toast.error("Failed to remove item from cart");
    }
  };

  const addToFavorites = async (itemId) => {
    // Only allow favorites for logged-in users
    if (!token) {
      toast.error("Please login to add favorites");
      return;
    }
    
    // Check if already favorited
    if (favorites[itemId]) return;
    
    const actionKey = `fav-add-${itemId}`;
    if (!canPerformAction(actionKey, 600)) return;
    
    try {
      const newFavorites = { ...favorites, [itemId]: true };
      setFavorites(newFavorites);
      
      // Save to user-specific localStorage
      const favKey = `favorites_${token}`;
      localStorage.setItem(favKey, JSON.stringify(newFavorites));
      
      // Show success toast
      toast.success("Added to favorites");
      
      // Sync with backend
      try {
        await axios.post(
          url + "/api/favorites/add",
          { itemId },
          { headers: { token } }
        );
      } catch (error) {
        console.error("Backend favorites sync error:", error);
      }
    } catch (error) {
      console.error("Error adding to favorites:", error);
      toast.error("Failed to add to favorites");
    }
  };

  const removeFromFavorites = async (itemId) => {
    // Only allow favorites for logged-in users
    if (!token) {
      toast.error("Please login to manage favorites");
      return;
    }
    
    // Check if not favorited
    if (!favorites[itemId]) return;
    
    const actionKey = `fav-remove-${itemId}`;
    if (!canPerformAction(actionKey, 600)) return;
    
    try {
      const newFavorites = { ...favorites };
      delete newFavorites[itemId];
      setFavorites(newFavorites);
      
      // Save to user-specific localStorage
      const favKey = `favorites_${token}`;
      localStorage.setItem(favKey, JSON.stringify(newFavorites));
      
      // Show success toast
      toast.success("Removed from favorites");
      
      // Sync with backend
      try {
        await axios.post(
          url + "/api/favorites/remove",
          { itemId },
          { headers: { token } }
        );
      } catch (error) {
        console.error("Backend favorites sync error:", error);
      }
    } catch (error) {
      console.error("Error removing from favorites:", error);
      toast.error("Failed to remove from favorites");
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        } else {
          console.warn(`Product with ID ${item} not found in food_list`);
        }
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async () => {
    try {
      const response = await axios.get(url + "/api/food/list");
      if (response.data.success) {
        setFoodList(response.data.data);
      } else {
        alert("Error! Products are not fetching..");
      }
    } catch (error) {
      alert("Error fetching products");
    }
  };

  const loadCardData = async (token) => {
    try {
      const response = await axios.post(
        url + "/api/cart/get",
        {},
        { headers: { token } }
      );
      setCartItems(response.data.cartData);
    } catch (error) {
      console.error("Error loading cart data", error);
    }
  };

  // Load user-specific data when token changes
  useEffect(() => {
    if (token) {
      // Load user-specific cart
      const cartKey = `cartItems_${token}`;
      const savedCartItems = localStorage.getItem(cartKey);
      if (savedCartItems) {
        try {
          const parsedCart = JSON.parse(savedCartItems);
          setCartItems(parsedCart);
        } catch (error) {
          console.error('Error parsing user cart items:', error);
          localStorage.removeItem(cartKey);
        }
      } else {
        setCartItems({}); // Clear cart for new user
      }
      
      // Load user-specific favorites
      const favKey = `favorites_${token}`;
      const savedFavorites = localStorage.getItem(favKey);
      if (savedFavorites) {
        try {
          const parsedFavorites = JSON.parse(savedFavorites);
          setFavorites(parsedFavorites);
        } catch (error) {
          console.error('Error parsing user favorites:', error);
          localStorage.removeItem(favKey);
        }
      } else {
        setFavorites({}); // Clear favorites for new user
      }
      
      // Sync with backend
      loadCardData(token).catch(error => {
        console.error('Error syncing cart with backend:', error);
      });
    } else {
      // Load guest cart only
      const guestCartKey = 'cartItems_guest';
      const savedGuestCart = localStorage.getItem(guestCartKey);
      if (savedGuestCart) {
        try {
          const parsedCart = JSON.parse(savedGuestCart);
          setCartItems(parsedCart);
        } catch (error) {
          console.error('Error parsing guest cart:', error);
          localStorage.removeItem(guestCartKey);
          setCartItems({});
        }
      } else {
        setCartItems({});
      }
      
      // Clear favorites for non-logged users
      setFavorites({});
    }
  }, [token]);
  
  // Initialize app
  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      
      // Set token if exists
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
      }
    }
    loadData();
  }, []);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    favorites,
    addToFavorites,
    removeFromFavorites,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
