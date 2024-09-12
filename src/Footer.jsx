import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Pokémon Cards</h2>
          <p>
            Catch your favorite Pokémon and explore details about each one. Search, discover, and learn more!
          </p>
        </div>
        <div className="footer-section">
          <p>Created by Amit Jamwal</p>
        </div>
        <div className="footer-section social">
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Pokémon Cards. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
