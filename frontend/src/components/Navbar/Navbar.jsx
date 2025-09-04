import React, { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { toast } from "react-toastify";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalCartAmount, token, setToken, cartItems } = useContext(StoreContext);
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Search functionality
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
      setShowSearch(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    toast.success("Logout Successfully");
    navigate("/");
  };

  const menuItems = [
    { id: "home", label: "Home", to: "/", type: "link" },
    { id: "menu", label: "Menu", href: "#explore-menu", type: "anchor" },
    { id: "mobile-app", label: "App", href: "#app-download", type: "anchor" },
    { id: "contact-us", label: "Contact", href: "#footer", type: "anchor" },
  ];

  const handleMenuClick = (itemId) => {
    setMenu(itemId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo" onClick={() => setMenu("home")}>
            <Logo size="small" />
          </Link>

          {/* Desktop Menu */}
          <ul className="navbar-menu">
            {menuItems.map((item) => (
              item.type === "link" ? (
                <li key={item.id}>
                  <Link
                    to={item.to}
                    onClick={() => handleMenuClick(item.id)}
                    className={`navbar-menu-item ${menu === item.id ? "active" : ""}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ) : (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => handleMenuClick(item.id)}
                    className={`navbar-menu-item ${menu === item.id ? "active" : ""}`}
                  >
                    {item.label}
                  </a>
                </li>
              )
            ))}
          </ul>

          {/* Right Side Actions */}
          <div className="navbar-right">
            {/* Search Icon */}
            <button 
              className="navbar-icon-btn search-btn" 
              aria-label="Search"
              onClick={() => setShowSearch(!showSearch)}
            >
              <i className="fas fa-search"></i>
            </button>
            
            {/* Search Popup */}
            {showSearch && (
              <div className="search-popup">
                <form onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="Search for dishes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                  <button type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                </form>
                <button 
                  className="close-search" 
                  onClick={() => setShowSearch(false)}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            )}
            
            {/* Favorites Icon - Only show for logged-in users */}
            {token && (
              <Link to="/favorites" className="navbar-icon-btn favorites-btn" title="My Favorites">
                <i className="fas fa-heart"></i>
                {Object.keys(JSON.parse(localStorage.getItem(`favorites_${token}`) || '{}')).length > 0 && (
                  <span className="favorites-badge animate-bounce">
                    {Object.keys(JSON.parse(localStorage.getItem(`favorites_${token}`) || '{}')).length}
                  </span>
                )}
              </Link>
            )}
            
            {/* Cart Icon */}
            <Link to="/cart" className="navbar-icon-btn cart-btn">
              <i className="fas fa-shopping-cart"></i>
              {getTotalCartAmount() > 0 && (
                <span className="cart-badge animate-bounce">
                  {Object.values(cartItems).reduce((total, quantity) => total + quantity, 0)}
                </span>
              )}
            </Link>

            {/* Auth Section */}
            {!token ? (
              <button 
                className="btn-primary sign-in-btn" 
                onClick={() => setShowLogin(true)}
              >
                <i className="fas fa-user"></i>
                Sign In
              </button>
            ) : (
              <div className="navbar-profile">
                <button className="profile-btn">
                  <div className="profile-avatar">
                    <i className="fas fa-user"></i>
                  </div>
                </button>
                <ul className="profile-dropdown">
                  <li onClick={() => navigate("/favorites")}>
                    <i className="fas fa-heart"></i>
                    <span>My Favorites</span>
                  </li>
                  <li onClick={() => navigate("/myorders")}>
                    <i className="fas fa-box"></i>
                    <span>My Orders</span>
                  </li>
                  <li onClick={logout}>
                    <i className="fas fa-sign-out-alt"></i>
                    <span>Logout</span>
                  </li>
                </ul>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <Logo size="small" />
            <button 
              className="close-mobile-menu"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <ul className="mobile-menu-items">
            {menuItems.map((item) => (
              item.type === "link" ? (
                <li key={item.id}>
                  <Link
                    to={item.to}
                    onClick={() => handleMenuClick(item.id)}
                    className={`mobile-menu-item ${menu === item.id ? "active" : ""}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ) : (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => handleMenuClick(item.id)}
                    className={`mobile-menu-item ${menu === item.id ? "active" : ""}`}
                  >
                    {item.label}
                  </a>
                </li>
              )
            ))}
          </ul>
          {!token ? (
            <button 
              className="btn-primary mobile-sign-in" 
              onClick={() => {
                setShowLogin(true);
                setIsMobileMenuOpen(false);
              }}
            >
              <i className="fas fa-user"></i>
              Sign In
            </button>
          ) : (
            <div className="mobile-profile-actions">
              <button 
                className="mobile-profile-btn"
                onClick={() => {
                  navigate("/favorites");
                  setIsMobileMenuOpen(false);
                }}
              >
                <i className="fas fa-heart"></i>
                My Favorites
              </button>
              <button 
                className="mobile-profile-btn"
                onClick={() => {
                  navigate("/myorders");
                  setIsMobileMenuOpen(false);
                }}
              >
                <i className="fas fa-box"></i>
                My Orders
              </button>
              <button className="mobile-profile-btn logout" onClick={logout}>
                <i className="fas fa-sign-out-alt"></i>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
