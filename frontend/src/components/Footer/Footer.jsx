import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";
import Logo from "../Logo/Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <Logo size="medium" />
            <p className="footer-description">
              Delicious food delivered fast to your doorstep. We partner with the best 
              local restaurants to bring you fresh, high-quality meals with our 
              lightning-fast delivery network.
            </p>
            <div className="footer-social">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#" className="social-link facebook" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link twitter" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link instagram" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-link linkedin" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/#explore-menu">Menu</a></li>
              <li><a href="/#app-download">Mobile App</a></li>
              <li><a href="/favorites">My Favorites</a></li>
              <li><a href="/myorders">My Orders</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="footer-section">
            <h3>Company</h3>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div className="footer-section">
            <h3>Support</h3>
            <ul className="footer-links">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Safety</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="footer-section footer-contact">
            <h3>Get in Touch</h3>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+92-308-4900522</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>contact@fooddelivery.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>123 Food Street, Delivery City, DC 12345</span>
              </div>
            </div>
            
            {/* App Download */}
            <div className="app-download">
              <h4>Download Our App</h4>
              <div className="download-buttons">
                <a href="#" className="download-btn">
                  <img src={assets.app_store} alt="Download on App Store" />
                </a>
                <a href="#" className="download-btn">
                  <img src={assets.play_store} alt="Get it on Google Play" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Food Delivery. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
